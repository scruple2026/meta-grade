#!/usr/bin/env node
"use strict";

const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SOFT_STATUS = new Set([401, 403, 405, 429]);
const MAX_MEDIAWIKI_BODY_BYTES = 512 * 1024;

main().catch((error) => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
});

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const data = loadDataScripts(parseIndexScripts().filter((src) => src.startsWith("data/")));
  const links = collectLinks(data);
  if (args.dryRun) {
    console.log(`collected ${links.length} unique link(s)`);
    for (const link of links) {
      console.log(`${link.kind}\t${link.owner}\t${link.url}`);
    }
    return;
  }

  const timeoutMs = Number(args.timeout || 8000);
  const concurrency = Number(args.concurrency || 6);
  const results = await mapLimit(links, concurrency, (link) => checkLink(link, timeoutMs));
  const failures = results.filter((result) => result.status === "fail");
  const soft = results.filter((result) => result.status === "soft");

  printResults(results, args);

  console.log(`checked ${results.length} link(s): ${results.length - failures.length - soft.length} ok, ${soft.length} soft, ${failures.length} failed`);
  if (failures.length || (soft.length && args.strict)) {
    process.exitCode = 1;
  }
}

function parseIndexScripts() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  return [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)].map((match) => normalizePath(match[1]));
}

function loadDataScripts(scriptSources) {
  const context = vm.createContext({ console, window: {} });
  context.window.window = context.window;
  for (const src of scriptSources) {
    const abs = path.join(ROOT, src);
    if (!fs.existsSync(abs)) continue;
    vm.runInContext(fs.readFileSync(abs, "utf8"), context, { filename: src });
  }
  return context.window;
}

function collectLinks(data) {
  const seen = new Map();
  const push = (kind, owner, link) => {
    if (!link || !link.url || seen.has(link.url)) return;
    seen.set(link.url, {
      kind,
      owner,
      label: link.label || "",
      claim: link.claim || "",
      url: link.url
    });
  };

  for (const [work, source] of Object.entries(data.POWER_WIKI_WORK_SOURCES || {})) {
    for (const link of asArray(source.canonicalLinks)) push("canonical", work, link);
    for (const link of asArray(source.commonLinks)) push("work", work, link);
    for (const link of asArray(source.scaleEvidenceLinks)) push("scale", work, link);
  }
  for (const character of asArray(data.POWER_WIKI_CHARACTERS)) {
    const owner = `${character.work || "unknown"}/${character.id || character.name || "unknown"}`;
    for (const link of asArray(character.links)) push("character", owner, link);
    for (const link of asArray(character.evidenceLinks)) push("evidence", owner, link);
  }
  return [...seen.values()].sort((a, b) => a.url.localeCompare(b.url));
}

async function checkLink(link, timeoutMs) {
  if (!/^https?:\/\//i.test(link.url)) {
    return { ...link, status: "soft", message: "non-http URL" };
  }
  try {
    const response = await request(link.url, "HEAD", timeoutMs, 0);
    return classifyWithContentHint(link, response, timeoutMs);
  } catch (error) {
    try {
      const response = await request(link.url, "GET", timeoutMs, 0);
      return classifyWithContentHint(link, response, timeoutMs);
    } catch (fallbackError) {
      return { ...link, status: "fail", message: fallbackError.message };
    }
  }
}

async function classifyWithContentHint(link, response, timeoutMs) {
  const result = classify(link, response);
  if (result.status !== "soft") return result;
  const readable = await mediaWikiReadable(link.url, timeoutMs);
  if (!readable.readable) return result;
  return {
    ...result,
    mediaWikiReadable: true,
    mediaWikiMethod: readable.method,
    message: `${result.message}; MediaWiki API READABLE, rating support not verified`
  };
}

function classify(link, response) {
  const httpStatus = response.statusCode;
  if (httpStatus >= 200 && httpStatus < 400) return { ...link, status: "ok", httpStatus };
  if (SOFT_STATUS.has(httpStatus)) {
    return { ...link, status: "soft", httpStatus, message: "access blocked or rate-limited; content not read" };
  }
  return { ...link, status: "fail", httpStatus };
}

function printResults(results, args) {
  if (args.verbose) {
    for (const result of results) {
      console.log(formatResultLine(result));
    }
    return;
  }

  const failures = results.filter((result) => result.status === "fail");
  const soft = results.filter((result) => result.status === "soft");
  if (failures.length) {
    console.log("Hard failures:");
    failures.forEach((result) => console.log(formatResultLine(result)));
  } else {
    console.log("Hard failures: none");
  }

  if (!soft.length) return;
  const readable = soft.filter((result) => result.mediaWikiReadable).length;
  const blocked = soft.length - readable;
  console.log(`Soft links: ${soft.length} total (${readable} MediaWiki API readable, ${blocked} direct blocked/limited/non-http).`);
  console.log("Soft links are not treated as rating evidence; run with --verbose for the full per-link list.");
  if (args.strict) {
    console.log("--strict is enabled, so soft links will still fail this run.");
  }
}

function formatResultLine(result) {
  const code = result.httpStatus ? ` ${result.httpStatus}` : "";
  const suffix = result.message ? ` ${result.message}` : "";
  return `${result.status.toUpperCase()}${code}\t${result.owner}\t${result.url}${suffix}`;
}

async function mediaWikiReadable(rawUrl, timeoutMs) {
  const readers = mediaWikiReaders(rawUrl);
  for (const reader of readers) {
    const response = await requestBody(reader.url, timeoutMs);
    if (response.error || response.statusCode < 200 || response.statusCode >= 400) continue;
    const parsed = reader.parse(response.body);
    if (parsed.readable) return { readable: true, method: reader.method, bytes: parsed.bytes };
  }
  return { readable: false };
}

function mediaWikiReaders(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch (_error) {
    return [];
  }
  const host = parsed.hostname.toLowerCase();
  const title = pageTitle(parsed);
  if (!title) return [];
  if (host.endsWith(".fandom.com")) {
    return [
      mediaWikiParseReader(parsed.origin, title, "wikitext"),
      mediaWikiParseReader(parsed.origin, title, "text")
    ];
  }
  if (host === "jojowiki.com") {
    return [
      mediaWikiExtractReader(parsed.origin, title),
      mediaWikiParseReader(parsed.origin, title, "wikitext")
    ];
  }
  if (host === "zh.moegirl.org.cn" || host === "moegirl.icu") {
    return [mediaWikiExtractReader("https://zh.moegirl.org.cn", title)];
  }
  return [];
}

function mediaWikiParseReader(origin, title, prop) {
  const url = new URL(`${origin}/api.php`);
  url.searchParams.set("action", "parse");
  url.searchParams.set("page", title);
  url.searchParams.set("prop", prop);
  url.searchParams.set("format", "json");
  url.searchParams.set("redirects", "1");
  return {
    method: `mediawiki-parse-${prop}`,
    url: url.toString(),
    parse(body) {
      const data = parseJson(body);
      const value = prop === "wikitext"
        ? data && data.parse && data.parse.wikitext && data.parse.wikitext["*"]
        : data && data.parse && data.parse.text && data.parse.text["*"];
      const bytes = Buffer.byteLength(String(value || ""));
      return { readable: bytes > 0, bytes };
    }
  };
}

function mediaWikiExtractReader(origin, title) {
  const url = new URL(`${origin}/api.php`);
  url.searchParams.set("action", "query");
  url.searchParams.set("prop", "extracts");
  url.searchParams.set("explaintext", "1");
  url.searchParams.set("titles", title);
  url.searchParams.set("format", "json");
  url.searchParams.set("redirects", "1");
  return {
    method: "mediawiki-query-extracts",
    url: url.toString(),
    parse(body) {
      const data = parseJson(body);
      const pages = data && data.query && data.query.pages ? Object.values(data.query.pages) : [];
      const text = pages.map((page) => page.extract || "").join("\n");
      const bytes = Buffer.byteLength(text);
      return { readable: bytes > 0, bytes };
    }
  };
}

function pageTitle(parsed) {
  const pathname = decodeURIComponent(parsed.pathname || "").replace(/^\/+/, "");
  if (!pathname || pathname === "api.php") return "";
  if (pathname.startsWith("wiki/")) return pathname.slice("wiki/".length).replace(/_/g, " ");
  return pathname.replace(/_/g, " ");
}

function request(url, method, timeoutMs, redirects) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "http:" ? http : https;
    const req = client.request(parsed, {
      method,
      timeout: timeoutMs,
      headers: {
        "user-agent": "meta-grade-link-check/1.0",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      }
    }, (res) => {
      const location = res.headers.location;
      res.resume();
      if (res.statusCode >= 300 && res.statusCode < 400 && location) {
        if (redirects >= 5) {
          reject(new Error("too many redirects"));
          return;
        }
        const next = new URL(location, parsed).toString();
        resolve(request(next, method, timeoutMs, redirects + 1));
        return;
      }
      resolve({ statusCode: res.statusCode });
    });
    req.on("timeout", () => {
      req.destroy(new Error(`timeout after ${timeoutMs}ms`));
    });
    req.on("error", reject);
    req.end();
  });
}

function requestBody(url, timeoutMs, redirects = 0) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "http:" ? http : https;
    const req = client.request(parsed, {
      method: "GET",
      timeout: timeoutMs,
      headers: {
        "user-agent": "meta-grade-link-check/1.0",
        accept: "application/json,text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.5"
      }
    }, (res) => {
      const location = res.headers.location;
      if (res.statusCode >= 300 && res.statusCode < 400 && location) {
        res.resume();
        if (redirects >= 5) {
          resolve({ error: "too many redirects" });
          return;
        }
        resolve(requestBody(new URL(location, parsed).toString(), timeoutMs, redirects + 1));
        return;
      }
      let body = "";
      let bytes = 0;
      let done = false;
      const finish = (truncated = false) => {
        if (done) return;
        done = true;
        resolve({ statusCode: res.statusCode, body, bytes, truncated });
      };
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        bytes += Buffer.byteLength(chunk);
        if (body.length < MAX_MEDIAWIKI_BODY_BYTES) {
          body += chunk.slice(0, MAX_MEDIAWIKI_BODY_BYTES - body.length);
        }
        if (bytes >= MAX_MEDIAWIKI_BODY_BYTES) {
          res.destroy();
          finish(true);
        }
      });
      res.on("end", () => finish(false));
      res.on("error", () => finish(bytes >= MAX_MEDIAWIKI_BODY_BYTES));
    });
    req.on("timeout", () => {
      req.destroy();
      resolve({ error: `timeout after ${timeoutMs}ms` });
    });
    req.on("error", (error) => resolve({ error: error.message }));
    req.end();
  });
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function run() {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, limit) }, run));
  return results;
}

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value.startsWith("--")) continue;
    const key = value.slice(2).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    if (["dryRun", "strict", "verbose"].includes(key)) {
      args[key] = true;
    } else {
      args[key] = argv[index + 1] || "";
      index += 1;
    }
  }
  return args;
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePath(value) {
  return String(value || "").replace(/\\/g, "/").replace(/^\.\//, "");
}

function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch (_error) {
    return null;
  }
}

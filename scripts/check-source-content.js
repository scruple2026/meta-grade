#!/usr/bin/env node
"use strict";

const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const MAX_BODY_BYTES = 1024 * 1024;
const SMALL_CONTENT_BYTES = 500;
const BLOCKED_CONTENT_PATTERNS = [
  /百度安全验证/,
  /访问过于频繁/,
  /请输入验证码/
];

main().catch((error) => {
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
});

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const data = loadDataScripts(parseIndexScripts().filter((src) => src.startsWith("data/")));
  const links = collectLinks(data);
  const timeoutMs = Number(args.timeout || 12000);
  const concurrency = Number(args.concurrency || 3);
  const results = await mapLimit(links, concurrency, (link) => readLinkContent(link, timeoutMs));
  const readable = results.filter((result) => result.status === "readable");
  const unsupported = results.filter((result) => result.status === "unsupported");
  const blocked = results.filter((result) => result.status === "blocked");
  const failed = results.filter((result) => result.status === "failed");

  for (const result of results) {
    const detail = [
      result.method,
      result.httpStatus ? `HTTP ${result.httpStatus}` : "",
      result.bytes ? `${result.bytes} byte(s)` : "",
      result.message || ""
    ].filter(Boolean).join(" / ");
    console.log(`${result.status.toUpperCase()}\t${result.owner}\t${result.url}${detail ? `\t${detail}` : ""}`);
  }

  console.log(`checked ${results.length} link(s): ${readable.length} readable, ${unsupported.length} unsupported, ${blocked.length} blocked, ${failed.length} failed`);
  if (failed.length || (blocked.length && args.strict)) {
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

async function readLinkContent(link, timeoutMs) {
  let parsed;
  try {
    parsed = new URL(link.url);
  } catch (error) {
    return { ...link, status: "unsupported", message: "invalid URL" };
  }
  if (!/^https?:$/i.test(parsed.protocol)) {
    return { ...link, status: "unsupported", message: "non-http URL" };
  }

  const readers = contentReaders(parsed);
  for (const reader of readers) {
    const response = await requestBody(reader.url, timeoutMs);
    if (response.error) continue;
    const parsedBody = reader.parse(response.body);
    if (parsedBody.blocked) {
      return {
        ...link,
        status: "blocked",
        method: reader.method,
        httpStatus: response.statusCode,
        bytes: parsedBody.bytes,
        message: parsedBody.message || "access blocked or rate-limited; content not read"
      };
    }
    if (response.statusCode >= 200 && response.statusCode < 400 && parsedBody.readable) {
      return {
        ...link,
        status: "readable",
        method: reader.method,
        httpStatus: response.statusCode,
        bytes: parsedBody.bytes,
        message: contentReadMessage(response.truncated, parsedBody.bytes)
      };
    }
    if ([401, 403, 405, 429].includes(response.statusCode)) {
      return {
        ...link,
        status: "blocked",
        method: reader.method,
        httpStatus: response.statusCode,
        message: "access blocked or rate-limited; content not read"
      };
    }
  }

  return { ...link, status: "failed", message: "no readable content path found" };
}

function contentReaders(parsed) {
  const host = parsed.hostname.toLowerCase();
  const page = pageTitle(parsed);
  if (host.endsWith(".fandom.com") && page) {
    return [
      mediaWikiParseReader(parsed.origin, page, "wikitext"),
      mediaWikiParseReader(parsed.origin, page, "text")
    ];
  }
  if (host === "jojowiki.com" && page) {
    return [
      mediaWikiExtractReader(parsed.origin, page),
      mediaWikiParseReader(parsed.origin, page, "wikitext")
    ];
  }
  if ((host === "moegirl.icu" || host === "zh.moegirl.org.cn") && page) {
    return [
      mediaWikiExtractReader("https://zh.moegirl.org.cn", page)
    ];
  }
  return [directHtmlReader(parsed.toString())];
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

function directHtmlReader(url) {
  return {
    method: "direct-get",
    url,
    parse(body) {
      const bytes = Buffer.byteLength(body || "");
      const blockedMessage = blockedContentMessage(body);
      if (blockedMessage) {
        return { readable: false, blocked: true, bytes, message: blockedMessage };
      }
      return { readable: bytes > 0, bytes };
    }
  };
}

function blockedContentMessage(body) {
  const text = String(body || "");
  if (!text) return "";
  if (BLOCKED_CONTENT_PATTERNS.some((pattern) => pattern.test(text))) {
    return "access blocked or rate-limited; content not read";
  }
  return "";
}

function contentReadMessage(truncated, bytes) {
  if (truncated) return "content sampled, body truncated";
  if (bytes > 0 && bytes < SMALL_CONTENT_BYTES) return "small content; verify manually";
  return "";
}

function pageTitle(parsed) {
  const pathname = decodeURIComponent(parsed.pathname || "").replace(/^\/+/, "");
  if (!pathname || pathname === "api.php") return "";
  if (pathname.startsWith("wiki/")) return pathname.slice("wiki/".length).replace(/_/g, " ");
  return pathname.replace(/_/g, " ");
}

function requestBody(url, timeoutMs, redirects = 0) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "http:" ? http : https;
    const req = client.request(parsed, {
      method: "GET",
      timeout: timeoutMs,
      headers: {
        "user-agent": "meta-grade-source-content-check/1.0",
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
        if (body.length < MAX_BODY_BYTES) {
          body += chunk.slice(0, MAX_BODY_BYTES - body.length);
        }
        if (bytes >= MAX_BODY_BYTES) {
          res.destroy();
          finish(true);
        }
      });
      res.on("end", () => finish(false));
      res.on("error", () => finish(bytes >= MAX_BODY_BYTES));
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
    if (key === "strict") {
      args[key] = true;
    } else {
      args[key] = argv[index + 1] || "";
      index += 1;
    }
  }
  return args;
}

function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePath(value) {
  return String(value || "").replace(/\\/g, "/").replace(/^\.\//, "");
}

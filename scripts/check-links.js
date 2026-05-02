#!/usr/bin/env node
"use strict";

const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SOFT_STATUS = new Set([401, 403, 405, 429]);

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

  for (const result of results) {
    const code = result.httpStatus ? ` ${result.httpStatus}` : "";
    const suffix = result.message ? ` ${result.message}` : "";
    console.log(`${result.status.toUpperCase()}${code}\t${result.owner}\t${result.url}${suffix}`);
  }

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
    return classify(link, response);
  } catch (error) {
    try {
      const response = await request(link.url, "GET", timeoutMs, 0);
      return classify(link, response);
    } catch (fallbackError) {
      return { ...link, status: "fail", message: fallbackError.message };
    }
  }
}

function classify(link, response) {
  const httpStatus = response.statusCode;
  if (httpStatus >= 200 && httpStatus < 400) return { ...link, status: "ok", httpStatus };
  if (SOFT_STATUS.has(httpStatus)) {
    return { ...link, status: "soft", httpStatus, message: "access blocked or rate-limited; content not read" };
  }
  return { ...link, status: "fail", httpStatus };
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
    if (["dryRun", "strict"].includes(key)) {
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

#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

main();

function main() {
  const args = parseArgs(process.argv.slice(2));
  const workSlug = args._[0];
  const workName = args.name || args._[1];
  if (!workSlug || !workName) {
    usage();
    process.exitCode = 1;
    return;
  }
  assertSafeSlug(workSlug, "work-slug");

  const workFile = path.join(ROOT, "data/works", `${workSlug}.js`);
  if (fs.existsSync(workFile)) fail(`Work file already exists: ${relative(workFile)}`);

  fs.writeFileSync(workFile, renderWorkFile({
    slug: workSlug,
    name: workName,
    originalLanguage: args.originalLanguage || "",
    pageLabel: args.pageLabel || `${workName} 角色页`,
    pageBase: args.pageBase || "",
    sourceLabel: args.sourceLabel || `${workName} 作品入口`,
    sourceUrl: args.sourceUrl || ""
  }));
  fs.mkdirSync(path.join(ROOT, "data/characters", workSlug), { recursive: true });
  insertWorkManifest(`data/works/${workSlug}.js`);
  insertWorkScript(`data/works/${workSlug}.js`);

  console.log(`created data/works/${workSlug}.js`);
  console.log(`created data/characters/${workSlug}/`);
  console.log("next: add a compact serious character shortlist, then run node scripts/validate-data.js");
}

function renderWorkFile(meta) {
  const commonLinks = meta.sourceUrl
    ? `[
      {
        label: "${escapeJs(meta.sourceLabel)}",
        url: "${escapeJs(meta.sourceUrl)}"
      }
    ]`
    : "[]";
  return `(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "${escapeJs(meta.name)}";

  registerWorkSource(WORK, {
    slug: "${escapeJs(meta.slug)}",
    originalLanguage: "${escapeJs(meta.originalLanguage)}",
    pageLabel: "${escapeJs(meta.pageLabel)}",
    pageBase: "${escapeJs(meta.pageBase)}",
    canonicalLinks: [],
    commonLinks: ${commonLinks},
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前只收录主角团、核心战斗角色和最终 Boss / 中央反派；长尾角色等待明确需求或社区 PR。",
      versionPolicy: "按作品自身篇章和形态拆分时间线，不把外传、续作或临时峰值混入稳定常态。",
      highRisk: [],
      conservativeNotes: "称号、危险等级、剧情评价和特殊权能不自动抬高主面板。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补原作卷话、集数、设定书或官方资料链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();
`;
}

function insertWorkManifest(scriptPath) {
  const file = path.join(ROOT, "data/characters.js");
  const source = fs.readFileSync(file, "utf8");
  if (source.includes(`"${scriptPath}"`)) return;
  const marker = "  ];\n  window.POWER_WIKI_CHARACTER_FILES";
  const index = source.indexOf(marker);
  if (index < 0) fail("Could not find POWER_WIKI_WORK_FILES closing marker in data/characters.js");
  const before = source.slice(0, index).replace(/\n\s*$/, "");
  const comma = before.trim().endsWith("[") ? "" : ",";
  fs.writeFileSync(file, `${before}${comma}\n    "${scriptPath}"\n${source.slice(index)}`);
}

function insertWorkScript(scriptPath) {
  const file = path.join(ROOT, "index.html");
  const source = fs.readFileSync(file, "utf8");
  const tag = `    <script src="${scriptPath}"></script>`;
  if (source.includes(tag.trim())) return;
  const matches = [...source.matchAll(/^    <script src="data\/works\/[^"]+"><\/script>$/gm)];
  if (!matches.length) fail("Could not find work script block in index.html");
  const last = matches[matches.length - 1];
  const position = last.index + last[0].length;
  fs.writeFileSync(file, `${source.slice(0, position)}\n${tag}${source.slice(position)}`);
}

function parseArgs(argv) {
  const result = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value.startsWith("--")) {
      const key = value.slice(2);
      result[key] = argv[index + 1] || "";
      index += 1;
    } else {
      result._.push(value);
    }
  }
  return result;
}

function assertSafeSlug(value, label) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(value)) {
    fail(`${label} must use lowercase letters, digits, and hyphens only: ${value}`);
  }
}

function escapeJs(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}

function relative(file) {
  return path.relative(ROOT, file).replace(/\\/g, "/");
}

function usage() {
  console.error("Usage: node scripts/create-work.js <work-slug> --name 作品名 [--originalLanguage ja] [--pageLabel 来源角色页] [--pageBase https://...] [--sourceLabel 作品入口] [--sourceUrl https://...]");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

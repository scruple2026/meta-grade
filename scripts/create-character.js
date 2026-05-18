#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DIMENSION_TEMPLATE = `{
        attack: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        defense: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        movement: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        reaction: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        vitality: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        healing: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        energy: ["无资料", "无资料", "资料不足，暂不强行定级。"],
        energyRegen: ["无资料", "无资料", "资料不足，暂不强行定级。"]
      }`;

main();

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args._[0] || !args._[1]) {
    usage();
    process.exitCode = 1;
    return;
  }

  const workSlug = args._[0];
  const characterId = args._[1];
  assertSafeSlug(workSlug, "work-slug");
  assertSafeSlug(characterId, "character-id");

  const workFile = path.join(ROOT, "data/works", `${workSlug}.js`);
  if (!fs.existsSync(workFile)) {
    fail(`Work file not found: data/works/${workSlug}.js`);
  }
  const workName = extractWorkName(fs.readFileSync(workFile, "utf8"));
  if (!workName) {
    fail(`Could not find const WORK in data/works/${workSlug}.js`);
  }

  const characterDir = path.join(ROOT, "data/characters", workSlug);
  const characterFile = path.join(characterDir, `${characterId}.js`);
  if (fs.existsSync(characterFile)) {
    fail(`Character file already exists: ${relative(characterFile)}`);
  }

  fs.mkdirSync(characterDir, { recursive: true });
  fs.writeFileSync(characterFile, renderCharacterFile({
    workName,
    id: characterId,
    name: args.name || "待补中文名",
    en: args.en || "TBD",
    ja: args.ja || "",
    affiliation: args.affiliation || "待定",
    grade: args.grade || "待定",
    timelineStatus: args.timeline || ""
  }));

  const scriptPath = normalizePath(relative(characterFile));
  insertIntoManifest(scriptPath, workSlug);
  insertIntoIndex(scriptPath, workSlug);

  console.log(`created ${scriptPath}`);
  console.log("next: fill the 8 dimensions, notes, source evidence, then run node scripts/validate-data.js");
}

function renderCharacterFile(meta) {
  return `(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["${escapeJs(meta.workName)}"];

  if (!work) {
    throw new Error("${escapeJs(meta.workName)} work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "${escapeJs(meta.id)}",
      name: "${escapeJs(meta.name)}",
      en: "${escapeJs(meta.en)}",
      ja: "${escapeJs(meta.ja)}",
      affiliation: "${escapeJs(meta.affiliation)}",
      grade: "${escapeJs(meta.grade)}",
      appearances: ["资料范围待补"],
      timelineStatus: "${escapeJs(meta.timelineStatus)}",
      aliases: [],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["初稿"],
      sourceQuality: "entry",
      evidenceLinks: [],
      revisionNotes: [
        "初建条目：请补充定级依据、时间线状态和具体来源。"
      ],
      dimensions: dims(${DIMENSION_TEMPLATE}),
      notes: notes({
        penetration: "未补充。",
        resistance: "未补充。",
        sensing: "未补充。",
        tactics: "未补充。",
        special: "未补充。",
        weakness: "未补充。",
        setting: "未补充。",
        basis: "未补充。"
      })
    })
  ]);
})();
`;
}

function insertIntoManifest(scriptPath, workSlug) {
  const file = path.join(ROOT, "data/characters.js");
  const source = fs.readFileSync(file, "utf8");
  if (source.includes(`"${scriptPath}"`)) return;
  fs.writeFileSync(file, insertScriptString(source, scriptPath, `data/characters/${workSlug}/`));
}

function insertIntoIndex(scriptPath, workSlug) {
  const file = path.join(ROOT, "index.html");
  const source = fs.readFileSync(file, "utf8");
  const tag = `    <script src="${scriptPath}"></script>`;
  if (source.includes(tag.trim())) return;

  const sameWork = [...source.matchAll(new RegExp(`^    <script src="(data/characters/${escapeRegExp(workSlug)}/[^"]+)"></script>$`, "gm"))];
  if (sameWork.length) {
    const last = sameWork[sameWork.length - 1];
    const position = last.index + last[0].length;
    fs.writeFileSync(file, `${source.slice(0, position)}\n${tag}${source.slice(position)}`);
    return;
  }

  const workTag = `    <script src="data/works/${workSlug}.js"></script>`;
  const index = source.indexOf(workTag);
  if (index < 0) {
    fail(`Could not find ${workTag} in index.html`);
  }
  const position = index + workTag.length;
  fs.writeFileSync(file, `${source.slice(0, position)}\n${tag}${source.slice(position)}`);
}

function insertScriptString(source, scriptPath, groupPrefix) {
  const sameGroup = [...source.matchAll(new RegExp(`^    "(${escapeRegExp(groupPrefix)}[^"]+)"[,]?$`, "gm"))];
  const line = `    "${scriptPath}",`;
  if (sameGroup.length) {
    const last = sameGroup[sameGroup.length - 1];
    const hasComma = last[0].trim().endsWith(",");
    const position = last.index + last[0].length;
    const prefix = hasComma ? "" : ",";
    return `${source.slice(0, position)}${prefix}\n${line}${source.slice(position)}`;
  }

  const marker = "  ];\n\n  if (window.POWER_WIKI";
  const index = source.indexOf(marker);
  if (index < 0) {
    fail("Could not find POWER_WIKI_CHARACTER_FILES closing marker in data/characters.js");
  }
  const before = source.slice(0, index).replace(/\n\s*$/, "");
  const comma = before.trim().endsWith("[") ? "" : ",";
  return `${before}${comma}\n${line}\n${source.slice(index)}`;
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

function extractWorkName(source) {
  const match = /const\s+WORK\s*=\s*"([^"]+)"/.exec(source);
  return match && match[1];
}

function assertSafeSlug(value, label) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(value)) {
    fail(`${label} must use lowercase letters, digits, and hyphens only: ${value}`);
  }
}

function escapeJs(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizePath(value) {
  return String(value || "").replace(/\\/g, "/");
}

function relative(file) {
  return path.relative(ROOT, file);
}

function usage() {
  console.error("Usage: node scripts/create-character.js <work-slug> <character-id> [--name 中文名] [--en English] [--ja Japanese] [--affiliation 所属] [--grade 身份/能力] [--timeline 状态]");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

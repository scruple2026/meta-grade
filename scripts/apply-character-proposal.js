#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

main();

function main() {
  const proposalPath = process.argv[2];
  if (!proposalPath) {
    usage();
    process.exitCode = 1;
    return;
  }
  const proposal = require(path.resolve(proposalPath));
  const workSlug = proposal.workSlug;
  const characterId = proposal.characterId || (proposal.character && proposal.character.id);
  if (!workSlug || !characterId) fail("proposal must include workSlug and characterId.");
  assertSafeSlug(workSlug, "workSlug");
  assertSafeSlug(characterId, "characterId");

  const workFile = path.join(ROOT, "data/works", `${workSlug}.js`);
  if (!fs.existsSync(workFile)) fail(`Work file not found: data/works/${workSlug}.js`);
  const workName = extractWorkName(fs.readFileSync(workFile, "utf8"));
  if (!workName) fail(`Could not find const WORK in data/works/${workSlug}.js`);

  const characterFile = path.join(ROOT, "data/characters", workSlug, `${characterId}.js`);
  if (fs.existsSync(characterFile) && !proposal.overwrite) {
    fail(`${relative(characterFile)} already exists. Set overwrite: true in the proposal to replace it.`);
  }

  const source = proposal.source || renderCharacterFile(workName, normalizeCharacter(proposal.character, characterId));
  fs.mkdirSync(path.dirname(characterFile), { recursive: true });
  fs.writeFileSync(characterFile, source.endsWith("\n") ? source : `${source}\n`);
  const scriptPath = normalizePath(relative(characterFile));
  insertCharacterManifest(scriptPath, workSlug);
  insertCharacterScript(scriptPath, workSlug);
  console.log(`applied ${scriptPath}`);
}

function normalizeCharacter(character, characterId) {
  if (!character || typeof character !== "object") fail("proposal must include character or source.");
  return {
    id: character.id || characterId,
    name: character.name || "待补中文名",
    en: character.en || "",
    ja: character.ja || "",
    affiliation: character.affiliation || "待定",
    grade: character.grade || "待定",
    appearances: character.appearances || ["资料范围待补"],
    timelineStatus: character.timelineStatus || "",
    aliases: character.aliases || [],
    fandomSlug: character.fandomSlug || "",
    confidence: character.confidence || "review",
    evidenceType: character.evidenceType || ["初稿"],
    sourceQuality: character.sourceQuality || "entry",
    evidenceLinks: character.evidenceLinks || [],
    revisionNotes: character.revisionNotes || [],
    defaultTimelineKey: character.defaultTimelineKey || "",
    timelinePanels: character.timelinePanels || [],
    dimensions: character.dimensions || blankDimensions(),
    notes: character.notes || {
      penetration: "未补充。",
      resistance: "未补充。",
      special: "未补充。",
      weakness: "未补充。",
      setting: "未补充。",
      basis: "未补充。"
    }
  };
}

function renderCharacterFile(workName, character) {
  return `(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["${escapeJs(workName)}"];

  if (!work) {
    throw new Error("${escapeJs(workName)} work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
${property("id", character.id)}
${property("name", character.name)}
${property("en", character.en)}
${property("ja", character.ja)}
${property("affiliation", character.affiliation)}
${property("grade", character.grade)}
${property("appearances", character.appearances)}
${property("timelineStatus", character.timelineStatus)}
${property("aliases", character.aliases)}
${property("fandomSlug", character.fandomSlug)}
${character.defaultTimelineKey ? property("defaultTimelineKey", character.defaultTimelineKey) : ""}
${property("confidence", character.confidence)}
${property("evidenceType", character.evidenceType)}
${property("sourceQuality", character.sourceQuality)}
${property("evidenceLinks", character.evidenceLinks)}
${property("revisionNotes", character.revisionNotes)}
${renderTimelinePanels(character.timelinePanels)}
      dimensions: dims(${indent(formatObject(character.dimensions), 6)}),
      notes: notes(${indent(formatObject(character.notes), 6)})
    })
  ]);
})();
`;
}

function renderTimelinePanels(panels) {
  if (!Array.isArray(panels) || !panels.length) return "";
  const rendered = panels.map((panel) => `{
          key: ${JSON.stringify(panel.key || "")},
          label: ${JSON.stringify(panel.label || "")},
          status: ${JSON.stringify(panel.status || "")},
          dimensions: dims(${indent(formatObject(panel.dimensions || blankDimensions()), 10)}),
          notes: ${JSON.stringify(panel.notes || "")}
        }`).join(",\n        ");
  return `      timelinePanels: [
        ${rendered}
      ],
`;
}

function property(key, value) {
  return `      ${key}: ${formatObject(value)},`;
}

function formatObject(value) {
  return JSON.stringify(value, null, 2);
}

function indent(value, spaces) {
  const pad = " ".repeat(spaces);
  return String(value).split("\n").map((line, index) => (index ? pad + line : line)).join("\n");
}

function blankDimensions() {
  return {
    attack: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    defense: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    movement: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    reaction: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    vitality: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    healing: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    energy: ["无资料", "无资料", "资料不足，暂不强行定级。"],
    energyRegen: ["无资料", "无资料", "资料不足，暂不强行定级。"]
  };
}

function insertCharacterManifest(scriptPath, workSlug) {
  const file = path.join(ROOT, "data/characters.js");
  const source = fs.readFileSync(file, "utf8");
  if (source.includes(`"${scriptPath}"`)) return;
  fs.writeFileSync(file, insertScriptString(source, scriptPath, `data/characters/${workSlug}/`));
}

function insertCharacterScript(scriptPath, workSlug) {
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
  if (index < 0) fail(`Could not find ${workTag} in index.html`);
  const position = index + workTag.length;
  fs.writeFileSync(file, `${source.slice(0, position)}\n${tag}${source.slice(position)}`);
}

function insertScriptString(source, scriptPath, groupPrefix) {
  const sameGroup = [...source.matchAll(new RegExp(`^    "(${escapeRegExp(groupPrefix)}[^"]+)"[,]?$`, "gm"))];
  const line = `    "${scriptPath}",`;
  if (sameGroup.length) {
    const last = sameGroup[sameGroup.length - 1];
    const position = last.index + last[0].length;
    const hasComma = last[0].trim().endsWith(",");
    const prefix = hasComma ? "" : ",";
    return `${source.slice(0, position)}${prefix}\n${line}${source.slice(position)}`;
  }
  const marker = "  ];\n\n  if (window.POWER_WIKI";
  const index = source.indexOf(marker);
  if (index < 0) fail("Could not find POWER_WIKI_CHARACTER_FILES closing marker in data/characters.js");
  const before = source.slice(0, index).replace(/\n\s*$/, "");
  const comma = before.trim().endsWith("[") ? "" : ",";
  return `${before}${comma}\n${line}\n${source.slice(index)}`;
}

function extractWorkName(source) {
  const match = /const\s+WORK\s*=\s*"([^"]+)"/.exec(source);
  return match && match[1];
}

function assertSafeSlug(value, label) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(value)) fail(`${label} must use lowercase letters, digits, and hyphens only: ${value}`);
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
  return normalizePath(path.relative(ROOT, file));
}

function usage() {
  console.error("Usage: node scripts/apply-character-proposal.js proposal.js");
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

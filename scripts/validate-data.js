#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DIMENSION_KEYS = [
  "attack",
  "defense",
  "movement",
  "reaction",
  "vitality",
  "healing",
  "energy",
  "energyRegen"
];
const NOTE_KEYS = ["penetration", "resistance", "sensing", "tactics", "special", "weakness", "setting", "basis"];
const MAIN_ENERGY_BASES = [
  "昆虫级",
  "凡人级",
  "砖级",
  "墙级",
  "房屋级",
  "楼级",
  "街区级",
  "城市级",
  "国家级",
  "大陆级",
  "地表级",
  "行星级",
  "恒星级",
  "星系级",
  "超星系团级",
  "有限宇宙级",
  "无限级"
];
const SPEED_BASES = [
  "凡人速",
  "亚音速",
  "音速",
  "超音速",
  "高超音速",
  "宇宙速度级",
  "超第三宇宙速度级",
  "亚光速",
  "光速",
  "超光速",
  "高倍超光速",
  "恒星际超光速",
  "星系尺度超光速",
  "星系际超光速",
  "超星系团尺度超光速",
  "有限宇宙尺度超光速",
  "无限速"
];
const VITALITY_BASES = [
  "昆虫级生命阈值",
  "凡人肉身",
  "强化凡体",
  "精锐韧体",
  "房屋级生命阈值",
  "楼级生命阈值",
  "街区级生命阈值",
  "城市级生命阈值",
  "国家级生命阈值",
  "大陆级生命阈值",
  "地表级生命阈值",
  "行星级生命结构",
  "恒星级生命结构",
  "星系级生命结构",
  "超星系团级生命结构",
  "有限宇宙级生命结构",
  "无限级生命结构"
];
const HEALING_BASES = ["无自愈", "缓慢自愈", "中速自愈", "快速自愈", "极速自愈", "瞬愈"];
const ENERGY_POOL_BASES = [
  "昆虫级能量",
  "凡人能量",
  "砖级能量",
  "墙级能量",
  "房屋级能量",
  "楼级能量",
  "街区级能量",
  "城市级能量",
  "国家级能量",
  "大陆级能量",
  "地表级能量",
  "行星级能量",
  "恒星级能量",
  "星系级能量",
  "超星系团级能量",
  "有限宇宙级能量",
  "无限级能量"
];
const ENERGY_REGEN_BASES = ["无回能", "缓慢回能", "中速回能", "快速回能", "极速回能", "瞬时回能"];
const SPECIAL_BASES = ["无资料", "未知", "未表现", "不适用", "仅下限", "仅上限", "争议"];
const HIGH_RISK_BASES = new Set([
  "国家级",
  "大陆级",
  "地表级",
  "行星级",
  "恒星级",
  "星系级",
  "超星系团级",
  "有限宇宙级",
  "无限级",
  "国家级生命阈值",
  "大陆级生命阈值",
  "地表级生命阈值",
  "行星级生命结构",
  "恒星级生命结构",
  "星系级生命结构",
  "超星系团级生命结构",
  "有限宇宙级生命结构",
  "无限级生命结构",
  "国家级能量",
  "大陆级能量",
  "地表级能量",
  "行星级能量",
  "恒星级能量",
  "星系级能量",
  "超星系团级能量",
  "有限宇宙级能量",
  "无限级能量",
  "超第三宇宙速度级",
  "亚光速",
  "光速",
  "超光速",
  "高倍超光速",
  "恒星际超光速",
  "星系尺度超光速",
  "星系际超光速",
  "超星系团尺度超光速",
  "有限宇宙尺度超光速",
  "无限速"
]);
const REVIEW_TERMS = /争议|仅下限|仅上限|外源|一次性|仪式|特殊|设定|直接|持续|装备|短时|条件|不可控|剧情限定/;
const CONFIDENCE_VALUES = new Set(["stable", "medium", "review", "disputed"]);
const SOURCE_QUALITY_VALUES = new Set(["entry", "specific"]);
const EVIDENCE_LINK_TYPES = new Set(["chapter", "episode", "setting", "official", "wiki", "source"]);
const LANGUAGE_VALUES = new Set(["ja", "zh", "en", "other"]);
const AUTHORITY_VALUES = new Set(["primary", "official", "licensed", "wiki", "cross-reference", "analysis", "source"]);
const MEDIUM_VALUES = new Set(["manga", "anime", "databook", "official-site", "publisher", "wiki", "cross-wiki", "print", "other"]);
const NON_AUTHORITATIVE_HOSTS = [
  /\.fandom\.com$/,
  /^fandom\.com$/,
  /^moegirl\.icu$/,
  /(^|\.)moegirl\.org\.cn$/,
  /^jojowiki\.com$/,
  /(^|\.)wikipedia\.org$/
];
const TIMELINE_KEY_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const REFERENCE_RANKS = loadReferenceRanks();

const errors = [];
const warnings = [];

main();

function main() {
  checkSyntax();

  const scripts = parseIndexScripts();
  const data = loadDataScripts(scripts.filter((src) => src.startsWith("data/")));

  validateManifest(data, scripts);
  validateReferenceSync(data);
  validateWorks(data);
  validateCharacters(data);

  report();
}

function checkSyntax() {
  for (const file of listFiles(ROOT, (entry) => entry.endsWith(".js"))) {
    const rel = relative(file);
    try {
      new vm.Script(fs.readFileSync(file, "utf8"), { filename: rel });
    } catch (error) {
      errors.push(`${rel}: JavaScript syntax error: ${error.message}`);
    }
  }
}

function parseIndexScripts() {
  const indexPath = path.join(ROOT, "index.html");
  const html = fs.readFileSync(indexPath, "utf8");
  return [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)].map((match) => normalizePath(match[1]));
}

function loadDataScripts(scriptSources) {
  const context = vm.createContext({
    console,
    window: {}
  });
  context.window.window = context.window;

  for (const src of scriptSources) {
    const abs = path.join(ROOT, src);
    if (!fs.existsSync(abs)) {
      errors.push(`${src}: script listed in index.html but file does not exist.`);
      continue;
    }
    try {
      vm.runInContext(fs.readFileSync(abs, "utf8"), context, { filename: src });
    } catch (error) {
      errors.push(`${src}: failed while loading data script: ${error.message}`);
    }
  }

  return context.window;
}

function validateManifest(data, indexScripts) {
  const manifestWorks = asArray(data.POWER_WIKI_WORK_FILES).map(normalizePath);
  const manifestCharacters = asArray(data.POWER_WIKI_CHARACTER_FILES).map(normalizePath);
  const indexWorks = indexScripts.filter((src) => src.startsWith("data/works/"));
  const indexCharacters = indexScripts.filter((src) => src.startsWith("data/characters/") && src !== "data/characters.js");
  const physicalWorks = listFiles(path.join(ROOT, "data/works"), (entry) => entry.endsWith(".js")).map(relative);
  const physicalCharacters = listFiles(path.join(ROOT, "data/characters"), (entry) => entry.endsWith(".js")).map(relative);

  compareSets("data/characters.js work manifest", manifestWorks, physicalWorks);
  compareSets("index.html work scripts", indexWorks, manifestWorks);
  compareSets("data/characters.js character manifest", manifestCharacters, physicalCharacters);
  compareSets("index.html character scripts", indexCharacters, manifestCharacters);

  if (!indexScripts.includes("data/core.js")) {
    errors.push("index.html must load data/core.js before work and character scripts.");
  }
  if (!indexScripts.includes("data/characters.js")) {
    errors.push("index.html must load data/characters.js as the manifest compatibility entry.");
  }
  if (!indexScripts.includes("data/reference.js")) {
    errors.push("index.html must load data/reference.js so #/reference can render reference.md.");
  }
}

function validateReferenceSync(data) {
  const markdown = fs.readFileSync(path.join(ROOT, "reference.md"), "utf8").replace(/\r\n?/g, "\n");
  if (data.POWER_WIKI_REFERENCE_MD !== markdown) {
    errors.push("data/reference.js is out of sync with reference.md. Run node scripts/sync-reference.js.");
  }
}

function validateWorks(data) {
  const sources = data.POWER_WIKI_WORK_SOURCES || {};
  const seenSlugs = new Map();
  for (const [work, source] of Object.entries(sources)) {
    if (!source.slug) errors.push(`${work}: work source is missing slug.`);
    if (!source.originalLanguage) addWarning(`${work}: originalLanguage is empty; original-language audit filters will be less useful.`, "low");
    if (source.slug) {
      if (seenSlugs.has(source.slug)) {
        errors.push(`${work}: duplicate work slug "${source.slug}" also used by ${seenSlugs.get(source.slug)}.`);
      }
      seenSlugs.set(source.slug, work);
    }
    if (!source.pageLabel) errors.push(`${work}: work source is missing pageLabel.`);
    if (!source.pageBase) addWarning(`${work}: work source is missing pageBase; character source links cannot be auto-built.`, "low");
    if (!source.scaleNotes || typeof source.scaleNotes !== "object") {
      errors.push(`${work}: work source must define scaleNotes.`);
      continue;
    }
    for (const key of ["scope", "versionPolicy", "conservativeNotes"]) {
      if (!source.scaleNotes[key]) {
        addWarning(`${work}: scaleNotes.${key} is empty.`, "medium");
      }
    }
    if (!Array.isArray(source.scaleNotes.highRisk)) {
      addWarning(`${work}: scaleNotes.highRisk should be an array, even if empty.`, "medium");
    }
    if (!source.sourcePolicy) {
      addWarning(`${work}: sourcePolicy is empty.`, "medium");
    }
    validateSourceLinks(`${work}: canonicalLinks`, source.canonicalLinks, { requireClaim: true });
    validateSourceLinks(`${work}: commonLinks`, source.commonLinks, { requireClaim: false });
    validateOptionalLinks(`${work}: scaleEvidenceLinks`, source.scaleEvidenceLinks);
  }
}

function validateCharacters(data) {
  const characters = asArray(data.POWER_WIKI_CHARACTERS);
  const dimensions = asArray(data.POWER_WIKI_DIMENSIONS);

  if (dimensions.length !== DIMENSION_KEYS.length) {
    errors.push(`POWER_WIKI_DIMENSIONS must contain ${DIMENSION_KEYS.length} dimensions, found ${dimensions.length}.`);
  }
  for (const key of DIMENSION_KEYS) {
    if (!dimensions.some((dimension) => dimension.key === key)) {
      errors.push(`POWER_WIKI_DIMENSIONS is missing ${key}.`);
    }
  }

  const seenIds = new Map();
  for (const character of characters) {
    const label = `${character.work || "未标注作品"}/${character.id || character.name || "未命名角色"}`;

    if (!character.id) errors.push(`${label}: missing id.`);
    if (!character.name) errors.push(`${label}: missing name.`);
    if (!character.work) errors.push(`${label}: missing work.`);
    if (!character.workSlug) errors.push(`${label}: missing workSlug from work source metadata.`);
    if (!character.affiliation) errors.push(`${label}: missing affiliation.`);
    if (!character.grade) errors.push(`${label}: missing grade.`);
    if (!Array.isArray(character.appearances) || !character.appearances.length) {
      errors.push(`${label}: appearances must be a non-empty array.`);
    }
    if (character.id) {
      if (seenIds.has(character.id)) {
        errors.push(`${label}: duplicate id also used by ${seenIds.get(character.id)}.`);
      }
      seenIds.set(character.id, label);
    }

    validateConfidence(character, label);
    validateDimensions(character, label);
    validateNotes(character, label);
    validateSources(character, label);
    validateTimelinePanels(character, label);
    validateHighRisk(character, label);
  }
  validateInflationRisk(characters, data.POWER_WIKI_WORK_SOURCES || {});
}

function validateConfidence(character, label) {
  if (!CONFIDENCE_VALUES.has(character.confidence)) {
    errors.push(`${label}: confidence must be one of ${[...CONFIDENCE_VALUES].join(", ")}.`);
  }
  if (!SOURCE_QUALITY_VALUES.has(character.sourceQuality)) {
    errors.push(`${label}: sourceQuality must be "entry" or "specific".`);
  }
  if (!Array.isArray(character.evidenceType)) {
    errors.push(`${label}: evidenceType must be an array.`);
  }
  if (!Array.isArray(character.auditWarnings)) {
    errors.push(`${label}: auditWarnings must be an array.`);
  }
  if (!Array.isArray(character.revisionNotes)) {
    errors.push(`${label}: revisionNotes must be an array.`);
  }
}

function validateDimensions(character, label) {
  if (!character.dimensions || typeof character.dimensions !== "object") {
    errors.push(`${label}: missing dimensions object.`);
    return;
  }
  for (const key of DIMENSION_KEYS) {
    const entry = character.dimensions[key];
    const dimensionLabel = `${label}/${key}`;
    if (!entry) {
      errors.push(`${dimensionLabel}: missing dimension entry.`);
      continue;
    }
    for (const field of ["normal", "peak", "brief"]) {
      if (!entry[field]) errors.push(`${dimensionLabel}: missing ${field}.`);
    }
    if (!Array.isArray(entry.evidence)) {
      errors.push(`${dimensionLabel}: evidence must be an array.`);
    }
    validateRank(key, entry.normal, `${dimensionLabel}.normal`);
    validateRank(key, entry.peak, `${dimensionLabel}.peak`);
  }
}

function validateRank(key, value, label) {
  const rank = baseRank(value);
  if (!rank) {
    errors.push(`${label}: empty rank.`);
    return;
  }
  const allowed = allowedRanksForDimension(key);
  if (!allowed.has(rank)) {
    errors.push(`${label}: unknown rank "${rank}". Update reference.md/data/reference.js or correct the entry.`);
  }
}

function validateNotes(character, label) {
  if (!character.notes || typeof character.notes !== "object") {
    errors.push(`${label}: missing notes object.`);
    return;
  }
  for (const key of NOTE_KEYS) {
    if (!character.notes[key]) errors.push(`${label}: notes.${key} is empty.`);
  }
}

function validateSources(character, label) {
  if (!Array.isArray(character.links) || !character.links.length) {
    errors.push(`${label}: missing source links.`);
  }
  for (const [index, link] of asArray(character.links).entries()) {
    if (!link.label || !link.url) {
      errors.push(`${label}: links[${index}] must include label and url.`);
    }
  }
  for (const [index, link] of asArray(character.evidenceLinks).entries()) {
    validateEvidenceLink(`${label}: evidenceLinks[${index}]`, link);
  }
}

function validateSourceLinks(label, links, options = {}) {
  for (const [index, link] of asArray(links).entries()) {
    validateEvidenceLink(`${label}[${index}]`, link, options);
  }
}

function validateOptionalLinks(label, links) {
  for (const [index, link] of asArray(links).entries()) {
    validateEvidenceLink(`${label}[${index}]`, link);
  }
}

function validateEvidenceLink(label, link, options = {}) {
  const requireClaim = options.requireClaim !== false && options.allowMissingClaim !== true;
  if (!link.label || (!link.url && !link.citation)) {
    errors.push(`${label} must include label and either url or citation.`);
  }
  if (link.type && !EVIDENCE_LINK_TYPES.has(link.type)) {
    addWarning(`${label}.type "${link.type}" is not a known type.`, "low");
  }
  if (link.lang && !LANGUAGE_VALUES.has(link.lang)) {
    addWarning(`${label}.lang "${link.lang}" is not a known language code.`, "low");
  }
  if (link.authority && !AUTHORITY_VALUES.has(link.authority)) {
    addWarning(`${label}.authority "${link.authority}" is not a known authority level.`, "low");
  }
  if (link.medium && !MEDIUM_VALUES.has(link.medium)) {
    addWarning(`${label}.medium "${link.medium}" is not a known medium.`, "low");
  }
  if (requireClaim && !link.claim) {
    addWarning(`${label} should include claim explaining what the link supports.`, "low");
  }
  if (link.ratingEvidence === true && !link.claim && !link.citation) {
    addWarning(`${label} is marked ratingEvidence but has no claim/citation.`, "medium");
  }
  if (isAuthorityClaimOnNonAuthoritativeHost(link)) {
    addWarning(`${label} is marked as ${link.authority} but uses a non-authoritative host.`, "medium");
  }
}

function hasSpecificRatingEvidence(character) {
  return asArray(character.evidenceLinks).some((link) => {
    if (!link) return false;
    if (link.ratingEvidence === true) return Boolean(link.claim || link.citation);
    return ["chapter", "episode", "setting"].includes(link.type) && Boolean(link.claim || link.citation);
  });
}

function isAuthorityClaimOnNonAuthoritativeHost(link) {
  if (!link || !link.url || !["primary", "official", "licensed"].includes(link.authority)) return false;
  let host = "";
  try {
    host = new URL(link.url).host;
  } catch {
    return false;
  }
  return NON_AUTHORITATIVE_HOSTS.some((pattern) => pattern.test(host));
}

function validateTimelinePanels(character, label) {
  if (!Array.isArray(character.timelinePanels)) {
    errors.push(`${label}: timelinePanels must be an array.`);
    return;
  }
  const keys = new Set();
  for (const [panelIndex, panel] of character.timelinePanels.entries()) {
    if (!panel.key) {
      errors.push(`${label}: timelinePanels[${panelIndex}] is missing stable key.`);
    } else if (!TIMELINE_KEY_PATTERN.test(panel.key)) {
      errors.push(`${label}: timelinePanels[${panelIndex}].key "${panel.key}" must use lowercase letters, digits, and hyphens.`);
    } else if (keys.has(panel.key)) {
      errors.push(`${label}: duplicate timeline key "${panel.key}".`);
    }
    keys.add(panel.key);
    if (!panel.label) addWarning(`${label}: timelinePanels[${panelIndex}] is missing label.`, "medium");
    if (!panel.dimensions || typeof panel.dimensions !== "object") {
      errors.push(`${label}: timelinePanels[${panelIndex}] is missing dimensions.`);
      continue;
    }
    for (const key of DIMENSION_KEYS) {
      const entry = panel.dimensions[key];
      if (!entry) {
        errors.push(`${label}: timelinePanels[${panelIndex}].dimensions.${key} is missing.`);
        continue;
      }
      if (!entry.brief) {
        errors.push(`${label}: timelinePanels[${panelIndex}].dimensions.${key}.brief is missing.`);
      }
      if (!Array.isArray(entry.evidence)) {
        errors.push(`${label}: timelinePanels[${panelIndex}].dimensions.${key}.evidence must be an array.`);
      }
      validateRank(key, entry.normal, `${label}: timelinePanels[${panelIndex}].${key}.normal`);
      validateRank(key, entry.peak, `${label}: timelinePanels[${panelIndex}].${key}.peak`);
    }
  }
  if (character.defaultTimelineKey && !keys.has(character.defaultTimelineKey)) {
    errors.push(`${label}: defaultTimelineKey "${character.defaultTimelineKey}" does not match a timelinePanels key.`);
  }
  if (character.defaultTimelineKey && !TIMELINE_KEY_PATTERN.test(character.defaultTimelineKey)) {
    errors.push(`${label}: defaultTimelineKey "${character.defaultTimelineKey}" must use lowercase letters, digits, and hyphens.`);
  }
  if (character.timelinePanels.length > 1) {
    const lastPanel = character.timelinePanels[character.timelinePanels.length - 1];
    if (character.defaultTimelineKey !== lastPanel.key) {
      errors.push(`${label}: defaultTimelineKey must point to the last timeline panel "${lastPanel.key}".`);
    }
    for (const key of DIMENSION_KEYS) {
      assertSameDimensionEntry(
        `${label}: main dimensions must match last timeline panel "${lastPanel.key}" for ${key}`,
        character.dimensions && character.dimensions[key],
        lastPanel.dimensions && lastPanel.dimensions[key]
      );
    }
  }
}

function assertSameDimensionEntry(label, mainEntry, timelineEntry) {
  if (!mainEntry || !timelineEntry) return;
  for (const field of ["normal", "peak", "brief"]) {
    if (mainEntry[field] !== timelineEntry[field]) {
      errors.push(`${label}.${field}: main "${mainEntry[field] || ""}" does not match timeline "${timelineEntry[field] || ""}".`);
    }
  }
}

function validateHighRisk(character, label) {
  const text = JSON.stringify({
    dimensions: character.dimensions,
    notes: character.notes,
    confidence: character.confidence,
    evidenceType: character.evidenceType,
    auditWarnings: character.auditWarnings
  });
  const usedHighRisk = [];
  for (const key of DIMENSION_KEYS) {
    const entry = character.dimensions && character.dimensions[key];
    if (!entry) continue;
    for (const value of [entry.normal, entry.peak]) {
      const rank = baseRank(value);
      if (HIGH_RISK_BASES.has(rank)) usedHighRisk.push(rank);
    }
  }
  if (!usedHighRisk.length) return;
  if (!REVIEW_TERMS.test(text)) {
    addWarning(`${label}: high-risk ranks (${[...new Set(usedHighRisk)].join(", ")}) have no review/source-condition wording.`, "high");
  }
  if ((!character.evidenceLinks || !character.evidenceLinks.length) && character.sourceQuality !== "specific") {
    addWarning(`${label}: high-risk entry should add chapter/episode/setting-book evidenceLinks.`, "high");
  }
}

function validateInflationRisk(characters, workSources) {
  const byWork = groupBy(characters, (character) => character.work);
  for (const [work, items] of Object.entries(byWork)) {
    if (items.length >= 5) {
      const cityPlus = items.filter((character) => maxRankIndex(character, "attack", MAIN_ENERGY_BASES) >= MAIN_ENERGY_BASES.indexOf("城市级"));
      if (cityPlus.length / items.length > 0.6 && !hasWorkScaleEvidence(workSources[work])) {
        addWarning(`${work}: ${cityPlus.length}/${items.length} characters have 城市级+ attack peaks; confirm this is work scale, not template inflation.`, "low");
      }
    }
  }

  for (const character of characters) {
    const label = `${character.work}/${character.id}`;
    const text = JSON.stringify({ notes: character.notes, dimensions: character.dimensions });
    const highRiskMain = ["attack", "defense", "movement", "reaction", "energy"].some((key) => {
      const entry = character.dimensions && character.dimensions[key];
      return entry && [entry.normal, entry.peak].some((value) => HIGH_RISK_BASES.has(baseRank(value)) || /国家级|大陆级|地表级|行星级|恒星级|亚光速|光速|超光速|无限速/.test(baseRank(value)));
    });
    if (highRiskMain && !hasSpecificRatingEvidence(character)) {
      addWarning(`${label}: high-risk main ranks should have concrete ratingEvidence links; check for scope inflation.`, "medium");
    }

    for (const key of ["movement", "reaction"]) {
      const entry = character.dimensions && character.dimensions[key];
      if (!entry) continue;
      const peak = baseRank(entry.peak);
      if (SPEED_BASES.slice(SPEED_BASES.indexOf("亚光速")).includes(peak) && !/天文|百分比|相对论|明确|光速|争议|连续移动|无限|非有限|宇宙论|恒星际|星系|宇宙尺度/.test(text)) {
        addWarning(`${label}: ${key} uses ${peak} without enough speed-evidence wording.`, "medium");
      }
    }

    const attackIndex = maxRankIndex(character, "attack", MAIN_ENERGY_BASES);
    const energyIndex = maxRankIndex(character, "energy", ENERGY_POOL_BASES);
    if (energyIndex - attackIndex >= 2 && !/总量|单次|单击|不等同|分开|资源池|储量/.test(text)) {
      addWarning(`${label}: energy total is two or more ranks above attack without clear total-vs-single-hit wording.`, "medium");
    }

    const defenseIndex = maxRankIndex(character, "defense", MAIN_ENERGY_BASES);
    const vitalityIndex = maxVitalityIndex(character);
    if (defenseIndex - vitalityIndex >= 3 && !/护盾|结界|外覆|屏障|防御|防护|肉身|生命体量|本体|装备|铠甲|核心/.test(text)) {
      addWarning(`${label}: defense is far above vitality without clear shield/armor/body distinction.`, "low");
    }
  }
}

function hasWorkScaleEvidence(source) {
  return asArray(source && source.scaleEvidenceLinks).some((link) => link && link.label && link.url);
}

function maxRankIndex(character, key, order) {
  const entry = character.dimensions && character.dimensions[key];
  if (!entry) return -1;
  return Math.max(rankIndex(entry.normal, order), rankIndex(entry.peak, order));
}

function maxVitalityIndex(character) {
  const entry = character.dimensions && character.dimensions.vitality;
  if (!entry) return -1;
  return Math.max(vitalityRankIndex(entry.normal), vitalityRankIndex(entry.peak));
}

function vitalityRankIndex(value) {
  const rank = baseRank(value)
    .replace("生命阈值", "")
    .replace("生命结构", "");
  if (rank === "凡人肉身") return MAIN_ENERGY_BASES.indexOf("凡人级");
  if (rank === "强化凡体") return MAIN_ENERGY_BASES.indexOf("砖级");
  if (rank === "精锐韧体") return MAIN_ENERGY_BASES.indexOf("墙级");
  return MAIN_ENERGY_BASES.indexOf(rank);
}

function rankIndex(value, order) {
  const rank = baseRank(value).replace("能量", "");
  const normalizedOrder = order.map((item) => item.replace("能量", ""));
  return normalizedOrder.indexOf(rank);
}

function groupBy(items, project) {
  return items.reduce((result, item) => {
    const key = project(item);
    result[key] = result[key] || [];
    result[key].push(item);
    return result;
  }, {});
}

function allowedRanksForDimension(key) {
  if (key === "attack" || key === "defense") return mergedRankSet(REFERENCE_RANKS.attack, MAIN_ENERGY_BASES);
  if (key === "movement" || key === "reaction") return mergedRankSet(REFERENCE_RANKS.speed, SPEED_BASES);
  if (key === "vitality") return mergedRankSet(REFERENCE_RANKS.vitality, VITALITY_BASES);
  if (key === "healing") return mergedRankSet(REFERENCE_RANKS.healing, HEALING_BASES);
  if (key === "energy") return mergedRankSet(REFERENCE_RANKS.energy, ENERGY_POOL_BASES);
  if (key === "energyRegen") return mergedRankSet(REFERENCE_RANKS.energyRegen, ENERGY_REGEN_BASES);
  return toSet(SPECIAL_BASES);
}

function loadReferenceRanks() {
  const markdown = fs.readFileSync(path.join(ROOT, "reference.md"), "utf8");
  const attack = parseChainRanks(extractSection(markdown, "### 1. 攻击能级"));
  const defense = parseChainRanks(extractSection(markdown, "### 2. 防御能级"));
  return {
    attack: toSet([...attack, ...defense]),
    speed: toSet([
      ...parseChainRanks(extractSection(markdown, "### 3. 移动速度")),
      ...parseChainRanks(extractSection(markdown, "### 4. 反应速度"))
    ]),
    vitality: toSet(parseChainRanks(extractSection(markdown, "### 5. 生命体量"))),
    healing: toSet(parseChainRanks(extractSection(markdown, "### 6. 生命回复速度"))),
    energy: toSet(parseChainRanks(extractSection(markdown, "### 7. 能量总量"))),
    energyRegen: toSet(parseChainRanks(extractSection(markdown, "### 8. 能量回复速度")))
  };
}

function extractSection(markdown, heading) {
  const start = markdown.indexOf(heading);
  if (start < 0) return "";
  const next = markdown.indexOf("\n### ", start + heading.length);
  return next < 0 ? markdown.slice(start) : markdown.slice(start, next);
}

function parseChainRanks(section) {
  return [
    ...new Set(
      section
        .split("\n")
        .filter((line) => line.includes("→"))
        .flatMap((line) => line.split("→"))
        .map((item) => item.replace(/[`*]/g, "").trim())
        .map((item) => item.replace(/^[-\s]+/, "").replace(/[。；;，,].*$/, "").trim())
        .filter((item) => item && !item.includes("：") && !item.includes("|"))
    )
  ];
}

function mergedRankSet(referenceRanks, fallbackRanks) {
  return toSet([...fallbackRanks, ...referenceRanks, ...SPECIAL_BASES]);
}

function compareSets(label, actual, expected) {
  const actualSet = new Set(actual);
  const expectedSet = new Set(expected);
  for (const item of expectedSet) {
    if (!actualSet.has(item)) errors.push(`${label}: missing ${item}.`);
  }
  for (const item of actualSet) {
    if (!expectedSet.has(item)) errors.push(`${label}: unexpected ${item}.`);
  }
}

function addWarning(message, severity = "medium") {
  warnings.push({ severity, message });
}

function listFiles(dir, predicate) {
  if (!fs.existsSync(dir)) return [];
  const result = [];
  for (const name of fs.readdirSync(dir)) {
    const entry = path.join(dir, name);
    const stat = fs.statSync(entry);
    if (stat.isDirectory()) {
      result.push(...listFiles(entry, predicate));
    } else if (!predicate || predicate(entry)) {
      result.push(entry);
    }
  }
  return result.sort((a, b) => a.localeCompare(b));
}

function baseRank(value) {
  return String(value || "").split("｜")[0].trim();
}

function toSet(items) {
  return new Set(items);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePath(value) {
  return String(value || "").replace(/\\/g, "/").replace(/^\.\//, "");
}

function relative(file) {
  return normalizePath(path.relative(ROOT, file));
}

function report() {
  if (errors.length) {
    console.error(`data validation failed: ${errors.length} error(s), ${warnings.length} warning(s)`);
    for (const error of errors) console.error(`ERROR ${error}`);
    for (const warning of warnings) console.warn(formatWarning(warning));
    process.exitCode = 1;
    return;
  }

  console.log(`data validation ok: ${warnings.length} warning(s)`);
  for (const warning of warnings) console.warn(formatWarning(warning));

  if (warnings.length && process.argv.includes("--strict-warnings")) {
    process.exitCode = 1;
  }
}

function formatWarning(warning) {
  if (typeof warning === "string") return `WARN ${warning}`;
  return `WARN ${String(warning.severity || "medium").toUpperCase()} ${warning.message}`;
}

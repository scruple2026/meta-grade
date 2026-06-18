#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

const FALLBACK_RANK_ORDERS = {
  attack: [
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
  ],
  defense: [
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
  ],
  movement: [
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
  ],
  reaction: [
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
  ],
  vitality: [
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
  ],
  healing: ["无自愈", "缓慢自愈", "中速自愈", "快速自愈", "极速自愈", "瞬愈"],
  energy: [
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
  ],
  energyRegen: ["无回能", "缓慢回能", "中速回能", "快速回能", "极速回能", "瞬时回能"]
};
const RANK_ORDERS = loadRankOrders();

const DIMENSION_LABELS = {
  attack: "攻击能级",
  defense: "防御能级",
  movement: "移动速度",
  reaction: "反应速度",
  vitality: "生命体量",
  healing: "生命回复速度",
  energy: "能量总量",
  energyRegen: "能量回复速度"
};

main();

function loadRankOrders() {
  const source = fs.readFileSync(path.join(ROOT, "assets/app.js"), "utf8");
  const marker = "const rankOrders =";
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) return FALLBACK_RANK_ORDERS;

  const objectStart = source.indexOf("{", markerIndex);
  if (objectStart < 0) return FALLBACK_RANK_ORDERS;

  const objectSource = extractObjectLiteral(source, objectStart);
  if (!objectSource) return FALLBACK_RANK_ORDERS;

  const parsed = vm.runInNewContext(`(${objectSource})`, {});
  for (const key of Object.keys(FALLBACK_RANK_ORDERS)) {
    if (!Array.isArray(parsed[key]) || !parsed[key].length) {
      throw new Error(`assets/app.js rankOrders is missing ${key}.`);
    }
  }
  return parsed;
}

function extractObjectLiteral(source, start) {
  let depth = 0;
  let quote = "";
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  return "";
}

function main() {
  const data = loadData();
  const characters = Array.isArray(data.POWER_WIKI_CHARACTERS) ? data.POWER_WIKI_CHARACTERS : [];
  const coverage = buildCoverage(characters);
  let missingCount = 0;

  for (const [key, ranks] of Object.entries(RANK_ORDERS)) {
    const missing = ranks.filter((rank) => !coverage[key].has(rank));
    if (!missing.length) {
      console.log(`${DIMENSION_LABELS[key]}: ok (${ranks.length}/${ranks.length})`);
      continue;
    }
    missingCount += missing.length;
    console.log(`${DIMENSION_LABELS[key]}: missing ${missing.length}/${ranks.length}`);
    for (const rank of missing) {
      console.log(`  - ${rank}`);
    }
  }

  if (missingCount) {
    console.error(`rank coverage incomplete: ${missingCount} missing rank(s)`);
    process.exitCode = 1;
  } else {
    console.log("rank coverage ok");
  }
}

function loadData() {
  const scripts = parseIndexScripts().filter((src) => src.startsWith("data/"));
  const context = vm.createContext({ console, window: {} });
  context.window.window = context.window;

  for (const src of scripts) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, src), "utf8"), context, { filename: src });
  }
  return context.window;
}

function parseIndexScripts() {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  return [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)].map((match) => match[1].replace(/\\/g, "/"));
}

function buildCoverage(characters) {
  const coverage = Object.fromEntries(Object.keys(RANK_ORDERS).map((key) => [key, new Set()]));
  for (const character of characters) {
    for (const panel of collectPanels(character)) {
      for (const key of Object.keys(RANK_ORDERS)) {
        const entry = panel.dimensions && panel.dimensions[key];
        if (!entry) continue;
        addRank(coverage[key], entry.normal);
        addRank(coverage[key], entry.peak);
      }
    }
  }
  return coverage;
}

function collectPanels(character) {
  const panels = [{ dimensions: character.dimensions }];
  for (const panel of Array.isArray(character.timelinePanels) ? character.timelinePanels : []) {
    panels.push({ dimensions: panel.dimensions });
  }
  return panels;
}

function addRank(set, value) {
  const rank = baseRank(value);
  if (rank) set.add(rank);
}

function baseRank(value) {
  return String(value || "").split("｜")[0].trim();
}

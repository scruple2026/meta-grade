(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];
  if (!work) throw new Error("射雕英雄传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "huang-rong",
    name: "黄蓉",
    en: "Huang Rong",
    aliases: ["黃蓉", "蓉儿", "桃花岛少主"],
    affiliation: "桃花岛 / 丐帮",
    grade: "机变型高手 / 打狗棒法传人",
    appearances: ["金庸共通世界书", "射雕英雄传"],
    timelineStatus: "射雕主线综合期",
    fandomSlug: "黃蓉",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜打狗棒法/桃花岛武学", "个人输出不靠大范围破坏，峰值来自棒法、掌法和机关应对。"],
      defense: ["砖级", "墙级｜轻功/招架", "防御主要依赖身法、招式和临场规避。"],
      movement: ["亚音速", "亚音速｜桃花岛轻功", "身法灵动，强于普通武者。"],
      reaction: ["亚音速", "亚音速｜机变/近战应对", "反应和判断强，常靠智谋弥补硬面板。"],
      vitality: ["强化凡体", "精锐韧体｜内功/意志", "人体结构，内功和江湖经验提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息/医食知识", "恢复依赖休养、调息和药食知识。"],
      energy: ["砖级能量", "墙级能量｜内力/棒法", "内力资源按金庸高手处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "打狗棒法、桃花岛武学和机关巧计偏技巧、破绽利用和单体压制。",
      resistance: "身法、机变和临场规避强，正面硬抗不如五绝级高手。",
      sensing: "观察力、记忆力、识人和环境利用极强。",
      tactics: "擅长设局、诱导、用语言和环境制造优势。",
      special: "打狗棒法、桃花岛武学、阵法机关、药食知识和高智谋。",
      weakness: "硬碰硬内力不如五绝级，许多优势依赖信息差和准备。",
      setting: "金庸共通 worldbook 的桃花岛、丐帮 key 中出现黄蓉；本条按《射雕英雄传》主线综合期记录。",
      basis: "worldbook只用于抽取黄蓉姓名；定级依据金庸 Wiki 角色/作品入口，智谋和帮主相关身份不直接抬高主面板。"
    })
  })]);
})();

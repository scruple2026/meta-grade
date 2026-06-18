(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ning-zhongze",
    name: "宁中则",
    en: "Ning Zhongze",
    aliases: ["寧中則", "宁女侠", "华山宁氏"],
    affiliation: "华山派",
    grade: "华山派高手",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "主线综合期",
    fandomSlug: "寧中則",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜华山剑法", "华山派高手，单体剑法杀伤。"],
      defense: ["砖级", "墙级｜剑法/内功", "防御依赖剑法、内功和经验。"],
      movement: ["亚音速", "亚音速｜华山轻功", "江湖高手身法。"],
      reaction: ["亚音速", "亚音速｜剑术应对", "能应对门派高手交锋。"],
      vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息休养。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源按华山高手记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "华山剑法偏兵刃单体杀伤和招式压制。",
      resistance: "经验、内功和心性稳定，但不按顶级掌门硬面板处理。",
      sensing: "对华山门内关系和人心变化观察敏锐。",
      tactics: "稳健正派，擅长保护门人和控制冲突。",
      special: "华山剑法、门派经验和道德威望。",
      weakness: "过于重视门派伦理，面对岳不群布局时受情感牵制。",
      setting: "金庸共通 worldbook 的华山派 key 中出现宁中则；本条按《笑傲江湖》主线综合期记录。",
      basis: "worldbook只用于抽取宁中则姓名；定级依据金庸 Wiki 角色/作品入口，门派地位不直接抬高主面板。"
    })
  })]);
})();

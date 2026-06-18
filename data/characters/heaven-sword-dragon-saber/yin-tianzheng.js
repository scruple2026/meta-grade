(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yin-tianzheng",
    name: "殷天正",
    en: "Yin Tianzheng",
    aliases: ["白眉鹰王", "天鹰教主", "Eagle King"],
    affiliation: "天鹰教 / 明教",
    grade: "明教四大法王 / 天鹰教创立者",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "光明顶前后 / 老年高手",
    fandomSlug: "殷天正",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜鹰爪擒拿手/天鹰剑法", "法王级近战杀伤和擒拿强，但仍属武侠人体尺度。"],
      defense: ["砖级", "墙级｜内力/招架", "老年仍可硬撑高手连战，防御来自内力与经验。"],
      movement: ["亚音速", "亚音速｜轻功", "轻功和出手速度高于普通武者。"],
      reaction: ["亚音速", "亚音速｜老练应对", "经验丰富，能处理围攻和门派高手交锋。"],
      vitality: ["强化凡体", "精锐韧体｜老年硬撑", "身体已老，但意志和内力支撑续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖休养调息。"],
      energy: ["砖级能量", "墙级能量｜法王级内力", "内力深厚但不按张无忌级资源处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "鹰爪擒拿手和天鹰剑法偏近身擒拿、兵刃和穴位杀伤。",
      resistance: "老年高手经验强，能硬撑连战；年龄和体力消耗是明显限制。",
      sensing: "江湖阅历深，擅长判断对手门路和局势。",
      tactics: "教主级统御与战斗经验，正面硬战意志强。",
      special: "鹰爪擒拿手、天鹰剑法、天鹰教组织资源。",
      weakness: "年事已高，持久战和伤势恢复不如年轻顶级高手。",
      setting: "金庸共通 worldbook 的天鹰教多条 key 中出现殷天正；本条按《倚天屠龙记》光明顶前后记录。",
      basis: "worldbook只用于抽取殷天正姓名；定级依据金庸 Wiki 角色/作品入口和金庸武侠保守口径，法王/教主身份不直接抬档。"
    })
  })]);
})();

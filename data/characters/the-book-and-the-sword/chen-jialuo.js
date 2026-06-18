(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["书剑恩仇录"];
  if (!work) throw new Error("书剑恩仇录 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "chen-jialuo",
    name: "陈家洛",
    en: "Chen Jialuo",
    aliases: ["陳家洛", "红花会总舵主", "Chen Jialuo"],
    affiliation: "红花会",
    grade: "红花会总舵主 / 武林高手",
    appearances: ["金庸共通世界书", "书剑恩仇录"],
    timelineStatus: "主线综合期",
    fandomSlug: "陳家洛",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜百花错拳/庖丁解牛掌", "红花会高手，输出按单体武侠杀伤记录。"],
      defense: ["砖级", "墙级｜内功/招架", "防御来自内功、身法和兵刃应对。"],
      movement: ["亚音速", "亚音速｜轻功", "主角级江湖身法。"],
      reaction: ["亚音速", "亚音速｜高手交锋", "能应对武林高手近战变化。"],
      vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提升续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息和休养。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源按金庸高手处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "百花错拳、庖丁解牛掌和兵刃应对偏技巧与单体打击。",
      resistance: "内功和江湖经验能提高承压，但不具备超人体结构。",
      sensing: "能识别武功路数和政治局势，索敌仍按武侠常规。",
      tactics: "兼具武功、组织指挥和政治谈判能力，但需依赖红花会网络。",
      special: "红花会总舵主身份、百花错拳、庖丁解牛掌、反清复明组织资源。",
      weakness: "政治理想和组织目标牵制极大；团队资源不计入本人常态面板。",
      setting: "金庸共通 worldbook 的红花会多条 key 中出现陈家洛；本条按《书剑恩仇录》主线综合期记录。",
      basis: "worldbook只用于抽取陈家洛姓名；定级依据金庸 Wiki 角色/作品入口，红花会总舵主身份不直接抬高破坏档。"
    })
  })]);
})();

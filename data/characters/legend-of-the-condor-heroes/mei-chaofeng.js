(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];
  if (!work) throw new Error("射雕英雄传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "mei-chaofeng",
    name: "梅超风",
    en: "Mei Chaofeng",
    aliases: ["梅超風", "铁尸", "黑风双煞"],
    affiliation: "桃花岛叛徒 / 黑风双煞",
    grade: "九阴白骨爪高手",
    appearances: ["金庸共通世界书", "射雕英雄传"],
    timelineStatus: "射雕主线期",
    fandomSlug: "梅超風",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜九阴白骨爪", "爪功杀伤强，偏单体穿刺与擒拿。"],
      defense: ["砖级", "墙级｜横练/内力", "抗打击强于普通武者，但有感知与伤病限制。"],
      movement: ["亚音速", "亚音速｜轻功", "江湖高手身法。"],
      reaction: ["亚音速", "亚音速｜近战本能", "近战经验强，受视力限制影响。"],
      vitality: ["强化凡体", "精锐韧体｜横练/意志", "可承受较重伤势，但仍是人体。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息休养。"],
      energy: ["砖级能量", "墙级能量｜九阴内力", "内力资源按中高端武者记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "九阴白骨爪偏爪击、骨骼穿透和近身恐吓，不等同大范围破坏。",
      resistance: "横练和意志强，但视力/感知短板明显。",
      sensing: "失明后依赖听觉、经验和气息判断，遇到干扰会受限。",
      tactics: "狠辣直接，擅长压迫低阶武者；对顶级高手容易被克制。",
      special: "九阴白骨爪、摧心掌、黑风双煞威名。",
      weakness: "视力缺陷、武学走偏和情绪执念限制发挥。",
      setting: "金庸共通 worldbook 的桃花岛 key 中出现梅超风；本条按《射雕英雄传》主线期记录。",
      basis: "worldbook只用于抽取梅超风姓名；定级依据金庸 Wiki 角色/作品入口，黑风双煞威名不直接抬高主面板。"
    })
  })]);
})();

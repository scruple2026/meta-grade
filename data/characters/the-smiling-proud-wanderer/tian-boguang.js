(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "tian-boguang",
    name: "田伯光",
    en: "Tian Boguang",
    aliases: ["万里独行", "采花大盗", "快刀"],
    affiliation: "江湖独行恶人",
    grade: "快刀高手",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "田伯光",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜快刀", "快刀和轻功威胁远高于普通江湖人。"],
      defense: ["砖级", "墙级｜身法/内力", "靠身法和经验降低风险。"],
      movement: ["亚音速", "亚音速｜万里独行", "轻功是核心优势。"],
      reaction: ["亚音速", "亚音速｜快刀近战", "近战反应和出刀速度强。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "江湖高手体魄。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠内功和休养。"],
      energy: ["砖级能量", "墙级能量｜内力/快刀", "内力和体力资源中等偏高。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "快刀偏高速单体斩击，不等同范围破坏。",
      resistance: "靠轻功和快刀占先，硬防一般。",
      sensing: "江湖经验和追踪、逃脱能力强。",
      tactics: "欺压弱者和快攻强，但容易被心理周旋拖住。",
      special: "万里独行轻功、快刀、恶人身份。",
      weakness: "品性恶劣、好色和自负可被利用。",
      setting: "按金盆洗手期田伯光记录。",
      basis: "worldbook只用于抽取田伯光姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();

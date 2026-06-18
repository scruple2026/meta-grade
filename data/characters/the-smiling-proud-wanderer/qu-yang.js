(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "qu-yang",
    name: "曲洋",
    en: "Qu Yang",
    aliases: ["曲长老", "日月神教长老"],
    affiliation: "日月神教",
    grade: "神教长老 / 琴师",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "曲洋",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜神教武功", "长老级武功强于普通江湖高手。"],
      defense: ["砖级", "墙级｜内力/身法", "内力和经验提供防护。"],
      movement: ["凡人速", "亚音速｜江湖轻功", "身法和脱身能力较强。"],
      reaction: ["凡人速", "亚音速｜老江湖经验", "老江湖反应与判断。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力支撑续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠内功调息。"],
      energy: ["砖级能量", "墙级能量｜内力", "神教长老级内力。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力需调息。"]
    }),
    notes: notes({
      penetration: "神教武功偏江湖近战与突袭，不等同大范围破坏。",
      resistance: "经验丰富，但正邪追杀和保护曲非烟会削弱行动空间。",
      sensing: "老江湖经验、隐蔽行动和音律默契强。",
      tactics: "能隐匿、救援和托付曲谱；不以正面争胜为目标。",
      special: "日月神教长老身份、音律、笑傲江湖曲。",
      weakness: "曲非烟和刘正风情义牵制极重。",
      setting: "按金盆洗手期曲洋记录。",
      basis: "worldbook只用于抽取曲洋姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();

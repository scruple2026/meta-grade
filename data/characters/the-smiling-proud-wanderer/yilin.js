(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yilin",
    name: "仪琳",
    en: "Yilin",
    aliases: ["小尼姑", "恒山派仪琳"],
    affiliation: "恒山派",
    grade: "恒山派弟子",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "儀琳",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "砖级｜恒山武功", "会武功但金盆洗手期实战较弱。"],
      defense: ["凡人级", "砖级｜身法/内力", "基础武功提供有限防护。"],
      movement: ["凡人速", "亚音速｜恒山轻功", "轻功强于普通人。"],
      reaction: ["凡人速", "凡人速", "实战经验有限。"],
      vitality: ["强化凡体", "强化凡体", "训练者体魄。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠休养和内功。"],
      energy: ["凡人能量", "砖级能量｜基础内力", "内力基础有限。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "恒山基础武功可自保，但不适合压制田伯光等高手。",
      resistance: "本体防护低，常需要令狐冲和师门保护。",
      sensing: "心性单纯，战斗判断有限。",
      tactics: "善良守戒，临场杀伐不足。",
      special: "恒山派武功、佛门戒律、金盆洗手救援线。",
      weakness: "经验不足、心软，面对恶人时容易受制。",
      setting: "按金盆洗手期仪琳记录。",
      basis: "worldbook只用于抽取仪琳姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();

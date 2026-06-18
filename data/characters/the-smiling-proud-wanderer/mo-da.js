(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "mo-da",
    name: "莫大先生",
    en: "Mo Da",
    aliases: ["莫大", "潇湘夜雨", "衡山掌门"],
    affiliation: "衡山派",
    grade: "衡山派掌门",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "莫大",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜衡山剑法/暗袭", "可凭隐蔽剑法击杀费彬，偏技巧和突然性。"],
      defense: ["砖级", "墙级｜内力/身法", "掌门级身法和内力防护。"],
      movement: ["亚音速", "亚音速｜衡山身法", "隐蔽身法和出手速度强。"],
      reaction: ["亚音速", "亚音速｜老江湖经验", "经验、潜伏和读局能力强。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内力提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "依靠内功调息。"],
      energy: ["砖级能量", "墙级能量｜内力", "掌门级内力资源。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息。"]
    }),
    notes: notes({
      penetration: "衡山剑法、胡琴伪装和突然出剑偏精确斩杀。",
      resistance: "身法和隐蔽性强，硬抗不是主要优势。",
      sensing: "老江湖视角、隐忍和局势判断强。",
      tactics: "擅长隐蔽观察、突然出手和避免正面政治冲突。",
      special: "衡山掌门、潇湘夜雨、胡琴伪装、隐蔽剑法。",
      weakness: "行事隐晦，正面压场和组织保护能力有限。",
      setting: "按金盆洗手期莫大先生记录。",
      basis: "worldbook只用于抽取莫大先生姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();

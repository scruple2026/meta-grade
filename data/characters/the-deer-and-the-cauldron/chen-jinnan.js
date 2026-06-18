(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鹿鼎记"];
  if (!work) throw new Error("鹿鼎记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "chen-jinnan",
    name: "陈近南",
    en: "Chen Jinnan",
    aliases: ["陳近南", "陈永华", "天地会总舵主", "为人不识陈近南"],
    affiliation: "天地会 / 台湾郑氏",
    grade: "天地会总舵主 / 高手",
    appearances: ["金庸共通世界书", "鹿鼎记"],
    timelineStatus: "主线综合期",
    fandomSlug: "陳近南",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜凝血神爪/掌力", "鹿鼎记高端武者，正面杀伤强于普通人。"],
      defense: ["砖级", "墙级｜内功/招架", "防御依赖内功、身法和经验。"],
      movement: ["亚音速", "亚音速｜轻功", "高手级轻功和身法。"],
      reaction: ["亚音速", "亚音速｜总舵主经验", "战斗经验和临场判断强。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖休养调息。"],
      energy: ["砖级能量", "墙级能量｜内力", "内力资源按金庸高手处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "掌力、爪功和近战武学偏单体压制。",
      resistance: "内功和经验可靠，但面对围攻、暗算和政治局势仍会受限。",
      sensing: "江湖阅历、组织情报和识人能力强。",
      tactics: "统御天地会、布局反清复明，能识别局势并利用组织资源。",
      special: "天地会总舵主身份、凝血神爪、反清组织网络。",
      weakness: "组织目标和政治身份会制造行动约束；被暗算时仍是人体承伤。",
      setting: "金庸共通 worldbook 的天地会多条 key 中出现陈近南；本条按《鹿鼎记》主线综合期记录。",
      basis: "worldbook只用于抽取陈近南姓名；定级依据金庸 Wiki 角色/作品入口，天地会总舵主地位不直接抬高主面板。"
    })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "qu-feiyan",
    name: "曲非烟",
    en: "Qu Feiyan",
    aliases: ["非非", "曲洋孙女"],
    affiliation: "日月神教关联",
    grade: "曲洋孙女",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手期",
    fandomSlug: "曲非煙",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "凡人级", "缺少正面战斗输出。"],
      defense: ["凡人级", "凡人级", "本体脆弱。"],
      movement: ["凡人速", "凡人速", "日常行动速度。"],
      reaction: ["凡人速", "凡人速", "不以战斗反应为主。"],
      vitality: ["凡人肉身", "凡人肉身", "普通少女生命体量。"],
      healing: ["无自愈", "无自愈", "没有自愈能力。"],
      energy: ["不适用", "不适用", "没有可量化战斗内力池。"],
      energyRegen: ["不适用", "不适用", "没有回能面板。"]
    }),
    notes: notes({
      penetration: "几乎不承担直接攻击，剧情作用来自曲洋亲属身份和托付线。",
      resistance: "本体脆弱，面对费彬等高手毫无防护。",
      sensing: "机敏活泼，但不是战斗索敌角色。",
      tactics: "能随机应对江湖场面，缺少实战能力。",
      special: "曲洋孙女、金盆洗手惨案见证者。",
      weakness: "年龄、体魄和保护依赖明显。",
      setting: "按金盆洗手期曲非烟记录。",
      basis: "worldbook只用于抽取曲非烟姓名；定级依据金庸 Wiki 和公开小说条目入口，剧情重要性不折算主面板。"
    })
  })]);
})();

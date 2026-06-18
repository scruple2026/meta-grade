(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shinji-matou",
    name: "间桐慎二",
    en: "Shinji Matou",
    ja: "間桐慎二",
    aliases: ["慎二"],
    affiliation: "间桐家 / Rider临时御主",
    grade: "伪御主 / 普通人",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Shinji_Matou",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "砖级｜伪臣之书/道具", "本体战力低，威胁依赖Rider和道具。"],
      defense: ["凡人级", "凡人级", "本体防护低。"],
      movement: ["凡人速", "凡人速", "普通人速度。"],
      reaction: ["凡人速", "凡人速", "战斗反应低。"],
      vitality: ["凡人肉身", "凡人肉身", "普通人体。"],
      healing: ["无自愈", "无自愈", "没有自愈能力。"],
      energy: ["不适用｜无稳定魔术回路", "砖级能量｜伪臣之书", "魔术资源主要来自外部系统。"],
      energyRegen: ["不适用", "缓慢回能｜外部供给", "依赖外部资源。"]
    }),
    notes: notes({
      penetration: "自身攻击低，主要依赖Rider、伪臣之书和场地陷阱。",
      resistance: "本体脆弱，缺少可靠魔术防护。",
      sensing: "情报和判断常被自尊与嫉妒扭曲。",
      tactics: "擅长欺压弱者和借外力，不擅长高压实战。",
      special: "伪臣之书、Rider临时控制、间桐家身份。",
      weakness: "本体弱、心态差、依赖外力且容易失控。",
      setting: "按第五次圣杯战争间桐慎二记录。",
      basis: "worldbook只用于抽取间桐慎二姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，Rider另列。"
    })
  })]);
})();

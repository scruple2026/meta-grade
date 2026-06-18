(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sweeper-monk",
    name: "扫地僧",
    en: "Sweeper Monk",
    aliases: ["无名老僧", "藏经阁老僧"],
    affiliation: "少林寺藏经阁",
    grade: "隐世高僧",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会 / 藏经阁出手",
    fandomSlug: "掃地僧",
    confidence: "review",
    evidenceType: ["角色页入口", "小说条目入口", "高端武侠峰值"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["房屋级", "楼级｜高深内力/点化", "以压倒性内力和控制见长，楼级作为高风险保守峰值。"],
      defense: ["房屋级", "楼级｜三尺气墙", "气墙和内力防护是少室山顶级表现。"],
      movement: ["亚音速", "亚音速｜高僧身法", "速度不强行升到现代高速档。"],
      reaction: ["亚音速", "亚音速｜超凡武学判断", "反应和读局远高于常人。"],
      vitality: ["精锐韧体", "精锐韧体｜高深内力", "仍按人体生命体量处理，不把气墙等同生命结构。"],
      healing: ["中速自愈｜内功/佛法", "快速自愈｜疗伤点化｜争议", "可处理内伤与假死状态，但不按无限再生。"],
      energy: ["房屋级能量", "楼级能量｜高深内力", "总内力远超一般高手。"],
      energyRegen: ["中速回能", "快速回能｜调息/佛法｜争议", "恢复能力强但仍非瞬时无限。"]
    }),
    notes: notes({
      penetration: "以内力压制、点穴/掌击和佛法化解为主，杀伤不等同大范围爆破。",
      resistance: "三尺气墙是强防护表现，但仍按武侠内力防护而非现代护盾无限化。",
      sensing: "洞察藏经阁诸人隐患、武学反噬和心性问题。",
      tactics: "几乎以局外高僧视角控场，擅长化解冲突而非扩大杀伤。",
      special: "三尺气墙、高深内力、疗伤点化、佛法化解、龟息式处理。",
      weakness: "主动杀伐意愿低，表现集中在少室山藏经阁场景。",
      setting: "按少室山大会扫地僧出手记录。",
      basis: "worldbook只用于抽取扫地僧姓名；定级依据金庸 Wiki 和公开小说条目入口，气墙作为防御峰值而非生命体量。"
    })
  })]);
})();

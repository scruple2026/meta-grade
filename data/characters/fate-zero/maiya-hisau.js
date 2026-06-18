(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "maiya-hisau",
    name: "久宇舞弥",
    en: "Maiya Hisau",
    ja: "久宇舞弥",
    aliases: ["舞弥", "Hisau Maiya"],
    affiliation: "爱因兹贝伦阵营",
    grade: "切嗣助手 / 现代武装",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Maiya_Hisau",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "现代武装"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜枪械/爆破支援", "以现代枪械、爆破和战术支援为主。"],
        defense: ["凡人级", "砖级｜装备/掩体", "本体仍是普通人类承伤。"],
        movement: ["凡人速", "亚音速｜战术动作", "训练者水平的短距离动作。"],
        reaction: ["凡人速", "亚音速｜枪战经验", "枪战和潜入反应优秀但不脱离人类尺度。"],
        vitality: ["凡人肉身", "强化凡体｜训练", "训练者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗", "没有战斗自愈。"],
        energy: ["凡人能量", "砖级能量｜携行武装", "战斗资源来自弹药、装备和支援准备。"],
        energyRegen: ["无回能", "缓慢回能｜补给", "消耗依赖补给。"]
      }),
    notes: notes({
        penetration: "枪械对普通人和低防魔术师危险，对从者正面效果有限。",
        resistance: "依靠隐蔽、装备和掩体，本体抗性低。",
        sensing: "侦查、潜入和战场观察强。",
        tactics: "作为切嗣助手擅长协同、支援射击、潜入和撤离。",
        special: "现代武装、潜入、战术支援。",
        weakness: "缺乏从者级身体能力和魔术资源。",
        setting: "按第四次圣杯战争久宇舞弥记录。",
        basis: "worldbook只用于抽取久宇舞弥姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，现代武装作为装备峰值。"
      })
  })]);
})();

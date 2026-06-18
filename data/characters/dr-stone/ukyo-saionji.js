(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ukyo-saionji",
      name: "西园寺羽京",
      en: "Ukyo Saionji",
      ja: "西園寺羽京",
      affiliation: "司帝国 / 科学王国",
      grade: "弓手 / 索敌",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇",
      aliases: ["羽京", "Ukyo"],
      fandomSlug: "Ukyo_Saionji",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜弓箭", "弓箭提供远程杀伤但不属大范围破坏。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "亚音速｜听觉/射击", "听觉和射击判断优秀，不代表肉身高速移动。"],
        vitality: ["凡人肉身", "强化凡体", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "砖级能量｜弓箭/体能", "资源来自弓箭、体能和弹药。"],
        energyRegen: ["中速回能", "缓慢回能｜箭矢补给", "需要箭矢和补给。"]
      }),
      notes: notes({
        penetration: "弓箭和精确射击威胁无防护目标。",
        resistance: "无特殊抗性。",
        sensing: "听觉和索敌能力突出，可通过声音判断人员与战况。",
        tactics: "偏侦察和支援，能用远程压制和信息优势影响战局。",
        special: "超常听觉、弓箭、侦察。",
        weakness: "近战和防御有限，依赖距离、箭矢和地形。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取羽京姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();

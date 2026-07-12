(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nagisa-shiota",
      name: "潮田渚",
      en: "Nagisa Shiota",
      ja: "潮田渚",
      affiliation: "椚丘中学3年E班",
      grade: "E班学生 / 暗杀天赋",
      appearances: ["E班暗杀计划"],
      timelineStatus: "E班训练期",
      aliases: ["渚", "Nagisa"],
      fandomSlug: "Nagisa_Shiota",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜暗杀技巧/武器", "正面破坏低，暗杀命中和心理压迫强。"],
        defense: ["凡人级", "凡人级", "普通学生肉身。"],
        movement: ["凡人速", "凡人速｜训练", "训练后仍属人类范围。"],
        reaction: ["凡人速", "亚音速｜暗杀时机", "暗杀时机和读气息优秀，不等同持续高速。"],
        vitality: ["凡人肉身", "强化凡体｜训练", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜武器/训练", "资源来自暗杀武器、技巧和团队计划。"],
        energyRegen: ["中速回能", "中速回能｜体能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "暗杀技巧、杀气控制、短刃和反杀老师武器可在条件下制造高命中威胁。攻击速度：短刃突袭依赖贴身时机与杀气隐藏，拍手等暗杀技巧是制造停顿的前置，不代表远程攻击载体。",
        resistance: "肉身防御低，依赖伏击、欺骗和距离。",
        sensing: "对气息、恐惧和暗杀时机敏感。",
        tactics: "暗杀天赋强，适合近距突袭、诱导和心理压迫。",
        special: "杀气隐藏、暗杀技巧、反杀老师武器使用。",
        weakness: "正面体能和防御普通，缺少重火力。",
        setting: "按E班暗杀训练期记录。",
        basis: "worldbook只用于抽取潮田渚姓名；定级依据官方动画入口与Assassination Classroom Wiki资料入口。"
      })
    })
  ]);
})();

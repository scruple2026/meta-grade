(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "corkus",
      name: "科尔卡斯",
      en: "Corkus",
      ja: "コルカス",
      affiliation: "鹰之团",
      grade: "佣兵 / 老成员",
      appearances: ["黄金时代", "蚀之刻"],
      timelineStatus: "黄金时代 / 蚀之刻牺牲",
      aliases: ["Corkus", "柯尔卡斯", "可尔卡斯", "鹰之团残部"],
      fandomSlug: "Corkus",
      confidence: "medium",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "worldbook只用于抽取鹰之团残部名单；主面板按黄金时代人类佣兵阶段记录。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜剑/佣兵武装", "普通到熟练佣兵杀伤，低于格斯和卡思嘉。"],
        defense: ["凡人级", "砖级｜甲胄/格挡", "本体人类，依赖甲胄和队伍。"],
        movement: ["凡人速", "凡人速", "普通佣兵机动。"],
        reaction: ["凡人速", "凡人速｜战场经验", "有佣兵经验，但不以高速反应见长。"],
        vitality: ["凡人肉身", "强化凡体｜佣兵训练", "训练者生命体量。"],
        healing: ["无自愈", "无自愈", "依赖医疗和休养。"],
        energy: ["凡人能量", "砖级能量｜体力/装备", "无超自然能量池。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "剑、骑兵/佣兵装备和小队协同是主要杀伤方式。",
        resistance: "普通人类佣兵，甲胄和队形保护有限。",
        sensing: "有战场经验和对风险的直觉，但情绪与恐惧会影响判断。",
        tactics: "熟悉鹰之团作战，更多作为普通老成员和队伍氛围角色。",
        special: "佣兵经验、鹰之团协同、骑兵/步兵常规武装。",
        weakness: "胆怯、嫉妒和恐惧会干扰判断；无超自然防护。",
        setting: "按黄金时代到蚀之刻牺牲前的科尔卡斯记录。",
        basis: "依据Berserk Wiki角色入口和黄金时代鹰之团表现保守定级。"
      })
    })
  ]);
})();

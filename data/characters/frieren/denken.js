(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "denken",
      name: "邓肯",
      en: "Denken",
      ja: "デンケン",
      affiliation: "帝国 / 一级魔法使",
      grade: "一级魔法使 / 老练战斗者",
      appearances: ["一级魔法使考试", "黄金乡篇"],
      timelineStatus: "黄金乡篇 / 一级魔法使",
      aliases: ["Denken"],
      fandomSlug: "Denken",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "楼级｜攻击魔法", "一级魔法使级输出，重在经验和术式选择。"],
        defense: ["墙级", "楼级｜防御魔法", "防御魔法和经验支撑承伤。"],
        movement: ["凡人速", "亚音速｜飞行魔法", "可用魔法移动。"],
        reaction: ["亚音速", "亚音速｜经验", "老练判断弥补年龄劣势。"],
        vitality: ["强化凡体", "精锐韧体｜防御魔法保护", "老年肉身有限，依赖防御魔法。"],
        healing: ["无自愈", "缓慢自愈｜外部治疗", "无高速自愈。"],
        energy: ["楼级能量", "楼级能量｜魔力", "魔力优秀但不及芙莉莲等顶层。"],
        energyRegen: ["快速回能", "快速回能｜魔力恢复", "可恢复但高强度战会耗竭。"]
      }),
      notes: notes({
        penetration: "多种攻击魔法和战术施法，适合对抗魔法使和魔族。",
        resistance: "防御魔法、经验和判断很强，本体老年肉身是弱点。",
        sensing: "魔力感知和社会/战场经验丰富，能识别对手意图。",
        tactics: "老练、务实，能在资源不足时转向近身、地形和心理策略。",
        special: "攻击/防御魔法、飞行、一级魔法使经验。",
        weakness: "年龄和体力限制明显，面对大魔族特殊魔法需要情报和队友。",
        setting: "按黄金乡篇邓肯记录。",
        basis: "依据邓肯在一级魔法使考试和黄金乡篇中的魔法、经验与战术表现定级。"
      })
    })
  ]);
})();

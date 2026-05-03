(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["进击的巨人"];

  if (!work) {
    throw new Error("进击的巨人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "reiner-braun",
      name: "莱纳·布朗",
      en: "Reiner Braun",
      ja: "ライナー・ブラウン",
      affiliation: "玛莱战士队",
      grade: "铠之巨人继承者",
      appearances: ["正篇"],
      timelineStatus: "后期战士队",
      aliases: ["铠之巨人"],
      fandomSlug: "Reiner_Braun",
      dimensions: dims({
        attack: ["楼级", "街区级｜巨人冲撞｜硬质化", "铠之巨人冲撞和硬质化可破坏城墙局部与建筑群。"],
        defense: ["楼级", "街区级｜铠甲硬质化", "硬质化铠甲可抗常规炮火和巨人攻击，但雷枪等装备可破防。"],
        movement: ["亚音速", "亚音速｜巨人体冲刺", "巨人体冲刺强但不按音速处理。"],
        reaction: ["凡人速", "亚音速", "战士训练和巨人近战经验优秀。"],
        vitality: ["楼级生命阈值｜巨人体｜特殊生命结构", "街区级生命阈值｜巨人体", "巨人体和继承者再生显著提升生存力。"],
        healing: ["快速自愈", "快速自愈｜巨人之力", "巨人之力可修复重伤，受体力和意志影响。"],
        energy: ["楼级能量", "街区级能量｜巨人之力", "以巨人体体力、硬质化和再生资源体现。"],
        energyRegen: ["常规回能", "快速回能｜巨人之力", "可恢复但不能无限连续巨人化。"]
      }),
      notes: notes({
        penetration: "硬质化拳击和冲撞适合破墙破阵，精准穿透有限。",
        resistance: "对常规刀刃、冲击有高抗性；雷枪、反巨人炮和后颈攻击是弱点。",
        special: "铠之巨人、硬质化、巨人再生、战士队训练。",
        weakness: "后颈、本体精神状态和反巨人装备可明显克制。",
        setting: "按后期成熟战士莱纳记录；铠之巨人硬质化、战士训练和精神状态波动共同影响主面板。",
        basis: "依据莱纳破墙、对艾伦巨人、调查兵团雷枪和最终战承伤表现定级。"
      })
    })
  ]);
})();

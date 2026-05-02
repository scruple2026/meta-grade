(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["进击的巨人"];

  if (!work) {
    throw new Error("进击的巨人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mikasa-ackerman",
      name: "三笠·阿克曼",
      en: "Mikasa Ackerman",
      ja: "ミカサ・アッカーマン",
      affiliation: "调查兵团",
      grade: "阿克曼战士",
      appearances: ["正篇"],
      timelineStatus: "最终章",
      aliases: ["三笠", "Ackerman"],
      fandomSlug: "Mikasa_Ackerman",
      dimensions: dims({
        attack: ["砖级", "墙级｜雷枪｜立体机动", "常规刀刃针对巨人弱点；雷枪可造成局部爆破。"],
        defense: ["凡人级", "墙级｜机动规避", "本体仍是人类，峰值靠立体机动、护具和规避。"],
        movement: ["亚音速", "亚音速｜立体机动", "立体机动高速穿梭但未达到音速证据。"],
        reaction: ["亚音速", "亚音速｜阿克曼觉醒", "阿克曼战斗直觉和训练带来高反应，不直接按雷枪或枪械速度抬级。"],
        vitality: ["强化凡体", "精锐韧体", "可在战场重伤压力下继续作战，但仍是人类结构。"],
        healing: ["无自愈", "无自愈", "无超常自愈。"],
        energy: ["凡人能量", "墙级能量｜装备", "输出依赖体力、刀刃和雷枪装备。"],
        energyRegen: ["常规回能", "常规回能", "依赖体力恢复和补给。"]
      }),
      notes: notes({
        penetration: "对巨人后颈有体系弱点针对；雷枪有局部爆破穿透。",
        resistance: "无巨人级肉体抗性，面对爆炸和枪械仍脆弱。",
        special: "阿克曼战斗本能、立体机动、对巨人斩杀经验。",
        weakness: "高度依赖装备、瓦斯、刀刃和战场锚点。",
        setting: "按最终章成熟调查兵三笠记录。",
        basis: "依据三笠长期对巨人、战士队和最终战中的立体机动、斩杀和承压表现定级。"
      })
    })
  ]);
})();

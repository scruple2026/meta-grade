(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["攻壳机动队"];

  if (!work) {
    throw new Error("Ghost in the Shell work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "togusa",
      name: "德古沙",
      en: "Togusa",
      ja: "トグサ",
      affiliation: "公安九课",
      grade: "刑警 / 低义体化成员",
      appearances: ["傀儡师事件", "1995电影"],
      timelineStatus: "1995电影 / 公安九课成员",
      aliases: ["Togusa"],
      fandomSlug: "Togusa",
      confidence: "medium",
      evidenceType: ["官方作品页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜手枪/刑警装备", "主要依靠手枪和刑警装备。"],
        defense: ["凡人级", "凡人级", "义体化程度低，防御接近普通人。"],
        movement: ["凡人速", "凡人速", "普通人机动。"],
        reaction: ["凡人速", "凡人速｜刑警训练", "受过训练但不属义体高速战斗员。"],
        vitality: ["凡人肉身", "强化凡体｜训练", "低义体化成员，生命体量接近人类。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜枪械/装备", "资源来自枪械、电子脑和九课支援。"],
        energyRegen: ["中速回能", "缓慢回能｜弹药补给", "需要弹药和装备补给。"]
      }),
      notes: notes({
        penetration: "手枪、刑警技能和电子脑侦查是主要手段。攻击速度：德古沙的手枪攻击分为拔枪、瞄准、扣发和弹丸飞行；刑警判断与电子脑侦查帮助找目标，但不是攻击载体。",
        resistance: "低义体化使他比草薙/巴特更脆弱。",
        sensing: "刑警直觉、调查能力和电子脑接入辅助侦查。",
        tactics: "适合调查、追踪、人类视角判断和补足九课团队结构。",
        special: "电子脑、刑警经验、九课支援。",
        weakness: "身体强化较少，正面战斗和承伤弱于全身义体成员。",
        setting: "按1995电影傀儡师事件记录。",
        basis: "worldbook只用于抽取德古沙姓名；定级依据Production I.G官方作品页、官方系列页和Ghost in the Shell Wiki入口。"
      })
    })
  ]);
})();

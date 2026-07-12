(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["攻壳机动队"];

  if (!work) {
    throw new Error("Ghost in the Shell work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "daisuke-aramaki",
      name: "荒卷大辅",
      en: "Daisuke Aramaki",
      ja: "荒巻大輔",
      affiliation: "公安九课",
      grade: "公安九课课长",
      appearances: ["傀儡师事件", "1995电影"],
      timelineStatus: "1995电影 / 公安九课指挥官",
      aliases: ["荒卷", "Aramaki"],
      fandomSlug: "Daisuke_Aramaki",
      confidence: "medium",
      evidenceType: ["官方作品页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙级｜九课火力指挥｜外部", "个人武力有限，峰值来自公安九课资源调度。"],
        defense: ["凡人级", "凡人级", "本体按普通人处理。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜指挥判断", "指挥判断不等同高速身体反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙级能量｜九课资源/外部", "资源来自九课行动队、装备和政治权限。"],
        energyRegen: ["中速回能", "缓慢回能｜组织资源", "组织资源受权限和局势制约。"]
      }),
      notes: notes({
        penetration: "个人直接攻击弱，可通过九课行动队和政治操作施压。攻击速度：荒卷本体若临时使用枪械或工具，只按普通人的取用、瞄准和击发处理；九课行动队火力还要经过指挥链并由队员实际执行。",
        resistance: "无特殊抗性，依赖组织保护和情报优势。",
        sensing: "通过公安九课情报网、政治渠道和现场报告掌握局势。",
        tactics: "政治判断、组织指挥和危机处理是核心强项。",
        special: "公安九课指挥权、政治博弈、情报网。",
        weakness: "本体战斗力低，离开组织资源后正面能力有限。",
        setting: "按1995电影公安九课课长记录。",
        basis: "worldbook只用于抽取荒卷大辅姓名；定级依据Production I.G官方作品页、官方系列页和Ghost in the Shell Wiki入口。"
      })
    })
  ]);
})();

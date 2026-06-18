(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "crusch-karsten",
      name: "克鲁修·卡尔斯滕",
      en: "Crusch Karsten",
      ja: "クルシュ・カルステン",
      affiliation: "克鲁修阵营 / 王选候选人",
      grade: "卡尔斯滕公爵家当主 / 王选候选人",
      appearances: ["王选篇", "白鲸讨伐"],
      timelineStatus: "白鲸讨伐前后",
      aliases: ["Crusch", "卡尔斯滕"],
      fandomSlug: "Crusch_Karsten",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜剑术/风魔法", "剑术和风系能力可形成高人类级杀伤。"],
        defense: ["砖级", "墙级｜甲胄/风魔法", "依靠甲胄、技量和魔法防御。"],
        movement: ["凡人速", "亚音速｜剑术", "高端人类机动。"],
        reaction: ["凡人速", "亚音速｜剑术/风见", "战斗判断和加护辅助反应。"],
        vitality: ["强化凡体", "精锐韧体", "训练者生命体量。"],
        healing: ["无自愈", "无自愈", "自身不以治疗著称。"],
        energy: ["砖级能量", "墙级能量｜魔法/阵营资源", "个人魔力和阵营资源分开记录。"],
        energyRegen: ["中速回能", "中速回能｜魔力", "按魔法战斗资源恢复处理。"]
      }),
      notes: notes({
        penetration: "剑术和风魔法提供近中距杀伤；阵营军力不并入个人常态攻击。",
        resistance: "个人防御有限，依赖装备、技量和护卫体系。",
        sensing: "风见的加护可识破谎言，是政治与情报优势，不等同战斗全知。",
        tactics: "王选候选人和联军领袖，指挥、谈判与战前规划优秀。",
        special: "风见的加护、风魔法、克鲁修阵营资源。",
        weakness: "个人主表不等于整个阵营军力；记忆丧失阶段需另行区分。",
        setting: "按白鲸讨伐前后的克鲁修记录。",
        basis: "worldbook只用于抽取克鲁修姓名；定级依据官方角色页与Re:Zero Wiki资料入口。"
      })
    })
  ]);
})();

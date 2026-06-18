(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ferris",
      name: "菲利克斯·阿盖尔",
      en: "Ferris",
      ja: "フェリス",
      affiliation: "克鲁修阵营",
      grade: "治愈魔法师 / 克鲁修的骑士",
      appearances: ["王选篇", "白鲸讨伐"],
      timelineStatus: "王选篇 / 王都顶级治愈魔法师",
      aliases: ["菲利克斯", "Felix Argyle", "Ferris", "菲莉丝"],
      fandomSlug: "Ferris",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜水魔法/医疗干涉", "直接杀伤不是强项。"],
        defense: ["凡人级", "凡人级", "肉身普通。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜治疗判断", "医疗判断强，不等同高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["快速自愈｜治愈魔法", "瞬愈｜高级治愈魔法｜条件", "治愈魔法很强，但对自身和目标均受魔力与伤势条件限制。"],
        energy: ["凡人能量", "墙级能量｜治愈魔法", "魔力资源主要用于治疗和辅助。"],
        energyRegen: ["中速回能", "中速回能｜魔力", "魔力恢复有限。"]
      }),
      notes: notes({
        penetration: "直接攻击弱，医疗魔法可通过生命维持、干涉和支援改变战局。",
        resistance: "本体防御低，需依赖队友保护和后排定位。",
        sensing: "医学、魔法治疗和身体状态判断极强。",
        tactics: "适合后排医疗、续航支援和保护关键人物。",
        special: "高级治愈魔法、水魔法、医疗支援、克鲁修阵营骑士身份。",
        weakness: "正面战斗弱，受魔力、施法时间和保护条件限制。",
        setting: "按王选篇菲利克斯记录。",
        basis: "worldbook只用于抽取菲利克斯姓名；定级依据官方角色页与Re:Zero Wiki资料入口，治疗能力按生命回复维度和特殊项记录。"
      })
    })
  ]);
})();

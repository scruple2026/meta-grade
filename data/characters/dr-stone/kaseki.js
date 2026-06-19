(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kaseki",
      name: "化石",
      en: "Kaseki",
      ja: "カセキ",
      affiliation: "科学王国 / 石神村",
      grade: "工匠",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 科学王国",
      aliases: ["Kaseki", "老工匠"],
      fandomSlug: "Kaseki",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜工具/工匠体能", "直接战斗有限。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜工匠判断", "制作判断不等同身体高速反应。"],
        vitality: ["凡人肉身", "强化凡体｜工匠体魄", "体魄结实但仍属凡人尺度。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "砖级能量｜工匠工具/材料", "价值在制作设备而非个人能量池。"],
        energyRegen: ["中速回能", "缓慢回能｜材料/工坊", "需要材料和制作环境。"]
      }),
      notes: notes({
        penetration: "直接攻击弱，能通过工具和工艺产出关键装备。",
        resistance: "无特殊抗性。",
        sensing: "对结构、材料和工艺异常敏感。",
        tactics: "作为工匠能把科学方案落成可用装备，显著提高团队战力。",
        special: "精密制作、工艺、设备组装和维修。",
        weakness: "非主战人员，正面战斗能力有限。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取化石姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();

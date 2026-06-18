(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "puck",
      name: "帕克",
      en: "Puck",
      ja: "パック",
      affiliation: "爱蜜莉雅阵营 / 大精灵",
      grade: "大精灵 / 爱蜜莉雅契约精灵",
      appearances: ["王选篇"],
      timelineStatus: "王选篇 / 大精灵",
      aliases: ["Pack", "Puck", "大精灵"],
      fandomSlug: "Puck",
      confidence: "review",
      evidenceType: ["官方角色页", "角色页入口", "高风险精灵峰值"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "街区级｜大精灵冰/火属性｜争议", "大精灵魔法威胁高，但王选篇不把世界终焉说法直接抬高。"],
        defense: ["砖级", "街区级｜精灵体/魔法防护｜争议", "精灵体与魔法防护强于常人。"],
        movement: ["亚音速", "亚音速｜飞行/精灵体", "可飞行和灵活移动。"],
        reaction: ["亚音速", "亚音速｜精灵感知", "精灵感知和魔法响应优秀。"],
        vitality: ["强化凡体｜精灵体", "街区级生命阈值｜大精灵存在｜争议", "生命体量按精灵存在方式保守记录。"],
        healing: ["缓慢自愈", "未知｜精灵体", "缺少稳定快速再生资料。"],
        energy: ["墙级能量", "街区级能量｜大精灵魔力｜争议", "大精灵魔力资源很高但不泛化为高天体档。"],
        energyRegen: ["中速回能", "中速回能｜精灵魔力", "魔力恢复受契约和活动时间限制。"]
      }),
      notes: notes({
        penetration: "冰/火属性精灵魔法可造成范围控制和高压制。",
        resistance: "精灵体与魔法防护强，但契约、活动时间和爱蜜莉雅状态是关键条件。",
        sensing: "精灵感知和契约联系可辅助爱蜜莉雅。",
        tactics: "以保护爱蜜莉雅为优先，常态体型小但判断成熟。",
        special: "大精灵、契约、冰/火属性魔法、精灵体存在。",
        weakness: "活动时间、契约条件和爱蜜莉雅状态会限制发挥；高端峰值争议较大。",
        setting: "按王选篇帕克记录，不把后续/极端终焉解释直接并入常态。",
        basis: "worldbook只用于抽取帕克姓名；定级依据官方角色页与Re:Zero Wiki资料入口，大精灵峰值保守收束为街区级争议。"
      })
    })
  ]);
})();

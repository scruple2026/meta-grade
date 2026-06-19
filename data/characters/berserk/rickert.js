(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "rickert",
      name: "里基特",
      en: "Rickert",
      ja: "リッケルト",
      affiliation: "鹰之团",
      grade: "少年佣兵 / 工匠",
      appearances: ["黄金时代", "蚀之刻前后"],
      timelineStatus: "黄金时代 / 蚀之刻前后",
      aliases: ["Rickert", "里凯尔特", "鹰之团残部"],
      fandomSlug: "Rickert",
      confidence: "medium",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "worldbook只用于抽取鹰之团残部名单；主面板按黄金时代少年佣兵到工匠路线记录。"
      ],
      dimensions: dims({
        attack: ["凡人级", "砖级｜武器/机关制作", "少年佣兵正面战力有限，后续工匠能力提高装备威胁。"],
        defense: ["凡人级", "凡人级｜普通防具", "本体仍是普通人类。"],
        movement: ["凡人速", "凡人速", "日常和少年佣兵机动。"],
        reaction: ["凡人速", "凡人速", "普通人到训练者反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通少年到青年人类生命体量。"],
        healing: ["无自愈", "无自愈", "依赖医疗和休养。"],
        energy: ["凡人能量", "砖级能量｜工匠装备/补给", "个人能量低，价值更多在装备制作。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "早期主要是普通武器和辅助；后续工匠路线可通过装备、机关和制作提高团队火力。",
        resistance: "普通人类，缺少直接承伤优势。",
        sensing: "幸存者视角和工匠经验带来谨慎判断，战斗索敌一般。",
        tactics: "更偏后勤、制作、组织和政治判断，不是正面高战力角色。",
        special: "鹰之团幸存者、工匠技术、装备制作、后勤支援。",
        weakness: "本体战斗力低，依赖环境、装备和盟友。",
        setting: "按黄金时代到蚀之刻前后记录，不把后续所有工匠成果等同本体战力。",
        basis: "依据Berserk Wiki角色入口和黄金时代鹰之团残部语境保守定级。"
      })
    })
  ]);
})();

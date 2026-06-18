(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tadaomi-karasuma",
      name: "乌间惟臣",
      en: "Tadaomi Karasuma",
      ja: "烏間惟臣",
      affiliation: "防卫省 / 椚丘中学3年E班",
      grade: "政府特工 / 体育教师",
      appearances: ["E班暗杀计划"],
      timelineStatus: "E班政府派驻期",
      aliases: ["乌间", "Karasuma"],
      fandomSlug: "Tadaomi_Karasuma",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜军用武器/格斗", "政府特工级格斗和武器能力。"],
        defense: ["砖级", "墙级｜格斗/防具", "体魄和训练高于普通人。"],
        movement: ["凡人速", "亚音速｜军人训练", "近现实精英军人机动。"],
        reaction: ["凡人速", "亚音速｜军人训练", "战斗反应优秀。"],
        vitality: ["强化凡体", "精锐韧体", "精英军人体魄。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "自然恢复。"],
        energy: ["砖级能量｜体能/武器", "墙级能量｜政府装备", "作战资源来自体能、武器和政府支援。"],
        energyRegen: ["中速回能", "缓慢回能｜补给", "装备需要补给。"]
      }),
      notes: notes({
        penetration: "格斗、军用武器、反杀老师装备和训练指导。",
        resistance: "无超自然抗性，但训练与体魄强。",
        sensing: "特工经验和战场判断优秀。",
        tactics: "政府派驻负责人，擅长训练、行动规划和现场指挥。",
        special: "军人训练、反杀老师装备使用、政府支援。",
        weakness: "仍是人类，面对杀老师级高速存在需要专门装备和计划。",
        setting: "按E班暗杀计划政府派驻期记录。",
        basis: "worldbook只用于抽取乌间惟臣姓名；定级依据官方动画入口与Assassination Classroom Wiki资料入口。"
      })
    })
  ]);
})();

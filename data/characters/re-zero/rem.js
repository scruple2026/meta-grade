(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "rem",
      name: "蕾姆",
      en: "Rem",
      ja: "レム",
      affiliation: "罗兹瓦尔宅邸 / 爱蜜莉雅阵营",
      grade: "鬼族女仆",
      appearances: ["王选篇", "白鲸讨伐"],
      timelineStatus: "王选篇 / 鬼化可用",
      aliases: ["Rem", "鬼族女仆"],
      fandomSlug: "Rem",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖块级", "墙体级｜鬼化/流星锤", "鬼族力量和武器可形成强近战杀伤。"],
        defense: ["砖块级", "墙体级｜鬼化/体魄", "鬼化体魄和战斗经验提高承伤。"],
        movement: ["凡人速", "亚音速｜鬼化", "近战机动明显高于普通人。"],
        reaction: ["凡人速", "亚音速｜鬼化/战斗经验", "鬼化后战斗反应强。"],
        vitality: ["强化凡体", "精锐韧体｜鬼化", "鬼族体魄和意志支撑高承伤。"],
        healing: ["缓慢自愈", "快速自愈｜治疗魔法/鬼化｜条件", "具备治疗魔法和鬼族恢复，但资源有限。"],
        energy: ["砖块级能量", "墙体级能量｜鬼化/魔法", "魔力、体力和武器作战资源较高。"],
        energyRegen: ["中速回能", "中速回能｜鬼族体能", "恢复仍受体力和魔力限制。"]
      }),
      notes: notes({
        penetration: "流星锤、鬼化力量和魔法可对近战目标造成高压。攻击速度：流星锤要区分挥链、锤头飞行和收回节奏，鬼化近战与魔法投射也各有独立出手过程。",
        resistance: "体魄强但不是重防角色，精神打击和高阶魔法仍危险。",
        sensing: "女仆训练、鬼族感知和战场经验提供近距警戒。",
        tactics: "忠诚且执行力强，擅长近战突击、保护目标和支援治疗。",
        special: "鬼化、流星锤、治疗魔法、水魔法、女仆战斗训练。",
        weakness: "情绪和保护对象会影响判断；长时间高强度作战会消耗魔力与体力。",
        setting: "按王选篇至白鲸讨伐阶段记录。",
        basis: "worldbook只用于抽取蕾姆姓名；定级依据官方角色页与Re:Zero Wiki资料入口。"
      })
    })
  ]);
})();

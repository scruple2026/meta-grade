(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "emiya-kiritsugu-fz",
    name: "卫宫切嗣",
    en: "Kiritsugu Emiya",
    ja: "衛宮切嗣",
    aliases: ["切嗣", "魔术师杀手", "Emiya Kiritsugu"],
    affiliation: "爱因兹贝伦阵营",
    grade: "御主 / 魔术师杀手",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Kiritsugu_Emiya",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "战术/装备峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["砖级", "房屋级｜起源弹/现代武装/令咒", "本体火力来自枪械、爆破、起源弹和魔术礼装，不按从者级输出处理。"],
        defense: ["砖级", "墙级｜防护/战术规避", "承伤仍是人类范围，主要靠规避、准备和装备。"],
        movement: ["凡人速", "亚音速｜固有时制御", "短时加速可提升突入和脱离，但对身体负担明显。"],
        reaction: ["亚音速", "音速｜固有时制御/实战预判", "对魔术师作战经验强，反应峰值依赖时间操作和预判。"],
        vitality: ["强化凡体", "精锐韧体｜固有时制御负担", "训练者生命体量，透支术式会反噬身体。"],
        healing: ["无自愈", "缓慢自愈｜医疗/准备", "没有稳定战斗自愈。"],
        energy: ["砖级能量", "房屋级能量｜令咒/礼装/爆破资源", "可战斗资源来自魔术回路、令咒和携行装备。"],
        energyRegen: ["缓慢回能", "缓慢回能｜准备", "消耗后主要依赖准备和补给。"]
      }),
    notes: notes({
        penetration: "起源弹针对魔术回路和魔术防护极危险，但不是大范围破坏量级。",
        resistance: "能通过战术规避和现代装备降低风险，本体硬度仍是人类。",
        sensing: "反魔术师侦查、情报收集和伏击判断强，非超自然全域索敌。",
        tactics: "暗杀、陷阱、现代武装和规则利用极强，擅长绕开正面对拼。",
        special: "固有时制御、起源弹、现代武装、爆破、令咒、圣杯战争御主权限。",
        weakness: "身体负担、心理创伤、对爱丽丝菲尔/伊莉雅的牵制，以及对从者正面战极差。",
        setting: "按第四次圣杯战争切嗣记录，不并入第五次后的士郎路线。",
        basis: "worldbook只用于抽取卫宫切嗣姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，现代武装和起源弹按特殊穿透峰值处理。"
      })
  })]);
})();

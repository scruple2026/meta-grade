(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "jiumozhi",
    name: "鸠摩智",
    en: "Jiumozhi",
    aliases: ["大轮明王", "吐蕃国师"],
    affiliation: "吐蕃 / 密宗",
    grade: "国师 / 火焰刀高手",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "鳩摩智",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜火焰刀/小无相功", "远程内力刀劲和模拟少林绝技威胁很高。"],
      defense: ["墙级", "房屋级｜深厚内力", "内力深厚，但强练多门武功存在反噬风险。"],
      movement: ["亚音速", "亚音速｜轻功", "顶级武僧身法。"],
      reaction: ["亚音速", "亚音速｜武学见识", "招式见识和应变强。"],
      vitality: ["精锐韧体", "精锐韧体｜深厚内力", "仍是人体结构，内力失控会反伤。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可调息恢复。"],
      energy: ["墙级能量", "房屋级能量｜小无相功", "内力和武学储备深厚。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力恢复需要调息。"]
    }),
    notes: notes({
      penetration: "火焰刀和小无相功模拟绝技偏远程内力穿透。",
      resistance: "深厚内力可防护，但多门武学强练导致内息隐患。",
      sensing: "武学见识广，能识别多派绝技。",
      tactics: "擅长以国师身份、武学知识和心理压力达成目的。",
      special: "火焰刀、小无相功、少林绝技模拟、密宗武学。",
      weakness: "贪求武学、强练隐患和心魔会削弱长期状态。",
      setting: "按少室山大会期鸠摩智记录。",
      basis: "worldbook只用于抽取鸠摩智姓名；定级依据金庸 Wiki 和公开小说条目入口，国师身份不折算主表。"
    })
  })]);
})();

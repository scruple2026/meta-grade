(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zhou-zhiruo",
    name: "周芷若",
    en: "Zhou Zhiruo",
    aliases: ["芷若", "峨嵋掌门", "Zhiruo"],
    affiliation: "峨嵋派",
    grade: "峨嵋派掌门 / 九阴白骨爪使用者",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "屠狮大会前后 / 九阴速成期",
    fandomSlug: "周芷若",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖块级", "墙体级｜九阴白骨爪/倚天剑", "速成九阴和兵刃提高杀伤，但不按稳定顶级内力处理。"],
      defense: ["砖块级", "墙体级｜峨嵋武功/身法", "本体仍为武侠人体，防御依赖招架和身法。"],
      movement: ["亚音速", "亚音速｜峨嵋轻功", "轻功与近战爆发强于普通武者。"],
      reaction: ["亚音速", "亚音速｜近战应对", "能在高手局中抓破绽，但经验和内力厚度不及顶级宗师。"],
      vitality: ["强化凡体", "精锐韧体｜内功支撑", "人体结构，内功提高抗打击。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "可通过内功调息恢复，非快速再生。"],
      energy: ["砖块级能量", "墙体级能量｜九阴速成", "内力资源强于普通武者，但速成存在稳定性问题。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力恢复依赖调息。"]
    }),
    notes: notes({
      penetration: "九阴白骨爪偏近身穿刺和擒拿杀伤；倚天剑是兵刃峰值，不等同肉身常态。攻击速度：九阴白骨爪随手臂、步法和接战距离完成，收招再攻与单次命中不能用移动速度替代。",
      resistance: "峨嵋武功和内功有防护价值，但心理压力、门派责任和速成武功副作用是限制。",
      sensing: "擅长观察人心和战局破绽，索敌仍按武侠常规。",
      tactics: "能隐忍布局并利用身份、情感和门派局势制造优势。",
      special: "峨嵋武功、九阴白骨爪、倚天剑相关秘密、掌门权威。",
      weakness: "九阴速成不等同完整稳定传承；情感和门派压力会影响决策。",
      setting: "金庸共通 worldbook 的峨嵋派传承 key 中出现周芷若；本条按《倚天屠龙记》后期速成九阴阶段记录。",
      basis: "worldbook只用于抽取周芷若姓名；定级依据金庸 Wiki 角色/作品入口和金庸武侠保守口径，掌门身份不直接抬档。"
    })
  })]);
})();

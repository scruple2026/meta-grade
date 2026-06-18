(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];
  if (!work) throw new Error("射雕英雄传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "hong-qigong",
    name: "洪七公",
    en: "Hong Qigong",
    aliases: ["北丐", "九指神丐", "洪七", "七公"],
    affiliation: "丐帮",
    grade: "五绝之一 / 丐帮帮主",
    appearances: ["金庸共通世界书", "射雕英雄传"],
    timelineStatus: "射雕主线五绝级",
    fandomSlug: "洪七公",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜降龙十八掌", "五绝级掌力峰值按金庸局部破坏保守记录。"],
      defense: ["墙级", "房屋级｜内力/招架", "深厚内力和经验提供强防护。"],
      movement: ["亚音速", "亚音速｜轻功", "老练高手轻功。"],
      reaction: ["亚音速", "亚音速｜五绝级交锋", "可与顶级高手互拆招。"],
      vitality: ["精锐韧体", "精锐韧体｜内力", "人体结构，内功和意志提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可辅助疗伤，但不是快速再生。"],
      energy: ["墙级能量", "房屋级能量｜五绝级内力", "内力资源深厚，支撑强掌力和持久战。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "回气依赖调息。"]
    }),
    notes: notes({
      penetration: "降龙十八掌偏刚猛掌力和正面压制，范围仍按武侠局部破坏处理。",
      resistance: "正面抗压和江湖经验极强；中毒、伤势和年龄状态需单独标注。",
      sensing: "五绝级读招、听劲和江湖识人能力。",
      tactics: "战斗朴实直接，但经验和传功判断很强。",
      special: "降龙十八掌、打狗棒法、丐帮帮主经验。",
      weakness: "毒伤和状态衰退会显著影响输出；不把丐帮组织资源算作个人面板。",
      setting: "金庸共通 worldbook 的丐帮 key 中出现洪七公；本条按《射雕英雄传》五绝级时期记录。",
      basis: "worldbook只用于抽取洪七公姓名；定级依据金庸 Wiki 角色/作品入口，五绝名号不直接换算为高破坏档。"
    })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ren-woxing",
    name: "任我行",
    en: "Ren Woxing",
    aliases: ["任教主", "日月神教前教主"],
    affiliation: "日月神教",
    grade: "吸星大法高手 / 前教主",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "脱困后主线期",
    fandomSlug: "任我行",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜吸星大法/掌力", "正面掌力和吸内力威胁高，范围仍按局部破坏处理。"],
      defense: ["墙级", "房屋级｜内力/经验", "深厚内力和老练经验提高防护。"],
      movement: ["亚音速", "亚音速｜轻功", "高端江湖身法。"],
      reaction: ["亚音速", "亚音速｜教主级交锋", "能应对顶级高手近战变化。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/意志", "人体结构，意志和内力提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜吸星/调息｜条件", "吸收内力可形成条件性续航，但非无条件再生。"],
      energy: ["墙级能量", "房屋级能量｜吸星大法", "可通过吸取内力扩充资源，需命中和条件。"],
      energyRegen: ["缓慢回能", "快速回能｜吸星大法｜条件", "只有成功吸取内力时才快速补能。"]
    }),
    notes: notes({
      penetration: "吸星大法偏内力吸取、控制和削弱对手，不等同纯破坏规模。",
      resistance: "内力深厚且意志强，但吸星大法反噬和身体状态是限制。",
      sensing: "江湖阅历深，擅长识别强敌与权力局势。",
      tactics: "强势直接，擅长以威压和吸星大法迫使对手失衡。",
      special: "吸星大法、日月神教前教主身份、权力斗争经验。",
      weakness: "吸星大法有内力反噬隐患，且长期囚禁影响状态。",
      setting: "金庸共通 worldbook 的日月神教 key 中出现任我行；本条按《笑傲江湖》脱困后主线期记录。",
      basis: "worldbook只用于抽取任我行姓名；定级依据金庸 Wiki 角色/作品入口，吸星大法写为条件性续航和特殊机制。"
    })
  })]);
})();

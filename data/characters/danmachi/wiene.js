(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "wiene",
      name: "薇妮",
      en: "Wiene",
      ja: "ウィーネ",
      affiliation: "异端儿",
      grade: "翼龙女 / Xenos",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 初期异端儿",
      aliases: ["Wiene", "Vouivre", "龙女"],
      fandomSlug: "Wiene",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "房屋级｜怪物本体", "翼龙女怪物体质带来爪击和冲撞威胁。"],
        defense: ["墙级", "房屋级｜鳞甲/怪物体质", "怪物身体强于人类，但精神幼弱。"],
        movement: ["亚音速", "音速｜怪物机动", "可用怪物本体高速移动和飞扑。"],
        reaction: ["亚音速", "亚音速", "战斗经验不足，反应不完全等同身体能力。"],
        vitality: ["房屋级生命阈值｜怪物体", "房屋级生命阈值｜异端儿", "特殊怪物生命结构强于普通人。"],
        healing: ["缓慢自愈", "中速自愈｜怪物体质", "怪物体质可能提高恢复，但复活等外力不计入自愈。"],
        energy: ["墙级能量", "房屋级能量｜怪物体质", "能量池来自怪物本体与体力。"],
        energyRegen: ["缓慢回能", "缓慢回能", "需要休整恢复。"]
      }),
      notes: notes({
        penetration: "爪击、牙齿和怪物冲撞可伤害普通冒险者，缺少成熟战技。",
        resistance: "鳞甲和怪物体魄强，但宝石、精神冲击和围攻是弱点。",
        sensing: "拥有怪物本能和对同伴的情绪感知，训练不足。",
        tactics: "性格幼弱，依赖贝尔和异端儿保护，主动战术有限。",
        special: "异端儿人格、翼龙女身体、怪物身份、宝石弱点。",
        weakness: "精神幼弱、经验不足、社会敌意与怪物身份暴露风险极高。",
        setting: "按异端儿篇薇妮记录。",
        basis: "worldbook只用于抽取薇妮姓名；定级依据官方角色入口与DanMachi Wiki资料入口，复活情节不计入自愈面板。"
      })
    })
  ]);
})();

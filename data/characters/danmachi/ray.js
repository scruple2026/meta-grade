(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ray",
      name: "蕾伊",
      en: "Ray",
      ja: "レイ",
      affiliation: "异端儿",
      grade: "塞壬 / Xenos",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 隐藏村落期",
      aliases: ["Ray", "Rei", "Siren", "塞壬"],
      fandomSlug: "Ray",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜歌声/怪物体", "直接破坏有限，歌声与飞行支援更重要。"],
        defense: ["砖级", "墙级｜怪物体", "身体强于普通人但不是前卫。"],
        movement: ["亚音速", "音速｜飞行", "飞行机动优于地面普通人。"],
        reaction: ["凡人速", "亚音速｜怪物本能", "战斗反应保守记录。"],
        vitality: ["强化凡体", "房屋级生命阈值｜异端儿", "怪物生命结构提高生存力。"],
        healing: ["缓慢自愈", "缓慢自愈｜怪物体质", "恢复强于普通人但不高速。"],
        energy: ["砖级能量", "墙级能量｜歌声/飞行", "能量池偏支援与机动。"],
        energyRegen: ["缓慢回能", "缓慢回能", "需要休整恢复。"]
      }),
      notes: notes({
        penetration: "歌声、飞行和怪物体质偏支援与扰乱，直接破坏不高。",
        resistance: "身体强于普通人，但被高阶冒险者或怪物命中风险高。",
        sensing: "隐藏村落协作和空中观察较好。",
        tactics: "更偏辅助、沟通与支援撤离。",
        special: "异端儿人格、塞壬身体、歌声、飞行。",
        weakness: "正面攻防低，社会敌意与身份暴露风险高。",
        setting: "按异端儿篇蕾伊记录。",
        basis: "worldbook只用于抽取蕾伊姓名；定级依据官方角色入口与DanMachi Wiki资料入口，歌声作为特殊支援处理。"
      })
    })
  ]);
})();

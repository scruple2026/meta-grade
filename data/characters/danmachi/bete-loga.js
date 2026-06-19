(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bete-loga",
      name: "伯特·罗卡",
      en: "Bete Loga",
      ja: "ベート・ローガ",
      affiliation: "洛基眷族",
      grade: "执行成员 / 一线冒险者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族追捕线",
      aliases: ["伯特", "Bete", "Vanargand", "狼人", "Werewolf"],
      fandomSlug: "Bete_Loga",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜Level 6/高速踢击", "以高速近战和踢击压制为主。"],
        defense: ["房屋级", "楼级｜Falna/装备", "承伤来自高等级体魄与装备，硬度不如防御型前卫。"],
        movement: ["音速", "超音速｜狼人爆发/Level 6", "速度和追击是核心优势。"],
        reaction: ["音速", "超音速｜近战本能", "高速近战反应优秀。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna", "高等级冒险者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["楼级能量", "街区级能量｜高速战斗", "体力和技能资源支撑持续高速近战。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "高强度消耗后需要恢复。"]
      }),
      notes: notes({
        penetration: "踢击、突进和高等级体魄偏单体突破，对队形追击和拦截有效。",
        resistance: "Falna与装备能承受一般怪物和冒险者攻击，但被同级强者命中仍会受伤。",
        sensing: "狼人感官和地下城经验提供良好追踪与警觉。",
        tactics: "战斗直觉强，擅长高速压迫；言行粗暴会影响协作沟通。",
        special: "狼人身体、Level 6高速近战、装备辅助、追击和拦截。",
        weakness: "脾气和轻敌倾向容易制造情报与协作风险；缺少大范围控制。",
        setting: "按异端儿篇洛基眷族追捕线记录。",
        basis: "worldbook只用于抽取伯特姓名；定级依据官方角色入口与DanMachi Wiki资料入口，速度优势不直接上调到超光速等跨界档。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gareth-landrock",
      name: "格瑞斯·兰德洛克",
      en: "Gareth Landrock",
      ja: "ガレス・ランドロック",
      affiliation: "洛基眷族",
      grade: "最高干部 / 重战士",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族阻拦线",
      aliases: ["格瑞斯", "Gareth", "Landrock", "矮人重战士"],
      fandomSlug: "Gareth_Landrock",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜Level 6/重战士", "洛基眷族最高干部级前卫，力量与重武器突出。"],
        defense: ["楼级", "街区级｜重甲/Falna", "防御和承伤是核心强项，峰值高于一般机动前卫。"],
        movement: ["亚音速", "音速｜重战士突进", "重装前卫机动低于高速型，但仍是高等级冒险者。"],
        reaction: ["音速", "超音速｜前卫经验", "可在高强度前线战中保护队形。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜矮人体魄/Falna", "重战士体魄、装备和意志支撑承伤续战。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["楼级能量", "街区级能量｜重战士续航", "体力与高等级状态支撑前卫作战。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "重伤和高消耗后需要恢复。"]
      }),
      notes: notes({
        penetration: "重武器和矮人力量偏正面突破、护卫和阵线压制。",
        resistance: "重甲、体魄和前卫经验使承伤优秀，但强力魔法、同级围攻仍有效。",
        sensing: "远征和前卫经验提供战场警觉，索敌范围不按魔法感知处理。",
        tactics: "老练前卫，擅长守线、保护队友、承担冲击和配合芬恩指挥。",
        special: "矮人体魄、Level 6重战士、重甲承伤、阵线保护。",
        weakness: "机动和追击不如高速型成员，容易被远程、飞行或地形牵制。",
        setting: "按异端儿篇洛基眷族阻拦线记录。",
        basis: "worldbook只用于抽取Gareth姓名；定级依据官方角色入口与DanMachi Wiki资料入口，重战士定位只影响相邻维度分配。"
      })
    })
  ]);
})();

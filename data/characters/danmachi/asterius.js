(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "asterius",
      name: "阿斯泰里俄斯",
      en: "Asterius",
      ja: "アステリオス",
      affiliation: "异端儿",
      grade: "黑色米诺陶洛斯 / 贝尔宿敌",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 巴别塔前决斗",
      aliases: ["Asterius", "黑牛", "黑色米诺陶洛斯", "Minotaur Xenos", "阿斯忒里俄斯"],
      fandomSlug: "Asterius",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜米诺陶洛斯异端儿", "力量远超普通怪物，决斗中可压制贝尔。"],
        defense: ["楼级", "街区级｜怪物体魄", "高阶怪物身体和意志极强。"],
        movement: ["音速", "超音速｜怪物爆发", "巨体仍具高速突进和近战压迫。"],
        reaction: ["音速", "超音速｜决斗本能", "能在高强度近战中持续应对。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜异端儿", "怪物生命结构和战斗意志极高。"],
        healing: ["缓慢自愈", "中速自愈｜怪物体质", "恢复强于人类，但重伤仍需要休整。"],
        energy: ["楼级能量", "街区级能量｜怪物体质", "体力与怪物本体资源支撑长时间高压战斗。"],
        energyRegen: ["缓慢回能", "中速回能｜休整", "战斗消耗后需要恢复。"]
      }),
      notes: notes({
        penetration: "巨斧、怪力和近战爆发偏单体压制与局部破坏。",
        resistance: "高阶怪物身体承伤强，但不是不可杀；强者围攻或重伤仍有效。",
        sensing: "战斗本能和对贝尔的执念很强。",
        tactics: "偏纯粹决斗型，正面压制极强，复杂谋略较少。",
        special: "异端儿人格、黑色米诺陶洛斯身体、宿敌执念、极强近战爆发。",
        weakness: "巨体和决斗执念可能被战术利用，缺少远程和复杂控制手段。",
        setting: "按异端儿篇巴别塔前决斗记录，不并入后续成长。",
        basis: "worldbook只用于抽取阿斯泰里俄斯姓名；定级依据官方角色入口与DanMachi Wiki资料入口，宿敌定位不单独抬到城市级。"
      })
    })
  ]);
})();

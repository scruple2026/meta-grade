(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ryuu-lion",
      name: "琉·璃昂",
      en: "Ryuu Lion",
      ja: "リュー・リオン",
      affiliation: "丰饶的女主人 / 原阿斯特莉亚眷族",
      grade: "疾风 / 冒险者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 酒馆协力期",
      aliases: ["琉", "琉璃昂", "Ryuu", "Ryu", "Gale Wind"],
      fandomSlug: "Ryuu_Lion",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜魔法/剑术", "剑术和精灵魔法兼具单体突破与局部范围攻击。"],
        defense: ["房屋级", "楼级｜装备/经验", "高经验冒险者承伤和回避优秀。"],
        movement: ["音速", "超音速｜疾风", "高速机动是核心优势。"],
        reaction: ["音速", "超音速｜战斗经验", "对冒险者和怪物高速战经验丰富。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna/意志", "重伤下仍能坚持，但不是再生型。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "依赖外部治疗与休整。"],
        energy: ["楼级能量", "楼级能量｜精灵魔法", "魔法和体力资源支撑持续战斗。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗后需恢复。"]
      }),
      notes: notes({
        penetration: "剑术、咏唱魔法和高速突袭结合，偏精确打击。",
        resistance: "经验、装备和机动降低受击，硬抗能力不等同防御专精。",
        sensing: "冒险者经验、暗处行动和危机感知较强。",
        tactics: "战斗经验丰富，擅长伏击、保护、撤退和读局。",
        special: "精灵魔法、高速剑术、阿斯特莉亚眷族战斗经验。",
        weakness: "心理创伤和过去通缉身份会影响行动；重伤后恢复依赖外部治疗。",
        setting: "按异端儿篇附近酒馆协力期记录，不并入后续深层篇完整展开。",
        basis: "worldbook只用于抽取琉姓名；定级依据官方角色入口与DanMachi Wiki资料入口，疾风称号不单独抬到更高速度档。"
      })
    })
  ]);
})();

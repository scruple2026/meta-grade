(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "riveria-ljos-alf",
      name: "里维莉亚·利欧斯·阿尔弗",
      en: "Riveria Ljos Alf",
      ja: "リヴェリア・リヨス・アールヴ",
      affiliation: "洛基眷族",
      grade: "副团长 / 精灵魔导士",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族指挥线",
      aliases: ["里维莉亚", "Riveria", "Nine Hell", "九魔姬", "High Elf"],
      fandomSlug: "Riveria_Ljos_Alf",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜大魔法/Level 6", "洛基眷族核心魔导士，峰值主要来自咏唱魔法。"],
        defense: ["房屋级", "楼级｜魔法防御/装备", "本体不是前卫，防护依赖魔法、装备和队形。"],
        movement: ["亚音速", "音速｜Level 6", "机动弱于突击前卫，但仍是高等级冒险者。"],
        reaction: ["音速", "超音速｜魔导士经验", "高阶魔导士需要在高速战局中判断咏唱和防护时机。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna", "高等级冒险者体魄，但生命体量不按魔法火力等额上调。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "治疗与恢复依赖魔法条件或外部休整，不写成高速自愈。"],
        energy: ["楼级能量", "街区级能量｜高阶魔力", "魔力总量可支撑大魔法与远征支援。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "大魔法消耗后需要休整。"]
      }),
      notes: notes({
        penetration: "高阶精灵魔法偏范围压制、咏唱爆发和队伍支援；近战输出不按同档处理。",
        resistance: "魔法防御、装备和队友保护有效，本体被近身压制时风险上升。",
        sensing: "远征经验、魔法知识和战场观察优秀；不是独立全域感知。",
        tactics: "洛基眷族副团长级核心，擅长咏唱时机、队形保护和魔法支援判断。",
        special: "高等精灵魔法、多段咏唱、防御与支援魔法、远征级魔力运营。",
        weakness: "强力魔法依赖咏唱与站位，近身缠斗会压缩输出窗口。",
        setting: "按异端儿篇洛基眷族追捕与阻拦线记录。",
        basis: "worldbook只用于抽取里维莉亚姓名；定级依据官方角色入口与DanMachi Wiki资料入口，大魔法作为条件峰值标注。"
      })
    })
  ]);
})();

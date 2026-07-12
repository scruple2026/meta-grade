(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bell-cranel",
      name: "贝尔·克朗尼",
      en: "Bell Cranel",
      ja: "ベル・クラネル",
      affiliation: "赫斯缇雅眷族",
      grade: "冒险者 / 小小新秀",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 第9-11卷附近",
      aliases: ["贝尔", "Bell", "Little Rookie", "Rabbit Foot", "白兔"],
      fandomSlug: "Bell_Cranel",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜阿尔戈/火焰雷电", "近战、赫斯缇雅之刃和火焰雷电构成主输出；峰值需蓄力或情绪条件。"],
        defense: ["墙级", "房屋级｜冒险者体魄/装备", "承伤强于常人，但面对一线怪物与高阶冒险者仍会被压制。"],
        movement: ["亚音速", "音速｜冒险者机动", "以高速突进、闪避和地下城机动为主。"],
        reaction: ["亚音速", "音速｜近战应对", "能应对怪物和冒险者高速近战，但不按超远距高速角色处理。"],
        vitality: ["精锐韧体", "房屋级生命阈值｜Falna/意志", "Falna、装备和意志提高续战，本体仍会因重伤失能。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定自愈，恢复依赖休整、药品或外部治疗。"],
        energy: ["房屋级能量", "楼级能量｜阿尔戈蓄力", "魔法、技能和体力资源不等同单次无限输出。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗中资源会被消耗，补给和休整很重要。"]
      }),
      notes: notes({
        penetration: "赫斯缇雅之刃、火焰雷电和阿尔戈蓄力偏单体突破，不等同大范围毁灭。攻击速度：短刀连击随贝尔近身机动，火焰雷电是放出型魔法，阿尔戈峰值还需要明确蓄力时间，三者不能共用最快值。",
        resistance: "依靠冒险者体魄、装备和意志承伤；对精神压力、重创和高阶怪物压制仍有限。",
        sensing: "地下城经验、直觉和怪物观察能力提升索敌，但没有全域感知。",
        tactics: "成长快，擅长在保护对象和强敌压力下临场突破；经验仍受篇章阶段限制。",
        special: "Falna、火焰雷电、阿尔戈、赫斯缇雅之刃、憧憬一途。",
        weakness: "蓄力需要时间，保护目标会制造负担；遇到远高于自身的怪物或冒险者时容错低。",
        setting: "按异端儿篇贝尔记录，不并入后续深层篇和芙蕾雅篇成长。",
        basis: "worldbook只用于抽取贝尔姓名；定级依据官方角色入口和DanMachi Wiki资料入口，冒险者等级只作相对语境。"
      })
    })
  ]);
})();

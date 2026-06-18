(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "welf-crozzo",
      name: "韦尔夫·克罗佐",
      en: "Welf Crozzo",
      ja: "ヴェルフ・クロッゾ",
      affiliation: "赫斯缇雅眷族 / 赫菲斯托丝眷族关联",
      grade: "冒险者 / 锻造师",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 魔剑锻造师",
      aliases: ["韦尔夫", "Welf", "Crozzo"],
      fandomSlug: "Welf_Crozzo",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜克罗佐魔剑", "本体近战中等，魔剑可显著提高范围与瞬时输出。"],
        defense: ["墙级", "房屋级｜装备/前卫", "冒险者体魄和装备支撑前卫承伤。"],
        movement: ["亚音速", "音速｜冒险者机动", "近战冒险者机动。"],
        reaction: ["亚音速", "音速｜前卫经验", "可应对地下城混战。"],
        vitality: ["精锐韧体", "房屋级生命阈值｜Falna", "前卫体魄和意志支撑续战。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定自愈能力。"],
        energy: ["墙级能量", "楼级能量｜魔剑资源", "魔剑资源和体力不等同自身稳定单击。"],
        energyRegen: ["缓慢回能", "中速回能｜补给/换装", "续航依赖装备和补给。"]
      }),
      notes: notes({
        penetration: "魔剑提供强范围元素打击，近战武器适合破甲和牵制。",
        resistance: "装备和前卫体魄可靠，但魔剑消耗与破损会影响战力。",
        sensing: "地下城经验和锻造师对武器状态的判断较好。",
        tactics: "能结合锻造、装备和队伍配置制定支援策略。",
        special: "克罗佐血统、魔剑锻造、反魔法剑、前卫战斗。",
        weakness: "魔剑资源有限，过度依赖装备时会受破损影响。",
        setting: "按异端儿篇韦尔夫记录，不并入更后期深层锻造突破。",
        basis: "worldbook只用于抽取韦尔夫姓名；定级依据官方角色入口与DanMachi Wiki资料入口，魔剑作为条件峰值。"
      })
    })
  ]);
})();

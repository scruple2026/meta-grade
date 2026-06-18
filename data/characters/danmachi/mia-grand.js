(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mia-grand",
      name: "米娅·格兰德",
      en: "Mia Grand",
      ja: "ミア・グランド",
      affiliation: "丰饶的女主人 / 原芙蕾雅眷族",
      grade: "酒馆老板 / 前冒险者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 酒馆老板期",
      aliases: ["米娅", "Mama Mia", "Mia"],
      fandomSlug: "Mia_Grand",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜前冒险者体魄", "前一线冒险者体魄和格斗能力仍很强。"],
        defense: ["房屋级", "楼级｜体魄/经验", "高体格和经验支撑承伤。"],
        movement: ["亚音速", "音速｜前冒险者", "现役程度下降，但短时爆发仍强。"],
        reaction: ["亚音速", "音速｜战斗经验", "经验丰富，能压制普通冒险者。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜前冒险者", "强体格和经验提高续战。"],
        healing: ["无自愈", "缓慢自愈｜休整/治疗", "没有稳定自愈机制。"],
        energy: ["房屋级能量", "楼级能量｜前冒险者资源", "资源来自体力和冒险者基础。"],
        energyRegen: ["缓慢回能", "中速回能｜休整", "战斗后需要恢复。"]
      }),
      notes: notes({
        penetration: "以怪力、格斗和武器压制为主，范围破坏有限。",
        resistance: "体魄与经验强，但退休/酒馆身份下不视为持续前线状态。",
        sensing: "酒馆经营和前冒险者经验带来强人情与危险判断。",
        tactics: "擅长压场、管束店员和以经验控制冲突。",
        special: "前芙蕾雅眷族冒险者、强体格、酒馆情报节点。",
        weakness: "不以长期前线作战为常态，缺少明确高速再生或远程手段。",
        setting: "按异端儿篇酒馆老板期记录。",
        basis: "worldbook只用于抽取米娅姓名；定级依据官方角色入口与DanMachi Wiki资料入口，前冒险者身份保守折算。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yamato-mikoto",
      name: "大和·命",
      en: "Yamato Mikoto",
      ja: "ヤマト・命",
      affiliation: "赫斯缇雅眷族 / 建御雷眷族关联",
      grade: "冒险者 / 忍者式战士",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 赫斯缇雅眷族协力期",
      aliases: ["命", "大和命", "Mikoto"],
      fandomSlug: "Yamato_Mikoto",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜重力魔法", "近战配合重力魔法可压制目标，范围有限。"],
        defense: ["墙级", "房屋级｜装备/Falna", "承伤强于普通人，仍需避免正面硬吃高阶攻击。"],
        movement: ["亚音速", "音速｜敏捷战斗", "以高速近战、潜入和支援为主。"],
        reaction: ["亚音速", "音速｜忍者式战斗", "对近战和突发状况反应较快。"],
        vitality: ["精锐韧体", "房屋级生命阈值｜Falna", "冒险者体魄与意志提高续战。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定自愈能力。"],
        energy: ["墙级能量", "楼级能量｜重力魔法", "魔力资源主要服务控制与压制。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "魔力消耗后需补给或休整。"]
      }),
      notes: notes({
        penetration: "近战、忍具和重力魔法偏压制与控制，不等同大范围破坏。攻击速度：刀剑与忍具分别是贴身挥击和投掷弹道，重力魔法还需发动后形成压制区，不能用命的移动速度统一概括。",
        resistance: "装备与冒险者体魄提供基础防护，正面承伤不是强项。",
        sensing: "潜入、侦查和近战警觉较好。",
        tactics: "重视团队配合、牵制和以魔法创造机会。",
        special: "重力魔法、忍者式武艺、潜入和支援。",
        weakness: "魔法有消耗和施展风险，面对高阶力量压制时难以单独硬抗。",
        setting: "按异端儿篇大和命记录。",
        basis: "worldbook只用于抽取大和命姓名；定级依据官方角色入口与DanMachi Wiki资料入口，重力魔法作为条件峰值。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tione-hiryute",
      name: "蒂奥涅·席吕特",
      en: "Tione Hiryute",
      ja: "ティオネ・ヒリュテ",
      affiliation: "洛基眷族",
      grade: "执行成员 / 亚马逊战士",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族追捕线",
      aliases: ["蒂奥涅", "Tione", "Amazon", "亚马逊"],
      fandomSlug: "Tione_Hiryute",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜Level 6/亚马逊近战", "高等级亚马逊战士，双刃近战输出稳定。"],
        defense: ["房屋级", "楼级｜Falna/装备", "承伤来自高等级体魄、装备和前卫经验。"],
        movement: ["音速", "超音速｜Level 6", "高等级前卫机动。"],
        reaction: ["音速", "超音速｜近战经验", "可在高速乱战中持续应对。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna/亚马逊体魄", "高等级冒险者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["楼级能量", "街区级能量｜近战续航", "体力和技能资源支撑高强度近战。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗后需恢复。"]
      }),
      notes: notes({
        penetration: "双刃、亚马逊体魄和高等级近战偏高速单体突破。",
        resistance: "高等级体魄和装备能承受常规冒险者/怪物攻击，但不是不可伤。",
        sensing: "地下城远征经验和近战警觉良好。",
        tactics: "擅长前卫乱战、追击和保护队形；重大策略通常服从团长部署。",
        special: "亚马逊体魄、Level 6前卫、双刃近战、远征经验。",
        weakness: "需要接近作战，面对远程控制、陷阱或队形限制时效率下降。",
        setting: "按异端儿篇洛基眷族追捕线记录。",
        basis: "worldbook只用于抽取蒂奥涅姓名；定级依据官方角色入口与DanMachi Wiki资料入口。"
      })
    })
  ]);
})();

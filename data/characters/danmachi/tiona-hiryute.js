(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tiona-hiryute",
      name: "蒂奥娜·席吕特",
      en: "Tiona Hiryute",
      ja: "ティオナ・ヒリュテ",
      affiliation: "洛基眷族",
      grade: "执行成员 / 亚马逊战士",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族追捕线",
      aliases: ["蒂奥娜", "Tiona", "Amazon", "大切断"],
      fandomSlug: "Tiona_Hiryute",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜Level 6/重武器", "亚马逊近战强者，重武器与力量输出突出。"],
        defense: ["房屋级", "楼级｜Falna/装备", "高等级冒险者体魄与装备承伤。"],
        movement: ["音速", "超音速｜Level 6", "高等级前卫机动。"],
        reaction: ["音速", "超音速｜近战经验", "近战反应和乱战应对优秀。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna/亚马逊体魄", "体魄和意志支撑前卫续战。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["楼级能量", "街区级能量｜近战续航", "体力和技能资源支撑长时间近战。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗后需恢复。"]
      }),
      notes: notes({
        penetration: "重武器、亚马逊体魄和近战爆发偏正面破坏与单体突破。",
        resistance: "高等级体魄承伤强，但仍需队形、装备和治疗支持。",
        sensing: "地下城远征经验和近战警觉良好。",
        tactics: "作战积极，适合前卫突入和乱战；复杂指挥通常由芬恩等人承担。",
        special: "亚马逊体魄、Level 6前卫、重武器战斗、远征经验。",
        weakness: "战斗风格偏正面，容易受控制、诱导或队形限制影响。",
        setting: "按异端儿篇洛基眷族追捕线记录。",
        basis: "worldbook只用于抽取蒂奥娜姓名；定级依据官方角色入口与DanMachi Wiki资料入口，Level 6只作作品内相对语境。"
      })
    })
  ]);
})();

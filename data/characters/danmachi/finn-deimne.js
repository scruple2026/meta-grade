(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "finn-deimne",
      name: "芬恩·迪姆那",
      en: "Finn Deimne",
      ja: "フィン・ディムナ",
      affiliation: "洛基眷族",
      grade: "团长 / 一线冒险者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 洛基眷族指挥线",
      aliases: ["芬恩", "Finn", "Braver", "勇者", "帕鲁姆勇者"],
      fandomSlug: "Finn_Deimne",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜Level 6/长枪/指挥", "洛基眷族团长，一线近战与指挥并重。"],
        defense: ["房屋级", "楼级｜Falna/装备", "高等级冒险者体魄和装备防护，但不是防御专精。"],
        movement: ["音速", "超音速｜Level 6", "高等级近战冒险者机动。"],
        reaction: ["音速", "超音速｜团长战斗经验", "可在高速近战与多人战局中持续读局。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna/意志", "高等级冒险者体魄和意志支撑续战。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["楼级能量", "街区级能量｜技能/长期远征", "体力、技能和远征经验支撑持续作战。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗消耗后仍需休整补给。"]
      }),
      notes: notes({
        penetration: "长枪、Level 6体魄和指挥配合偏精确突破，不把团长身份单独折算为大范围破坏。",
        resistance: "Falna、装备和经验提高承伤；面对高阶怪物或同级强者仍可能受创。",
        sensing: "地下城远征经验和团长视野强，能处理复杂战场信息；非全知索敌。",
        tactics: "洛基眷族团长，擅长指挥、围捕、诱导和风险控制，是本条目的主要价值之一。",
        special: "团长指挥、长枪战斗、帕鲁姆高阶冒险者体魄、战场统筹。",
        weakness: "本体仍是可受伤冒险者；复杂政治与公众风险会限制可用手段。",
        setting: "按异端儿篇洛基眷族追捕与阻拦线记录，不并入后续外传完整成长。",
        basis: "worldbook只用于抽取芬恩姓名；定级依据官方角色入口与DanMachi Wiki资料入口，Level 6和团长称号只作为作品内相对语境。"
      })
    })
  ]);
})();

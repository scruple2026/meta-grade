(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lyd",
      name: "利德",
      en: "Lyd",
      ja: "リド",
      affiliation: "异端儿",
      grade: "蜥蜴人 / Xenos领导者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 异端儿领导者",
      aliases: ["Lyd", "Lido", "蜥蜴人"],
      fandomSlug: "Lyd",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜怪物武器/体魄", "成熟异端儿战士，近战输出强于普通怪物。"],
        defense: ["房屋级", "楼级｜鳞甲/怪物体", "蜥蜴人身体和经验提高承伤。"],
        movement: ["亚音速", "音速｜怪物机动", "地下城机动优秀。"],
        reaction: ["亚音速", "音速｜战斗经验", "能指挥并应对冒险者追捕。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜异端儿", "怪物生命结构和经验支撑续战。"],
        healing: ["缓慢自愈", "中速自愈｜怪物体质", "怪物恢复强于人类但不是高速再生。"],
        energy: ["房屋级能量", "楼级能量｜怪物体质", "资源来自怪物身体和持续战斗体力。"],
        energyRegen: ["缓慢回能", "中速回能｜休整", "需要休整恢复。"]
      }),
      notes: notes({
        penetration: "武器、爪牙和怪物体魄构成近战突破。",
        resistance: "鳞甲和身体素质可靠，但仍可被高阶冒险者压制。",
        sensing: "熟悉地下城、隐藏村落和异端儿行动路线。",
        tactics: "作为异端儿领导者，重视交涉、撤离和保护同伴。",
        special: "异端儿人格、怪物身体、地下城隐匿与组织指挥。",
        weakness: "社会身份暴露风险高，面对高阶眷族围剿时很被动。",
        setting: "按异端儿篇利德记录。",
        basis: "worldbook只用于抽取利德姓名；定级依据官方角色入口与DanMachi Wiki资料入口，领导力不折算为单体主面板。"
      })
    })
  ]);
})();

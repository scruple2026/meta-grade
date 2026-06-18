(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gros",
      name: "古罗斯",
      en: "Gros",
      ja: "グロス",
      affiliation: "异端儿",
      grade: "石像鬼 / Xenos强硬派",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 强硬派时期",
      aliases: ["Gros", "Grosu", "Gargoyle", "石像鬼"],
      fandomSlug: "Gros",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜石像鬼体魄", "强硬派异端儿，近战与飞行冲击较强。"],
        defense: ["房屋级", "楼级｜石像鬼身体", "石像鬼身体具较强承伤。"],
        movement: ["亚音速", "音速｜飞行/怪物机动", "可利用飞行和地下城地形机动。"],
        reaction: ["亚音速", "音速｜战斗经验", "战斗经验较多。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜异端儿", "怪物生命结构与石像鬼身体提高续战。"],
        healing: ["缓慢自愈", "中速自愈｜怪物体质", "恢复强于普通人但不视为高速再生。"],
        energy: ["房屋级能量", "楼级能量｜怪物体质", "体力和怪物本体资源支撑战斗。"],
        energyRegen: ["缓慢回能", "中速回能｜休整", "需要休整恢复。"]
      }),
      notes: notes({
        penetration: "爪击、冲撞和飞行压制偏近战突破。",
        resistance: "石像鬼身体承伤较强，但仍可被高阶冒险者压制。",
        sensing: "地下城经验和对人类敌意带来强警觉。",
        tactics: "强硬派，容易选择袭击和诱导冲突；组织协作不如利德稳健。",
        special: "异端儿人格、石像鬼身体、飞行、强硬派行动。",
        weakness: "敌意和冲动会制造战术破绽，身份暴露风险高。",
        setting: "按异端儿篇古罗斯记录。",
        basis: "worldbook只用于抽取古罗斯姓名；定级依据官方角色入口与DanMachi Wiki资料入口，强硬派袭击作为剧情语境。"
      })
    })
  ]);
})();

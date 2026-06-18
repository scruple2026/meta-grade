(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["电锯人"];

  if (!work) {
    throw new Error("电锯人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "denji",
      name: "电次",
      en: "Denji",
      ja: "デンジ",
      affiliation: "公安对魔特异课 / 电锯人",
      grade: "主角 / 电锯恶魔混成体",
      appearances: ["公安篇", "学园篇"],
      timelineStatus: "电锯人混成体 / 不含黑色电锯人完全显现",
      aliases: ["电锯人", "Chainsaw Man"],
      fandomSlug: "Denji",
      defaultTimelineKey: "hybrid-public-safety",
      timelinePanels: [
        {
          key: "early-hybrid",
          label: "公安篇早期 / 初成混成体",
          status: "基础电锯变身",
          dimensions: dims({
            attack: ["墙级", "墙级｜电锯混成体", "早期以近身切割和突进为主。"],
            defense: ["墙级", "墙级｜混成体再生", "主要靠混成体再生续战。"],
            movement: ["凡人速", "亚音速｜电锯机动", "短距机动强于常人。"],
            reaction: ["凡人速", "亚音速", "早期战斗经验有限。"],
            vitality: ["精锐韧体｜混成体｜特殊生命结构", "精锐韧体｜混成体", "可通过饮血和拉绳复归。"],
            healing: ["快速自愈", "快速自愈｜饮血｜混成体", "饮血可修复明显伤势。"],
            energy: ["墙级能量", "墙级能量｜血液供能", "缺血会明显削弱。"],
            energyRegen: ["中速回能", "快速回能｜饮血", "补血后续战能力强。"]
          }),
          notes: "不计入对强敌战后的战斗经验和波奇塔本体。"
        },
        {
          key: "hybrid-public-safety",
          label: "公安篇后期 / 电锯人混成体",
          status: "常规电锯人稳定战斗状态",
          dimensions: dims({
            attack: ["墙级", "房屋级｜电锯混成体", "电锯斩击和肉体力量以单体切割、建筑局部破坏为主。"],
            defense: ["墙级", "房屋级｜混成体再生", "防御不是硬抗，主要靠恶魔混成体生命结构和再生续战。"],
            movement: ["亚音速", "亚音速｜电锯机动", "近战爆发和机动强，但不按音速记录。"],
            reaction: ["亚音速", "亚音速", "能与恶魔和魔人近战，许多闪避仍可能包含预判。"],
            vitality: ["精锐韧体｜混成体｜特殊生命结构", "楼级生命阈值｜混成体", "肢体破坏、斩首等可通过血液和拉绳恢复，核心条件特殊。"],
            healing: ["快速自愈", "极速自愈｜饮血｜混成体", "饮血后可快速修复重伤和肢体损伤。"],
            energy: ["墙级能量", "房屋级能量｜血液供能", "战斗资源依赖血液和恶魔心脏，不是无限能量。"],
            energyRegen: ["中速回能", "快速回能｜饮血", "补血可快速续战，缺血时明显削弱。"]
          }),
          notes: "当前主面板版本；黑色电锯人/波奇塔本体不并入稳定常态。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜电锯混成体", "电锯斩击和肉体力量以单体切割、建筑局部破坏为主。"],
        defense: ["墙级", "房屋级｜混成体再生", "防御不是硬抗，主要靠恶魔混成体生命结构和再生续战。"],
        movement: ["亚音速", "亚音速｜电锯机动", "近战爆发和机动强，但不按音速记录。"],
        reaction: ["亚音速", "亚音速", "能与恶魔和魔人近战，许多闪避仍可能包含预判。"],
        vitality: ["精锐韧体｜混成体｜特殊生命结构", "楼级生命阈值｜混成体", "肢体破坏、斩首等可通过血液和拉绳恢复，核心条件特殊。"],
        healing: ["快速自愈", "极速自愈｜饮血｜混成体", "饮血后可快速修复重伤和肢体损伤。"],
        energy: ["墙级能量", "房屋级能量｜血液供能", "战斗资源依赖血液和恶魔心脏，不是无限能量。"],
        energyRegen: ["中速回能", "快速回能｜饮血", "补血可快速续战，缺血时明显削弱。"]
      }),
      notes: notes({
        penetration: "电锯对血肉、肢体和恶魔身体有高切割杀伤，范围破坏有限。",
        resistance: "混成体可复活和再生，但需血液、心脏和触发条件；精神控制和特殊契约仍危险。",
        sensing: "恶魔混成体五感和近战经验足以应对常规恶魔战，但缺少系统索敌；很多规避靠直觉、痛觉承受和压迫交换。",
        tactics: "战斗方式粗野但适应性强，善于用电锯、链条和自伤换取命中；容易被心理诱导和资源断血限制。",
        special: "恶魔混成体、电锯变身、饮血再生、复活条件、与波奇塔契约。",
        weakness: "缺血、核心被控制、精神诱导和契约条件会限制战力。",
        setting: "按电次常规电锯人状态记录；黑色电锯人/波奇塔本体只在特殊权能中体现，不并入常态。",
        basis: "依据电次对武士刀、炸弹恶魔、枪魔人和公安篇强敌的斩击、再生和续战表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "illyasviel-fz",
    name: "幼年伊莉雅",
    en: "Illyasviel von Einzbern",
    ja: "イリヤスフィール・フォン・アインツベルン",
    aliases: ["伊莉雅", "Illya"],
    affiliation: "爱因兹贝伦家",
    grade: "非战斗角色 / 人造人血统",
    appearances: ["第四次圣杯战争前后"],
    timelineStatus: "幼年 / 非战斗状态",
    fandomSlug: "Illyasviel_von_Einzbern",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级", "幼年非战斗状态，不把后续第五次战争能力并入。"],
        defense: ["凡人级", "凡人级", "按幼年身体记录。"],
        movement: ["凡人速", "凡人速", "普通儿童移动。"],
        reaction: ["凡人速", "凡人速", "普通儿童反应。"],
        vitality: ["凡人肉身", "强化凡体｜人造人血统", "血统特殊但第四次时期不按战斗体处理。"],
        healing: ["无自愈", "缓慢自愈｜护理", "没有可确认战斗自愈。"],
        energy: ["凡人能量", "砖级能量｜爱因兹贝伦血统", "魔术潜质存在，但此版本不作为主战资源。"],
        energyRegen: ["缓慢回能", "缓慢回能", "无战斗续航表现。"]
      }),
    notes: notes({
        penetration: "非战斗版本，无有效攻击性质。",
        resistance: "人造人血统和后续容器素质不等同幼年期硬度。",
        sensing: "无稳定战斗索敌表现。",
        tactics: "非战斗角色，不能按后续圣杯战争经验定级。",
        special: "爱因兹贝伦血统，后续时间线可另开版本。",
        weakness: "幼年、非战斗、依赖保护。",
        setting: "按Fate/Zero时期幼年伊莉雅记录。",
        basis: "worldbook只用于抽取伊莉雅FZ姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，严格区别第五次圣杯战争版本。"
      })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "rin-tohsaka-fz",
    name: "幼年远坂凛",
    en: "Rin Tohsaka",
    ja: "遠坂凛",
    aliases: ["远坂凛", "凛", "Tohsaka Rin"],
    affiliation: "远坂家",
    grade: "非战斗角色 / 魔术师后继",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "幼年 / 非战斗状态",
    fandomSlug: "Rin_Tohsaka",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜幼年魔术资质", "幼年可有魔术资质，但不按第五次战争版本。"],
        defense: ["凡人级", "凡人级", "幼年身体承伤。"],
        movement: ["凡人速", "凡人速", "普通儿童移动。"],
        reaction: ["凡人速", "凡人速", "普通儿童反应。"],
        vitality: ["凡人肉身", "凡人肉身", "幼年生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗", "无战斗自愈。"],
        energy: ["凡人能量", "砖级能量｜魔术资质", "魔术潜质存在，战斗可用资源有限。"],
        energyRegen: ["缓慢回能", "缓慢回能", "无成体系战斗续航表现。"]
      }),
    notes: notes({
        penetration: "幼年非主战版本，魔术只作低端潜质说明。",
        resistance: "普通儿童承伤，不继承成年版本防御。",
        sensing: "无稳定战斗索敌表现。",
        tactics: "有勇气和基础判断，但不能按成年魔术师经验处理。",
        special: "远坂家魔术资质，后续版本另算。",
        weakness: "幼年、非战斗、依赖保护。",
        setting: "按Fate/Zero幼年远坂凛记录。",
        basis: "worldbook只用于抽取远坂凛FZ姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，严格区别第五次圣杯战争版本。"
      })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "uryuu-ryuunosuke",
    name: "雨生龙之介",
    en: "Ryuunosuke Uryuu",
    ja: "雨生龍之介",
    aliases: ["雨生", "龙之介", "Uryuu Ryuunosuke"],
    affiliation: "雨生阵营",
    grade: "御主 / 连续杀人者",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Ryuunosuke_Uryuu",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非魔术师御主"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["砖级", "砖级｜凶器/陷害", "本体是普通杀人者，威胁来自凶器和Caster。"],
        defense: ["凡人级", "凡人级", "普通人承伤。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗", "无战斗自愈。"],
        energy: ["凡人能量", "砖级能量｜令咒", "无正规魔术资源，令咒是主要特殊资源。"],
        energyRegen: ["无回能", "缓慢回能", "无魔术师级续航。"]
      }),
    notes: notes({
        penetration: "本体杀伤依赖凶器、偷袭和Caster协助。",
        resistance: "普通人抗性。",
        sensing: "异常直觉和残忍观察力存在，但不是战斗索敌能力。",
        tactics: "擅长犯罪、诱拐和心理异常行动，正面战术低。",
        special: "令咒、Caster契约、异常心理。",
        weakness: "普通人身体、无正规魔术训练、正面战极弱。",
        setting: "按第四次圣杯战争雨生龙之介记录。",
        basis: "worldbook只用于抽取雨生龙之介姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，本体和Caster战力分开。"
      })
  })]);
})();

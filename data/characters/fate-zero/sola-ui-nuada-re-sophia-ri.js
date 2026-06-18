(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sola-ui-nuada-re-sophia-ri",
    name: "索拉·努阿达蕾·索菲亚莉",
    en: "Sola-Ui Nuada-Re Sophia-Ri",
    ja: "ソラウ・ヌァザレ・ソフィアリ",
    aliases: ["索拉", "Sola-Ui"],
    affiliation: "埃尔梅罗阵营",
    grade: "魔术师家系 / 供魔者",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争",
    fandomSlug: "Sola-Ui_Nuada-Re_Sophia-Ri",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非主战保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜魔术资质/令咒", "非主战角色，攻击表现有限。"],
        defense: ["凡人级", "砖级｜魔术家系", "本体承伤低。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗", "无战斗自愈。"],
        energy: ["砖级能量", "墙级能量｜供魔/令咒", "作为供魔者和令咒持有者有特殊资源。"],
        energyRegen: ["缓慢回能", "缓慢回能｜供魔", "战斗回能表现有限。"]
      }),
    notes: notes({
        penetration: "非主战角色，令咒偏命令而非直接攻击。",
        resistance: "普通人承伤，魔术家系不等同高防。",
        sensing: "无稳定战斗索敌表现。",
        tactics: "政治和情感选择影响阵营，但正面战术低。",
        special: "供魔、令咒、魔术家系背景。",
        weakness: "非主战、情感牵制、普通人身体。",
        setting: "按第四次圣杯战争索拉记录。",
        basis: "worldbook只用于抽取索拉姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，非主战低档记录。"
      })
  })]);
})();

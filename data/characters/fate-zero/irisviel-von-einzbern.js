(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "irisviel-von-einzbern",
    name: "爱丽丝菲尔·冯·爱因兹贝伦",
    en: "Irisviel von Einzbern",
    ja: "アイリスフィール・フォン・アインツベルン",
    aliases: ["爱丽丝菲尔", "爱丽", "Iri"],
    affiliation: "爱因兹贝伦阵营",
    grade: "小圣杯容器 / 人造人",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争 / 小圣杯容器",
    fandomSlug: "Irisviel_von_Einzbern",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "圣杯容器"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜炼金术/银丝", "可用爱因兹贝伦炼金术和银丝辅助战斗，正面输出有限。"],
        defense: ["砖级", "墙级｜人造人/术式", "有术式和人造人素体支撑，但非主战从者。"],
        movement: ["凡人速", "亚音速｜术式辅助", "移动主要是普通人到魔术辅助范围。"],
        reaction: ["凡人速", "亚音速｜战场经验", "可配合Saber行动，但不是高速近战角色。"],
        vitality: ["凡人肉身", "强化凡体｜人造人/小圣杯", "生命状态和小圣杯容器强绑定，不能等同高防御。"],
        healing: ["缓慢自愈", "中速自愈｜人造人调整", "恢复依赖人造人素体和外部护理。"],
        energy: ["墙级能量", "房屋级能量｜小圣杯容器", "魔术资源和圣杯容器性质显著，但战斗输出保守。"],
        energyRegen: ["缓慢回能", "中速回能｜容器/供魔条件", "续航受容器状态和剧情条件影响。"]
      }),
    notes: notes({
        penetration: "银丝和炼金术偏限制、辅助和局部杀伤，不按大范围破坏处理。攻击速度：爱丽丝菲尔先操纵银丝或发动炼金术，银丝随后伸展、缠绕并限制目标；辅助炼金效果按具体术式生效，不与银丝速度混算。",
        resistance: "人造人素体和术式有一定耐受，小圣杯化反而带来死亡条件风险。",
        sensing: "圣杯相关感知和阵营协作有价值，但索敌范围不稳定。",
        tactics: "配合Saber和切嗣行动，能执行诱导、掩护和撤离计划。",
        special: "爱因兹贝伦炼金术、小圣杯容器、人造人素体、银丝操控。",
        weakness: "容器使命导致生命状态不可持续，正面战力远低于从者。",
        setting: "按第四次圣杯战争爱丽丝菲尔记录。",
        basis: "worldbook只用于抽取爱丽丝菲尔姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，小圣杯性质写入生命体量/特殊项。"
      })
  })]);
})();

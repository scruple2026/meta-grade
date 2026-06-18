(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "waver-velvet-fz",
    name: "韦伯·维尔维特",
    en: "Waver Velvet",
    ja: "ウェイバー・ベルベット",
    aliases: ["韦伯", "维尔维特", "Waver"],
    affiliation: "韦伯阵营",
    grade: "御主 / 年轻魔术师",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争 / 年轻御主",
    fandomSlug: "Waver_Velvet",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "低端魔术"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜基础魔术/令咒", "年轻魔术师输出很低，主要依赖Rider。"],
        defense: ["凡人级", "砖级｜基础术式", "本体防御弱。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应，战场上多靠Rider保护。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗", "无战斗自愈。"],
        energy: ["砖级能量", "墙级能量｜令咒/御主资源", "魔术资源有限，令咒为主要峰值。"],
        energyRegen: ["缓慢回能", "缓慢回能", "无法支撑高强度魔术战。"]
      }),
    notes: notes({
        penetration: "基础魔术不适合正面杀伤，令咒为特殊命令资源。",
        resistance: "本体脆弱，主要靠Rider保护。",
        sensing: "御主基础感知和学习能力存在，但范围有限。",
        tactics: "起初稚嫩，战争中快速成长，擅长与Rider形成互补。",
        special: "令咒、Rider契约、基础魔术、后续二世成长不并入。",
        weakness: "年轻、资源少、正面战弱、情绪和经验不足。",
        setting: "按第四次圣杯战争韦伯记录，不并入埃尔梅罗二世时期。",
        basis: "worldbook只用于抽取韦伯FZ姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，二世版本另行处理。"
      })
  })]);
})();

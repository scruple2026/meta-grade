(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shude-mai",
    name: "酒德麻衣",
    en: "Mai Shude",
    ja: "酒徳麻衣",
    aliases: ["长腿妞", "鹭鸶", "麻衣"],
    affiliation: "路鸣泽团队 / 混血种",
    grade: "助理 / 忍者 / 狙击手",
    appearances: ["原作主线"],
    timelineStatus: "主线 / 临时血统提升峰值",
    fandomSlug: "酒德麻衣",
    confidence: "medium",
    evidenceType: ["资料入口", "言灵/狙击/临时血统提升"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "萌娘百科：酒德麻衣",
      url: "https://zh.moegirl.org.cn/酒德麻衣",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对酒德麻衣的路鸣泽团队身份、忍者/狙击手定位、言灵冥照和临时血统提升情节入口。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "楼级｜狙击/忍者刀/临时血统提升｜条件", "常态以枪械、忍者刀和潜入杀伤为主；峰值来自装备与临时血统提升。"],
        defense: ["砖级", "房屋级｜混血种体质/临时血统提升｜条件", "混血种和短时血统强化提高承伤，但不是龙王级生命结构。"],
        movement: ["亚音速", "音速｜忍者训练/血统爆发｜条件", "潜入、近战和短时爆发突出，稳定移动不按高速档处理。"],
        reaction: ["亚音速", "音速｜忍者训练/实战经验", "近战、狙击和任务经验支撑较高反应。"],
        vitality: ["强化凡体", "房屋级生命阈值｜古龙血清/临时血统提升｜条件", "峰值生命体量来自临时强化和硬抗，不等同稳定龙类身体。"],
        healing: ["缓慢自愈", "快速自愈｜血统/药剂/医疗｜条件", "恢复依赖血统、药剂或外部医疗。"],
        energy: ["砖级能量", "楼级能量｜言灵冥照/装备/血统提升｜条件", "能量资源来自言灵、装备和临时强化。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给/外部支援", "无稳定战斗回能体系，高强度行动后需要补给。"]
      }),
    notes: notes({
        penetration: "狙击、忍者刀、潜入暗杀和临时强化偏穿透杀伤；不按大范围破坏型角色处理。",
        resistance: "混血种体质和临时血统提升能提高承伤，但过度强化有堕落风险。",
        sensing: "潜入、监视、狙击阵位和幕后支援经验强。",
        tactics: "擅长隐蔽行动、支援、狙击、诱导和撤离，常作为路鸣泽团队的执行手。",
        special: "言灵冥照、忍术训练、枪械/狙击、忍者刀、临时血统提升。",
        weakness: "峰值依赖外部提升、药剂或任务条件，正面硬拼不是稳定优势。",
        setting: "按原作主线酒德麻衣记录，临时血统提升作为条件峰值。",
        basis: "worldbook只用于抽取酒德麻衣姓名；公开资料入口显示其路鸣泽团队身份、忍者/狙击手定位、言灵冥照和临时血统提升情节，主面板按混血种执行者保守记录。"
      })
  })]);
})();

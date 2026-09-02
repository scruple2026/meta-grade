(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "constantine",
    name: "康斯坦丁",
    en: "Constantine",
    ja: "康斯坦丁",
    aliases: ["青铜与火之王", "Constantine"],
    affiliation: "青铜与火之王",
    grade: "龙王 / 诺顿双生子",
    appearances: ["火之晨曦"],
    timelineStatus: "青铜与火之王双生子",
    fandomSlug: "康斯坦丁",
    confidence: "review",
    evidenceType: ["资料入口", "龙王峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["楼宇级", "街区级｜龙王权能/言灵｜争议", "龙王级峰值按局部灾害和言灵机制保守记录。"],
        defense: ["楼宇级", "街区级｜龙躯/龙王生命", "龙躯和龙王生命结构显著高于混血种。"],
        movement: ["音速", "超音速｜龙王爆发", "按高阶龙类/混血种之上的爆发记录。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能", "高阶龙类反应和感知强。"],
        vitality: ["楼宇级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字", "生命结构和复归条件复杂，不能等同普通肉身。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件", "恢复与龙类生命结构、龙骨十字或复归条件相关。"],
        energy: ["楼宇级能量", "街区级能量｜言灵/龙王权能", "言灵与龙王权能作为峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/尼伯龙根条件", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "青铜与火权能作为龙王峰值，不按称号无限上推。攻击速度：龙躯近战与青铜、火焰权能应分开看，后者有生成或扩散过程；现有条目未提供把火光直接换成具体速度档的证据。",
        resistance: "龙王生命结构和龙骨十字机制复杂。",
        sensing: "与诺顿及青铜城相关的信息联系强。",
        tactics: "战术表现受个体状态和双生关系影响。",
        special: "青铜与火之王双生子、龙王生命结构、龙骨十字。",
        weakness: "与诺顿双生关系、复苏状态和记忆条件限制发挥。",
        setting: "按火之晨曦康斯坦丁记录。",
        basis: "worldbook只用于抽取康斯坦丁姓名；定级依据公开作品/资料入口，龙王峰值保守记录。"
      })
  })]);
})();

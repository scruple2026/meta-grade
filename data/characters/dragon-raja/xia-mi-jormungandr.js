(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xia-mi-jormungandr",
    name: "夏弥（耶梦加得）",
    en: "Xia Mi / Jormungandr",
    ja: "夏弥",
    aliases: ["夏弥", "耶梦加得", "小龙女"],
    affiliation: "北京地铁尼伯龙根 / 龙王",
    grade: "大地与山之王之一",
    appearances: ["悼亡者之瞳"],
    timelineStatus: "耶梦加得身份揭示",
    fandomSlug: "夏弥",
    confidence: "review",
    evidenceType: ["资料入口", "龙王峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["楼级", "街区级｜龙王权能/言灵｜争议", "龙王级峰值按局部灾害和言灵机制保守记录。"],
        defense: ["楼级", "街区级｜龙躯/龙王生命", "龙躯和龙王生命结构显著高于混血种。"],
        movement: ["音速", "超音速｜龙王爆发", "按高阶龙类/混血种之上的爆发记录。"],
        reaction: ["音速", "超音速｜龙王感知/战斗本能", "高阶龙类反应和感知强。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜龙王生命结构/龙骨十字", "生命结构和复归条件复杂，不能等同普通肉身。"],
        healing: ["中速自愈", "极速自愈｜龙王生命/龙骨十字｜条件", "恢复与龙类生命结构、龙骨十字或复归条件相关。"],
        energy: ["楼级能量", "街区级能量｜言灵/龙王权能", "言灵与龙王权能作为峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜龙类生命/尼伯龙根条件", "回能受龙类状态和环境影响。"]
      }),
    notes: notes({
        penetration: "大地与山权能和尼伯龙根机制比单纯破坏更重要。",
        resistance: "龙王生命结构强，和人类少女伪装状态需区分。",
        sensing: "对尼伯龙根和龙王相关信息有优势。",
        tactics: "擅长伪装、诱导和利用情感关系。",
        special: "耶梦加得身份、大地与山权能、尼伯龙根、龙王生命结构。",
        weakness: "人类身份伪装、情感牵制和龙王复归条件复杂。",
        setting: "按悼亡者之瞳夏弥/耶梦加得记录。",
        basis: "worldbook只用于抽取夏弥姓名；定级依据公开作品/资料入口，龙王权能保守标争议。"
      })
  })]);
})();

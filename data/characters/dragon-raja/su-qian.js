(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "su-qian",
    name: "苏茜",
    en: "Su Qian",
    ja: "苏茜",
    aliases: ["狮心会副会长", "Susie"],
    affiliation: "卡塞尔学院 / 狮心会",
    grade: "狮心会副会长 / 学生干部",
    appearances: ["原作主线"],
    timelineStatus: "卡塞尔学院时期",
    fandomSlug: "苏茜",
    confidence: "medium",
    evidenceType: ["资料入口", "狮心会/言灵"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "萌娘百科：苏茜",
      url: "https://zh.moegirl.org.cn/苏茜",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对苏茜的狮心会副会长身份、学生干部定位和言灵/战斗训练入口。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜言灵/学院训练/武装", "峰值来自言灵、武装和学院训练，不按大型破坏处理。"],
        defense: ["砖级", "墙级｜混血种体质/装备", "承伤按混血种学生干部保守记录。"],
        movement: ["凡人速", "亚音速｜混血种训练", "身体素质和训练高于普通学生。"],
        reaction: ["凡人速", "亚音速｜狮心会训练/言灵辅助", "反应受学院训练和言灵条件加成。"],
        vitality: ["强化凡体", "强化凡体｜混血种体质", "生命体量不按高阶龙类处理。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和医疗。"],
        energy: ["砖级能量", "墙级能量｜言灵/武装", "能量池来自言灵、体能和武装。"],
        energyRegen: ["无回能", "缓慢回能｜休整/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "学院武装和言灵可提高单体杀伤，但不直接换算为高破坏规模。",
        resistance: "混血种体质和装备提高容错。",
        sensing: "狮心会组织信息、学院训练和战场观察。",
        tactics: "学生干部，擅长组织协调、支援和稳定执行任务。",
        special: "狮心会副会长身份、混血种血统、言灵和学院训练。",
        weakness: "缺少顶级血统或龙王级硬实力，峰值依赖装备和队伍条件。",
        setting: "按原作主线卡塞尔学院时期苏茜记录。",
        basis: "worldbook只用于抽取苏茜姓名；公开资料入口显示其狮心会副会长和混血种学生干部定位，按学院高端学生保守记录。"
      })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lancelot-dragon-raja",
    name: "兰斯洛特",
    en: "Lancelot",
    ja: "兰斯洛特",
    aliases: ["学生会副会长", "Lancelot"],
    affiliation: "卡塞尔学院 / 学生会",
    grade: "学生会副会长 / 混血种学生",
    appearances: ["原作主线"],
    timelineStatus: "卡塞尔学院时期",
    fandomSlug: "兰斯洛特",
    confidence: "medium",
    evidenceType: ["资料入口", "学生会/混血种训练"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜学院武装/混血种训练", "学生会高端成员，峰值来自武装和混血种训练。"],
        defense: ["砖级", "墙级｜混血种体质/装备", "防护按学生干部级混血种处理。"],
        movement: ["凡人速", "亚音速｜混血种训练", "训练和血统使短时爆发高于普通人。"],
        reaction: ["凡人速", "亚音速｜学院训练/实战经验", "反应按卡塞尔高端学生保守记录。"],
        vitality: ["强化凡体", "强化凡体｜混血种体质", "生命体量不按龙王或皇血处理。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和医疗。"],
        energy: ["砖级能量", "墙级能量｜武装/血统", "能量资源来自体能、武装和血统。"],
        energyRegen: ["无回能", "缓慢回能｜休整/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "学院武装和近战训练提供有限单体杀伤。",
        resistance: "混血种体质与装备提高承伤。",
        sensing: "学生会组织信息和学院任务经验。",
        tactics: "学生会副会长，擅长协同、组织执行和学院任务支援。",
        special: "学生会副会长身份、混血种体质、学院训练。",
        weakness: "缺少顶级言灵或龙王级表现，面板按支援型学生干部保守。",
        setting: "按原作主线卡塞尔学院时期兰斯洛特记录。",
        basis: "worldbook只用于抽取兰斯洛特姓名；公开资料入口显示其学生会副会长和混血种学生定位，按学院学生干部保守记录。"
      })
  })]);
})();

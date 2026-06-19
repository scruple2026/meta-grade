(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ye-sheng",
    name: "叶胜",
    en: "Ye Sheng",
    ja: "叶胜",
    aliases: ["叶胜"],
    affiliation: "卡塞尔学院执行部",
    grade: "执行部专员 / 青铜城任务成员",
    appearances: ["火之晨曦"],
    timelineStatus: "青铜城任务",
    fandomSlug: "叶胜",
    confidence: "medium",
    evidenceType: ["资料入口", "执行部/水下任务"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "萌娘百科：叶胜",
      url: "https://zh.moegirl.org.cn/叶胜",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对叶胜的卡塞尔学院执行部身份、青铜城任务和言灵/水下执行定位。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜执行部装备/水下任务", "杀伤主要来自执行部装备、枪械和任务环境，不按大范围破坏处理。"],
        defense: ["砖级", "墙级｜混血种体质/潜水装备", "防护依赖混血种体质和装备，面对龙王级环境极脆弱。"],
        movement: ["凡人速", "亚音速｜混血种训练/水下机动", "陆地和水下机动高于普通人但缺少高速战表现。"],
        reaction: ["凡人速", "亚音速｜执行部训练/言灵辅助", "反应以任务训练和言灵感知辅助为主。"],
        vitality: ["强化凡体", "强化凡体｜混血种体质", "生命体量按执行部混血种处理，不写高生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和外部医疗。"],
        energy: ["砖级能量", "墙级能量｜言灵/装备", "能量资源来自言灵、体能和任务装备。"],
        energyRegen: ["无回能", "缓慢回能｜休整/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "枪械、执行部装备和青铜城任务经验提供有限单体杀伤。",
        resistance: "混血种体质与潜水装备提高容错，但无法承受龙王级环境压制。",
        sensing: "言灵和执行部任务训练偏侦测、导航和水下环境判断。",
        tactics: "执行部专员，擅长配合、潜入、水下任务和危机判断。",
        special: "执行部训练、青铜城任务经验、言灵感知/辅助能力。",
        weakness: "装备和环境依赖高，面对龙王、龙侍和青铜城机关时生存空间有限。",
        setting: "按《火之晨曦》青铜城任务叶胜记录。",
        basis: "worldbook只用于抽取叶胜姓名；公开资料入口显示其执行部专员和青铜城任务定位，按混血种任务专员保守记录。"
      })
  })]);
})();

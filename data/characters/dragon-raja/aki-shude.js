(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "aki-shude",
    name: "酒德亚纪",
    en: "Aki Shude",
    ja: "酒徳亜紀",
    aliases: ["亚纪", "Aki"],
    affiliation: "卡塞尔学院执行部",
    grade: "执行部专员 / 青铜城任务成员",
    appearances: ["火之晨曦"],
    timelineStatus: "青铜城任务",
    fandomSlug: "酒德亚纪",
    confidence: "medium",
    evidenceType: ["资料入口", "执行部/水下任务"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "萌娘百科：酒德亚纪",
      url: "https://zh.moegirl.org.cn/酒德亚纪",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对酒德亚纪的卡塞尔学院执行部身份、青铜城任务和水下执行定位。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜执行部装备/水下任务", "输出依赖枪械、装备和任务配合，缺少高破坏表现。"],
        defense: ["砖级", "墙级｜混血种体质/潜水装备", "防护主要来自体质和装备。"],
        movement: ["凡人速", "亚音速｜混血种训练/水下机动", "水下任务机动和执行训练强于普通人。"],
        reaction: ["凡人速", "亚音速｜执行部训练/任务经验", "反应按执行部专员保守记录。"],
        vitality: ["强化凡体", "强化凡体｜混血种体质", "生命体量按混血种专员处理。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和外部医疗。"],
        energy: ["砖级能量", "墙级能量｜装备/言灵条件", "能量资源来自体能、装备和可能的言灵辅助。"],
        energyRegen: ["无回能", "缓慢回能｜休整/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "执行部装备、枪械和青铜城任务配合提供有限杀伤。",
        resistance: "混血种体质与潜水装备增强生存，但对龙王级机关和敌人仍脆弱。",
        sensing: "任务配合、水下侦查和执行部行动经验。",
        tactics: "善于执行部双人配合、水下行动和危机撤离判断。",
        special: "执行部训练、青铜城任务经验、混血种体质。",
        weakness: "装备、环境和队友配合依赖高，正面高阶战斗能力有限。",
        setting: "按《火之晨曦》青铜城任务酒德亚纪记录。",
        basis: "worldbook只用于抽取酒德亚纪姓名；公开资料入口显示其执行部专员和青铜城任务定位，按混血种任务专员保守记录。"
      })
  })]);
})();

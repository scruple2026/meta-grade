(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "parsi-gattuso",
    name: "帕西",
    en: "Parsi Gattuso",
    ja: "帕西",
    aliases: ["帕西·加图索", "帕西"],
    affiliation: "加图索家族",
    grade: "家族执行者 / 恺撒相关角色",
    appearances: ["原作主线"],
    timelineStatus: "主线",
    fandomSlug: "帕西",
    confidence: "medium",
    evidenceType: ["资料入口", "加图索家族/执行者"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜家族武装/混血种训练", "威胁来自加图索家族武装、训练和任务执行。"],
        defense: ["砖级", "墙级｜混血种体质/装备", "防护按家族执行者保守记录。"],
        movement: ["凡人速", "亚音速｜混血种训练", "混血种训练带来短时爆发。"],
        reaction: ["凡人速", "亚音速｜执行者经验", "反应按家族执行者和任务经验记录。"],
        vitality: ["强化凡体", "强化凡体｜混血种体质", "生命体量不按高阶龙类处理。"],
        healing: ["缓慢自愈", "中速自愈｜血统/医疗", "恢复依赖血统和医疗。"],
        energy: ["砖级能量", "墙级能量｜武装/血统", "能量资源来自体能、血统和装备。"],
        energyRegen: ["无回能", "缓慢回能｜休整/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "家族武装和执行者训练提供单体杀伤。",
        resistance: "混血种体质和装备提高承伤，但不按高阶龙类处理。",
        sensing: "加图索家族情报、护卫和任务执行经验。",
        tactics: "服从家族任务，擅长护卫、执行、压制和牺牲式行动。",
        special: "加图索家族背景、混血种训练、家族武装。",
        weakness: "受家族命令和恺撒线牵制，缺少独立高阶输出表现。",
        setting: "按原作主线帕西记录。",
        basis: "worldbook只用于抽取帕西姓名；公开资料入口显示其加图索家族相关身份，按混血种家族执行者保守记录。"
      })
  })]);
})();

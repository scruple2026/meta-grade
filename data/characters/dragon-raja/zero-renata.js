(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zero-renata",
    name: "零（雷娜塔）",
    en: "Zero / Renata",
    ja: "零 / 雷娜塔",
    aliases: ["零", "雷娜塔", "皇女"],
    affiliation: "卡塞尔学院 / 黑天鹅港",
    grade: "混血种 / 皇女",
    appearances: ["原作主线"],
    timelineStatus: "主线",
    fandomSlug: "零",
    confidence: "medium",
    evidenceType: ["资料入口", "混血种/黑天鹅港"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜枪械/装备/混血种训练", "本体按现代人和混血种训练保守记录。"],
        defense: ["凡人级", "砖级｜训练/装备", "缺少龙化或高阶血统承伤时按人类低端处理。"],
        movement: ["凡人速", "亚音速｜训练/爆发", "混血种身体素质高于普通人但不直接升到高速档。"],
        reaction: ["凡人速", "亚音速｜训练/战斗经验", "反应依赖训练、经验和血统感知。"],
        vitality: ["凡人肉身", "强化凡体｜混血种体质", "混血种体质高于普通人，但不是龙王级生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜医疗/血统恢复", "恢复依赖伤势、治疗和血统。"],
        energy: ["凡人能量", "砖级能量｜装备/言灵条件", "可战斗资源来自装备、体力和少量言灵条件。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "本体杀伤依赖枪械、训练和特殊任务条件。",
        resistance: "混血种体质和训练强于普通人，但不按龙王处理。",
        sensing: "任务经验、冷静观察和情报判断强。",
        tactics: "沉着、执行力高，适合潜入和支援任务。",
        special: "黑天鹅港背景、混血种血统、任务执行能力。",
        weakness: "正面输出有限，受路鸣泽/黑天鹅港线牵制。",
        setting: "按原作主线零/雷娜塔记录。",
        basis: "worldbook只用于抽取零/雷娜塔姓名；定级依据公开作品/资料入口，按混血种低端保守记录。"
      })
  })]);
})();

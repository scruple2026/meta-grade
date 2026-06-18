(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "uesugi-yue",
    name: "上杉越",
    en: "Uesugi Yue",
    ja: "上杉越",
    aliases: ["拉面师傅", "前代影皇"],
    affiliation: "蛇岐八家 / 上杉家",
    grade: "前代影皇 / 皇血",
    appearances: ["黑月之潮"],
    timelineStatus: "前代影皇 / 老年状态",
    fandomSlug: "上杉越",
    confidence: "medium",
    evidenceType: ["资料入口", "皇血/老年"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙级", "楼级｜言灵/炼金武装/暴血", "混血种战斗力强，峰值来自言灵、装备或暴血。"],
        defense: ["墙级", "房屋级｜皇血/老年", "老年状态下保守记录。"],
        movement: ["亚音速", "音速｜暴血/混血种爆发", "短时爆发明显高于常人。"],
        reaction: ["亚音速", "音速｜言灵/战斗经验", "混血种战斗反应强。"],
        vitality: ["强化凡体", "房屋级生命阈值｜皇血/老年", "皇血强但年龄和状态限制明显。"],
        healing: ["缓慢自愈", "快速自愈｜血统/医疗", "恢复依赖血统和医疗条件。"],
        energy: ["墙级能量", "房屋级能量｜皇血/武装", "不按巅峰影皇无限外推。"],
        energyRegen: ["缓慢回能", "中速回能｜血统/休整", "高强度消耗后需要休整。"]
      }),
    notes: notes({
        penetration: "皇血和战斗经验强，老年状态限制输出。",
        resistance: "皇血承伤高于普通混血种，但非龙王结构。",
        sensing: "经验、家族线索和局势判断强。",
        tactics: "长期隐忍、保护子女和关键时刻支援。",
        special: "前代影皇、皇血、上杉家血统。",
        weakness: "年龄、隐居状态和亲情牵制。",
        setting: "按黑月之潮上杉越记录。",
        basis: "worldbook只用于抽取上杉越姓名；定级依据公开作品/资料入口，按老年皇血保守记录。"
      })
  })]);
})();

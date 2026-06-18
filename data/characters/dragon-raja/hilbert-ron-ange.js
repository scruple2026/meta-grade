(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "hilbert-ron-ange",
    name: "希尔伯特·让·昂热",
    en: "Hilbert Ron Anjou",
    ja: "希尔伯特·让·昂热",
    aliases: ["昂热", "校长", "复仇男神"],
    affiliation: "卡塞尔学院",
    grade: "校长 / 屠龙者",
    appearances: ["原作主线"],
    timelineStatus: "主线 / 老年屠龙者",
    fandomSlug: "昂热",
    confidence: "medium",
    evidenceType: ["资料入口", "言灵/屠龙经验"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙级", "楼级｜时间零/炼金刀具/屠龙经验", "峰值来自时间零和屠龙武装。"],
        defense: ["墙级", "房屋级｜混血种体质/经验", "老年身体但屠龙经验极强。"],
        movement: ["亚音速", "音速｜暴血/混血种爆发", "短时爆发明显高于常人。"],
        reaction: ["亚音速", "音速｜言灵/战斗经验", "混血种战斗反应强。"],
        vitality: ["强化凡体", "房屋级生命阈值｜混血种体质/老年", "生命体量不等同龙王。"],
        healing: ["缓慢自愈", "快速自愈｜血统/医疗", "恢复依赖血统和医疗条件。"],
        energy: ["墙级能量", "楼级能量｜时间零/武装", "时间零和装备提供峰值资源。"],
        energyRegen: ["缓慢回能", "中速回能｜血统/休整", "高强度消耗后需要休整。"]
      }),
    notes: notes({
        penetration: "炼金刀具、时间零和屠龙经验偏高穿透刺杀。",
        resistance: "经验和速度规避强，肉身仍不是龙王级。",
        sensing: "屠龙经验、学院情报网和战场判断极强。",
        tactics: "长期反龙族布局、暗杀、指挥和心理战强。",
        special: "时间零、炼金刀具、卡塞尔学院校长权限。",
        weakness: "年龄、复仇执念和肉身上限。",
        setting: "按原作主线昂热记录。",
        basis: "worldbook只用于抽取昂热姓名；定级依据公开作品/资料入口，时间零作为速度/特殊峰值。"
      })
  })]);
})();

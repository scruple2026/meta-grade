(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "caesar-gattuso",
    name: "恺撒·加图索",
    en: "Caesar Gattuso",
    ja: "恺撒·加图索",
    aliases: ["恺撒", "学生会主席", "Caesar"],
    affiliation: "卡塞尔学院 / 学生会",
    grade: "混血种 / 镰鼬使用者",
    appearances: ["原作主线"],
    timelineStatus: "主线 / 学生会主席",
    fandomSlug: "恺撒·加图索",
    confidence: "medium",
    evidenceType: ["资料入口", "言灵/炼金武装"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙体级", "房屋级｜狄克推多/枪械/镰鼬辅助", "以武器、射击和言灵辅助为主，破坏峰值低于龙王级。"],
        defense: ["墙体级", "房屋级｜混血种体质/装备", "高素质混血种承伤。"],
        movement: ["亚音速", "音速｜暴血/混血种爆发", "短时爆发明显高于常人。"],
        reaction: ["亚音速", "音速｜言灵/战斗经验", "混血种战斗反应强。"],
        vitality: ["强化凡体", "房屋级生命阈值｜混血种体质", "生命体量按高端混血种记录。"],
        healing: ["缓慢自愈", "快速自愈｜血统/医疗", "恢复依赖血统和医疗条件。"],
        energy: ["墙体级能量", "房屋级能量｜言灵/装备", "资源来自装备、言灵和战术准备。"],
        energyRegen: ["缓慢回能", "中速回能｜血统/休整", "高强度消耗后需要休整。"]
      }),
    notes: notes({
        penetration: "狄克推多、枪械和团队火力是主要杀伤；镰鼬偏感知辅助。攻击速度：狄克推多随凯撒近战挥刀，枪弹离膛后明显快于本人奔跑；镰鼬负责感知定位，不是攻击载体。",
        resistance: "高端混血种和装备防护，非龙王生命结构。",
        sensing: "镰鼬提供听觉/风场感知优势。",
        tactics: "领导、射击、团队协调和贵族式正面作战强。",
        special: "镰鼬、狄克推多、学生会资源、加图索家背景。",
        weakness: "家族政治牵制，正面自信可能带来风险。",
        setting: "按原作主线恺撒记录。",
        basis: "worldbook只用于抽取恺撒姓名；定级依据公开作品/资料入口，镰鼬作为感知特长而非攻击升档。"
      })
  })]);
})();

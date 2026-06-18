(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "chu-zihang",
    name: "楚子航",
    en: "Chu Zihang",
    ja: "楚子航",
    aliases: ["杀胚", "楚师兄", "Chu Zihang"],
    affiliation: "卡塞尔学院 / 狮心会",
    grade: "混血种 / 君焰使用者",
    appearances: ["原作主线"],
    timelineStatus: "主线 / 暴血与君焰峰值",
    fandomSlug: "楚子航",
    confidence: "medium",
    evidenceType: ["资料入口", "言灵/暴血"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙级", "楼级｜言灵/炼金武装/暴血", "混血种战斗力强，峰值来自言灵、装备或暴血。"],
        defense: ["墙级", "楼级｜血统/装备", "高血统和装备支撑承伤。"],
        movement: ["亚音速", "音速｜暴血/混血种爆发", "短时爆发明显高于常人。"],
        reaction: ["亚音速", "音速｜言灵/战斗经验", "混血种战斗反应强。"],
        vitality: ["强化凡体", "楼级生命阈值｜血统/暴血", "生命体量随血统和暴血提升，但不是龙王本体。"],
        healing: ["缓慢自愈", "快速自愈｜血统/医疗", "恢复依赖血统和医疗条件。"],
        energy: ["墙级能量", "楼级能量｜言灵/炼金武装", "言灵和装备提供峰值资源。"],
        energyRegen: ["缓慢回能", "中速回能｜血统/休整", "高强度消耗后需要休整。"]
      }),
    notes: notes({
        penetration: "君焰偏高热和爆燃杀伤，村雨/炼金武装另算近战穿透。",
        resistance: "暴血提升体能与承伤，但会带来失控和血统风险。",
        sensing: "战斗观察、执行部训练和狮心会经验强。",
        tactics: "冷静、执行力强，擅长正面攻坚和高风险任务。",
        special: "君焰、暴血、村雨、狮心会训练。",
        weakness: "暴血代价、奥丁线心理牵制和高风险任务消耗。",
        setting: "按原作主线楚子航记录。",
        basis: "worldbook只用于抽取楚子航姓名；定级依据公开作品/资料入口，言灵和暴血作为峰值。"
      })
  })]);
})();

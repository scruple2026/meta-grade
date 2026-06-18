(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "minamoto-chisei",
    name: "源稚生",
    en: "Minamoto Chisei",
    ja: "源稚生",
    aliases: ["象龟", "大家长", "天照命", "影皇"],
    affiliation: "蛇岐八家 / 源家",
    grade: "皇血 / 大家长",
    appearances: ["黑月之潮"],
    timelineStatus: "蛇岐八家大家长时期",
    fandomSlug: "源稚生",
    confidence: "medium",
    evidenceType: ["资料入口", "皇血/武装"],
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
        penetration: "皇血、炼金武装和近战技巧构成主要杀伤。",
        resistance: "皇血提升体质和承伤，但不是龙王生命结构。",
        sensing: "蛇岐八家情报和执行经验强。",
        tactics: "组织指挥、近战、任务执行和自我牺牲倾向强。",
        special: "皇血、蛇岐八家大家长、炼金武装。",
        weakness: "家族责任、绘梨衣/源稚女牵制和政治局势。",
        setting: "按黑月之潮源稚生记录。",
        basis: "worldbook只用于抽取源稚生姓名；定级依据公开作品/资料入口，皇血作为混血种峰值。"
      })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "minamoto-chime",
    name: "源稚女",
    en: "Minamoto Chime",
    ja: "源稚女",
    aliases: ["风间琉璃", "梦貘", "源稚女"],
    affiliation: "猛鬼众 / 源家",
    grade: "皇血 / 风间琉璃",
    appearances: ["黑月之潮"],
    timelineStatus: "风间琉璃时期",
    fandomSlug: "源稚女",
    confidence: "medium",
    evidenceType: ["资料入口", "皇血/精神能力"],
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
        penetration: "近战、皇血和梦貘相关精神能力共同构成威胁。",
        resistance: "皇血体质强，精神状态复杂。",
        sensing: "对心理、梦境和人际诱导有优势。",
        tactics: "戏剧性伪装、心理诱导和近战均强。",
        special: "风间琉璃身份、梦貘、皇血、猛鬼众关系。",
        weakness: "精神创伤、源稚生牵制和赫尔佐格操控。",
        setting: "按黑月之潮源稚女/风间琉璃记录。",
        basis: "worldbook只用于抽取源稚女姓名；定级依据公开作品/资料入口，精神能力写入特殊项。"
      })
  })]);
})();

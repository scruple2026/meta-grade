(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zouken-matou",
    name: "间桐脏砚",
    en: "Zouken Matou",
    ja: "間桐臓硯",
    aliases: ["脏砚", "Matou Zouken"],
    affiliation: "间桐家",
    grade: "虫使魔术师 / 老魔术师",
    appearances: ["Heaven's Feel"],
    timelineStatus: "第五次圣杯战争 / HF暗线",
    fandomSlug: "Zouken_Matou",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "房屋级｜虫术/使魔", "虫术偏控制、侵蚀和间接杀伤。"],
      defense: ["砖级", "房屋级｜虫体/分散", "本体死亡条件复杂但单体硬度不高。"],
      movement: ["凡人速", "亚音速｜虫群/使魔", "本体慢，虫群行动另算。"],
      reaction: ["凡人速", "亚音速｜老魔术师经验", "经验和准备弥补身体劣势。"],
      vitality: ["精锐韧体｜虫体分散", "房屋级生命阈值｜核心虫/特殊生命结构", "难杀来自分散和核心虫，不是肉身硬度。"],
      healing: ["中速自愈｜虫体替换", "快速自愈｜核心虫/备用体", "恢复依赖虫术和准备。"],
      energy: ["墙级能量", "房屋级能量｜虫术/圣杯暗线", "魔术资源和暗线准备较深。"],
      energyRegen: ["缓慢回能", "中速回能｜虫体/准备", "依赖虫群、准备和宿主。"]
    }),
    notes: notes({
      penetration: "虫术可侵蚀、寄生和控制，不能简单当作爆破。攻击速度：脏砚的虫术先放出或布置虫群，虫体再爬行、扑击、侵入目标；寄生和控制是接触后的效果，不是瞬间命中。",
      resistance: "分散生命和核心虫难杀，但被针对核心后会崩溃。",
      sensing: "长期监控间桐家、圣杯系统和樱。",
      tactics: "长期布局、寄生、污染和心理操控很强。",
      special: "虫术、核心虫、间桐家魔术、HF暗线操控。",
      weakness: "衰老、执念、核心虫和对樱/圣杯系统依赖。",
      setting: "按第五次圣杯战争间桐脏砚记录。",
      basis: "worldbook只用于抽取间桐脏砚姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，难杀机制写入生命体量/回复说明。"
    })
  })]);
})();

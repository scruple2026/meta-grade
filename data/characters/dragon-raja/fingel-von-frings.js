(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "fingel-von-frings",
    name: "芬格尔",
    en: "Fingel von Frings",
    ja: "芬格尔",
    aliases: ["新闻部部长", "Fingel"],
    affiliation: "卡塞尔学院 / 新闻部",
    grade: "混血种 / 新闻部部长",
    appearances: ["原作主线"],
    timelineStatus: "主线",
    fandomSlug: "芬格尔",
    confidence: "medium",
    evidenceType: ["资料入口", "混血种/信息战"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["凡人级", "墙级｜混血种训练/装备/隐藏实力", "表面吊车尾，峰值按混血种与装备保守。"],
        defense: ["凡人级", "墙级｜混血种体质/隐藏实力", "承伤保守记录。"],
        movement: ["凡人速", "亚音速｜训练/爆发", "混血种身体素质高于普通人但不直接升到高速档。"],
        reaction: ["凡人速", "亚音速｜训练/战斗经验", "反应依赖训练、经验和血统感知。"],
        vitality: ["凡人肉身", "强化凡体｜混血种体质", "混血种体质高于普通人，但不是龙王级生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜医疗/血统恢复", "恢复依赖伤势、治疗和血统。"],
        energy: ["凡人能量", "墙级能量｜装备/信息资源", "信息资源比直接能量更重要。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "正面破坏不是强项，信息战和隐藏实力更关键。",
        resistance: "混血种体质和隐藏经历提高容错。",
        sensing: "新闻部、情报、黑客式信息收集和学院网络强。",
        tactics: "装傻、情报战、支援和临场逃生能力强。",
        special: "新闻部资源、信息战、隐藏经历、混血种血统。",
        weakness: "正面战不稳定，常以支援和情报角色发挥。",
        setting: "按原作主线芬格尔记录。",
        basis: "worldbook只用于抽取芬格尔姓名；定级依据公开作品/资料入口，信息战写入 notes。"
      })
  })]);
})();

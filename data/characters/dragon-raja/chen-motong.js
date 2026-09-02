(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "chen-motong",
    name: "陈墨瞳",
    en: "Nono Chen",
    ja: "陈墨瞳",
    aliases: ["诺诺", "nono", "红发巫女"],
    affiliation: "卡塞尔学院",
    grade: "混血种 / 侧写者",
    appearances: ["原作主线"],
    timelineStatus: "主线",
    fandomSlug: "陈墨瞳",
    confidence: "medium",
    evidenceType: ["资料入口", "侧写能力"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["凡人级", "砖块级｜枪械/装备/混血种训练", "本体按现代人和混血种训练保守记录。"],
        defense: ["凡人级", "砖块级｜训练/装备", "缺少龙化或高阶血统承伤时按人类低端处理。"],
        movement: ["凡人速", "亚音速｜训练/爆发", "混血种身体素质高于普通人但不直接升到高速档。"],
        reaction: ["凡人速", "亚音速｜训练/战斗经验", "反应依赖训练、经验和血统感知。"],
        vitality: ["凡人肉身", "强化凡体｜混血种体质", "混血种体质高于普通人，但不是龙王级生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜医疗/血统恢复", "恢复依赖伤势、治疗和血统。"],
        energy: ["凡人能量", "砖块级能量｜侧写/混血种资源", "侧写偏信息能力，不作为破坏输出。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "无稳定战斗回能体系。"]
      }),
    notes: notes({
        penetration: "没有高破坏攻击；侧写偏信息和心理切入。攻击速度：陈墨瞳缺少稳定高破坏招式，若使用普通枪械或拳脚应分别按弹道与凡人动作处理；侧写速度不是攻击速度。",
        resistance: "本体按混血种低端承伤。",
        sensing: "侧写和社交观察是核心能力，可读取行为模式和心理线索。",
        tactics: "擅长情报、诱导、关系处理和现场判断。",
        special: "侧写、混血种血统、卡塞尔资源。",
        weakness: "正面战能力有限，易受高端混血种和龙类压制。",
        setting: "按原作主线陈墨瞳记录。",
        basis: "worldbook只用于抽取陈墨瞳/诺诺姓名；定级依据公开作品/资料入口，侧写能力写入感知和特殊项。"
      })
  })]);
})();

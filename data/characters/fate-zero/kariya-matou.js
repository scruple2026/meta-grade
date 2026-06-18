(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Zero"];
  if (!work) throw new Error("Fate/Zero work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kariya-matou",
    name: "间桐雁夜",
    en: "Kariya Matou",
    ja: "間桐雁夜",
    aliases: ["雁夜", "Matou Kariya"],
    affiliation: "间桐阵营",
    grade: "御主 / 虫术改造",
    appearances: ["第四次圣杯战争"],
    timelineStatus: "第四次圣杯战争 / 虫术改造濒死",
    fandomSlug: "Kariya_Matou",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "虫术/令咒"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取 Fate/Zero 角色姓名；定级依据公开官方/资料入口并保持保守。"],
    dimensions: dims({
        attack: ["砖级", "墙级｜虫术/令咒", "虫术和令咒有局部威胁，正面输出有限。"],
        defense: ["砖级", "墙级｜虫术改造", "改造带来异常耐受但身体濒坏。"],
        movement: ["凡人速", "亚音速｜虫术暴走", "身体状态差，短时爆发有限。"],
        reaction: ["凡人速", "亚音速｜御主战经验", "经验不足，主要依赖Berserker。"],
        vitality: ["凡人肉身", "强化凡体｜虫术改造/濒死", "异常改造不等于稳定高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜虫术支撑", "虫术更多是强撑而非健康恢复。"],
        energy: ["墙级能量", "房屋级能量｜令咒/Berserker契约", "契约和令咒带来高消耗资源。"],
        energyRegen: ["缓慢回能", "缓慢回能｜虫术强撑", "供魔负担极重。"]
      }),
    notes: notes({
        penetration: "虫术偏寄生、侵蚀和控制，令咒是命令资源。",
        resistance: "改造让其难以正常失能，但身体持续崩溃。",
        sensing: "御主基础感知有限，主要依赖从者和圣杯战争信息。",
        tactics: "动机强烈但战斗训练和长期规划不足。",
        special: "间桐虫术、令咒、Berserker契约、强制供魔。",
        weakness: "身体濒死、供魔负担、情绪失控和间桐家控制。",
        setting: "按第四次圣杯战争间桐雁夜记录。",
        basis: "worldbook只用于抽取间桐雁夜姓名；定级依据官方角色入口与TYPE-MOON Wiki资料入口，虫术改造写入生命体量和弱点。"
      })
  })]);
})();

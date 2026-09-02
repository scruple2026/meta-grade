(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ren-yingying",
    name: "任盈盈",
    en: "Ren Yingying",
    aliases: ["聖姑", "圣姑", "盈盈"],
    affiliation: "日月神教",
    grade: "日月神教圣姑 / 机变型高手",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "主线综合期",
    fandomSlug: "任盈盈",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖块级", "墙体级｜琴音/武功/暗器", "正面武功不按顶级教主处理，峰值来自武功、暗器和情境控制。"],
      defense: ["砖块级", "墙体级｜轻功/招架", "本体仍是武侠人体，依赖身法和护卫网络。"],
      movement: ["亚音速", "亚音速｜轻功", "具备江湖高手身法。"],
      reaction: ["亚音速", "亚音速｜机变", "判断和临场应对强。"],
      vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息和休养。"],
      energy: ["砖块级能量", "墙体级能量｜内力/资源", "个人内力和可调动资源分开记录。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "需调息恢复。"]
    }),
    notes: notes({
      penetration: "个人攻击偏兵刃、暗器、琴音扰敌和情境压制，不是正面爆破型。攻击速度：兵刃与暗器分别对应近身挥击和脱手飞行，琴音扰敌还要看演奏与作用过程，三者不能共用出手节奏。",
      resistance: "身份和护卫网络能降低风险，但不计入本人肉身防御。",
      sensing: "识人、情报和局势判断强。",
      tactics: "擅长用圣姑身份、情报网络和心理压力制造优势。",
      special: "日月神教圣姑身份、琴音、暗器、组织影响力。",
      weakness: "个人硬面板不如顶级教主和五岳掌门级正面战力；许多优势依赖身份资源。",
      setting: "金庸共通 worldbook 的日月神教 key 中出现任盈盈；本条按《笑傲江湖》主线综合期记录。",
      basis: "worldbook只用于抽取任盈盈姓名；定级依据金庸 Wiki 角色/作品入口，圣姑身份不直接抬高主面板。"
    })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["书剑恩仇录"];

  if (!work) {
    throw new Error("书剑恩仇录 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yuan-shixiao",
      name: "袁士霄",
      en: "Yuan Shixiao",
      ja: "",
      affiliation: "天山派 / 红花会师承",
      grade: "天山派高手 / 陈家洛师父",
      appearances: ["金庸共通世界书", "书剑恩仇录"],
      timelineStatus: "主线前史与红花会语境",
      aliases: ["袁士宵", "天池怪侠", "陈家洛师父", "Yuan Shixiao"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["作品入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "金庸 Wiki：书剑恩仇录",
          url: "https://jinyong.fandom.com/zh/wiki/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对《书剑恩仇录》作品和红花会语境；袁士霄独立角色页待补。"
        },
        {
          type: "wiki",
          scope: "角色交叉入口",
          label: "金庸 Wiki：陳家洛",
          url: "https://jinyong.fandom.com/zh/wiki/%E9%99%B3%E5%AE%B6%E6%B4%9B",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于交叉核对陈家洛师承和书剑人物关系；不单独作为袁士霄量级依据。"
        }
      ],
      revisionNotes: [
        "从金庸共通 worldbook 的天山派核心人物 key/comment 补入；未采用 worldbook 正文描述。",
        "缺少稳定独立角色页，当前以作品入口和关系入口作追溯来源，量级保守。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜天山派武功", "按书剑高端武者和师承语境保守记录。"],
        defense: ["砖级", "墙级｜内功/招架", "防御依赖内功、身法和经验。"],
        movement: ["亚音速", "亚音速｜轻功", "天山派高手级身法。"],
        reaction: ["亚音速", "亚音速｜老练武者", "战斗经验和授徒能力突出。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
        healing: ["缓慢自愈", "中速自愈｜调息", "可调息恢复，非再生。"],
        energy: ["砖级能量", "墙级能量｜内力", "内力资源按金庸高手处理。"],
        energyRegen: ["缓慢回能", "中速回能｜调息", "回气依赖调息。"]
      }),
      notes: notes({
        penetration: "天山派武功和授徒体系偏单体武学压制，不等同范围破坏。",
        resistance: "内功与经验可靠，但仍属武侠人体承伤。",
        sensing: "江湖阅历和师父级武学眼光帮助判断对手根底。",
        tactics: "擅长授徒、识人和以武学经验规划后辈成长。",
        special: "天山派武学、陈家洛师承、前辈高手语境。",
        weakness: "独立战斗表现资料入口不足；当前不把师承地位自动抬为顶级破坏档。",
        setting: "金庸共通 worldbook 的天山派核心人物 key/comment 中出现袁士霄；本条按《书剑恩仇录》主线前史与红花会语境记录。",
        basis: "worldbook只用于抽取袁士霄姓名；定级依据公开作品/关系资料入口和金庸武侠保守口径，具体武功表现待补原文回目。"
      })
    })
  ]);
})();

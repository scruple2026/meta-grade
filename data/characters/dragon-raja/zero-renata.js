(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zero-renata",
    name: "零",
    en: "Zero / Renata",
    ja: "零",
    aliases: ["雷娜塔", "雷娜塔·叶夫根尼耶芙娜·契切林娜", "Renata Evgenievna Chicherina", "Zero Razumovskaya Romanova", "皇女"],
    affiliation: "卡塞尔学院 / 路鸣泽团队",
    grade: "A级混血种 / 言灵·镜瞳",
    appearances: ["原作主线", "冰海王座"],
    timelineStatus: "主线 / 卡塞尔学院A级学员",
    fandomSlug: "零",
    confidence: "medium",
    evidenceType: ["角色页入口", "资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "中文角色资料入口",
      label: "萌娘百科：雷娜塔·叶夫根尼耶芙娜·契切林娜",
      url: "https://zh.moegirl.org.cn/%E9%9B%B7%E5%A8%9C%E5%A1%94%C2%B7%E5%8F%B6%E5%A4%AB%E6%A0%B9%E5%B0%BC%C2%B7%E5%A5%91%E5%88%87%E6%9E%97",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对零/雷娜塔、卡塞尔学院、路鸣泽团队和言灵·镜瞳等资料入口。"
    }, {
      type: "source",
      scope: "角色资料入口",
      label: "Bangumi：零",
      url: "https://bangumi.tv/character/75846",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "交叉核对零、雷娜塔身份和《龙族》登场资料入口。"
    }],
    revisionNotes: [
      "从龙族 worldbook 的零/雷娜塔 key/comment 补入；未采用 worldbook 正文描述。",
      "言灵·镜瞳、路鸣泽团队和黑天鹅港背景写入特殊项与条件说明，不直接折算为高破坏档。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜言灵·镜瞳/枪械/混血种训练", "本体以混血种训练和现代装备为主，言灵偏复制/技巧收益。"],
      defense: ["砖级", "墙级｜混血种体质/训练规避", "承伤高于普通人，但不是龙王级生命结构。"],
      movement: ["凡人速", "亚音速｜混血种体能/训练", "按A级混血种和执行部训练保守记录。"],
      reaction: ["亚音速", "亚音速｜镜瞳/战斗判断", "反应和学习能力强，仍不按高速从者或龙王处理。"],
      vitality: ["强化凡体", "精锐韧体｜混血种体质/黑天鹅港经历", "身体停止成长和血统背景不等于无限生命体量。"],
      healing: ["缓慢自愈", "中速自愈｜血统恢复/医疗条件", "恢复依赖混血种体质、治疗和剧情条件。"],
      energy: ["砖级能量", "墙级能量｜言灵·镜瞳/血统", "言灵资源有限，不按大范围输出型言灵处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜休息/补给", "没有稳定高强度战斗回能体系。"]
    }),
    notes: notes({
      penetration: "主要靠枪械、混血种格斗和言灵·镜瞳带来的技巧复制/学习优势，不以大范围破坏见长。",
      resistance: "混血种体质和训练提高生存，仍会被高阶龙类、言灵克制或重火力压制。",
      sensing: "镜瞳和观察学习能力可提高战斗读取、技能复现和情报处理。",
      tactics: "冷静、执行力强，擅长配合路明非/路鸣泽线行动。",
      special: "言灵·镜瞳、A级混血种、黑天鹅港经历、路鸣泽团队关联。",
      weakness: "本体仍是混血种人形战力，缺少龙王级权能和大范围杀伤；许多关键背景依赖路鸣泽线。",
      setting: "按《龙族》原作主线中的零/雷娜塔记录。",
      basis: "worldbook只用于抽取零/雷娜塔姓名；定级依据萌娘百科、Bangumi等公开资料入口，身份和言灵按保守条件项记录。"
    })
  })]);
})();

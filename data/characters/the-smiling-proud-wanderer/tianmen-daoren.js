(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "tianmen-daoren",
    name: "天门道人",
    en: "Tianmen Daoren",
    aliases: ["天門道人", "天门道长", "泰山派掌门"],
    affiliation: "泰山派 / 五岳剑派",
    grade: "泰山派掌门",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "五岳并派前后",
    confidence: "medium",
    evidenceType: ["角色列表入口", "门派条目入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色列表入口",
        label: "金庸 Wiki：笑傲江湖角色列表",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对天门道人为泰山派人物，并列出其师叔、师弟、弟子及封禅台相关人物关系。"
      },
      {
        type: "wiki",
        scope: "门派入口",
        label: "金庸 Wiki：五岳剑派",
        url: "https://jinyong.fandom.com/zh/wiki/%E4%BA%94%E5%B6%BD%E5%8A%8D%E6%B4%BE",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对天门道人列于泰山派人物，泰山派属于五岳剑派，并记录泰山剑法等门派武功入口。"
      }
    ],
    revisionNotes: [
      "天门道人按泰山派掌门和封禅台前后表现保守记录；掌门身份不直接折算为高破坏档。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜泰山剑法/掌力", "泰山派掌门级武功，按兵刃和近身局部杀伤记录。"],
      defense: ["砖级", "墙级｜内力/招架", "防御依靠内力、剑法和经验，不按门派地位抬高肉身。"],
      movement: ["亚音速", "亚音速｜轻功", "江湖掌门级身法，未见脱离低武侠速度表现。"],
      reaction: ["亚音速", "亚音速｜掌门交锋", "可参与五岳剑派高层冲突，反应按江湖高手处理。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "仍为人体结构，内力和训练提高续战。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无高速再生表现，恢复依靠调息与休养。"],
      energy: ["砖级能量", "墙级能量｜内力", "泰山派掌门内力资源，不能反推大范围破坏。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力消耗后需调息恢复。"]
    }),
    notes: notes({
      penetration: "泰山剑法和掌力偏近身单体杀伤，不等同大范围破坏。",
      resistance: "以内力、招架和身法抵御武侠兵刃；硬吃高能破坏无资料。",
      sensing: "江湖掌门经验和门派斗争判断较强，但无特殊索敌能力。",
      tactics: "性格刚直，正面对抗和门派立场鲜明；政治权谋不如左冷禅、岳不群。",
      special: "泰山派掌门、泰山剑法、五岳剑派封禅台线。",
      weakness: "易被泰山派内外权谋牵制，刚直性格降低政治博弈容错。",
      setting: "金庸共通 worldbook 的泰山派 key/comment 中出现天门道长/天门道人；本条按《笑傲江湖》主线综合期记录。",
      basis: "worldbook只用于抽取天门道人姓名；定级依据金庸 Wiki 五岳剑派和笑傲角色列表入口。泰山掌门身份只支持江湖高手定位，不直接抬到大范围破坏。"
    })
  })]);
})();

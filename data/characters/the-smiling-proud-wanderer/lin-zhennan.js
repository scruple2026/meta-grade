(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lin-zhennan",
    name: "林震南",
    en: "Lin Zhennan",
    aliases: ["林鎮南", "福威镖局总镖头", "林平之之父"],
    affiliation: "福威镖局 / 林家",
    grade: "福威镖局第三代传人",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "福威镖局覆灭前后",
    confidence: "medium",
    evidenceType: ["角色列表入口", "武功条目入口", "worldbook姓名字段"],
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
        claim: "核对林震南为福州福威镖局第三代传人、林平之之父，并记录其被余沧海折磨致死及临终遗言。"
      },
      {
        type: "wiki",
        scope: "武功与剧情入口",
        label: "金庸 Wiki：辟邪剑法",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%BE%9F%E9%82%AA%E5%8A%8D%E6%B3%95",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对辟邪剑法传至林震南时已成普通武功，福威镖局因剑谱被觊觎而覆灭。"
      }
    ],
    revisionNotes: [
      "林震南按福威镖局覆灭前后记录；家传辟邪剑法名号不等于后期真正辟邪剑谱速度峰值。"
    ],
    dimensions: dims({
      attack: ["砖级", "砖级｜福威镖局武功", "公开入口说明其所练辟邪剑法已成普通武功，按镖局武者局部杀伤处理。"],
      defense: ["凡人级", "砖级｜招架/内力", "承伤与防身能力有限，难以抵御青城派摧心掌与围攻。"],
      movement: ["凡人速", "亚音速｜镖局轻功", "习武者身法高于普通人，但无高手级高速表现。"],
      reaction: ["凡人速", "亚音速｜镖局经验", "镖局经验提供基础近战反应。"],
      vitality: ["强化凡体", "强化凡体｜习武者体魄", "习武者人体结构，被折磨致死说明生命体量有限。"],
      healing: ["缓慢自愈", "缓慢自愈｜休养", "无再生或快速恢复表现。"],
      energy: ["凡人能量", "砖级能量｜内力", "内力资源按普通镖局武者处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "消耗后依靠调息和休养恢复。"]
    }),
    notes: notes({
      penetration: "福威镖局武功以剑招、镖局护身和局部兵刃杀伤为主，不等同真辟邪剑谱的后期速度峰值。",
      resistance: "防护有限，青城派灭门线中无法有效抵御余沧海及其门人。",
      sensing: "镖局经营和江湖阅历较普通人强，无特殊索敌能力。",
      tactics: "有总镖头经验和家族遗言安排，但面对青城派与辟邪剑谱争夺时主动权不足。",
      special: "福威镖局传承、林远图后人、辟邪剑谱线索、临终遗言。",
      weakness: "家传武功与传闻不匹配，实际战斗上限有限；家族秘密和剑谱传闻引来灭门风险。",
      setting: "金庸共通 worldbook 的金刀王家/福威镖局 key/comment 中出现林震南；本条按福威镖局覆灭前后记录。",
      basis: "worldbook只用于抽取林震南姓名；定级依据金庸 Wiki 笑傲角色列表和辟邪剑法入口。其辟邪剑法传承只按普通镖局武功处理，不并入林平之后期真剑谱峰值。"
    })
  })]);
})();

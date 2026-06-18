(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["飞狐外传"];
  if (!work) throw new Error("飞狐外传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yuan-ziyi",
    name: "袁紫衣",
    en: "Yuan Ziyi",
    aliases: ["圆性", "袁姑娘"],
    affiliation: "九龙派相关 / 佛门身份",
    grade: "飞狐外传主要人物 / 武林高手",
    appearances: ["飞狐外传主线"],
    timelineStatus: "飞狐外传主线期",
    fandomSlug: "袁紫衣",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：袁紫衣",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%A2%81%E7%B4%AB%E8%A1%A3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对角色、身份和飞狐外传剧情入口；具体量级仍按保守武侠口径处理。"
      }
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜兵刃/门派武学", "个人武功强于普通江湖人物，但不按飞狐系列最顶级处理。"],
      defense: ["砖级", "墙级｜招架/轻功", "主要靠身法、招架和经验承压。"],
      movement: ["亚音速", "亚音速｜轻功", "武林高手轻功水平。"],
      reaction: ["亚音速", "亚音速｜实战经验", "能应对江湖交手和突发局面。"],
      vitality: ["强化凡体", "精锐韧体｜内力/意志", "人体结构，内力和意志提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可调息恢复，不是快速再生。"],
      energy: ["墙级能量", "墙级能量｜门派武学", "内力资源按飞狐系列武林高手处理。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力恢复依赖调息。"]
    }),
    notes: notes({
      penetration: "兵刃和门派武学偏单体杀伤、点到为止和破招，不等同范围破坏。",
      resistance: "承压依赖身法、招架和意志，硬抗能力有限。",
      sensing: "江湖经验与身份隐藏使其对局势判断较强。",
      tactics: "善于隐藏身份、牵制和利用江湖关系，正面输出不以大范围破坏见长。",
      special: "九龙派相关武学、佛门身份、复仇线与身份隐藏。",
      weakness: "输出和防御不按飞狐系列最高梯队处理，情感与身份约束明显。",
      setting: "按《飞狐外传》主线期袁紫衣记录。",
      basis: "worldbook只用于从comment/key抽取袁紫衣姓名；定级依据金庸 Wiki 和公开小说条目入口，按飞狐系列武林高手而非顶级剑客处理。"
    })
  })]);
})();

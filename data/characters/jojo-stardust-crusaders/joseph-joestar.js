(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "joseph-joestar",
      name: "乔瑟夫·乔斯达",
      en: "Joseph Joestar",
      ja: "ジョセフ・ジョースター",
      affiliation: "乔斯达一行",
      grade: "波纹战士 / 隐者之紫",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Joseph_Joestar",
      dimensions: dims({
        attack: ["砖级", "墙级｜波纹/隐者之紫", "老年乔瑟夫以波纹、替身和策略为主。"],
        defense: ["凡人级", "墙级｜波纹与规避", "本体年老，防御有限。"],
        movement: ["凡人速", "凡人速", "无超常高速移动表现。"],
        reaction: ["凡人速", "亚音速｜经验", "靠经验和预判应对替身战。"],
        vitality: ["强化凡体", "精锐韧体", "波纹训练和意志提升承伤。"],
        healing: ["无自愈", "缓慢自愈｜波纹辅助", "波纹可辅助生命活性但不是战斗再生。"],
        energy: ["凡人能量", "墙级能量｜波纹", "波纹与替身资源有限。"],
        energyRegen: ["常规回能", "常规回能", "依赖体力。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "隐者之紫、波纹、情报搜查、战术欺骗。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据第三部老年乔瑟夫替身、波纹残存能力和战术表现定级。"
      })
    })
  ]);
})();

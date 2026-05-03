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
        penetration: "隐者之紫本身攻击力有限，主要靠缠绕、导电、侦查和波纹辅助制造弱点命中；乔瑟夫的真正杀伤来自情报、陷阱和对吸血鬼体系的波纹克制。",
        resistance: "老年本体防御有限，波纹训练和经验提高承伤与临场应对；对枪伤、强替身近战和时间停止没有硬抗能力，主要靠预判、骗术和队友。",
        special: "隐者之紫、波纹、情报搜查、战术欺骗。",
        weakness: "年龄和本体速度限制明显，隐者之紫正面破坏弱；若敌人不吃情报诱导或能快速近身，乔瑟夫必须依赖队友支援。",
        setting: "按第三部老年乔瑟夫记录；第二部年轻波纹巅峰不并入本页主面板。",
        basis: "依据第三部老年乔瑟夫替身、波纹残存能力和战术表现定级。"
      })
    })
  ]);
})();

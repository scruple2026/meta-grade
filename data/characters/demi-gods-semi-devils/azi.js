(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "azi",
    name: "阿紫",
    en: "Azi",
    aliases: ["阿朱妹妹", "段正淳女儿"],
    affiliation: "星宿派 / 大理段氏关联",
    grade: "星宿派弟子",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "阿紫",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "砖级｜毒物/星宿手段", "本体武功有限，毒物和诡计更危险。"],
      defense: ["凡人级", "砖级｜江湖经验", "体魄和防护较低。"],
      movement: ["凡人速", "亚音速｜江湖身法", "有一定江湖身法但不属高手。"],
      reaction: ["凡人速", "凡人速", "实战反应有限。"],
      vitality: ["强化凡体", "强化凡体", "略强于普通人但不高。"],
      healing: ["无自愈", "缓慢自愈｜治疗/休整", "依赖治疗与休整。"],
      energy: ["凡人能量", "砖级能量｜毒物/小技", "主要资源来自毒物、道具和小规模内力。"],
      energyRegen: ["缓慢回能", "缓慢回能", "需要休整。"]
    }),
    notes: notes({
      penetration: "毒物、暗算和星宿派手段比正面攻击更危险。",
      resistance: "本体防御弱，常靠他人庇护或诡计。",
      sensing: "对人心弱点和操纵关系有一定敏感度。",
      tactics: "狡黠狠辣，擅长利用他人情感，但缺少稳定正面对战能力。",
      special: "星宿派毒物、操纵游坦之、恶作剧式暗算。",
      weakness: "任性、残忍和依赖他人保护，正面战斗短板明显。",
      setting: "按少室山大会期阿紫记录。",
      basis: "worldbook只用于抽取阿紫姓名；定级依据金庸 Wiki 和公开小说条目入口，毒物作为特殊杀伤而非高破坏档。"
    })
  })]);
})();

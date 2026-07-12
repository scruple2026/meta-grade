(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鹿鼎记"];
  if (!work) throw new Error("鹿鼎记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "wei-xiaobao",
    name: "韦小宝",
    en: "Wei Xiaobao",
    aliases: ["韋小寶", "小宝", "青木堂香主", "Wei Xiaobao"],
    affiliation: "天地会 / 清廷 / 青木堂",
    grade: "低武主角 / 机变型",
    appearances: ["金庸共通世界书", "鹿鼎记"],
    timelineStatus: "主线综合期 / 装备与身份资源分开",
    fandomSlug: "韋小寶",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["凡人级", "砖级｜匕首/火枪/毒药｜装备", "个人武功很低，峰值来自装备和偷袭条件。"],
      defense: ["凡人级", "砖级｜宝衣/护具｜装备", "本体普通，防护主要来自护身装备和运气。"],
      movement: ["凡人速", "凡人速｜逃跑/机变", "不按高手轻功处理。"],
      reaction: ["凡人速", "凡人速｜街头机灵", "反应偏机变和临场骗术，不是武学速度。"],
      vitality: ["凡人肉身", "强化凡体｜宝衣/运气", "人体承伤，峰值靠护具与剧情条件。"],
      healing: ["缓慢自愈", "缓慢自愈｜休养", "普通恢复。"],
      energy: ["凡人能量", "砖级能量｜火器/道具", "本人没有高内力资源，装备弹药另算。"],
      energyRegen: ["缓慢回能", "缓慢回能｜休息/补给", "体力和装备补给不等同内力回气。"]
    }),
    notes: notes({
      penetration: "匕首、火枪、毒药和偷袭能制造高于肉身的杀伤，但均为装备/条件峰值。攻击速度：匕首和偷袭取决于近距离出手，火枪弹丸快于本人位移，毒药则受下毒和生效条件限制。",
      resistance: "宝衣和护具能挡部分伤害；本体抗打击普通。",
      sensing: "街头经验、察言观色和危险嗅觉强。",
      tactics: "擅长说谎、借势、逃跑、收买和利用多重身份制造信息差。",
      special: "天地会香主身份、清廷官职、宝衣、火枪、匕首、毒药和人脉资源。",
      weakness: "正面武功极弱，离开身份资源和装备后面板很低。",
      setting: "金庸共通 worldbook 的天地会 key 中出现韦小宝；本条按《鹿鼎记》主线综合期记录。",
      basis: "worldbook只用于抽取韦小宝姓名；定级依据金庸 Wiki 角色/作品入口，政治资源、官职和天地会身份不写入本人常态攻防。"
    })
  })]);
})();

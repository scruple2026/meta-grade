(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["原神"];
  if (!work) throw new Error("原神 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "furina",
    name: "芙宁娜",
    en: "Furina",
    ja: "フリーナ",
    aliases: ["Furina de Fontaine", "Focalors", "芙卡洛斯", "水神", "众水、众方、众民与众律法的女王"],
    affiliation: "枫丹 / 歌剧院 / 水元素角色",
    grade: "Hydro / Sword / Fontaine",
    appearances: ["原神"],
    timelineStatus: "枫丹主线后 / 水元素角色",
    fandomSlug: "Furina",
    confidence: "review",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引", "神明身份争议"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Genshin Impact: Fontaine Characters",
      url: "https://genshin.hoyoverse.com/en/character/fontaine",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《原神》Fontaine官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Genshin Impact Wiki: Furina",
      url: "https://genshin-impact.fandom.com/wiki/Furina",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对芙宁娜的Hydro、Sword、Fontaine身份、召唤物、治疗/伤害机制和主线身份资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的芙宁娜 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["墙级｜水元素/剑", "楼级｜元素战技/召唤物/元素爆发｜争议", "常态按水元素战斗和剑术记录；峰值含游戏技能机制但不把神明称号直接换算高阶破坏。"],
        defense: ["砖级｜水元素护持", "楼级｜队伍机制/治疗支援", "防御更多来自治疗、召唤物和队伍机制，本体硬度保守。"],
        movement: ["凡人速", "亚音速｜战斗闪避", "战斗移动按提瓦特可操作角色常见水平记录。"],
        reaction: ["凡人速", "亚音速｜元素战斗反应", "反应按元素战斗和舞台经验保守记录。"],
        vitality: ["强化凡体", "楼级生命阈值｜神明身份/剧情争议", "身份和剧情特殊性存在争议，生命体量不按无限或神格硬抬。"],
        healing: ["缓慢自愈｜水元素/支援", "快速自愈｜治疗机制/队伍支援", "治疗强项主要来自技能和队伍机制。"],
        energy: ["墙级能量", "楼级能量｜水元素/元素爆发/召唤物", "资源池来自水元素技能和召唤物，不等同单次攻击全量释放。"],
        energyRegen: ["中速回能", "快速回能｜元素充能/队伍循环", "依赖元素充能、战斗循环和队伍资源。"]
      }),
    notes: notes({
        penetration: "水元素攻击、召唤物和元素爆发兼具持续伤害与辅助，不按称号直接换算大范围破坏。",
        resistance: "本体承伤保守；队伍治疗、生命值变化和召唤物机制与肉身硬度分开。",
        sensing: "舞台观察、审判场经验和Fontaine社交/情绪洞察突出，但不是远程全知索敌。",
        tactics: "擅长以召唤物、治疗/伤害切换和队伍增益维持节奏。",
        special: "Hydro Vision、召唤物、治疗机制、元素爆发、Fontaine主线身份与神明相关剧情。",
        weakness: "主线身份和神格相关表现高度剧情依赖；单独本体正面硬度不宜从称号反推。",
        setting: "按枫丹主线后可操作角色芙宁娜综合记录。",
        basis: "worldbook只用于抽取芙宁娜姓名；定级依据HoYoverse官方入口与Genshin Impact Wiki角色入口，神明身份和剧情机制按争议条件处理。"
      })
  })]);
})();

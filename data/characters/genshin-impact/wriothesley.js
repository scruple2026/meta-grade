(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["原神"];
  if (!work) throw new Error("原神 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "wriothesley",
    name: "莱欧斯利",
    en: "Wriothesley",
    ja: "リオセスリ",
    aliases: ["Wriothesley", "Duke of the Fortress of Meropide", "梅洛彼得堡公爵", "典狱长"],
    affiliation: "梅洛彼得堡 / 枫丹",
    grade: "Cryo / Catalyst / Fontaine",
    appearances: ["原神"],
    timelineStatus: "主线综合 / 梅洛彼得堡公爵",
    fandomSlug: "Wriothesley",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
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
      label: "Genshin Impact Wiki: Wriothesley",
      url: "https://genshin-impact.fandom.com/wiki/Wriothesley",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对莱欧斯利的Cryo、Catalyst、梅洛彼得堡公爵身份、拳套格斗和冰元素能力。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的莱欧斯利 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["楼级｜冰元素拳斗", "街区级｜元素爆发/拳套输出｜争议", "常态按冰元素近战和拳套格斗记录；峰值含元素爆发。"],
        defense: ["墙级｜冰元素护持/格斗防护", "楼级｜元素战斗/队伍机制", "防御峰值来自冰元素护持、战斗技巧和队伍机制。"],
        movement: ["亚音速", "音速｜拳斗突进/冰元素战斗", "近战突进和连段速度较高。"],
        reaction: ["亚音速", "音速｜拳斗反应", "拳斗和管理梅洛彼得堡的实战经验支撑反应。"],
        vitality: ["精锐韧体", "楼级生命阈值｜元素战斗/高耐久", "生命体量按高端元素战斗者保守记录。"],
        healing: ["无自愈", "中速自愈｜战斗机制/治疗支援", "自身稳定自愈有限，恢复多依赖机制或队伍支援。"],
        energy: ["楼级能量", "街区级能量｜冰元素/元素爆发", "资源来自冰元素技能与元素爆发。"],
        energyRegen: ["中速回能", "快速回能｜元素充能/战斗循环", "依赖元素充能和战斗循环。"]
      }),
    notes: notes({
        penetration: "冰元素拳斗、拳套连段和元素爆发可冻结或压制目标，但不按典狱长称号抬级。",
        resistance: "肉身、拳斗防护和冰元素护持分开；没有全类型免疫。",
        sensing: "监狱管理、近战压迫和对危险人员的判断力较强。",
        tactics: "擅长近身压制、控制距离、利用冰元素和拳套节奏持续施压。",
        special: "Cryo Vision、拳斗风格、梅洛彼得堡公爵权限、元素战技/爆发。",
        weakness: "主要为近中距离压制，面对超远程或高抗性目标需要队伍/环境配合。",
        setting: "按主线综合的莱欧斯利记录。",
        basis: "worldbook只用于抽取莱欧斯利姓名；定级依据HoYoverse官方入口与Genshin Impact Wiki角色入口，元素爆发作为条件峰值。"
      })
  })]);
})();

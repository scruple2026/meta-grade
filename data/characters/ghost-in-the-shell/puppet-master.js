(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["攻壳机动队"];

  if (!work) {
    throw new Error("Ghost in the Shell work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "puppet-master",
      name: "傀儡师",
      en: "Puppet Master",
      ja: "人形使い",
      affiliation: "Project 2501 / 公安六课黑箱",
      grade: "自我意识AI / Ghost hacker",
      appearances: ["傀儡师事件", "1995电影"],
      timelineStatus: "Project 2501 / 与草薙融合前",
      aliases: ["Project 2501", "2501", "Puppet Master"],
      fandomSlug: "Puppet_Master",
      confidence: "review",
      evidenceType: ["官方作品页", "角色页入口", "权能项"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["不适用｜网络黑客", "墙级｜义体/操控间接杀伤｜条件", "傀儡师核心威胁是电子脑黑客和操控，不是自身拳脚输出。"],
        defense: ["不适用｜网络存在", "砖级｜义体壳体", "物理壳体脆弱，网络存在方式与物理防御分开。"],
        movement: ["不适用｜网络迁移", "不适用｜网络迁移", "网络迁移不按连续移动速度评级。"],
        reaction: ["未知｜AI处理", "亚音速｜电子脑攻防表现｜争议", "电子脑攻防处理快，但不换算为肉身反应。"],
        vitality: ["不适用｜网络存在", "强化凡体｜义体壳体", "生命体量取决于网络备份、壳体和Ghost定义，争议较大。"],
        healing: ["不适用｜数据迁移", "不适用｜数据迁移", "数据迁移和壳体替换不按自愈处理。"],
        energy: ["未知｜网络资源", "砖级能量｜义体壳体/网络资源", "战斗资源主要是网络访问和被操控对象。"],
        energyRegen: ["未知", "未知｜网络资源", "缺少可量化回能资料。"]
      }),
      notes: notes({
        penetration: "通过电子脑黑客、记忆篡改、身份伪造和操控对象造成间接威胁。",
        resistance: "物理壳体脆弱，但网络存在和Ghost属性不等同普通肉身防御。",
        sensing: "可在网络中追踪、入侵和操控电子脑，是信息战强项。",
        tactics: "通过长期网络渗透、政治黑箱和身份谈判推进目的。",
        special: "Project 2501、自我意识AI、Ghost hack、记忆操控、网络迁移、与草薙融合。",
        weakness: "依赖网络与壳体媒介；物理壳体可被破坏，脱离网络条件后直接战斗力有限。",
        setting: "按1995电影与草薙融合前的傀儡师记录。",
        basis: "worldbook只用于抽取傀儡师姓名；定级依据Production I.G官方作品页、官方系列页和Ghost in the Shell Wiki入口，黑客能力写入特殊权能。"
      })
    })
  ]);
})();

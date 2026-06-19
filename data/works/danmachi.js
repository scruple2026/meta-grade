(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "在地下城寻求邂逅是否搞错了什么";

  registerWorkSource(WORK, {
    slug: "danmachi",
    originalLanguage: "ja",
    pageLabel: "DanMachi Wiki 角色页",
    pageBase: "https://danmachi.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色页",
        label: "TVアニメ「ダンまちIII」公式サイト：CHARACTER",
        url: "https://danmachi.com/danmachi3/character/index.html",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对异端儿篇动画窗口的主要角色与官方角色定位；本站不把冒险者等级、神格或称号直接折算为破坏档。"
      }
    ],
    commonLinks: [
      {
        label: "DanMachi Wiki 角色总表",
        url: "https://danmachi.fandom.com/wiki/Characters",
        claim: "角色资料入口；具体量级仍按角色页、篇章表现和保守口径记录。"
      }
    ],
    scaleNotes: {
      scope: "当前收录异端儿篇 worldbook 索引字段中的主要角色与主要敌对实体：贝尔、赫斯缇雅、艾丝、芬恩、里维莉亚、伯特、蒂奥娜、蒂奥涅、格瑞斯、埃伊娜、莉莉、韦尔夫、大和命、春姬、琉、希儿、米娅、薇妮、利德、蕾伊、古罗斯、阿斯泰里俄斯、狄克斯、费尔斯、乌拉诺斯、地下城普通怪物/魔石/掉落物，以及楼层主/Monster Rex/Juggernaut。",
      versionPolicy: "按异端儿篇/第9-11卷附近记录。Falna 等级、魔法、魔剑、等级提升、神格、魅惑和异端儿生命结构分开处理；神明在下界禁用神力，不把神格写入常态攻防。",
      highRisk: ["Falna 等级", "魔剑", "等级提升", "神格禁用", "美神魅惑", "异端儿生命结构", "阿斯泰里俄斯决斗", "洛基眷族Level 6主力", "克诺索斯/Daedalus血脉", "狄克斯诅咒", "费尔斯复活魔法", "乌拉诺斯祈祷", "Monster Rex", "Juggernaut魔法反射"],
      conservativeNotes: "缺少明确破坏规模时，冒险者 Level、称号、楼层经验和剧情强弱只作为相对战斗语境，不直接抬到城市级或更高。特殊能力写入解释项或条件峰值。"
    },
    sourcePolicy: "日文官方角色页与 DanMachi Wiki 是入口来源；高争议峰值后续应补轻小说卷章、动画集数或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

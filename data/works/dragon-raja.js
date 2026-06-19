(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "龙族（江南）";

  registerWorkSource(WORK, {
    slug: "dragon-raja",
    originalLanguage: "zh",
    pageLabel: "百度百科角色页",
    pageBase: "https://baike.baidu.com/item/",
    pageLanguage: "zh",
    canonicalLinks: [{
      type: "official",
      scope: "中文连载入口",
      label: "起点中文网：龙族",
      url: "https://www.qidian.com/book/1887208/",
      lang: "zh",
      authority: "licensed",
      medium: "publisher",
      ratingEvidence: false,
      claim: "用于核对《龙族》作品入口；页面访问可能触发站点风控，不作为单独量级换算依据。"
    }],
    commonLinks: [{
      label: "百度百科：龙族",
      url: "https://baike.baidu.com/item/龙族/19703",
      claim: "作品资料入口；具体角色面板按角色页、原作情节和保守口径记录。"
    }, {
      label: "萌娘百科：龙族",
      url: "https://zh.moegirl.org.cn/龙族",
      claim: "交叉资料入口；不单独作为高风险量级依据。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录龙族 worldbook 索引字段中的原作核心人物与高战力条目：路明非、路鸣泽、楚子航、恺撒、陈墨瞳、上杉绘梨衣、昂热、赫尔佐格、夏弥、诺顿、康斯坦丁、芬里厄、奥丁、尼德霍格、白王、利维坦、贝希摩斯/黑蛇、源稚生、源稚女、上杉越、零、芬格尔、酒德麻衣、犬山贺、矢吹樱、楚天骄、叶胜、酒德亚纪、苏茜、兰斯洛特、帕西。跳过 OC、性转版本、修仙 DLC、地点、势力和规则条目。",
      versionPolicy: "按江南《龙族》原作主线记录；动画、游戏、同人、性转 DLC 和修仙变量不并入正式面板。路明非交易、龙化、言灵、龙王权能、尼伯龙根和白王/黑王神话均作为条件峰值或特殊项处理。",
      highRisk: ["言灵", "龙王", "白王", "黑王", "尼伯龙根", "交易", "龙化", "龙骨十字", "圣骸"],
      conservativeNotes: "龙王称号、血统等级、言灵序列、神话身份和剧情威胁不自动抬高主面板；缺少直接破坏/承伤证据时，先保守在街区级及以下，并把规则、精神、命令、领域和仪式类能力写入 notes。"
    },
    sourcePolicy: "worldbook 仅用于抽取姓名；起点、百度百科、萌娘百科等公开入口用于核对作品/角色资料。高争议龙王和言灵峰值后续应补原作卷章或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

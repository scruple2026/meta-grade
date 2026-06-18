(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/Grand Order";

  registerWorkSource(WORK, {
    slug: "fate-grand-order",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方入口",
        label: "Fate/Grand Order 官方网站",
        url: "https://www.fate-go.jp/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对 Fate/Grand Order 官方作品入口；不作为单独量级换算依据。"
      },
      {
        type: "official",
        scope: "英文官方入口",
        label: "Fate/Grand Order USA",
        url: "https://fate-go.us/",
        lang: "en",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对 Fate/Grand Order 英文官方入口和基础世界观资料。"
      }
    ],
    commonLinks: [
      {
        type: "source",
        scope: "作品资料入口",
        label: "TYPE-MOON Wiki：Fate/Grand Order",
        url: "https://typemoon.fandom.com/wiki/Fate/Grand_Order",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        claim: "作品和角色资料入口；具体量级按角色页、剧情阶段和保守口径记录。"
      },
      {
        type: "source",
        scope: "游戏资料入口",
        label: "Fate/Grand Order Wiki",
        url: "https://fategrandorder.fandom.com/wiki/Fate/Grand_Order_Wiki",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对 FGO 角色、职阶、技能和宝具入口。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前先收录命运之夜酒馆助手与型月 DLC worldbook key/comment 中明确出现的 FGO 核心角色：藤丸立香、玛修、梅林、斯卡哈、阿尔托莉雅Caster、摩根；第二批补入伊什塔尔、艾蕾什基伽尔、贞德、贞德Alter、尼禄·克劳狄乌斯、冲田总司；第三批补入宫本武藏、源赖光、诸葛孔明〔埃尔梅罗二世〕、BB、岩窟王、杀生院祈荒；第四批补入阿周那、迦尔纳、迦摩、玉藻前、酒吞童子、茨木童子；第五批补入织田信长、梅柳齐娜、伊吹童子、巴御前、齐格飞、奥斯曼狄斯；第六批补入紫式部、高文、安东尼奥·萨列里、莫德雷德、天草四郎时贞、塞弥拉弥斯；第七批补入查理曼、太公望、坂本龙马、特斯卡特利波卡、大和武尊、宫本伊织；第八批补入卡莲·奥尔黛西亚、格蕾、亚瑟·潘德拉贡、齐格、岸波白野。其他英灵和型月作品角色后续分批补入。",
      versionPolicy: "按 Fate/Grand Order 游戏/主线语境记录；FSN、FZ、魔伊、月姬、空境、魔法使之夜等作品不并入本作品面板。灵基、宝具、圣杯、Lostbelt 和临时支援均作为时间线、条件峰值或特殊权能处理。",
      highRisk: ["灵基", "宝具", "圣杯", "Lostbelt", "妖精国", "冠位候补", "召唤契约", "令咒", "防御宝具", "女神拟似从者", "冥界权能", "龙之魔女", "皇帝特权", "黄金剧场", "病弱", "空位", "牛御前", "拟似从者", "SE.RA.PH", "MoonCancer", "Avenger", "Beast III/R", "Beast III/L", "魔性菩萨", "神授武器", "黄金甲", "九尾/天照", "鬼种", "毒酒", "魅惑", "反神秘特攻", "阿尔比恩", "龙种", "八岐大蛇", "恶龙血铠", "神殿宝具", "圣者数字", "日轮圣剑", "音乐/诅咒", "大圣杯", "空中庭园", "仙术", "四不相", "阿龙小姐", "烟雾镜", "天丛云剑", "Fate/Samurai Remnant", "Amor/Caren", "Rhongomyniad", "Excalibur Proto", "Moon Cell"],
      conservativeNotes: "从者职阶、神话原型、异闻带身份和剧情重要性不自动抬高攻击/防御/速度主档；缺少具体破坏范围时，宝具、支援、结界、概念效果和召唤契约分开记录。"
    },
    sourcePolicy: "官方入口与 TYPE-MOON Wiki/FGO Wiki 是资料入口；高争议宝具和 Lostbelt 峰值后续应补主线章节、幕间、活动或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

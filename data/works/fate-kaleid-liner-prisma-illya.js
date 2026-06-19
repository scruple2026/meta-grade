(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/kaleid liner 魔法少女☆伊莉雅";

  registerWorkSource(WORK, {
    slug: "fate-kaleid-liner-prisma-illya",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文动画角色入口",
        label: "动画「プリズマ☆イリヤ ドライ!!」官方角色页",
        url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对3rei阶段的主要角色身份、安洁莉卡的英雄王卡、贝阿朵莉丝的雷神之锤、达利乌斯的当主身份和巴泽特的执行者定位。"
      },
      {
        type: "official",
        scope: "日文动画剧情入口",
        label: "动画「プリズマ☆イリヤ ドライ!!」官方分集简介",
        url: "https://anime.prisma-illya.jp/3rei/story/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对3rei中美游圣杯、恩兹华斯目的、达利乌斯冰结界型宝具、Saber Install与Excalibur等公开剧情信息。"
      },
      {
        type: "official",
        scope: "日文原作出版入口",
        label: "KADOKAWA《Fate/kaleid liner プリズマ☆イリヤ (1)》",
        url: "https://www.kadokawa.co.jp/product/200712000305/",
        lang: "ja",
        authority: "official",
        medium: "publisher",
        claim: "用于核对原作漫画出版入口和作品来源；战斗量级仍以后续卷话、动画分集和角色资料交叉确认。"
      }
    ],
    commonLinks: [
      {
        type: "official",
        scope: "日文动画角色入口",
        label: "动画《プリズマ☆イリヤ ドライ!!》官方角色页",
        url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "角色资料入口；不单独作为跨作品高风险量级依据。"
      },
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "TYPE-MOON Wiki《Fate/kaleid liner PRISMA☆ILLYA》",
        url: "https://typemoon.fandom.com/wiki/Fate/kaleid_liner_PRISMA%E2%98%86ILLYA",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        claim: "作品和术语资料入口；不作为官方或原作级定级证据。"
      },
      {
        type: "source",
        scope: "角色索引入口",
        label: "プリズマ☆データベース！角色索引",
        url: "https://kaleid-liner.com/character/",
        lang: "ja",
        authority: "source",
        medium: "other",
        claim: "角色名单和索引入口；用于检索，不作为高风险量级依据。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "wiki",
        scope: "梦幻召唤机制",
        label: "TYPE-MOON Wiki: Install",
        url: "https://typemoon.fandom.com/wiki/Install",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "说明Install会让使用者获得对应英灵的宝具、技能和武装；本站只把它作为机制入口，具体量级仍按本作表现保守记录。"
      },
      {
        type: "wiki",
        scope: "恩兹华斯置换魔术",
        label: "TYPE-MOON Wiki: Ainsworth",
        url: "https://typemoon.fandom.com/wiki/Ainsworth",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "说明Flash Air/置换魔术、Class Card制造和达利乌斯概念继承等机制；空间置换不直接换算为移动速度或攻击量级。"
      }
    ],
    scaleNotes: {
      scope: "当前收录伊莉雅、美游、克洛伊、巴泽特、安洁莉卡、贝阿朵莉丝、达利乌斯和朱利安；职阶卡影像、魔杖、支援者、同学和变体形态不再按 worldbook 名字池扩入。",
      versionPolicy: "默认按3rei综合期记录；万花筒魔杖、Class Card Include/Install、Zwei Form、圣杯许愿、置换魔术和宝具峰值必须用峰值标签、时间线或特殊权能限制，不把一次性救场或仪式结果并入稳定常态。",
      highRisk: [
        "万花筒魔杖无限供魔",
        "Class Card / 梦幻召唤",
        "宝具真名解放",
        "小圣杯 / 完全圣杯",
        "恩兹华斯置换魔术",
        "Rule Master / Class Card制造权限",
        "Pandora's Box / 黑泥",
        "圣杯战争仪式",
        "时间/因果反击"
      ],
      conservativeNotes: "Nasuverse英灵设定、宝具等级、圣杯许愿、世界救济、空间置换、因果反击、万花筒魔杖供魔和Class Card敌人不直接换算主面板。当前初稿把大多数稳定战斗限制在墙级至楼级，把宝具/结界/短时峰值保守放在街区级并标注争议或条件。"
    },
    sourcePolicy: "官方动画角色页和分集简介用于核对公开角色定位与剧情能力；TYPE-MOON Wiki和民间数据库只作资料入口。高争议峰值后续应补原作卷话、单行本页码、设定书或官方资料链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

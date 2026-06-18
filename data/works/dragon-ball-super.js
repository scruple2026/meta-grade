(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "龙珠超";

  registerWorkSource(WORK, {
    slug: "dragon-ball-super",
    originalLanguage: "ja",
    pageLabel: "Dragon Ball Wiki 角色页",
    pageBase: "https://dragonball.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "DRAGON BALL 官方网站",
        url: "https://dragon-ball-official.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对《龙珠超》官方新闻、漫画/动画入口和角色资料入口；高端速度与宇宙级量级仍需按具体篇章保守标注。"
      },
      {
        type: "official",
        scope: "动画官方角色页",
        label: "东映动画：《ドラゴンボール超》孙悟空角色页",
        url: "https://www.toei-anim.co.jp/tv/dragon_s/chara/01.html",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对《龙珠超》动画孙悟空角色定位；不单独作为速度倍率证据。"
      }
    ],
    commonLinks: [
      {
        type: "source",
        scope: "作品入口",
        label: "DRAGON BALL 官方英文网站",
        url: "https://en.dragon-ball-official.com/",
        lang: "en",
        authority: "official",
        medium: "official-site",
        claim: "英文官方入口，辅助核对作品和出版信息。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "source",
        scope: "作品量级参考",
        label: "VS Battles Wiki：Dragon Ball",
        url: "https://vsbattles.fandom.com/wiki/Dragon_Ball",
        lang: "en",
        authority: "cross-reference",
        medium: "cross-wiki",
        ratingEvidence: true,
        claim: "用于交叉复核《龙珠超》神之气、破坏神篇、力之大会和后续漫画的跨界量级口径；本站仍按争议档处理高端速度。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录孙悟空作为《龙珠超》高端速度档覆盖样例；破坏神、天使和长尾角色等待明确需求或社区 PR。",
      versionPolicy: "《龙珠Z》和《龙珠超》分开；神之气、自在极意、漫画后续形态和临时合体不得混成一个稳定常态。",
      highRisk: [
        "神之气",
        "自在极意",
        "动画/漫画连续性差异",
        "跨宇宙战斗速度",
        "瞬间移动"
      ],
      conservativeNotes: "瞬间移动是特殊位移，不计连续速度；高端速度只按争议覆盖样例记录，不把气感知、传送或宇宙范围冲击自动换成无限速。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补原作卷话、集数、设定书或官方资料链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

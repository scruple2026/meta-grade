(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "星河大帝";

  registerWorkSource(WORK, {
    slug: "galaxy-emperor",
    originalLanguage: "zh",
    pageLabel: "中文论战 Wiki 角色页入口",
    pageBase: "https://cntaps.fandom.com/zh/wiki/",
    canonicalLinks: [
      {
        type: "official",
        scope: "授权作品页",
        label: "微信读书：《星河大帝》",
        url: "https://weread.qq.com/web/bookDetail/5e732440539d565e7f5a69a",
        lang: "zh",
        authority: "licensed",
        medium: "publisher",
        claim: "用于确认《星河大帝》授权书籍入口、作者、完结状态和最终章目录。"
      },
      {
        type: "official",
        scope: "授权作品页",
        label: "书旗小说：《星河大帝》",
        url: "https://shuqi.com/book/3380554.html",
        lang: "zh",
        authority: "licensed",
        medium: "publisher",
        claim: "用于交叉核对作品名称、作者、章节总数和纵横中文数字版权说明。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色资料入口",
        label: "中文论战 Wiki：江离",
        url: "https://cntaps.fandom.com/zh/wiki/%E6%B1%9F%E7%A6%BB",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "社区整理入口；只作为无限大道和结局段落的线索，不单独作为正式定级依据。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "chapter",
        scope: "最终篇章",
        label: "微信读书：《星河大帝》最终篇章目录",
        url: "https://weread.qq.com/web/bookDetail/5e732440539d565e7f5a69a",
        citation: "梦入神机《星河大帝》第1058章《无限文化》、第1062章《无可抗衡》、第1065章《不可思议》。",
        lang: "zh",
        authority: "licensed",
        medium: "publisher",
        ratingEvidence: true,
        claim: "用于核对江离最终阶段、无限文化/无限世界/不可思议结局段的章节位置；防御无限只按结构性防线记录。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录江离作为中文网文无限防御能级代表样例；不扩展《星河大帝》长尾角色。",
      versionPolicy: "只记录最终阶段江离；早期大帝印、催眠师、圣者等阶段不并入该面板。",
      highRisk: [
        "无限大道",
        "无限世界",
        "终章宇宙论",
        "结构性防线"
      ],
      conservativeNotes: "无限大道和无限世界按宇宙论结构处理，不把概念名词直接换成肉身硬度；防御无限只代表可承接/化解对应结构攻击的防线。"
    },
    sourcePolicy: "优先使用微信读书/书旗等授权作品页和具体章名 citation；社区战力页只作为线索。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

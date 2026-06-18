(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "永生";

  registerWorkSource(WORK, {
    slug: "eternal-life",
    originalLanguage: "zh",
    pageLabel: "正版作品搜索入口",
    pageBase: "https://www.qidian.com/search?kw=",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "起点中文网：《永生》",
        url: "https://www.qidian.com/book/3236044/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        claim: "用于确认《永生》为梦入神机创作的中文网文、章节总数和最终章标题。"
      },
      {
        type: "official",
        scope: "授权作品页",
        label: "微信读书：《永生》",
        url: "https://weread.qq.com/web/bookDetail/dcd3224057ae00dcda5e300",
        lang: "zh",
        authority: "licensed",
        medium: "publisher",
        claim: "用于交叉核对《永生》简介、作者、完结状态和最终章目录。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《永生》",
        url: "https://zh.moegirl.org.cn/%E6%B0%B8%E7%94%9F",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "作品资料入口；只用于作品版本和动画/小说入口交叉核对，不作为无限生命结构依据。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "chapter",
        scope: "最终章",
        label: "微信读书：《永生》第1634章 永生（大结局）目录",
        url: "https://weread.qq.com/web/bookDetail/dcd3224057ae00dcda5e300",
        citation: "梦入神机《永生》第1630章《我无所不能》、第1634章《永生（大结局）》。",
        lang: "zh",
        authority: "licensed",
        medium: "publisher",
        ratingEvidence: true,
        claim: "用于核对方寒最终阶段、永生之门/永生境界和复归条件；生命无限按生命主体/核心结构记录。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录方寒作为中文网文无限生命体量代表样例；不扩展《永生》长尾角色。",
      versionPolicy: "只记录大结局方寒；凡人、神通、长生、仙王战前等阶段不并入该面板。",
      highRisk: [
        "永生之门",
        "永生境界",
        "无限级生命结构",
        "复归条件"
      ],
      conservativeNotes: "书名、寿命和永生称号不能单独推出无限级生命结构；本条只按最终章方寒与永生之门的主体/复归关系记录。"
    },
    sourcePolicy: "优先使用起点中文网正版入口、微信读书授权目录和具体章名 citation；镜像全文只可用于人工查证，不写入仓库作为链接依据。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

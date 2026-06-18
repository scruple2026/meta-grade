(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Marvel Comics";

  registerWorkSource(WORK, {
    slug: "marvel-comics",
    originalLanguage: "en",
    pageLabel: "Marvel 官方角色页",
    pageBase: "https://www.marvel.com/characters/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "官方角色索引",
        label: "Marvel.com Characters",
        url: "https://www.marvel.com/characters",
        lang: "en",
        authority: "official",
        medium: "official-site",
        claim: "Marvel 官方角色资料入口；本站后续新增 Marvel 角色时优先从官方角色页、官方文章和具体漫画卷期补证据。"
      }
    ],
    commonLinks: [
      {
        type: "official",
        scope: "Living Tribunal 官方角色页",
        label: "Marvel.com: Living Tribunal",
        url: "https://www.marvel.com/characters/living-tribunal",
        lang: "en",
        authority: "official",
        medium: "official-site",
        claim: "用于核对 Living Tribunal 与 One-Above-All 的层级关系、Marvel 多元宇宙定义和 One-Above-All 生命源头表述。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "official",
        scope: "宇宙论层级",
        label: "Meet the Living Tribunal, the Multiversal Arbiter of Cosmic Balance",
        url: "https://www.marvel.com/articles/comics/living-tribunal-history-powers-explained",
        lang: "en",
        authority: "official",
        medium: "official-site",
        ratingEvidence: true,
        claim: "Marvel 官方文章将 Living Tribunal 描述为服务于 One-Above-All 这一多元宇宙创造者，并说明其职责覆盖 Marvel Multiverse 的多重现实。"
      },
      {
        type: "official",
        scope: "创世与生命源头",
        label: "A Journey Through the Marvel Mythological Universe",
        url: "https://www.marvel.com/articles/comics/a-journey-through-the-marvel-mythological-universe",
        lang: "en",
        authority: "official",
        medium: "official-site",
        ratingEvidence: true,
        claim: "Marvel 官方文章称 One-Above-All 使多元宇宙及其中生命出现，并位于 Living Tribunal 之上；本站据此只作宇宙论依赖的无限档示例。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录 One-Above-All 作为无限档与宇宙论源头示例；不自动扩展 Marvel 长尾宇宙角色。",
      versionPolicy: "按 Marvel Comics 官方宇宙论资料记录；MCU、游戏、跨媒体宣传和同名 Celestial 不混入该条目。",
      highRisk: [
        "多元宇宙",
        "无限级",
        "宇宙论依赖",
        "One-Above-All / One Above All 同名混淆",
        "抽象实体与普通战斗面板换算"
      ],
      conservativeNotes: "称号、全能、最高神或作者化身印象不自动抬高全部主面板；只有创世、源头、支配 Living Tribunal 等有官方宇宙论支持的维度写高风险无限档，并统一收束为无限级。"
    },
    sourcePolicy: "优先使用 Marvel.com 官方角色页、官方文章和具体漫画卷期；粉丝 wiki 只作资料入口，不作为高风险量级的 ratingEvidence。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

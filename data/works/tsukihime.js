(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "月姬";

  registerWorkSource(WORK, {
    slug: "tsukihime",
    originalLanguage: "ja",
    pageLabel: "月姬 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "TYPE-MOON Wiki：Tsukihime",
        url: "https://typemoon.fandom.com/wiki/Tsukihime",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《月姬》作品、近月线主要角色和型月世界观入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Shiki Tohno",
        url: "https://typemoon.fandom.com/wiki/Shiki_Tohno",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对远野志贵、直死魔眼和月姬主线资料入口。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录型月 DLC worldbook key/comment 中明确出现的《月姬》近月线核心人物：远野志贵、爱尔奎特·布伦史塔德和希耶尔；七夜志贵作为远野志贵的同源/替代表现折入远野志贵条目，不重复新增独立主面板。",
      versionPolicy: "按《月姬》同人版/重制版共有主线入口记录；FGO、Melty Blood、Archetype: Earth 和其他跨作状态不并入本作主面板。直死魔眼、真祖、空想具现化、不死性和第七圣典均作为特殊权能或条件峰值处理。",
      highRisk: ["直死魔眼", "真祖", "空想具现化", "Archetype: Earth", "死徒/罗亚", "不死性", "第七圣典", "圣堂教会"],
      conservativeNotes: "型月规则系能力、真祖设定和不死机制不自动换算为无限或天体破坏。主面板优先记录角色在月姬本篇可用于战斗的肉体、武器、魔术/异能和资源规模。"
    },
    sourcePolicy: "TYPE-MOON Wiki 是入口来源；高争议机制后续应补日文原作、设定集、重制版资料或官方资料引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

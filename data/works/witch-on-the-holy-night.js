(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "魔法使之夜";

  registerWorkSource(WORK, {
    slug: "witch-on-the-holy-night",
    originalLanguage: "ja",
    pageLabel: "魔法使之夜 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "TYPE-MOON Wiki：Mahoutsukai no Yoru",
        url: "https://typemoon.fandom.com/wiki/Mahoutsukai_no_Yoru",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《魔法使之夜》作品、主要角色和魔术设定入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Aoko Aozaki",
        url: "https://typemoon.fandom.com/wiki/Aoko_Aozaki",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对苍崎青子身份、第五魔法和魔法使之夜资料入口。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录型月 DLC worldbook key/comment 中明确出现的《魔法使之夜》主角组：苍崎青子、久远寺有珠和静希草十郎。",
      versionPolicy: "按《魔法使之夜》本篇语境记录；月姬、FGO、其他型月联动和成年后跨作状态不并入本作主面板。第五魔法、童话怪物、使魔和山育体术需分开标注。",
      highRisk: ["第五魔法", "魔弹", "童话怪物", "Ploy Kickshaw", "Flat Snark", "使魔/工房", "山育体术"],
      conservativeNotes: "魔法使称号、魔女称号和规则系机制不自动折算为高破坏档；主面板优先记录本篇可复核的攻击、防御、速度和资源表现。"
    },
    sourcePolicy: "TYPE-MOON Wiki 是入口来源；高争议机制后续应补日文原作、设定集或官方资料引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

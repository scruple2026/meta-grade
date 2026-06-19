(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "弹丸论破";

  registerWorkSource(WORK, {
    slug: "danganronpa",
    originalLanguage: "ja",
    pageLabel: "Danganronpa Wiki 角色页",
    pageBase: "https://danganronpa.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "官方系列入口",
      label: "Danganronpa Official Website",
      url: "https://www.danganronpa.us/",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《Danganronpa》官方系列入口。"
    }],
    commonLinks: [{
      type: "wiki",
      scope: "作品资料入口",
      label: "Danganronpa Wiki",
      url: "https://danganronpa.fandom.com/wiki/Danganronpa_Wiki",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      claim: "用于交叉核对角色身份、超高校级称号、处刑装置和绝望事件资料。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录缄默之秋 worldbook key/comment 中明确出现的江之岛盾子。暂不展开全班级、未来机关或外传角色。",
      versionPolicy: "按《弹丸论破》主线综合记录；操控黑白熊、处刑装置和绝望残党影响只作为外部资源/社会工程峰值，不写成本体肉身。",
      highRisk: ["黑白熊", "处刑装置", "绝望残党", "社会崩坏", "洗脑/煽动"],
      conservativeNotes: "超高校级称号、幕后主谋地位和世界级社会影响不自动提高攻击、防御、速度或生命体量。"
    },
    sourcePolicy: "官方系列入口与Danganronpa Wiki是资料入口；具体剧情峰值后续应补游戏章节或官方资料链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

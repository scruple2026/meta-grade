(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "龙符";

  registerWorkSource(WORK, {
    slug: "dragon-talisman",
    originalLanguage: "zh",
    pageLabel: "中文论战 Wiki 角色页入口",
    pageBase: "https://cntaps.fandom.com/zh/wiki/",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "纵横中文网：《龙符》",
        url: "https://www.zongheng.com/detail/523438",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        claim: "用于确认《龙符》为梦入神机在纵横中文网发布的已完结中文网文，并核对最终章入口。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "中文论战 Wiki：《龙符》",
        url: "https://cntaps.fandom.com/zh/wiki/%E9%BE%99%E7%AC%A6",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "社区整理入口；只作为线索和交叉核对，不单独作为正式定级依据。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "chapter",
        scope: "最终章",
        label: "纵横中文网：《龙符》第1149章 永远无敌 大结局",
        url: "https://read.zongheng.com/chapter/523438/40260958.html",
        citation: "梦入神机《龙符》第1149章《永远无敌 大结局》。",
        lang: "zh",
        authority: "primary",
        medium: "publisher",
        ratingEvidence: true,
        claim: "用于核对古尘沙最终阶段、不朽第十层和多元宇宙/心灵网络相关宇宙论口径；本站仍把无限层级收束为一个无限档。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录古尘沙作为中文网文无限攻击能级代表样例；不扩展《龙符》长尾角色。",
      versionPolicy: "只记录最终阶段古尘沙；早期祭天符诏、天子封神术和中期靖仙司阶段不并入该面板。",
      highRisk: [
        "无龙心法",
        "不朽第十层",
        "多元宇宙",
        "无限级攻击",
        "心灵力量"
      ],
      conservativeNotes: "无龙心法、心灵力量和宇宙论描述不能自动外推到全维度无限；本作品无限档只作为明确代表项，其他维度后续需逐章复核。"
    },
    sourcePolicy: "优先使用纵横中文网正版作品页和章节页；社区战力页只能作为线索，不作为 primary 或 official。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

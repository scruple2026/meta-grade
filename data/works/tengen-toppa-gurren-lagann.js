(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "天元突破红莲螺岩";

  registerWorkSource(WORK, {
    slug: "tengen-toppa-gurren-lagann",
    originalLanguage: "ja",
    pageLabel: "Gurren Lagann Wiki 角色页",
    pageBase: "https://gurrenlagann.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "作品入口",
        label: "天元突破グレンラガン 公式サイト",
        url: "https://www.gurren-lagann.net/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对《天元突破红莲螺岩》官方作品入口；高端宇宙论量级仍按最终决战画面和交叉资料保守标注。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "资料入口",
        label: "Gurren Lagann Wiki：Tengen Toppa Gurren Lagann",
        url: "https://gurrenlagann.fandom.com/wiki/Tengen_Toppa_Gurren_Lagann_%28Gunmen%29",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        claim: "用于定位天元突破形态、最终决战和机体资料入口；不单独作为官方量级证据。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "source",
        scope: "跨界战力参考",
        label: "VS Battles Wiki：Tengen Toppa Gurren Lagann",
        url: "https://vsbattles.fandom.com/wiki/Tengen_Toppa_Gurren_Lagann",
        lang: "en",
        authority: "cross-reference",
        medium: "cross-wiki",
        ratingEvidence: true,
        claim: "用于交叉复核天元突破/超天元突破形态的星系到宇宙论尺度；本站只把星系级和超星系团级作为覆盖样例并标争议。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录西蒙/红莲螺岩最终形态作为星系级、超星系团级和高端有限速度覆盖样例；大红莲团其他成员暂不扩展。",
      versionPolicy: "普通红莲螺岩、方舟红莲螺岩、天元突破与超天元突破形态应按时间线/形态拆分，不混成一个稳定常态。",
      highRisk: [
        "螺旋力",
        "机体尺寸演出",
        "超螺旋宇宙",
        "最终决战宇宙论",
        "电影版超天元突破"
      ],
      conservativeNotes: "最终决战存在强烈象征/空间演出；本站只用作有限高端覆盖，不把螺旋力信念、合体演出或异空间战场直接写成无限级或无限速。"
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

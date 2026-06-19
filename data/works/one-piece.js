(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "海贼王";

  registerWorkSource(WORK, {
    slug: "one-piece",
    originalLanguage: "ja",
    pageLabel: "One Piece Wiki 角色页",
    pageBase: "https://onepiece.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "少年ジャンプ官方《ONE PIECE》作品页",
        url: "https://www.shonenjump.com/j/rensai/onepiece.html",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对海贼王日文官方入口和角色/资料检索入口；霸气/果实高风险量级仍需原作卷话补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《海贼王》页面",
        url: "https://www.viz.com/one-piece"
      },
      {
        label: "One Piece Wiki 角色总表",
        url: "https://onepiece.fandom.com/wiki/Characters"
      }
    ],
    scaleNotes: {
          "scope": "当前收录草帽一伙、白胡子、黑胡子、凯多、香克斯、米霍克；艾斯、马尔科、赤犬、大妈等非草帽/非终局核心角色不再按 worldbook 名字池扩入。",
          "versionPolicy": "二档/四档/五档、霸气觉醒、果实觉醒应按时间线或峰值标签限制。",
          "highRisk": [
                "霸气",
                "果实觉醒",
                "见闻色未来视",
                "震震果实",
                "巨大化"
          ],
          "conservativeNotes": "自然系/超人系机制和未来视不直接抬防御或反应速度。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补章节、集数、设定书或官方资料链接。",
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

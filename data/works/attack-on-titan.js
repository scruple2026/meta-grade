(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "进击的巨人";

  registerWorkSource(WORK, {
    slug: "attack-on-titan",
    originalLanguage: "ja",
    pageLabel: "Attack on Titan Wiki 角色页",
    pageBase: "https://attackontitan.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "「进击的巨人」官方门户 ABOUT",
        url: "https://aot-portal.com/about/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于确认作品官方口径和日文原作/动画入口，不单独作为角色量级依据。"
      },
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "TV动画「进击的巨人」角色页",
        url: "https://shingeki.tv/season1/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对主要角色基础资料、兵历和动画官方角色描述。"
      }
    ],
    commonLinks: [
      {
        label: "Kodansha《进击的巨人》页面",
        url: "https://archive.kodansha.us/series/attack-on-titan/index.html"
      },
      {
        label: "Attack on Titan Wiki 角色总表",
        url: "https://attackontitan.fandom.com/wiki/Category:Characters"
      },
      {
        label: "Attack on Titan Wiki 九大巨人",
        url: "https://attackontitan.fandom.com/wiki/Nine_Titans"
      }
    ],
    scaleNotes: {
          "scope": "当前收录调查兵团核心、战士队核心和始祖艾伦。",
          "versionPolicy": "人类本体、巨人体、始祖/地鸣状态必须分开标注。",
          "highRisk": [
                "地鸣",
                "始祖巨人",
                "巨人再生",
                "王血"
          ],
          "conservativeNotes": "地鸣属于持续灾害和巨群控制，不按单体一击处理。"
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

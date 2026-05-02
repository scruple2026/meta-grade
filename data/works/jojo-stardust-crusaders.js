(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "JOJO的奇妙冒险：星尘斗士";

  registerWorkSource(WORK, {
    slug: "jojo-stardust-crusaders",
    originalLanguage: "ja",
    pageLabel: "JoJo Wiki 角色页",
    pageBase: "https://jojowiki.com/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "JOJO 官方门户：星尘斗士角色页",
        url: "https://jojo-portal.com/anime/sc/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对星尘斗士动画官方角色和替身入口；替身速度/时间停止仍需原作章节或设定书补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《JOJO的奇妙冒险：星尘斗士》页面",
        url: "https://www.viz.com/read/manga/jojo-s-bizarre-adventure-part-3-stardust-crusaders/all"
      },
      {
        label: "JoJo Wiki Part 3 页面",
        url: "https://jojowiki.com/JoJo%27s_Bizarre_Adventure:_Stardust_Crusaders"
      }
    ],
    scaleNotes: {
          "scope": "当前收录星尘斗士主角团核心和 DIO。",
          "versionPolicy": "替身能力、本体和时间停止必须分开描述。",
          "highRisk": [
                "时间停止",
                "替身速度",
                "吸血鬼再生",
                "规则型替身"
          ],
          "conservativeNotes": "时间停止不是连续移动速度，替身短距出手不等于本体长途移动。"
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

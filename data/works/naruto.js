(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "火影忍者";

  registerWorkSource(WORK, {
    slug: "naruto",
    originalLanguage: "ja",
    pageLabel: "Narutopedia 角色页",
    pageBase: "https://naruto.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "NARUTO OFFICIAL SITE：NARUTOとは",
        url: "https://naruto-official.com/about/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对火影忍者官方作品概述、日文原作/动画入口和基础世界观；六道/尾兽高端量级仍需卷话或设定书补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《火影忍者》页面",
        url: "https://www.viz.com/naruto"
      },
      {
        label: "Narutopedia 角色总表",
        url: "https://naruto.fandom.com/wiki/Characters"
      }
    ],
    scaleNotes: {
          "scope": "当前收录第七班核心与疾风传最终 Boss 辉夜。",
          "versionPolicy": "疾风传初期、仙人模式、九尾模式、六道模式后续应拆 timelinePanels。",
          "highRisk": [
                "六道力量",
                "尾兽玉",
                "空间忍术",
                "幻术",
                "封印"
          ],
          "conservativeNotes": "空间置换写特殊位移；查克拉总量不能自动反推单击输出。"
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

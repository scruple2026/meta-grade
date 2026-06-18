(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "电锯人";

  registerWorkSource(WORK, {
    slug: "chainsaw-man",
    originalLanguage: "ja",
    pageLabel: "Chainsaw Man Wiki 角色页",
    pageBase: "https://chainsaw-man.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "动画「电锯人」官方角色页",
        url: "https://www.chainsawman.dog/tvseries/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对电次、帕瓦、早川秋、玛奇玛等动画官方角色资料；契约/恶魔权能仍需原作章节补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《电锯人》页面",
        url: "https://www.viz.com/chainsaw-man"
      },
      {
        label: "Chainsaw Man Wiki 角色总表",
        url: "https://chainsaw-man.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
          "scope": "当前收录电次、帕瓦、早川秋、三鹰朝/战争恶魔和玛奇玛。",
          "versionPolicy": "混成体、魔人、恶魔本体和契约峰值后续可拆时间线。",
          "highRisk": [
                "契约",
                "支配",
                "死亡转移",
                "武器化",
                "概念恶魔"
          ],
          "conservativeNotes": "恶魔名号、恐惧设定和契约权能不直接换算主面板。"
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

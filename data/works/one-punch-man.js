(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "一拳超人";

  registerWorkSource(WORK, {
    slug: "one-punch-man",
    originalLanguage: "ja",
    pageLabel: "One-Punch Man Wiki 角色页",
    pageBase: "https://onepunchman.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色入口",
        label: "TV东京动画「ワンパンマン」角色页",
        url: "https://www.tv-tokyo.co.jp/anime/onepunchman2/chara/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对动画官方角色资料；埼玉、饿狼、波罗斯等高端峰值仍需原作话数或设定资料补证。"
      }
    ],
    commonLinks: [
      {
        label: "VIZ《一拳超人》页面",
        url: "https://www.viz.com/one-punch-man"
      },
      {
        label: "One-Punch Man Wiki 角色总表",
        url: "https://onepunchman.fandom.com/wiki/Characters"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "source",
        scope: "作品量级参考",
        label: "VS Battles Wiki：One-Punch Man",
        url: "https://vsbattles.fandom.com/wiki/One-Punch_Man",
        lang: "en",
        authority: "cross-reference",
        medium: "cross-wiki",
        ratingEvidence: true,
        claim: "用于复核当前收录角色整体城市级以上密度，不等同单角色章节级证据。"
      }
    ],
    scaleNotes: {
          "scope": "当前收录埼玉、杰诺斯、龙卷、饿狼、波罗斯。",
          "versionPolicy": "埼玉上限未明只写已表现下限；饿狼按怪人化和宇宙恐惧峰值标注。",
          "highRisk": [
                "搞笑定位",
                "宇宙恐惧模式",
                "崩星咆哮炮",
                "念动力大范围"
          ],
          "conservativeNotes": "灾害等级、称号和未见上限不自动抬到无限或超光速。"
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

(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "鬼灭之刃";

  registerWorkSource(WORK, {
    slug: "demon-slayer",
    originalLanguage: "ja",
    pageLabel: "Kimetsu no Yaiba Wiki 角色页",
    pageBase: "https://kimetsu-no-yaiba.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "「鬼灭之刃」公式站 / 集英社",
        url: "https://kimetsu.com/comics/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于确认原作漫画、角色简介和集英社官方入口，不单独作为速度/攻击量级依据。"
      },
      {
        type: "official",
        scope: "日文出版社入口",
        label: "周刊少年 Jump「鬼灭之刃」页面",
        url: "https://www.shonenjump.com/j/rensai/kimetsu.html",
        lang: "ja",
        authority: "official",
        medium: "publisher",
        claim: "用于核对集英社连载作品入口和日文出版资料。"
      }
    ],
    commonLinks: [
      { label: "Kimetsu no Yaiba Wiki 角色总表", url: "https://kimetsu-no-yaiba.fandom.com/wiki/Characters" },
      { label: "Kimetsu no Yaiba Wiki 柱", url: "https://kimetsu-no-yaiba.fandom.com/wiki/Hashira" },
      { label: "Kimetsu no Yaiba Wiki 十二鬼月", url: "https://kimetsu-no-yaiba.fandom.com/wiki/Twelve_Kizuki" },
      { label: "萌娘百科《鬼灭之刃》作品页", url: "https://moegirl.icu/%E9%AC%BC%E7%81%AD%E4%B9%8B%E5%88%83" }
    ],
    scaleNotes: {
          "scope": "当前只收录主角团和最终 Boss 鬼舞辻无惨；柱和十二鬼月暂不默认恢复。",
          "versionPolicy": "斑纹、通透世界、赫刀、鬼化等只写对应时间线或峰值标签。",
          "highRisk": [
                "鬼化",
                "再生",
                "日轮刀克制",
                "呼吸特效"
          ],
          "conservativeNotes": "剑技特效不直接换算为元素范围破坏。"
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

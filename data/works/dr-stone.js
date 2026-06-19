(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Dr.STONE";

  registerWorkSource(WORK, {
    slug: "dr-stone",
    originalLanguage: "ja",
    pageLabel: "Dr.STONE Wiki 角色页",
    pageBase: "https://dr-stone.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色页",
        label: "アニメ「Dr.STONE」公式HP：CHARACTER",
        url: "https://dr-stone.jp/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对石之战争篇主要角色名单；本站不把科学发明和团队成果直接写成角色个人常态输出。"
      }
    ],
    commonLinks: [
      {
        label: "Dr.STONE Wiki 角色总表",
        url: "https://dr-stone.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录石之战争篇 worldbook key/comment 中的主角团和核心对立人物：石神千空、大木大树、小川杠、克罗姆、浅雾幻和狮子王司；工匠、支援人员和普通阵营成员不再扩入。",
      versionPolicy: "个人肉身、科学工具、陷阱、炸药、复活液和团队发明必须分开标注；科学成果只作为有条件峰值或战力解释项。",
      highRisk: ["石化", "复活液", "炸药", "科学王国发明链", "司帝国"],
      conservativeNotes: "Dr.STONE主战力多为现实人类或近现实武术水平；发明、计策和后勤价值不自动折算为高破坏档。"
    },
    sourcePolicy: "官方角色页和角色Wiki是入口来源；具体发明和战斗表现后续可补漫画话数或动画集数。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

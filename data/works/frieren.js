(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "葬送的芙莉莲";

  registerWorkSource(WORK, {
    slug: "frieren",
    originalLanguage: "ja",
    pageLabel: "Frieren Wiki 角色页",
    pageBase: "https://frieren.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方动画角色入口",
        label: "TV动画「葬送のフリーレン」角色页",
        url: "https://frieren-anime.jp/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对芙莉莲日文官方角色入口；魔法量级仍按正篇表现和本站口径保守处理。"
      }
    ],
    commonLinks: [
      {
        label: "Frieren Wiki 角色总表",
        url: "https://frieren.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录芙莉莲队伍和黄金乡篇关键战斗角色：芙莉莲、菲伦、修塔尔克、邓肯、马哈特、索莉塔尔。",
      versionPolicy: "勇者队时期、现代旅行、一级魔法使考试和黄金乡篇可按时间线拆分；黄金化、封印和解析魔法写明条件。",
      highRisk: ["迪亚戈尔泽", "黄金化", "魔族魔法", "封印", "魔力隐藏"],
      conservativeNotes: "魔法性质、年龄和魔力量不自动换算为攻击/防御高档；特殊魔法优先写入战力解释项。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补漫画话数、动画集数或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

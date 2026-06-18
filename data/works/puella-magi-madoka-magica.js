(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "魔法少女小圆";

  registerWorkSource(WORK, {
    slug: "puella-magi-madoka-magica",
    originalLanguage: "ja",
    pageLabel: "Puella Magi Wiki 角色页",
    pageBase: "https://wiki.puella-magi.net/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "魔法少女まどか☆マギカ 官方网站",
        url: "https://www.madoka-magica.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对魔法少女小圆官方入口；圆环之理和宇宙论高风险量级仍需按正篇结局与交叉资料标争议。"
      }
    ],
    commonLinks: [
      {
        label: "Puella Magi Wiki 角色总表",
        url: "https://wiki.puella-magi.net/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录见泷原核心：鹿目圆、晓美焰、巴麻美、美树沙耶加、佐仓杏子和丘比。",
      versionPolicy: "普通人、魔法少女、魔女化、圆环之理和叛逆物语形态必须分开；本批不并入恶魔焰。",
      highRisk: ["圆环之理", "时间停止", "时间循环", "灵魂宝石", "魔女化", "孵化者系统"],
      conservativeNotes: "愿望、概念改写和时间能力不自动抬普通魔法少女肉身；无限级只用于圆环之理等明确宇宙论峰值并标争议。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补集数、剧场版段落或设定书资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

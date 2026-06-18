(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "剑风传奇";

  registerWorkSource(WORK, {
    slug: "berserk",
    originalLanguage: "ja",
    pageLabel: "Berserk Wiki 角色页",
    pageBase: "https://berserk.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "ヤングアニマルWeb『ベルセルク』",
        url: "https://magazine.younganimal.com/berserk/",
        lang: "ja",
        authority: "official",
        medium: "publisher",
        claim: "用于核对剑风传奇日文官方/出版入口；角色量级仍按原作表现保守处理。"
      },
      {
        type: "setting",
        scope: "官方设定书入口",
        label: "白泉社：ベルセルク オフィシャルガイドブック",
        url: "https://www.hakusensha.co.jp/comicslist/48370/",
        lang: "ja",
        authority: "official",
        medium: "databook",
        claim: "用于定位官方指南和角色资料入口；本站不把称号或神之手身份直接折算为破坏档。"
      }
    ],
    commonLinks: [
      {
        label: "Berserk Wiki 角色总表",
        url: "https://berserk.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录蚀之刻相关核心战斗角色：格斯、格里菲斯/费蒙特、卡思嘉、髑髅骑士和不死者佐德。",
      versionPolicy: "黄金时代人类状态、使徒/神之手、狂战士铠甲和幽界相关能力必须分开标注。",
      highRisk: ["神之手", "因果律", "贝黑莱特", "烙印", "狂战士铠甲", "使徒化"],
      conservativeNotes: "神之手、因果律和幽界权能写入特殊权能，不直接换算为大范围破坏。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补原作卷话或官方指南资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

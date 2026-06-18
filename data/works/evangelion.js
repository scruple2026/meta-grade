(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "新世纪福音战士";

  registerWorkSource(WORK, {
    slug: "evangelion",
    originalLanguage: "ja",
    pageLabel: "Evangelion Wiki 角色页",
    pageBase: "https://evangelion.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方作品入口",
        label: "EVANGELION 官方网站",
        url: "https://www.evangelion.co.jp/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对 Evangelion 系列官方入口；TV/旧剧角色量级仍按具体作品阶段保守处理。"
      }
    ],
    commonLinks: [
      {
        label: "Evangelion Wiki 角色总表",
        url: "https://evangelion.fandom.com/wiki/Category:Characters"
      },
      {
        label: "EvaGeeks Wiki",
        url: "https://wiki.evageeks.org/"
      }
    ],
    scaleNotes: {
      scope: "当前收录第三次冲击前夜相关主要角色：碇真嗣、绫波丽、明日香、葛城美里、赤木律子、冬月耕造、伊吹摩耶、碇源堂、渚薰、加持良治、碇唯、莉莉丝、EVA 初号机和量产EVA系列。",
      versionPolicy: "驾驶员本体、EVA 机体、觉醒、S2机关、补完/冲击仪式必须分开标注；Rebuild 不混入 TV/旧剧口径。",
      highRisk: ["AT力场", "S2机关", "朗基努斯之枪", "复制朗基努斯之枪", "莉莉丝", "巨大绫波", "第三次冲击", "人类补完", "量产EVA仪式阵列"],
      conservativeNotes: "AT力场、心之壁、补完仪式和灵魂机制优先写入特殊权能；不自动折算为纯破坏档。"
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

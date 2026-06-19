(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Re:从零开始的异世界生活";

  registerWorkSource(WORK, {
    slug: "re-zero",
    originalLanguage: "ja",
    pageLabel: "Re:Zero Wiki 角色页",
    pageBase: "https://rezero.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色页",
        label: "TVアニメ『Re:ゼロから始める異世界生活』オフィシャルサイト：CHARACTER",
        url: "https://re-zero-anime.jp/tv/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对王选篇主要角色、阵营和官方角色定位；本站不把王选身份、魔女气味或称号直接折算为破坏档。"
      }
    ],
    commonLinks: [
      {
        label: "Re:Zero Wiki 角色总表",
        url: "https://rezero.fandom.com/wiki/Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录 Re:Zero worldbook key/comment 中的主角团核心：菜月昴、爱蜜莉雅、蕾姆和帕克；王选盟友、讨伐队成员、阶段性魔兽和普通魔女教成员不再扩入正式 roster。",
      versionPolicy: "死亡回归、契约精灵、鬼化、白鲸权能、不可视之手、治愈魔法和王选阵营资源必须分开；召唤/契约方不自动并入角色常态主表。",
      highRisk: ["死亡回归", "不可视之手", "白鲸消去之雾", "大精灵", "治愈魔法", "王选阵营资源"],
      conservativeNotes: "Re:Zero 的权能、魔法和加护优先写入特殊权能或条件峰值；缺少明确破坏规模时不把称号直接抬到城市级以上。"
    },
    sourcePolicy: "官方角色页和 Re:Zero Wiki 是入口来源；具体战斗表现后续可补动画集数、轻小说卷章或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "攻壳机动队";

  registerWorkSource(WORK, {
    slug: "ghost-in-the-shell",
    originalLanguage: "ja",
    pageLabel: "Ghost in the Shell Wiki 角色页",
    pageBase: "https://ghostintheshell.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "Production I.G 作品页",
        label: "Production I.G：Ghost in the Shell",
        url: "https://www.production-ig.com/contents/works_sp/16_/index.html",
        lang: "en",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对1995电影中公安九课追查傀儡师的官方剧情入口；本站不把黑客入侵直接折算为物理破坏档。"
      },
      {
        type: "official",
        scope: "官方系列页",
        label: "GHOST IN THE SHELL / INNOCENCE 官方系列页",
        url: "https://theghostintheshell.jp/en/series/ghostintheshell-innocence",
        lang: "en",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对草薙素子、傀儡师和1995电影事件入口；具体量级仍按角色表现保守处理。"
      }
    ],
    commonLinks: [
      {
        label: "Ghost in the Shell Wiki",
        url: "https://ghostintheshell.fandom.com/wiki/Ghost_in_the_Shell_Wiki"
      }
    ],
    scaleNotes: {
      scope: "当前收录傀儡师事件相关主要角色：草薙素子、巴特、傀儡师、荒卷大辅和德古沙。",
      versionPolicy: "1995电影、S.A.C.、ARISE、SAC_2045和真人电影设定不互相混入；义体硬度、热光学迷彩、电子脑黑客和网络融合分开标注。",
      highRisk: ["电子脑黑客", "Ghost", "Project 2501", "义体", "热光学迷彩", "网络融合"],
      conservativeNotes: "电子脑入侵、记忆篡改和网络存在写入特殊权能，不自动提升攻击能级、防御能级或移动速度。"
    },
    sourcePolicy: "官方作品页和 Ghost in the Shell Wiki 是入口来源；具体枪械、义体和黑客表现后续可补电影段落或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

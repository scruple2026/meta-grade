(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "蛊真人";

  registerWorkSource(WORK, {
    slug: "reverend-insanity",
    originalLanguage: "zh",
    pageLabel: "中文资料入口",
    pageBase: "https://zh.moegirl.org.cn/",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "作品资料入口",
        label: "萌娘百科：《蛊真人》",
        url: "https://zh.moegirl.org.cn/%E8%9B%8A%E7%9C%9F%E4%BA%BA",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对《蛊真人》、作者、起点连载/下架语境和古月方源主角资料入口；量级仍需按角色条目和原文补证。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色资料入口",
        label: "萌娘百科：古月方源",
        url: "https://zh.moegirl.org.cn/%E5%8F%A4%E6%9C%88%E6%96%B9%E6%BA%90",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: true,
        claim: "用于核对古月方源、九转蛊尊、春秋蝉、至尊仙胎和大爱仙尊/炼天魔尊等后期身份。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录《道友先上我断后》worldbook key/comment 中出现的古月方源；不扩展《蛊真人》长尾角色。",
      versionPolicy: "默认按九转蛊尊/大爱仙尊阶段记录；青茅山、三王山、北原、八转蛊仙等阶段后续可拆 timelinePanels。",
      highRisk: ["春秋蝉", "至尊仙胎", "九转蛊尊", "尊者", "天道/炼道"],
      conservativeNotes: "尊者身份、魔尊/仙尊称号和永生追求不直接换算为无限档；春秋蝉和宿命相关能力写特殊机制。"
    },
    sourcePolicy: "优先使用可读公开百科和后续原文卷章 citation；社区解读只能作为线索，不作为 primary 或 official。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "无限恐怖";

  registerWorkSource(WORK, {
    slug: "infinite-horror",
    originalLanguage: "zh",
    pageLabel: "无限恐怖资料入口",
    pageBase: "https://zh.wikipedia.org/wiki/",
    canonicalLinks: [
      {
        type: "official",
        scope: "作品官方连载入口",
        label: "起点中文网：《无限恐怖》",
        url: "https://www.qidian.com/book/109222/",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        claim: "用于核对《无限恐怖》为 zhttty 创作、起点中文网连载的作品入口。"
      }
    ],
    commonLinks: [
      {
        type: "source",
        scope: "作品资料入口",
        label: "中文维基百科：无限恐怖",
        url: "https://zh.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E6%81%90%E6%80%96",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于核对作品梗概、主神系统、主神空间和无限流影响；不作为高风险量级依据。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前只因主神空间 worldbook 的 char_主神 key/comment 收录主神系统实体；郑吒、楚轩等主角团未在本次缺口清单中作为待补角色出现，后续按明确 worldbook 角色键或社区 PR 补充。",
      versionPolicy: "按《无限恐怖》原作主神空间/主神系统口径记录，不把同人、续作或泛无限流设定混入本条目。",
      highRisk: ["主神空间", "兑换系统", "任务传送", "修复/复活", "抹杀机制"],
      conservativeNotes: "主神的系统权限、传送、兑换、修复、复活和抹杀优先写入特殊权能；缺少可换算的直接战斗表现时不折算为攻击、防御、速度或能量主档。"
    },
    sourcePolicy: "起点作品页和公开资料页是入口来源；若后续加入郑吒、楚轩等战斗角色，应补原文章节或更具体资料入口。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

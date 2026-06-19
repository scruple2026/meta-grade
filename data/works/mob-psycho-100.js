(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "灵能百分百";

  registerWorkSource(WORK, {
    slug: "mob-psycho-100",
    originalLanguage: "ja",
    pageLabel: "Mob Psycho 100 Wiki 角色页",
    pageBase: "https://mob-psycho-100.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方动画入口",
        label: "TV动画「モブサイコ100」官方网站",
        url: "https://mobpsycho100.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对灵能百分百日文官方动画入口和角色资料入口；跨界定级仍按正篇表现保守处理。"
      }
    ],
    commonLinks: [
      {
        label: "Mob Psycho 100 Wiki 角色总表",
        url: "https://mob-psycho-100.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录影山茂夫、灵幻新隆、影山律、花泽辉气和最终对立核心铃木统一郎；支线超能力者和普通干部不再扩入。",
      versionPolicy: "100%、???%、吸收能量和组织篇状态必须标注条件；普通灵能者日常状态不得套用峰值。",
      highRisk: ["???%", "吸收能量", "念动力屏障", "洗脑", "瞬间移动"],
      conservativeNotes: "情绪百分比和灵能力性质不直接等同大范围破坏；瞬间移动写特殊位移，不换算连续速度。"
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

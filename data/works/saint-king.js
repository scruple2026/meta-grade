(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "圣王";

  registerWorkSource(WORK, {
    slug: "saint-king",
    originalLanguage: "zh",
    pageLabel: "正版作品搜索入口",
    pageBase: "https://www.zongheng.com/search?keyword=",
    canonicalLinks: [
      {
        type: "official",
        scope: "正版作品页",
        label: "纵横中文网：《圣王》",
        url: "https://www.zongheng.com/detail/158432",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        claim: "用于确认《圣王》为梦入神机在纵横中文网发布的已完结中文网文，并核对最终章入口。"
      },
      {
        type: "official",
        scope: "授权作品页",
        label: "书旗小说：《圣王》",
        url: "https://ognv.shuqi.com/book/134330.html",
        lang: "zh",
        authority: "licensed",
        medium: "publisher",
        claim: "用于交叉核对作品名称、作者、章节总数和纵横中文数字版权说明。"
      }
    ],
    commonLinks: [
      {
        type: "official",
        scope: "出版/作者资料入口",
        label: "纵横书讯：《圣王》上架感言",
        url: "https://news.zongheng.com/news/3821.html",
        lang: "zh",
        authority: "official",
        medium: "publisher",
        claim: "用于核对梦入神机关于《圣王》上架和作品定位的官方站内资料；不单独作为量级依据。"
      }
    ],
    scaleEvidenceLinks: [
      {
        type: "chapter",
        scope: "后期境界",
        label: "纵横中文网：《圣王》作品页与最终章入口",
        url: "https://www.zongheng.com/detail/158432",
        citation: "梦入神机《圣王》第1324章《无限意志》、第1600章《最后的时刻 {大结局}》。",
        lang: "zh",
        authority: "primary",
        medium: "publisher",
        ratingEvidence: true,
        claim: "用于核对杨奇后期无限意志、最终章主宰阶段和能量/资源池口径；无限能量只作为总量代表，不自动反推单击输出。"
      }
    ],
    scaleNotes: {
      scope: "当前只收录杨奇作为中文网文无限能量总量代表样例；不扩展《圣王》长尾角色。",
      versionPolicy: "只记录最终阶段杨奇；早期神象镇狱劲、地狱熔炉胚胎和中期神界阶段不并入该面板。",
      highRisk: [
        "无限意志",
        "圣王界",
        "地狱熔炉",
        "无限级能量",
        "总量非单击"
      ],
      conservativeNotes: "无限意志、地狱熔炉和圣王界资源不自动等于无限单击攻击或无限防御；能量总量必须和攻击能级分开。"
    },
    sourcePolicy: "优先使用纵横中文网正版作品页、书旗授权页和具体章名 citation；非授权镜像不写入仓库链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

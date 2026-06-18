(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "暗杀教室";

  registerWorkSource(WORK, {
    slug: "assassination-classroom",
    originalLanguage: "ja",
    pageLabel: "Assassination Classroom Wiki 角色页",
    pageBase: "https://ansatsukyoshitsu.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文动画官方入口",
        label: "TVアニメ『暗殺教室』公式サイト",
        url: "https://www.ansatsu-anime.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对暗杀教室动画官方入口；本站不把悬赏金额或教师身份直接折算为战力。"
      }
    ],
    commonLinks: [
      {
        label: "Assassination Classroom Wiki 角色总表",
        url: "https://ansatsukyoshitsu.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录E班暗杀计划相关主要角色：杀老师、潮田渚、赤羽业、乌间惟臣、伊莉娜·叶拉维奇和浅野学秀。",
      versionPolicy: "学生训练、教师身份、政府装备、反杀老师武器和杀老师触手/弱点分开标注；月球事件不自动并入所有角色。",
      highRisk: ["杀老师速度", "月球爆破", "反杀老师武器", "触手弱点", "暗杀技巧"],
      conservativeNotes: "杀老师作为异常存在单独高档；E班学生与教师多数按现实/近现实暗杀训练、枪械和特殊装备处理。"
    },
    sourcePolicy: "官方动画入口和Assassination Classroom Wiki是入口来源；具体速度、月球事件和最终暗杀表现后续可补漫画话数或动画集数。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

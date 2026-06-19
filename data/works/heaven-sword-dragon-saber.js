(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "倚天屠龙记";

  registerWorkSource(WORK, {
    slug: "heaven-sword-dragon-saber",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：倚天屠龙记",
        url: "https://jinyong.fandom.com/zh/wiki/%E5%80%9A%E5%A4%A9%E5%B1%A0%E9%BE%8D%E8%A8%98",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《倚天屠龙记》作品、人物和门派资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色列表入口",
        label: "金庸 Wiki：倚天屠龙记角色列表",
        url: "https://jinyong.fandom.com/zh/wiki/%E5%80%9A%E5%A4%A9%E5%B1%A0%E9%BE%8D%E8%A8%98%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对倚天角色姓名、阵营和基础身份。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的倚天角色：张无忌、周芷若、殷天正、殷素素、殷野王、谢逊、张三丰、灭绝师太、何太冲、班淑娴、何足道、阳顶天；未在名字字段出现的角色后续按同规则补入。",
      versionPolicy: "按《倚天屠龙记》原作主线记录；少年期、光明顶、屠狮大会、太极拳剑、九阴白骨爪和倚天剑/屠龙刀峰值需按时间线或峰值标签区分。",
      highRisk: ["九阳神功", "乾坤大挪移", "太极拳剑", "九阴白骨爪", "七伤拳", "狮子吼", "倚天剑", "屠龙刀", "明教教主", "明教法王", "天鹰教", "昆仑派", "两仪剑法", "迅雷剑", "峨嵋掌门", "武当宗师"],
      conservativeNotes: "金庸武侠以人体、兵刃、内力、轻功、点穴和局部环境破坏为主；教主、法王、掌门、宗师等身份不直接换算为大范围破坏档。"
    },
    sourcePolicy: "金庸 Wiki 和公开小说条目是入口来源；高争议武功表现后续应补原文回目、版本和章节引用。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

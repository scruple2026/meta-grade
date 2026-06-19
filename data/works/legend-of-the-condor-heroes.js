(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "射雕英雄传";

  registerWorkSource(WORK, {
    slug: "legend-of-the-condor-heroes",
    originalLanguage: "zh",
    pageLabel: "金庸 Wiki 角色页",
    pageBase: "https://jinyong.fandom.com/zh/wiki/",
    pageLanguage: "zh",
    canonicalLinks: [
      {
        type: "wiki",
        scope: "小说资料入口",
        label: "金庸 Wiki：射雕英雄传",
        url: "https://jinyong.fandom.com/zh/wiki/%E5%B0%84%E9%B5%B0%E8%8B%B1%E9%9B%84%E5%82%B3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对《射雕英雄传》作品、人物和门派资料入口；不作为具体量级换算依据。"
      }
    ],
    commonLinks: [
      {
        type: "wiki",
        scope: "角色列表入口",
        label: "金庸 Wiki：射雕英雄传角色列表",
        url: "https://jinyong.fandom.com/zh/wiki/%E5%B0%84%E9%B5%B0%E8%8B%B1%E9%9B%84%E5%82%B3%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        claim: "用于交叉核对射雕角色姓名、阵营和基础身份。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录金庸共通 worldbook key/comment 中明确出现的射雕角色：黄蓉、洪七公、黄药师、梅超风、陈玄风、欧阳克、侯通海、彭连虎；郭靖、欧阳锋等未在本次名字字段命中，暂不越界添加。",
      versionPolicy: "按《射雕英雄传》原作主线记录；不把《神雕侠侣》后续年龄、身份和武学状态并入本作品面板。",
      highRisk: ["降龙十八掌", "打狗棒法", "弹指神通", "九阴白骨爪", "桃花岛武学", "丐帮帮主", "白驼山庄毒术", "蛇阵", "黄河帮", "三股钢叉", "暗器", "镔铁判官笔"],
      conservativeNotes: "五绝、帮主、岛主、九阴等名号不直接换算为大范围破坏；金庸武侠主要按人体、兵刃、内力、轻功和局部环境破坏记录。"
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

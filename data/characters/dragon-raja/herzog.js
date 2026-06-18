(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "herzog",
    name: "赫尔佐格",
    en: "Herzog",
    ja: "赫尔佐格",
    aliases: ["王将", "邦达列夫", "橘政宗", "博士"],
    affiliation: "猛鬼众 / 蛇岐八家暗线",
    grade: "幕后反派 / 白王血裔计划",
    appearances: ["黑月之潮"],
    timelineStatus: "黑月之潮 / 圣骸计划峰值",
    fandomSlug: "赫尔佐格",
    confidence: "review",
    evidenceType: ["资料入口", "仪式/外源峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["砖级", "街区级｜圣骸/白王血裔计划｜外源｜争议", "本体弱，峰值来自计划、圣骸和外部仪式。"],
        defense: ["凡人级", "街区级｜圣骸/替身/仪式条件｜外源｜争议", "本体防御低，峰值不能视为稳定肉身。"],
        movement: ["凡人速", "亚音速｜外部条件", "本体移动普通。"],
        reaction: ["凡人速", "亚音速｜布局/准备", "强项是布局，不是身体反应。"],
        vitality: ["凡人肉身", "街区级生命阈值｜圣骸/外源仪式｜争议", "生命状态峰值依赖仪式和外源。"],
        healing: ["无自愈", "快速自愈｜圣骸/外源条件｜争议", "恢复依赖外源仪式。"],
        energy: ["凡人能量", "街区级能量｜圣骸/仪式资源｜外源｜争议", "能量池来自外部计划和圣骸。"],
        energyRegen: ["无回能", "中速回能｜仪式/外源条件｜争议", "无独立战斗回能体系。"]
      }),
    notes: notes({
        penetration: "主要威胁来自幕后实验、操控和圣骸计划，不是本体战斗。",
        resistance: "本体脆弱，身份伪装和外源仪式才是生存关键。",
        sensing: "情报、操控、身份伪装和实验网络强。",
        tactics: "长期布局、欺骗、控制组织和利用他人极强。",
        special: "王将身份、圣骸计划、白王血裔实验、身份伪装。",
        weakness: "本体弱，计划失败或外源被切断后战力骤降。",
        setting: "按黑月之潮赫尔佐格记录。",
        basis: "worldbook只用于抽取赫尔佐格姓名；定级依据公开作品/资料入口，圣骸峰值标外源和争议。"
      })
  })]);
})();

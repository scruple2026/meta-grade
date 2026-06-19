(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/Apocrypha";

  registerWorkSource(WORK, {
    slug: "fate-apocrypha",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "角色定位",
        label: "Fate/Apocrypha Official USA Website: Kairi Shishigou",
        url: "https://fate-apocryphausa.com/sp/character/?chara=sisigou",
        lang: "en",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "官方角色页确认 Kairi Shishigou 是自由死灵魔术师、受魔术协会雇佣参加圣杯大战，并且是 Mordred 的御主。"
      }
    ],
    commonLinks: [
      {
        label: "Fate/Apocrypha Official USA Website",
        url: "https://fate-apocryphausa.com/",
        claim: "动画英文官方入口，用于核对作品与角色页来源。"
      },
      {
        label: "TYPE-MOON Wiki：Fate/Apocrypha",
        url: "https://typemoon.fandom.com/wiki/Fate/Apocrypha",
        claim: "作品和角色资料入口；具体定级按角色条目、装备与保守口径记录。"
      }
    ],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前因 Type-Moon DLC worldbook 的 key/comment 字段补入狮子劫界离；Apocrypha 从者中已在 FGO 或其他 Fate 作品收录者暂不重复拆分，后续如需 Apocrypha 版本再按证据单独补。",
      versionPolicy: "按圣杯大战时期记录；从者宝具、令咒、圣杯战争系统和 Mordred 的输出不并入御主本人的攻击、防御或生命体量，只在特殊权能、战术和能量支援中说明。",
      highRisk: ["从者", "宝具", "令咒", "死灵魔术", "Gandr", "Hydra 毒", "心脏爆弹", "空中庭园", "大圣杯"],
      conservativeNotes: "人类御主保持人类/魔术师面板；称号、阵营身份、供魔能力和从者协同不自动抬高本体主维度。"
    },
    sourcePolicy: "角色页/作品页是入口来源；高争议峰值后续应补原作卷话、集数、设定书或官方资料链接。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

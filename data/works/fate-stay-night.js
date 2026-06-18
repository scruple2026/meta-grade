(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "Fate/stay night";

  registerWorkSource(WORK, {
    slug: "fate-stay-night",
    originalLanguage: "ja",
    pageLabel: "TYPE-MOON Wiki 角色页",
    pageBase: "https://typemoon.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方入口",
        label: "Fate/stay night 15th Celebration Project",
        url: "https://fate-15th.com/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对 Fate/stay night 作品与主要角色入口；不作为单独量级换算依据。"
      },
      {
        type: "official",
        scope: "动画官方角色入口",
        label: "Fate/stay night [Unlimited Blade Works] Character",
        url: "https://www.fate-sn.com/ubw/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        ratingEvidence: false,
        claim: "用于核对 UBW 动画主要御主与从者角色定位。"
      }
    ],
    commonLinks: [
      {
        label: "TYPE-MOON Wiki：Fate/stay night",
        url: "https://typemoon.fandom.com/wiki/Fate/stay_night",
        claim: "作品和角色资料入口；具体量级按角色页、路线表现和保守口径记录。"
      }
    ],
    scaleNotes: {
      scope: "当前收录命运之夜 worldbook 索引字段中的 Fate/stay night 本篇核心角色：卫宫士郎、阿尔托莉雅、远坂凛、间桐樱、伊莉雅、言峰绮礼、间桐慎二、间桐脏砚、葛木宗一郎，以及 Archer、Lancer、Rider、Caster、Assassin、Berserker、吉尔伽美什和 Heaven's Feel 真Assassin咒腕哈桑。",
      versionPolicy: "按第五次圣杯战争记录；Fate/Zero、FGO、二世事件簿等时间线不并入本作品面板。黑化、圣杯泥、HF影、投影过载、令咒和宝具真名解放均作为条件峰值或特殊项处理。",
      highRisk: ["宝具", "固有结界", "王之财宝", "Ea", "Excalibur", "令咒", "圣杯泥", "影", "十二试炼", "破万符", "妄想心音", "气息遮断"],
      conservativeNotes: "从者称号、神话原型和宝具名不直接抬到城市级以上；缺少具体破坏范围时，常规白刃战和魔术战按局部破坏、穿透、结界和特殊杀伤分开记录。"
    },
    sourcePolicy: "官方入口与 TYPE-MOON Wiki 是资料入口；高争议宝具和路线峰值后续应补原作场景、动画集数或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["月姬"];
  if (!work) throw new Error("月姬 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ciel",
    name: "希耶尔",
    en: "Ciel",
    ja: "シエル",
    aliases: ["艾蕾西娅", "雪儿", "学姐", "代行者希耶尔"],
    affiliation: "圣堂教会 / 埋葬机关",
    grade: "女主角 / 代行者",
    appearances: ["月姬主线", "A piece of blue glass moon"],
    timelineStatus: "月姬主线 / 代行者状态",
    fandomSlug: "Ciel",
    confidence: "review",
    evidenceType: ["角色页入口", "作品页入口", "圣堂教会/不死性", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Ciel",
        url: "https://typemoon.fandom.com/wiki/Ciel",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对希耶尔、圣堂教会和月姬身份入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙级", "楼级｜第七圣典/黑键/洗礼咏唱｜争议", "代行者武装和术式火力强，峰值来自装备与术式。"],
      defense: ["墙级", "房屋级｜代行者体魄/不死性｜争议", "承压强且存在特殊不死机制，但不等同高硬度肉身。"],
      movement: ["亚音速", "音速｜代行者机动｜争议", "高速近战与追击强。"],
      reaction: ["亚音速", "音速｜代行者战斗经验｜争议", "对吸血种和异能战经验丰富。"],
      vitality: ["精锐韧体", "房屋级生命阈值｜不死性/罗亚关联｜特殊", "生命状态特殊，按条件生命机制记录。"],
      healing: ["中速自愈", "极速自愈｜不死性/罗亚关联｜特殊", "高恢复来自特殊不死机制，不是普通肉体再生。"],
      energy: ["房屋级能量", "楼级能量｜圣堂教会武装/术式｜争议", "装备、黑键和术式提供高资源上限。"],
      energyRegen: ["中速回能", "快速回能｜术式/装备准备", "续航依赖装备、术式和准备。"]
    }),
    notes: notes({
      penetration: "黑键、第七圣典和洗礼咏唱偏对吸血种/死徒的特殊杀伤，不等同普适大范围破坏。",
      resistance: "不死性和代行者训练提升生存；对机制解除、封印或针对性规则能力仍需单独判断。",
      sensing: "圣堂教会追猎经验、对吸血种和异常目标的索敌能力强。",
      tactics: "装备切换、远近战结合和针对吸血种经验丰富，准备状态影响很大。",
      special: "第七圣典、黑键、洗礼咏唱、埋葬机关训练、罗亚关联不死性。",
      weakness: "高峰值依赖装备和特殊不死条件；对非吸血种目标的特攻性质不能泛化。",
      setting: "按《月姬》主线希耶尔记录。",
      basis: "worldbook只用于从comment/key抽取希耶尔姓名；定级依据TYPE-MOON Wiki公开入口，不死性和第七圣典作为特殊机制/条件峰值处理。"
    })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["月姬"];
  if (!work) throw new Error("月姬 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "arcueid-brunestud",
    name: "爱尔奎特",
    en: "Arcueid Brunestud",
    ja: "アルクェイド・ブリュンスタッド",
    aliases: ["爱尔奎特·布伦史塔德", "白姬", "真祖的公主", "Arcueid"],
    affiliation: "真祖 / 吸血种",
    grade: "女主角 / 真祖",
    appearances: ["月姬主线", "A piece of blue glass moon"],
    timelineStatus: "月姬主线 / 非Archetype: Earth",
    fandomSlug: "Arcueid_Brunestud",
    confidence: "review",
    evidenceType: ["角色页入口", "作品页入口", "真祖/高风险机制", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "TYPE-MOON Wiki：Arcueid Brunestud",
        url: "https://typemoon.fandom.com/wiki/Arcueid_Brunestud",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对爱尔奎特、真祖和月姬身份入口；具体量级按保守规则处理。"
      }
    ],
    dimensions: dims({
      attack: ["房屋级", "街区级｜真祖/空想具现化｜争议", "肉体和异能远超常人；真祖权能作为高风险条件峰值，不写无限或天体档。"],
      defense: ["房屋级", "街区级｜真祖体质/恢复｜争议", "承伤和恢复强，但需区分被削弱状态与完整权能。"],
      movement: ["亚音速", "音速｜真祖身体能力｜争议", "高速近战和追击能力强，缺少足证时不写光速。"],
      reaction: ["亚音速", "音速｜真祖身体能力｜争议", "反应与肉体机能极高。"],
      vitality: ["房屋级生命阈值", "街区级生命阈值｜真祖生命结构｜争议", "生命结构特殊，仍按月姬本篇保守记录。"],
      healing: ["快速自愈", "极速自愈｜真祖恢复｜争议", "强恢复是核心优势，但不是无限再生。"],
      energy: ["楼宇级能量", "街区级能量｜真祖/空想具现化｜争议", "总资源高，条件峰值来自真祖权能。"],
      energyRegen: ["快速回能", "极速回能｜真祖恢复｜争议", "恢复和回能极强但受状态限制。"]
    }),
    notes: notes({
      penetration: "真祖肉体、爪击和空想具现化相关能力能造成高单体压制；不直接等同大范围城市破坏。攻击速度：爪击取决于近身接战和肢体出手，空想具现化属于能力发动与现象形成，不能按爪击或视觉效果换算。",
      resistance: "强恢复与生命结构特殊，但被直死魔眼、吸血种弱点、状态削弱等机制克制。",
      sensing: "吸血种感官和对异常存在的感知强。",
      tactics: "依赖压倒性身体能力和恢复进行正面压制，状态削弱时战术容错下降。",
      special: "真祖、吸血种体质、空想具现化、强恢复、Archetype: Earth相关高风险设定。",
      weakness: "状态变化极大，非Archetype: Earth主面板不采用跨作高峰；直死魔眼等规则杀伤风险高。",
      setting: "按《月姬》主线爱尔奎特记录；不并入FGO或Archetype: Earth状态。",
      basis: "worldbook只用于从comment/key抽取爱尔奎特姓名；定级依据TYPE-MOON Wiki公开入口，真祖权能作为争议峰值和特殊项处理。"
    })
  })]);
})();

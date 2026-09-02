(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鲁邦三世"];
  if (!work) throw new Error("鲁邦三世 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "arsene-lupin-iii",
    name: "鲁邦三世",
    en: "Arsene Lupin III",
    ja: "ルパン三世",
    aliases: ["Lupin III", "Lupin", "ルパン", "怪盗鲁邦"],
    affiliation: "鲁邦一伙",
    grade: "怪盗 / 变装与潜入专家",
    appearances: ["鲁邦三世 系列"],
    timelineStatus: "系列综合 / 怪盗行动装备携带",
    fandomSlug: "Lupin_III",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Lupin III Part 6: Characters",
      url: "https://lupin-3rd.net/anime/part6/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《鲁邦三世》动画官方角色入口；直连可能因站点策略不可读。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Lupin III Wiki: Lupin III",
      url: "https://lupin.fandom.com/wiki/Lupin_III",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对鲁邦三世的怪盗身份、枪械、变装、潜入和主要搭档资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的鲁邦三世 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "墙体级｜枪械/爆炸物/机关｜装备/准备", "本体攻击为人类尺度；峰值来自枪械、炸药、机关和准备。"],
        defense: ["凡人级", "砖块级｜防具/规避/逃脱", "生还依赖规避、诡计和装备，不是高硬度肉身。"],
        movement: ["凡人速", "亚音速｜跑酷/载具/逃脱", "潜入、攀爬、跑路和载具逃脱强于普通人。"],
        reaction: ["凡人速", "亚音速｜枪战/陷阱应变", "枪战、陷阱和警追中反应优秀。"],
        vitality: ["凡人肉身", "强化凡体｜怪盗生还经历", "生命体量仍为训练人类。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗和休整。"],
        energy: ["凡人能量", "墙体级能量｜装备/弹药/机关资源", "资源来自工具、枪械、爆炸物、载具和准备。"],
        energyRegen: ["无回能", "缓慢回能｜补给/准备", "依赖补给、换装和事前准备。"]
      }),
    notes: notes({
        penetration: "枪械、爆炸物、机关、变装和潜入工具能越过普通防护，常靠条件制胜而非硬破坏。攻击速度：鲁邦的枪击按瞄准、扣发和弹丸飞行判断，爆炸物与机关另看布置和触发；变装、潜入工具本身没有攻击速度。",
        resistance: "本体普通人类，靠逃脱路线、伪装、防具、载具和反追踪规避伤害。",
        sensing: "警戒、反侦察、盗窃目标识别、机关判断和临场读局强。",
        tactics: "擅长变装潜入、欺骗、盗窃路线设计、即兴逃脱和利用对手心理。",
        special: "变装、开锁、潜入、枪械、载具、盗窃计划和团队协作。",
        weakness: "直接硬碰硬面板普通，装备被剥离或无法准备时风险显著上升。",
        setting: "按系列综合的怪盗鲁邦三世记录。",
        basis: "worldbook只用于抽取鲁邦三世姓名；定级依据官方角色入口和Lupin III Wiki角色入口，怪盗名声和夸张逃脱不转化为肉身面板。"
      })
  })]);
})();

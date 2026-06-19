(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鲁邦三世"];
  if (!work) throw new Error("鲁邦三世 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "fujiko-mine",
    name: "峰不二子",
    en: "Fujiko Mine",
    ja: "峰 不二子",
    aliases: ["Fujiko", "Mine Fujiko", "不二子", "女盗贼"],
    affiliation: "独立盗贼 / 鲁邦一伙关联者",
    grade: "盗贼 / 情报贩子 / 欺骗专家",
    appearances: ["鲁邦三世 系列"],
    timelineStatus: "系列综合 / 盗贼行动装备携带",
    fandomSlug: "Fujiko_Mine",
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
      label: "Lupin III Wiki: Fujiko Mine",
      url: "https://lupin.fandom.com/wiki/Fujiko_Mine",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对峰不二子的盗贼身份、枪械、摩托、欺骗和情报活动。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的峰不二子 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜枪械/爆炸物/机关｜装备", "常态为训练人类；峰值来自枪械、炸药和盗窃装备。"],
        defense: ["凡人级", "凡人级｜规避/伪装", "本体防御普通，主要靠伪装、情报和逃脱。"],
        movement: ["凡人速", "亚音速｜摩托/潜入/短距闪避", "潜入、驾驶和逃脱机动强。"],
        reaction: ["凡人速", "亚音速｜枪战/欺骗应变", "枪战和局势反转中应变优秀。"],
        vitality: ["凡人肉身", "强化凡体｜盗贼生还经历", "训练者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗和休整。"],
        energy: ["凡人能量", "砖级能量｜枪械/工具/载具", "资源来自工具、枪械、载具和情报准备。"],
        energyRegen: ["无回能", "缓慢回能｜补给/准备", "依赖补给和事前准备。"]
      }),
    notes: notes({
        penetration: "枪械、炸药、陷阱和情报欺骗可提高杀伤或越防效果。",
        resistance: "本体普通人类，靠伪装、谈判、诱导和逃脱路线规避伤害。",
        sensing: "情报搜集、目标价值判断、读人和反侦察能力强。",
        tactics: "擅长色诱、背刺、交易、临场倒戈、独立盗窃和引导他人替自己承担风险。",
        special: "变装、欺骗、枪械、摩托驾驶、情报交易、盗窃计划。",
        weakness: "正面硬战能力有限，过度依赖情报、装备和局势操控。",
        setting: "按系列综合的峰不二子记录。",
        basis: "worldbook只用于抽取峰不二子姓名；定级依据官方角色入口和Lupin III Wiki角色入口，魅力和情报优势写入战术，不抬身体面板。"
      })
  })]);
})();

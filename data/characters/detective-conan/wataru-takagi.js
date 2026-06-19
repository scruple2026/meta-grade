(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["名侦探柯南"];
  if (!work) throw new Error("名侦探柯南 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "wataru-takagi",
    name: "高木涉",
    en: "Wataru Takagi",
    ja: "高木 渉",
    aliases: ["Detective Takagi", "Takagi", "高木刑警"],
    affiliation: "警视厅搜查一课",
    grade: "巡查部长 / 刑警",
    appearances: ["名侦探柯南"],
    timelineStatus: "主线综合 / 警视厅刑警",
    fandomSlug: "Wataru_Takagi",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "YTV: 名探偵コナン キャラクター",
      url: "https://www.ytv.co.jp/conan/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《名侦探柯南》动画官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Detective Conan World: Wataru Takagi",
      url: "https://www.detectiveconanworld.com/wiki/Wataru_Takagi",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对高木涉的警视厅刑警身份、行动能力和主要事件。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的高木涉 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜配枪/警械/擒拿｜装备", "常态为训练警察；峰值来自配枪、警械和擒拿。"],
        defense: ["凡人级", "凡人级｜警察训练/规避", "无超常防御。"],
        movement: ["凡人速", "亚音速｜追捕/短距爆发", "追捕和危机行动强于普通人。"],
        reaction: ["凡人速", "亚音速｜刑警应变", "枪战、追捕和救援中的应变强于普通人。"],
        vitality: ["凡人肉身", "强化凡体｜警察训练/生还经历", "训练者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗。"],
        energy: ["凡人能量", "砖级能量｜配枪/警用资源", "资源来自体力、配枪和警用装备。"],
        energyRegen: ["无回能", "缓慢回能｜补给/支援", "依赖休息和警队补给。"]
      }),
    notes: notes({
        penetration: "配枪、警械、擒拿和近身追捕可制伏普通犯人，枪械为装备峰值。",
        resistance: "普通人类肉身，靠掩体、防具和队友支援降低伤害。",
        sensing: "现场观察、追踪、救援判断和刑侦协作较强。",
        tactics: "擅长执行目暮指挥、追捕、保护人质和临场救援。",
        special: "警视厅刑警训练、配枪、警械、团队协作和案件经验。",
        weakness: "单兵火力和防御有限，面对重武器或超常对手依赖团队和装备。",
        setting: "按主线综合的高木涉记录。",
        basis: "worldbook只用于抽取高木涉姓名；定级依据官方角色入口和Detective Conan World角色入口，警衔和剧情生还不自动提高身体面板。"
      })
  })]);
})();

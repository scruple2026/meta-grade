(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["名侦探柯南"];
  if (!work) throw new Error("名侦探柯南 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "juzo-megure",
    name: "目暮十三",
    en: "Juzo Megure",
    ja: "目暮 十三",
    aliases: ["Inspector Megure", "Megure", "目暮警部"],
    affiliation: "警视厅搜查一课",
    grade: "警部 / 刑警指挥官",
    appearances: ["名侦探柯南"],
    timelineStatus: "主线综合 / 警视厅警部",
    fandomSlug: "Juzo_Megure",
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
      label: "Detective Conan World: Juzo Megure",
      url: "https://www.detectiveconanworld.com/wiki/Juzo_Megure",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对目暮十三的警视厅搜查一课警部身份、刑警经历和案件指挥。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的目暮十三 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜配枪/警械｜装备", "常态为普通刑警体能；峰值来自警用装备。"],
        defense: ["凡人级", "凡人级｜成年人/警察训练", "无超常防御。"],
        movement: ["凡人速", "凡人速", "移动维持普通成年人尺度。"],
        reaction: ["凡人速", "凡人速｜刑警经验", "危机处理来自经验，不写成超人反应。"],
        vitality: ["凡人肉身", "强化凡体｜成年人/警察训练", "成年人和刑警训练者生命体量。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "恢复依赖普通医疗。"],
        energy: ["凡人能量", "砖级能量｜配枪/警用资源", "资源来自警用装备和现场支援。"],
        energyRegen: ["无回能", "缓慢回能｜补给/支援", "依赖警队补给和支援。"]
      }),
    notes: notes({
        penetration: "配枪、警械和警队支援可提高制伏能力，但不代表本体攻击。",
        resistance: "普通人类肉身，依赖防弹装备、掩体和队友支援。",
        sensing: "案件现场统筹、嫌疑人控制和刑侦经验突出。",
        tactics: "擅长警力调度、封锁现场、询问和维持案件秩序。",
        special: "警视厅搜查一课警部权限、警队资源和刑警经验。",
        weakness: "单兵战斗面板普通，面对超常或重火力对手依赖警队资源。",
        setting: "按主线综合的目暮十三记录。",
        basis: "worldbook只用于抽取目暮十三姓名；定级依据官方角色入口和Detective Conan World角色入口，警察职阶不自动提高身体面板。"
      })
  })]);
})();

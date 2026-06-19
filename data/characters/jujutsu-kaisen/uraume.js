(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "uraume",
      name: "里梅",
      en: "Uraume",
      ja: "裏梅",
      affiliation: "宿傩阵营",
      grade: "古代术师 / 冰凝咒法",
      appearances: ["涩谷事变", "死灭回游", "新宿决战"],
      timelineStatus: "新宿决战",
      aliases: ["裏梅", "Uraume", "凍星", "The Frozen Star", "冰凝咒法"],
      fandomSlug: "Uraume",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Uraume",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Uraume",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对里梅、宿傩下属、古代诅咒师和冰凝咒法；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战新宿决战 worldbook 的新宿决战高频角色 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜冰凝咒法/大范围冻结｜争议", "冰凝咒法可大范围冻结与控场，但不把宿傩下属身份直接抬档。"],
        defense: ["墙级", "楼级｜咒力防护/反转术式", "咒力强化和恢复提高容错，硬防不按特级咒灵处理。"],
        movement: ["亚音速", "音速", "可参与高阶术师战与战场转移，速度保守置于咒术中高端。"],
        reaction: ["亚音速", "音速", "能应对涩谷至新宿阶段的高阶术师交锋。"],
        vitality: ["精锐韧体", "精锐韧体｜古代术师/受肉体", "受肉体和咒力强化提升续战，但不是大型生命结构。"],
        healing: ["中速自愈｜反转术式", "快速自愈｜反转术式", "可用反转术式处理伤势，仍受咒力和战斗压力限制。"],
        energy: ["楼级能量", "街区级能量｜冰凝咒法", "咒力资源足以支撑大范围冰系术式和长时间对抗。"],
        energyRegen: ["快速回能", "快速回能｜咒力运用", "古代术师咒力运用稳定，但不是无限回能。"]
      }),
      notes: notes({
        penetration: "冰凝咒法偏冻结、束缚、区域控场和低温伤害，单点穿透不等同纯破坏规模。",
        resistance: "咒力强化和反转术式提高承伤；面对领域、空间切割和高阶必中仍有风险。",
        sensing: "对宿傩、羂索阵营行动和高阶咒力战场熟悉，常规索敌不按全域处理。",
        tactics: "擅长支援宿傩、保存资源和用冰术限制敌方机动；忠诚目标会影响行动优先级。",
        special: "冰凝咒法、大范围冻结、反转术式、古代术师经验、宿傩阵营协同。",
        weakness: "术式依赖咒力和发动窗口；面对高热、领域压制、空间攻击或远高量级火力需单独判断。",
        setting: "按新宿决战前后里梅记录，宿傩下属身份不直接作为主面板证据。",
        basis: "worldbook只用于抽取里梅姓名；定级依据公开角色资料入口和涩谷至新宿阶段冰凝咒法表现。"
      })
    })
  ]);
})();

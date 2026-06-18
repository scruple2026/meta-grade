(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gakushu-asano",
      name: "浅野学秀",
      en: "Gakushu Asano",
      ja: "浅野学秀",
      affiliation: "椚丘中学主校区",
      grade: "学生会长 / 主校区顶尖学生",
      appearances: ["E班暗杀计划"],
      timelineStatus: "主校区竞争期",
      aliases: ["浅野", "学秀", "Asano"],
      fandomSlug: "Gakush%C5%AB_Asano",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜体术/团队资源", "直接战斗有限，靠智力、体能和主校区资源。"],
        defense: ["凡人级", "凡人级", "普通学生肉身。"],
        movement: ["凡人速", "凡人速｜训练", "学生机动。"],
        reaction: ["凡人速", "凡人速｜判断", "判断和学习能力强。"],
        vitality: ["凡人肉身", "强化凡体｜训练", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜团队/资源", "资源来自主校区、学习能力和团队组织。"],
        energyRegen: ["中速回能", "缓慢回能｜组织资源", "外部资源依赖组织条件。"]
      }),
      notes: notes({
        penetration: "直接攻击不高，主要靠策略、组织、学习和心理施压。",
        resistance: "无特殊抗性。",
        sensing: "观察、学习和竞争判断强。",
        tactics: "学生会长型组织能力和智力竞争是核心强项。",
        special: "高智力、主校区组织资源、竞争策略。",
        weakness: "缺少杀老师/E班暗杀训练的异常战斗资源，正面武力有限。",
        setting: "按E班暗杀计划主校区竞争期记录。",
        basis: "worldbook只用于抽取浅野学秀姓名；定级依据官方动画入口与Assassination Classroom Wiki资料入口。"
      })
    })
  ]);
})();

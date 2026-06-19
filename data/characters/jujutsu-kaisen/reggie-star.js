(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "reggie-star",
      name: "雷吉·史达",
      en: "Reggie Star",
      ja: "レジィ・スター",
      affiliation: "死灭回游泳者",
      grade: "术师 / 再契象",
      appearances: ["死灭回游"],
      timelineStatus: "死灭回游东京第1结界",
      aliases: ["雷吉", "雷吉·史達", "史达", "Reggie", "Reggie Star", "再契象", "Contractual Re-Creation"],
      fandomSlug: "Reggie_Star",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Reggie Star",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Reggie_Star",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对雷吉·史达、死灭回游泳者、再契象术式和东京第1结界战斗；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的雷吉·史达 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜再契象/载具与重物", "通过收据再现物品、载具和环境压制，峰值偏战术堆叠而非纯拳脚破坏。"],
        defense: ["墙级", "楼级｜咒力防护/物资防护", "咒力防护和道具调度提高容错，本体仍是人类术师。"],
        movement: ["亚音速", "音速｜术师体术/道具机动", "近战和道具机动可应对伏黑战，非速度特化。"],
        reaction: ["亚音速", "音速｜战术应对", "可处理式神、影法术和近中距突袭。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "人类术师生命体量，承伤强但可被重创。"],
        healing: ["无自愈", "无自愈", "缺少稳定自愈表现。"],
        energy: ["墙级能量", "楼级能量｜收据库存/再契象", "资源上限与持有收据、咒力和环境准备相关。"],
        energyRegen: ["中速回能", "快速回能｜资源管理", "能通过术式资源管理延长战斗，但不是无限续航。"]
      }),
      notes: notes({
        penetration: "再契象偏召出实体物资、重物、载具和补给进行压制；杀伤来自环境与物体冲击。",
        resistance: "咒力强化和道具防护有效，但缺少反转术式与高阶硬防。",
        sensing: "常规咒力感知和战场判断，索敌不强。",
        tactics: "经验丰富，擅长用收据库存、心理战和规则理解压迫对手。",
        special: "再契象、收据物品再现、物资调度、简易领域/对领域防御语境。",
        weakness: "术式依赖收据和可再现资源；被拖入无资源或被解析术式规则后上限下降。",
        setting: "按死灭回游东京第1结界雷吉记录。",
        basis: "worldbook只用于抽取雷吉·史达姓名；定级依据公开角色资料入口和死灭回游东京第1结界表现。"
      })
    })
  ]);
})();

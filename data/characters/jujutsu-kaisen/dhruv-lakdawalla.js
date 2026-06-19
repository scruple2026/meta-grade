(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dhruv-lakdawalla",
      name: "多鲁布·拉克达瓦拉",
      en: "Dhruv Lakdawalla",
      ja: "ドルゥヴ・ラクダワラ",
      affiliation: "死灭回游泳者 / 仙台结界",
      grade: "古代术师 / 式神轨道术式",
      appearances: ["死灭回游"],
      timelineStatus: "死灭回游仙台结界",
      aliases: ["多鲁布", "多鲁布·拉克达瓦拉", "Dhruv", "Dhruv Lakdawalla", "式神轨道", "仙台结界"],
      fandomSlug: "Dhruv_Lakdawalla",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Dhruv Lakdawalla",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Dhruv_Lakdawalla",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对多鲁布·拉克达瓦拉、仙台结界、古代术师和式神轨道领域语境；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的仙台结界/多鲁布·拉克达瓦拉 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜式神轨道领域｜争议", "式神轨迹形成领域式压制，直接展示较少，保守记录。"],
        defense: ["墙级", "楼级｜咒力防护/式神", "古代术师和式神防护有威胁，但被乙骨速杀，硬防不抬高。"],
        movement: ["亚音速", "音速｜式神与术师机动", "本体机动资料有限，按高阶泳者保守记录。"],
        reaction: ["亚音速", "音速｜古代术师", "战斗反应按仙台结界高阶泳者处理。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "本体生命体量资料有限，不因传说战绩抬档。"],
        healing: ["无自愈", "无自愈", "缺少稳定自愈表现。"],
        energy: ["墙级能量", "楼级能量｜式神轨道", "咒力资源支撑式神轨迹和领域式控制。"],
        energyRegen: ["中速回能", "快速回能｜古代术师", "续航按高阶泳者保守记录。"]
      }),
      notes: notes({
        penetration: "式神轨迹可形成领域式攻击范围，偏空间占位和路径压制。",
        resistance: "式神与咒力防护提供战场控制，但本体被乙骨迅速击败，不能抬高硬防。",
        sensing: "式神运行可辅助范围控制，精密索敌资料不足。",
        tactics: "古代术师经验和式神布阵是核心，直接战斗细节公开资料有限。",
        special: "式神轨道、领域式路径控制、古代术师受肉、仙台结界四强语境。",
        weakness: "本体战斗表现少且败于乙骨；被高速突入或破坏式神控制时风险高。",
        setting: "按死灭回游仙台结界多鲁布记录。",
        basis: "worldbook只用于抽取多鲁布·拉克达瓦拉姓名；定级依据公开角色资料入口和仙台结界角色定位，缺少直接战斗细节时保守处理。"
      })
    })
  ]);
})();

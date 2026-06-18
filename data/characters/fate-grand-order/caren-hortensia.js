(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "caren-hortensia",
      name: "卡莲·奥尔黛西亚",
      en: "Caren Hortensia",
      ja: "カレン・オルテンシア",
      affiliation: "迦勒底召唤 / 圣职者",
      grade: "Ruler / Amor (Caren)",
      appearances: ["Fate/Grand Order", "Fate/hollow ataraxia"],
      timelineStatus: "FGO 召唤灵基 / Ruler",
      aliases: ["卡莲", "言峰花莲", "Amor", "Amour", "Caren Hortensia"],
      fandomSlug: "Amour",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Amour",
          url: "https://typemoon.fandom.com/wiki/Amour",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO Amor/Caren、Ruler 灵基、圣职者/爱神语境和召唤范围。"
        },
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Caren Hortensia",
          url: "https://typemoon.fandom.com/wiki/Caren_Hortensia",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对卡莲原角色身份；不单独作为 FGO 灵基量级依据。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的卡莲·奥尔黛西亚 key/comment 补入；未采用 worldbook 正文描述。",
        "按 FGO Amor/Caren 召唤灵基记录，Fate/hollow ataraxia 的剧情状态不并入常态裸面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜Ruler灵基/爱神宝具｜争议", "圣职者与爱神灵基提供特殊杀伤和支援，破坏范围保守处理。"],
        defense: ["房屋级", "楼级｜Ruler灵基/圣职者防护", "Ruler 灵基和圣职者性质提供防护，但不是重装硬抗型。"],
        movement: ["亚音速", "音速｜从者机动", "Ruler 灵基下具备从者级机动。"],
        reaction: ["音速", "超音速｜从者反应/圣职者判断", "从者反应和圣职者经验支撑战斗应对。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/圣职者", "灵基提高生命体量，FHA剧情性质不并入。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/支援", "恢复依赖灵基、供魔和支援。"],
        energy: ["房屋级能量", "楼级能量｜Ruler灵基/宝具", "能量主要服务于特殊宝具和支援。"],
        energyRegen: ["中速回能", "快速回能｜供魔/支援循环", "供魔支撑持续施术。"]
      }),
      notes: notes({
        penetration: "圣职者术式、爱神灵基和宝具偏特殊杀伤/支援，不等同于大范围破坏。",
        resistance: "Ruler 灵基、圣职者抗性和特殊支援存在；肉身硬度不突出。",
        sensing: "从者感知和圣职者经验可识别灵体、诅咒和异常状态。",
        tactics: "擅长支援、牵制、特殊状态利用和以圣职者知识克制目标。",
        special: "Ruler 灵基、Amor/Caren、圣职者术式、爱神相关宝具。",
        weakness: "高价值效果依赖 FGO 灵基和宝具窗口；原作剧情状态不混入常态。",
        setting: "按 FGO Amor/Caren Ruler 召唤灵基记录。",
        basis: "worldbook只用于抽取卡莲姓名；定级依据公开角色资料入口和 FGO Ruler 灵基，特殊支援不抬高破坏档。"
      })
    })
  ]);
})();

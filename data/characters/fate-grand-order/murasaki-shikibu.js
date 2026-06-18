(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "murasaki-shikibu",
      name: "紫式部",
      en: "Murasaki Shikibu",
      ja: "紫式部",
      affiliation: "迦勒底召唤 / 平安作家",
      grade: "Caster / 文学系从者",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Caster",
      aliases: ["式部", "藤原香子", "香子", "Murasaki Shikibu"],
      fandomSlug: "Murasaki_Shikibu",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Murasaki Shikibu",
          url: "https://typemoon.fandom.com/wiki/Murasaki_Shikibu",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO 紫式部 Caster 灵基、文学/书写魔术、宝具和召唤范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的紫式部 key/comment 补入；未采用 worldbook 正文描述。",
        "Rider 泳装灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜宝具/对魔性支援｜争议", "Caster 输出以术式、书写和宝具支援为主，范围破坏保守处理。"],
        defense: ["房屋级", "楼级｜术式防护/灵基", "防御依赖 Caster 灵基和魔术防护，不是正面硬抗型。"],
        movement: ["亚音速", "音速｜从者机动", "Caster 机动保守低于近战从者。"],
        reaction: ["音速", "超音速｜从者反应/魔术应对", "从者反应和魔术处理速度支撑战斗应对。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/供魔", "灵基提高续战，但肉身面板不突出。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/支援", "恢复依赖灵基、供魔和队伍支援。"],
        energy: ["房屋级能量", "楼级能量｜宝具/术式资源", "魔力主要服务于术式、书写和宝具，不写成高破坏总量。"],
        energyRegen: ["中速回能", "快速回能｜供魔/术式循环", "供魔支撑持续施术。"]
      }),
      notes: notes({
        penetration: "书写、文学和对魔性相关术式偏控制/支援，不等同于纯大范围破坏。",
        resistance: "Caster 灵基和魔术防护存在，但近战承压能力有限。",
        sensing: "从者感知、Caster 魔术和资料/文字相关能力可辅助识别目标。",
        tactics: "擅长情报、术式准备、辅助和针对魔性目标的战场支援。",
        special: "Caster 灵基、文学/书写魔术、宝具、对魔性相关支援。",
        weakness: "正面近战与机动不是强项；泳装 Rider 灵基不计入本条。",
        setting: "按 FGO Caster 紫式部召唤灵基记录。",
        basis: "worldbook只用于抽取紫式部姓名；定级依据公开角色资料入口和 FGO Caster 灵基，控制/支援特性不抬高破坏档。"
      })
    })
  ]);
})();

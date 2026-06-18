(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sieg",
      name: "齐格",
      en: "Sieg",
      ja: "ジーク",
      affiliation: "迦勒底召唤 / Fate/Apocrypha",
      grade: "Caster / 人造人",
      appearances: ["Fate/Grand Order", "Fate/Apocrypha"],
      timelineStatus: "FGO 召唤灵基 / Caster",
      aliases: ["齐格", "人造人", "法夫纳", "Sieg"],
      fandomSlug: "Sieg",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Sieg",
          url: "https://typemoon.fandom.com/wiki/Sieg",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对齐格、Fate/Apocrypha、FGO Caster 灵基、人造人/法夫纳和宝具语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的齐格 key/comment 补入；未采用 worldbook 正文描述。",
        "与齐格飞分开记录；法夫纳/大圣杯相关剧情状态只作条件特殊项。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜法夫纳/宝具｜条件｜争议", "Caster 灵基常态有限，法夫纳和宝具峰值需标条件。"],
        defense: ["房屋级", "街区级｜法夫纳/灵基｜条件", "人造人灵基和法夫纳相关状态提高防御。"],
        movement: ["亚音速", "音速｜从者机动/龙化条件", "Caster 灵基机动保守记录，龙化另作条件。"],
        reaction: ["音速", "超音速｜从者反应/龙化条件", "从者反应和龙化条件提高应对。"],
        vitality: ["房屋级生命阈值", "街区级生命阈值｜法夫纳/特殊生命结构｜争议", "生命体量受人造人与法夫纳状态影响，但不与齐格飞合并。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜法夫纳/供魔｜条件", "恢复依赖灵基、供魔和特殊状态。"],
        energy: ["房屋级能量", "街区级能量｜宝具/法夫纳", "能量峰值来自宝具与法夫纳相关状态。"],
        energyRegen: ["中速回能", "快速回能｜供魔/特殊状态", "供魔和特殊状态支撑续战。"]
      }),
      notes: notes({
        penetration: "宝具、龙化/法夫纳相关状态可提供高爆发，常态术式输出较有限。",
        resistance: "人造人灵基与法夫纳状态提高承伤；常态不等于恶龙本体全量。",
        sensing: "从者感知和特殊生命结构帮助识别魔力/敌意。",
        tactics: "战斗经验来自 Apocrypha 事件和召唤灵基，偏保护同伴与关键爆发。",
        special: "Caster 灵基、人造人、法夫纳相关状态、Fate/Apocrypha 大圣杯语境。",
        weakness: "高峰值依赖特殊状态和剧情条件；不并入齐格飞的恶龙血铠。",
        setting: "按 FGO Caster 齐格召唤灵基记录，Apocrypha 资料作角色来源。",
        basis: "worldbook只用于抽取齐格姓名；定级依据公开角色资料入口，法夫纳相关内容作为条件峰值。"
      })
    })
  ]);
})();

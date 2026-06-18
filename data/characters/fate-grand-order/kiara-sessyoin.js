(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kiara-sessyoin",
      name: "杀生院祈荒",
      en: "Kiara Sessyoin",
      ja: "殺生院キアラ",
      affiliation: "迦勒底召唤 / Alter Ego",
      grade: "Alter Ego / 魔性菩萨",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Alter Ego",
      aliases: ["杀生院", "祈荒", "魔性菩萨", "Kiara", "Kiara Sessyoin", "Beast III/R"],
      fandomSlug: "Kiara_Sessyoin_%28Alter_Ego%29",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Kiara Sessyoin (Alter Ego)",
          url: "https://typemoon.fandom.com/wiki/Kiara_Sessyoin_%28Alter_Ego%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO 杀生院祈荒 Alter Ego 灵基、魔性菩萨、Beast III/R 关联和宝具语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的杀生院祈荒/Beast III/R key/comment 补入；未采用 worldbook 正文描述。",
        "MoonCancer 泳装/Lily 等替代灵基未并入本条主面板；Beast III/R 作为剧情形态和特殊权能边界说明。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/魔性菩萨/Beast关联｜争议", "Alter Ego 灵基具备高威胁权能，但不把 Beast III/R 全量直接写入常态。"],
        defense: ["楼级", "街区级｜灵基/魔性菩萨", "防护来自灵基、精神/欲望干涉和魔性菩萨性质。"],
        movement: ["音速", "超音速｜从者机动/权能辅助", "机动按从者灵基记录，权能位移另标条件。"],
        reaction: ["音速", "超音速｜从者反应/精神干涉", "反应含从者级行动与精神层面操控判断。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/Beast残滓", "生命结构与 Beast 关联提高难杀程度，但召唤灵基仍有限制。"],
        healing: ["快速自愈｜灵基/魔性", "极速自愈｜权能/条件", "恢复和自我维持强，但依赖灵基、权能和剧情条件。"],
        energy: ["楼级能量", "街区级能量｜宝具/Beast关联", "能量池和权能威胁高，未将 Beast 阶剧情规模无限外推。"],
        energyRegen: ["快速回能｜灵基/供魔", "极速回能｜权能/条件", "权能条件下续航强；若只按召唤灵基则需保守。"]
      }),
      notes: notes({
        penetration: "宝具、精神/欲望干涉和魔性菩萨性质具备高杀伤价值；概念/精神效果不直接换算为破坏规模。",
        resistance: "灵基、魔性菩萨性质和 Beast 关联提供异常抗性；净化、精神、规则类相性需单独判断。",
        sensing: "擅长精神、欲望与人类心理层面的感知和操控，从者感知也可用于战场判断。",
        tactics: "善于诱导、精神污染、长期布局和利用对手欲望弱点，正面对轰不是唯一威胁方式。",
        special: "Alter Ego 灵基、魔性菩萨、Beast III/R 关联、精神/欲望干涉、宝具、规则/概念边界争议。",
        weakness: "高峰值强依赖剧情形态、权能条件和对人类/精神对象的相性；MoonCancer 泳装和 Beast 形态不等同召唤常态。",
        setting: "按 FGO Alter Ego 杀生院祈荒召唤灵基记录，Beast III/R 只作为关联峰值和特殊权能边界说明。",
        basis: "worldbook只用于抽取杀生院祈荒姓名；定级依据公开角色资料入口和 FGO Alter Ego/Beast关联语境，保守记录权能威胁而非直接抬到宇宙级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kama",
      name: "迦摩",
      en: "Kama",
      ja: "カーマ",
      affiliation: "迦勒底召唤 / 爱神",
      grade: "Assassin / 爱神与魔王",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Assassin",
      aliases: ["迦摩", "迦摩天", "爱神", "恶之爱女神", "Kama", "Mara"],
      fandomSlug: "Kama",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Kama",
          url: "https://typemoon.fandom.com/wiki/Kama",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对迦摩 Assassin 灵基、爱神/魔王性质、Beast III/L 关联、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的迦摩 key/comment 补入；未采用 worldbook 正文描述。",
        "Avenger 泳装迦摩与 Beast III/L 剧情形态未并入召唤灵基主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜爱神权能/宝具/Beast关联｜争议", "召唤灵基具备高价值权能，但不把 Beast III/L 全量写入常态。"],
        defense: ["楼级", "街区级｜灵基/爱神权能", "灵基和爱神/魔王性质提高防护与干涉抗性。"],
        movement: ["音速", "超音速｜从者机动/权能辅助", "Assassin 灵基和权能辅助机动。"],
        reaction: ["音速", "超音速｜从者反应/精神干涉", "反应含从者级行动和精神层面干涉判断。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/Beast残滓", "Beast 关联提高难杀程度，但召唤灵基仍有限制。"],
        healing: ["快速自愈｜灵基/权能", "极速自愈｜Beast关联/条件", "恢复强但依赖权能、供魔和剧情条件。"],
        energy: ["楼级能量", "街区级能量｜宝具/爱神权能", "资源池含精神/欲望干涉，不写成无限。"],
        energyRegen: ["快速回能｜灵基/供魔", "极速回能｜权能/条件", "权能条件下回能强，离开剧情条件需保守。"]
      }),
      notes: notes({
        penetration: "爱神/魔王权能、精神/欲望干涉和宝具是主要威胁；概念效果不直接折算破坏范围。",
        resistance: "灵基、神性和 Beast 关联提供异常抗性；对净化、精神、规则相性需具体判断。",
        sensing: "擅长读取欲望、精神状态和目标情绪，也具备从者感知。",
        tactics: "善于诱导、控制距离、用情绪与欲望弱点瓦解对手。",
        special: "Assassin 灵基、爱神权能、魔王性质、Beast III/L 关联、精神/欲望干涉、宝具。",
        weakness: "高峰值依赖剧情形态、权能条件和相性；泳装 Avenger 不计入本条。",
        setting: "按 FGO Assassin 迦摩召唤灵基记录，Beast III/L 作为关联峰值和特殊权能边界。",
        basis: "worldbook只用于抽取迦摩姓名；定级依据公开角色资料入口和 FGO Assassin/Beast关联语境，避免把兽阶剧情规模直接写进常态。"
      })
    })
  ]);
})();

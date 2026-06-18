(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "melusine",
      name: "梅柳齐娜",
      en: "Melusine",
      ja: "メリュジーヌ",
      affiliation: "妖精国 / 迦勒底召唤",
      grade: "Lancer / 妖精骑士兰斯洛特",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO Lostbelt 6 / Lancer 灵基",
      aliases: ["妖精骑士兰斯洛特", "妖精骑士梅柳齐娜", "阿尔比恩的末裔", "Melusine", "Fairy Knight Lancelot"],
      fandomSlug: "Melusine_%28Lostbelt%29",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Melusine (Lostbelt)",
          url: "https://typemoon.fandom.com/wiki/Melusine_%28Lostbelt%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对梅柳齐娜、妖精骑士兰斯洛特、阿尔比恩关联、Lostbelt 6 和宝具/龙形态语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的妖精骑士兰斯洛特/梅柳齐娜 key/comment 补入；未采用 worldbook 正文描述。",
        "Ruler 泳装灵基和阿尔比恩龙骸全量未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/龙种形态/Lostbelt条件｜争议", "阿尔比恩关联和宝具峰值很高，但需标注妖精国与龙种条件。"],
        defense: ["楼级", "街区级｜龙种/妖精骑士灵基", "龙种与妖精骑士灵基提供强承伤。"],
        movement: ["超音速", "高超音速｜飞行/龙种机动｜争议", "机动是核心强项，飞行和突进速度明显高于普通从者。"],
        reaction: ["超音速", "高超音速｜龙种反应/妖精骑士", "高速空战和突进要求高反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜龙种/阿尔比恩关联", "龙种生命力提高续战，但不等同阿尔比恩全量。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜龙种/供魔", "恢复依赖灵基、龙种特性和供魔。"],
        energy: ["楼级能量", "街区级能量｜宝具/龙种魔力", "龙种魔力与宝具提高峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜龙种/供魔", "供魔和龙种循环支撑连续高速战斗。"]
      }),
      notes: notes({
        penetration: "高速突击、龙种魔力和宝具具备高单体穿透；龙形态/阿尔比恩关联需标条件。",
        resistance: "妖精骑士灵基和龙种性质提高防护；对屠龙、概念克制需单独判断。",
        sensing: "妖精骑士感知、龙种直觉和空战视野适合高速索敌。",
        tactics: "擅长高速突袭、空战和短时间压制，能通过机动拉开战斗节奏。",
        special: "妖精骑士兰斯洛特、阿尔比恩关联、龙种形态、飞行、宝具、Lostbelt 6 条件。",
        weakness: "高峰值依赖龙种形态、Lostbelt条件和供魔；泳装 Ruler 与阿尔比恩全量不计入本条。",
        setting: "按 FGO Lostbelt 6 / Lancer 梅柳齐娜记录，替代灵基另行处理。",
        basis: "worldbook只用于抽取梅柳齐娜姓名；定级依据公开角色资料入口和 FGO 妖精骑士/龙种语境，保守记录街区级争议峰值。"
      })
    })
  ]);
})();

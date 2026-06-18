(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "oda-nobunaga",
      name: "织田信长",
      en: "Oda Nobunaga",
      ja: "織田信長",
      affiliation: "迦勒底召唤 / 战国英灵",
      grade: "Archer / 第六天魔王",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Archer",
      aliases: ["信长", "阿信", "织田吉法师", "第六天魔王", "Nobu", "Oda Nobunaga"],
      fandomSlug: "Oda_Nobunaga_%28Archer%29",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Oda Nobunaga (Archer)",
          url: "https://typemoon.fandom.com/wiki/Oda_Nobunaga_%28Archer%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对 FGO 织田信长 Archer 灵基、反神秘/反骑乘特性、三千世界和第六天魔王语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的织田信长 key/comment 补入；未采用 worldbook 正文描述。",
        "Berserker 泳装、魔王信长等替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜三千世界/反神秘特攻｜争议", "火器与宝具对神秘目标威胁高，但特攻不直接扩大破坏范围。"],
        defense: ["房屋级", "楼级｜灵基/战术回避", "Archer 信长防御不突出，主要靠灵基、机动和火力压制。"],
        movement: ["音速", "超音速｜从者机动", "从者级机动和战场移动。"],
        reaction: ["音速", "超音速｜从者反应/火器压制", "反应按从者战斗和火器压制节奏记录。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/战斗续行", "灵基提高续战，但不是重防御型。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/支援", "恢复依赖灵基和供魔。"],
        energy: ["房屋级能量", "楼级能量｜火器/宝具", "资源偏火器与宝具输出，未并入魔王信长。"],
        energyRegen: ["中速回能", "快速回能｜供魔/弹幕循环", "供魔和武装循环支撑连续射击。"]
      }),
      notes: notes({
        penetration: "三千世界与火器宝具对神秘、骑乘和古代神秘目标相性强；特攻按攻击性质处理。",
        resistance: "常规灵基抗性存在，但正面硬抗不是强项。",
        sensing: "从者感知和战场指挥经验可辅助目标选择。",
        tactics: "善于火力覆盖、压制神秘目标和利用战术优势打乱敌方节奏。",
        special: "Archer 灵基、三千世界、反神秘/反骑乘特攻、第六天魔王称号。",
        weakness: "特攻相性不适用时输出优势下降；替代灵基和魔王信长不计入本条。",
        setting: "按 FGO Archer 织田信长召唤灵基记录，Berserker 泳装和魔王信长另行处理。",
        basis: "worldbook只用于抽取织田信长姓名；定级依据公开角色资料入口和 FGO Archer 灵基，特攻不转写为更高破坏档。"
      })
    })
  ]);
})();

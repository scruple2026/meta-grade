(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "arjuna",
      name: "阿周那",
      en: "Arjuna",
      ja: "アルジュナ",
      affiliation: "迦勒底召唤 / 印度史诗英雄",
      grade: "Archer / 天授英雄",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Archer",
      aliases: ["阿周那", "娜娜", "天授的英雄", "Arjuna"],
      fandomSlug: "Arjuna",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Arjuna",
          url: "https://typemoon.fandom.com/wiki/Arjuna",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对阿周那 Archer 灵基、印度史诗英雄、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的阿周那 key/comment 补入；未采用 worldbook 正文描述。",
        "阿周那Alter/神之阿周那等 Lostbelt 形态未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/Pashupata｜争议", "Archer 灵基和神授武器提供高爆发，宝具按条件峰值记录。"],
        defense: ["楼级", "街区级｜灵基/神性", "灵基、神性和战斗经验提高承伤。"],
        movement: ["音速", "超音速｜从者机动/弓兵身法", "按从者级机动和远近战转换记录。"],
        reaction: ["音速", "超音速｜从者反应/心眼", "英雄级战斗经验和心眼支撑高速反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/神性", "从者灵基和神性提高续战，但不是不死结构。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/神性", "恢复依赖灵基、供魔和战斗环境。"],
        energy: ["楼级能量", "街区级能量｜宝具/神授武器", "宝具和神授武器提高资源峰值，不等同无限能量。"],
        energyRegen: ["中速回能", "快速回能｜供魔/神性", "供魔与神性支撑多轮爆发，但仍会消耗。"]
      }),
      notes: notes({
        penetration: "以弓兵远程火力、神授武器和宝具为主，单体杀伤与特殊效果高于普通范围破坏。",
        resistance: "从者灵基和神性提供常规抗性；对精神、概念、封印等需看具体相性。",
        sensing: "从者感知、战斗经验和弓兵视野适合远程索敌与压制。",
        tactics: "战斗判断冷静，擅长远程压制、保持距离和抓破绽爆发。",
        special: "Archer 灵基、神性、神授武器、Pashupata、心眼与印度史诗英雄设定。",
        weakness: "高峰值依赖宝具窗口和供魔；不并入阿周那Alter的神性/世界重塑语境。",
        setting: "按 FGO Archer 阿周那召唤灵基记录，Lostbelt Alter 形态另行处理。",
        basis: "worldbook只用于抽取阿周那姓名；定级依据公开角色资料入口和 FGO Archer 灵基，保守记录街区级争议峰值。"
      })
    })
  ]);
})();

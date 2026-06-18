(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "minamoto-no-raikou",
      name: "源赖光",
      en: "Minamoto-no-Raikou",
      ja: "源頼光",
      affiliation: "迦勒底召唤 / 源氏武者",
      grade: "Berserker / 牛御前关联",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Berserker",
      aliases: ["赖光", "源頼光", "奶光", "牛御前", "Raikou", "Minamoto no Raikou"],
      fandomSlug: "Minamoto-no-Raikou",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Minamoto-no-Raikou",
          url: "https://typemoon.fandom.com/wiki/Minamoto-no-Raikou",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对源赖光 Berserker 灵基、源氏武者、牛御前关联、魔性/神秘杀伤和宝具语境。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手和型月DLC worldbook 的源赖光 key/comment 补入；未采用 worldbook 正文描述。",
        "Lancer 泳装灵基、牛御前独立形态和活动限定变体未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/神秘杀伤｜争议", "Berserker 灵基和宝具输出强，魔性/神秘特攻不直接扩大破坏范围。"],
        defense: ["楼级", "街区级｜灵基/鬼种血脉", "灵基、狂化和牛御前关联提高承伤。"],
        movement: ["音速", "超音速｜从者机动/武者身法", "近战冲锋与武者身法按从者级记录。"],
        reaction: ["音速", "超音速｜从者反应/战斗本能", "狂化不等于无战斗判断，高端武者经验支撑反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/狂化", "Berserker 灵基与狂化提高续战，但理性和弱点仍受限制。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜狂化/供魔", "恢复依赖灵基和供魔，非再生型不死。"],
        energy: ["楼级能量", "街区级能量｜宝具/牛御前关联", "宝具、雷电和神秘杀伤提高峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜供魔/狂化续战", "供魔与狂化支撑连续攻势，但长期消耗仍有风险。"]
      }),
      notes: notes({
        penetration: "以大太刀、雷电、宝具和对魔性/神秘特攻为主，特攻按攻击性质处理，不直接升主档。",
        resistance: "Berserker 灵基、鬼种/牛御前关联和武者体魄提供较高承伤；精神干涉相性需单独判断。",
        sensing: "从者感知和武者经验可辅助定位敌意与近战目标。",
        tactics: "具备源氏武者经验，但 Berserker 灵基和母性执念会影响理性判断。",
        special: "狂化、神秘杀伤、魔性特攻、牛御前关联、雷电与宝具。",
        weakness: "狂化和母性执念可能导致目标选择失衡；高峰值依赖宝具、供魔和相性。",
        setting: "按 FGO Berserker 源赖光记录，Lancer 泳装和牛御前独立形态不并入主面板。",
        basis: "worldbook只用于抽取源赖光姓名；定级依据公开角色资料入口和 FGO Berserker 灵基，保守记录街区级争议峰值。"
      })
    })
  ]);
})();

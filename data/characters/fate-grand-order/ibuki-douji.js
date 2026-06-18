(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ibuki-douji",
      name: "伊吹童子",
      en: "Ibuki-douji",
      ja: "伊吹童子",
      affiliation: "迦勒底召唤 / 神灵鬼种",
      grade: "Saber / 八岐大蛇关联",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["伊吹", "伊吹童子", "八岐大蛇", "Ibuki Douji", "Ibuki-douji"],
      fandomSlug: "Ibuki-douji",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Ibuki-douji",
          url: "https://typemoon.fandom.com/wiki/Ibuki-douji",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对伊吹童子 Saber 灵基、八岐大蛇/神灵关联、鬼种和宝具语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的伊吹童子 key/comment 补入；未采用 worldbook 正文描述。",
        "Berserker 泳装灵基和八岐大蛇全量未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜神灵/鬼种/宝具｜争议", "神灵鬼种灵基输出强，但不把八岐大蛇全量直接写入。"],
        defense: ["楼级", "街区级｜神灵/鬼种灵基", "神灵与鬼种性质提供高承伤。"],
        movement: ["音速", "超音速｜从者机动/鬼种身法", "按 Saber 灵基和鬼种身法记录。"],
        reaction: ["音速", "超音速｜从者反应/神性直觉", "神性与战斗本能支撑高速反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜神灵/鬼种", "神灵鬼种生命结构提高续战，但召唤灵基仍有限制。"],
        healing: ["中速自愈｜鬼种/灵基", "快速自愈｜神灵/供魔", "恢复依赖灵基、神性和供魔。"],
        energy: ["楼级能量", "街区级能量｜神灵/宝具", "神灵魔力和宝具提高资源峰值。"],
        energyRegen: ["中速回能", "快速回能｜神灵/供魔", "供魔和神灵性质支撑多轮爆发。"]
      }),
      notes: notes({
        penetration: "神灵鬼种魔力、剑技和宝具具备高威胁；八岐大蛇关联按特殊权能/条件处理。",
        resistance: "神性、鬼种和灵基提供强抗性；退魔、神性克制和屠蛇相性需单独判断。",
        sensing: "神性直觉、鬼种本能和从者感知辅助索敌。",
        tactics: "偏压迫型强者，善于用高魔力和神性威压压制对手。",
        special: "Saber 灵基、神灵、鬼种、八岐大蛇关联、宝具。",
        weakness: "高峰值依赖神灵/八岐大蛇条件和供魔；泳装 Berserker 不计入本条。",
        setting: "按 FGO Saber 伊吹童子召唤灵基记录，八岐大蛇全量另作背景关联。",
        basis: "worldbook只用于抽取伊吹童子姓名；定级依据公开角色资料入口和 FGO Saber 神灵鬼种语境，保守记录街区级争议峰值。"
      })
    })
  ]);
})();

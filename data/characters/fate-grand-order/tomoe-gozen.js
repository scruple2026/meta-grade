(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tomoe-gozen",
      name: "巴御前",
      en: "Tomoe Gozen",
      ja: "巴御前",
      affiliation: "迦勒底召唤 / 源平武者",
      grade: "Archer / Archer Inferno",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Archer",
      aliases: ["巴", "巴御前", "Archer Inferno", "巴妈", "Tomoe Gozen"],
      fandomSlug: "Tomoe_Gozen",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Tomoe Gozen",
          url: "https://typemoon.fandom.com/wiki/Tomoe_Gozen",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对巴御前 Archer 灵基、Archer Inferno、鬼种血统、火焰和宝具语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的巴御前 key/comment 补入；未采用 worldbook 正文描述。",
        "Saber 泳装灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜火焰/宝具/鬼种血统", "输出偏火焰与弓兵压制，低于顶级神灵从者。"],
        defense: ["房屋级", "楼级｜灵基/鬼种血统", "灵基和鬼种血统提高承伤。"],
        movement: ["音速", "超音速｜从者机动", "从者级战场机动。"],
        reaction: ["音速", "超音速｜从者反应/武者技艺", "源平武者技艺和从者反应支撑攻防。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/鬼种血统", "灵基与鬼种血统提升续战，但不是高端不死结构。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/鬼种血统", "恢复依赖灵基和供魔。"],
        energy: ["房屋级能量", "楼级能量｜火焰/宝具", "资源池支撑火焰与宝具爆发。"],
        energyRegen: ["中速回能", "快速回能｜供魔/战斗循环", "供魔支撑多轮射击和火焰。"]
      }),
      notes: notes({
        penetration: "火焰、弓术和宝具可造成持续压制，主要按楼级峰值处理。",
        resistance: "灵基和鬼种血统提供常规抗性；对强退魔或水/冷却相性需单独判断。",
        sensing: "从者感知、武者经验和远程观察辅助索敌。",
        tactics: "擅长保持距离、火力压制和武者式临场判断。",
        special: "Archer 灵基、鬼种血统、火焰、宝具、源平武者技艺。",
        weakness: "峰值不如顶级神灵/龙种从者，泳装 Saber 不计入本条。",
        setting: "按 FGO Archer 巴御前召唤灵基记录，泳装 Saber 另行处理。",
        basis: "worldbook只用于抽取巴御前姓名；定级依据公开角色资料入口和 FGO Archer/鬼种血统语境，保守记录楼级峰值。"
      })
    })
  ]);
})();

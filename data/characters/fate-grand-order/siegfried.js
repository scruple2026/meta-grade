(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "siegfried",
      name: "齐格飞",
      en: "Siegfried",
      ja: "ジークフリート",
      affiliation: "迦勒底召唤 / 屠龙英雄",
      grade: "Saber / 龙血骑士",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["齐格飞", "屠龙者", "龙血之骑士", "飞哥", "Siegfried"],
      fandomSlug: "Siegfried",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Siegfried",
          url: "https://typemoon.fandom.com/wiki/Siegfried",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对齐格飞 Saber 灵基、屠龙者、龙血/恶龙血铠、Balmung 和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的齐格飞 key/comment 补入；未采用 worldbook 正文描述。",
        "Fate/Apocrypha 原剧情与 FGO 召唤灵基保持同角色但不并入其他角色齐格。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜Balmung/屠龙特攻｜争议", "Saber 灵基和屠龙宝具提供高爆发，特攻按相性标注。"],
        defense: ["楼级", "街区级｜恶龙血铠/龙血", "防御是核心强项，恶龙血铠提高承伤。"],
        movement: ["音速", "超音速｜从者机动", "从者级近战机动。"],
        reaction: ["音速", "超音速｜从者反应/剑技", "Saber 剑技和从者反应支撑高速攻防。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜恶龙血铠/灵基", "龙血和灵基提高生命阈值，但弱点仍关键。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/龙血", "恢复依赖灵基、供魔和龙血性质。"],
        energy: ["楼级能量", "街区级能量｜Balmung/龙血", "宝具和龙血支撑峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜供魔/宝具循环", "供魔支持宝具循环，但不是无限资源。"]
      }),
      notes: notes({
        penetration: "Balmung 和屠龙特攻对龙种目标威胁高，特攻不直接提升对所有目标的破坏档。",
        resistance: "恶龙血铠和龙血提供强防御；传说弱点和屠龙相性需特别标注。",
        sensing: "从者感知和剑士经验适合近战索敌。",
        tactics: "正面稳定，擅长承压后以宝具和剑技反击。",
        special: "Saber 灵基、恶龙血铠、龙血、Balmung、屠龙特攻。",
        weakness: "背部弱点和特攻相性是核心限制；不是所有防御都无条件成立。",
        setting: "按 FGO Saber 齐格飞召唤灵基记录，不并入齐格或其他衍生角色。",
        basis: "worldbook只用于抽取齐格飞姓名；定级依据公开角色资料入口和 FGO Saber/龙血语境，防御高于普通输出。"
      })
    })
  ]);
})();

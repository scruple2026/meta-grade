(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "edmond-dantes",
      name: "岩窟王",
      en: "Edmond Dantes",
      ja: "エドモン・ダンテス",
      affiliation: "迦勒底召唤 / 复仇者从者",
      grade: "Avenger / 基督山伯爵",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Avenger",
      aliases: ["岩窟王", "基督山伯爵", "爱德蒙·唐泰斯", "爱德蒙", "唐泰斯", "Edmond Dantès", "Count of Monte Cristo"],
      fandomSlug: "Edmond_Dant%C3%A8s",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Edmond Dantès",
          url: "https://typemoon.fandom.com/wiki/Edmond_Dant%C3%A8s",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对岩窟王的 Avenger 灵基、复仇火焰、精神/梦境相关能力、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的岩窟王 key/comment 补入；未采用 worldbook 正文描述。",
        "岩窟王 基督山等后续变体不并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜复仇火焰/宝具｜争议", "Avenger 灵基偏高爆发，复仇火焰和宝具按条件峰值记录。"],
        defense: ["楼级", "楼级｜灵基/怨念续战", "防御不是核心强项，主要靠灵基、怨念和机动规避。"],
        movement: ["音速", "超音速｜从者机动/宝具疾走", "高机动和突进是核心优势。"],
        reaction: ["音速", "超音速｜Avenger反应/精神干涉应对", "反应和精神抗压能力强，适合高速突袭。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/复仇执念", "复仇执念提高续战，但不是高防重装。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜怨念/供魔", "恢复依赖灵基和复仇者性质。"],
        energy: ["楼级能量", "街区级能量｜宝具/复仇火焰", "资源池偏爆发与精神/梦境干涉。"],
        energyRegen: ["中速回能", "快速回能｜供魔/怨念", "供魔与怨念支撑连续追击，但长期防守不强。"]
      }),
      notes: notes({
        penetration: "复仇火焰、宝具突击和精神层面干涉具备高单体威胁，范围破坏需保守处理。",
        resistance: "Avenger 灵基与复仇执念强化精神抗压和续战；正面硬抗高输出不是强项。",
        sensing: "对梦境、精神与复仇对象的感知较强，也具备从者感知。",
        tactics: "擅长高速袭扰、精神支援、追击与暗处保护，能打消耗和心理战。",
        special: "Avenger 灵基、复仇火焰、精神/梦境干涉、宝具、高速突袭。",
        weakness: "防御面板相对偏薄，强依赖机动和心理/梦境能力；复仇者特性可能导致行动偏执。",
        setting: "按 FGO Avenger 岩窟王记录，后续基督山变体另行处理。",
        basis: "worldbook只用于抽取岩窟王姓名；定级依据公开角色资料入口和 FGO Avenger 灵基，保守记录高速单体与精神干涉优势。"
      })
    })
  ]);
})();

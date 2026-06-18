(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "miyamoto-iori",
      name: "宫本伊织",
      en: "Miyamoto Iori",
      ja: "宮本伊織",
      affiliation: "迦勒底召唤 / Fate/Samurai Remnant",
      grade: "Saber / 二天一流剑士",
      appearances: ["Fate/Grand Order", "Fate/Samurai Remnant"],
      timelineStatus: "FGO 联动召唤灵基 / Saber",
      aliases: ["伊织", "宫本伊织贞次", "万理一空", "二天一流", "Miyamoto Iori"],
      fandomSlug: "Miyamoto_Iori",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Miyamoto Iori",
          url: "https://typemoon.fandom.com/wiki/Miyamoto_Iori",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对宫本伊织、Fate/Samurai Remnant、二天一流、FGO 联动灵基和战斗范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的宫本伊织 key/comment 补入；未采用 worldbook 正文描述。",
        "按 FGO 联动召唤灵基记录；作为人类剑士时期的低档表现不单独拆线。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜Saber灵基/二天一流｜争议", "人类剑士技量高，FGO 灵基峰值提高输出但不按顶级从者处理。"],
        defense: ["墙级", "房屋级｜灵基/格挡", "防御依赖剑技、格挡和灵基加成。"],
        movement: ["亚音速", "音速｜剑士身法/灵基", "人类剑士到联动灵基的高速身法。"],
        reaction: ["亚音速", "音速｜剑技/战斗预判", "反应以剑技、读招和灵基加成为主。"],
        vitality: ["精锐韧体", "房屋级生命阈值｜灵基", "人类基础生命体量有限，灵基峰值提高续战。"],
        healing: ["缓慢自愈", "中速自愈｜灵基/供魔", "恢复能力不突出，主要依赖灵基和供魔。"],
        energy: ["砖级能量", "楼级能量｜灵基/剑技", "能量池低于高端从者，峰值来自联动灵基和技量。"],
        energyRegen: ["缓慢回能", "中速回能｜供魔", "供魔支撑灵基战斗。"]
      }),
      notes: notes({
        penetration: "二天一流剑技和灵基峰值提供集中斩击，范围破坏弱于高端宝具型从者。",
        resistance: "格挡、身法和灵基提高生存；缺少重甲或高强防御宝具。",
        sensing: "剑士读招、战斗直觉和从者级感知辅助近战。",
        tactics: "擅长近身读招、二刀流变化、抓破绽和连续压制。",
        special: "Fate/Samurai Remnant 主角、二天一流、FGO 联动 Saber 灵基。",
        weakness: "基础仍偏人类剑士路线，能量池和大范围输出不及高端神话从者。",
        setting: "按 FGO 联动召唤灵基记录，人类时期表现写入说明而不拆独立时间线。",
        basis: "worldbook只用于抽取宫本伊织姓名；定级依据公开角色资料入口和 FGO/Samurai Remnant 语境，技量不直接换算大规模破坏。"
      })
    })
  ]);
})();

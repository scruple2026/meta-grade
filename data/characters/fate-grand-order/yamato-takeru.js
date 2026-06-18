(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yamato-takeru",
      name: "大和武尊",
      en: "Yamato Takeru",
      ja: "ヤマトタケル",
      affiliation: "迦勒底召唤 / Fate/Samurai Remnant",
      grade: "Saber / 日本武尊",
      appearances: ["Fate/Grand Order", "Fate/Samurai Remnant"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["日本武尊", "倭建命", "小碓尊", "水天一碧", "Amenomurakumo", "Yamato Takeru"],
      fandomSlug: "Yamato_Takeru",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Yamato Takeru",
          url: "https://typemoon.fandom.com/wiki/Yamato_Takeru",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对大和武尊 Saber 灵基、Fate/Samurai Remnant、天丛云剑和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的大和武尊 key/comment 补入；未采用 worldbook 正文描述。",
        "Fate/Samurai Remnant 与 FGO 语境合并为召唤灵基入口，不把剧情环境峰值写成常态。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜天丛云剑/宝具｜争议", "Saber 灵基与神剑宝具提供高爆发，按公开入口保守记录。"],
        defense: ["楼级", "街区级｜灵基/神剑防护", "Saber 灵基和神剑相关防护提高承伤。"],
        movement: ["音速", "超音速｜从者机动/剑士身法", "Saber 从者高速位移和近战机动。"],
        reaction: ["音速", "超音速｜从者反应/剑技", "高速剑技与从者反应支撑近战交锋。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/神性传承", "灵基和神话传承提高续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/神剑支援", "恢复依赖灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜天丛云剑/宝具", "宝具与神剑资源提高能量峰值。"],
        energyRegen: ["中速回能", "快速回能｜供魔/宝具循环", "供魔支撑宝具和连续剑技。"]
      }),
      notes: notes({
        penetration: "天丛云剑和宝具具备高穿透/高爆发，范围破坏需按具体表现判断。",
        resistance: "从者灵基、神剑和神话传承提供防护；概念/封印类另判。",
        sensing: "从者感知和剑士经验辅助快速接敌。",
        tactics: "擅长高速近战、宝具爆发和以剑技压制敌人。",
        special: "Saber 灵基、天丛云剑、日本武尊传承、Fate/Samurai Remnant 语境。",
        weakness: "剧情环境和神剑峰值需标条件，不能直接外推为全场景常态。",
        setting: "按 FGO 召唤灵基与 Fate/Samurai Remnant 公开角色资料综合记录。",
        basis: "worldbook只用于抽取大和武尊姓名；定级依据公开角色资料入口和 Saber 灵基，神话身份不直接抬高破坏档。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mordred",
      name: "莫德雷德",
      en: "Mordred",
      ja: "モードレッド",
      affiliation: "迦勒底召唤 / 圆桌骑士",
      grade: "Saber / 叛逆骑士",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["小莫", "叛逆骑士", "红之Saber", "Clarent", "Mordred"],
      fandomSlug: "Mordred",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Mordred",
          url: "https://typemoon.fandom.com/wiki/Mordred",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对莫德雷德 Saber 灵基、Clarent Blood Arthur、圆桌骑士和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的莫德雷德 key/comment 补入；未采用 worldbook 正文描述。",
        "Rider 泳装等替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜Clarent Blood Arthur/魔力放出｜争议", "叛逆骑士的宝具和魔力放出提供高爆发，但不直接外推到国家级以上。"],
        defense: ["楼级", "街区级｜铠甲/灵基", "圆桌骑士灵基、铠甲和魔力放出支撑正面承伤。"],
        movement: ["音速", "超音速｜从者机动/骑士冲锋", "Saber 近战机动和爆发突进。"],
        reaction: ["音速", "超音速｜从者反应/骑士武艺", "从者级反应与剑术适合高速近战。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/魔力放出", "生命体量按圆桌骑士灵基和高强度近战续航记录。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/战斗续行", "恢复依赖灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜宝具/魔力放出", "魔力放出和宝具提高能量峰值。"],
        energyRegen: ["中速回能", "快速回能｜供魔/爆发循环", "供魔支撑连续近战与宝具窗口。"]
      }),
      notes: notes({
        penetration: "Clarent Blood Arthur 和魔力放出具备集中爆发，近战穿透强于大范围破坏。",
        resistance: "铠甲、灵基和魔力放出提高承伤；精神和概念抗性需按对手另判。",
        sensing: "从者感知和骑士战斗经验辅助近战判断。",
        tactics: "偏冲锋、压制和爆发反击，战术上更适合正面对抗。",
        special: "Saber 灵基、圆桌骑士、叛逆骑士、Clarent Blood Arthur、魔力放出。",
        weakness: "性格激进，易被诱导；泳装 Rider 等替代灵基不计入本条。",
        setting: "按 FGO Saber 莫德雷德召唤灵基记录。",
        basis: "worldbook只用于抽取莫德雷德姓名；定级依据公开角色资料入口和 FGO Saber 灵基，宝具峰值保守记录。"
      })
    })
  ]);
})();

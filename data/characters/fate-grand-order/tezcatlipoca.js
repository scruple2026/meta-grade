(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tezcatlipoca",
      name: "特斯卡特利波卡",
      en: "Tezcatlipoca",
      ja: "テスカトリポカ",
      affiliation: "迦勒底召唤 / 中南美神性",
      grade: "Assassin / 烟雾镜",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO Lostbelt 7 / 召唤灵基",
      aliases: ["烟雾镜", "烟哥", "黑之特斯卡特利波卡", "Smoking Mirror", "Tezcatlipoca"],
      fandomSlug: "Tezcatlipoca",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Tezcatlipoca",
          url: "https://typemoon.fandom.com/wiki/Tezcatlipoca",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对特斯卡特利波卡 Assassin 灵基、Lostbelt 7、神性、烟雾镜和宝具语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的特斯卡特利波卡 key/comment 补入；未采用 worldbook 正文描述。",
        "神名、Lostbelt 7 权能和冠位候补语境不直接换算为宇宙级裸面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜神性/宝具/Lostbelt条件｜争议", "神性和宝具强度高，但缺少公开条目级破坏换算时不拉到大尺度档。"],
        defense: ["楼级", "街区级｜神性/灵基", "高神性与灵基提高承伤，权能防护另作特殊项。"],
        movement: ["音速", "超音速｜从者机动/神性", "从者级机动与神性反应。"],
        reaction: ["音速", "超音速｜从者反应/神性判断", "高端从者反应，适合高速战斗和枪械/权能混用。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜神性/灵基", "神性和灵基提高生命阈值，但不写成无限生命结构。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜神性/供魔", "恢复依赖灵基、神性和供魔。"],
        energy: ["楼级能量", "街区级能量｜神性/宝具", "神性和宝具资源高，仍与宇宙论权能分开。"],
        energyRegen: ["中速回能", "快速回能｜神性/供魔", "供魔和神性支撑持续战斗。"]
      }),
      notes: notes({
        penetration: "枪械、神性权能、宝具和烟雾镜相关效果可形成特殊杀伤，不按神名直接扩大破坏范围。",
        resistance: "神性、灵基和权能提高抗性；具体概念/规则抗性需按对手另判。",
        sensing: "从者感知、神性视角和战场操控能力提供索敌优势。",
        tactics: "擅长交易、诱导、现代武器与神性权能混合运用。",
        special: "Assassin 灵基、烟雾镜、神性、Lostbelt 7 权能语境、宝具。",
        weakness: "高端权能依赖 Lostbelt/剧情条件；冠位候补和神名不等同裸面板无限升档。",
        setting: "按 FGO Lostbelt 7 与召唤灵基综合记录。",
        basis: "worldbook只用于抽取特斯卡特利波卡姓名；定级依据公开角色资料入口，神性权能写入特殊项而非直接抬到宇宙档。"
      })
    })
  ]);
})();

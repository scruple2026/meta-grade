(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shuten-douji",
      name: "酒吞童子",
      en: "Shuten-douji",
      ja: "酒呑童子",
      affiliation: "迦勒底召唤 / 大江山鬼",
      grade: "Assassin / 鬼种",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Assassin",
      aliases: ["酒吞童子", "酒吞", "酒呑童子", "大江山之鬼", "Shuten Douji", "Shuten-douji"],
      fandomSlug: "Shuten-douji",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Shuten-douji",
          url: "https://typemoon.fandom.com/wiki/Shuten-douji",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对酒吞童子 Assassin 灵基、鬼种、毒酒/魅惑、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的酒吞童子 key/comment 补入；未采用 worldbook 正文描述。",
        "Caster 护法少女鬼救阿等替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/毒酒/鬼种｜争议", "鬼种灵基和毒/魅惑宝具提供高威胁，毒性不等同纯破坏规模。"],
        defense: ["楼级", "街区级｜鬼种/灵基", "鬼种身体和从者灵基提高承伤。"],
        movement: ["音速", "超音速｜从者机动/鬼种身法", "Assassin 灵基和鬼种身法支持高速接近。"],
        reaction: ["音速", "超音速｜从者反应/鬼种本能", "鬼种战斗本能和从者反应支撑攻防。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜鬼种/灵基", "鬼种生命力和灵基提高续战。"],
        healing: ["中速自愈｜鬼种/灵基", "快速自愈｜供魔/鬼种", "恢复依赖鬼种体质、灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜宝具/鬼种魔力", "鬼种魔力和宝具提高峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜供魔/鬼种", "供魔和鬼种体质支撑多轮爆发。"]
      }),
      notes: notes({
        penetration: "毒酒、魅惑、鬼种魔力和宝具是核心威胁，毒/精神效果应按命中和抗性判断。",
        resistance: "鬼种身体和灵基提供物理、魔力、毒性方面的高抗性；净化和针对鬼种的相性需单独判断。",
        sensing: "从者感知、鬼种嗅觉/本能和对欲望的观察可辅助索敌。",
        tactics: "擅长诱导、魅惑、近身毒杀和节奏扰乱，不只依赖正面破坏。",
        special: "Assassin 灵基、鬼种、毒酒、魅惑、宝具、大江山传说。",
        weakness: "毒和魅惑受抗性影响；Caster 等替代灵基不计入本条。",
        setting: "按 FGO Assassin 酒吞童子召唤灵基记录，Caster 护法少女等变体另行处理。",
        basis: "worldbook只用于抽取酒吞童子姓名；定级依据公开角色资料入口和 FGO Assassin/鬼种语境，毒与魅惑写入攻击性质而非抬高破坏档。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ibaraki-douji",
      name: "茨木童子",
      en: "Ibaraki-douji",
      ja: "茨木童子",
      affiliation: "迦勒底召唤 / 大江山鬼",
      grade: "Berserker / 鬼种",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Berserker",
      aliases: ["茨木", "茨木童子", "大江山之鬼", "banana oni", "Ibaraki Douji", "Ibaraki-douji"],
      fandomSlug: "Ibaraki-douji",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Ibaraki-douji",
          url: "https://typemoon.fandom.com/wiki/Ibaraki-douji",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对茨木童子 Berserker 灵基、鬼种、大江山、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的茨木童子 key/comment 补入；未采用 worldbook 正文描述。",
        "Lancer 泳装灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/鬼种怪力｜争议", "Berserker 灵基和鬼种怪力提供强近战爆发。"],
        defense: ["楼级", "街区级｜鬼种/灵基", "鬼种体魄和从者灵基提高承伤。"],
        movement: ["音速", "超音速｜从者机动/鬼种身法", "近战突进和跳跃按从者级记录。"],
        reaction: ["音速", "超音速｜从者反应/鬼种本能", "鬼种本能与 Berserker 灵基支撑快速攻防。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜鬼种/狂化", "鬼种生命力、狂化和灵基提高续战。"],
        healing: ["中速自愈｜鬼种/灵基", "快速自愈｜供魔/狂化", "恢复依赖鬼种体质、供魔和灵基修复。"],
        energy: ["楼级能量", "街区级能量｜宝具/鬼种魔力", "鬼种魔力和宝具提高峰值资源。"],
        energyRegen: ["中速回能", "快速回能｜供魔/鬼种", "供魔与鬼种体质支持连续近战爆发。"]
      }),
      notes: notes({
        penetration: "以鬼种怪力、爪击、火焰/魔力和宝具正面破坏为主，偏近战压制。",
        resistance: "鬼种体魄和 Berserker 灵基提供较高物理与魔力承受；对退魔/净化相性需单独判断。",
        sensing: "从者感知和鬼种本能适合近距捕捉敌意与气息。",
        tactics: "虽是 Berserker，但保有大江山鬼的经验和狡黠，擅长强攻与虚张声势。",
        special: "Berserker 灵基、鬼种、怪力、大江山传说、宝具、狂化。",
        weakness: "理性和战术稳定性受 Berserker 灵基影响；泳装 Lancer 不计入本条。",
        setting: "按 FGO Berserker 茨木童子召唤灵基记录，Lancer 泳装变体另行处理。",
        basis: "worldbook只用于抽取茨木童子姓名；定级依据公开角色资料入口和 FGO Berserker/鬼种语境，保守记录街区级争议峰值。"
      })
    })
  ]);
})();

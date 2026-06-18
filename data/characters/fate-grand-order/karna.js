(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "karna",
      name: "迦尔纳",
      en: "Karna",
      ja: "カルナ",
      affiliation: "迦勒底召唤 / 印度史诗英雄",
      grade: "Lancer / 太阳神之子",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Lancer",
      aliases: ["迦尔纳", "小太阳", "施舍的英雄", "太阳神之子", "Karna"],
      fandomSlug: "Karna",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Karna",
          url: "https://typemoon.fandom.com/wiki/Karna",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对迦尔纳 Lancer 灵基、太阳神之子、黄金甲、Vasavi Shakti 和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的迦尔纳 key/comment 补入；未采用 worldbook 正文描述。",
        "圣诞迦尔纳等替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜Vasavi Shakti/宝具｜争议", "Lancer 灵基和神授武装提供高爆发，宝具代价需标注。"],
        defense: ["楼级", "街区级｜黄金甲/神性", "黄金甲与神性是核心防御优势。"],
        movement: ["音速", "超音速｜从者机动/枪兵身法", "从者级枪兵机动和近战突进。"],
        reaction: ["音速", "超音速｜从者反应/武艺", "高端英雄武艺支撑高速攻防。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/黄金甲", "灵基和黄金甲提高生命阈值，但宝具代价会影响续战。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/神性", "恢复依赖灵基和供魔。"],
        energy: ["楼级能量", "街区级能量｜太阳神性/宝具", "太阳神性和宝具提高资源峰值，不写作无限。"],
        energyRegen: ["中速回能", "快速回能｜供魔/神性", "供魔与神性支撑续战，释放大招后有明显代价。"]
      }),
      notes: notes({
        penetration: "枪术、太阳火焰和 Vasavi Shakti 具备高穿透/高爆发，宝具代价与使用窗口需单独判断。",
        resistance: "黄金甲、神性和从者灵基提供强防御；对概念/精神类相性仍需看对手。",
        sensing: "从者感知、武者经验和神性直觉辅助战斗判断。",
        tactics: "正面战斗稳定，擅长以防御承压后用高威力反击破局。",
        special: "Lancer 灵基、太阳神性、黄金甲、Vasavi Shakti、印度史诗英雄设定。",
        weakness: "部分峰值宝具存在代价和使用条件；圣诞/其他灵基不计入本条。",
        setting: "按 FGO Lancer 迦尔纳召唤灵基记录，替代灵基另行处理。",
        basis: "worldbook只用于抽取迦尔纳姓名；定级依据公开角色资料入口和 FGO Lancer 灵基，防御强项单独写入黄金甲标签。"
      })
    })
  ]);
})();

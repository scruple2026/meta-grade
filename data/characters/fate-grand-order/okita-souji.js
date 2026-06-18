(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "okita-souji",
      name: "冲田总司",
      en: "Okita Souji",
      ja: "沖田総司",
      affiliation: "迦勒底召唤 / 新选组从者",
      grade: "Saber / 天才剑士",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Saber",
      aliases: ["冲田", "总司", "樱Saber", "沖田総司", "Okita Soji", "Okita Souji"],
      fandomSlug: "Okita_Souji",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Okita Souji",
          url: "https://typemoon.fandom.com/wiki/Okita_Souji",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对冲田总司的 Saber 灵基、缩地、無明三段突、病弱和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手和型月DLC worldbook 的冲田总司 key/comment 补入；未采用 worldbook 正文描述。",
        "冲田·J·总司等泳装/替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜無明三段突/宝具｜争议", "攻击偏高速单体穿透，破坏范围不按大范围输出处理。"],
        defense: ["房屋级", "楼级｜灵基/心眼", "防御依赖从者灵基、剑技和回避，病弱限制持续承压。"],
        movement: ["音速", "超音速｜缩地/从者机动", "缩地和 Saber 灵基提供高机动突进。"],
        reaction: ["音速", "超音速｜剑技/心眼", "天才剑士的近战反应和心眼支撑高速攻防。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/病弱限制", "从者灵基提高生命阈值，但病弱会削弱续战稳定性。"],
        healing: ["缓慢自愈｜病弱", "中速自愈｜灵基/供魔", "恢复能力受病弱影响，峰值依赖供魔和灵基修复。"],
        energy: ["房屋级能量", "楼级能量｜宝具/缩地连击", "资源池足以支撑高速近战和宝具窗口，但续航不是强项。"],
        energyRegen: ["缓慢回能｜病弱", "中速回能｜供魔", "病弱拖累自然恢复，供魔可维持战斗但不适合长期消耗。"]
      }),
      notes: notes({
        penetration: "無明三段突和高速剑技偏单体穿透、破防和瞬间连击，不等同大范围破坏。",
        resistance: "有从者灵基和剑技回避支撑，但病弱使她不适合长时间硬吃伤害。",
        sensing: "从者感知、剑士直觉和心眼可辅助读招，远距离情报能力有限。",
        tactics: "近战决断快，擅长缩地接近、瞬间三连击和抓破绽速杀。",
        special: "缩地、無明三段突、心眼、Saber 灵基、新选组剑术。",
        weakness: "病弱是核心短板，可能突然削弱行动、回能和续战；对大范围压制与消耗战不利。",
        setting: "按 FGO Saber 冲田总司记录，泳装冲田等替代灵基另行处理。",
        basis: "worldbook只用于抽取冲田总司姓名；定级依据公开角色资料入口和 FGO Saber/病弱设定，主表突出高速单体剑技而非范围输出。"
      })
    })
  ]);
})();

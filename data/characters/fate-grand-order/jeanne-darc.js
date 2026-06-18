(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jeanne-darc",
      name: "贞德",
      en: "Jeanne d'Arc",
      ja: "ジャンヌ・ダルク",
      affiliation: "迦勒底召唤 / 圣女从者",
      grade: "Ruler / 圣女",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Ruler",
      aliases: ["白贞", "圣女贞德", "珍妮·达尔克", "Ruler Jeanne", "Jeanne d'Arc"],
      fandomSlug: "Jeanne_d%27Arc_%28Ruler%29",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Jeanne d'Arc",
          url: "https://typemoon.fandom.com/wiki/Jeanne_d%27Arc_%28Ruler%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对贞德 Ruler 灵基、旗帜防御宝具、红莲圣女和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手和型月DLC worldbook 的贞德 Ruler key/comment 补入；未采用 worldbook 正文描述。",
        "泳装、Alter、Santa Lily 等替代灵基未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜旗/洗礼咏唱/红莲圣女｜争议", "Ruler 贞德主强项不是裸输出，攻击峰值按宝具/术式条件标注。"],
        defense: ["楼级", "街区级｜旗帜防御宝具｜争议", "防御和团队保护是核心强项，宝具峰值比攻击更突出。"],
        movement: ["音速", "超音速｜从者机动", "按从者级机动保守记录。"],
        reaction: ["音速", "超音速｜从者反应/Ruler判断", "从者反应和 Ruler 职阶判断适合支援防守。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/信仰支撑", "灵基和精神韧性提高续战，但不是不死。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜宝具/支援", "恢复与保护能力依赖灵基和宝具窗口。"],
        energy: ["楼级能量", "街区级能量｜防御宝具/一次性峰值", "资源主要用于防护与支援，红莲圣女类峰值需单独标注。"],
        energyRegen: ["中速回能", "快速回能｜供魔/支援", "供魔和队伍支援影响续航，不是无限回能。"]
      }),
      notes: notes({
        penetration: "常规攻击偏近战与圣旗/咏唱，破坏范围有限；红莲圣女类峰值按一次性/条件处理。",
        resistance: "旗帜防御宝具和 Ruler 抗性提供高防护，尤其适合抵挡魔力与宝具冲击。",
        sensing: "从者感知、圣女直觉和 Ruler 职阶判断提供战场识别能力。",
        tactics: "偏保护、指挥与拖延，能围绕防御宝具和队友位置构建战线。",
        special: "Ruler 灵基、圣旗防御宝具、洗礼咏唱、启示、红莲圣女类一次性峰值。",
        weakness: "攻击压制力一般，峰值效果代价和条件重；缺少主动高机动追击能力。",
        setting: "按 FGO Ruler 贞德召唤灵基记录，Alter 和泳装等灵基另行处理。",
        basis: "worldbook只用于抽取贞德姓名；定级依据公开角色资料入口和 FGO Ruler/防御宝具定位，主表突出防御而非把圣女称号换算为高攻击档。"
      })
    })
  ]);
})();

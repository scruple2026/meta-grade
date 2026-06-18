(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "gilgamesh",
    name: "吉尔伽美什",
    en: "Gilgamesh",
    ja: "ギルガメッシュ",
    aliases: ["Archer", "英雄王", "金闪闪", "吉尔"],
    affiliation: "Archer职阶 / 言峰绮礼关联",
    grade: "从者 / 英雄王",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "Gilgamesh",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "高风险宝具"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼级", "街区级｜王之财宝/Ea｜争议", "王之财宝可持续压制，Ea作为高风险条件峰值保守记录。"],
      defense: ["房屋级", "楼级｜宝具防护/黄金甲", "防御依赖宝具、距离和主动压制。"],
      movement: ["音速", "超音速｜从者机动/飞行宝具", "可用宝具和从者能力高速机动。"],
      reaction: ["音速", "超音速｜从者战/慢心波动", "基础反应很高，但慢心会显著影响发挥。"],
      vitality: ["楼级生命阈值", "楼级生命阈值｜从者灵基", "灵基承伤强但并非难杀型。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜供魔/宝具", "恢复依赖供魔和宝具条件。"],
      energy: ["街区级能量｜王之财宝", "街区级能量｜Ea/宝具库｜争议", "总资源来自宝具库和魔力，非无限能量。"],
      energyRegen: ["中速回能", "快速回能｜供魔/宝具库", "宝具库供应多样，但魔力和慢心限制仍存在。"]
    }),
    notes: notes({
      penetration: "王之财宝以多宝具投射、属性克制和压制为主，Ea高风险峰值需单独标注。",
      resistance: "拥有多种宝具和黄金甲，但被慢心、相性和近身突入克制过。",
      sensing: "千里眼和王之财宝知识极强，但常因傲慢不全力使用。",
      tactics: "资源库和相性压制极强，慢心导致战术波动很大。",
      special: "王之财宝、Ea、天之锁、黄金甲、英雄王收藏。",
      weakness: "慢心、相性、御主/供魔状态和不愿认真出手是核心短板。",
      setting: "按第五次圣杯战争吉尔伽美什记录，Fate/Zero状态后续另算或作为前史。",
      basis: "worldbook只用于抽取吉尔伽美什姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，Ea不展开为更高宇宙论档。"
    })
  })]);
})();

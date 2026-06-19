(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];
  if (!work) throw new Error("Fate/Grand Order work metadata must load before character files.");

  registerCharacters([work.character({
    id: "indra",
    name: "因陀罗",
    en: "Indra",
    ja: "インドラ",
    aliases: ["帝释天", "众神之王", "天空之主", "因陀罗·摩伽婆", "Vritrahan", "Indra Maghavan"],
    affiliation: "迦勒底召唤 / 印度神话神性",
    grade: "Lancer / Grand Lancer候补语境",
    appearances: ["Fate/Grand Order"],
    timelineStatus: "FGO 召唤灵基 / Lancer",
    fandomSlug: "Indra",
    confidence: "review",
    evidenceType: ["角色页入口", "worldbook名字索引", "神性/Grand语境"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "TYPE-MOON Wiki: Indra",
      url: "https://typemoon.fandom.com/wiki/Indra",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对因陀罗 Lancer/Grand Lancer语境、印度神话神性、Vajra和Vasavi Shakti相关资料入口。"
    }, {
      type: "wiki",
      scope: "游戏资料入口",
      label: "Fate/Grand Order Wiki: Indra",
      url: "https://fategrandorder.fandom.com/wiki/Indra",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于交叉核对FGO从者编号、职阶、技能和宝具入口。"
    }],
    revisionNotes: [
      "从型月DLC worldbook 的因陀罗 key/comment 补入；未采用 worldbook 正文描述。",
      "众神之王、Grand Lancer语境和神话原型不直接换算为宇宙级裸面板。"
    ],
    dimensions: dims({
        attack: ["楼级", "街区级｜神性/Vajra/Vasavi Shakti｜争议", "高神性和雷霆武装提供强爆发，但资料入口不足以直接换算大尺度破坏。"],
        defense: ["楼级", "街区级｜神性/灵基", "神性与从者灵基提高承伤，权能抗性另按相性处理。"],
        movement: ["音速", "超音速｜从者机动/神性", "Lancer灵基与神性支撑高速机动。"],
        reaction: ["音速", "超音速｜从者反应/神王战斗经验", "高端从者反应和战斗经验支撑高速攻防。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜神性/灵基", "神性与灵基提高生命阈值，但不写作无限生命。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜神性/供魔", "恢复依赖灵基、供魔和战斗环境。"],
        energy: ["楼级能量", "街区级能量｜神性/雷霆武装/宝具", "神性、雷霆权能和宝具支撑高资源峰值，不等同无限能量。"],
        energyRegen: ["中速回能", "快速回能｜供魔/神性", "供魔和神性支撑持续战斗，但大招仍有窗口与消耗。"]
      }),
    notes: notes({
        penetration: "Vajra、Vasavi Shakti、雷霆神性和对魔性/神性相性可提高穿透与爆发，但不把神名直接换算为大尺度破坏。",
        resistance: "神性、从者灵基和神王格位提高抗性；具体概念/精神/神性相性需按对手另判。",
        sensing: "从者感知、神性视角和战场判断提供索敌优势。",
        tactics: "神王与武神语境下的正面战斗经验强，擅长以高速枪兵机动和雷霆爆发压制。",
        special: "Lancer灵基、印度神话神性、Grand Lancer语境、Vajra、Vasavi Shakti、雷霆权能。",
        weakness: "Grand语境、神话原型和宝具峰值均依赖具体灵基/剧情条件；不并入其它神话版本或阿周那/迦尔纳面板。",
        setting: "按 FGO Lancer 因陀罗召唤灵基记录。",
        basis: "worldbook只用于抽取因陀罗姓名；定级依据TYPE-MOON Wiki和FGO Wiki入口，神性、Grand和雷霆武装作为条件/特殊项保守记录。"
      })
  })]);
})();

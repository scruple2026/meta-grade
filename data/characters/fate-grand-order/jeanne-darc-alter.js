(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jeanne-darc-alter",
      name: "贞德Alter",
      en: "Jeanne d'Arc Alter",
      ja: "ジャンヌ・ダルク〔オルタ〕",
      affiliation: "迦勒底召唤 / 复仇者从者",
      grade: "Avenger / 龙之魔女",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Avenger",
      aliases: ["黑贞", "黑贞德", "龙之魔女", "Jalter", "Jeanne Alter", "Jeanne d'Arc Alter"],
      fandomSlug: "Jeanne_d%27Arc_Alter",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Jeanne d'Arc Alter",
          url: "https://typemoon.fandom.com/wiki/Jeanne_d%27Arc_Alter",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对贞德Alter 的 Avenger 灵基、龙之魔女、宝具和 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手和型月DLC worldbook 的贞德Alter/黑贞 key/comment 补入；未采用 worldbook 正文描述。",
        "Ruler、Berserker、Santa Lily 等变体未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/龙之魔女｜争议", "Avenger 灵基偏进攻，峰值来自火焰、诅咒和宝具。"],
        defense: ["楼级", "街区级｜灵基/怨念", "承伤按从者灵基和怨念支撑记录，低于白贞的防御宝具定位。"],
        movement: ["音速", "超音速｜从者机动", "按从者级机动保守记录。"],
        reaction: ["音速", "超音速｜从者反应/战斗本能", "复仇者灵基和战斗经验支撑高速反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/怨念", "灵基与复仇者性质提高续战，但仍可被核心伤害击倒。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/怨念", "恢复依赖灵基、供魔和怨念支撑。"],
        energy: ["楼级能量", "街区级能量｜宝具/龙之魔女", "资源池和爆发高于常规低端从者，未按龙种支配外推到城市级。"],
        energyRegen: ["中速回能", "快速回能｜供魔/怨念", "供魔与复仇者性质提高续航，但不是无消耗循环。"]
      }),
      notes: notes({
        penetration: "以火焰、诅咒、旗枪和宝具爆发为主，单体杀伤和压制强于大范围稳定破坏。",
        resistance: "从者灵基和 Avenger 怨念提供抗性；精神、净化、圣属性相性需按对手具体判断。",
        sensing: "从者感知和对敌意/复仇对象的敏锐判断可辅助战斗。",
        tactics: "攻击性强，擅长压迫、嘲讽和抓破绽；情绪化会降低长期资源管理稳定性。",
        special: "Avenger 灵基、龙之魔女、诅咒与火焰、宝具、复仇者怨念。",
        weakness: "缺少白贞式团队防御宝具；情绪与复仇心可能导致冒进，高峰值依赖供魔和宝具窗口。",
        setting: "按 FGO Avenger 贞德Alter召唤灵基记录，其他变体另行处理。",
        basis: "worldbook只用于抽取贞德Alter姓名；定级依据公开角色资料入口和 FGO Avenger/龙之魔女语境，攻击峰值保守写街区级争议。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ishtar",
      name: "伊什塔尔",
      en: "Ishtar",
      ja: "イシュタル",
      affiliation: "迦勒底召唤 / 女神拟似从者",
      grade: "Archer / 女神拟似从者",
      appearances: ["Fate/Grand Order"],
      timelineStatus: "FGO 召唤灵基 / Archer",
      aliases: ["弓凛", "Rinshtar", "女神凛", "金星女神", "天之女主人", "Ishtar"],
      fandomSlug: "Ishtar",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Ishtar",
          url: "https://typemoon.fandom.com/wiki/Ishtar",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对伊什塔尔的 Archer 灵基、女神拟似从者、神性、宝具与 FGO 登场范围。"
        }
      ],
      revisionNotes: [
        "从命运之夜酒馆助手和型月DLC worldbook 的伊什塔尔 key/comment 补入；未采用 worldbook 正文描述。",
        "宇宙伊什塔尔/Space Ishtar 属从者宇宙替代角色，未并入本条主面板。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜宝具/女神权能｜争议", "从者灵基和女神权能提供高输出，未把神话名号直接外推到城市级以上。"],
        defense: ["楼级", "街区级｜灵基/神性｜争议", "灵基承伤强，神性与魔力可提高峰值防护。"],
        movement: ["音速", "超音速｜从者机动", "按从者机动和 Archer 战斗速度保守记录。"],
        reaction: ["音速", "超音速｜从者反应/神性直觉", "反应按从者级战斗和神性辅助判断。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜灵基/神性", "灵基与神性提高生命阈值，但核心受创仍会失能。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/神性", "恢复依赖灵基、供魔和战斗环境。"],
        energy: ["楼级能量", "街区级能量｜宝具/女神权能", "宝具和女神权能提高资源池峰值，未写成无限。"],
        energyRegen: ["中速回能", "快速回能｜供魔/神性", "供魔和神性循环可支撑多轮爆发，但不是无消耗。"]
      }),
      notes: notes({
        penetration: "以远程魔力弹、宝石/神性攻击和宝具为主，峰值有高威力但需区分集中打击与大范围破坏。",
        resistance: "从者灵基和神性提供常规物理/魔力抗性；对概念、封印、精神等仍需看具体相性。",
        sensing: "从者感知、神性直觉和远程射击经验可辅助索敌，但不等同全知或未来视。",
        tactics: "战斗中自信且擅长火力压制；性格和资源调度可能带来误判。",
        special: "女神拟似从者、神性、金星相关权能、宝具、远程魔力火力。",
        weakness: "高峰值依赖灵基、供魔与宝具窗口；神话本体权能不能无条件并入召唤灵基。",
        setting: "按 FGO Archer 伊什塔尔记录；从者宇宙的宇宙伊什塔尔另属独立语境。",
        basis: "worldbook只用于抽取伊什塔尔姓名；定级依据公开角色资料入口和 FGO 从者/女神拟似从者语境，保守停在街区级争议峰值。"
      })
    })
  ]);
})();

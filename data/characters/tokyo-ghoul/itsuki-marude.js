(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "itsuki-marude",
      name: "丸手斋",
      en: "Itsuki Marude",
      ja: "丸手斎",
      affiliation: "CCG",
      grade: "搜查官 / 指挥官",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "安定区篇 / CCG 指挥官",
      aliases: ["丸手", "Marude"],
      fandomSlug: "Itsuki_Marude",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "砖级｜枪械/装备", "主要不是近战输出型。"],
        defense: ["凡人级", "砖级｜防护装备", "本体是训练人类。"],
        movement: ["凡人速", "凡人速", "无超常位移表现。"],
        reaction: ["凡人速", "亚音速｜战场经验", "战场判断强于身体速度。"],
        vitality: ["强化凡体", "强化凡体", "训练人类水平。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["凡人能量", "砖级能量｜装备/指挥资源", "个人资源以体力和携行装备为主。"],
        energyRegen: ["无回能", "中速回能｜休整/补给", "需要休整和补给。"]
      }),
      notes: notes({
        penetration: "个人输出主要来自枪械、装备和指挥资源，不按强力库因克近战角色处理。",
        resistance: "本体人类，防护装备无法承受高阶喰种正面压制。",
        sensing: "战场态势判断、组织内异常察觉和指挥视野强。",
        tactics: "指挥、调度、质疑异常命令和组织政治判断是核心价值。",
        special: "CCG 指挥、作战调度、组织情报判断。",
        weakness: "个人正面战斗面板低，依赖部队、情报和火力体系。",
        setting: "按安定区篇丸手斋记录。",
        basis: "worldbook只用于抽取丸手斋姓名；定级依据公开角色资料入口和 CCG 指挥官定位，个人面板保守。"
      })
    })
  ]);
})();

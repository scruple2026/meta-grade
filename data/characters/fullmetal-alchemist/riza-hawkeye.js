(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "riza-hawkeye",
      name: "莉莎·霍克艾",
      en: "Riza Hawkeye",
      ja: "リザ・ホークアイ",
      affiliation: "亚美斯多利斯军部",
      grade: "中尉 / 射击专家",
      appearances: ["正篇", "约定之日"],
      timelineStatus: "正篇 / 约定之日",
      aliases: ["霍克艾中尉", "鹰眼", "Hawkeye"],
      fandomSlug: "Riza_Hawkeye",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从 worlds 名字池补入正式 roster；只按公开角色资料和正篇战斗定位保守初稿。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜枪械/爆炸物", "主输出来自手枪、步枪和战场火力配合，不按炼金术大范围破坏处理。"],
        defense: ["凡人级", "砖级｜防弹装备/掩体", "本体是训练有素的人类士兵，防御依赖掩体、距离和装备。"],
        movement: ["凡人速", "凡人速", "无超常移动能力。"],
        reaction: ["凡人速", "亚音速｜射击预判", "优秀枪手反应和瞄准，不能直接等同躲避子弹。"],
        vitality: ["凡人肉身", "强化凡体", "军人训练和意志支撑续战，但仍是普通人体结构。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "墙级能量｜弹药/爆炸物", "资源来自弹药与携行装备，不是超自然能量池。"],
        energyRegen: ["无回能", "无回能", "弹药消耗后需要补给。"]
      }),
      notes: notes({
        penetration: "枪械以高速穿透和精确命中为主，可针对要害、掩体缝隙和炼金术师施术窗口；不具备大范围炼金破坏。",
        resistance: "靠军人训练、战术站位和掩体降低风险，本体没有炼金防护或再生。",
        sensing: "优秀观察力、射击距离感和战场警戒，能快速识别敌人动作与友军火线。",
        tactics: "擅长火力掩护、要害射击、保护罗伊并纠正其失控决策；单兵面对超常高速或厚甲目标时需要队友配合。",
        special: "精密射击、军用枪械、战场指挥与火力支援。",
        weakness: "本体脆弱，依赖弹药、视线和射击距离；近身被高速压制或失去武器时战力下降明显。",
        setting: "按正篇约定之日附近的军人状态记录，不把其背部炼金资料视为本人可用炼金能力。",
        basis: "依据莉莎在军部行动、约定之日协同作战和射击支援中的稳定表现保守定级。"
      })
    })
  ]);
})();

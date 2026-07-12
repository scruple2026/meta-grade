(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "misato-katsuragi",
      name: "葛城美里",
      en: "Misato Katsuragi",
      ja: "葛城ミサト",
      affiliation: "NERV",
      grade: "作战部长 / 指挥官",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版前后 / NERV作战指挥",
      aliases: ["美里", "Misato"],
      fandomSlug: "Misato_Katsuragi",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜手枪/战术火力", "个人输出为枪械和战术装备。"],
        defense: ["凡人级", "砖级｜防护/掩体", "本体是训练成年人。"],
        movement: ["凡人速", "凡人速", "无超常移动。"],
        reaction: ["凡人速", "凡人速", "依靠军人训练和指挥判断。"],
        vitality: ["凡人肉身", "强化凡体", "可在重伤下行动但仍为人类。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["凡人能量", "砖级能量｜枪械/指挥资源", "个人资源来自装备和NERV火力调度。"],
        energyRegen: ["中速回能", "中速回能", "按普通体力恢复。"]
      }),
      notes: notes({
        penetration: "个人武器以手枪和战术装备为主，真正战场影响来自指挥EVA与NERV火力。攻击速度：美里的手枪子弹离膛后明显快于本人移动，EVA与NERV炮火则需经过指挥链执行，不属于她的个人出手速度。",
        resistance: "本体没有超常防御，靠掩体、战术路线和队友保护。",
        sensing: "战场态势判断、使徒行动分析和指挥系统信息读取能力强。",
        tactics: "作战计划、临场指挥和牺牲性决断是核心价值，可把EVA资源发挥到高上限。",
        special: "NERV作战指挥、使徒战术分析、军事训练。",
        weakness: "个人战斗力有限，强依赖NERV系统、EVA驾驶员和可用火力。",
        setting: "按 TV/旧剧场版美里记录。",
        basis: "依据美里作为NERV作战部长在多次使徒战和旧剧场版中的指挥、枪械和个人行动表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["电锯人"];

  if (!work) {
    throw new Error("电锯人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "aki-hayakawa",
      name: "早川秋",
      en: "Aki Hayakawa",
      ja: "早川アキ",
      category: "主角团",
      affiliation: "公安对魔特异课",
      grade: "公安恶魔猎人 / 契约者",
      appearances: ["公安篇"],
      timelineStatus: "枪魔人前 / 契约综合",
      aliases: ["狐之恶魔契约", "未来恶魔契约"],
      fandomSlug: "Aki_Hayakawa",
      dimensions: dims({
        attack: ["砖级", "房屋级｜契约恶魔", "常态刀术偏低，契约恶魔可提供单体高杀伤。"],
        defense: ["凡人级", "墙级｜战斗服与规避", "本体为人类，靠训练和契约规避风险。"],
        movement: ["凡人速", "亚音速", "优秀人类战斗员，不按超常高速定级。"],
        reaction: ["凡人速", "亚音速｜未来视", "未来恶魔提供预知，不等同纯反应速度。"],
        vitality: ["强化凡体", "精锐韧体", "重伤后可短时行动，但仍受人类生命限制。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["凡人能量", "房屋级能量｜契约外源｜代价", "常态只有人类体力；峰值记录契约恶魔可调用的战斗资源，不代表自身储能。"],
        energyRegen: ["无回能", "无回能", "契约代价不可自然回复。"]
      }),
      notes: notes({
        penetration: "狐之恶魔、诅咒之恶魔等契约可造成高于常态的单体杀伤。",
        resistance: "人类本体脆弱，对恶魔高速突袭和大范围攻击风险高。",
        special: "狐之恶魔、诅咒之恶魔、未来恶魔契约、刀术。",
        weakness: "契约代价沉重，身体和寿命消耗不可忽略。",
        setting: "按成为枪魔人前的早川秋记录；枪魔人作为被支配状态不并入常态。",
        basis: "依据早川秋对武士刀、恶魔任务和未来恶魔契约表现定级。"
      })
    })
  ]);
})();

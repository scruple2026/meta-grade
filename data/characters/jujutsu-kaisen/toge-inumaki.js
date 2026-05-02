(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "toge-inumaki",
      name: "狗卷棘",
      en: "Toge Inumaki",
      ja: "狗巻棘",
      category: "主角团",
      affiliation: "东京咒术高专",
      grade: "主角团 / 咒言师",
      appearances: ["咒术回战0", "正篇漫画/动画"],
      timelineStatus: "",
      aliases: ["咒言", "Inumaki"],
      fandomSlug: "Toge_Inumaki",
      dimensions: dims({
        attack: ["墙级", "楼级｜咒言", "咒言能强制目标行动或受创，强度受目标和反噬限制。"],
        defense: ["凡人级", "墙级｜咒力防护", "肉身承伤一般。"],
        movement: ["亚音速", "亚音速", "术师级基础机动，未表现稳定声速位移。"],
        reaction: ["亚音速", "亚音速", "能参与中高强度团队战，但主要依赖咒言条件和团队配合。"],
        vitality: ["强化凡体", "精锐韧体｜反噬承受", "强咒言会反噬喉咙与身体。"],
        healing: ["无自愈", "无自愈", "没有自愈表现。"],
        energy: ["墙级能量", "楼级能量｜咒言", "咒言越强消耗和反噬越高。"],
        energyRegen: ["常规回能", "常规回能", "无高强度回能表现。"]
      }),
      notes: notes({
        penetration: "咒言是命令型特殊杀伤，命中条件是听觉/媒介，不等同破坏规模。",
        resistance: "反噬是主要限制；对强目标使用会自损。",
        special: "咒言、饭团语、语音命令。",
        weakness: "强敌抗性和反噬限制明显；长期战和无声环境不利。",
        setting: "按咒术回战0和正篇综合记录。",
        basis: "依据对低中阶咒灵、花御和咒术回战0中的咒言使用表现定级。"
      })
    })
  ]);
})();

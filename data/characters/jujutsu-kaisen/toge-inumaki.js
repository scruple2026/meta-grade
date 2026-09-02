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
      affiliation: "东京咒术高专",
      grade: "主角团 / 咒言师",
      appearances: ["咒术回战0", "正篇漫画/动画"],
      timelineStatus: "",
      aliases: ["咒言", "Inumaki"],
      fandomSlug: "Toge_Inumaki",
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜咒言", "咒言能强制目标行动或受创，强度受目标和反噬限制。"],
        defense: ["凡人级", "墙体级｜咒力防护", "肉身承伤一般。"],
        movement: ["亚音速", "亚音速", "术师级基础机动，未表现稳定声速位移。"],
        reaction: ["亚音速", "亚音速", "能参与中高强度团队战，但主要依赖咒言条件和团队配合。"],
        vitality: ["强化凡体", "精锐韧体｜反噬承受", "强咒言会反噬喉咙与身体。"],
        healing: ["无自愈", "无自愈", "没有自愈表现。"],
        energy: ["墙体级能量", "楼宇级能量｜咒言", "咒言越强消耗和反噬越高。"],
        energyRegen: ["中速回能", "中速回能", "无高强度回能表现。"]
      }),
      notes: notes({
        penetration: "咒言是命令型特殊杀伤，命中条件是听觉/媒介，不等同破坏规模。攻击速度：狗卷必须发声并让目标通过听觉或媒介接收咒言，命令随后生效；声波传达、命令效果与他的身体反应不能混成一项。",
        resistance: "反噬是主要限制；对强目标使用会自损。",
        sensing: "主要依赖咒力感知、视听观察和对目标强弱的经验判断；咒言需要确认命令对象和距离，不提供额外索敌。",
        tactics: "团队支援意识强，擅长用短命令打断、控场和救援；强敌反噬和无声环境会迫使他保守使用能力。",
        special: "咒言通过声音命令强制目标行动或受创，饭团语用于降低误触发；扩音器等媒介可扩大命令覆盖，但反噬随目标强度上升。",
        weakness: "强敌抗性和反噬限制明显；长期战和无声环境不利。",
        setting: "按咒术回战0和正篇综合记录；涩谷后伤势不另开主面板，咒言反噬和媒介条件写入特殊权能。",
        basis: "依据对低中阶咒灵、花御和咒术回战0中的咒言使用表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法少女小圆"];

  if (!work) {
    throw new Error("魔法少女小圆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mami-tomoe",
      name: "巴麻美",
      en: "Mami Tomoe",
      ja: "巴マミ",
      affiliation: "见泷原中学 / 魔法少女",
      grade: "资深魔法少女 / 缎带与火枪",
      appearances: ["TV动画"],
      timelineStatus: "TV本篇 / 资深魔法少女",
      aliases: ["麻美", "学姐", "Mami"],
      fandomSlug: "Mami_Tomoe",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜火枪/终曲", "魔法火枪和Tiro Finale具高单体与区域压制。"],
        defense: ["墙级", "楼级｜缎带/魔法防御", "缎带束缚和魔法防御支撑承伤。"],
        movement: ["亚音速", "亚音速", "魔法少女机动。"],
        reaction: ["亚音速", "亚音速｜经验", "资深魔法少女经验强。"],
        vitality: ["强化凡体", "精锐韧体｜灵魂宝石", "生命依赖灵魂宝石。"],
        healing: ["中速自愈｜魔力修复", "快速自愈｜魔力修复", "受魔力与污浊限制。"],
        energy: ["墙级能量", "楼级能量｜火枪/缎带", "魔力支持大量武器生成。"],
        energyRegen: ["快速回能", "快速回能｜悲叹之种/休整", "需净化灵魂宝石。"]
      }),
      notes: notes({
        penetration: "火枪齐射、缎带束缚和Tiro Finale适合先控后杀。",
        resistance: "魔法防御和经验强，但灵魂宝石、近身偷袭和信息不足是风险。",
        sensing: "魔法少女对魔女结界和使魔有经验，能指导新人。",
        tactics: "成熟、优雅，擅长控制距离、束缚和火力压制；过度放松会被突袭。",
        special: "缎带魔法、火枪生成、Tiro Finale、灵魂宝石。",
        weakness: "灵魂宝石机制、魔力污浊和近身咬杀类突袭是关键风险。",
        setting: "按TV本篇巴麻美记录。",
        basis: "依据巴麻美作为资深魔法少女对魔女和使魔的缎带、火枪和指导表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nezuko-kamado",
      name: "灶门祢豆子",
      en: "Nezuko Kamado",
      ja: "竈門禰豆子",
      category: "主角团",
      affiliation: "灶门家 / 鬼杀队协力",
      grade: "特殊鬼 / 主角团",
      appearances: ["立志篇", "游郭篇", "刀匠村篇", "无限城篇"],
      timelineStatus: "刀匠村后 / 克服阳光前后特殊鬼状态",
      aliases: ["爆血", "克服阳光"],
      fandomSlug: "Nezuko_Kamado",
      dimensions: dims({
        attack: ["墙级", "房屋级｜爆血｜鬼化", "体术和爆血能压制普通鬼并克制鬼血术。"],
        defense: ["房屋级", "房屋级｜鬼体", "鬼体承伤高于人类，但不按大范围防御定级。"],
        movement: ["亚音速", "亚音速｜鬼化", "鬼化状态爆发机动强，但缺少稳定声速位移证据。"],
        reaction: ["亚音速", "亚音速｜鬼化", "能在近战中支援炭治郎和柱级战斗，不按同场战斗自动抬到音速。"],
        vitality: ["精锐韧体｜鬼", "精锐韧体｜克服阳光", "鬼体和克服阳光使生命结构异常。"],
        healing: ["快速自愈｜鬼", "极速自愈｜鬼化", "可再生肢体和重伤，但受体力与状态影响。"],
        energy: ["墙级能量", "房屋级能量｜爆血", "血鬼术和鬼化爆发消耗明显。"],
        energyRegen: ["快速回能", "极速回能｜休眠恢复", "长时间休眠可恢复大量消耗。"]
      }),
      notes: notes({
        penetration: "爆血对鬼和鬼血术具备特殊克制，可燃烧鬼性目标。",
        resistance: "克服阳光是重大特殊抗性；仍可被日轮刀、无惨控制等体系因素威胁。",
        special: "鬼化、身体大小变化、爆血、快速再生、克服阳光。",
        weakness: "早期需要睡眠恢复；理智和状态曾不稳定。",
        setting: "按克服阳光前后综合记录，未把最终人类化后状态作为战斗常态。",
        basis: "依据祢豆子在游郭篇、刀匠村篇中的鬼化、爆血、再生和克服阳光表现定级。"
      })
    })
  ]);
})();

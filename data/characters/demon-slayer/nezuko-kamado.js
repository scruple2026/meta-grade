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
      affiliation: "灶门家 / 鬼杀队协力",
      grade: "特殊鬼 / 主角团",
      appearances: ["立志篇", "游郭篇", "刀匠村篇", "无限城篇"],
      timelineStatus: "刀匠村后 / 克服阳光前后特殊鬼状态",
      aliases: ["爆血", "克服阳光"],
      fandomSlug: "Nezuko_Kamado",
      defaultTimelineKey: "sun-conquered",
      timelinePanels: [
        {
          key: "early-demon",
          label: "早期 / 鬼化适应期",
          status: "睡眠恢复与基础鬼体",
          dimensions: dims({
            attack: ["墙体级", "墙体级｜鬼体", "体术强于常人和普通鬼，但血鬼术尚未稳定突出。"],
            defense: ["墙体级", "房屋级｜鬼体", "鬼体可承受和修复重伤。"],
            movement: ["亚音速", "亚音速｜鬼体", "短距爆发机动强。"],
            reaction: ["亚音速", "亚音速", "可支援炭治郎进行近战。"],
            vitality: ["精锐韧体｜鬼", "精锐韧体｜鬼", "鬼体生命结构异常。"],
            healing: ["快速自愈｜鬼", "快速自愈｜鬼", "可再生明显伤势，但恢复依赖睡眠。"],
            energy: ["墙体级能量", "墙体级能量｜鬼体", "战斗资源有限。"],
            energyRegen: ["快速回能", "快速回能｜休眠恢复", "主要通过睡眠恢复。"]
          }),
          notes: "不计入游郭篇爆血强化和克服阳光。"
        },
        {
          key: "entertainment-awakened",
          label: "游郭篇 / 鬼化爆发",
          status: "爆血与成年化鬼化",
          dimensions: dims({
            attack: ["墙体级", "房屋级｜爆血｜鬼化", "爆血和鬼化体术提升明显。"],
            defense: ["房屋级", "房屋级｜鬼体", "再生和鬼体承伤突出。"],
            movement: ["亚音速", "亚音速｜鬼化", "鬼化后近战爆发提升。"],
            reaction: ["亚音速", "亚音速｜鬼化", "可介入上弦相关战斗。"],
            vitality: ["精锐韧体｜鬼", "精锐韧体｜鬼化", "高再生但状态稳定性不足。"],
            healing: ["快速自愈｜鬼", "极速自愈｜鬼化", "重伤再生速度显著。"],
            energy: ["墙体级能量", "房屋级能量｜爆血", "血鬼术消耗提高。"],
            energyRegen: ["快速回能", "极速回能｜休眠恢复", "依赖睡眠和鬼体恢复。"]
          }),
          notes: "此阶段理智控制仍是限制。"
        },
        {
          key: "sun-conquered",
          label: "刀匠村后 / 克服阳光",
          status: "克服阳光前后特殊鬼状态",
          dimensions: dims({
            attack: ["墙体级", "房屋级｜爆血｜鬼化", "体术和爆血能压制普通鬼并克制鬼血术。"],
            defense: ["房屋级", "房屋级｜鬼体", "鬼体承伤高于人类，但不按大范围防御定级。"],
            movement: ["亚音速", "亚音速｜鬼化", "鬼化状态爆发机动强，但缺少稳定声速位移证据。"],
            reaction: ["亚音速", "亚音速｜鬼化", "能在近战中支援炭治郎和柱级战斗，不按同场战斗自动抬到音速。"],
            vitality: ["精锐韧体｜鬼", "精锐韧体｜克服阳光", "鬼体和克服阳光使生命结构异常。"],
            healing: ["快速自愈｜鬼", "极速自愈｜鬼化", "可再生肢体和重伤，但受体力与状态影响。"],
            energy: ["墙体级能量", "房屋级能量｜爆血", "血鬼术和鬼化爆发消耗明显。"],
            energyRegen: ["快速回能", "极速回能｜休眠恢复", "长时间休眠可恢复大量消耗。"]
          }),
          notes: "当前主面板版本；最终人类化不作为战斗常态。"
        }
      ],
      dimensions: dims({
        attack: ["墙体级", "房屋级｜爆血｜鬼化", "体术和爆血能压制普通鬼并克制鬼血术。"],
        defense: ["房屋级", "房屋级｜鬼体", "鬼体承伤高于人类，但不按大范围防御定级。"],
        movement: ["亚音速", "亚音速｜鬼化", "鬼化状态爆发机动强，但缺少稳定声速位移证据。"],
        reaction: ["亚音速", "亚音速｜鬼化", "能在近战中支援炭治郎和柱级战斗，不按同场战斗自动抬到音速。"],
        vitality: ["精锐韧体｜鬼", "精锐韧体｜克服阳光", "鬼体和克服阳光使生命结构异常。"],
        healing: ["快速自愈｜鬼", "极速自愈｜鬼化", "可再生肢体和重伤，但受体力与状态影响。"],
        energy: ["墙体级能量", "房屋级能量｜爆血", "血鬼术和鬼化爆发消耗明显。"],
        energyRegen: ["快速回能", "极速回能｜休眠恢复", "长时间休眠可恢复大量消耗。"]
      }),
      notes: notes({
        penetration: "爆血对鬼和鬼血术具备特殊克制，可燃烧鬼性目标。攻击速度：踢击随祢豆子的近身动作，爆血要先让自身血液接触目标再点燃；火焰显现不是无条件跨距瞬时命中。",
        resistance: "克服阳光是重大特殊抗性；仍可被日轮刀、无惨控制等体系因素威胁。",
        sensing: "鬼化五感和对血鬼术/亲近对象的反应让她能支援近战，但缺少系统索敌或通透世界。",
        tactics: "战术多为保护与爆血反制，能抓住炭治郎创造的窗口；理智状态和恢复周期会影响主动判断。",
        special: "鬼化、身体大小变化、爆血、快速再生、克服阳光。",
        weakness: "早期需要睡眠恢复；理智和状态曾不稳定。",
        setting: "按克服阳光前后综合记录，未把最终人类化后状态作为战斗常态。",
        basis: "依据祢豆子在游郭篇、刀匠村篇中的鬼化、爆血、再生和克服阳光表现定级。"
      })
    })
  ]);
})();

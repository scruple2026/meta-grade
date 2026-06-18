(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nico-robin",
      name: "妮可·罗宾",
      en: "Nico Robin",
      ja: "ニコ・ロビン",
      affiliation: "草帽一伙",
      grade: "考古学家 / 花花果实能力者",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 恶魔形态",
      aliases: [],
      fandomSlug: "Nico_Robin",
      dimensions: dims({
        attack: ["墙级", "楼级｜恶魔形态", "花花果实可进行关节锁、巨肢打击和范围压制。"],
        defense: ["凡人级", "墙级｜规避/分身", "本体防御有限。"],
        movement: ["凡人速", "亚音速｜能力辅助", "位移能力不突出。"],
        reaction: ["凡人速", "亚音速", "战场控制与预判较强。"],
        vitality: ["强化凡体", "强化凡体", "本体仍接近人类。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["墙级能量", "楼级能量｜恶魔形态", "大范围能力消耗体力。"],
        energyRegen: ["中速回能", "中速回能", "依赖体力恢复。"]
      }),
      notes: notes({
        penetration: "花花果实可在目标身上或周围长出肢体，主打关节锁、脊椎扭转、巨肢压制和恶魔形态的近距强控；对生物关节和多目标杂兵有效，但对无关节、元素化或高硬度目标需要另判。",
        resistance: "本体防御仍偏人类，分身和远程开花能降低本体暴露；能力生成肢体会反馈伤害，缺少霸气硬防、再生和对高速突袭的稳定抗性。",
        sensing: "花花果实可通过远处生成眼耳进行侦查和角度观察，是稳定的信息获取手段；生成部位会反馈伤害。",
        tactics: "擅长用分身、巨肢和关节技控制视线死角与要害，考古学式冷静判断强；本体被定位或高速压制时风险上升。",
        special: "花花果实、巨肢、分身、恶魔形态、关节技。",
        weakness: "大范围开花和恶魔形态消耗体力，生成肢体被攻击会牵连本体；面对高速远程火力、无生理关节目标或能定位本体的敌人风险高。",
        setting: "按和之国后恶魔形态版本记录；花花果实的控制价值写入特殊权能，不把范围控场直接换成高防御或高移动。",
        basis: "依据罗宾至和之国篇恶魔形态和花花果实控制表现定级。"
      })
    })
  ]);
})();

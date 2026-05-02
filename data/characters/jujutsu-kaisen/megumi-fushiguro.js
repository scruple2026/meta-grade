(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "megumi-fushiguro",
      name: "伏黑惠",
      en: "Megumi Fushiguro",
      ja: "伏黒恵",
      category: "主角团",
      affiliation: "东京咒术高专 / 禅院血脉",
      grade: "主角团 / 十种影法术",
      appearances: ["正篇漫画/动画", "涩谷事变", "死灭回游"],
      timelineStatus: "死灭回游前后 / 伏黑本人可控状态",
      aliases: ["十种影法术", "Fushiguro"],
      fandomSlug: "Megumi_Fushiguro",
      dimensions: dims({
        attack: ["墙级", "楼级｜领域｜式神", "本人输出依赖式神组合和未完成领域；魔虚罗只写入召唤权能，不算稳定面板。"],
        defense: ["凡人级", "墙级｜式神分担", "本体防御不高，能通过影子、式神和战术规避伤害。"],
        movement: ["亚音速", "亚音速", "术师级机动，未表现稳定声速位移。"],
        reaction: ["亚音速", "亚音速", "战术反应优秀，能在复杂局面中组织式神联动；不按弹速或术式特效抬到音速。"],
        vitality: ["强化凡体", "精锐韧体", "能在重伤中继续作战，但本体生命体量不是强项。"],
        healing: ["无自愈", "无自愈", "没有稳定自我反转术式表现。"],
        energy: ["墙级能量", "楼级能量｜领域", "领域和高阶式神消耗大。"],
        energyRegen: ["常规回能", "常规回能", "续航依赖战术节制。"]
      }),
      notes: notes({
        penetration: "式神能形成多角度夹击；嵌合暗翳庭强化命中环境，但不折算为大范围破坏。",
        resistance: "本体抗性有限，式神承伤不等于伏黑本人防御。",
        special: "十种影法术、影子收纳、式神继承、未完成领域嵌合暗翳庭、魔虚罗召唤。",
        weakness: "本体承伤、回能和正面输出不足；魔虚罗不可视为稳定可控战力。",
        setting: "魔虚罗不再单独收录；伏黑页只把召唤写入特殊权能，不计作稳定可控战力。",
        basis: "依据玉犬、鵺、满象、领域展开和八十八桥/涩谷/死灭回游中伏黑本体表现保守定级。"
      })
    })
  ]);
})();

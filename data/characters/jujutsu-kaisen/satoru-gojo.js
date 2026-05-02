(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "satoru-gojo",
      name: "五条悟",
      en: "Satoru Gojo",
      ja: "五条悟",
      category: "主角团 / 特级术师",
      affiliation: "东京咒术高专 / 五条家",
      grade: "特级术师",
      appearances: ["正篇漫画/动画", "怀玉·玉折", "涩谷事变", "新宿决战"],
      timelineStatus: "新宿决战 / 完成体五条悟",
      aliases: ["六眼", "无下限术式", "Gojo"],
      fandomSlug: "Satoru_Gojo",
      dimensions: dims({
        attack: ["楼级", "街区级｜虚式茈｜领域", "苍、赫、茈和无量空处杀伤极强；主破坏规模保守压在街区级峰值。"],
        defense: ["楼级｜无下限", "街区级｜无下限｜反转术式", "核心防御来自无下限接触阻隔，不等同肉身硬吃同规模攻击。"],
        movement: ["音速", "超音速｜术式机动", "高端近战和短距位移表现极强；瞬移不换算连续速度。"],
        reaction: ["音速", "超音速", "能处理作品顶层近战、领域和术式对抗。"],
        vitality: ["精锐韧体", "精锐韧体｜反转术式", "肉体本身仍按人类术师处理，主要依靠反转术式续战。"],
        healing: ["快速自愈｜反转术式", "极速自愈｜反转术式", "能高速修复致命伤，但仍有脑部、术式烧断等限制。"],
        energy: ["楼级能量", "街区级能量｜六眼低耗", "六眼让消耗极低，不等于无条件无限能量。"],
        energyRegen: ["快速回能｜六眼低耗", "极速回能｜六眼低耗", "以消耗效率和精密控制体现续航。"]
      }),
      notes: notes({
        penetration: "虚式茈、苍/赫和无量空处具备极强特殊杀伤；领域信息灌入不按破坏规模换算。",
        resistance: "无下限可阻隔大量接触型攻击；封印、领域必中、术式中和、空间/规则手段需另行判断。",
        special: "无下限术式、六眼、无量空处、术式反转赫、术式顺转苍、虚式茈、反转术式。",
        weakness: "无下限可被特定咒具、领域、领域展延、封印或针对性条件处理；反转和领域均有消耗与烧断限制。",
        setting: "按完成体五条记录，不把宣传式“最强”直接折算为跨作品天体量级。",
        basis: "依据怀玉后完成体、涩谷对灾害咒灵、新宿对宿傩战中无下限、领域、反转术式和虚式茈表现定级。"
      })
    })
  ]);
})();

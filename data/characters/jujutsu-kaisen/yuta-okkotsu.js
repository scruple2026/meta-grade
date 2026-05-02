(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yuta-okkotsu",
      name: "乙骨忧太",
      en: "Yuta Okkotsu",
      ja: "乙骨憂太",
      category: "主角团 / 特级术师",
      affiliation: "东京咒术高专",
      grade: "特级术师",
      appearances: ["咒术回战0", "仙台结界", "新宿决战"],
      timelineStatus: "新宿决战 / 仙台后成熟特级状态",
      aliases: ["里香", "复制", "Okkotsu"],
      fandomSlug: "Yuta_Okkotsu",
      dimensions: dims({
        attack: ["楼级", "街区级｜里香｜复制｜领域", "高咒力、里香和复制术式带来多类型高端杀伤；不按更高范围破坏处理。"],
        defense: ["墙级", "楼级｜反转术式｜里香", "咒力防护、反转术式和里香协防提升承伤。"],
        movement: ["亚音速", "音速", "高阶术师机动，未列为速度特化。"],
        reaction: ["音速", "音速", "能处理仙台结界和新宿级别高压战斗。"],
        vitality: ["精锐韧体", "精锐韧体｜反转术式", "重伤后依靠反转术式和里香支援续战。"],
        healing: ["快速自愈｜反转术式", "快速自愈｜反转术式｜他者治疗", "可治疗自己和他人。"],
        energy: ["楼级能量", "街区级能量｜里香储备", "咒力量极高，里香可作为外置储备。"],
        energyRegen: ["快速回能", "快速回能｜里香储备", "续航强，但完全显现有时间限制。"]
      }),
      notes: notes({
        penetration: "复制术式让攻击类型多变；咒言、薄冰碎裂等特殊效果按条件生效。",
        resistance: "反转术式和咒力防护强，不等于免疫领域、空间或规则型攻击。",
        special: "里香、复制、反转术式、领域展开、咒具储备。",
        weakness: "完全显现有时间限制；复制条件和储备并非无限。",
        setting: "按正篇乙骨记录，不把咒术回战0解除前的过咒怨灵里香全部算作乙骨本体。",
        basis: "依据咒术回战0、仙台结界三方战和新宿决战中乙骨的咒力、反转、复制和里香协同表现定级。"
      })
    })
  ]);
})();

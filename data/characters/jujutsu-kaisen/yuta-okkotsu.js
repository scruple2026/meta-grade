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
      affiliation: "东京咒术高专",
      grade: "特级术师",
      appearances: ["咒术回战0", "仙台结界", "新宿决战"],
      timelineStatus: "新宿决战 / 仙台后成熟特级状态",
      aliases: ["里香", "复制", "Okkotsu"],
      fandomSlug: "Yuta_Okkotsu",
      defaultTimelineKey: "sendai-shinjuku",
      timelinePanels: [
        {
          key: "jjk-zero-bound-rika",
          label: "咒术回战0 / 里香解除前",
          status: "过咒怨灵里香绑定状态",
          dimensions: dims({
            attack: ["楼宇级", "街区级｜里香｜爱之束缚", "高咒力量与里香绑定带来极高峰值，但控制和状态与正篇不同。"],
            defense: ["墙体级", "楼宇级｜里香协防", "本体防御有限，里香协防极强。"],
            movement: ["亚音速", "亚音速", "近战机动优秀但不按音速。"],
            reaction: ["亚音速", "亚音速", "早期经验不足，依赖里香支援。"],
            vitality: ["精锐韧体", "精锐韧体｜里香支援", "靠咒力和里香支援续战。"],
            healing: ["快速自愈｜反转术式", "快速自愈｜反转术式", "已能使用反转术式治疗。"],
            energy: ["楼宇级能量", "街区级能量｜里香绑定", "咒力量极高但状态特殊。"],
            energyRegen: ["快速回能", "快速回能｜里香支援", "续航强但绑定状态不可视为正篇常态。"]
          }),
          notes: "这是咒术0状态，不等同正篇解除后的里香储备机制。"
        },
        {
          key: "sendai-shinjuku",
          label: "仙台后至新宿 / 成熟特级",
          status: "复制、里香储备、领域与反转术式",
          dimensions: dims({
            attack: ["楼宇级", "街区级｜里香｜复制｜领域", "高咒力、里香和复制术式带来多类型高端杀伤；不按更高范围破坏处理。"],
            defense: ["墙体级", "楼宇级｜反转术式｜里香", "咒力防护、反转术式和里香协防提升承伤。"],
            movement: ["亚音速", "音速", "高阶术师机动，未列为速度特化。"],
            reaction: ["音速", "音速", "能处理仙台结界和新宿级别高压战斗。"],
            vitality: ["精锐韧体", "精锐韧体｜反转术式", "重伤后依靠反转术式和里香支援续战。"],
            healing: ["快速自愈｜反转术式", "快速自愈｜反转术式｜他者治疗", "可治疗自己和他人。"],
            energy: ["楼宇级能量", "街区级能量｜里香储备", "咒力量极高，里香可作为外置储备。"],
            energyRegen: ["快速回能", "快速回能｜里香储备", "续航强，但完全显现有时间限制。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["楼宇级", "街区级｜里香｜复制｜领域", "高咒力、里香和复制术式带来多类型高端杀伤；不按更高范围破坏处理。"],
        defense: ["墙体级", "楼宇级｜反转术式｜里香", "咒力防护、反转术式和里香协防提升承伤。"],
        movement: ["亚音速", "音速", "高阶术师机动，未列为速度特化。"],
        reaction: ["音速", "音速", "能处理仙台结界和新宿级别高压战斗。"],
        vitality: ["精锐韧体", "精锐韧体｜反转术式", "重伤后依靠反转术式和里香支援续战。"],
        healing: ["快速自愈｜反转术式", "快速自愈｜反转术式｜他者治疗", "可治疗自己和他人。"],
        energy: ["楼宇级能量", "街区级能量｜里香储备", "咒力量极高，里香可作为外置储备。"],
        energyRegen: ["快速回能", "快速回能｜里香储备", "续航强，但完全显现有时间限制。"]
      }),
      notes: notes({
        penetration: "复制术式让攻击类型多变；咒言、薄冰碎裂等特殊效果按条件生效。攻击速度：乙骨的剑击随近战动作，咒言在发声并被听见后生效，薄冰碎裂与其他复制术式各有发动条件；复制本身不提供统一出手速度。",
        resistance: "反转术式和咒力防护强，不等于免疫领域、空间或规则型攻击。",
        sensing: "依赖咒力感知、里香协同、反转术式经验和复制能力情报识别；完全显现期间信息与火力来源更多，但有时间限制。",
        tactics: "高压战中判断稳健，擅长把里香、咒具、复制术式和治疗串成多层保险；复制条件和显现时间要求他管理资源窗口。",
        special: "里香、复制、反转术式、领域展开、咒具储备。",
        weakness: "完全显现有时间限制；复制条件和储备并非无限。",
        setting: "按正篇乙骨记录，不把咒术回战0解除前的过咒怨灵里香全部算作乙骨本体。",
        basis: "依据咒术回战0、仙台结界三方战和新宿决战中乙骨的咒力、反转、复制和里香协同表现定级。"
      })
    })
  ]);
})();

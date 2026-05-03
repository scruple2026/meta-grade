(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "orihime-inoue",
      name: "井上织姬",
      en: "Orihime Inoue",
      ja: "井上織姫",
      affiliation: "空座町 / 代理死神阵营",
      grade: "支援核心 / 盾舜六花",
      appearances: ["正篇"],
      timelineStatus: "千年血战篇",
      aliases: [],
      fandomSlug: "Orihime_Inoue",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "TV动画「BLEACH 千年血战篇」角色页",
          url: "https://bleach-anime.com/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对千年血战篇官方角色资料；高端灵压量级仍需章节/设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜孤天斩盾", "攻击能力有限，核心价值在防护与拒绝。"],
        defense: ["街区级", "城市级｜三天结盾｜争议", "屏障可抵挡远强于本体的攻击，肉身另算。"],
        movement: ["凡人速", "凡人速", "无高速位移表现。"],
        reaction: ["凡人速", "亚音速｜屏障反应", "可在战斗中展开屏障，但不按高速战士处理。"],
        vitality: ["强化凡体", "强化凡体", "本体生命结构接近人类。"],
        healing: ["快速自愈", "瞬愈｜事象拒绝｜外部治疗", "可拒绝伤害结果进行治疗，属于特殊恢复。"],
        energy: ["街区级能量", "城市级能量｜盾舜六花｜争议", "支援能力可作用高端伤害，但不等同攻击输出。"],
        energyRegen: ["常规回能", "快速回能｜灵力恢复", "连续治疗和防护会消耗。"]
      }),
      notes: notes({
        penetration: "孤天斩盾具备有限切割/排斥攻击，但织姬核心不是输出；事象拒绝可以治疗、回溯伤害结果和展开屏障，属于支援/防御权能，不抬攻击主档。",
        resistance: "三天结盾可挡下远强于织姬肉身的攻击，双天归盾能拒绝伤害结果并治疗；本体仍接近人类，屏障反应、精神状态和六花可用性决定防御上限。",
        special: "盾舜六花、三天结盾、双天归盾、事象拒绝。",
        weakness: "杀伤能力弱，主要依赖保护与治疗；若被高速绕开屏障、精神压制、分割队友或六花受损，本体很难独立反击。",
        setting: "按千年血战篇支援核心版本记录；事象拒绝作为治疗/防护规则能力，不把可作用高端伤害直接换算为自身攻击力。",
        basis: "依据织姬在破面篇和千年血战篇的屏障与治疗表现定级，支援权能不抬攻击。"
      })
    })
  ]);
})();

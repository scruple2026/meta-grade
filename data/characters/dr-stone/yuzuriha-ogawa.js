(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yuzuriha-ogawa",
      name: "小川杠",
      en: "Yuzuriha Ogawa",
      ja: "小川杠",
      affiliation: "科学王国",
      grade: "手工/缝制支援",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 科学王国",
      aliases: ["杠", "Yuzuriha"],
      fandomSlug: "Yuzuriha_Ogawa",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级", "非主战角色。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "强化凡体｜长期劳动", "具备较好耐心和劳动续航。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "砖级能量｜手工/后勤", "资源价值在精细手工和后勤。"],
        energyRegen: ["中速回能", "缓慢回能｜材料/后勤", "需要材料和时间。"]
      }),
      notes: notes({
        penetration: "直接战斗能力低。攻击速度：杠主要从事修复和支援，未展示稳定战斗招式；临时使用工具或拳脚也只按凡人动作处理。",
        resistance: "无特殊抗性。",
        sensing: "精细观察和手工判断较好。",
        tactics: "通过缝制、修复和细致后勤支持科学王国。",
        special: "手工、缝制、复原支援和后勤。",
        weakness: "非前线战斗员，遭遇战能力有限。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取小川杠姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();

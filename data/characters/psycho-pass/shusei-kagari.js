(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shusei-kagari",
      name: "縢秀星",
      en: "Shusei Kagari",
      ja: "縢秀星",
      affiliation: "公安一系 / 执行官",
      grade: "执行官",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 诺娜塔事件前后",
      aliases: ["縢", "Kagari"],
      fandomSlug: "Shusei_Kagari",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖块级", "墙体级｜Dominator/枪械", "执行官装备和Dominator火力。"],
        defense: ["凡人级", "砖块级｜防具/训练", "肉身仍是人类。"],
        movement: ["凡人速", "亚音速｜执行官训练", "行动员机动。"],
        reaction: ["凡人速", "亚音速｜执行官训练", "执行官训练反应。"],
        vitality: ["强化凡体", "强化凡体", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["砖块级能量｜体能/武器", "墙体级能量｜Dominator/公安资源", "资源来自武器和Dominator。"],
        energyRegen: ["中速回能", "缓慢回能｜补给", "装备需要补给。"]
      }),
      notes: notes({
        penetration: "Dominator、枪械和执行官战术。攻击速度：縢使用Dominator时需经历举枪、瞄准和系统判定；普通枪械则在击发后由弹丸独立飞行，两者不能混为同一种发射流程。",
        resistance: "无特殊抗性，面对西比拉系统级处置极脆弱。",
        sensing: "公安情报、现场观察和执行官经验。",
        tactics: "行动灵活，能担任现场追踪和支援。",
        special: "Dominator使用、执行官权限、潜在犯身份。",
        weakness: "Dominator受系统判定限制；被西比拉核心掌握时几乎无反制空间。",
        setting: "按第一季诺娜塔事件前后记录。",
        basis: "worldbook只用于抽取縢秀星姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();

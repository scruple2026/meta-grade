(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yayoi-kunizuka",
      name: "六合冢弥生",
      en: "Yayoi Kunizuka",
      ja: "六合塚弥生",
      affiliation: "公安一系 / 执行官",
      grade: "执行官",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 执行官",
      aliases: ["六合冢", "Yayoi"],
      fandomSlug: "Yayoi_Kunizuka",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜Dominator/枪械", "执行官训练和Dominator火力。"],
        defense: ["凡人级", "砖级｜防具/训练", "肉身仍是人类。"],
        movement: ["凡人速", "亚音速｜执行官训练", "受训行动员机动。"],
        reaction: ["凡人速", "亚音速｜执行官训练", "受训反应优秀。"],
        vitality: ["强化凡体", "强化凡体", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["砖级能量｜体能/武器", "墙级能量｜Dominator/公安资源", "资源来自武器和Dominator。"],
        energyRegen: ["中速回能", "缓慢回能｜补给", "装备需要补给。"]
      }),
      notes: notes({
        penetration: "Dominator、枪械和执行官战术是主要杀伤手段。攻击速度：六合塚的开火节奏由Dominator操作、瞄准及系统许可决定，枪弹传播不能从她的移动表现反推。",
        resistance: "无特殊抗性，依赖装备和队伍协同。",
        sensing: "公安情报、现场观察和执行官经验。",
        tactics: "冷静、服从团队行动，适合支援与抓捕。",
        special: "Dominator使用、执行官权限、潜在犯身份。",
        weakness: "Dominator受系统判定限制，本体防御有限。",
        setting: "按第一季执行官阶段记录。",
        basis: "worldbook只用于抽取六合冢弥生姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();

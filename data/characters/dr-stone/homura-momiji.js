(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "homura-momiji",
      name: "红叶焰",
      en: "Homura Momiji",
      ja: "紅葉ほむら",
      affiliation: "司帝国",
      grade: "侦察 / 体操型战斗员",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 司帝国侦察",
      aliases: ["焰", "Homura"],
      fandomSlug: "Homura_Momiji",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜体术/工具", "偏侦察和机动，直接破坏不高。"],
        defense: ["凡人级", "砖级｜闪避/体术", "主要靠机动和闪避。"],
        movement: ["凡人速", "亚音速｜体操机动", "体操型高机动。"],
        reaction: ["凡人速", "亚音速｜侦察/体术", "近现实高端反应。"],
        vitality: ["凡人肉身", "强化凡体", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "砖级能量｜体能/工具", "资源来自体能和简单工具。"],
        energyRegen: ["中速回能", "中速回能｜体能", "按高体能恢复处理。"]
      }),
      notes: notes({
        penetration: "直接杀伤有限，擅长侦察、潜行和体术干扰。",
        resistance: "无特殊抗性，依靠机动规避伤害。",
        sensing: "侦察和跟踪能力较好。",
        tactics: "适合监视、骚扰、追踪和拖延，不适合硬碰硬。",
        special: "高机动体操、侦察、潜行。",
        weakness: "面对重武器、陷阱和多人包围时防御不足。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取红叶焰姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jerome-karlstahl",
      name: "杰罗姆·卡尔斯塔尔",
      en: "Jerome Karlstahl",
      ja: "ジェローム・カールシュタール",
      affiliation: "圣玛格诺利亚共和国军",
      grade: "准将",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "共和国军高层",
      aliases: ["Jérôme Karlstahl", "Karlstahl", "卡尔施塔尔"],
      fandomSlug: "J%C3%A9r%C3%B4me_Karlstahl",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙级｜军方火力授权｜外部", "个人无高输出；峰值来自军方资源和指挥权限。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜军务判断", "军务判断不等同身体高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙级能量｜军方资源/外部", "资源来自指挥系统，不是个人能量池。"],
        energyRegen: ["中速回能", "缓慢回能｜军方补给", "外部资源依赖军方系统。"]
      }),
      notes: notes({
        penetration: "直接战斗能力有限，能通过军方权限和作战体系影响战场。",
        resistance: "无特殊抗性。",
        sensing: "依赖军方情报、战区报告和制度视角。",
        tactics: "熟悉共和国军体系和战争真实状况，但行动受政治与体制限制。",
        special: "军方指挥权限、共和国军高层情报。",
        weakness: "非前线战斗角色，个人武力有限，且受共和国政治体制约束。",
        setting: "按共和国军准将阶段记录。",
        basis: "worldbook只用于抽取卡尔斯塔尔姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

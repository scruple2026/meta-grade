(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lev-aldrecht",
      name: "列夫·阿尔德雷希特",
      en: "Lev Aldrecht",
      ja: "レフ・アルドレヒト",
      affiliation: "先锋战队整备班",
      grade: "整备班长",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "整备班支援",
      aliases: ["Aldrecht", "整备班长"],
      fandomSlug: "Lev_Aldrecht",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜军用工具/枪械可能", "主要是整备支援人员，缺少前线高输出表现。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "强化凡体｜老兵/体格", "可按有经验成人处理，不抬高到战斗机体。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜整备资源", "个人战斗资源有限，主要价值在维修与补给。"],
        energyRegen: ["中速回能", "缓慢回能｜补给/整备", "支援资源需要后勤条件。"]
      }),
      notes: notes({
        penetration: "直接战斗表现有限，主要提供机体维修、整备和后勤支持。",
        resistance: "无特殊抗性。",
        sensing: "依靠经验判断机体状态和战场后勤风险。",
        tactics: "后勤与整备经验丰富，能维持先锋战队机体可用性。",
        special: "Juggernaut整备、后勤支援、战场维修。",
        weakness: "非前线主战角色，个人遭遇战能力有限。",
        setting: "按先锋战队整备班长记录。",
        basis: "worldbook只用于抽取列夫姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

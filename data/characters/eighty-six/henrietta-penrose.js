(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "henrietta-penrose",
      name: "亨丽埃塔·彭罗斯",
      en: "Henrietta Penrose",
      ja: "アンリエッタ・ペンローズ",
      affiliation: "圣玛格诺利亚共和国研究部门",
      grade: "研究员 / Para-RAID相关人员",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "共和国研究部门",
      aliases: ["安妮塔", "Annette", "Henrietta", "Para-RAID"],
      fandomSlug: "Henrietta_Penrose",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜设备/实验条件", "本人不是前线战斗员，缺少稳定攻击输出。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜研究判断", "研究与技术判断不等同身体高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖级能量｜研究设备", "战斗资源主要是设备和技术支持。"],
        energyRegen: ["中速回能", "缓慢回能｜设备维护", "设备与研究资源需要维护和授权。"]
      }),
      notes: notes({
        penetration: "直接战斗能力很低，主要通过技术、设备和Para-RAID相关知识影响战场。",
        resistance: "无特殊抗性。",
        sensing: "理解Para-RAID系统和通信机制，可从技术侧分析问题。",
        tactics: "技术人员，擅长系统维护和信息支持，不适合作为正面战斗单位。",
        special: "Para-RAID技术、研究部门权限、通信系统知识。",
        weakness: "非前线战斗角色，个人遭遇战能力有限，依赖设备和制度环境。",
        setting: "按共和国研究部门时期记录。",
        basis: "worldbook只用于抽取安妮塔/亨丽埃塔姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

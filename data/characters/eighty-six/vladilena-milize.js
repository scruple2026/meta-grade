(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "vladilena-milize",
      name: "芙拉蒂蕾娜·米利杰",
      en: "Vladilena Milize",
      ja: "ヴラディレーナ・ミリーゼ",
      affiliation: "圣玛格诺利亚共和国 / 先锋战队Handler",
      grade: "Handler One / 少佐",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "共和国东部战线 / Handler One",
      aliases: ["蕾娜", "Lena", "Bloody Reina", "Handler One", "Vladilena Milizé"],
      fandomSlug: "Vladilena_Miliz%C3%A9",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙级｜迎击炮/远程指挥｜外部", "个人无高输出；峰值来自指挥链、迎击炮和战场火力调度。"],
        defense: ["凡人级", "凡人级", "共和国军官肉身，缺少可计入个人的防护装备。"],
        movement: ["凡人速", "凡人速", "本体按普通军官机动。"],
        reaction: ["凡人速", "凡人速｜战术判断", "战术反应和信息处理强，但不等同身体高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "墙级能量｜指挥资源/外部火力", "个人资源有限，战场峰值依赖外部炮兵与通信链。"],
        energyRegen: ["中速回能", "缓慢回能｜补给/指挥链", "本人体力恢复普通；外部火力需要弹药和授权条件。"]
      }),
      notes: notes({
        penetration: "主要威胁来自远程指挥、炮火协同和战场情报，不是个人武器输出。",
        resistance: "本体缺少特殊抗性，远程指挥位置也可能被政治和通信条件限制。",
        sensing: "通过Para-RAID、地图和战线通信获取情报，可远程协调先锋战队。",
        tactics: "战术、指挥和道德决断是核心强项，能用情报差和炮火支援改变战局。",
        special: "Para-RAID通信、远程指挥、共和国军方权限和火力协调。",
        weakness: "个人肉身脆弱，直接遭遇战能力有限；依赖通信、授权、炮火阵地和队友执行。",
        setting: "按先锋战队特别侦察任务前后Handler One记录。",
        basis: "worldbook只用于抽取蕾娜姓名；定级依据公开官方角色页与86 Wiki资料入口，按指挥型角色保守记录。"
      })
    })
  ]);
})();

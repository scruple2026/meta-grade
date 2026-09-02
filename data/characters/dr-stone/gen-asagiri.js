(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gen-asagiri",
      name: "浅雾幻",
      en: "Gen Asagiri",
      ja: "あさぎりゲン",
      affiliation: "科学王国",
      grade: "心理术师 / 交涉者",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 科学王国",
      aliases: ["幻", "Gen"],
      fandomSlug: "Gen_Asagiri",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖块级｜工具/欺骗条件", "直接战斗很弱，威胁主要来自骗术和道具条件。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜话术判断", "心理判断不等同身体高速反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "砖块级能量｜道具/情报", "资源主要是话术、情报和小道具。"],
        energyRegen: ["中速回能", "缓慢回能｜准备/情报", "骗术资源依赖准备和信息。"]
      }),
      notes: notes({
        penetration: "直接攻击弱，心理诱导、伪装、话术和团队配合可造成关键战术效果。攻击速度：浅雾幻缺少稳定武器攻击，主要靠说话、伪装和心理诱导争取时间；话术见效不是可换算的弹体速度。",
        resistance: "无特殊抗性，身体能力普通。",
        sensing: "擅长读人、观察微表情和判断心理压力。",
        tactics: "心理战、谈判、诱导和双面行动是核心强项。",
        special: "心理术、骗术、交涉、情报战。",
        weakness: "正面战斗弱，骗术依赖信息差和对方可被诱导。",
        setting: "按石之战争篇记录。",
        basis: "worldbook只用于抽取浅雾幻姓名；定级依据官方角色页与Dr.STONE Wiki资料入口。"
      })
    })
  ]);
})();

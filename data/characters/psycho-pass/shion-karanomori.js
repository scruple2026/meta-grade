(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shion-karanomori",
      name: "唐之杜志恩",
      en: "Shion Karanomori",
      ja: "唐之杜志恩",
      affiliation: "公安局综合分析室 / 公安一系支援",
      grade: "分析官 / 潜在犯",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 分析官",
      aliases: ["唐之杜", "Shion"],
      fandomSlug: "Shion_Karanomori",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖块级｜系统支援/间接", "非前线战斗员，直接输出低。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜分析判断", "信息处理强，不等同身体高速。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "砖块级能量｜系统/情报资源", "资源来自分析室系统和公安数据库。"],
        energyRegen: ["中速回能", "缓慢回能｜系统资源", "依赖系统权限与设备。"]
      }),
      notes: notes({
        penetration: "直接攻击弱，可通过情报、系统支援和技术分析间接影响战斗。攻击速度：唐之杜的情报和系统支援不是飞向目标的攻击，若用普通器材自卫，只能按凡人操作与动作处理。",
        resistance: "无特殊抗性。",
        sensing: "数据分析、监控调阅、技术支援和现场信息整合强。",
        tactics: "后方分析和技术支援能力强，能辅助一系锁定目标与破解线索。",
        special: "公安分析系统、情报整合、技术支援。",
        weakness: "非前线角色，脱离设备后战斗力低。",
        setting: "按第一季分析官阶段记录。",
        basis: "worldbook只用于抽取唐之杜志恩姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();

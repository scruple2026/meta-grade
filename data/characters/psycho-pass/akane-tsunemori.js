(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "akane-tsunemori",
      name: "常守朱",
      en: "Akane Tsunemori",
      ja: "常守朱",
      affiliation: "厚生省公安局刑事课一系",
      grade: "监视官",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 新任监视官至槙岛事件",
      aliases: ["Akane", "Tsunemori", "常守监视官"],
      fandomSlug: "Akane_Tsunemori",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙级｜Dominator分解执行｜系统授权", "个人武力低，峰值来自Dominator授权模式。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通警员机动。"],
        reaction: ["凡人速", "凡人速｜刑事判断", "判断和心理稳定强，不等同高速身体反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙级能量｜Dominator/公安资源", "资源来自Dominator、公安系统和队伍支援。"],
        energyRegen: ["中速回能", "缓慢回能｜系统/补给", "外部资源依赖系统授权和装备补给。"]
      }),
      notes: notes({
        penetration: "Dominator可按犯罪系数切换麻醉、排除或分解执行；非授权状态下本人火力有限。",
        resistance: "肉身防御普通，心理稳定和色相清澈不等于物理抗性。",
        sensing: "依赖Dominator扫描、公安情报和刑事观察判断犯罪系数与动机。",
        tactics: "道德判断、心理承压和现场决策极强，能在西比拉规则内外寻找解法。",
        special: "Dominator使用权限、稳定Psycho-Pass、刑事情报与公安一系指挥。",
        weakness: "直接战斗力低，Dominator受西比拉判定和目标犯罪系数制约。",
        setting: "按第一季槙岛事件前后常守朱记录。",
        basis: "worldbook只用于抽取常守朱姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();

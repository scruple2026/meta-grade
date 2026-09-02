(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nobuchika-ginoza",
      name: "宜野座伸元",
      en: "Nobuchika Ginoza",
      ja: "宜野座伸元",
      affiliation: "公安一系",
      grade: "监视官",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 监视官",
      aliases: ["宜野座", "Ginoza", "Gino"],
      fandomSlug: "Nobuchika_Ginoza",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙体级｜Dominator/公安装备", "个人输出普通，峰值来自Dominator授权。"],
        defense: ["凡人级", "凡人级", "普通人肉身。"],
        movement: ["凡人速", "凡人速", "普通警员机动。"],
        reaction: ["凡人速", "凡人速｜刑事训练", "训练反应但非高端武斗者。"],
        vitality: ["凡人肉身", "强化凡体｜训练", "训练者体魄。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙体级能量｜Dominator/公安资源", "资源来自公安装备和系统授权。"],
        energyRegen: ["中速回能", "缓慢回能｜系统/补给", "外部资源需要授权与补给。"]
      }),
      notes: notes({
        penetration: "Dominator和公安装备是主要杀伤手段。攻击速度：宜野座使用Dominator时需先拔枪、瞄准并等待系统授权，射击效果的生效过程不等同他的身体动作速度。",
        resistance: "无特殊抗性。",
        sensing: "依靠Dominator、公安情报和刑事训练。",
        tactics: "程序化执法和团队管理能力强，但第一季心理负担较重。",
        special: "Dominator权限、监视官身份、公安一系指挥链。",
        weakness: "受西比拉规则、父子关系和潜在犯恐惧影响判断。",
        setting: "按第一季监视官阶段记录。",
        basis: "worldbook只用于抽取宜野座伸元姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();

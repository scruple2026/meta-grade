(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Dr.STONE"];

  if (!work) {
    throw new Error("Dr.STONE work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "senku-ishigami",
      name: "石神千空",
      en: "Senku Ishigami",
      ja: "石神千空",
      affiliation: "科学王国",
      grade: "科学王国首脑 / 科学家",
      appearances: ["石之战争篇"],
      timelineStatus: "石之战争篇 / 科学王国",
      aliases: ["千空", "Senku"],
      fandomSlug: "Senku_Ishigami",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙体级｜炸药/科学道具｜条件", "个人体能弱，峰值来自可准备的科学工具和爆破。"],
        defense: ["凡人级", "凡人级", "肉身普通。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜临场判断", "反应强项是判断和推理，不是身体速度。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "无自愈", "无超自然恢复。"],
        energy: ["凡人能量", "墙体级能量｜科学资源/炸药｜条件", "总资源来自材料、工具、团队和准备时间。"],
        energyRegen: ["中速回能", "缓慢回能｜材料补给", "资源恢复取决于采集、制造和团队后勤。"]
      }),
      notes: notes({
        penetration: "科学道具、陷阱、火药/炸药和环境利用可绕开单纯体能差距。攻击速度：千空本人的投掷或使用工具仍是凡人动作，火药、枪械等科学武器按各自点火与弹道运作，并依赖事前制造。",
        resistance: "肉身防御很低，主要靠预判、道具、队友和距离避免受击。",
        sensing: "观察、推理和科学知识极强，可通过现象反推材料、敌方手段和战场状态。",
        tactics: "核心强项是科学路线规划、临场推理、心理诱导和团队资源调度。",
        special: "复活液、发明链、科学知识、材料制备和团队协作。",
        weakness: "本体体能弱，遭遇战和无准备近战极不利；高输出需要材料与时间。",
        setting: "按石之战争篇科学王国阶段记录。",
        basis: "worldbook只用于抽取千空姓名；定级依据官方角色页与Dr.STONE Wiki资料入口，科学成果按条件峰值而非常态体能记录。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "leorio-paradinight",
      name: "雷欧力·帕拉丁奈特",
      en: "Leorio Paradinight",
      ja: "レオリオ＝パラディナイト",
      affiliation: "猎人协会",
      grade: "医生志向猎人 / 放出系念能力者",
      appearances: ["正篇"],
      timelineStatus: "选举篇后 / 念能力已展示",
      aliases: ["雷欧力"],
      fandomSlug: "Leorio_Paradinight",
      dimensions: dims({
        attack: ["砖块级", "墙体级｜放出系念拳", "念能力可隔空打击，破坏规模仍偏低。"],
        defense: ["凡人级", "墙体级｜念防御", "基础体格强于常人，念防御有限。"],
        movement: ["凡人速", "亚音速", "猎人级身体能力，不按音速。"],
        reaction: ["凡人速", "亚音速", "有基础念战反应但不属于顶级战斗员。"],
        vitality: ["强化凡体", "强化凡体", "身体强健但仍是人类。"],
        healing: ["无自愈", "无自愈", "作为医生志向角色可治疗他人，但自身无超常自愈。"],
        energy: ["凡人能量", "墙体级能量｜念能力", "念量有限。"],
        energyRegen: ["中速回能", "中速回能", "常规念恢复。"]
      }),
      notes: notes({
        penetration: "放出系念拳可让打击从目标附近突然出现，适合隔空命中、绕过常规距离和出其不意干扰；已展示破坏规模有限，不能按主角团潜力外推。攻击速度：雷欧力先挥拳发动放出系能力，打击再从目标附近出现；现有展示没有给出两者之间可独立换算的传播时间，近目标生效也不等于无限速度。",
        resistance: "雷欧力体格强健且具备基础念防御，但不是专职前排战斗员；对强化系高手、毒、规则能力和高速近战没有明确高抗性。",
        sensing: "主要依赖基础念感知、医学观察和普通战斗视听；缺少高端索敌或复杂念战读取表现。",
        tactics: "战斗样本少，远程念拳更适合奇袭和支援；医学知识有助于判断人体弱点，但尚未形成完整战斗体系。",
        special: "放出系念能力可把拳击效果传到远处，医疗知识说明其能力开发方向；远程念拳更偏奇袭和辅助，不是高破坏炮击。",
        weakness: "战斗样本少，念能力主要展示为远程奇袭和医疗相关潜力；缺少完整战斗技、杀伤组合和高端攻防证据。",
        setting: "按选举篇后已展示放出系念拳的版本记录；医生定位和成长潜力不直接计入当前战斗面板。",
        basis: "依据雷欧力在选举篇展示的放出系念拳、猎人考试和主角团定位保守定级。"
      })
    })
  ]);
})();

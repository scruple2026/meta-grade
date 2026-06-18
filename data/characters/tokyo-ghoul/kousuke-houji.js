(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kousuke-houji",
      name: "法寺项介",
      en: "Kousuke Houji",
      ja: "法寺項介",
      affiliation: "CCG",
      grade: "特等搜查官 / 库因克使用者",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / 特等搜查官",
      aliases: ["法寺", "Houji"],
      fandomSlug: "Kousuke_Houji",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "墙级｜库因克", "库因克对喰种具针对性输出。"],
        defense: ["凡人级", "墙级｜防护/库因克格挡", "本体人类，依赖装备和队伍配合。"],
        movement: ["凡人速", "亚音速｜搜查官体术", "训练有素的搜查官机动。"],
        reaction: ["凡人速", "亚音速｜经验", "可应对高风险喰种战斗。"],
        vitality: ["强化凡体", "精锐韧体", "训练人类水平，无再生。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "墙级能量｜库因克", "资源来自体力和库因克装备。"],
        energyRegen: ["无回能", "中速回能｜休整/装备维护", "需要休整和装备维护。"]
      }),
      notes: notes({
        penetration: "库因克对赫子和喰种肉体有针对性破坏能力。",
        resistance: "本体没有再生，承伤依靠防护、格挡、经验和队友支援。",
        sensing: "搜查官经验与战场观察突出。",
        tactics: "稳健、纪律强，适合指挥和配合队伍处理高威胁喰种。",
        special: "库因克、特等搜查官经验、对喰种战术。",
        weakness: "单独面对高阶赫者或速度差距时容错低。",
        setting: "按安定区篇法寺项介记录。",
        basis: "worldbook只用于抽取法寺项介姓名；定级依据公开角色资料入口和 CCG 特等搜查官定位。"
      })
    })
  ]);
})();

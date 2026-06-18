(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "iwao-kuroiwa",
      name: "黑磐岩",
      en: "Iwao Kuroiwa",
      ja: "黒磐巌",
      affiliation: "CCG",
      grade: "特等搜查官 / 库因克使用者",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "安定区篇 / 特等搜查官",
      aliases: ["黑磐", "Kuroiwa"],
      fandomSlug: "Iwao_Kuroiwa",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "楼级｜库因克/特等搜查官", "库因克和特等搜查官体术可威胁高阶喰种。"],
        defense: ["凡人级", "墙级｜防护/库因克格挡", "本体人类，防御主要依赖装备、格挡和经验。"],
        movement: ["凡人速", "亚音速｜搜查官体术", "老练人类搜查官机动。"],
        reaction: ["凡人速", "亚音速｜经验", "可参与对高阶喰种作战。"],
        vitality: ["强化凡体", "精锐韧体", "训练和意志强，但无喰种再生。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "楼级能量｜库因克", "资源来自体力和库因克装备。"],
        energyRegen: ["无回能", "中速回能｜休整/装备维护", "需要休整和装备维护。"]
      }),
      notes: notes({
        penetration: "库因克对赫子和喰种肉体有针对性切断/破坏能力。",
        resistance: "人类本体缺少再生，承伤依靠防护、格挡、经验和队友协同。",
        sensing: "搜查官经验、现场观察和对喰种习性的理解强。",
        tactics: "稳健正面战斗与围攻配合能力突出，适合高风险作战中的队伍支点。",
        special: "库因克、特等搜查官经验、对喰种战术。",
        weakness: "本体没有再生，装备损毁或被高速喰种近身会显著降低容错。",
        setting: "按安定区篇和枭讨伐时期黑磐岩记录。",
        basis: "worldbook只用于抽取黑磐岩姓名；定级依据公开角色资料入口和 CCG 特等搜查官战斗定位。"
      })
    })
  ]);
})();

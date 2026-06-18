(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hinami-fueguchi",
      name: "笛口雏实",
      en: "Hinami Fueguchi",
      ja: "笛口雛実",
      affiliation: "安定区",
      grade: "鳞赫/甲赫喰种",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / 幼年喰种",
      aliases: ["雏实", "Hinami"],
      fandomSlug: "Hinami_Fueguchi",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "墙级｜双赫子/情绪爆发", "早期经验不足，但赫子潜力很高。"],
        defense: ["砖级", "墙级｜喰种体质/赫子", "喰种体质和赫子可提供防护。"],
        movement: ["凡人速", "亚音速｜喰种机动", "早期实战经验有限。"],
        reaction: ["凡人速", "亚音速｜感官/喰种本能", "感知强于战斗应对。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "喰种体质强于人类儿童。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受伤势和心理状态限制。"],
        energy: ["砖级能量", "墙级能量｜双赫子", "双赫子潜力高但早期控制不足。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "兼具父母两类赫子潜力，可刺击、防御和感知辅助，但早期缺少成熟杀伤控制。",
        resistance: "喰种体质和赫子强于人类，但年龄、经验和心理创伤限制实战。",
        sensing: "嗅觉和听觉极强，是安定区篇突出的索敌/侦查能力。",
        tactics: "早期不适合主动强攻，更适合感知、躲避和被保护状态下的有限反击。",
        special: "双赫子潜力、喰种再生、强感官。",
        weakness: "年幼、训练不足、心理压力大；不能把后期成长直接并入安定区篇。",
        setting: "按安定区篇幼年雏实记录，不并入后期战斗成长。",
        basis: "worldbook只用于抽取笛口雏实姓名；定级依据公开角色资料入口和安定区篇表现。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nishiki-nishio",
      name: "西尾锦",
      en: "Nishiki Nishio",
      ja: "西尾錦",
      affiliation: "安定区",
      grade: "尾赫喰种",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / 尾赫喰种",
      aliases: ["西尾", "Nishiki"],
      fandomSlug: "Nishiki_Nishio",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "墙级｜尾赫", "尾赫近战可压制普通人和低阶敌人。"],
        defense: ["砖级", "墙级｜喰种体质/赫子", "喰种体质强于人类，但低于安定区高端成员。"],
        movement: ["凡人速", "亚音速｜喰种机动", "尾赫喰种近战机动。"],
        reaction: ["凡人速", "亚音速", "可参与喰种近战但不属顶级。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "具喰种续战和承伤。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受饥饿和重伤限制。"],
        energy: ["砖级能量", "墙级能量｜尾赫", "尾赫输出和恢复消耗 RC 细胞与体力。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "尾赫适合中近距离鞭打、刺击和牵制，单体杀伤强于普通冷兵器。",
        resistance: "喰种体质和再生强，但对高级库因克与强力喰种容错低。",
        sensing: "具喰种感官和城市生活经验。",
        tactics: "会利用身份隐藏和机会主义打法，早期正面硬拼能力有限。",
        special: "尾赫、喰种再生。",
        weakness: "面板不属高端，情绪与保护对象会影响判断；饥饿和 RC 抑制依旧致命。",
        setting: "按安定区篇西尾锦记录。",
        basis: "worldbook只用于抽取西尾锦姓名；定级依据公开角色资料入口和安定区篇表现。"
      })
    })
  ]);
})();

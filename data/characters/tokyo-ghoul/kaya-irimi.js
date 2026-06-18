(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kaya-irimi",
      name: "入见萱",
      en: "Kaya Irimi",
      ja: "入見カヤ",
      affiliation: "安定区",
      grade: "喰种 / 黑色杜宾",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "安定区篇 / 黑色杜宾",
      aliases: ["入见", "黑色杜宾", "Black Dobber", "Irimi"],
      fandomSlug: "Kaya_Irimi",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜喰种体术/赫子", "资深喰种近战和赫子输出。"],
        defense: ["墙级", "楼级｜喰种体质/赫子", "喰种体质与作战经验支撑承伤。"],
        movement: ["亚音速", "音速｜喰种机动", "速度和协同是主要优势。"],
        reaction: ["亚音速", "音速｜经验", "可应对搜查官围攻。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "可带伤续战。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受饥饿和重伤限制。"],
        energy: ["墙级能量", "楼级能量｜赫子", "赫子展开和持续近战消耗明显。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "以喰种体术、赫子和高速近战为主，不等同大范围破坏。",
        resistance: "喰种体质和经验强，但库因克与围攻能压低容错。",
        sensing: "喰种感官、旧组织经验和安定区行动经验。",
        tactics: "擅长配合安定区成员拖延、护卫和分割战场。",
        special: "喰种再生、赫子、黑色杜宾身份与安定区协同。",
        weakness: "缺少顶级赫者体量，面对特等搜查官或重装备时需依赖地形和协同。",
        setting: "按安定区篇入见萱记录。",
        basis: "worldbook只用于抽取入见萱姓名；定级依据公开角色资料入口和安定区篇战斗定位。"
      })
    })
  ]);
})();

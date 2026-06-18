(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "touka-kirishima",
      name: "雾嶋董香",
      en: "Touka Kirishima",
      ja: "霧嶋董香",
      affiliation: "安定区",
      grade: "羽赫喰种 / Rabbit",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / Rabbit",
      aliases: ["董香", "Rabbit", "Touka"],
      fandomSlug: "Touka_Kirishima",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜羽赫爆射", "羽赫高速晶体射击和近战突袭。"],
        defense: ["墙级", "墙级｜赫子防御", "承伤依赖喰种体质与机动规避。"],
        movement: ["亚音速", "音速｜羽赫机动", "羽赫偏高速机动和突袭。"],
        reaction: ["亚音速", "音速", "可应对搜查官与喰种近战。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "喰种体质支持带伤战斗。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受饥饿和伤势限制。"],
        energy: ["墙级能量", "楼级能量｜羽赫", "羽赫连续射击消耗较快。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "羽赫晶体适合高速穿刺、牵制和爆发突袭，持续火力不如重型赫子。",
        resistance: "靠速度和赫子规避，面对防具、库因克和长时间消耗会吃亏。",
        sensing: "喰种嗅觉和街区经验优秀，适合城市巷战和突袭。",
        tactics: "擅长短促爆发、保护同伴和利用地形，长期消耗与情绪波动是短板。",
        special: "羽赫、喰种再生、高速突袭。",
        weakness: "羽赫消耗快，近身缠斗和持续防御不占优；饥饿和 RC 抑制剂会削弱战斗。",
        setting: "按安定区篇董香记录，不并入后期稳定家庭线状态。",
        basis: "依据董香作为 Rabbit 与搜查官、喰种交战时的羽赫机动和射击表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "renji-yomo",
      name: "四方莲示",
      en: "Renji Yomo",
      ja: "四方蓮示",
      affiliation: "安定区",
      grade: "羽赫喰种 / 安定区成员",
      appearances: ["安定区篇"],
      timelineStatus: "安定区篇 / 安定区成员",
      aliases: ["四方", "Yomo"],
      fandomSlug: "Renji_Yomo",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜羽赫/近战", "强力喰种近战和羽赫输出，保守低于枭级。"],
        defense: ["墙级", "楼级｜喰种体质/赫子", "喰种体质和高战斗经验支撑承伤。"],
        movement: ["亚音速", "音速｜羽赫机动", "安定区强者级高速机动。"],
        reaction: ["亚音速", "音速｜经验", "可与高端喰种和搜查官周旋。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "可带伤续战，但非赫者巨体。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受饥饿和重伤限制。"],
        energy: ["墙级能量", "楼级能量｜赫子", "赫子展开和连续战斗消耗 RC 细胞与体力。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "羽赫与近战兼具，适合高速突袭、压制和切断赫子；不按大范围爆破处理。",
        resistance: "喰种体质和经验强，但库因克、RC 抑制、饥饿和持续围攻仍可压制。",
        sensing: "喰种感官、安定区情报和城市行动经验突出。",
        tactics: "老练、冷静，擅长护卫、撤离和在复杂城市地形中处理强敌。",
        special: "羽赫、喰种再生、安定区支援与护卫经验。",
        weakness: "缺少枭级体量和大范围压制，面对特等搜查官或赫者级敌人需要规避消耗。",
        setting: "按安定区篇四方莲示记录。",
        basis: "worldbook只用于抽取四方莲示姓名；定级依据公开角色资料入口和安定区篇战斗定位，按强力喰种保守记录。"
      })
    })
  ]);
})();

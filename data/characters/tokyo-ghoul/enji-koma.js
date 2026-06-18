(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "enji-koma",
      name: "古间圆儿",
      en: "Enji Koma",
      ja: "古間円児",
      affiliation: "安定区",
      grade: "喰种 / 魔猿",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "安定区篇 / 魔猿",
      aliases: ["古间", "魔猿", "Devil Ape", "Koma"],
      fandomSlug: "Enji_Koma",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜喰种体术/甲赫", "资深喰种近战输出强，但不按枭级处理。"],
        defense: ["墙级", "楼级｜喰种体质/赫子", "喰种体质和赫子支撑承伤。"],
        movement: ["亚音速", "音速｜喰种机动", "近战型喰种机动。"],
        reaction: ["亚音速", "音速｜经验", "经验支撑对搜查官作战。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "可承受普通人类难以承受的伤势。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受饥饿和重伤限制。"],
        energy: ["墙级能量", "楼级能量｜赫子", "赫子和体术消耗 RC 细胞与体力。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整补充。"]
      }),
      notes: notes({
        penetration: "以强力体术、赫子和近战压制为主，适合单体破坏。",
        resistance: "喰种体质较强，但专用库因克、围攻和持续火力可突破。",
        sensing: "安定区老成员，具备喰种感官与街区行动经验。",
        tactics: "擅长协同、掩护和拖延，枭讨伐时可作为安定区战斗支点。",
        special: "喰种再生、赫子、魔猿身份与安定区协同。",
        weakness: "高峰不稳定，缺少顶级赫者的范围、防御和再生优势。",
        setting: "按安定区篇古间圆儿记录。",
        basis: "worldbook只用于抽取古间圆儿姓名；定级依据公开角色资料入口和安定区篇战斗定位。"
      })
    })
  ]);
})();

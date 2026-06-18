(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nanaki-moriyama",
      name: "森山那奈龟",
      en: "Nanaki Moriyama",
      ja: "森山那奈亀",
      affiliation: "伊莉雅同学组",
      grade: "学生 / 同学四人组",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "伊莉雅世界 / 日常同学",
      aliases: ["那奈龟", "Nanaki"],
      fandomSlug: "Nanaki_Moriyama",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["凡人级", "凡人级", "小学生日常角色，非战斗角色。"],
        defense: ["凡人级", "凡人级", "小学生日常角色，非战斗角色。"],
        movement: ["凡人速", "凡人速", "小学生日常角色，非战斗角色。"],
        reaction: ["凡人速", "凡人速", "小学生日常角色，非战斗角色。"],
        vitality: ["凡人肉身", "凡人肉身", "小学生日常角色，非战斗角色。"],
        healing: ["无自愈", "缓慢自愈｜休整", "依赖自然恢复。"],
        energy: ["凡人能量", "凡人能量", "普通儿童体力。"],
        energyRegen: ["中速回能", "中速回能｜休息/进食", "普通恢复。"]
      }),
      notes: notes({
        penetration: "日常角色，无正式战斗输出。",
        resistance: "普通儿童承伤，不具备魔法少女防护。",
        sensing: "日常观察和同学关系信息。",
        tactics: "日常同学与喜剧支援。",
        special: "伊莉雅同学组日常支援。",
        weakness: "正面战斗能力低，面对Class Card敌人需要保护。",
        setting: "按Prisma Illya早期森山那奈龟记录。",
        basis: "worldbook只用于抽取森山那奈龟姓名；定级依据公开角色资料入口和日常同学定位。"
      })
    })
  ]);
})();

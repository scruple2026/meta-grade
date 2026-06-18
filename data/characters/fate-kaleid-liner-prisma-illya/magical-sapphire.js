(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "magical-sapphire",
      name: "魔法蓝宝石",
      en: "Magical Sapphire",
      ja: "マジカルサファイア",
      affiliation: "万花筒魔杖",
      grade: "卡雷德魔杖 / Sapphire",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "Miyu契约期 / 支援魔杖",
      aliases: ["蓝宝石", "Sapphire", "Kaleidostick"],
      fandomSlug: "Magical_Sapphire",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "楼级｜魔法少女供魔/炮击辅助", "自身直接输出有限，主要通过契约者释放魔术。"],
        defense: ["砖级", "房屋级｜屏障辅助", "可支援屏障和变身防护。"],
        movement: ["凡人速", "亚音速｜自主飞行", "可自主飞行和机动，飞行性质写入说明而非主档名。"],
        reaction: ["凡人速", "亚音速｜AI/魔杖辅助", "能辅助契约者战斗反应。"],
        vitality: ["不适用", "不适用", "魔杖本体是礼装物件，不按生物生命体量排序。"],
        healing: ["不适用", "不适用", "魔杖本体不存在生物自愈。"],
        energy: ["楼级能量", "街区级能量｜平行世界供魔｜承载限制", "供魔强，受契约者身体和术式承载限制。"],
        energyRegen: ["快速回能", "极速回能｜平行世界供魔", "供魔速度强，不等同无限无瓶颈。"]
      }),
      notes: notes({
        penetration: "主要通过美游的魔术、屏障和Class Card运用体现杀伤。",
        resistance: "可支援防护，但魔杖本体和契约关系仍是弱点。",
        sensing: "具备人格化AI、魔术知识、冷静提示和任务导航。",
        tactics: "相对红宝石更冷静，适合精密辅助和战术提示。",
        special: "万花筒魔杖、平行世界供魔、魔法少女变身、飞行、屏障与恢复辅助。",
        weakness: "依赖契约者输出和承载；被夺走、封印或契约中断时高峰不可用。",
        setting: "按Prisma Illya中Miyu契约期的Magical Sapphire记录。",
        basis: "worldbook只用于抽取魔法蓝宝石姓名；定级依据公开角色资料入口和本作万花筒魔杖支援定位。"
      })
    })
  ]);
})();

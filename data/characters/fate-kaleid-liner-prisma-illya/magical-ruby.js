(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "magical-ruby",
      name: "魔法红宝石",
      en: "Magical Ruby",
      ja: "マジカルルビー",
      affiliation: "万花筒魔杖",
      grade: "卡雷德魔杖 / Ruby",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "Illya契约期 / 支援魔杖",
      aliases: ["红宝石", "Ruby", "Kaleidostick"],
      fandomSlug: "Magical_Ruby",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "楼级｜魔法少女供魔/炮击辅助", "自身直接输出有限，主要通过契约者释放魔术。"],
        defense: ["砖级", "房屋级｜屏障辅助", "可支援屏障和变身防护，但杖体不按高硬度本体处理。"],
        movement: ["凡人速", "亚音速｜自主飞行", "可自主飞行和机动，飞行性质写入说明而非主档名。"],
        reaction: ["凡人速", "亚音速｜AI/魔杖辅助", "能辅助契约者反应和战斗判断。"],
        vitality: ["不适用", "不适用", "魔杖本体是礼装物件，不按生物生命体量排序。"],
        healing: ["不适用", "不适用", "魔杖本体不存在生物自愈。"],
        energy: ["楼级能量", "街区级能量｜平行世界供魔｜承载限制", "供魔极强，但受契约者身体和术式承载限制。"],
        energyRegen: ["快速回能", "极速回能｜平行世界供魔", "供魔速度强，不等同无需承载限制的无限主面板。"]
      }),
      notes: notes({
        penetration: "主要通过伊莉雅的魔力弹、屏障、切割和Class Card运用体现杀伤，自身直接攻击有限。",
        resistance: "可支援屏障和变身防护，但若魔杖被夺走、封锁或与契约者分离，战斗价值大幅下降。",
        sensing: "具备人格化AI、魔术知识、任务导航和战斗提示。",
        tactics: "战斗辅助、供魔和即兴提示强，但性格恶作剧会制造风险。",
        special: "万花筒魔杖、平行世界供魔、魔法少女变身、飞行、屏障与恢复辅助。",
        weakness: "依赖契约者输出和承载；魔杖本体被控制或契约中断时无法独立发挥高面板。",
        setting: "按Prisma Illya中Illya契约期的Magical Ruby记录。",
        basis: "worldbook只用于抽取魔法红宝石姓名；定级依据公开角色资料入口和本作万花筒魔杖支援定位。"
      })
    })
  ]);
})();

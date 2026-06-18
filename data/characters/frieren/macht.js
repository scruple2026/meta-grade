(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "macht",
      name: "马哈特",
      en: "Macht",
      ja: "マハト",
      affiliation: "魔族 / 七崩贤",
      grade: "七崩贤 / 黄金乡的马哈特",
      appearances: ["黄金乡篇"],
      timelineStatus: "黄金乡篇 / 迪亚戈尔泽",
      aliases: ["黄金乡的马哈特", "Macht", "迪亚戈尔泽"],
      fandomSlug: "Macht",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜迪亚戈尔泽｜特殊", "黄金化是特殊魔法，不按纯破坏规模抬到更高档。"],
        defense: ["楼级", "街区级｜大魔族/黄金化防护", "魔族身体、防御魔法和黄金化战场优势支撑承伤。"],
        movement: ["亚音速", "音速｜魔族战斗", "大魔族近战和施法反应。"],
        reaction: ["亚音速", "音速｜经验/魔力感知", "对魔法使战斗经验极高。"],
        vitality: ["精锐韧体", "街区级生命阈值｜大魔族", "大魔族生命力和魔力支撑长战。"],
        healing: ["缓慢自愈", "快速自愈｜魔族恢复｜争议", "可恢复但不是不死。"],
        energy: ["楼级能量", "街区级能量｜迪亚戈尔泽", "魔力量极高，黄金化覆盖范围来自特殊魔法机制。"],
        energyRegen: ["快速回能", "快速回能｜魔力恢复", "高魔力续航但非无限。"]
      }),
      notes: notes({
        penetration: "迪亚戈尔泽将目标黄金化，是状态改变/封锁型特殊魔法，不直接换算为爆炸破坏。",
        resistance: "大魔族身体和魔法防御强，黄金化战场可保护自己并限制敌人。",
        sensing: "魔力感知和对人类情感观察长期积累，仍受魔族理解限制。",
        tactics: "极其老练，能用黄金化、谈判和长期布局控制整座维泽。",
        special: "迪亚戈尔泽、黄金化、七崩贤魔力、大魔族战斗经验。",
        weakness: "黄金化可被解析和针对；对人类感情理解偏差会影响判断。",
        setting: "按黄金乡篇马哈特记录，黄金化作为特殊权能处理。",
        basis: "依据马哈特在黄金乡篇中对维泽黄金化、与邓肯/芙莉莲阵营交战的表现定级。"
      })
    })
  ]);
})();

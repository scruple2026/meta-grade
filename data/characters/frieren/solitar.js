(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "solitar",
      name: "索莉塔尔",
      en: "Solitar",
      ja: "ソリテール",
      affiliation: "魔族",
      grade: "无名大魔族",
      appearances: ["黄金乡篇"],
      timelineStatus: "黄金乡篇 / 大魔族",
      aliases: ["Solitär", "Solitar", "无名大魔族"],
      fandomSlug: "Solit%C3%A4r",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜魔法火力", "高阶魔族魔法与战斗经验形成强火力。"],
        defense: ["楼级", "街区级｜魔法防御", "大魔族身体和防御魔法承伤高。"],
        movement: ["亚音速", "音速｜魔族战斗", "可参与高阶魔法战。"],
        reaction: ["亚音速", "音速｜经验/魔力感知", "对魔法使战斗和心理诱导很老练。"],
        vitality: ["精锐韧体", "街区级生命阈值｜大魔族", "大魔族生命力和魔力支撑长战。"],
        healing: ["缓慢自愈", "快速自愈｜魔族恢复｜争议", "恢复力强但可被致命伤击败。"],
        energy: ["楼级能量", "街区级能量｜魔力", "魔力量高且术式储备丰富。"],
        energyRegen: ["快速回能", "快速回能｜魔力恢复", "续航强但非无限。"]
      }),
      notes: notes({
        penetration: "多种魔法、魔力压制和心理诱导配合作战，偏综合高阶魔法火力。",
        resistance: "魔族防御和经验强，但仍会被针对性魔法和团队协作击破。",
        sensing: "魔力感知、观察力和对人类社会的知识强，擅长伪装和诱导。",
        tactics: "老练且狡猾，能用情报、话术和魔法压制制造优势。",
        special: "大魔族魔法、魔力隐藏/压制、心理诱导、丰富知识。",
        weakness: "魔族对人类情感和执念理解有限；面对芙莉莲级解析与协同会暴露破绽。",
        setting: "按黄金乡篇索莉塔尔记录。",
        basis: "依据索莉塔尔在黄金乡篇中作为无名大魔族对芙莉莲队伍的魔法、情报和战术表现定级。"
      })
    })
  ]);
})();

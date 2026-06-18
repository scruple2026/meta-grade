(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "fern",
      name: "菲伦",
      en: "Fern",
      ja: "フェルン",
      affiliation: "芙莉莲队伍",
      grade: "人类魔法使",
      appearances: ["现代旅行", "黄金乡篇"],
      timelineStatus: "黄金乡篇 / 成熟弟子",
      aliases: ["Fern"],
      fandomSlug: "Fern",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "楼级｜高速攻击魔法", "擅长高速连续攻击魔法，偏精密火力。"],
        defense: ["墙级", "楼级｜防御魔法", "防御依赖魔法屏障。"],
        movement: ["凡人速", "亚音速｜飞行魔法", "可用魔法移动和飞行。"],
        reaction: ["亚音速", "音速｜魔法速射", "施法速度和战斗反应是优势。"],
        vitality: ["强化凡体", "精锐韧体｜防御魔法保护", "本体是人类魔法使。"],
        healing: ["无自愈", "缓慢自愈｜外部治疗", "没有高速自愈。"],
        energy: ["楼级能量", "楼级能量｜魔力", "魔力储量优秀但低于顶级精灵/大魔族。"],
        energyRegen: ["快速回能", "快速回能｜魔力恢复", "可恢复魔力但需休整。"]
      }),
      notes: notes({
        penetration: "高速普通攻击魔法适合打断施法和压制防御薄弱目标。",
        resistance: "防御魔法稳定，但本体承伤有限。",
        sensing: "魔力感知、魔力隐藏训练和芙莉莲式战斗习惯优秀。",
        tactics: "冷静、速射和执行力强，擅长在芙莉莲战术框架下补刀与压制。",
        special: "高速攻击魔法、防御魔法、魔力隐藏、飞行魔法。",
        weakness: "经验和魔法库存不如芙莉莲，面对未知特殊魔法需要支援。",
        setting: "按黄金乡篇附近的菲伦记录。",
        basis: "依据菲伦在现代旅行、一级魔法使考试和黄金乡篇中的速射、防御和协同表现定级。"
      })
    })
  ]);
})();

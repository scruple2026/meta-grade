(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "envy",
      name: "恩维",
      en: "Envy",
      ja: "エンヴィー",
      affiliation: "人造人阵营",
      grade: "人造人「嫉妒」",
      appearances: ["约定之日", "正篇"],
      timelineStatus: "漫画/FA线 / 约定之日",
      aliases: ["嫉妒", "Envy", "恩维", "变身人造人"],
      fandomSlug: "Envy",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从约定之日 worldbook key/comment 的人造人规则名单补入；主面板按漫画/FA线恩维记录。"
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜巨大本体/贤者之石", "可用巨大本体、怪力和变形压制目标。"],
        defense: ["墙级", "房屋级｜巨大本体/再生", "巨大身体与贤者之石再生提高承伤。"],
        movement: ["凡人速", "亚音速｜变形突进", "速度不是核心优势，依赖体型与变形。"],
        reaction: ["凡人速", "亚音速｜人造人经验", "可应对常规战斗，但不以高速反应见长。"],
        vitality: ["房屋级生命阈值｜贤者之石", "楼级生命阈值｜巨大本体/贤者之石｜争议", "生命阈值来自巨大本体和灵魂资源，本体核心仍可被削弱。"],
        healing: ["快速自愈", "极速自愈｜贤者之石", "可消耗贤者之石修复身体，资源耗尽后会崩溃。"],
        energy: ["墙级能量", "楼级能量｜贤者之石/巨大本体", "贤者之石资源支撑变身、巨大化和再生。"],
        energyRegen: ["缓慢回能", "中速回能｜贤者之石资源", "恢复依赖库存消耗而非自然回能。"]
      }),
      notes: notes({
        penetration: "巨大本体的怪力、撕咬和压制适合对人和局部建筑破坏，变身主要服务欺骗而非破坏。",
        resistance: "贤者之石再生和巨大身体提高承伤，但火力压制、资源消耗和核心暴露可击溃。",
        sensing: "擅长伪装、潜伏和心理战，直接索敌能力不突出。",
        tactics: "欺骗、挑拨和伪装能力强，正面战斗容易因自负和情绪失控暴露破绽。",
        special: "变身、巨大本体、贤者之石再生、人造人核心、心理挑拨。",
        weakness: "贤者之石资源有限，核心小型本体脆弱；自负与情绪会削弱判断。",
        setting: "按漫画/FA线恩维记录，不使用2003版设定。",
        basis: "依据Fullmetal Alchemist Wiki角色入口与正篇恩维变身、巨大本体和贤者之石表现保守定级。"
      })
    })
  ]);
})();

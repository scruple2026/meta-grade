(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["魔法少女小圆"];

  if (!work) {
    throw new Error("魔法少女小圆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "homura-akemi",
      name: "晓美焰",
      en: "Homura Akemi",
      ja: "暁美ほむら",
      affiliation: "见泷原中学 / 魔法少女",
      grade: "魔法少女 / 时间停止与循环",
      appearances: ["TV动画"],
      timelineStatus: "TV本篇 / 时间循环中",
      aliases: ["焰", "小焰", "Homura"],
      fandomSlug: "Homura_Akemi",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Homura Akemi",
          url: "https://vsbattles.fandom.com/wiki/Homura_Akemi",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核TV时间停止、循环和魔法少女装备口径；本站本批不并入恶魔焰。"
        }
      ],
      dimensions: dims({
        attack: ["砖块级", "楼宇级｜枪械/炸药/储备武器", "主要靠现代武器、爆炸物和时间停止创造命中窗口。"],
        defense: ["凡人级", "墙体级｜盾/时间停止规避", "防御更多来自时间停止和规避，本体不硬。"],
        movement: ["凡人速", "亚音速｜时间停止位移", "时间停止制造位移优势，不等同本体高速。"],
        reaction: ["凡人速", "亚音速｜经验/时间停止", "大量循环经验和时间停止提高实战应对。"],
        vitality: ["强化凡体", "精锐韧体｜灵魂宝石", "魔法少女生命依赖灵魂宝石，本体损伤可被魔力修复。"],
        healing: ["中速自愈｜魔力修复", "快速自愈｜魔力修复", "受灵魂宝石污浊和魔力限制。"],
        energy: ["墙体级能量", "楼宇级能量｜武器储备/魔力", "魔力与武器储备支撑长期循环作战。"],
        energyRegen: ["快速回能", "快速回能｜悲叹之种/休整", "需净化灵魂宝石和补给武器。"]
      }),
      notes: notes({
        penetration: "攻击依赖枪械、炸药、火箭筒等现代武器与时间停止命中窗口，时间停止本身不等同破坏力。攻击速度：枪弹、火箭弹和爆炸物各有发射或引爆过程；时间停止提供布置与命中窗口，却不会统一改变武器弹速。",
        resistance: "盾和时间停止规避很强，但本体防御有限，灵魂宝石被破坏会致命。",
        sensing: "循环记忆和对敌人行动模式的熟悉是核心信息优势。",
        tactics: "大量时间循环带来准备、布置和情报优势，擅长提前储备武器和规避失败路线。",
        special: "时间停止、时间循环、盾内储物、灵魂宝石、现代武器库。",
        weakness: "灵魂宝石污浊、武器补给和保护小圆目标会限制选择；本批不计入恶魔焰。",
        setting: "按TV本篇晓美焰记录，不并入叛逆物语恶魔焰。",
        basis: "依据晓美焰在TV本篇多轮循环中使用时间停止、现代武器和灵魂宝石机制的表现定级。"
      })
    })
  ]);
})();

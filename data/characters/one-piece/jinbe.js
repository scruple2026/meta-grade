(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jinbe",
      name: "甚平",
      en: "Jinbe",
      ja: "ジンベエ",
      affiliation: "草帽一伙",
      grade: "操舵手 / 鱼人空手道",
      appearances: ["正篇"],
      timelineStatus: "加入草帽一伙后",
      aliases: [],
      fandomSlug: "Jinbe",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；鱼人空手道和霸气高风险量级仍需原作卷话补证。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜鱼人空手道｜争议", "鱼人空手道可传导水分和冲击，对大型目标有效。"],
        defense: ["街区级", "城市级｜武装色｜争议", "承伤和霸气防御很强。"],
        movement: ["超音速", "高超音速｜水中/战斗机动｜争议", "陆上和水中速度都很高。"],
        reaction: ["超音速", "高超音速｜争议", "可与四皇干部级敌人战斗。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜鱼人体质｜争议", "鱼人体质、霸气和意志提升承伤。"],
        healing: ["无自愈", "缓慢自愈", "依赖治疗和休息。"],
        energy: ["街区级能量", "城市级能量｜鱼人空手道｜争议", "高输出消耗体力。"],
        energyRegen: ["中速回能", "快速回能｜水中优势", "水中环境有利但非无限。"]
      }),
      notes: notes({
        penetration: "鱼人空手道可把冲击传入目标体内水分，配合武装色、投技和水中优势形成钝击破甲与内部震荡；对含水生物和水域战场更强，不把传导机制直接抬到国家级。攻击速度：甚平的鱼人空手道随拳掌和投技近身发动，冲击传入目标体内水分是命中后的效果；传导不构成独立飞行弹体。",
        resistance: "鱼人体质、武装色和多年海战经验提供强承伤，水中行动能力远超多数能力者；缺少再生，面对果实克制、强斩击、雷电或离水环境仍需保守。",
        sensing: "见闻色、鱼人水感和海战经验让他在水域和近身战中定位能力强；干燥或空中战会削弱环境感知收益。",
        tactics: "老练稳健，擅长用鱼人空手道、水流、武装色和站位保护队友；被高速远程拉扯时需争取地形。",
        special: "鱼人空手道、鱼人柔术、武装色霸气、水中战。",
        weakness: "最大优势依赖近身和水域条件；在干燥、空中或被远程高机动敌人拉扯时效率下降，持续硬拼仍会累积伤势。",
        setting: "按加入草帽一伙后的成熟鱼人空手道和霸气版本记录；水中优势作为环境峰值，不默认每场都完全展开。",
        basis: "依据甚平在顶上战争、蛋糕岛和和之国后的四皇干部级战斗表现定级。"
      })
    })
  ]);
})();

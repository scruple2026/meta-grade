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
        energyRegen: ["常规回能", "快速回能｜水中优势", "水中环境有利但非无限。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "鱼人空手道、鱼人柔术、武装色霸气、水中战。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据甚平在顶上战争、蛋糕岛和和之国后的四皇干部级战斗表现定级。"
      })
    })
  ]);
})();

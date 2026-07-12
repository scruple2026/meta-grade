(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shanks",
      name: "香克斯",
      en: "Shanks",
      ja: "シャンクス",
      affiliation: "红发海贼团",
      grade: "四皇 / 霸王色霸气",
      appearances: ["东海篇", "顶上战争", "最终章前后"],
      timelineStatus: "最终章前后 / 四皇状态",
      aliases: ["红发", "Red-Haired Shanks", "神避"],
      fandomSlug: "Shanks",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Shanks",
          url: "https://vsbattles.fandom.com/wiki/Shanks",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核香克斯四皇级、霸王色霸气和神避相关跨界口径；本站按表现保守记录。"
        },
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；香克斯具体量级仍需原作卷话补证。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜神避/霸王色｜争议", "已展示的高端斩击和霸气压制很强，但表现数量少，保留争议。"],
        defense: ["街区级", "城市级｜霸气防御｜争议", "四皇级霸气和体魄支撑承伤，缺少大量硬抗细节。"],
        movement: ["超音速", "高超音速｜争议", "顶级剑士/霸气使用者速度高，但不按光速。"],
        reaction: ["超音速", "高超音速｜见闻色/未来视反制｜争议", "见闻色和霸王色干扰见闻色是核心优势。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜四皇体魄｜争议", "按四皇级体魄和霸气保守记录。"],
        healing: ["无自愈", "缓慢自愈", "无自体再生，依赖休养和医疗。"],
        energy: ["街区级能量", "城市级能量｜霸王色霸气｜争议", "霸气储量极高但表现仍需补证。"],
        energyRegen: ["快速回能", "快速回能｜霸气恢复", "高强度霸气会消耗体力。"]
      }),
      notes: notes({
        penetration: "神避和霸王色缠绕具备高单体穿透/压制；霸王色震慑不按破坏范围抬级。攻击速度：香克斯的神避随持剑动作与接战距离命中，霸王色缠绕附着在剑击上增强压制；霸王色震慑按范围作用，不是独立飞行弹体。",
        resistance: "霸气防御强；断臂、无果实能力和表现样本少是评级不确定来源。",
        sensing: "高阶见闻色和见闻杀是核心，既能读取未来/气息，也能干扰对手见闻色；公开样本仍需保守。",
        tactics: "短场面决断极强，擅长用霸王色威慑、见闻杀和高压剑击快速定局；资料少使复杂长战策略仍有不确定。",
        special: "霸王色霸气、见闻色、武装色、神避、见闻杀。",
        weakness: "公开战斗样本相对少，许多高端判断依赖同阶表现和短场面，需保留争议。",
        setting: "按最终章前后四皇香克斯记录；神避和见闻杀作为已展示峰值，不把四皇称号直接外推到更高主档。",
        basis: "依据香克斯在顶上战争前后、最终章对基德相关表现和霸气压制场面定级。"
      })
    })
  ]);
})();

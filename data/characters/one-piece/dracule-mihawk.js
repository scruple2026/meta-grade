(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dracule-mihawk",
      name: "乔拉可尔·米霍克",
      en: "Dracule Mihawk",
      ja: "ジュラキュール・ミホーク",
      affiliation: "十字公会",
      grade: "世界最强剑士",
      appearances: ["东海篇", "顶上战争", "最终章前后"],
      timelineStatus: "新世界后期 / 黑刀夜",
      aliases: ["鹰眼", "Mihawk", "黑刀夜"],
      fandomSlug: "Dracule_Mihawk",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Dracule Mihawk",
          url: "https://vsbattles.fandom.com/wiki/Dracule_Mihawk",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核米霍克顶级剑士和黑刀斩击的跨界量级口径；本站按已表现保守记录。"
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
          claim: "作为日文官方作品入口保留；米霍克具体量级仍需原作卷话或设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜黑刀斩击｜争议", "大范围斩击和顶级剑术很强，但公开全力样本不足。"],
        defense: ["街区级", "街区级｜武装色/剑术格挡", "防御以霸气、剑术格挡和闪避为主。"],
        movement: ["超音速", "高超音速｜争议", "顶级剑士速度高。"],
        reaction: ["超音速", "高超音速｜见闻色/剑术经验｜争议", "剑士反应与战斗经验突出。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜顶级剑士｜争议", "按顶级剑士体魄和霸气保守记录。"],
        healing: ["无自愈", "缓慢自愈", "无再生。"],
        energy: ["街区级能量", "城市级能量｜霸气/黑刀｜争议", "霸气和斩击峰值消耗体力。"],
        energyRegen: ["常规回能", "快速回能｜霸气恢复", "无特殊无限回能。"]
      }),
      notes: notes({
        penetration: "黑刀与顶级剑术主打斩击穿透和大范围切割，不把称号直接换算为更高破坏范围。",
        resistance: "依赖剑术格挡、霸气和闪避；缺少果实体质或再生。",
        special: "黑刀夜、顶级剑术、武装色、见闻色。",
        weakness: "公开全力战斗样本少，顶级定位需要后续卷话补证。",
        setting: "按新世界后期米霍克记录。",
        basis: "依据米霍克在东海、顶上战争和后续定位中的斩击、剑术和与顶级剑士相关信息保守定级。"
      })
    })
  ]);
})();

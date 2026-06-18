(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sakazuki",
      name: "萨卡斯基",
      en: "Sakazuki",
      ja: "サカズキ",
      affiliation: "海军本部",
      grade: "元帅 / 岩浆果实",
      appearances: ["顶上战争", "新世界"],
      timelineStatus: "顶上战争至新世界 / 赤犬",
      aliases: ["赤犬", "Akainu", "岩浆"],
      fandomSlug: "Sakazuki",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Akainu",
          url: "https://vsbattles.fandom.com/wiki/Sakazuki",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核赤犬、岩浆果实、顶上战争和大将级跨界口径；本站仍以城市级争议峰值保守处理。"
        }
      ],
      revisionNotes: [
        "从海贼王 worldbook 名字池补入；主面板按顶上战争至新世界海军元帅阶段保守记录。"
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜岩浆果实｜争议", "岩浆果实具备极高热伤和范围破坏，城市级为大将级争议峰值。"],
        defense: ["街区级", "城市级｜自然系/霸气｜争议", "自然系元素化、霸气和大将级体魄支撑高承伤。"],
        movement: ["超音速", "高超音速｜争议", "大将级战场机动。"],
        reaction: ["超音速", "高超音速｜见闻色/经验｜争议", "可参与顶上战争最高强度交锋。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜大将体魄｜争议", "与白胡子、青雉等高端战场关联的承伤和续航很强。"],
        healing: ["缓慢自愈", "缓慢自愈", "自然系规避不等于快速再生。"],
        energy: ["街区级能量", "城市级能量｜岩浆果实｜争议", "岩浆持续输出和霸气消耗巨大。"],
        energyRegen: ["快速回能", "快速回能｜体力恢复", "续航强但非无限。"]
      }),
      notes: notes({
        penetration: "岩浆果实以高热、熔穿和范围喷发为主，对常规肉体和火焰类能力有强压制；不代表概念即死。",
        resistance: "自然系元素化、霸气和大将级体魄很强，但海楼石、海水、霸气命中和高端震动/斩击仍可造成伤害。",
        sensing: "海军大将级见闻色和战场经验，适合大规模战场压制与追击。",
        tactics: "战术风格极端强硬，擅长用高热火力逼迫敌人保护弱点或暴露路线；也可能因绝对正义而忽略保守撤退。",
        special: "岩浆果实、自然系元素化、霸气、大将级指挥与压制。",
        weakness: "海水、海楼石和霸气仍是自然系通用限制；重火力攻击容易造成环境破坏和友军风险。",
        setting: "按顶上战争至新世界元帅阶段记录，不把职务本身直接换算成更高战力。",
        basis: "依据萨卡斯基在顶上战争对白胡子、艾斯、路飞阵营和大将级战斗中的岩浆输出、防御和续航表现定级。"
      })
    })
  ]);
})();

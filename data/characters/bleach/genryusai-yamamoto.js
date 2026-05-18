(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "genryusai-yamamoto",
      name: "山本元柳斋重国",
      en: "Genryusai Shigekuni Yamamoto",
      ja: "山本元柳斎重國",
      affiliation: "护廷十三队",
      grade: "总队长 / 流刃若火",
      appearances: ["尸魂界篇", "空座町篇", "千年血战篇"],
      timelineStatus: "千年血战篇 / 卍解残火太刀",
      aliases: ["山本总队长", "元柳斋", "残火太刀"],
      fandomSlug: "Genryusai_Shigekuni_Yamamoto",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Genryusai Shigekuni Yamamoto",
          url: "https://vsbattles.fandom.com/wiki/Shigekuni_Yamamoto_Genryusai",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核山本始解/卍解、残火太刀和高端灵压量级口径；本站保留争议标签。"
        },
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "TV动画「BLEACH 千年血战篇」角色页",
          url: "https://bleach-anime.com/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对千年血战篇官方角色入口；残火太刀具体量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "zanka-no-tachi",
      timelinePanels: [
        {
          key: "shikai-ryujin-jakka",
          label: "始解 / 流刃若火",
          status: "最强火炎系斩魄刀始解",
          dimensions: dims({
            attack: ["城市级", "城市级｜流刃若火｜争议", "始解火力和灵压压制极强，但不直接计入卍解残火太刀峰值。"],
            defense: ["城市级", "城市级｜灵压防御｜争议", "灵压、经验和炎热环境提供防御优势。"],
            movement: ["高超音速", "高超音速｜瞬步｜争议", "老练队长级高速移动。"],
            reaction: ["高超音速", "高超音速｜争议", "总队长级反应与经验。"],
            vitality: ["城市级生命阈值", "城市级生命阈值｜灵体｜争议", "灵体与灵压支撑承伤。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生，依赖灵体恢复或治疗。"],
            energy: ["城市级能量", "城市级能量｜流刃若火｜争议", "灵压储量极高。"],
            energyRegen: ["快速回能", "快速回能｜灵压恢复", "高强度战斗会消耗。"]
          }),
          notes: "不计入千年血战卍解残火太刀。"
        },
        {
          key: "zanka-no-tachi",
          label: "千年血战 / 残火太刀",
          status: "卍解残火太刀峰值",
          dimensions: dims({
            attack: ["城市级", "大陆级｜残火太刀｜争议", "残火太刀热量、斩击与灵压峰值极高；按高端争议处理。"],
            defense: ["城市级", "大陆级｜残火太刀/灵压｜争议", "卍解热量和灵压形成强防护，但不等同无条件免伤。"],
            movement: ["高超音速", "高超音速｜瞬步｜争议", "速度按队长级高端保守记录。"],
            reaction: ["高超音速", "高超音速｜争议", "总队长经验和灵压感知极强。"],
            vitality: ["城市级生命阈值", "大陆级生命阈值｜灵体/灵压｜争议", "高灵压支撑生命阈值，仍可被针对性斩击杀伤。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生。"],
            energy: ["城市级能量", "大陆级能量｜残火太刀｜争议", "卍解灵压消耗与环境影响极大。"],
            energyRegen: ["快速回能", "快速回能｜灵压恢复", "卍解不能无限维持。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "大陆级｜残火太刀｜争议", "残火太刀热量、斩击与灵压峰值极高；按高端争议处理。"],
        defense: ["城市级", "大陆级｜残火太刀/灵压｜争议", "卍解热量和灵压形成强防护，但不等同无条件免伤。"],
        movement: ["高超音速", "高超音速｜瞬步｜争议", "速度按队长级高端保守记录。"],
        reaction: ["高超音速", "高超音速｜争议", "总队长经验和灵压感知极强。"],
        vitality: ["城市级生命阈值", "大陆级生命阈值｜灵体/灵压｜争议", "高灵压支撑生命阈值，仍可被针对性斩击杀伤。"],
        healing: ["缓慢自愈", "常规自愈｜灵体恢复", "无强再生。"],
        energy: ["城市级能量", "大陆级能量｜残火太刀｜争议", "卍解灵压消耗与环境影响极大。"],
        energyRegen: ["快速回能", "快速回能｜灵压恢复", "卍解不能无限维持。"]
      }),
      notes: notes({
        penetration: "残火太刀兼具高温、斩击和灵压压制；高温环境影响不直接等同持续全球破坏。",
        resistance: "灵压和卍解热量可形成强防护，但偷袭、伪装、封锁卍解和情报差可绕过优势。",
        sensing: "总队长级灵压感知、战斗经验和火焰领域掌握极强；伪装、卍解夺取和情报误判仍可能绕过。",
        tactics: "经验与威慑力顶级，擅长用压倒性火力和白打逼迫对手接招；年龄、愤怒和对敌方情报误判会影响决策。",
        special: "流刃若火、残火太刀、火焰/高温、灵压压制、总队长级白打与瞬步。",
        weakness: "卍解被夺取或情报误判会严重削弱；年龄与战斗策略也影响稳定输出。",
        setting: "按千年血战篇卍解残火太刀记录，始解拆入时间线。",
        basis: "依据山本在尸魂界篇、空座町篇和千年血战篇中流刃若火、残火太刀、灵压和承伤表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ichibe-hyosube",
      name: "兵主部一兵卫",
      en: "Ichibe Hyosube",
      ja: "兵主部一兵衛",
      affiliation: "零番队",
      grade: "零番队首领 / 名字权能",
      appearances: ["千年血战篇"],
      timelineStatus: "千年血战篇 / 真打一文字",
      aliases: ["和尚", "一文字", "真打一文字"],
      fandomSlug: "Ichibe_Hyosube",
      confidence: "review",
      evidenceType: ["原作表现", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Ichibe Hyosube",
          url: "https://vsbattles.fandom.com/wiki/Ichib%C4%93_Hy%C5%8Dsube",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核一兵卫真打一文字、名字权能和高端灵压口径；本站将名字权能与破坏主档分开记录。"
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
          claim: "用于核对千年血战篇官方角色入口；名字权能具体机制仍需原作卷话补证。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "大陆级｜真打一文字｜争议", "灵压和斩魄刀峰值很高；名字剥夺/改名作为权能另记，不单独抬破坏范围。"],
        defense: ["城市级", "大陆级｜灵压/复归条件｜争议", "灵压极强，复归依赖名字/呼唤条件，不等同常规再生。"],
        movement: ["高超音速", "高超音速｜瞬步｜争议", "零番队高端速度。"],
        reaction: ["高超音速", "高超音速｜争议", "可参与灵王宫高端战斗。"],
        vitality: ["城市级生命阈值", "大陆级生命阈值｜灵体/名字机制｜争议", "灵体和名字机制提高难杀程度，但需标条件。"],
        healing: ["常规自愈", "极速自愈｜名字复归条件", "复归与名字机制相关，不能视为无条件再生。"],
        energy: ["城市级能量", "大陆级能量｜真打一文字｜争议", "灵压和墨/名字权能储量极高。"],
        energyRegen: ["快速回能", "快速回能｜灵压恢复", "权能和灵压仍有发动条件。"]
      }),
      notes: notes({
        penetration: "一文字的黑与名字剥夺属于规则/概念性质权能，不直接换算为纯破坏穿透。",
        resistance: "名字机制提供特殊复归条件；全知全能、未来改写和更高规则干涉可绕过常规优势。",
        special: "一文字、真打一文字、黑、名字剥夺、改名、灵王宫零番队首领权限。",
        weakness: "名字权能依赖命中、墨和规则生效条件；面对未来改写类能力存在明显风险。",
        setting: "按千年血战篇真打一文字状态记录。",
        basis: "依据一兵卫在灵王宫对友哈巴赫战中的斩魄刀、名字权能、灵压和复归机制表现定级。"
      })
    })
  ]);
})();

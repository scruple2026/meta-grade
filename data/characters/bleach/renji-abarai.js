(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "renji-abarai",
      name: "阿散井恋次",
      en: "Renji Abarai",
      ja: "阿散井恋次",
      affiliation: "护廷十三队",
      grade: "副队长 / 真卍解",
      appearances: ["正篇"],
      timelineStatus: "千年血战篇 / 真卍解",
      aliases: [],
      fandomSlug: "Renji_Abarai",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "TV动画「BLEACH 千年血战篇」角色页",
          url: "https://bleach-anime.com/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对千年血战篇官方角色资料；高端灵压量级仍需章节/设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜真卍解｜争议", "蛇尾丸与真卍解具高破坏近战输出。"],
        defense: ["街区级", "城市级｜灵压防御｜争议", "副队长到队长级灵压承伤。"],
        movement: ["超音速", "高超音速｜瞬步｜争议", "死神高速移动。"],
        reaction: ["超音速", "高超音速｜争议", "可参与千年血战高端战斗。"],
        vitality: ["精锐韧体", "街区级生命阈值｜灵体", "灵体和训练提升承伤。"],
        healing: ["缓慢自愈", "常规自愈｜灵体恢复", "依赖恢复和治疗。"],
        energy: ["街区级能量", "城市级能量｜真卍解｜争议", "卍解消耗较高。"],
        energyRegen: ["常规回能", "快速回能｜灵压恢复", "灵压可恢复但不无限。"]
      }),
      notes: notes({
        penetration: "按可见破坏、命中效果和能力条件记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录。",
        special: "蛇尾丸、卍解、真卍解、瞬步。",
        weakness: "存在体力、资源、条件、情报或本体弱点。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据恋次在尸魂界篇后期、破面篇和千年血战篇真卍解表现定级。"
      })
    })
  ]);
})();

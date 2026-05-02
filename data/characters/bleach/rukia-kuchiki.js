(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "rukia-kuchiki",
      name: "朽木露琪亚",
      en: "Rukia Kuchiki",
      ja: "朽木ルキア",
      category: "主角团",
      affiliation: "护廷十三队",
      grade: "死神 / 袖白雪",
      appearances: ["正篇"],
      timelineStatus: "千年血战篇 / 卍解",
      aliases: [],
      fandomSlug: "Rukia_Kuchiki",
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
      defaultTimelineKey: "tybw-bankai",
      timelinePanels: [
        {
          key: "arrancar-shikai",
          label: "破面篇 / 始解袖白雪",
          status: "始解冰雪能力成型",
          dimensions: dims({
            attack: ["楼级", "街区级｜始解", "袖白雪始解具备强单体与局部范围冰冻。"],
            defense: ["楼级", "街区级｜灵压防御", "死神灵体和灵压防御提高承伤。"],
            movement: ["超音速", "超音速｜瞬步", "瞬步高速移动。"],
            reaction: ["超音速", "超音速", "可参与破面篇高速战斗。"],
            vitality: ["精锐韧体", "精锐韧体｜灵体", "死神灵体比人类耐受更强。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "依赖灵体恢复和治疗。"],
            energy: ["楼级能量", "街区级能量｜始解", "始解消耗灵压。"],
            energyRegen: ["常规回能", "快速回能｜灵压恢复", "灵压会消耗并恢复。"]
          }),
          notes: "不计入千年血战篇卍解。"
        },
        {
          key: "tybw-bankai",
          label: "千年血战篇 / 卍解",
          status: "白霞罚峰值",
          dimensions: dims({
            attack: ["街区级", "城市级｜卍解", "冰雪系斩魄刀可冻结大范围目标，卍解峰值强但需条件。"],
            defense: ["街区级", "城市级｜灵压防御｜争议", "灵压防御和冰冻能力增强承伤。"],
            movement: ["超音速", "高超音速｜瞬步", "死神瞬步高速移动。"],
            reaction: ["超音速", "高超音速｜争议", "可参与队长级战斗。"],
            vitality: ["精锐韧体", "街区级生命阈值｜灵体", "死神灵体比人类耐受更强。"],
            healing: ["缓慢自愈", "常规自愈｜灵体恢复", "依赖灵体恢复和治疗。"],
            energy: ["街区级能量", "城市级能量｜卍解｜争议", "冰雪系卍解消耗大。"],
            energyRegen: ["常规回能", "快速回能｜灵压恢复", "灵压会消耗并恢复。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜卍解", "冰雪系斩魄刀可冻结大范围目标，卍解峰值强但需条件。"],
        defense: ["街区级", "城市级｜灵压防御｜争议", "灵压防御和冰冻能力增强承伤。"],
        movement: ["超音速", "高超音速｜瞬步", "死神瞬步高速移动。"],
        reaction: ["超音速", "高超音速｜争议", "可参与队长级战斗。"],
        vitality: ["精锐韧体", "街区级生命阈值｜灵体", "死神灵体比人类耐受更强。"],
        healing: ["缓慢自愈", "常规自愈｜灵体恢复", "依赖灵体恢复和治疗。"],
        energy: ["街区级能量", "城市级能量｜卍解｜争议", "冰雪系卍解消耗大。"],
        energyRegen: ["常规回能", "快速回能｜灵压恢复", "灵压会消耗并恢复。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "袖白雪、始解、卍解、冰冻。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据露琪亚在破面篇、千年血战篇中斩魄刀和卍解表现定级。"
      })
    })
  ]);
})();

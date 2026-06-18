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
            healing: ["缓慢自愈", "中速自愈｜灵体恢复", "依赖灵体恢复和治疗。"],
            energy: ["楼级能量", "街区级能量｜始解", "始解消耗灵压。"],
            energyRegen: ["中速回能", "快速回能｜灵压恢复", "灵压会消耗并恢复。"]
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
            healing: ["缓慢自愈", "中速自愈｜灵体恢复", "依赖灵体恢复和治疗。"],
            energy: ["街区级能量", "城市级能量｜卍解｜争议", "冰雪系卍解消耗大。"],
            energyRegen: ["中速回能", "快速回能｜灵压恢复", "灵压会消耗并恢复。"]
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
        healing: ["缓慢自愈", "中速自愈｜灵体恢复", "依赖灵体恢复和治疗。"],
        energy: ["街区级能量", "城市级能量｜卍解｜争议", "冰雪系卍解消耗大。"],
        energyRegen: ["中速回能", "快速回能｜灵压恢复", "灵压会消耗并恢复。"]
      }),
      notes: notes({
        penetration: "袖白雪通过低温、冻结和斩魄刀技压制目标，白霞罚可把自身周边温度降到极端低温并冻结范围内敌人；冰冻属于状态压制，不直接等同爆炸破坏。",
        resistance: "死神灵体、灵压防御和冰雪能力提供承伤与控场，但露琪亚本体不具备队长顶层硬度或再生；卍解低温对自身也危险，解冻过程和持续时间必须受控。",
        sensing: "死神灵压感知和队长级训练能识别灵体、敌意和冰雪术式范围；卍解低温需要精确自我状态管理。",
        tactics: "战斗执行谨慎，擅长用袖白雪分段控场和卍解窗口冻结目标；解冻过程、自损风险和远程压制要求队友配合。",
        special: "袖白雪始解可展开多段冰雪技，卍解白霞罚把自身和周边降至极低温冻结目标，但需要谨慎升温解除。",
        weakness: "卍解峰值有明显自损和操控风险，不能长时间乱用；面对远程高火力、热/破冰能力或能绕开冻结的敌人时需要队友和战术配合。",
        setting: "按千年血战篇掌握白霞罚的版本记录；破面篇始解袖白雪已拆入时间线。",
        basis: "依据露琪亚在破面篇、千年血战篇中斩魄刀和卍解表现定级。"
      })
    })
  ]);
})();

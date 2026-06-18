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
        healing: ["缓慢自愈", "中速自愈｜灵体恢复", "依赖恢复和治疗。"],
        energy: ["街区级能量", "城市级能量｜真卍解｜争议", "卍解消耗较高。"],
        energyRegen: ["中速回能", "快速回能｜灵压恢复", "灵压可恢复但不无限。"]
      }),
      notes: notes({
        penetration: "蛇尾丸和真卍解以伸缩斩击、巨腕咬合、近身爆发和灵压冲击为主，适合破甲、压制大型目标和中距离追击；没有即死或概念型穿透。",
        resistance: "恋次具备副队长到队长级灵压、灵体承伤和战斗续航，但本体仍会被贯穿、冻结、毒化或规则能力处理；卍解防御不等同全身绝对屏障。",
        sensing: "死神灵压感知、瞬步经验和斩魄刀距离感支撑中近距战斗；缺少认知干涉或未来视类索敌。",
        tactics: "战术偏正面展开与中距离压制，能用蛇尾丸形态变化追击和逼位；遇到封锁卍解或规则能力时反制手段有限。",
        special: "蛇尾丸可伸缩斩击与中距离追击，真卍解强化巨腕、蛇牙和灵压爆发，瞬步提供死神高速位移。",
        weakness: "攻击方式偏正面和线性，依赖斩魄刀展开空间；遇到高速绕后、封锁卍解、远程范围压制或规则能力时缺少复杂反制。",
        setting: "按千年血战篇真卍解版本记录；尸魂界篇和破面篇旧卍解表现只作为成长依据。",
        basis: "依据恋次在尸魂界篇后期、破面篇和千年血战篇真卍解表现定级。"
      })
    })
  ]);
})();

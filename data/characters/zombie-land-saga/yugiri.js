(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["佐贺偶像是传奇 Zombie Land Saga"];
  if (!work) throw new Error("佐贺偶像是传奇 Zombie Land Saga work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yugiri",
    name: "夕雾",
    en: "Yugiri",
    ja: "ゆうぎり",
    aliases: ["Yugiri", "Franchouchou 5号", "弗兰秀秀5号", "花魁"],
    affiliation: "弗兰秀秀 / 佐贺偶像企划",
    grade: "丧尸偶像 / 花魁",
    appearances: ["Zombie Land Saga"],
    timelineStatus: "复活后 / 弗兰秀秀成员",
    fandomSlug: "Yugiri",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引", "非战斗角色"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Zombie Land Saga: Characters",
      url: "https://zombielandsaga.com/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《佐贺偶像是传奇》动画官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Zombie Land Saga Wiki: Yugiri",
      url: "https://zombieland-saga.fandom.com/wiki/Yugiri",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对夕雾的弗兰秀秀成员、丧尸身份、花魁背景和主要关系。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的夕雾 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜丧尸身体/生活道具", "非战斗角色；峰值只按丧尸身体或生活道具低档钝击记录。"],
        defense: ["凡人级", "砖级｜丧尸身体/痛觉迟钝", "丧尸身体能承受部分普通伤害，但不代表高硬度防御。"],
        movement: ["凡人速", "凡人速｜舞蹈体力", "舞台活动能力为普通人尺度。"],
        reaction: ["凡人速", "凡人速｜社交应变", "应变多为社交和舞台层面，非战斗反应。"],
        vitality: ["凡人肉身", "强化凡体｜丧尸身体/死亡条件特殊", "丧尸身份提高失能/死亡条件特殊性，但不写作高防。"],
        healing: ["无自愈", "缓慢自愈｜维护/修复", "恢复依赖外部维护、化妆和修复。"],
        energy: ["凡人能量", "砖级能量｜丧尸体力/舞台活动", "资源为身体活动和舞台体力。"],
        energyRegen: ["无回能", "缓慢回能｜休息/维护", "依赖休息和外部维护。"]
      }),
    notes: notes({
        penetration: "丧尸身体和生活道具可造成普通低档伤害，非战斗专长。",
        resistance: "丧尸身份带来死亡条件特殊和痛觉迟钝，但肉身仍可破损。",
        sensing: "社交观察、时代经验、舞台气氛掌控和安抚能力较强。",
        tactics: "擅长调解、支撑团队情绪和舞台演出，不具备战斗战术定位。",
        special: "丧尸复活、花魁背景、舞台表演、弗兰秀秀成员身份。",
        weakness: "身体破损、身份暴露、时代差异和外部维护不足会影响行动。",
        setting: "按复活后弗兰秀秀成员夕雾记录。",
        basis: "worldbook只用于抽取夕雾姓名；定级依据官方角色入口和Zombie Land Saga Wiki角色入口，丧尸身份写入生命与特殊项，不抬攻击/速度。"
      })
  })]);
})();

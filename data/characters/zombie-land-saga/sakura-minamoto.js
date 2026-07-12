(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["佐贺偶像是传奇 Zombie Land Saga"];
  if (!work) throw new Error("佐贺偶像是传奇 Zombie Land Saga work metadata must load before character files.");

  registerCharacters([work.character({
    id: "sakura-minamoto",
    name: "源樱",
    en: "Sakura Minamoto",
    ja: "源 さくら",
    aliases: ["Sakura", "Minamoto Sakura", "Franchouchou 1号", "弗兰秀秀1号"],
    affiliation: "弗兰秀秀 / 佐贺偶像企划",
    grade: "丧尸偶像 / 主唱成员",
    appearances: ["Zombie Land Saga"],
    timelineStatus: "复活后 / 弗兰秀秀成员",
    fandomSlug: "Sakura_Minamoto",
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
      label: "Zombie Land Saga Wiki: Sakura Minamoto",
      url: "https://zombieland-saga.fandom.com/wiki/Sakura_Minamoto",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对源樱的弗兰秀秀成员、丧尸身份和偶像活动。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的源樱 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜丧尸身体/舞台道具", "非战斗角色；峰值只按丧尸身体和舞台道具低档钝击记录。"],
        defense: ["凡人级", "砖级｜丧尸身体/痛觉迟钝", "丧尸身体能承受部分普通伤害，但不代表高硬度防御。"],
        movement: ["凡人速", "凡人速｜舞蹈体力", "舞台活动能力为普通人尺度。"],
        reaction: ["凡人速", "凡人速", "无战斗反应表现。"],
        vitality: ["凡人肉身", "强化凡体｜丧尸身体/死亡条件特殊", "丧尸身份提高失能/死亡条件特殊性，但不写作高防。"],
        healing: ["无自愈", "缓慢自愈｜维护/修复", "恢复依赖外部维护、化妆和修复，不是稳定高速自愈。"],
        energy: ["凡人能量", "砖级能量｜丧尸体力/舞台活动", "资源为身体活动和舞台体力。"],
        energyRegen: ["无回能", "缓慢回能｜休息/维护", "依赖休息和外部维护。"]
      }),
    notes: notes({
        penetration: "丧尸身体和舞台道具可造成普通低档钝击，非战斗专长。攻击速度：源樱并非战斗人员，身体碰撞和舞台道具钝击都要先接近目标并完成凡人尺度的挥打。",
        resistance: "丧尸身份带来死亡条件特殊和痛觉迟钝，但肉身仍可破损。",
        sensing: "舞台应变、团队氛围和偶像活动感受较强。",
        tactics: "以团队演出、鼓舞和临场舞台配合为主，不具备战斗战术定位。",
        special: "丧尸复活、偶像演出、弗兰秀秀成员身份。",
        weakness: "身体破损、身份暴露、化妆脱落和精神动摇会严重影响行动。",
        setting: "按复活后弗兰秀秀成员源樱记录。",
        basis: "worldbook只用于抽取源樱姓名；定级依据官方角色入口和Zombie Land Saga Wiki角色入口，丧尸身份写入生命与特殊项，不抬攻击/速度。"
      })
  })]);
})();

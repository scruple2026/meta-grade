(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["佐贺偶像是传奇 Zombie Land Saga"];
  if (!work) throw new Error("佐贺偶像是传奇 Zombie Land Saga work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ai-mizuno",
    name: "水野爱",
    en: "Ai Mizuno",
    ja: "水野 愛",
    aliases: ["Ai", "Mizuno Ai", "Franchouchou 3号", "弗兰秀秀3号"],
    affiliation: "弗兰秀秀 / 佐贺偶像企划",
    grade: "丧尸偶像 / 前偶像",
    appearances: ["Zombie Land Saga"],
    timelineStatus: "复活后 / 弗兰秀秀成员",
    fandomSlug: "Ai_Mizuno",
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
      label: "Zombie Land Saga Wiki: Ai Mizuno",
      url: "https://zombieland-saga.fandom.com/wiki/Ai_Mizuno",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对水野爱的弗兰秀秀成员、丧尸身份和偶像经历。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的水野爱 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜丧尸身体/舞台道具", "非战斗角色；峰值只按丧尸身体和舞台道具低档钝击记录。"],
        defense: ["凡人级", "砖级｜丧尸身体/痛觉迟钝", "丧尸身体能承受部分普通伤害，但不代表高硬度防御。"],
        movement: ["凡人速", "凡人速｜舞蹈体力", "舞台活动能力为普通人尺度。"],
        reaction: ["凡人速", "凡人速", "无战斗反应表现。"],
        vitality: ["凡人肉身", "强化凡体｜丧尸身体/死亡条件特殊", "丧尸身份提高失能/死亡条件特殊性，但不写作高防。"],
        healing: ["无自愈", "缓慢自愈｜维护/修复", "恢复依赖外部维护、化妆和修复。"],
        energy: ["凡人能量", "砖级能量｜丧尸体力/舞台活动", "资源为身体活动和舞台体力。"],
        energyRegen: ["无回能", "缓慢回能｜休息/维护", "依赖休息和外部维护。"]
      }),
    notes: notes({
        penetration: "丧尸身体和舞台道具可造成普通低档钝击，非战斗专长。攻击速度：水野爱没有战斗招式，丧尸身体推打或舞台道具挥击只按普通动作，也没有可连续发射的载体。",
        resistance: "丧尸身份带来死亡条件特殊和痛觉迟钝，但肉身仍可破损。",
        sensing: "职业偶像经验、舞台观察和团队节奏判断较强。",
        tactics: "擅长舞台纪律、训练规划和团队演出，不具备战斗战术定位。",
        special: "丧尸复活、前偶像经验、弗兰秀秀成员身份。",
        weakness: "雷电/事故创伤语境、身份暴露、身体破损和精神动摇会影响行动。",
        setting: "按复活后弗兰秀秀成员水野爱记录。",
        basis: "worldbook只用于抽取水野爱姓名；定级依据官方角色入口和Zombie Land Saga Wiki角色入口，丧尸身份写入生命与特殊项，不抬攻击/速度。"
      })
  })]);
})();

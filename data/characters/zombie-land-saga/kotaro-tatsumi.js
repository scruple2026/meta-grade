(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["佐贺偶像是传奇 Zombie Land Saga"];
  if (!work) throw new Error("佐贺偶像是传奇 Zombie Land Saga work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kotaro-tatsumi",
    name: "巽幸太郎",
    en: "Kotaro Tatsumi",
    ja: "巽 幸太郎",
    aliases: ["Kotaro", "Tatsumi Kotaro", "幸太郎", "弗兰秀秀制作人"],
    affiliation: "佐贺偶像企划 / 弗兰秀秀制作人",
    grade: "制作人 / 经纪人",
    appearances: ["Zombie Land Saga"],
    timelineStatus: "弗兰秀秀制作人时期",
    fandomSlug: "Kotaro_Tatsumi",
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
      label: "Zombie Land Saga Wiki: Kotaro Tatsumi",
      url: "https://zombieland-saga.fandom.com/wiki/Kotaro_Tatsumi",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对巽幸太郎的制作人身份、弗兰秀秀企划和行动方式。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的巽幸太郎 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜生活道具/载具/准备", "非战斗角色；峰值来自道具、载具或事前准备。"],
        defense: ["凡人级", "凡人级", "普通成年人肉身。"],
        movement: ["凡人速", "凡人速", "普通成年人活动能力。"],
        reaction: ["凡人速", "凡人速｜临场应变", "应变多为演出和制作现场层面。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜休息/医疗", "恢复依赖普通休息和医疗。"],
        energy: ["凡人能量", "砖级能量｜设备/车辆/企划资源", "资源来自外部设备、车辆和制作资源，不是本体能量池。"],
        energyRegen: ["无回能", "缓慢回能｜补给/准备", "依赖补给和准备。"]
      }),
    notes: notes({
        penetration: "生活道具、载具和舞台设备可造成普通低档伤害，非战斗专长。",
        resistance: "普通人类肉身，无超常抗性。",
        sensing: "制作判断、舞台危机应对、团队状态观察和公众传播嗅觉突出。",
        tactics: "擅长企划、包装、激将、隐藏丧尸身份和推动偶像活动。",
        special: "制作人身份、偶像企划、舞台安排、丧尸成员管理。",
        weakness: "正面战斗能力普通，强依赖准备、设备和对成员的管理。",
        setting: "按弗兰秀秀制作人时期巽幸太郎记录。",
        basis: "worldbook只用于抽取巽幸太郎姓名；定级依据官方角色入口和Zombie Land Saga Wiki角色入口，制作能力写入战术/特殊项，不抬主面板。"
      })
  })]);
})();

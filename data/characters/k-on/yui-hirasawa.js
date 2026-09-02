(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["轻音少女 K-ON!"];
  if (!work) throw new Error("轻音少女 K-ON! work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yui-hirasawa",
    name: "平泽唯",
    en: "Yui Hirasawa",
    ja: "平沢 唯",
    aliases: ["Yui", "Hirasawa Yui", "唯", "吉他手"],
    affiliation: "樱丘女子高中 / 放课后Tea Time",
    grade: "轻音部吉他手 / 主唱",
    appearances: ["K-ON!"],
    timelineStatus: "高中轻音部时期",
    fandomSlug: "Yui_Hirasawa",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引", "非战斗角色"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "TBS: K-ON! Character",
      url: "https://www.tbs.co.jp/anime/k-on/k-on_tv/chara/chara.html",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《K-ON!》动画官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "K-ON! Wiki: Yui Hirasawa",
      url: "https://k-on.fandom.com/wiki/Yui_Hirasawa",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对平泽唯的轻音部、吉他、主唱和主要关系。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的平泽唯 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖块级｜吉他/生活道具｜装备", "非战斗角色；峰值只按乐器或生活道具的低档钝击记录。"],
        defense: ["凡人级", "凡人级", "普通高中生肉身。"],
        movement: ["凡人速", "凡人速", "普通高中生活动能力。"],
        reaction: ["凡人速", "凡人速", "无战斗反应表现。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜休息/医疗", "恢复依赖普通休息和医疗。"],
        energy: ["凡人能量", "凡人能量｜演奏体力", "资源为普通体力和演奏精力。"],
        energyRegen: ["无回能", "缓慢回能｜休息/进食", "依赖休息。"]
      }),
    notes: notes({
        penetration: "吉他和生活道具可造成普通钝击，非战斗专长。攻击速度：吉他和生活道具只能随持握、挥动和接近目标的普通动作命中，没有离手传播阶段。",
        resistance: "无超常抗性或防护。",
        sensing: "音乐节奏感和社交感受较强，但不是战斗索敌。",
        tactics: "日常协调和舞台配合为主，不具备战术战斗定位。",
        special: "吉他、主唱、轻音部活动、舞台演出。",
        weakness: "缺乏战斗训练、武器和防护。",
        setting: "按高中轻音部时期平泽唯记录。",
        basis: "worldbook只用于抽取平泽唯姓名；定级依据TBS官方角色入口和K-ON! Wiki角色入口，按非战斗日常角色保守低档记录。"
      })
  })]);
})();

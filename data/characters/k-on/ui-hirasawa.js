(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["轻音少女 K-ON!"];
  if (!work) throw new Error("轻音少女 K-ON! work metadata must load before character files.");

  registerCharacters([work.character({
    id: "ui-hirasawa",
    name: "平泽忧",
    en: "Ui Hirasawa",
    ja: "平沢 憂",
    aliases: ["Ui", "Hirasawa Ui", "忧", "平泽唯妹妹"],
    affiliation: "樱丘女子高中 / 平泽家",
    grade: "高中生 / 平泽唯的妹妹",
    appearances: ["K-ON!"],
    timelineStatus: "高中时期",
    fandomSlug: "Ui_Hirasawa",
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
      label: "K-ON! Wiki: Ui Hirasawa",
      url: "https://k-on.fandom.com/wiki/Ui_Hirasawa",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对平泽忧的平泽唯妹妹、学校生活和日常能力资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的平泽忧 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级｜生活道具", "非战斗角色，未记录有效战斗输出。"],
        defense: ["凡人级", "凡人级", "普通高中生肉身。"],
        movement: ["凡人速", "凡人速", "普通高中生活动能力。"],
        reaction: ["凡人速", "凡人速", "无战斗反应表现。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["无自愈", "缓慢自愈｜休息/医疗", "恢复依赖普通休息和医疗。"],
        energy: ["凡人能量", "凡人能量｜家务/日常体力", "资源为普通体力。"],
        energyRegen: ["无回能", "缓慢回能｜休息/进食", "依赖休息。"]
      }),
    notes: notes({
        penetration: "生活道具仅能造成普通低档伤害，非战斗专长。",
        resistance: "无超常抗性或防护。",
        sensing: "照顾家人、日常观察和学习适应能力较强。",
        tactics: "擅长日常安排和照顾他人，不具备战斗战术定位。",
        special: "家务、学习、照顾平泽唯、日常支援。",
        weakness: "缺乏战斗训练、武器和防护。",
        setting: "按高中时期平泽忧记录。",
        basis: "worldbook只用于抽取平泽忧姓名；定级依据TBS官方角色入口和K-ON! Wiki角色入口，按非战斗日常角色保守低档记录。"
      })
  })]);
})();

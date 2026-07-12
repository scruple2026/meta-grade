(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "asuka-langley-soryu",
      name: "惣流·明日香·兰格雷",
      en: "Asuka Langley Soryu",
      ja: "惣流・アスカ・ラングレー",
      affiliation: "NERV",
      grade: "第二适格者 / EVA二号机驾驶员",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版 / 二号机最终战",
      aliases: ["明日香", "Asuka", "第二适格者"],
      fandomSlug: "Asuka_Langley_Sohryu",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "街区级｜EVA二号机/武装", "二号机近战和武装对量产EVA形成高压输出。"],
        defense: ["凡人级", "街区级｜EVA二号机/AT力场", "战斗防御来自二号机和AT力场。"],
        movement: ["凡人速", "亚音速｜EVA机动", "二号机战场机动强但不按音速。"],
        reaction: ["凡人速", "亚音速｜高同步/驾驶", "明日香驾驶技巧优秀，高同步时反应提升。"],
        vitality: ["凡人肉身", "街区级生命阈值｜EVA二号机", "峰值来自机体承伤，本体仍脆弱。"],
        healing: ["无自愈", "无自愈", "二号机受损后不具备稳定战斗中再生。"],
        energy: ["凡人能量", "街区级能量｜EVA二号机/外部供电", "受供电和机体状态限制。"],
        energyRegen: ["中速回能", "中速回能｜外部供电/补给", "无S2机关常态回能。"]
      }),
      notes: notes({
        penetration: "二号机长刀、枪械和近战技巧形成高强度单体输出。攻击速度：二号机长刀与拳脚随机体接战动作，枪械弹药离膛后独立飞行；连射与换武器还受装备和供电窗口限制。",
        resistance: "AT力场和机体装甲防护强，但脐带电缆、内置电源、同步率和精神状态是限制。",
        sensing: "驾驶舱传感器、训练和高自信作战经验优秀；精神崩溃会严重削弱同步。",
        tactics: "受过完整驾驶训练，近战积极且技巧强；自尊和心理创伤会影响稳定判断。",
        special: "EVA同步、AT力场、二号机近战武装、高同步爆发。",
        weakness: "本体脆弱，机体供电与同步率限制明显；精神状态对战力影响极大。",
        setting: "按 TV/旧剧场版明日香记录，不混入式波或 Rebuild 设定。",
        basis: "依据明日香驾驶二号机对抗使徒和旧剧场版量产EVA战的机动、武装和同步表现定级。"
      })
    })
  ]);
})();

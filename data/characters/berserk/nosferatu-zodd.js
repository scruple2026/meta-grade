(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "nosferatu-zodd",
      name: "不死者佐德",
      en: "Nosferatu Zodd",
      ja: "ノスフェラトゥ・ゾッド",
      affiliation: "使徒 / 新生鹰之团",
      grade: "强大使徒 / 传说佣兵",
      appearances: ["黄金时代", "蚀之刻", "正篇"],
      timelineStatus: "使徒形态 / 不死者",
      aliases: ["佐德", "Zodd", "Nosferatu Zodd"],
      fandomSlug: "Zodd",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜使徒兽化", "巨斧/剑术和兽化肉体可撕裂大型目标。"],
        defense: ["楼级", "街区级｜使徒肉体", "使徒体魄和再生承伤极强。"],
        movement: ["亚音速", "音速｜兽化/飞行", "兽化后可高速突进和飞行。"],
        reaction: ["亚音速", "音速｜战斗经验", "数百年战斗经验支撑高反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜使徒再生", "强大使徒生命力和恢复力突出。"],
        healing: ["快速自愈｜使徒恢复", "极速自愈｜使徒恢复｜争议", "可恢复重伤，但非不可杀。"],
        energy: ["楼级能量", "街区级能量｜使徒体力", "使徒肉体和长战能力强。"],
        energyRegen: ["快速回能", "快速回能｜使徒体力", "续航强但非无限。"]
      }),
      notes: notes({
        penetration: "人形武器和兽化爪牙兼具重击、斩裂和撕咬。",
        resistance: "使徒体魄和恢复力强，可承受普通人类无法承受的创伤。",
        sensing: "战斗直觉极强，能识别强者和命运节点。",
        tactics: "偏正面强攻和武人式试探，尊重强敌，经验极多。",
        special: "使徒化、兽化形态、飞行、强再生、长寿战斗经验。",
        weakness: "强依赖肉体近战，面对神之手权能、特殊空间斩击或高端魔法仍有限制。",
        setting: "按使徒形态佐德记录。",
        basis: "依据佐德在黄金时代、与格斯/格里菲斯/髑髅骑士相关战斗中的使徒体魄、再生和武力表现定级。"
      })
    })
  ]);
})();

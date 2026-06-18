(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "darkened-class-card-spirits",
      name: "黑化英灵影像",
      en: "Darkened Class Card Spirits",
      ja: "黒化英霊",
      affiliation: "镜面界 / 职阶卡",
      grade: "职阶卡敌对影像",
      appearances: ["职阶卡回收事件"],
      timelineStatus: "早期Class Card敌人 / 群体条目",
      aliases: ["黑化英灵", "职阶卡敌人", "Saber卡", "Caster卡", "Assassin卡", "Berserker卡"],
      fandomSlug: "Class_Card",
      confidence: "review",
      evidenceType: ["官方入口", "资料入口"],
      sourceQuality: "entry",
      revisionNotes: ["从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙级", "楼级｜职阶卡宝具/英灵影像", "不同卡差异大，群体条目按早期可见敌人保守记录。"],
        defense: ["墙级", "楼级｜英灵影像/职阶卡", "影像和卡片机制提供强于普通人的承伤。"],
        movement: ["亚音速", "超音速｜职阶差异｜争议", "不同职阶差异大，强敌按峰值标注争议。"],
        reaction: ["亚音速", "超音速｜职阶差异｜争议", "英灵影像战斗反应高，但早期表现受镜面界和卡片状态限制。"],
        vitality: ["强化凡体", "楼级生命阈值｜英灵影像", "作为卡片敌人存在机制不同于生物生命。"],
        healing: ["无自愈", "中速自愈｜卡片/镜面界条件｜争议", "多以击破/回收处理，不按稳定再生。"],
        energy: ["墙级能量", "楼级能量｜Class Card/宝具", "宝具和职阶能力提供较高资源。"],
        energyRegen: ["中速回能", "快速回能｜镜面界/卡片条件", "资源表现依卡片与场景而变。"]
      }),
      notes: notes({
        penetration: "不同Class Card敌人有不同宝具、武装和魔术性质；群体条目只作早期敌对影像总括。",
        resistance: "作为英灵影像和卡片敌人，抗性强于普通生物，但可被击破并回收Class Card。",
        sensing: "战斗本能和职阶能力差异大，群体条目不单独赋予统一索敌。",
        tactics: "多表现为镜面界内敌对守卫或失控影像，战术复杂度因卡片而变。",
        special: "职阶卡、英灵影像、宝具、镜面界敌人和卡片回收机制。",
        weakness: "被击破后可回收卡片；不同卡差异极大，具体战斗应按单张卡另拆。",
        setting: "按早期职阶卡回收事件中的黑化英灵影像群体记录。",
        basis: "worldbook只用于抽取黑化英灵影像名称；定级依据公开作品资料入口和早期Class Card敌人定位，避免套用所有英灵完整设定。"
      })
    })
  ]);
})();

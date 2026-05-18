(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kurapika",
      name: "酷拉皮卡",
      en: "Kurapika",
      ja: "クラピカ",
      affiliation: "诺斯拉家族 / 猎人协会",
      grade: "具现化系 / 火红眼特质系",
      appearances: ["约克新篇", "继承战篇"],
      timelineStatus: "火红眼与制约能力可用",
      aliases: ["锁链手", "火红眼"],
      fandomSlug: "Kurapika",
      dimensions: dims({
        attack: ["墙级", "房屋级｜锁链制约", "锁链对旅团有特殊制约杀伤，常规破坏范围有限。"],
        defense: ["墙级", "房屋级｜念防御", "念防御与治愈锁链提升承伤，但代价和条件明显。"],
        movement: ["凡人速", "亚音速", "优秀念能力者速度，不按音速处理。"],
        reaction: ["亚音速", "亚音速｜火红眼", "火红眼与念战经验提升反应。"],
        vitality: ["强化凡体", "精锐韧体｜念强化", "念强化和治愈锁链提升续战。"],
        healing: ["常规自愈", "快速自愈｜治愈锁链", "治愈锁链可快速修复伤势，但消耗与条件明显。"],
        energy: ["墙级能量", "房屋级能量｜火红眼", "火红眼状态提升念能力，但消耗寿命。"],
        energyRegen: ["常规回能", "快速回能｜代价型", "能力提升伴随寿命代价，不按无条件回能处理。"]
      }),
      notes: notes({
        penetration: "锁链制约对幻影旅团有针对性压制，不能泛化到所有敌人。",
        resistance: "念防御有效但寿命消耗、情报和誓约限制明显。",
        sensing: "火红眼、念能力训练和锁链反馈提升对敌意、念和目标状态的识别；旅团限定能力需要确认对象身份。",
        tactics: "制约设计和情报利用极强，擅长把锁链功能拆成捕获、治疗、审问和爆发；绝对时间寿命代价迫使他避免无意义长战。",
        special: "五指锁链、火红眼、绝对时间、治愈锁链、旅团专用制约。",
        weakness: "部分能力对象限定，绝对时间消耗寿命，长战风险极高。",
        setting: "按约克新后具备完整锁链体系的酷拉皮卡记录。",
        basis: "依据酷拉皮卡对窝金、旅团成员和继承战中的锁链制约与念能力表现定级。"
      })
    })
  ]);
})();

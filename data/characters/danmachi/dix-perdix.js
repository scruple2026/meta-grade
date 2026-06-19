(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dix-perdix",
      name: "狄克斯·佩尔迪克斯",
      en: "Dix Perdix",
      ja: "ディックス・ペルディクス",
      affiliation: "伊刻洛斯眷族",
      grade: "团长 / 诅咒枪使",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 克诺索斯狩猎者",
      aliases: ["狄克斯", "Dix", "Dix Perdix", "佩尔迪克斯", "Phobetor Daedalus", "狩猎者"],
      fandomSlug: "Dix_Perdix",
      confidence: "medium",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜诅咒枪/狩猎者", "伊刻洛斯眷族团长，单体压制和诅咒控制强于普通冒险者。"],
        defense: ["房屋级", "楼级｜Falna/装备", "高阶冒险者体魄与装备承伤。"],
        movement: ["亚音速", "音速｜高阶冒险者", "克诺索斯追击和近战需要高机动。"],
        reaction: ["亚音速", "音速｜诅咒枪战", "可与异端儿和冒险者进行高速近战。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna", "人类冒险者体魄，不按诅咒能力提高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈。"],
        energy: ["房屋级能量", "楼级能量｜诅咒/迷宫资源", "体力、诅咒和克诺索斯资源支撑狩猎。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/补给", "战斗后需要恢复。"]
      }),
      notes: notes({
        penetration: "诅咒枪、近战和克诺索斯地形配合偏单体控制与猎杀，不作为大范围破坏档。",
        resistance: "Falna和装备提高承伤，但情绪、执念和被围攻会放大风险。",
        sensing: "熟悉克诺索斯与异端儿狩猎路线，地形信息优势明显。",
        tactics: "狩猎、诱导和地形利用能力强，善用克诺索斯结构与信息差。",
        special: "诅咒能力、Daedalus血脉/克诺索斯关联、异端儿狩猎、迷宫地形利用。",
        weakness: "人格扭曲和执念会导致冒险风险；离开克诺索斯和情报优势后压制力下降。",
        setting: "按异端儿篇第10卷附近的克诺索斯狩猎者记录。",
        basis: "worldbook只用于抽取狄克斯姓名；定级依据DanMachi Wiki资料入口，诅咒写入特殊权能，不直接替代攻击能级。"
      })
    })
  ]);
})();

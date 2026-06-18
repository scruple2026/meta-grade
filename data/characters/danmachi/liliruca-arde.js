(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "liliruca-arde",
      name: "莉莉露卡·厄德",
      en: "Liliruca Arde",
      ja: "リリルカ・アーデ",
      affiliation: "赫斯缇雅眷族 / 原苏摩眷族",
      grade: "支援者 / 帕鲁姆",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 赫斯缇雅眷族支援者",
      aliases: ["莉莉", "Lili", "Liliruca"],
      fandomSlug: "Liliruca_Arde",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜装备/短弩", "支援者本体输出有限，依赖装备和战术。"],
        defense: ["砖级", "墙级｜装备", "小体格但有冒险者经验和装备防护。"],
        movement: ["凡人速", "亚音速｜冒险者行动", "机动以躲避、搬运和支援为主。"],
        reaction: ["凡人速", "亚音速｜地下城经验", "能在混战中执行支援判断。"],
        vitality: ["强化凡体", "精锐韧体｜Falna", "身体弱于前卫，但强于普通人。"],
        healing: ["无自愈", "缓慢自愈｜休整/治疗", "依赖外部治疗和休整。"],
        energy: ["砖级能量", "墙级能量｜变身魔法/装备", "资源以支援、伪装和装备运用为主。"],
        energyRegen: ["缓慢回能", "缓慢回能", "战斗续航依赖补给。"]
      }),
      notes: notes({
        penetration: "短弩、道具和陷阱式支援为主，不适合正面破坏。",
        resistance: "小体型和装备能减少风险，但被高阶敌人命中后危险很高。",
        sensing: "熟悉地下城支援者路线、财物与队伍资源管理。",
        tactics: "非常擅长支援、伪装、算计和资源调度。",
        special: "变身魔法、支援者技术、负重与道具管理。",
        weakness: "正面战斗力有限，心理阴影和体格劣势明显。",
        setting: "按异端儿篇赫斯缇雅眷族支援者记录。",
        basis: "worldbook只用于抽取莉莉露卡姓名；定级依据官方角色入口与DanMachi Wiki资料入口，支援价值不折算为高攻防。"
      })
    })
  ]);
})();

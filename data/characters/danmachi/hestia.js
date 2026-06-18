(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hestia",
      name: "赫斯缇雅",
      en: "Hestia",
      ja: "ヘスティア",
      affiliation: "赫斯缇雅眷族",
      grade: "女神 / 眷族主神",
      appearances: ["异端儿篇"],
      timelineStatus: "下界活动期 / 神力禁用",
      aliases: ["Hestia", "赫斯缇雅女神"],
      fandomSlug: "Hestia",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级", "下界神明通常禁用神力，本体不按战斗型冒险者处理。"],
        defense: ["凡人级", "凡人级", "缺少稳定战斗防护表现。"],
        movement: ["凡人速", "凡人速", "日常行动速度。"],
        reaction: ["凡人速", "凡人速", "不以战斗反应为核心。"],
        vitality: ["凡人肉身", "凡人肉身", "下界活动形态按脆弱本体处理。"],
        healing: ["无自愈", "无自愈", "未按稳定自愈角色处理。"],
        energy: ["不适用｜神力禁用", "不适用｜神力禁用", "神格与Arcanum不写入可用战斗资源池。"],
        energyRegen: ["不适用｜神力禁用", "不适用｜神力禁用", "禁用神力后没有可量化回能面板。"]
      }),
      notes: notes({
        penetration: "主要影响来自眷族授权、神格身份和赫斯缇雅之刃归属，不折算为本体攻击。",
        resistance: "神明身份有设定意义，但下界禁用神力时不作为常态防御档。",
        sensing: "可读写眷族能力值，普通战斗索敌有限。",
        tactics: "重视保护贝尔和眷族运营，战斗指挥能力不是主轴。",
        special: "主神身份、Falna授予与更新、赫斯缇雅之刃关联、眷族管理。",
        weakness: "禁用神力、非战斗型本体、眷族规模小。",
        setting: "按下界活动期赫斯缇雅记录，不使用神界完整神格作为战斗面板。",
        basis: "worldbook只用于抽取赫斯缇雅姓名；定级依据官方角色入口与DanMachi Wiki资料入口，神格作为设定项而非主表攻防。"
      })
    })
  ]);
})();

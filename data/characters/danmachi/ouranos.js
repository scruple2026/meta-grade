(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ouranos",
      name: "乌拉诺斯",
      en: "Ouranos",
      ja: "ウラノス",
      affiliation: "公会",
      grade: "公会主神 / 祈祷者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 神力禁用下界期",
      aliases: ["乌拉诺斯", "Uranus", "Ouranos", "公会主神"],
      fandomSlug: "Ouranos",
      confidence: "medium",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级｜神力禁用", "下界神明常态不使用Arcanum作战。"],
        defense: ["凡人级", "凡人级｜神力禁用", "不把神格身份写成本体战斗防御。"],
        movement: ["凡人速", "凡人速", "日常行动与坐镇公会地下。"],
        reaction: ["凡人速", "凡人速", "不是以战斗反应为核心的角色。"],
        vitality: ["凡人肉身", "凡人肉身｜神明下界体", "神明身份属于设定项，下界体不按高生命体量处理。"],
        healing: ["无自愈", "无自愈", "未按稳定自愈角色处理。"],
        energy: ["不适用｜神力禁用", "不适用｜祈祷/神力禁用", "祈祷和神格职责不写入可战斗能量池。"],
        energyRegen: ["不适用｜神力禁用", "不适用｜神力禁用", "禁用神力后没有可量化战斗回能。"]
      }),
      notes: notes({
        penetration: "常态威胁来自公会权威、祈祷和暗线调度，不折算为本体攻击。",
        resistance: "神明身份有世界观意义，但下界禁用神力时不作为战斗防御档。",
        sensing: "通过公会、费尔斯和地下城相关信息掌握局势，不是直接战斗索敌。",
        tactics: "长期维护地下城与异端儿保护线，政治和隐秘调度能力强。",
        special: "公会主神、地下祈祷、异端儿保护线、费尔斯直属支援、神明身份。",
        weakness: "神力禁用、行动受公会与神明规则限制，本体不适合作为战斗单位。",
        setting: "按异端儿篇神力禁用下界期记录，不使用神界完整神格作为战斗面板。",
        basis: "worldbook只用于抽取乌拉诺斯姓名；定级依据DanMachi Wiki资料入口，祈祷和神格只写入特殊权能与设定项。"
      })
    })
  ]);
})();

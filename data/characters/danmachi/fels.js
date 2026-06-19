(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "fels",
      name: "费尔斯",
      en: "Fels",
      ja: "フェルズ",
      affiliation: "公会 / 乌拉诺斯直属",
      grade: "贤者 / 魔导士",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 异端儿保护线",
      aliases: ["费尔斯", "Fels", "贤者", "Sage"],
      fandomSlug: "Fels",
      confidence: "medium",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖级", "墙级｜魔法/魔道具", "以支援、隐秘行动和魔法辅助为主，非前卫输出。"],
        defense: ["砖级", "墙级｜魔法防护/特殊身体", "骨骼身体与魔法防护有特殊性，但硬抗表现有限。"],
        movement: ["凡人速", "亚音速｜隐秘行动/魔法", "主要依赖隐秘路线和魔法支援，不按高速前卫处理。"],
        reaction: ["亚音速", "音速｜贤者经验", "长期隐秘行动和魔法应对提供较好反应。"],
        vitality: ["凡人肉身｜骨骼身体", "强化凡体｜特殊生命结构/魔法防护｜争议", "生命结构特殊，但不等同高硬度或高生命体量。"],
        healing: ["无自愈", "无自愈｜复活魔法对他人/条件", "复活魔法是条件型特殊权能，不写成本体自愈。"],
        energy: ["墙级能量", "楼级能量｜贤者魔法/复活魔法", "魔力资源用于支援、隐秘和高代价魔法。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/准备", "高代价魔法后需要准备和恢复。"]
      }),
      notes: notes({
        penetration: "魔法与魔道具更偏支援、干扰和保护，直接杀伤不按高阶前卫处理。",
        resistance: "骨骼身体和魔法防护有特殊性，但不把不死状态等同高防御或高生命体量。",
        sensing: "长期服务乌拉诺斯并保护异端儿，情报、地下路线和隐秘行动能力强。",
        tactics: "擅长保护、撤离、信息调度和危机补救，是异端儿篇关键支援者。",
        special: "贤者魔法、复活魔法、隐秘行动、异端儿保护、乌拉诺斯直属支援。",
        weakness: "非前卫近战角色，强力魔法和复活都受条件、准备和代价限制。",
        setting: "按异端儿篇乌拉诺斯直属与异端儿保护线记录。",
        basis: "worldbook只用于抽取费尔斯姓名；定级依据DanMachi Wiki资料入口，复活魔法写入特殊权能而非生命回复速度。"
      })
    })
  ]);
})();

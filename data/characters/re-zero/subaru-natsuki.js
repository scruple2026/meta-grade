(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Re:从零开始的异世界生活"];

  if (!work) {
    throw new Error("Re:Zero work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "subaru-natsuki",
      name: "菜月昴",
      en: "Subaru Natsuki",
      ja: "ナツキ・スバル",
      affiliation: "爱蜜莉雅阵营",
      grade: "主角 / 死亡回归持有者",
      appearances: ["王选篇", "白鲸讨伐", "怠惰讨伐"],
      timelineStatus: "王选篇 / 白鲸与怠惰讨伐",
      aliases: ["昴", "Subaru", "Natsuki Subaru", "死亡回归"],
      fandomSlug: "Natsuki_Subaru",
      confidence: "review",
      evidenceType: ["官方角色页", "角色页入口", "权能项"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖块级｜短剑/魔法辅助", "本体攻击很低，主要靠道具、队友和战术。"],
        defense: ["凡人级", "凡人级", "肉身普通。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速｜死亡经验预判", "死亡回归可提供情报预判，但不提升身体反应速度。"],
        vitality: ["凡人肉身", "凡人肉身", "死亡回归不是本体生命体量提升。"],
        healing: ["无自愈", "不适用｜死亡回归重置", "死亡后的重置不按自愈处理。"],
        energy: ["凡人能量", "砖块级能量｜道具/盟友资源", "个人能量池低，峰值来自情报和盟友协作。"],
        energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
      }),
      notes: notes({
        penetration: "直接杀伤弱，常通过情报循环、诱导、道具、队友和场地达成目标。攻击速度：昴的临时道具和徒手行动按本人普通出手判断；队友或场地触发的攻击速度不归入他的身体动作。",
        resistance: "肉身防御普通；死亡回归是失败后重置，不是战斗中免伤。",
        sensing: "可保留死亡前记忆形成跨时间线情报优势，但不能主动自由触发情报读取。",
        tactics: "核心强项是反复试错后的情报整合、心理承压和协调多方阵营。",
        special: "死亡回归、魔女气味、跨轮回记忆、阵营协作。",
        weakness: "本体战力弱，死亡回归代价极高且触发条件被动，无法保护同伴免受当前轮次损失。",
        setting: "按王选篇至白鲸/怠惰讨伐阶段记录。",
        basis: "worldbook只用于抽取菜月昴姓名；定级依据官方角色页与Re:Zero Wiki资料入口，死亡回归按特殊权能而非主表防御或自愈处理。"
      })
    })
  ]);
})();

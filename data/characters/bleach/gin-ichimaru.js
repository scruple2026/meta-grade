(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gin-ichimaru",
      name: "市丸银",
      en: "Gin Ichimaru",
      ja: "市丸ギン",
      affiliation: "原护廷十三队 / 蓝染阵营",
      grade: "三番队队长 / 神枪",
      appearances: ["尸魂界篇", "破面篇"],
      timelineStatus: "破面篇 / 神杀枪情报揭示",
      aliases: ["市丸", "银", "神枪", "Gin"],
      fandomSlug: "Gin_Ichimaru",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从尸魂界篇 worldbook 名字池补入；因神杀枪机制高度依赖情报差，峰值用标签说明。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜卍解/毒｜争议", "神杀枪兼具高速伸缩、切断和细胞毒，毒性不折算为更高破坏规模。"],
        defense: ["楼级", "楼级｜灵压防御", "队长级灵压和瞬步规避，肉身承伤不突出。"],
        movement: ["超音速", "高超音速｜瞬步｜争议", "队长级高速移动。"],
        reaction: ["超音速", "高超音速｜争议", "可与高端死神、破面战斗周旋。"],
        vitality: ["精锐韧体", "街区级生命阈值｜灵体", "灵体与队长级灵压支撑续战。"],
        healing: ["缓慢自愈", "中速自愈｜灵体恢复", "无稳定高速再生。"],
        energy: ["楼级能量", "街区级能量｜卍解", "神枪/神杀枪使用消耗灵压。"],
        energyRegen: ["中速回能", "快速回能｜灵压恢复", "可恢复灵压但不能无限连续爆发。"]
      }),
      notes: notes({
        penetration: "神枪以极高速伸缩和刺击切断要害，神杀枪还可在命中后留下毒素破坏细胞；毒素属于命中条件型特殊杀伤，不抬高破坏档。",
        resistance: "队长级灵压和瞬步提供规避与承伤，但缺少稳定护盾、再生或全类型抗性。",
        sensing: "依赖灵压感知、距离欺骗和对敌心理判断；隐藏真实能力是核心战术资产。",
        tactics: "极擅长伪装、误导和情报差，能通过错误解释神枪速度/长度制造致命窗口。",
        special: "斩魄刀神枪、卍解神杀枪、伸缩斩击、细胞毒、瞬步。",
        weakness: "真实杀招依赖命中和情报差；正面持续火力、防御屏障或已知毒素机制会降低威胁。",
        setting: "按破面篇揭示神杀枪真实机制后的银记录；尸魂界篇表现作为早期遮掩状态参考。",
        basis: "依据市丸银作为队长、蓝染阵营成员以及神杀枪真相揭示时的斩魄刀、瞬步和毒杀表现定级。"
      })
    })
  ]);
})();

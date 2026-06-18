(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙符"];

  if (!work) {
    throw new Error("龙符 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gu-chensha",
      name: "古尘沙",
      en: "Gu Chensha",
      ja: "",
      affiliation: "靖仙司 / 永界",
      grade: "主角 / 无龙心法最终阶段",
      appearances: ["正篇"],
      timelineStatus: "大结局 / 不朽第十层相关最终阶段",
      aliases: ["尘国公"],
      fandomSlug: "古尘沙",
      confidence: "disputed",
      evidenceType: ["中文网文原作", "高风险无限档", "最终阶段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "chapter",
          scope: "最终章",
          label: "纵横中文网：《龙符》第1149章 永远无敌 大结局",
          url: "https://read.zongheng.com/chapter/523438/40260958.html",
          citation: "梦入神机《龙符》第1149章《永远无敌 大结局》。",
          lang: "zh",
          authority: "primary",
          medium: "publisher",
          ratingEvidence: true,
          claim: "支撑古尘沙最终阶段、不朽第十层相关宇宙论和无限攻击代表项；本站不继续比较多元宇宙内部无限层级。"
        },
        {
          type: "wiki",
          scope: "社区线索",
          label: "中文论战 Wiki：《龙符》",
          url: "https://cntaps.fandom.com/zh/wiki/%E9%BE%99%E7%AC%A6",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于定位无龙心法、心灵力量和不朽第十层相关章节线索；不作为 primary 量级来源。"
        }
      ],
      revisionNotes: [
        "中文网文无限攻击能级代表样例：只把最终阶段的宇宙论攻击/改写能力收束为无限级，不把无限层级继续拆高。",
        "非代表维度暂按未知或争议保守处理，避免把无龙心法泛化成全维度无限。"
      ],
      dimensions: dims({
        attack: ["有限宇宙级｜无龙心法后期｜宇宙论依赖｜争议", "无限级｜不朽第十层｜宇宙论依赖｜争议", "代表攻击能级的无限样例；按最终阶段可作用非有限宇宙论结构收束为无限级，不比较更大无限。"],
        defense: ["未知", "未知", "本条不把最终境界自动换算为肉身或常驻防御无限；需后续逐章复核承伤证据。"],
        movement: ["未知", "未知", "跨宇宙/规则层面位移不直接换算连续移动速度。"],
        reaction: ["未知", "未知", "心灵与规则层面处理不直接换算身体反应速度。"],
        vitality: ["未知", "未知", "不把最终境界称号直接换算为无限级生命结构。"],
        healing: ["未知", "未知", "恢复范围和恢复时间需另补原文证据。"],
        energy: ["未知", "未知", "无龙心法涉及心灵力量，但本条目不把它作为能量总量代表项。"],
        energyRegen: ["未知", "未知", "补能/恢复速度不等同于心灵力量设定。"]
      }),
      notes: notes({
        penetration: "最终阶段以无龙心法和不朽第十层相关改写为核心，攻击更接近宇宙论/规则层面的作用；本站只把明确非有限作用收束为攻击无限级，不继续比较无限多元、套娃或更高无限。",
        resistance: "防御没有在本代表条目里同步写成无限；若后续要提高防御，需要独立承伤、抵消或防线证据，而不是从攻击/境界反推。",
        sensing: "心灵网络、众生心灵和因果命运相关信息优势很强，但感知不自动折算为反应速度。",
        tactics: "古尘沙后期以改造文明、推演无龙心法和重构秩序为主，作战方式偏规则/文明工程，不是普通拳脚对轰。",
        special: "无龙心法、不朽第十层相关境界、心灵力量、因果命运/世界规则改写、文明改造。",
        weakness: "无限档高度依赖《龙符》后期宇宙论和最终阶段语境；跨作品对比时不能把诗性描述、境界名或文明理想当作无条件全能。",
        setting: "按《龙符》大结局最终阶段记录；早期祭天符诏、靖仙司和天子封神术阶段不并入本面板。",
        basis: "代表维度为攻击能级：依据最终章和无龙心法/不朽第十层相关设定，把可作用非有限宇宙论结构的攻击/改写收束为无限级。"
      })
    })
  ]);
})();

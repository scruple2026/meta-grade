(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["星河大帝"];

  if (!work) {
    throw new Error("星河大帝 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jiang-li",
      name: "江离",
      en: "Jiang Li",
      ja: "",
      affiliation: "人间界 / 无限世界",
      grade: "主角 / 无限大道最终阶段",
      appearances: ["正篇"],
      timelineStatus: "终章 / 无限世界与无限大道阶段",
      aliases: [],
      fandomSlug: "江离",
      confidence: "disputed",
      evidenceType: ["中文网文原作", "高风险无限档", "最终阶段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "chapter",
          scope: "最终篇章",
          label: "微信读书：《星河大帝》最终篇章目录",
          url: "https://weread.qq.com/web/bookDetail/5e732440539d565e7f5a69a",
          citation: "梦入神机《星河大帝》第1058章《无限文化》、第1062章《无可抗衡》、第1065章《不可思议》。",
          lang: "zh",
          authority: "licensed",
          medium: "publisher",
          ratingEvidence: true,
          claim: "支撑江离最终阶段、无限文化/无限世界/无可抗衡终章语境；防御无限只按结构性防线与化解能力记录。"
        },
        {
          type: "wiki",
          scope: "社区线索",
          label: "中文论战 Wiki：江离",
          url: "https://cntaps.fandom.com/zh/wiki/%E6%B1%9F%E7%A6%BB",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于定位无限大道、无限世界和终章章节线索；不作为 primary 量级来源。"
        }
      ],
      revisionNotes: [
        "中文网文无限防御能级代表样例：防御指无限世界/无限大道形成的结构性防线，不等同于江离普通肉身硬度。",
        "补全非代表维度：攻击、速度、生命和能量按最终阶段争议档记录，不因防线无限自动全维度无限。"
      ],
      dimensions: dims({
        attack: ["可观测宇宙级｜无限大道攻击用途｜宇宙论依赖｜争议", "可观测宇宙级｜无限世界输出｜总量/结构依赖｜争议", "终章攻击可按高端宇宙论争议档记录；没有把防御无限直接反推为攻击无限。"],
        defense: ["可观测宇宙级｜无限大道防线｜宇宙论依赖｜争议", "无限级｜无限世界防线｜宇宙论依赖｜争议", "代表防御能级的无限样例；防御来源是无限世界/无限大道结构性承接与化解，不是单纯肉身硬度。"],
        movement: ["可观测宇宙尺度超光速｜终章机动｜宇宙论依赖｜争议", "可观测宇宙尺度超光速｜无限世界调度｜非纯速度｜争议", "终章机动和世界结构调度极高，但大量表现带结构转移性质。"],
        reaction: ["可观测宇宙尺度超光速｜高端交锋｜宇宙论依赖｜争议", "可观测宇宙尺度超光速｜无限大道信息处理｜非纯反应｜争议", "无限大道的信息处理优势极强，但不直接写成无限反应。"],
        vitality: ["可观测宇宙级生命结构｜人间界/无限世界关联｜争议", "可观测宇宙级生命结构｜无限大道关联｜非无限代表项｜争议", "生命与世界结构关联很深，但防线无限不等于死亡条件无限。"],
        healing: ["极速自愈｜世界结构修复｜条件｜争议", "瞬愈｜无限世界重构｜条件｜争议", "恢复按结构性修复记录，和防御能级分开。"],
        energy: ["可观测宇宙级能量｜无限大道资源｜总量非单击｜争议", "可观测宇宙级能量｜无限世界资源池｜总量/结构依赖｜争议", "能量池很高，但本条仍不把无限大道名称直接写成能量总量无限。"],
        energyRegen: ["极速回能｜体系循环｜争议", "极速回能｜无限世界循环｜非无限尺度｜争议", "补能来自体系循环和结构调度，不写成无限回能。"]
      }),
      notes: notes({
        penetration: "攻击补为可观测宇宙级争议档；无限大道的进攻和改写效果应另做逐章证据复核，不能由防御代表项自动抬升到无限。攻击速度：江离终盘的神通与无限大道改写需按具体章节中的起手、作用对象和生效方式分别判断；当前文件没有足够材料把可观测宇宙级攻击档换算成统一出手或传播速度。",
        resistance: "防御代表项来自无限世界/无限大道构成的结构性防线，可承接、消解或转换终章高端攻击；这是防护/世界结构防御，不等于普通肉身硬吃一切伤害。",
        sensing: "无限大道与众生/世界结构相连，具备强信息优势；感知优势不自动折算反应速度。",
        tactics: "江离后期通过人间界、无限大道、无限文化和结构性转化处理敌方攻击，思路偏体系工程与防线重构。",
        special: "无限大道、无限世界、人间界、结构性承接/化解、文化与众生体系。",
        weakness: "无限防御高度依赖终章宇宙论和无限世界结构；若脱离该结构或只讨论早期江离，不能使用本面板。",
        setting: "按《星河大帝》最终阶段记录；早期催眠、大帝印、圣者阶段不并入本面板。",
        basis: "代表维度为防御能级：依据终章无限世界/无限大道结构，把可承接或化解非有限宇宙论攻击的防线收束为无限级；其它维度按最终阶段保守补档。"
      })
    })
  ]);
})();

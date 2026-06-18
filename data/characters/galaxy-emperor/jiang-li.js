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
        "攻击、速度、生命和能量不因防线无限而自动联动升至无限。"
      ],
      dimensions: dims({
        attack: ["未知", "未知", "本条不把无限大道自动换算为单次攻击破坏规模。"],
        defense: ["有限宇宙级｜无限大道防线｜宇宙论依赖｜争议", "无限级｜无限世界防线｜宇宙论依赖｜争议", "代表防御能级的无限样例；防御来源是无限世界/无限大道结构性承接与化解，不是单纯肉身硬度。"],
        movement: ["未知", "未知", "终章宇宙论位移不直接换算连续移动速度。"],
        reaction: ["未知", "未知", "无限大道的信息/结构处理不直接等同身体反应速度。"],
        vitality: ["未知", "未知", "不把无限世界防线自动改写为无限级生命结构。"],
        healing: ["未知", "未知", "恢复速度和复原条件需独立证据。"],
        energy: ["未知", "未知", "无限大道不在本条目中作为能量总量代表项。"],
        energyRegen: ["未知", "未知", "补能速度不从无限大道名称直接外推。"]
      }),
      notes: notes({
        penetration: "本条不主打攻击定级；无限大道的进攻和改写效果应另做攻击证据复核，不能由防御代表项自动抬升。",
        resistance: "防御代表项来自无限世界/无限大道构成的结构性防线，可承接、消解或转换终章高端攻击；这是防护/世界结构防御，不等于普通肉身硬吃一切伤害。",
        sensing: "无限大道与众生/世界结构相连，具备强信息优势；感知优势不自动折算反应速度。",
        tactics: "江离后期通过人间界、无限大道、无限文化和结构性转化处理敌方攻击，思路偏体系工程与防线重构。",
        special: "无限大道、无限世界、人间界、结构性承接/化解、文化与众生体系。",
        weakness: "无限防御高度依赖终章宇宙论和无限世界结构；若脱离该结构或只讨论早期江离，不能使用本面板。",
        setting: "按《星河大帝》最终阶段记录；早期催眠、大帝印、圣者阶段不并入本面板。",
        basis: "代表维度为防御能级：依据终章无限世界/无限大道结构，把可承接或化解非有限宇宙论攻击的防线收束为无限级。"
      })
    })
  ]);
})();

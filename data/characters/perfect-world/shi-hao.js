(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["完美世界"];

  if (!work) {
    throw new Error("完美世界 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shi-hao",
      name: "石昊",
      en: "Shi Hao",
      ja: "",
      affiliation: "石村 / 九天十地",
      grade: "主角 / 荒天帝",
      appearances: ["正篇"],
      timelineStatus: "终盘 / 荒天帝阶段",
      aliases: ["荒", "荒天帝", "小不点", "熊孩子"],
      fandomSlug: "",
      confidence: "disputed",
      evidenceType: ["中文网文原作入口", "高风险宇宙论档", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "作品与主角资料入口",
          label: "萌娘百科：《完美世界》",
          url: "https://zh.moegirl.org.cn/%E5%AE%8C%E7%BE%8E%E4%B8%96%E7%95%8C%28%E5%B0%8F%E8%AF%B4%29",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对《完美世界》、石昊、玄幻高端语境和作品简介；终盘宇宙论档位仍需后续原文卷章补证。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "起点中文网：《完美世界》",
          url: "https://www.qidian.com/book/2952453/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于确认正版作品入口；不单独作为战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:石昊/荒天帝 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["有限宇宙级｜仙帝/他化自在法｜宇宙论依赖｜争议", "有限宇宙级｜荒天帝终盘｜非无限代表项｜争议", "终盘荒天帝按作品高端宇宙论争议档记录，不把称号或诗性简介写成无限。"],
        defense: ["有限宇宙级｜仙帝体魄/法则｜宇宙论依赖｜争议", "有限宇宙级｜荒天帝终盘防护｜争议", "防御按终盘高端承伤和法则防护保守记录。"],
        movement: ["有限宇宙尺度超光速｜终盘机动｜宇宙论依赖｜争议", "有限宇宙尺度超光速｜独断万古/时空处理｜非纯速度｜争议", "时空处理和终盘机动很高，但不直接写无限速。"],
        reaction: ["有限宇宙尺度超光速｜仙帝交锋｜宇宙论依赖｜争议", "有限宇宙尺度超光速｜终盘信息处理｜争议", "反应按高端交锋争议档记录，后续需补原文证据。"],
        vitality: ["有限宇宙级生命结构｜仙帝体魄｜宇宙论依赖｜争议", "有限宇宙级生命结构｜荒天帝终盘｜争议", "生命结构极高但暂不写无限生命。"],
        healing: ["极速自愈｜仙帝法体｜争议", "瞬愈｜终盘重构/复苏｜争议", "恢复按高端法体和终盘重构语境记录。"],
        energy: ["有限宇宙级能量｜仙帝法力｜宇宙论依赖｜争议", "有限宇宙级能量｜荒天帝终盘｜争议", "能量总量按终盘高端记录，不写无限能量池。"],
        energyRegen: ["极速回能｜仙帝法力循环｜争议", "极速回能｜终盘法则循环｜非无限尺度｜争议", "补能极强但仍按有限高端处理。"]
      }),
      notes: notes({
        penetration: "他化自在法、终盘仙帝层级和高端法则压制是核心；当前不做无限层级比较。",
        resistance: "终盘防护来自仙帝体魄、法则、复苏与时空处理；防御、生命和恢复分开记录。",
        sensing: "终盘具备极高层级信息处理和因果/时空判断，但感知优势不自动换成无限反应。",
        tactics: "从石村成长到荒天帝，战术核心是极强战斗天赋、法门整合和终盘时空处理。",
        special: "至尊骨、洞天体系、他化自在法、仙帝终盘、独断万古。",
        weakness: "本面板仅限终盘荒天帝；幼年、下界、上界和仙王以前阶段不可套用。宇宙论档位仍需原文卷章继续补证。",
        setting: "按《完美世界》终盘荒天帝阶段记录；不混入《遮天》《圣墟》后续扩展。",
        basis: "worldbook只用于抽取石昊/荒天帝姓名；定级依据正版作品入口和公开作品资料入口，终盘高端暂收束为有限宇宙级争议档。"
      })
    })
  ]);
})();

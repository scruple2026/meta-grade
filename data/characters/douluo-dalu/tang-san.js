(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["斗罗大陆"];

  if (!work) {
    throw new Error("斗罗大陆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tang-san",
      name: "唐三",
      en: "Tang San",
      ja: "",
      affiliation: "史莱克七怪 / 唐门 / 神界",
      grade: "主角 / 海神与修罗神",
      appearances: ["斗罗大陆第一部"],
      timelineStatus: "第一部终盘 / 双神位阶段",
      aliases: ["唐门唐三", "海神唐三", "修罗神唐三", "唐弎"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["中文网文原作入口", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "萌娘百科：唐三",
          url: "https://zh.moegirl.org.cn/%E5%94%90%E4%B8%89",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对唐三、双生武魂、海神/修罗神、海神十三戟和第一部终盘神位语境。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《斗罗大陆》第一部",
          url: "https://zh.moegirl.org.cn/%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%28%E7%AC%AC%E4%B8%80%E9%83%A8%29",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对作品、作者、起点连载和第一部范围；不作为单独战力证据。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "起点中文网：《斗罗大陆》",
          url: "https://www.qidian.com/book/1115277/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于确认正版作品入口；不单独作为战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:唐弎/唐三 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["国家级｜封号斗罗/暗器/魂技｜争议", "大陆级｜双神位/海神修罗神｜第一部终盘｜争议", "第一部终盘按神位和顶级魂技保守记录，不上调到行星级或无限。"],
        defense: ["国家级｜魂骨/蓝银皇/神装｜争议", "大陆级｜双神位神装｜争议", "防御依赖魂骨、神装、蓝银皇和海神/修罗神位。"],
        movement: ["超光速｜神级身法/魂技｜争议", "超光速｜双神位机动｜争议", "神级机动先按超光速争议档处理，不写宇宙尺度速度。"],
        reaction: ["超光速｜紫极魔瞳/神级战斗｜争议", "超光速｜双神位交锋｜争议", "紫极魔瞳、唐门经验和神级战斗提高反应。"],
        vitality: ["国家级生命阈值｜魂骨/神体｜争议", "大陆级生命阈值｜双神位｜争议", "生命阈值按神体、魂骨和双神位保守记录。"],
        healing: ["快速自愈｜魂骨/蓝银皇", "极速自愈｜神体/神力｜争议", "恢复依赖神力、魂骨和蓝银皇相关生命力。"],
        energy: ["国家级能量｜魂力/神器｜争议", "大陆级能量｜双神位神力｜争议", "能量总量按第一部终盘神力保守记录，不写无限能量池。"],
        energyRegen: ["快速回能｜魂力/领域", "极速回能｜神力循环｜争议", "补能依赖神力、领域和战斗资源，不写无消耗瓶颈。"]
      }),
      notes: notes({
        penetration: "海神十三戟、修罗神力、昊天锤、蓝银皇和唐门暗器提供多线穿透；暗器与毒不直接抬大范围破坏档。攻击速度：昊天锤与海神戟随近战挥击，唐门暗器离手后独立飞行，蓝银皇缠绕与神力招式另有展开，不能共用一个速度值。",
        resistance: "魂骨、神装、蓝银皇生命力和双神位是防御核心；系列后续神界设定不自动并入第一部面板。",
        sensing: "紫极魔瞳、精神力、蓝银领域和唐门经验提供索敌与预判优势。",
        tactics: "唐三擅长暗器、毒、控制系魂技、团队配合和战术反杀，终盘再叠加海神/修罗神力。",
        special: "双生武魂、蓝银皇、昊天锤、海神十三戟、修罗神力、唐门暗器、紫极魔瞳。",
        weakness: "早期魂师学院阶段、封号斗罗阶段和第一部终盘双神位差距很大；系列后续扩展需另拆。",
        setting: "按《斗罗大陆》第一部终盘唐三记录，不默认并入后续外传和续作全部神界扩展。",
        basis: "worldbook只用于抽取唐弎/唐三姓名；定级依据起点正版入口和萌娘百科角色/作品资料入口，第一部终盘先按大陆级争议档保守处理。"
      })
    })
  ]);
})();

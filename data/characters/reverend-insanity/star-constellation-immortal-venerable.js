(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["蛊真人"];

  if (!work) {
    throw new Error("蛊真人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "star-constellation-immortal-venerable",
      name: "星宿仙尊",
      en: "Star Constellation Immortal Venerable",
      ja: "",
      affiliation: "天庭",
      grade: "二代仙王 / 智道与星道尊者",
      appearances: ["正篇", "历史回忆", "尊者复苏线"],
      timelineStatus: "复苏后 / 九转尊者阶段",
      aliases: ["星宿", "Xing Su", "Star Constellation", "星宿意志"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["英文资料入口", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Reverend Insanity Wiki：Star Constellation Immortal Venerable",
          url: "https://reverend-insanity.fandom.com/wiki/Star_Constellation_Immortal_Venerable",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对星宿仙尊、Rank 9、智道/星道、天庭二代仙王和复苏后尊者语境。"
        },
        {
          type: "wiki",
          scope: "体系资料入口",
          label: "Reverend Insanity Wiki：Venerable",
          url: "https://reverend-insanity.fandom.com/wiki/Venerable",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对尊者为九转蛊师/蛊仙和主修道路达到极高层级的作品内定位。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《蛊真人》",
          url: "https://zh.moegirl.org.cn/%E8%9B%8A%E7%9C%9F%E4%BA%BA",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对作品资料入口；不作为星宿仙尊具体量级证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物：星宿 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["大陆级｜九转尊者/智道星道杀招｜争议", "大陆级｜尊者布置/天庭体系｜世界观依赖｜争议", "按九转尊者和星道/智道手段保守记录，不把天庭历史地位写成无限攻击。"],
        defense: ["大陆级｜尊者防护/杀招｜争议", "大陆级｜星宿棋盘/天庭布置｜争议", "防御依赖尊者级杀招、星道布置和天庭体系。"],
        movement: ["超光速｜星道杀招｜争议", "可观测宇宙尺度超光速｜星宿棋盘/布置调度｜非纯速度｜争议", "星道调度和布置能力不等同无条件无限速。"],
        reaction: ["超光速｜智道推演/尊者斗法｜争议", "可观测宇宙尺度超光速｜智道预判/天庭布置｜争议", "智道推演提升应对，但谋算优势不直接替代身体反应。"],
        vitality: ["大陆级生命阈值｜九转尊者｜争议", "大陆级生命阈值｜复苏尊者/意志布置｜争议", "复苏和意志相关机制写入特殊权能，不直接上调为无限生命。"],
        healing: ["快速自愈｜仙蛊/杀招", "极速自愈｜尊者资源/天庭布置｜争议", "恢复依赖仙蛊、尊者杀招和天庭资源。"],
        energy: ["大陆级能量｜九转仙元/星道智道资源｜争议", "大陆级能量｜天庭底蕴/尊者布置｜争议", "能量总量按九转尊者资源保守记录。"],
        energyRegen: ["快速回能｜仙元/资源经营", "极速回能｜天庭资源/尊者布置｜争议", "补能依赖天庭资源、仙元和预设布置。"]
      }),
      notes: notes({
        penetration: "智道推演、星道杀招、星宿棋盘和天庭布置提供高层级压制；预判和布局不直接换算为大范围破坏。攻击速度：星道杀招若有能量载体应按具体释放判断，智道推演、棋盘布局和预判本身不是具有弹速的直接攻击。",
        resistance: "防御来自尊者级杀招、天庭底蕴、复苏布置和星道/智道体系；被针对道路、资源消耗和情报反制仍是风险。",
        sensing: "智道推演、星道侦察和天庭情报体系极强，但需要区分信息优势与即时反应速度。",
        tactics: "以长期布局、推演、天庭经营和多身/意志安排见长，擅长把战斗变成情报与布置优势。",
        special: "智道、星道、星宿棋盘、天庭二代仙王、意志/三相相关布置、复苏尊者语境。",
        weakness: "复苏后强度与天庭资源、星宿棋盘、尊者布置和时代局势强相关；历史梦境/意志片段不能套用完整复苏面板。",
        setting: "按《蛊真人》后期复苏后的星宿仙尊记录；历史回忆和意志残留可后续拆分时间线。",
        basis: "worldbook只用于抽取星宿姓名；定级依据公开角色资料入口和尊者体系入口，按九转尊者大陆级争议档保守处理。"
      })
    })
  ]);
})();

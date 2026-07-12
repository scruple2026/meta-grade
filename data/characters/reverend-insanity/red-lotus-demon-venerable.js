(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["蛊真人"];

  if (!work) {
    throw new Error("蛊真人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "red-lotus-demon-venerable",
      name: "红莲魔尊",
      en: "Red Lotus Demon Venerable",
      ja: "",
      affiliation: "天庭叛离者 / 宙道尊者",
      grade: "五代魔尊 / 宙道尊者",
      appearances: ["正篇", "历史回忆", "红莲真传"],
      timelineStatus: "末期 / 宙道尊者与红莲真传",
      aliases: ["红莲", "洪亭", "Hong Ting", "Red Lotus"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["英文资料入口", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Reverend Insanity Wiki：Red Lotus Demon Venerable",
          url: "https://reverend-insanity.fandom.com/wiki/Red_Lotus_Demon_Venerable",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对红莲魔尊、Rank 9、宙道、春秋蝉、宿命蛊损毁和红莲真传语境。"
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
          claim: "用于核对作品资料入口；不作为红莲魔尊具体量级证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物：红莲 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["大陆级｜九转尊者/宙道杀招｜争议", "大陆级｜宿命蛊损毁/红莲真传｜世界观依赖｜争议", "宙道和宿命相关结果写明机制，不把时间回溯直接换算成无限攻击。"],
        defense: ["大陆级｜尊者防护/宙道杀招｜争议", "大陆级｜红莲真传/历史布置｜争议", "防御按尊者级战斗和宙道布置保守处理。"],
        movement: ["超光速｜宙道杀招｜争议", "有限宇宙尺度超光速｜光阴长河/宙道布置｜非纯速度｜争议", "涉及时间线和光阴长河的能力不等同无条件移动速度。"],
        reaction: ["超光速｜尊者斗法/宙道预判｜争议", "有限宇宙尺度超光速｜轮回经验/宙道布置｜争议", "多次重生经验和宙道预判强，但不写无限反应。"],
        vitality: ["大陆级生命阈值｜九转尊者｜争议", "大陆级生命阈值｜未来身/宙道布置｜争议", "长期影响来自真传和宙道安排，不等同本体无限生命。"],
        healing: ["快速自愈｜仙蛊/宙道杀招", "极速自愈｜未来身/宙道资源｜争议", "恢复与补救更多依赖宙道杀招和布置。"],
        energy: ["大陆级能量｜九转仙元/宙道资源｜争议", "大陆级能量｜红莲真传/宿命对抗｜争议", "能量池按尊者资源保守记录，不写无限能量池。"],
        energyRegen: ["快速回能｜仙元/宙道资源", "极速回能｜真传布置/未来身｜争议", "补能依赖仙元、真传和宙道布置。"]
      }),
      notes: notes({
        penetration: "宙道杀招、春秋蝉、未来身、光阴长河和宿命蛊损毁构成高机制威胁；时间回溯和宿命破坏不直接换算为爆炸范围。攻击速度：宙道杀招、未来身与光阴长河手段偏时间机制，生效取决于杀招发动和条件，不是随本体移动的常规投射物。",
        resistance: "防御来自尊者级蛊虫、宙道杀招和历史布置；本体结局、真传分散和宿命相关限制需要分开处理。",
        sensing: "宙道观测、轮回经验和未来安排提供情报优势，但不自动等于所有场景先手。",
        tactics: "以多次重生、未来安排、真传布局和针对宿命蛊的长期计划见长。",
        special: "春秋蝉、宙道、未来身、光阴长河、红莲真传、宿命蛊损毁、Otherworldly Demon继承布局。",
        weakness: "很多影响以遗产、真传和时代布置实现；本体战斗、历史回忆和继承效果不能混成一个稳定现役面板。",
        setting: "按红莲魔尊末期与其红莲真传影响记录；早年洪亭、天庭培养期和死后遗产可后续拆分。",
        basis: "worldbook只用于抽取红莲姓名；定级依据公开角色资料入口和尊者体系入口，按九转尊者大陆级争议档保守处理。"
      })
    })
  ]);
})();

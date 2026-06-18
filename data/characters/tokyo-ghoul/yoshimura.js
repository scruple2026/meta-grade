(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yoshimura",
      name: "芳村功善",
      en: "Yoshimura",
      ja: "芳村功善",
      affiliation: "安定区",
      grade: "店长 / 不杀之枭",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "枭讨伐 / 不杀之枭",
      aliases: ["芳村", "店长", "Kuzen", "不杀之枭"],
      fandomSlug: "Yoshimura",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜羽赫/赫者", "枭形态可压制大量搜查官并造成大范围近战破坏。"],
        defense: ["楼级", "街区级｜赫者甲壳/再生", "赫者外壳和喰种再生提供高承伤。"],
        movement: ["亚音速", "音速｜赫者机动", "大型赫者仍具高速突进。"],
        reaction: ["亚音速", "音速｜经验", "老练喰种经验支撑对多敌作战。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜赫者/再生", "赫者体量和再生支撑长战。"],
        healing: ["快速自愈｜喰种再生", "极速自愈｜赫者｜争议", "恢复强但会被持续火力和专用库因克压制。"],
        energy: ["楼级能量", "街区级能量｜赫者", "赫者形态和远程火力消耗大。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "无法无限维持高峰。"]
      }),
      notes: notes({
        penetration: "枭形态兼具羽赫远程射击、巨体近战和赫者甲壳冲撞。",
        resistance: "赫者外壳、再生和经验使其可承受 CCG 重火力；特等搜查官、专用库因克和持续围攻可压制。",
        sensing: "老练城市战经验和喰种感知突出，能判断多名搜查官协同。",
        tactics: "擅长保护安定区、拖延和牵制大部队；不杀原则会限制致命输出。",
        special: "赫者枭形态、羽赫射击、喰种再生。",
        weakness: "年老、不杀原则和保护目标会限制战斗；持续围攻和专用库因克可消耗再生。",
        setting: "按枭讨伐战中不杀之枭记录，不与芳村爱特的独眼之枭混同。",
        basis: "依据芳村在安定区和枭讨伐战中的枭形态、承伤与多敌作战表现定级。"
      })
    })
  ]);
})();

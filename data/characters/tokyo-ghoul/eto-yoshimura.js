(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "eto-yoshimura",
      name: "芳村爱特",
      en: "Eto Yoshimura",
      ja: "芳村エト",
      affiliation: "青桐树",
      grade: "独眼之枭 / 青桐树首领",
      appearances: ["安定区篇", "枭讨伐相关"],
      timelineStatus: "独眼之枭 / 赫者状态",
      aliases: ["爱特", "高槻泉", "独眼之枭", "Eto"],
      fandomSlug: "Eto_Yoshimura",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜赫者/独眼之枭", "独眼之枭形态可造成大范围近战与赫子破坏。"],
        defense: ["楼级", "街区级｜赫者甲壳/再生", "赫者外壳和再生极强。"],
        movement: ["亚音速", "音速｜赫者机动", "大型赫者仍可高速压制。"],
        reaction: ["亚音速", "音速｜经验", "可与特等搜查官级战斗周旋。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜赫者/再生", "半人半喰种和赫者状态带来高生命阈值。"],
        healing: ["快速自愈｜喰种再生", "极速自愈｜赫者｜争议", "再生强但可被高端库因克和持续伤害压制。"],
        energy: ["楼级能量", "街区级能量｜赫者", "赫者形态与赫子输出消耗巨大。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "高峰不能无限维持。"]
      }),
      notes: notes({
        penetration: "独眼之枭赫者形态以巨体、赫子群、撕裂和压制为主。",
        resistance: "赫者甲壳和再生可承受大量火力，但专用库因克、特等搜查官协同和持续围攻可削弱。",
        sensing: "喰种感官、组织运营经验和情报网强，能利用身份隐藏制造信息差。",
        tactics: "青桐树首领与作家身份双线布局，擅长心理、组织和战场压力。",
        special: "独眼之枭赫者形态、喰种再生、青桐树指挥、身份伪装。",
        weakness: "大型赫者目标明显，高峰形态消耗大；被情报识破或围攻时行动空间下降。",
        setting: "按安定区篇相关的独眼之枭爱特记录，不并入后续龙相关设定。",
        basis: "依据芳村爱特作为独眼之枭和青桐树首领的赫者、再生和高端搜查官对抗表现定级。"
      })
    })
  ]);
})();

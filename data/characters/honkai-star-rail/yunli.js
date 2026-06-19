(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["崩坏：星穹铁道"];
  if (!work) throw new Error("崩坏：星穹铁道 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yunli",
    name: "云璃",
    en: "Yunli",
    ja: "雲璃",
    aliases: ["Yunli", "朱明仙舟剑士", "剑首怀炎之孙"],
    affiliation: "仙舟朱明",
    grade: "Physical / Destruction / 剑士",
    appearances: ["崩坏：星穹铁道"],
    timelineStatus: "可操作角色 / 仙舟朱明剑士",
    fandomSlug: "Yunli",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Honkai: Star Rail Characters",
      url: "https://hsr.hoyoverse.com/en-us/character",
      lang: "en",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《崩坏：星穹铁道》官方角色入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Honkai: Star Rail Wiki: Yunli",
      url: "https://honkai-star-rail.fandom.com/wiki/Yunli",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对云璃的Physical、Destruction、仙舟朱明身份、大剑和反击机制资料。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的云璃 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["楼级｜大剑/物理", "街区级｜终结技/反击/命途机制｜争议", "常态按大剑和物理战斗记录；峰值含游戏终结技与反击机制。"],
        defense: ["墙级｜剑士体魄/格挡", "楼级｜反击/队伍机制", "防御来自格挡、反击和队伍机制，本体硬度保守。"],
        movement: ["亚音速", "音速｜剑士突进/战斗机动", "剑士突进和战斗机动强。"],
        reaction: ["亚音速", "音速｜反击机制/剑术", "反击型战斗风格支撑较高近战反应。"],
        vitality: ["精锐韧体", "楼级生命阈值｜命途/仙舟战斗者", "按高端仙舟战斗者保守记录，不因阵营设定抬到高阶。"],
        healing: ["无自愈", "缓慢自愈｜队伍支援/治疗", "自身稳定自愈有限，恢复依赖队伍支援。"],
        energy: ["楼级能量", "街区级能量｜终结技/命途资源", "资源来自命途战斗机制、大剑输出和终结技。"],
        energyRegen: ["中速回能", "快速回能｜战斗循环/受击充能", "依赖战斗循环、受击/反击和队伍资源。"]
      }),
    notes: notes({
        penetration: "大剑物理输出、反击和终结技可造成高近战杀伤；命途机制不直接换算为高阶破坏。",
        resistance: "格挡、反击和队伍支援能提高承伤窗口，但本体硬度和游戏数值分开。",
        sensing: "剑士距离感、武器判断和反击时机优秀。",
        tactics: "擅长吸引攻击、以反击和重剑爆发反制敌人。",
        special: "Physical属性、Destruction命途、大剑、反击机制、仙舟朱明背景。",
        weakness: "峰值依赖受击、反击窗口和队伍循环；远程压制或控制效果需另判。",
        setting: "按可操作角色云璃记录。",
        basis: "worldbook只用于抽取云璃姓名；定级依据HoYoverse官方入口与Honkai: Star Rail Wiki角色入口，命途和终结技作为条件峰值。"
      })
  })]);
})();

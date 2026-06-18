(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "griffith",
      name: "格里菲斯",
      en: "Griffith",
      ja: "グリフィス",
      affiliation: "鹰之团 / 神之手",
      grade: "白鹰 / Femto",
      appearances: ["黄金时代", "蚀之刻"],
      timelineStatus: "蚀之刻 / Femto化峰值",
      aliases: ["白鹰", "费蒙特", "Femto", "Griffith"],
      fandomSlug: "Griffith",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Griffith",
          url: "https://vsbattles.fandom.com/wiki/Griffith",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核黄金时代人类格里菲斯与Femto神之手阶段的跨界口径；本站把因果律和空间压缩写入特殊权能，不直接抬到天体档。"
        }
      ],
      defaultTimelineKey: "femto-eclipse",
      timelinePanels: [
        {
          key: "golden-age-human",
          label: "黄金时代 / 人类白鹰",
          status: "鹰之团团长",
          dimensions: dims({
            attack: ["砖级", "墙级｜剑术", "人类剑士和指挥官水平。"],
            defense: ["凡人级", "墙级｜甲胄/格挡", "依靠甲胄和技巧。"],
            movement: ["凡人速", "亚音速｜剑术", "人类顶级机动。"],
            reaction: ["凡人速", "亚音速｜剑术", "剑术反应优秀。"],
            vitality: ["强化凡体", "强化凡体", "人类肉身。"],
            healing: ["无自愈", "无自愈", "无自愈。"],
            energy: ["凡人能量", "砖级能量｜体力/装备", "无超自然能量池。"],
            energyRegen: ["中速回能", "中速回能", "普通体力恢复。"]
          }),
          notes: "不计入蚀之刻后Femto。"
        },
        {
          key: "femto-eclipse",
          label: "蚀之刻 / Femto",
          status: "神之手成员",
          dimensions: dims({
            attack: ["墙级", "街区级｜空间压缩/神之手权能｜特殊｜争议", "Femto权能偏空间/因果处理，不按纯破坏范围抬高。"],
            defense: ["墙级", "街区级｜神之手权能｜特殊｜争议", "防御更多来自神之手存在方式和权能，不等同肉身硬度。"],
            movement: ["亚音速", "不适用｜幽界/权能位移", "神之手空间表现不按连续速度。"],
            reaction: ["亚音速", "亚音速｜权能/预判", "可用权能应对攻击，但不写高天文速度。"],
            vitality: ["精锐韧体", "街区级生命阈值｜神之手存在｜争议", "存在方式特殊，缺少直接肉身伤害换算。"],
            healing: ["无自愈", "未知｜神之手存在", "缺少常规再生资料。"],
            energy: ["墙级能量", "街区级能量｜神之手权能｜争议", "权能高于人类阶段，但不按世界观称号泛化。"],
            energyRegen: ["未知", "未知｜神之手权能", "无可量化回能资料。"]
          }),
          notes: "当前主面板；神之手权能写特殊，主档保守。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "街区级｜空间压缩/神之手权能｜特殊｜争议", "Femto权能偏空间/因果处理，不按纯破坏范围抬高。"],
        defense: ["墙级", "街区级｜神之手权能｜特殊｜争议", "防御更多来自神之手存在方式和权能，不等同肉身硬度。"],
        movement: ["亚音速", "不适用｜幽界/权能位移", "神之手空间表现不按连续速度。"],
        reaction: ["亚音速", "亚音速｜权能/预判", "可用权能应对攻击，但不写高天文速度。"],
        vitality: ["精锐韧体", "街区级生命阈值｜神之手存在｜争议", "存在方式特殊，缺少直接肉身伤害换算。"],
        healing: ["无自愈", "未知｜神之手存在", "缺少常规再生资料。"],
        energy: ["墙级能量", "街区级能量｜神之手权能｜争议", "权能高于人类阶段，但不按世界观称号泛化。"],
        energyRegen: ["未知", "未知｜神之手权能", "无可量化回能资料。"]
      }),
      notes: notes({
        penetration: "Femto的重力/空间压缩和因果律相关权能是特殊处理，不按普通剑击破坏规模换算。",
        resistance: "神之手存在方式特殊，但本站不把神格称号直接折算为天体或宇宙级防御。",
        sensing: "因果律、幽界和神之手视角带来信息优势，但不等同全知。",
        tactics: "人类阶段是顶级指挥官，Femto阶段更依赖权能、因果和精神支配。",
        special: "贝黑莱特、献祭、Femto化、神之手权能、空间压缩、因果律关联。",
        weakness: "高端权能依赖蚀之刻/幽界语境和神之手身份；人类阶段肉身脆弱。",
        setting: "主面板按蚀之刻Femto记录；人类白鹰阶段拆入时间线。",
        basis: "依据格里菲斯黄金时代剑术和蚀之刻Femto化后的神之手权能表现保守定级。"
      })
    })
  ]);
})();

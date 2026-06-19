(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鲁邦三世"];
  if (!work) throw new Error("鲁邦三世 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "goemon-ishikawa-xiii",
    name: "石川五右卫门",
    en: "Goemon Ishikawa XIII",
    ja: "石川 五ェ門",
    aliases: ["Goemon", "Ishikawa Goemon", "石川五ェ门", "斩铁剑"],
    affiliation: "鲁邦一伙关联者 / 剑士",
    grade: "剑士 / 斩铁剑持有者",
    appearances: ["鲁邦三世 系列"],
    timelineStatus: "系列综合 / 斩铁剑持有",
    fandomSlug: "Goemon_Ishikawa_XIII",
    confidence: "medium",
    evidenceType: ["官方角色入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "official",
      scope: "官方角色入口",
      label: "Lupin III Part 6: Characters",
      url: "https://lupin-3rd.net/anime/part6/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对《鲁邦三世》动画官方角色入口；直连可能因站点策略不可读。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Lupin III Wiki: Goemon Ishikawa XIII",
      url: "https://lupin.fandom.com/wiki/Goemon_Ishikawa_XIII",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对石川五右卫门的剑士身份、斩铁剑和鲁邦一伙关联。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的石川五右卫门 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["砖级｜剑术", "墙级｜斩铁剑/高穿透｜武器", "斩铁剑提供高穿透切割，但不把切割性质直接换算为大范围破坏。"],
        defense: ["凡人级", "砖级｜剑挡/规避", "防御主要来自剑术格挡、预判和规避，本体仍为人类。"],
        movement: ["凡人速", "亚音速｜剑士步法/短距突进", "剑士步法和突进强于普通人。"],
        reaction: ["凡人速", "亚音速｜居合/子弹应对｜争议", "居合和近战反应强；夸张挡弹演出按争议峰值处理。"],
        vitality: ["强化凡体", "精锐韧体｜剑士修行/生还经历", "高水平剑士生命体量。"],
        healing: ["无自愈", "缓慢自愈｜休整/医疗", "恢复依赖休整和普通医疗。"],
        energy: ["凡人能量", "砖级能量｜斩铁剑/体力", "资源来自体力和斩铁剑，不是超自然能量池。"],
        energyRegen: ["无回能", "缓慢回能｜休息/整备", "依赖休息和武器整备。"]
      }),
    notes: notes({
        penetration: "斩铁剑可提供远超普通刀剑的切割和破障能力；这是武器穿透，不代表本体范围破坏。",
        resistance: "本体为训练人类，靠剑挡、预判和距离控制避免受击。",
        sensing: "剑士距离感、杀气判断、居合时机和战场专注力强。",
        tactics: "擅长以高速拔刀切断武器、载具或机关，为队友打开路线。",
        special: "斩铁剑、居合、剑术修行、冷兵器切割与高穿透破障。",
        weakness: "依赖斩铁剑和接战距离；面对范围压制、缺乏可切目标或武器受限时风险上升。",
        setting: "按系列综合、持有斩铁剑的石川五右卫门记录。",
        basis: "worldbook只用于抽取石川五右卫门姓名；定级依据官方角色入口和Lupin III Wiki角色入口，斩铁剑高穿透与本体防御、生命体量分开。"
      })
  })]);
})();

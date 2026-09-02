(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "roronoa-zoro",
      name: "罗罗诺亚·索隆",
      en: "Roronoa Zoro",
      ja: "ロロノア・ゾロ",
      affiliation: "草帽一伙",
      grade: "剑士 / 霸王色缠绕",
      appearances: ["正篇"],
      timelineStatus: "和之国后 / 阎魔与霸王色",
      aliases: [],
      fandomSlug: "Roronoa_Zoro",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；霸气/剑术高风险量级仍需原作卷话补证。"
        }
      ],
      defaultTimelineKey: "wano-enma",
      timelinePanels: [
        {
          key: "enies-lobby",
          label: "司法岛后 / 阿修罗",
          status: "三刀流与阿修罗初显",
          dimensions: dims({
            attack: ["楼宇级", "街区级｜阿修罗", "早期高端斩击可重创强敌和结构。"],
            defense: ["楼宇级", "街区级｜极限承伤", "承伤和意志突出。"],
            movement: ["亚音速", "超音速｜剑士突进", "短距突进很快。"],
            reaction: ["亚音速", "超音速｜战斗经验", "可应对司法岛级高速近战。"],
            vitality: ["精锐韧体", "街区级生命阈值", "极限承伤是主要特色。"],
            healing: ["无自愈", "缓慢自愈", "依赖医疗和休息。"],
            energy: ["楼宇级能量", "街区级能量｜阿修罗", "爆发依赖体力。"],
            energyRegen: ["中速回能", "中速回能", "无特殊回能。"]
          }),
          notes: "不计入霸气体系成熟和阎魔。"
        },
        {
          key: "dressrosa",
          label: "德雷斯罗萨后 / 武装色剑士",
          status: "新世界霸气成型",
          dimensions: dims({
            attack: ["街区级", "街区级｜武装色/大范围斩击", "大范围斩击和武装色显著提升。"],
            defense: ["街区级", "街区级｜武装色", "武装色和体魄提升防御。"],
            movement: ["超音速", "高超音速｜争议", "新世界高端剑士速度争议。"],
            reaction: ["超音速", "高超音速｜争议", "战斗经验和见闻色辅助。"],
            vitality: ["街区级生命阈值", "街区级生命阈值", "承伤极强。"],
            healing: ["无自愈", "缓慢自愈", "依赖医疗和休息。"],
            energy: ["街区级能量", "街区级能量｜霸气", "霸气消耗明显。"],
            energyRegen: ["中速回能", "快速回能｜战斗意志", "无稳定特殊回能。"]
          }),
          notes: "不计入阎魔和霸王色缠绕。"
        },
        {
          key: "wano-enma",
          label: "和之国后 / 阎魔与霸王色",
          status: "阎魔、霸王色缠绕峰值",
          dimensions: dims({
            attack: ["街区级", "城市级｜阎魔/霸王色｜争议", "大范围斩击与霸气峰值很高，但主打切割穿透。"],
            defense: ["街区级", "街区级｜武装色", "承伤极强但防御不等同路飞橡胶体质。"],
            movement: ["超音速", "高超音速｜争议", "高端剑士机动和突进极快。"],
            reaction: ["超音速", "高超音速｜见闻色/战斗经验｜争议", "可参与四皇级战场。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜极限承伤｜争议", "极端承伤和意志是核心特色。"],
            healing: ["无自愈", "缓慢自愈", "依赖医疗、休息和药物。"],
            energy: ["街区级能量", "城市级能量｜霸气/阎魔｜争议", "阎魔和霸气消耗明显。"],
            energyRegen: ["中速回能", "快速回能｜战斗意志", "无特殊瞬时回能。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜阎魔/霸王色｜争议", "大范围斩击与霸气峰值很高，但主打切割穿透。"],
        defense: ["街区级", "街区级｜武装色", "承伤极强但防御不等同路飞橡胶体质。"],
        movement: ["超音速", "高超音速｜争议", "高端剑士机动和突进极快。"],
        reaction: ["超音速", "高超音速｜见闻色/战斗经验｜争议", "可参与四皇级战场。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜极限承伤｜争议", "极端承伤和意志是核心特色。"],
        healing: ["无自愈", "缓慢自愈", "依赖医疗、休息和药物。"],
        energy: ["街区级能量", "城市级能量｜霸气/阎魔｜争议", "阎魔和霸气消耗明显。"],
        energyRegen: ["中速回能", "快速回能｜战斗意志", "无特殊瞬时回能。"]
      }),
      notes: notes({
        penetration: "三刀流大范围斩击、阎魔抽取霸气后的高密度切割和霸王色缠绕主打破甲与深创；阿修罗和阎魔峰值强调单体斩杀、伤口扩大与霸气压制，不把切开大型目标直接换算为全域破坏。攻击速度：索隆的三刀流连斩随持刀动作与步法命中，离体斩击则在挥刀后向外传播；阎魔蓄积霸气会影响起手和连续使用。",
        resistance: "武装色、剑术格挡和极端承伤让索隆能在重伤下继续近战；没有橡胶体质、元素化或自愈，内伤累积、药物副作用、远程规则能力和缴械都会明显削弱他。",
        sensing: "见闻色、剑士距离感和杀气读取支撑近战预判；没有路飞级未来视明确表现，远距索敌需保守。",
        tactics: "正面突破和要害判断强，擅长用三刀流、霸气和阎魔爆发破防；高耗霸气和失刀风险要求尽快结束关键交换。",
        special: "三刀流、武装色、见闻色、霸王色缠绕、阎魔。",
        weakness: "阎魔会主动榨取霸气，高峰输出不能长期维持；索隆主要依赖近身斩击和刀具，面对飞行拉扯、空间/精神机制、失刀或持续消耗战风险上升。",
        setting: "按和之国后阎魔与霸王色缠绕版本记录；司法岛阿修罗、新世界武装色阶段已拆入时间线，主面板不把所有剑士称号外推为更高量级。",
        basis: "依据索隆至和之国篇对王、凯多/大妈组合战中的斩击、承伤和霸气表现定级。"
      })
    })
  ]);
})();

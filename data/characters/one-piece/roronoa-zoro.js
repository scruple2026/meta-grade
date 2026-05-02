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
      category: "主角团",
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
      dimensions: dims({
        attack: ["街区级", "城市级｜阎魔/霸王色｜争议", "大范围斩击与霸气峰值很高，但主打切割穿透。"],
        defense: ["街区级", "街区级｜武装色", "承伤极强但防御不等同路飞橡胶体质。"],
        movement: ["超音速", "高超音速｜争议", "高端剑士机动和突进极快。"],
        reaction: ["超音速", "高超音速｜见闻色/战斗经验｜争议", "可参与四皇级战场。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜极限承伤｜争议", "极端承伤和意志是核心特色。"],
        healing: ["无自愈", "缓慢自愈", "依赖医疗、休息和药物。"],
        energy: ["街区级能量", "城市级能量｜霸气/阎魔｜争议", "阎魔和霸气消耗明显。"],
        energyRegen: ["常规回能", "快速回能｜战斗意志", "无特殊无限回能。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "三刀流、武装色、见闻色、霸王色缠绕、阎魔。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据索隆至和之国篇对王、凯多/大妈组合战中的斩击、承伤和霸气表现定级。"
      })
    })
  ]);
})();

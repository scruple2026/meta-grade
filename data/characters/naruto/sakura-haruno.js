(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sakura-haruno",
      name: "春野樱",
      en: "Sakura Haruno",
      ja: "春野サクラ",
      category: "主角团",
      affiliation: "木叶隐村",
      grade: "医疗忍者 / 百豪之术",
      appearances: ["正篇"],
      timelineStatus: "第四次忍界大战后期 / 百豪",
      aliases: [],
      fandomSlug: "Sakura_Haruno",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "NARUTO OFFICIAL SITE：NARUTOとは",
          url: "https://naruto-official.com/about/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对官方作品概述和日文入口；六道/尾兽高端量级仍需原作卷话或设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜怪力", "查克拉强化拳可造成大范围地形破坏。"],
        defense: ["墙级", "楼级｜百豪承伤", "肉身防御不等同再生，靠医疗忍术续战。"],
        movement: ["亚音速", "超音速｜忍者机动｜争议", "后期可参与高端战场，但不按顶级六道速度。"],
        reaction: ["亚音速", "超音速｜争议", "战斗经验和医疗判断强。"],
        vitality: ["精锐韧体", "楼级生命阈值｜百豪", "百豪提升重伤续战。"],
        healing: ["快速自愈", "极速自愈｜百豪之术", "可战斗中快速恢复明显伤势。"],
        energy: ["楼级能量", "街区级能量｜百豪储备", "百豪长期储存查克拉。"],
        energyRegen: ["常规回能", "快速回能｜百豪释放", "释放储备时可支撑爆发。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "怪力、医疗忍术、百豪之术、通灵蛞蝓。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据小樱在疾风传后期、第四次忍界大战与辉夜战支援表现定级。"
      })
    })
  ]);
})();

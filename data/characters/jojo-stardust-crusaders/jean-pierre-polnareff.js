(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jean-pierre-polnareff",
      name: "简·皮耶尔·波鲁那雷夫",
      en: "Jean Pierre Polnareff",
      ja: "ジャン・ピエール・ポルナレフ",
      category: "主角团",
      affiliation: "乔斯达一行",
      grade: "银色战车使者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Jean_Pierre_Polnareff",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "JOJO 官方门户：星尘斗士角色页",
          url: "https://jojo-portal.com/anime/sc/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对星尘斗士官方角色和替身入口；替身速度/时间停止仍需原作章节或设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜银色战车", "银色战车高速剑击以单体穿刺和切割为主。"],
        defense: ["凡人级", "墙级｜替身格挡", "本体脆弱，替身可格挡。"],
        movement: ["凡人速", "亚音速｜替身短距", "替身速度不等同本体长距移动。"],
        reaction: ["亚音速", "超音速｜替身剑速｜争议", "替身剑速极高但多数表现难精确换算。"],
        vitality: ["强化凡体", "精锐韧体", "多次重伤后仍能行动。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["凡人能量", "房屋级能量｜替身", "替身输出集中在剑击。"],
        energyRegen: ["常规回能", "常规回能", "依赖体力与精神。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "银色战车、高速剑击、脱甲加速。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据波鲁那雷夫在第三部多场替身战中的剑速、切割和承伤表现定级。"
      })
    })
  ]);
})();

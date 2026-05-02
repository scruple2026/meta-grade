(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dio",
      name: "DIO",
      en: "Dio Brando",
      ja: "ディオ・ブランドー",
      affiliation: "迪奥阵营",
      grade: "第三部最终 boss / 世界",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Dio_Brando",
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
        attack: ["墙级", "房屋级｜世界", "替身近战和吸血鬼肉体单体杀伤强，范围破坏有限。"],
        defense: ["墙级", "房屋级｜吸血鬼身体", "肉体再生和替身格挡强，但阳光、波纹和头部破坏仍关键。"],
        movement: ["亚音速", "亚音速｜时间停止内位移", "时间停止期间移动属于时间权能，不按连续速度抬级。"],
        reaction: ["亚音速", "超音速｜世界｜争议", "世界近战反应极强，时间停止另写特殊。"],
        vitality: ["精锐韧体｜吸血鬼｜特殊生命结构", "楼级生命阈值｜吸血鬼再生", "吸血鬼与乔纳森身体结合，生命结构特殊。"],
        healing: ["快速自愈", "极速自愈｜吸血鬼", "吸血鬼再生可修复重伤，受头部和阳光限制。"],
        energy: ["墙级能量", "房屋级能量｜替身/吸血鬼", "无大范围能量池表现。"],
        energyRegen: ["快速回能", "快速回能｜吸血", "可通过吸血补充生命力。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "世界、时间停止、吸血鬼再生、肉芽控制。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据DIO在第三部最终战中的时间停止、替身近战、吸血鬼再生与弱点表现定级。"
      })
    })
  ]);
})();

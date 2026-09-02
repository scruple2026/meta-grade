(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "isaac-netero",
      name: "艾萨克·尼特罗",
      en: "Isaac Netero",
      ja: "アイザック＝ネテロ",
      affiliation: "猎人协会",
      grade: "猎人协会会长 / 百式观音",
      appearances: ["蚁王篇"],
      timelineStatus: "蚁王讨伐时",
      aliases: ["尼特罗会长", "百式观音"],
      fandomSlug: "Isaac_Netero",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方动画入口",
          label: "日本电视台「HUNTER×HUNTER」Cast/Staff",
          url: "https://www.ntv.co.jp/hunterhunter/caststaff/index.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对2011动画官方入口；念能力、成人杰和蚁篇高风险峰值仍需原作卷话或公式书补证。"
        }
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜百式观音｜零式", "百式观音高速连击和零式具备强单体/区域压制，但不把贫者蔷薇算入自身攻击。"],
        defense: ["墙体级", "房屋级｜念防御", "防御依赖念与战斗经验，肉体会被蚁王突破。"],
        movement: ["亚音速", "超音速｜百式观音出手", "出手速度远超常规移动；长途位移不等同。"],
        reaction: ["亚音速", "超音速｜祈祷动作", "祈祷与百式观音反应极快，但不按光速。"],
        vitality: ["精锐韧体", "精锐韧体", "老年身体仍能极限作战，承伤后会迅速恶化。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["房屋级能量", "街区级能量｜零式", "零式消耗大量念，不能反复。"],
        energyRegen: ["中速回能", "中速回能", "零式后资源接近枯竭属于消耗后果，不作为更低的峰值回能档。"]
      }),
      notes: notes({
        penetration: "百式观音通过高速打击压制敌人，零式为念量集中释放。攻击速度：尼特罗先完成祈祷动作，再由百式观音挥掌命中；连续掌击取决于祈祷与观音动作衔接，零式还需集中并释放念量。",
        resistance: "念防御不等于高硬度肉体，面对蚁王仍被逐步拆解。",
        sensing: "极限修行和会长级念战经验让他能捕捉高端近战节奏；百式观音的速度来自祈祷动作和念像执行，不是远距索敌。",
        tactics: "战斗经验与节奏控制极强，能用百式观音保持距离并逐步压制；零式和贫者蔷薇都是高代价终局选项。",
        special: "百式观音、零式、极限祈祷动作、贫者蔷薇自爆装置。",
        weakness: "年龄、体力和零式消耗明显；贫者蔷薇是装备/自爆，不计自身常规攻击。",
        setting: "按蚁王讨伐时尼特罗记录；百式观音和零式为个人念能力，贫者蔷薇作为装备/自爆另写限制。",
        basis: "依据尼特罗与蚁王战中的百式观音速度、压制、零式和最终装备自爆表现定级。"
      })
    })
  ]);
})();

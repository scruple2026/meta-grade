(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "zenitsu-agatsuma",
      name: "我妻善逸",
      en: "Zenitsu Agatsuma",
      ja: "我妻善逸",
      affiliation: "鬼杀队",
      grade: "主角团 / 雷之呼吸",
      appearances: ["立志篇", "无限列车篇", "游郭篇", "无限城篇"],
      timelineStatus: "无限城 / 击败狯岳时期",
      aliases: ["雷之呼吸", "火雷神"],
      fandomSlug: "Zenitsu_Agatsuma",
      dimensions: dims({
        attack: ["墙体级", "房屋级｜雷之呼吸｜火雷神", "单点拔刀斩击极强，但破坏范围有限。"],
        defense: ["凡人级", "墙体级｜全集中呼吸", "承伤靠训练和呼吸支撑。"],
        movement: ["亚音速", "音速｜雷之呼吸｜短距突进", "速度是核心优势；峰值只按短距突进近似声速处理，不按雷电特效抬到超音速。"],
        reaction: ["亚音速", "音速｜听觉", "听觉感知和拔刀反应强，但非全维速度专精。"],
        vitality: ["强化凡体", "精锐韧体", "能在重伤、毒伤后作战。"],
        healing: ["无自愈", "缓慢自愈", "无自体再生。"],
        energy: ["凡人能量", "墙体级能量｜全集中呼吸", "爆发强，长战稳定性低于柱。"],
        energyRegen: ["中速回能", "快速回能", "休整后可恢复爆发。"]
      }),
      notes: notes({
        penetration: "雷之呼吸一之型和火雷神是高速单点斩击，适合斩首穿透。攻击速度：一之型和火雷神把突进与拔刀斩合为一次高速接战，攻击并非脱离善逸本体飞行，发动姿势和路线决定命中。",
        resistance: "本体仍是人类肉身，主要靠速度、听觉预判和一击脱离避免受伤；毒素、失血、断肢和持久近战都很危险。",
        sensing: "超常听觉能辨别情绪、位置和威胁前兆，是主要索敌与预判来源；睡眠/极限集中会影响稳定性。",
        tactics: "技型极端专精，擅长把一之型速度压缩成拔刀一击；若首击未成或心理崩盘，后续战术选择较少。",
        special: "超常听觉、雷之呼吸一之型、火雷神、睡眠/极限集中战斗。",
        weakness: "技型偏科严重，早期心理状态不稳；近身一击不中会陷入风险。",
        setting: "按无限城击败狯岳时期记录；早期睡眠战斗与火雷神峰值合并为最终成长口径，不把雷电演出换算为真实雷速。",
        basis: "依据蜘蛛山、游郭和无限城对狯岳战中的高速拔刀、听觉感知和承伤表现定级。"
      })
    })
  ]);
})();

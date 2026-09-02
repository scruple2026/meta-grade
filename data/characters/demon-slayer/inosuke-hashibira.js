(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "inosuke-hashibira",
      name: "嘴平伊之助",
      en: "Inosuke Hashibira",
      ja: "嘴平伊之助",
      affiliation: "鬼杀队",
      grade: "主角团 / 兽之呼吸",
      appearances: ["立志篇", "无限列车篇", "游郭篇", "无限城篇"],
      timelineStatus: "无限城 / 最终成长状态",
      aliases: ["兽之呼吸", "Inosuke"],
      fandomSlug: "Inosuke_Hashibira",
      dimensions: dims({
        attack: ["墙体级", "房屋级｜兽之呼吸", "双刀斩击和野性体术为主。"],
        defense: ["凡人级", "墙体级｜柔韧身体", "身体柔韧和抗痛能力强，但不是硬防御。"],
        movement: ["亚音速", "亚音速", "野性机动和突进强，但缺少稳定声速位移证据。"],
        reaction: ["亚音速", "亚音速｜空间感知", "空间感知可捕捉敌方位置与杀气，属于预判和定位优势。"],
        vitality: ["强化凡体", "精锐韧体", "重伤后仍可行动。"],
        healing: ["无自愈", "缓慢自愈", "无自体再生。"],
        energy: ["凡人能量", "墙体级能量｜全集中呼吸", "体力和呼吸支撑爆发。"],
        energyRegen: ["中速回能", "快速回能", "恢复依休整和体质。"]
      }),
      notes: notes({
        penetration: "锯齿双刀和兽之呼吸适合撕裂、斩首和乱战，不扩大破坏规模。攻击速度：锯齿双刀乱斩随伊之助的近身突进与双臂连续挥动，没有脱离本体的常规远程斩击载体。",
        resistance: "柔韧身体可规避部分致命伤，但毒和失血仍危险。",
        sensing: "空间感知、野性直觉和触觉式环境读取可发现敌方位置与杀气；对复杂血鬼术仍需要队友或经验校正。",
        tactics: "本能型战斗者，善于用柔韧身体、双刀和意外角度扰乱敌人；容易冲动突进，遇到陷阱和规则型能力风险较高。",
        special: "兽之呼吸、自创型、空间感知、关节柔韧。",
        weakness: "防御和战术稳定性不如柱；容易依赖本能突进。",
        setting: "按无限城最终成长版本记录；早期粗野战法、游郭承伤和童磨战支援合并为成熟兽之呼吸版本。",
        basis: "依据鼓屋、蜘蛛山、游郭和童磨战支援表现定级。"
      })
    })
  ]);
})();

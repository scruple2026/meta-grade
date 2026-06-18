(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "frieren",
      name: "芙莉莲",
      en: "Frieren",
      ja: "フリーレン",
      affiliation: "勇者队伍 / 芙莉莲队伍",
      grade: "精灵魔法使 / 葬送的芙莉莲",
      appearances: ["勇者队伍回忆", "现代旅行", "黄金乡篇"],
      timelineStatus: "黄金乡篇 / 大魔族对抗经验",
      aliases: ["Frieren", "葬送的芙莉莲"],
      fandomSlug: "Frieren",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜攻击魔法/封印解析", "常用攻击魔法和高阶魔法足以压制大魔族，但不把年龄直接换成高破坏档。"],
        defense: ["墙级", "楼级｜防御魔法", "防御依赖魔法屏障和距离管理，本体并非高硬度肉身。"],
        movement: ["凡人速", "亚音速｜飞行/魔法辅助", "可借魔法飞行和移动，但不是速度型。"],
        reaction: ["亚音速", "音速｜魔力感知/经验", "经验和魔力感知支撑对魔族战。"],
        vitality: ["强化凡体", "精锐韧体｜防御魔法保护", "精灵寿命长不等于高生命阈值，承伤主要靠防御魔法。"],
        healing: ["无自愈", "缓慢自愈｜治疗魔法/外部", "自身不以高速再生见长。"],
        energy: ["楼级能量", "街区级能量｜长期魔力储备", "魔力量和经验极高，但单次输出与总量分开。"],
        energyRegen: ["快速回能", "快速回能｜魔力恢复", "长期续航强但战斗中会消耗。"]
      }),
      notes: notes({
        penetration: "攻击魔法、解析封印和对魔族知识提供高命中与克制，不把特殊解析直接换成破坏规模。",
        resistance: "防御魔法和经验强，但本体肉身普通，偷袭、封印、精神/规则类魔法需要另判。",
        sensing: "魔力感知、魔力隐藏和长年对魔族经验极强，擅长识别伪装与术式性质。",
        tactics: "极擅长等待、解析、隐藏魔力和用经验拆解魔族术式；对日常社会判断有迟钝面。",
        special: "攻击魔法、防御魔法、魔力隐藏、封印解析、魔族知识、长寿经验。",
        weakness: "本体肉身脆弱，强依赖施法窗口、情报和魔力管理；未知特殊魔法仍需解析时间。",
        setting: "按黄金乡篇附近的现代芙莉莲记录，不把女神碑等时间线异常并入。",
        basis: "依据芙莉莲在勇者队伍回忆、一级魔法使考试和黄金乡篇中攻击魔法、防御与魔法解析表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["葬送的芙莉莲"];

  if (!work) {
    throw new Error("葬送的芙莉莲 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "stark",
      name: "修塔尔克",
      en: "Stark",
      ja: "シュタルク",
      affiliation: "芙莉莲队伍",
      grade: "战士 / 艾森弟子",
      appearances: ["现代旅行", "黄金乡篇"],
      timelineStatus: "黄金乡篇 / 队伍前卫",
      aliases: ["Stark"],
      fandomSlug: "Stark",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜斧击/战士爆发", "重斧和战士体魄可破坏大型魔物与建筑局部。"],
        defense: ["墙级", "楼级｜战士韧性", "承伤远强于普通人，但没有魔法屏障常驻。"],
        movement: ["凡人速", "亚音速｜战士突进", "短距爆发和闪避优秀。"],
        reaction: ["凡人速", "亚音速", "可应对魔物和战士级近战。"],
        vitality: ["强化凡体", "精锐韧体｜战士韧性", "高承伤与忍耐是核心。"],
        healing: ["无自愈", "无自愈", "依赖治疗和休养。"],
        energy: ["砖级能量", "楼级能量｜体力爆发", "体力和肌力支撑连续近战。"],
        energyRegen: ["中速回能", "中速回能", "依赖休息恢复。"]
      }),
      notes: notes({
        penetration: "重斧劈砍和突进打击可破坏坚硬目标，偏近身单体杀伤。攻击速度：重斧劈砍和突进打击随手臂、步法和接战距离完成，收招再攻与单次命中不能用移动速度替代。",
        resistance: "肉体韧性和意志强，但对魔法、毒、精神或远程火力缺少专门防护。",
        sensing: "战士直觉和近战观察不错，但不具备魔法感知优势。",
        tactics: "作为前卫吸引火力、保护菲伦和给芙莉莲争取施法窗口；胆怯会影响开局心态。",
        special: "重斧战斗、战士体魄、保护型前卫。",
        weakness: "缺少远程和魔法防御，心理胆怯需要通过责任感克服。",
        setting: "按黄金乡篇附近的修塔尔克记录。",
        basis: "依据修塔尔克在现代旅行和黄金乡篇中对魔物、战士与魔族的近战、承伤和前卫表现定级。"
      })
    })
  ]);
})();

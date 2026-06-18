(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yukinori-shinohara",
      name: "篠原幸纪",
      en: "Yukinori Shinohara",
      ja: "篠原幸紀",
      affiliation: "CCG",
      grade: "特等搜查官 / 库因克使用者",
      appearances: ["安定区篇", "枭讨伐"],
      timelineStatus: "安定区篇 / 特等搜查官",
      aliases: ["篠原", "Shinohara"],
      fandomSlug: "Yukinori_Shinohara",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: ["从东京喰种 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "楼级｜库因克/Arata防具", "特等搜查官装备和库因克可伤害高阶喰种。"],
        defense: ["凡人级", "楼级｜Arata防具/库因克格挡", "本体人类，峰值依赖防具和格挡。"],
        movement: ["凡人速", "亚音速｜搜查官体术/装备", "重装状态仍有高训练机动。"],
        reaction: ["凡人速", "亚音速｜经验", "老练特等搜查官反应。"],
        vitality: ["强化凡体", "精锐韧体｜防具/意志", "人类本体缺少再生，靠装备和意志支撑。"],
        healing: ["无自愈", "无自愈", "依赖医疗。"],
        energy: ["砖级能量", "楼级能量｜库因克/防具", "资源来自体力、库因克和 Arata 防具负担。"],
        energyRegen: ["无回能", "中速回能｜休整/装备维护", "需要医疗、休整和装备维护。"]
      }),
      notes: notes({
        penetration: "库因克与 Arata 防具适合对喰种近战破甲，能威胁高阶喰种但非自身裸手输出。",
        resistance: "峰值防御依赖 Arata 防具和库因克格挡；本体仍是人类，重创后无法自愈。",
        sensing: "搜查官经验、现场指挥和对喰种战术判断强。",
        tactics: "稳健的特等搜查官，擅长带队、承压和配合其他搜查官围攻。",
        special: "库因克、Arata 防具、特等搜查官经验。",
        weakness: "装备负担高，本体无再生；面对枭级持续输出时消耗和伤势会迅速累积。",
        setting: "按安定区篇和枭讨伐时期篠原幸纪记录。",
        basis: "worldbook只用于抽取篠原幸纪姓名；定级依据公开角色资料入口和 CCG 特等搜查官战斗定位。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "skull-knight",
      name: "髑髅骑士",
      en: "Skull Knight",
      ja: "髑髏の騎士",
      affiliation: "使徒/神之手对抗者",
      grade: "神秘骑士 / 喚び水の剣",
      appearances: ["蚀之刻", "正篇"],
      timelineStatus: "蚀之刻后 / 神秘干涉者",
      aliases: ["骷髅骑士", "Skull Knight", "Gaiseric"],
      fandomSlug: "Skull_Knight",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜喚び水の剣/幽界斩击｜特殊｜争议", "剑术和特殊剑可切开空间/幽界裂隙，特殊性质不按纯破坏抬高。"],
        defense: ["楼级", "街区级｜铠甲/幽界存在｜争议", "铠甲与神秘存在支撑高承伤。"],
        movement: ["亚音速", "音速｜骑乘/突袭", "可高速突入蚀之刻和战场。"],
        reaction: ["亚音速", "音速｜经验/预知", "长期对抗神之手和使徒经验极强。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜幽界存在｜争议", "存在方式特殊且承伤强。"],
        healing: ["未知", "未知｜幽界存在", "缺少常规再生资料。"],
        energy: ["楼级能量", "街区级能量｜喚び水の剣｜特殊｜争议", "特殊剑和幽界干涉不等同普通能量池。"],
        energyRegen: ["未知", "未知｜幽界存在", "无可量化回能资料。"]
      }),
      notes: notes({
        penetration: "喚び水の剣可造成空间/幽界裂隙类效果，是特殊权能，不按纯物理破坏解释。",
        resistance: "铠甲和幽界存在方式使其抗打极强，但神之手权能仍可反制。",
        sensing: "对因果律、烙印和幽界变化有长期经验，常提前介入关键节点。",
        tactics: "经验极老练，擅长等待因果节点、突入救援和以特殊剑制造空间突破。",
        special: "喚び水の剣、幽界干涉、对神之手/使徒经验、骑乘突袭。",
        weakness: "高端手段依赖特殊剑和因果节点；面对神之手反制不能视为绝对。",
        setting: "按蚀之刻后髑髅骑士记录。",
        basis: "依据髑髅骑士突入蚀之刻救出格斯/卡思嘉、对抗使徒和使用特殊剑干涉空间的表现定级。"
      })
    })
  ]);
})();

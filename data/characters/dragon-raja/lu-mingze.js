(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "lu-mingze",
    name: "路鸣泽",
    en: "Lu Mingze",
    ja: "路鸣泽",
    aliases: ["小魔鬼", "魔鬼", "男孩"],
    affiliation: "未知 / 小魔鬼",
    grade: "神秘存在 / 交易对象",
    appearances: ["原作主线"],
    timelineStatus: "主线交易状态",
    fandomSlug: "路鸣泽",
    confidence: "review",
    evidenceType: ["资料入口", "交易/规则峰值"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙级", "街区级｜交易/规则干涉｜争议", "威胁主要来自交易和规则干涉，非普通肉搏。"],
        defense: ["墙级", "街区级｜特殊存在/复归条件｜争议", "存在方式不明，防御和死亡条件需保守标争议。"],
        movement: ["凡人速", "超音速｜特殊显现/规则条件｜争议", "显现和位置变化更像特殊机制，不当作纯移动速度。"],
        reaction: ["音速", "超音速｜特殊感知｜争议", "对关键事件反应和布局强，保守记录。"],
        vitality: ["房屋级生命阈值", "街区级生命阈值｜特殊生命结构/复归条件｜争议", "生命体量受存在方式和交易机制影响。"],
        healing: ["中速自愈", "极速自愈｜复归/交易条件｜争议", "恢复或复归机制不透明。"],
        energy: ["墙级能量", "街区级能量｜交易/规则干涉｜争议", "能量池按可影响战局的交易峰值记录。"],
        energyRegen: ["中速回能", "快速回能｜特殊存在条件｜争议", "回能与存在机制相关。"]
      }),
    notes: notes({
        penetration: "交易和规则干涉比直接破坏更关键，不把其换算为无限攻击。",
        resistance: "存在方式特殊，需区分实体承伤与复归/交易机制。",
        sensing: "对路明非、龙族事件和关键局势具备超常洞察。",
        tactics: "长期布局、诱导和交易设计极强。",
        special: "四分之一生命交易、显现、规则干涉、神秘身份。",
        weakness: "行动条件和真实目的不透明，需依赖交易或契约关系。",
        setting: "按原作主线中路鸣泽交易状态记录。",
        basis: "worldbook只用于抽取路鸣泽姓名；定级依据公开作品/资料入口，规则能力写入特殊项。"
      })
  })]);
})();

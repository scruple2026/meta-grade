(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["我的青春恋爱物语果然有问题"];
  if (!work) throw new Error("我的青春恋爱物语果然有问题 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "haruno-yukinoshita",
    name: "雪之下阳乃",
    en: "Haruno Yukinoshita",
    ja: "雪ノ下陽乃",
    aliases: ["阳乃", "雪之下阳乃", "Yukinoshita Haruno"],
    affiliation: "雪之下家",
    grade: "大学生 / 雪乃姐姐",
    appearances: ["主线全篇"],
    timelineStatus: "主线时期",
    fandomSlug: "Haruno_Yukinoshita",
    confidence: "medium",
    evidenceType: ["官方入口", "角色页入口", "非战斗保守"],
    sourceQuality: "entry",
    evidenceLinks: [],
    revisionNotes: ["worldbook 仅用于抽取春物角色姓名；定级依据公开官方/资料入口并按普通校园人类保守记录。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级", "普通校园人类，缺少战斗破坏表现。"],
        defense: ["凡人级", "凡人级", "普通人类承伤。"],
        movement: ["凡人速", "凡人速", "普通人移动。"],
        reaction: ["凡人速", "凡人速", "普通人反应。"],
        vitality: ["凡人肉身", "凡人肉身", "普通人生命体量。"],
        healing: ["缓慢自愈", "缓慢自愈｜休息/医疗", "按普通人自然恢复处理。"],
        energy: ["凡人能量", "凡人能量", "无超自然战斗能源。"],
        energyRegen: ["无回能", "无回能", "不存在可排序的战斗回能体系。"]
      }),
    notes: notes({
        penetration: "社交压迫和心理试探不折算为物理攻击。",
        resistance: "普通人承伤。",
        sensing: "洞察人际动机和隐藏矛盾极强。",
        tactics: "擅长心理施压、信息差和家庭/社会资源运用。",
        special: "高社交洞察、雪之下家背景、心理试探。",
        weakness: "肉身普通，行动受家庭结构和个人执念约束。",
        setting: "按主线时期雪之下阳乃记录。",
        basis: "worldbook只用于抽取雪之下阳乃姓名；定级依据TBS官方角色入口与Oregairu Wiki资料入口，按普通现代人处理。"
      })
  })]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "pride",
      name: "普莱德",
      en: "Pride",
      ja: "プライド",
      affiliation: "人造人阵营",
      grade: "人造人「傲慢」",
      appearances: ["约定之日", "正篇"],
      timelineStatus: "漫画/FA线 / 约定之日",
      aliases: ["傲慢", "塞利姆·布拉德雷", "Selim Bradley", "Pride", "影子人造人"],
      fandomSlug: "Selim_Bradley/Manga",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从约定之日 worldbook key/comment 的人造人规则名单补入；主面板按漫画/FA线普莱德记录。"
      ],
      dimensions: dims({
        attack: ["墙体级", "房屋级｜影子触手/贤者之石", "影子切割、贯穿和多方向压制强，范围受光源与容器限制。"],
        defense: ["凡人级｜塞利姆容器", "房屋级｜影子防护/贤者之石", "本体容器脆弱，防护主要来自影子和贤者之石资源。"],
        movement: ["凡人速", "亚音速｜影子延伸", "身体移动一般，影子攻击延伸速度高于本体移动。"],
        reaction: ["亚音速", "超音速｜影子拦截｜争议", "可用影子多向拦截和预判，但不等同全身高速移动。"],
        vitality: ["强化凡体｜特殊容器", "楼宇级生命阈值｜贤者之石/特殊生命结构｜争议", "生命依赖容器、贤者之石和人造人核心，不能按普通儿童肉身处理。"],
        healing: ["快速自愈", "极速自愈｜贤者之石", "可消耗贤者之石修复，资源耗尽或容器破坏会削弱。"],
        energy: ["墙体级能量", "楼宇级能量｜贤者之石/影子", "贤者之石资源和影子能力支撑持续战斗。"],
        energyRegen: ["缓慢回能", "中速回能｜贤者之石资源", "恢复依赖库存消耗，不是自然瞬时回能。"]
      }),
      notes: notes({
        penetration: "影子可切割、贯穿和束缚目标，属于多方向接触型高穿透，不按大范围爆破处理。攻击速度：普莱德的影子从可用阴影中伸展、分叉后切割或束缚目标，多方向影刺有各自延伸距离；黑暗环境扩大媒介，不代表瞬时命中。",
        resistance: "贤者之石和影子防护提供强续战，容器、光源和封锁条件是关键弱点。",
        sensing: "影子延伸和人造人经验可覆盖周边空间，仍受光照、容器和环境边界限制。",
        tactics: "擅长伪装成塞利姆、设伏、影子包围和心理压迫；依赖环境条件建立优势。",
        special: "影子操控、贤者之石再生、人造人核心、伪装与容器。",
        weakness: "强光、完全黑暗、容器破坏、贤者之石消耗和封锁会限制影子能力。",
        setting: "按漫画/FA线约定之日前后的普莱德记录，不使用2003版设定。",
        basis: "依据Fullmetal Alchemist Wiki角色入口与正篇普莱德影子、容器和贤者之石表现保守定级。"
      })
    })
  ]);
})();

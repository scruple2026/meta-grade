(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kenjaku",
      name: "羂索",
      en: "Kenjaku",
      ja: "羂索",
      affiliation: "诅咒师 / 死灭回游主导者",
      grade: "古代术师 / 夺舍术式",
      appearances: ["涩谷事变", "死灭回游"],
      timelineStatus: "死灭回游 / 夏油肉体",
      aliases: ["假夏油", "加茂宪伦", "虎杖母亲", "Kenjaku"],
      fandomSlug: "Kenjaku",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从咒术回战 worldbook 名字池补入；与夏油杰本人分列，主面板按占据夏油肉体后的羂索。"
      ],
      dimensions: dims({
        attack: ["楼宇级", "街区级｜咒灵操术/领域/反重力", "咒灵操术、领域和反重力形成复合峰值。"],
        defense: ["墙体级", "楼宇级｜反转术式/反重力", "本体防御依赖术式、咒力和反转术式，不等同咒灵库存总量。"],
        movement: ["亚音速", "音速", "古代术师级机动。"],
        reaction: ["亚音速", "音速", "能处理高阶术师与死灭回游级别战斗。"],
        vitality: ["精锐韧体", "精锐韧体｜反转术式/夺舍", "当前肉体可被杀伤，长期生存依赖夺舍机制。"],
        healing: ["快速自愈｜反转术式", "快速自愈｜反转术式", "可用反转术式恢复，但非无限再生。"],
        energy: ["楼宇级能量", "街区级能量｜咒灵操术/结界术", "咒力量、库存咒灵和结界资源丰富。"],
        energyRegen: ["快速回能", "快速回能｜咒力恢复", "续航强但库存咒灵和领域会消耗。"]
      }),
      notes: notes({
        penetration: "咒灵操术、极之番、反重力系统和领域可从多角度制造破防；夺舍和结界规则不按纯破坏档处理。攻击速度：羂索释放咒灵、发动极之番、启用反重力和展开领域各有不同起手；咒灵自身接战与领域内生效不能归成羂索的一项弹速。",
        resistance: "反转术式、反重力和咒灵协防提升生存，但当前肉体仍可被伏击、斩杀或能力克制。",
        sensing: "长期知识、结界术、咒力感知和布置能力很强，擅长通过规则系统获取信息差。",
        tactics: "极强长期布局者，擅长制造死灭回游、操纵阵营、隐藏术式和利用宿主能力；遭遇战也会依靠预设后手。",
        special: "夺舍术式、咒灵操术、反重力系统、领域展开、结界术、反转术式。",
        weakness: "当前肉体被摧毁会中断战斗；能力组合需要情报和资源，遭遇突然高杀伤伏击时仍会暴露风险。",
        setting: "按占据夏油杰肉体、死灭回游阶段的羂索记录，不与夏油杰本人混同。",
        basis: "依据羂索在涩谷事变、死灭回游、与九十九由基等战斗中的咒灵操术、结界、反重力和反转术式表现定级。"
      })
    })
  ]);
})();

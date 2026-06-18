(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "hajime-kashimo",
      name: "鹿紫云一",
      en: "Hajime Kashimo",
      ja: "鹿紫雲一",
      affiliation: "死灭回游泳者 / 古代术师",
      grade: "古代术师 / 电气咒力",
      appearances: ["死灭回游", "新宿决战"],
      timelineStatus: "新宿决战 / 幻兽琥珀一次性释放",
      aliases: ["鹿紫云", "Kashimo", "Hajime Kashimo", "幻兽琥珀", "Mythical Beast Amber"],
      fandomSlug: "Hajime_Kashimo",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Hajime Kashimo",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Hajime_Kashimo",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对鹿紫云一、电气咒力、死灭回游和幻兽琥珀一次性术式；不把一次性自毁峰值写成常态。"
        }
      ],
      revisionNotes: ["从咒术回战改 worldbook 的鹿紫云 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜幻兽琥珀｜一次性", "电气咒力和一次性术式极强，但主破坏规模保守收束。"],
        defense: ["墙级", "楼级｜咒力强化", "肉体和咒力强化强，但缺少反转术式长期恢复。"],
        movement: ["音速", "超音速｜幻兽琥珀", "电气特性和术式释放显著提高机动与攻击节奏。"],
        reaction: ["音速", "超音速｜古代术师", "可与顶级战斗者高速交锋。"],
        vitality: ["精锐韧体", "精锐韧体｜一次性术式代价", "战斗意志和肉体强，但幻兽琥珀会毁坏身体。"],
        healing: ["无自愈", "无自愈", "缺少稳定自愈表现，依赖速攻和输出。"],
        energy: ["楼级能量", "街区级能量｜电气咒力/幻兽琥珀", "咒力性质和一次性术式带来高峰值。"],
        energyRegen: ["快速回能", "快速回能｜电气咒力", "战斗续航强，但一次性术式不可长期维持。"]
      }),
      notes: notes({
        penetration: "电气咒力可形成必中式电击和高速打击；幻兽琥珀是一次性身体改造峰值。",
        resistance: "咒力强化和战斗经验强，但缺少反转术式和长期恢复保障。",
        sensing: "战斗直觉、咒力性质利用和对强者的判断突出。",
        tactics: "偏速攻和正面强杀，善于利用电荷累积与对手资源窗口。",
        special: "电气咒力、必中式电击、幻兽琥珀、古代术师经验。",
        weakness: "幻兽琥珀一次性且会毁坏身体；缺少反转术式，持久战容错有限。",
        setting: "按新宿决战释放术式的鹿紫云记录，但一次性峰值必须标注来源和代价。",
        basis: "worldbook只用于抽取鹿紫云姓名；定级依据公开角色资料入口和死灭回游/新宿决战中的电气咒力表现。"
      })
    })
  ]);
})();

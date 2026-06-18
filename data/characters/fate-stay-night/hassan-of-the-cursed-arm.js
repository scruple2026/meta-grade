(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];

  if (!work) {
    throw new Error("Fate/stay night work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hassan-of-the-cursed-arm",
      name: "咒腕哈桑",
      en: "Hassan of the Cursed Arm",
      ja: "呪腕のハサン",
      affiliation: "Assassin职阶 / 真Assassin",
      grade: "从者 / 暗杀者",
      appearances: ["Heaven's Feel"],
      timelineStatus: "第五次圣杯战争 / Heaven's Feel",
      aliases: ["真Assassin", "哈桑·萨巴赫", "咒腕", "妄想心音", "Zabaniya"],
      fandomSlug: "Hassan_of_the_Cursed_Arm",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Hassan of the Cursed Arm",
          url: "https://typemoon.fandom.com/wiki/Hassan_of_the_Cursed_Arm",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对咒腕哈桑、真Assassin、妄想心音、气息遮断和 Heaven's Feel 语境。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的哈桑·萨巴赫 key/comment 补入；未采用 worldbook 正文描述。",
        "妄想心音作为条件特殊杀伤，不直接提高攻击能级破坏范围。"
      ],
      dimensions: dims({
        attack: ["房屋级", "楼级｜妄想心音/暗杀条件｜争议", "物理破坏范围不高，妄想心音是高价值条件杀伤。"],
        defense: ["墙级", "房屋级｜灵基/回避", "防御不突出，依赖隐蔽、回避和突袭。"],
        movement: ["亚音速", "音速｜Assassin身法/气息遮断", "高速潜行和暗杀移动。"],
        reaction: ["亚音速", "音速｜从者反应/暗杀", "反应足以执行从者级突袭，但低于正面高端从者。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜灵基/影条件｜争议", "灵基提高存续，HF影相关条件不并入常态。"],
        healing: ["中速自愈｜灵基/供魔", "快速自愈｜供魔/影条件｜争议", "恢复依赖灵基和供魔，特殊条件另标。"],
        energy: ["房屋级能量", "楼级能量｜妄想心音", "能量主要用于气息遮断和宝具暗杀。"],
        energyRegen: ["中速回能", "快速回能｜供魔/潜伏", "供魔支撑潜伏与宝具窗口。"]
      }),
      notes: notes({
        penetration: "妄想心音可通过复制/挤碎心脏实现条件即死式杀伤，不等同大范围破坏；需命中和条件成立。",
        resistance: "正面防御较弱，主要依赖气息遮断、奇袭和环境。",
        sensing: "Assassin 从者感知、潜伏和气息遮断适合伏击。",
        tactics: "擅长潜伏、偷袭、诱敌和利用 HF 路线混乱局面。",
        special: "真Assassin、气息遮断、妄想心音、咒腕、Heaven's Feel 影相关语境。",
        weakness: "正面战能力较弱，宝具需条件和命中；被识破位置后风险很高。",
        setting: "按第五次圣杯战争 Heaven's Feel 真Assassin记录。",
        basis: "worldbook只用于抽取哈桑·萨巴赫/咒腕哈桑姓名；定级依据公开角色资料入口，妄想心音写入特殊杀伤而不抬高破坏档。"
      })
    })
  ]);
})();

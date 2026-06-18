(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Marvel Comics"];

  if (!work) {
    throw new Error("Marvel Comics work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "one-above-all",
      name: "One-Above-All",
      en: "One-Above-All",
      aliases: ["The One Above All", "TOAA", "Above-All-Others", "至高者", "至高存在"],
      affiliation: "Marvel 宇宙论",
      grade: "多元宇宙创世源头 / 最高创造者",
      appearances: ["Marvel Comics 宇宙论资料"],
      timelineStatus: "Marvel Comics 宇宙论源头口径",
      fandomSlug: "",
      confidence: "disputed",
      evidenceType: ["官方资料", "宇宙论设定", "高风险无限档"],
      sourceQuality: "specific",
      links: [
        {
          type: "official",
          scope: "官方角色页",
          label: "Marvel.com: Living Tribunal",
          url: "https://www.marvel.com/characters/living-tribunal",
          lang: "en",
          authority: "official",
          medium: "official-site",
          claim: "用于核对 Living Tribunal 的唯一上级、One-Above-All 生命源头表述和同名 Celestial 区分。"
        }
      ],
      evidenceLinks: [
        {
          type: "official",
          scope: "Living Tribunal 与 One-Above-All 层级",
          label: "Marvel.com: Living Tribunal",
          url: "https://www.marvel.com/characters/living-tribunal",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "Marvel 官方角色页用于辅助核对 Living Tribunal 与 One-Above-All 的层级关系、生命源头表述和同名 Celestial 区分；因该页含编辑验证提示，不单独作为高风险无限档依据。"
        },
        {
          type: "official",
          scope: "多元宇宙创造者",
          label: "Meet the Living Tribunal, the Multiversal Arbiter of Cosmic Balance",
          url: "https://www.marvel.com/articles/comics/living-tribunal-history-powers-explained",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "Marvel 官方文章将 One-Above-All 描述为 Living Tribunal 所服务的全能多元宇宙创造者，并说明 Living Tribunal 职责覆盖 Marvel Multiverse 的多重现实。"
        },
        {
          type: "official",
          scope: "创世与生命源头",
          label: "A Journey Through the Marvel Mythological Universe",
          url: "https://www.marvel.com/articles/comics/a-journey-through-the-marvel-mythological-universe",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "Marvel 官方文章把 One-Above-All 放在宇宙论最高层，并称其带来多元宇宙和其中生命；本站据此只作非有限收束档，不继续比较更大无限。"
        }
      ],
      revisionNotes: [
        "正式 roster 无限档示例：覆盖攻击能级、防御能级、生命体量和能量总量四个仍有无限尺度的维度。",
        "无限档均为宇宙论依赖和高风险口径；不比较更大无限，不等同普通近战、投射物或可量化单次炮击。"
      ],
      dimensions: dims({
        attack: [
          "无限级｜创世权能｜宇宙论依赖｜争议",
          "无限级｜创世权能｜宇宙论依赖｜争议",
          "按官方宇宙论中多元宇宙创造者/源头定位记录；不等同普通战斗攻击或可见破坏范围。"
        ],
        defense: [
          "无限级｜源头权能｜非普通承伤｜宇宙论依赖｜争议",
          "无限级｜源头权能｜非普通承伤｜宇宙论依赖｜争议",
          "按宇宙论源头和最高层级存在保守写入；不是普通肉身硬吃画面。"
        ],
        movement: [
          "不适用",
          "不适用",
          "源头型宇宙论存在不按常规空间位移定速；不得由全在、创世或叙事地位换算移动速度。"
        ],
        reaction: [
          "不适用",
          "不适用",
          "资料不提供可换算的战斗反应速度；不得由全知、全在或最高层级称号直接换算。"
        ],
        vitality: [
          "无限级生命结构｜创世源头｜宇宙论依赖｜争议",
          "无限级生命结构｜创世源头｜宇宙论依赖｜争议",
          "仅按生命源头/多元宇宙创世主体的非有限口径记录；不等同普通再生速度或无限寿命。"
        ],
        healing: [
          "不适用",
          "不适用",
          "未按受伤后恢复速率定级；生死、复归或源头存在性属于宇宙论与特殊权能口径。"
        ],
        energy: [
          "无限级能量｜创世权能｜宇宙论依赖｜争议",
          "无限级能量｜创世权能｜宇宙论依赖｜争议",
          "按多元宇宙创世和生命源头的资源/权能上限记录；不能自动反推每次普通攻击效果。"
        ],
        energyRegen: [
          "不适用",
          "不适用",
          "无限或不耗竭资源不写作回能速度；若讨论源头供能或不耗能机制，应读能量总量和特殊权能。"
        ]
      }),
      notes: notes({
        penetration: "主杀伤口径来自创世、重构和源头权能，不等同普通攻击范围、近战力或投射物；只有在明确影响非有限结构时才作为无限级依据。",
        resistance: "防御无限是宇宙论源头与最高层级存在的保守归纳，非普通肉身承伤画面；不能外推为对所有概念、叙事或规则攻击绝对免疫。",
        sensing: "官方资料支持其位于 Living Tribunal 之上的宇宙论源头；全知、全在、作者化身印象不换算为反应速度或先手优势。",
        tactics: "不作为常规战斗角色录入；对战裁定应优先读取宇宙论依赖、非普通战斗用途和证据争议限制。",
        special: "多元宇宙创世、生命源头、支配或高于 Living Tribunal 的宇宙论层级；这些权能用于解释无限档来源，不新增更高排序档。",
        weakness: "缺少可复核的普通战斗流程、承伤画面、速度表现和资源消耗；多数主档为高风险宇宙论归纳，不应外推到所有战斗场景。",
        setting: "Marvel 官方资料将 One-Above-All 作为 Living Tribunal 的唯一上级、全能多元宇宙创造者和生命源头。本站只收束为无限级，不比较多元宇宙、Omniverse、无限盒子或指数塔无限之间的大小。",
        basis: "依据 Marvel.com Living Tribunal 官方角色页、Living Tribunal 官方文章和 Marvel mythological universe 官方文章保守录入。若后续具体卷期只能证明有限宇宙或有限多元宇宙，应降为有限宇宙级或保留争议。"
      })
    })
  ]);
})();

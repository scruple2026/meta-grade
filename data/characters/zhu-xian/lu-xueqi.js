(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["诛仙"];

  if (!work) {
    throw new Error("诛仙 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lu-xueqi",
      name: "陆雪琪",
      en: "Lu Xueqi",
      ja: "",
      affiliation: "青云门 / 小竹峰",
      grade: "修真者 / 天琊神剑",
      appearances: ["道友先上我断后", "诛仙"],
      timelineStatus: "诛仙主线 / 青云门核心战斗角色",
      aliases: ["雪琪", "陆师姐", "小竹峰弟子", "天琊神剑"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["作品资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Zhu Xian Wiki: Lu Xueqi",
          url: "https://zhu-xian.fandom.com/wiki/Lu_Xueqi",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对陆雪琪为《诛仙》女主角、小竹峰负责人和青云门新一代核心修真者；不直接作为跨界量级依据。"
        },
        {
          type: "source",
          scope: "作品与角色交叉入口",
          label: "Wikipedia: Zhu Xian (novel)",
          url: "https://en.wikipedia.org/wiki/Zhu_Xian_(novel)",
          lang: "en",
          authority: "cross-reference",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于交叉核对陆雪琪作为小说女性主角和 Qing Yun 阵营角色；具体战力需补原文。"
        }
      ],
      revisionNotes: [
        "从《道友先上我断后》worldbook 的人物详情：陆雪琪 key/comment 补入；未采用 worldbook 正文描述。",
        "公开入口能确认主要角色和天琊神剑语境，但缺少本站可直接引用的原文章节证据，因此主面板先保守占位。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜天琊神剑/神剑御雷真诀｜争议", "按青云门主战修真者和法宝飞剑语境保守记录；缺少原文章节前不抬高。"],
        defense: ["墙级", "楼级｜道法防护/法宝", "以修真护体、法宝和主线战斗承压作低档占位，不按境界名号外推。"],
        movement: ["亚音速", "音速｜御剑/道法机动｜争议", "修真者御剑与法术机动明显高于凡人，但具体速度待补原文。"],
        reaction: ["亚音速", "音速｜剑诀应对｜争议", "能参与青云门核心战斗；跨界速度只作中低档保守记录。"],
        vitality: ["强化凡体", "精锐韧体｜修真者体质", "仍按人形修真者生命体量处理，不把法宝或道法等同生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜修真疗伤/调息｜争议", "修真疗伤和调息不等同瞬间再生。"],
        energy: ["墙级能量", "楼级能量｜天琊神剑/青云道法｜争议", "能量池按青云道法和天琊神剑使用记录，需原文补证。"],
        energyRegen: ["中速回能", "中速回能｜调息/道法循环", "续航依赖修为、法宝和调息，不写成无限资源。"]
      }),
      notes: notes({
        penetration: "天琊神剑和青云剑诀偏飞剑/雷法穿透与爆发；缺少原文章节时不把法宝名号直接抬到大范围破坏。",
        resistance: "道法护体和修真体质提升承伤，但仍是人形本体，面对远高量级火力没有自动免伤。",
        sensing: "修真者常规感知、剑诀判断和门派经验可辅助应敌；远域索敌与预知能力待补。",
        tactics: "青云门小竹峰核心弟子，剑术和道法执行稳定；情感线和门派立场会影响行动选择。",
        special: "天琊神剑、青云门道法、神剑御雷真诀语境、御剑机动。",
        weakness: "公开入口缺少可直接量化的原文章节；法宝爆发、道法消耗和受伤状态需要逐段确认。",
        setting: "按《诛仙》小说主线陆雪琪记录，不混入手游、电视剧或其他改编战力。",
        basis: "worldbook只用于抽取陆雪琪姓名；定级依据来自公开作品/角色入口，具体量级按低风险保守占位，后续需补小说原文证据。"
      })
    })
  ]);
})();

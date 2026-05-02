(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一拳超人"];

  if (!work) {
    throw new Error("一拳超人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "garou",
      name: "饿狼",
      en: "Garou",
      ja: "ガロウ",
      category: "核心反派",
      affiliation: "英雄狩猎者",
      grade: "怪人化武术家 / 宇宙恐惧模式峰值",
      appearances: ["正篇"],
      timelineStatus: "怪人化到宇宙恐惧模式峰值",
      aliases: [],
      fandomSlug: "Garou",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Garou",
          url: "https://vsbattles.fandom.com/wiki/Garou",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核英雄猎人、怪人化和宇宙恐惧模式的分阶段跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：ワンパンマン ヒーロー大全",
          url: "https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-880549-8",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对早期英雄协会、怪人和角色数据；宇宙恐惧模式需以后续原作卷册为主，不由此书直接支撑。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：ワンパンマン 27",
          url: "https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-883336-1&mode=1",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对怪人协会篇中饿狼与黑光等阶段性成长；不直接支撑宇宙恐惧峰值。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：ワンパンマン 34",
          citation: "ONE・村田雄介『ワンパンマン』34巻, 集英社, 2025年8月4日, ISBN 978-4-08-884676-7。",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对宇宙恐惧模式饿狼与埼玉的宇宙战场交锋；行星级/亚光速等本站峰值仍按争议处理。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "One-Punch Man Wiki：Garou",
          url: "https://onepunchman.fandom.com/wiki/Garou",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对饿狼角色资料、形态变化和主要战斗入口。"
        }
      ],
      defaultTimelineKey: "cosmic-fear",
      timelinePanels: [
        {
          key: "hero-hunter",
          label: "英雄狩猎期",
          status: "人类武术家",
          dimensions: dims({
            attack: ["楼级", "街区级｜武术集中打击", "流水岩碎拳以单体破坏和技巧为主。"],
            defense: ["楼级", "街区级｜适应/意志", "承伤强但仍是人类身体基础。"],
            movement: ["超音速", "高超音速｜争议", "高速近战和闪避突出。"],
            reaction: ["超音速", "高超音速｜争议", "可应对多名强者围攻。"],
            vitality: ["精锐韧体", "街区级生命阈值｜意志", "异常承伤但未进入怪人高峰。"],
            healing: ["常规自愈", "快速自愈｜战斗适应", "恢复主要来自耐性和适应。"],
            energy: ["楼级能量", "街区级能量", "无传统能量池，按体能和战斗输出记录。"],
            energyRegen: ["快速回能", "快速回能", "战斗中成长但会受伤疲劳。"]
          }),
          notes: "不计入怪人化和宇宙恐惧模式。"
        },
        {
          key: "monsterized",
          label: "怪人化",
          status: "怪人化适应与成长",
          dimensions: dims({
            attack: ["街区级", "城市级｜怪人化｜争议", "适应和肉体成长提高输出。"],
            defense: ["街区级", "城市级｜怪人化｜争议", "耐久和恢复显著提升。"],
            movement: ["高超音速", "高超音速｜争议", "高端速度仍保守留争议。"],
            reaction: ["高超音速", "高超音速｜争议", "可应对极高速肉搏。"],
            vitality: ["街区级生命阈值", "城市级生命阈值｜怪人化｜争议", "生命阈值随怪人化上升。"],
            healing: ["快速自愈", "极速自愈｜怪人化", "恢复和适应显著。"],
            energy: ["街区级能量", "城市级能量｜怪人化｜争议", "以身体适应和输出记录。"],
            energyRegen: ["快速回能", "极速回能｜适应", "战斗中成长明显。"]
          }),
          notes: "宇宙恐惧前的稳定高峰。"
        },
        {
          key: "cosmic-fear",
          label: "宇宙恐惧模式",
          status: "外源/特殊峰值",
          dimensions: dims({
            attack: ["街区级", "行星级｜宇宙恐惧模式｜争议", "常态怪人化以武术和肉体破坏为主；宇宙恐惧模式属于特殊高峰。"],
            defense: ["街区级", "行星级｜宇宙恐惧模式｜争议", "怪人化适应和耐久极强，峰值仍标争议。"],
            movement: ["高超音速", "亚光速｜宇宙恐惧模式｜争议", "高端速度跨幅极大，按争议峰值记录。"],
            reaction: ["高超音速", "亚光速｜宇宙恐惧模式｜争议", "可复制和应对极高速战斗。"],
            vitality: ["街区级生命阈值", "行星级生命结构｜宇宙恐惧模式｜争议", "怪人化和适应性提升生命结构。"],
            healing: ["快速自愈", "极速自愈｜怪人化", "怪人化期间恢复和适应能力显著。"],
            energy: ["街区级能量", "行星级能量｜宇宙恐惧模式｜争议", "宇宙恐惧模式涉及外源/模仿性高峰。"],
            energyRegen: ["快速回能", "极速回能｜适应", "战斗中成长与适应显著，但非稳定无限。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "行星级｜宇宙恐惧模式｜争议", "常态怪人化以武术和肉体破坏为主；宇宙恐惧模式属于特殊高峰。"],
        defense: ["街区级", "行星级｜宇宙恐惧模式｜争议", "怪人化适应和耐久极强，峰值仍标争议。"],
        movement: ["高超音速", "亚光速｜宇宙恐惧模式｜争议", "高端速度跨幅极大，按争议峰值记录。"],
        reaction: ["高超音速", "亚光速｜宇宙恐惧模式｜争议", "可复制和应对极高速战斗。"],
        vitality: ["街区级生命阈值", "行星级生命结构｜宇宙恐惧模式｜争议", "怪人化和适应性提升生命结构。"],
        healing: ["快速自愈", "极速自愈｜怪人化", "怪人化期间恢复和适应能力显著。"],
        energy: ["街区级能量", "行星级能量｜宇宙恐惧模式｜争议", "宇宙恐惧模式涉及外源/模仿性高峰。"],
        energyRegen: ["快速回能", "极速回能｜适应", "战斗中成长与适应显著，但非稳定无限。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "流水岩碎拳、怪人化、复制、宇宙恐惧模式。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据饿狼从英雄狩猎到宇宙恐惧模式的成长表现定级，高峰均标争议和状态来源。"
      })
    })
  ]);
})();

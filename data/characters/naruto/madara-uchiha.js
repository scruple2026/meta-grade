(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "madara-uchiha",
      name: "宇智波斑",
      en: "Madara Uchiha",
      ja: "うちはマダラ",
      category: "核心反派",
      affiliation: "宇智波一族 / 晓幕后",
      grade: "六道级反派",
      appearances: ["终结谷回忆", "第四次忍界大战", "六道斑"],
      timelineStatus: "第四次忍界大战 / 十尾人柱力峰值",
      aliases: ["斑", "六道斑", "十尾人柱力"],
      fandomSlug: "Madara_Uchiha",
      confidence: "review",
      evidenceType: ["原作表现", "设定书入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Madara Uchiha",
          url: "https://vsbattles.fandom.com/wiki/Madara_Uchiha",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核秽土斑、轮回眼斑和十尾人柱力斑的跨界高端量级口径；本站保留争议标签。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：NARUTO―ナルト―［秘伝・陣の書］",
          citation: "岸本斉史『NARUTO―ナルト―［秘伝・陣の書］キャラクターオフィシャルデータBOOK』集英社, 2014年。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对第四次忍界大战、轮回眼、十尾人柱力与六道相关资料；能级换算仍按本站 reference 保守处理。"
        }
      ],
      defaultTimelineKey: "ten-tails-jinchuriki",
      timelinePanels: [
        {
          key: "valley-ems",
          label: "终结谷 / 永恒万花筒",
          status: "永恒万花筒、完全体须佐、九尾操控",
          dimensions: dims({
            attack: ["街区级", "国家级｜完全体须佐/九尾｜争议", "完全体须佐和九尾协同是高端峰值，范围换算争议大。"],
            defense: ["街区级", "国家级｜完全体须佐｜争议", "须佐能乎承担主要防御，不等同本体裸身硬抗。"],
            movement: ["超音速", "高超音速｜争议", "顶级忍者近战与须佐战斗速度极高。"],
            reaction: ["超音速", "高超音速｜写轮眼｜争议", "写轮眼预判和战斗经验显著提升反应。"],
            vitality: ["街区级生命阈值", "国家级生命阈值｜须佐/九尾协同｜争议", "生命阈值主要来自须佐防护和高端查克拉。"],
            healing: ["无自愈", "常规自愈｜外部/柱间细胞前不稳定", "终结谷时期不按稳定自愈处理。"],
            energy: ["街区级能量", "国家级能量｜须佐/九尾｜争议", "查克拉规模极高，但不把每次斩击都等同峰值。"],
            energyRegen: ["快速回能", "快速回能｜宇智波查克拉", "高强度瞳术仍有消耗。"]
          }),
          notes: "不计入轮回眼、秽土无限恢复和十尾人柱力。"
        },
        {
          key: "edo-rinnegan",
          label: "忍界大战 / 秽土轮回眼",
          status: "秽土转生、轮回眼、木遁与须佐",
          dimensions: dims({
            attack: ["街区级", "国家级｜轮回眼/木遁/须佐｜争议", "陨石、木遁和须佐峰值进入高端争议区。"],
            defense: ["街区级", "国家级｜须佐/秽土恢复｜争议", "秽土恢复是复原机制，不等同常规防御。"],
            movement: ["超音速", "高超音速｜争议", "可参与忍界大战高端战斗。"],
            reaction: ["超音速", "高超音速｜轮回眼/写轮眼｜争议", "瞳术和经验强化捕捉。"],
            vitality: ["街区级生命阈值", "国家级生命阈值｜秽土恢复｜争议", "秽土状态难杀来自复原和封印需求。"],
            healing: ["极速自愈｜秽土转生", "极速自愈｜秽土转生", "秽土转生可复原身体损伤，需封印处理。"],
            energy: ["街区级能量", "国家级能量｜轮回眼/须佐｜争议", "秽土与轮回眼术式规模很高。"],
            energyRegen: ["极速回能｜秽土转生", "极速回能｜秽土转生", "秽土状态续航异常，不代表生前常态。"]
          }),
          notes: "秽土恢复单独标注，不直接抬高肉体防御。"
        },
        {
          key: "ten-tails-jinchuriki",
          label: "六道斑 / 十尾人柱力",
          status: "十尾人柱力、轮回写轮眼、求道玉",
          dimensions: dims({
            attack: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "六道与十尾查克拉带来极高峰值；求道玉、无限月读等机制另写特殊项。"],
            defense: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "防御依赖六道体质、求道玉和恢复，不等同常态肉身。"],
            movement: ["超音速", "高超音速｜六道模式｜争议", "高端战斗速度很高，但不按无证光速。"],
            reaction: ["超音速", "高超音速｜六道感知｜争议", "六道感知和瞳术提升反应。"],
            vitality: ["街区级生命阈值", "大陆级生命阈值｜十尾人柱力｜争议", "十尾人柱力和六道体质显著提升生命阈值。"],
            healing: ["快速自愈", "极速自愈｜十尾人柱力", "可快速恢复重伤，但封印、阴阳遁和特定机制仍危险。"],
            energy: ["街区级能量", "大陆级能量｜十尾查克拉｜争议", "十尾总量极高，仍需区分总量、单击和特殊术式。"],
            energyRegen: ["快速回能", "极速回能｜十尾查克拉", "十尾人柱力续航极强。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "六道与十尾查克拉带来极高峰值；求道玉、无限月读等机制另写特殊项。"],
        defense: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "防御依赖六道体质、求道玉和恢复，不等同常态肉身。"],
        movement: ["超音速", "高超音速｜六道模式｜争议", "高端战斗速度很高，但不按无证光速。"],
        reaction: ["超音速", "高超音速｜六道感知｜争议", "六道感知和瞳术提升反应。"],
        vitality: ["街区级生命阈值", "大陆级生命阈值｜十尾人柱力｜争议", "十尾人柱力和六道体质显著提升生命阈值。"],
        healing: ["快速自愈", "极速自愈｜十尾人柱力", "可快速恢复重伤，但封印、阴阳遁和特定机制仍危险。"],
        energy: ["街区级能量", "大陆级能量｜十尾查克拉｜争议", "十尾总量极高，仍需区分总量、单击和特殊术式。"],
        energyRegen: ["快速回能", "极速回能｜十尾查克拉", "十尾人柱力续航极强。"]
      }),
      notes: notes({
        penetration: "求道玉、轮回眼术式和完全体须佐有高穿透/高压制能力；无限月读属于大范围精神/瞳术机制，不直接换算为破坏规模。",
        resistance: "六道体质、求道玉和恢复力很强；封印、阴阳遁、空间转移和特定六道力量仍可威胁。",
        special: "永恒万花筒、轮回眼、须佐能乎、木遁、秽土转生恢复、十尾人柱力、求道玉、无限月读。",
        weakness: "高峰状态依赖十尾与六道条件；秽土和十尾状态均不是普通生前常态。",
        setting: "按第四次忍界大战十尾人柱力斑作为主面板，早期和秽土状态拆入时间线。",
        basis: "依据终结谷回忆、第四次忍界大战中完全体须佐、轮回眼、木遁、秽土恢复和十尾人柱力表现保守定级；大陆级相关均保留争议。"
      })
    })
  ]);
})();

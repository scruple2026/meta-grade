(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "obito-uchiha",
      name: "宇智波带土",
      en: "Obito Uchiha",
      ja: "うちはオビト",
      category: "核心反派",
      affiliation: "晓 / 十尾人柱力",
      grade: "空间忍术 / 十尾人柱力",
      appearances: ["神无毗桥回忆", "晓幕后", "第四次忍界大战"],
      timelineStatus: "第四次忍界大战 / 十尾人柱力峰值",
      aliases: ["带土", "阿飞", "面具男", "十尾人柱力"],
      fandomSlug: "Obito_Uchiha",
      confidence: "review",
      evidenceType: ["原作表现", "设定书入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Obito Uchiha",
          url: "https://vsbattles.fandom.com/wiki/Obito_Uchiha",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核神威、轮回眼、十尾人柱力带土的跨界量级口径；本站保留争议标签。"
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
          claim: "用于核对第四次忍界大战、神威、轮回眼和十尾人柱力相关资料。"
        }
      ],
      defaultTimelineKey: "ten-tails-jinchuriki",
      timelinePanels: [
        {
          key: "masked-kamui",
          label: "面具男 / 神威虚化",
          status: "万花筒神威、柱间细胞、晓幕后",
          dimensions: dims({
            attack: ["楼级", "街区级｜神威/木遁", "主要杀伤来自空间转移、锁链、木遁和战术压制。"],
            defense: ["墙级", "街区级｜神威虚化｜空间", "虚化是空间规避，不等同肉身防御。"],
            movement: ["亚音速", "超音速｜瞬身/神威", "神威是特殊位移，不换算连续速度。"],
            reaction: ["亚音速", "超音速｜写轮眼｜争议", "写轮眼与神威时机提升应对能力。"],
            vitality: ["精锐韧体", "街区级生命阈值｜柱间细胞", "柱间细胞和改造体质提升续战。"],
            healing: ["快速自愈｜柱间细胞", "快速自愈｜柱间细胞", "可恢复明显伤势但并非无限再生。"],
            energy: ["楼级能量", "街区级能量｜神威/木遁", "空间忍术消耗大。"],
            energyRegen: ["快速回能", "快速回能｜柱间细胞", "续航强但存在瞳术负担。"]
          }),
          notes: "不计入轮回眼外道魔像和十尾人柱力。"
        },
        {
          key: "war-rinnegan",
          label: "忍界大战 / 轮回眼带土",
          status: "轮回眼、尾兽控制、外道魔像",
          dimensions: dims({
            attack: ["街区级", "国家级｜尾兽/外道魔像｜争议", "尾兽与外道魔像属于外部控制资源，峰值显式标注。"],
            defense: ["街区级", "国家级｜尾兽/外道魔像协同｜争议", "防御和承压来自自身、神威和外部资源协同。"],
            movement: ["超音速", "高超音速｜争议", "忍界大战高端机动。"],
            reaction: ["超音速", "高超音速｜轮回眼/写轮眼｜争议", "瞳术和经验强化反应。"],
            vitality: ["街区级生命阈值", "国家级生命阈值｜外道魔像协同｜争议", "生命阈值不单纯来自本体。"],
            healing: ["快速自愈｜柱间细胞", "快速自愈｜柱间细胞", "仍依赖特殊体质恢复。"],
            energy: ["街区级能量", "国家级能量｜尾兽控制｜争议", "控制资源与个人查克拉分开理解。"],
            energyRegen: ["快速回能", "快速回能｜柱间细胞", "轮回眼和控制尾兽消耗明显。"]
          }),
          notes: "此阶段峰值包含外道魔像与尾兽控制，不视为单体常规输出。"
        },
        {
          key: "ten-tails-jinchuriki",
          label: "十尾人柱力 / 六道带土",
          status: "十尾人柱力、求道玉、六道体质",
          dimensions: dims({
            attack: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "十尾与六道体质带来高端峰值，求道玉另有特殊消解性质。"],
            defense: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "防御依赖六道体质、求道玉与恢复。"],
            movement: ["超音速", "高超音速｜六道模式｜争议", "高端战斗速度很高，但不按无证光速。"],
            reaction: ["超音速", "高超音速｜六道感知｜争议", "六道感知和瞳术提升反应。"],
            vitality: ["街区级生命阈值", "大陆级生命阈值｜十尾人柱力｜争议", "十尾人柱力显著提高生命阈值。"],
            healing: ["快速自愈", "极速自愈｜十尾人柱力", "可快速恢复重伤，但封印和尾兽抽离仍危险。"],
            energy: ["街区级能量", "大陆级能量｜十尾查克拉｜争议", "十尾总量极高，单击输出和总量分开。"],
            energyRegen: ["快速回能", "极速回能｜十尾查克拉", "十尾状态续航极强。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "十尾与六道体质带来高端峰值，求道玉另有特殊消解性质。"],
        defense: ["街区级", "大陆级｜十尾人柱力/求道玉｜争议", "防御依赖六道体质、求道玉与恢复。"],
        movement: ["超音速", "高超音速｜六道模式｜争议", "高端战斗速度很高，但不按无证光速。"],
        reaction: ["超音速", "高超音速｜六道感知｜争议", "六道感知和瞳术提升反应。"],
        vitality: ["街区级生命阈值", "大陆级生命阈值｜十尾人柱力｜争议", "十尾人柱力显著提高生命阈值。"],
        healing: ["快速自愈", "极速自愈｜十尾人柱力", "可快速恢复重伤，但封印和尾兽抽离仍危险。"],
        energy: ["街区级能量", "大陆级能量｜十尾查克拉｜争议", "十尾总量极高，单击输出和总量分开。"],
        energyRegen: ["快速回能", "极速回能｜十尾查克拉", "十尾状态续航极强。"]
      }),
      notes: notes({
        penetration: "神威属于空间转移/虚化，求道玉有特殊消解性质；这些不直接换算为更高破坏范围。",
        resistance: "虚化可规避接触型攻击，十尾状态恢复强；但持续时间、实体化窗口、封印和尾兽抽离是关键限制。",
        special: "神威空间、写轮眼、轮回眼、柱间细胞、外道魔像、尾兽控制、十尾人柱力、求道玉。",
        weakness: "神威攻防转换存在窗口；十尾人柱力状态受意志、尾兽和封印条件影响。",
        setting: "按第四次忍界大战十尾人柱力带土作为主面板，面具男和轮回眼阶段拆入时间线。",
        basis: "依据带土在晓幕后、第四次忍界大战中神威、轮回眼、尾兽控制和十尾人柱力表现定级。"
      })
    })
  ]);
})();

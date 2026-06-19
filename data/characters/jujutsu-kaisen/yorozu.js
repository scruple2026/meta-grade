(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yorozu",
      name: "万",
      en: "Yorozu",
      ja: "万",
      affiliation: "死灭回游泳者 / 古代术师",
      grade: "构筑术式 / 三重疾苦",
      appearances: ["死灭回游"],
      timelineStatus: "死灭回游至伏黑津美纪受肉体",
      aliases: ["Yorozu", "万", "伏黑津美纪受肉体", "构筑术式", "Construction", "三重疾苦", "True Sphere", "完全球"],
      fandomSlug: "Yorozu",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Yorozu",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Yorozu",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对万、古代术师、伏黑津美纪受肉体、构筑术式、三重疾苦和完全球；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的平安时代/万 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜完全球/领域必中｜规则杀伤｜争议", "构筑术式、液态金属和完全球威胁高；完全球按规则杀伤而非范围破坏。"],
        defense: ["楼级", "街区级｜虫甲/构筑术式｜争议", "虫甲与咒力强化提高承伤，但不等同无限硬度。"],
        movement: ["音速", "超音速｜虫甲/古代术师", "虫甲和古代术师体术带来高速机动。"],
        reaction: ["音速", "超音速｜古代术师", "能参与宿傩级战斗语境，但差距需保守标注。"],
        vitality: ["楼级生命阈值", "楼级生命阈值｜受肉体/虫甲", "受肉体和虫甲提高续战，本体仍可被击败。"],
        healing: ["无自愈", "中速自愈｜受肉体/咒力恢复语境｜争议", "缺少稳定反转术式自愈表现。"],
        energy: ["楼级能量", "街区级能量｜构筑术式/完全球", "构筑术式消耗高，峰值依赖完全球与领域窗口。"],
        energyRegen: ["快速回能", "快速回能｜古代术师", "高阶术师续航强，但构筑术式负担很高。"]
      }),
      notes: notes({
        penetration: "完全球和领域必中属于高风险规则杀伤；液态金属和虫甲提供常规近远输出。",
        resistance: "虫甲、构筑物和咒力强化能承伤，但面对十种影法术、领域对抗和高阶破坏仍有限。",
        sensing: "古代术师战斗感和对宿傩的执念强，索敌不按全域处理。",
        tactics: "偏执而进攻性强，能用构筑资源、虫甲和完全球逼迫对手处理高威胁。",
        special: "构筑术式、液态金属、虫甲、三重疾苦、完全球、领域必中语境、受肉体。",
        weakness: "构筑术式消耗巨大；完全球和领域依赖展开窗口，情感执念会影响判断。",
        setting: "按死灭回游伏黑津美纪受肉体的万记录，完全球不写成稳定无限攻击。",
        basis: "worldbook只用于抽取万姓名；定级依据公开角色资料入口和死灭回游中构筑术式、虫甲、完全球表现。"
      })
    })
  ]);
})();

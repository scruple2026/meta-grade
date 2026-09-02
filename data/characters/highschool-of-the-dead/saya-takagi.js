(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["学园默示录 HIGHSCHOOL OF THE DEAD"];
  if (!work) throw new Error("学园默示录 HIGHSCHOOL OF THE DEAD work metadata must load before character files.");

  registerCharacters([work.character({
    id: "saya-takagi",
    name: "高城沙耶",
    en: "Saya Takagi",
    ja: "高城沙耶",
    aliases: ["Saya", "Takagi", "天才优等生"],
    affiliation: "藤美学园幸存者小队 / 高城家",
    grade: "智囊 / 学生幸存者",
    appearances: ["丧尸爆发篇"],
    timelineStatus: "爆发期幸存者",
    fandomSlug: "Saya_Takagi",
    confidence: "medium",
    evidenceType: ["授权出版入口", "角色资料入口", "worldbook名字索引"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "source",
      scope: "英文授权出版入口",
      label: "Yen Press: Highschool of the Dead",
      url: "https://yenpress.com/series/highschool-of-the-dead",
      lang: "en",
      authority: "licensed",
      medium: "publisher",
      ratingEvidence: false,
      claim: "用于核对作品授权出版入口。"
    }, {
      type: "wiki",
      scope: "角色资料入口",
      label: "Highschool of the Dead Wiki: Saya Takagi",
      url: "https://highschoolofthedead.fandom.com/wiki/Saya_Takagi",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对高城沙耶的幸存者小队智囊、观察推理和高城家背景。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的高城沙耶 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖块级｜临时武器/枪械条件｜装备", "本体输出有限，峰值取决于临时武器或枪械。"],
        defense: ["凡人级", "凡人级｜队友保护/规避", "本体防御普通。"],
        movement: ["凡人速", "凡人速｜普通体能", "机动在人类学生范围。"],
        reaction: ["凡人速", "凡人速｜危机判断", "战术判断强，但身体反应不脱离人类。"],
        vitality: ["凡人肉身", "凡人肉身｜生还经历", "生命体量普通。"],
        healing: ["无自愈", "缓慢自愈｜急救/休整", "恢复依赖休整和医疗物资。"],
        energy: ["凡人能量", "砖块级能量｜工具/枪械资源｜装备", "资源来自工具、弹药和临时物资。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "依赖补给和休息。"]
      }),
    notes: notes({
        penetration: "本体杀伤有限，主要靠工具、临时武器或他人火力。攻击速度：沙耶缺少稳定战斗招式，临时工具和武器要先取用并按普通人体动作使用；同伴枪击或近战不能记作她本人的出手。",
        resistance: "普通学生肉身，依赖队友保护和路线规划。",
        sensing: "观察、推理、危机分析和团队资源判断突出。",
        tactics: "担任智囊，擅长情报整合、判断丧尸行为、路线和风险。",
        special: "高智商、观察推理、资源和局势分析、高城家背景。",
        weakness: "正面战斗能力有限，情绪和压力会影响判断。",
        setting: "按丧尸爆发期高城沙耶记录。",
        basis: "worldbook只用于抽取高城沙耶姓名；定级依据授权出版入口和角色资料入口，智力优势写入notes而非主战力抬档。"
      })
  })]);
})();

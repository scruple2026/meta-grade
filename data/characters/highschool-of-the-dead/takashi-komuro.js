(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["学园默示录 HIGHSCHOOL OF THE DEAD"];
  if (!work) throw new Error("学园默示录 HIGHSCHOOL OF THE DEAD work metadata must load before character files.");

  registerCharacters([work.character({
    id: "takashi-komuro",
    name: "小室孝",
    en: "Takashi Komuro",
    ja: "小室孝",
    aliases: ["Takashi", "Komuro"],
    affiliation: "藤美学园幸存者小队",
    grade: "主角 / 学生幸存者",
    appearances: ["丧尸爆发篇"],
    timelineStatus: "爆发期幸存者",
    fandomSlug: "Takashi_Komuro",
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
      label: "Highschool of the Dead Wiki: Takashi Komuro",
      url: "https://highschoolofthedead.fandom.com/wiki/Takashi_Komuro",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对小室孝的主角身份、藤美学园幸存者小队和武器/领导语境。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的小室孝 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖块级｜枪械/钝器/车辆｜装备", "常态是学生体能，峰值依赖枪械、钝器或车辆环境。"],
        defense: ["凡人级", "凡人级｜规避/团队支援", "本体为普通人类学生，主要靠规避和团队掩护。"],
        movement: ["凡人速", "凡人速｜奔跑/车辆", "徒步为普通人范围，车辆不写成本体速度。"],
        reaction: ["凡人速", "凡人速｜危机反应", "危机中反应较快，但不脱离人类范围。"],
        vitality: ["凡人肉身", "凡人肉身｜生还经历", "生还经历不等同更高生命体量。"],
        healing: ["无自愈", "缓慢自愈｜急救/休整", "恢复依赖休整和医疗物资。"],
        energy: ["凡人能量", "砖块级能量｜弹药/车辆资源｜装备", "资源来自弹药、燃料和临时物资。"],
        energyRegen: ["无回能", "缓慢回能｜补给/休息", "依赖补给和休息。"]
      }),
    notes: notes({
        penetration: "枪械、钝器和车辆可对丧尸形成有效杀伤，但属于装备或环境峰值。攻击速度：小室孝使用枪械时先瞄准击发，弹丸随后飞行；钝器按挥击动作，车辆撞击按车辆接近，三者不能合并。",
        resistance: "普通学生肉身，靠队友、掩体、距离和逃生路线降低风险。",
        sensing: "对危机、路线和队伍状况有较强判断。",
        tactics: "临场领导、资源调配和保护队友是主要优势。",
        special: "幸存者小队领导、枪械/钝器使用、车辆与环境利用。",
        weakness: "本体脆弱，弹药和团队支持不足时风险很高。",
        setting: "按丧尸爆发期小室孝记录。",
        basis: "worldbook只用于抽取小室孝姓名；定级依据授权出版入口和角色资料入口，武器峰值与本体分开记录。"
      })
  })]);
})();

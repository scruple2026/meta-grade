(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["学园默示录 HIGHSCHOOL OF THE DEAD"];
  if (!work) throw new Error("学园默示录 HIGHSCHOOL OF THE DEAD work metadata must load before character files.");

  registerCharacters([work.character({
    id: "shizuka-marikawa",
    name: "鞠川静香",
    en: "Shizuka Marikawa",
    ja: "鞠川静香",
    aliases: ["Shizuka", "Marikawa", "校医"],
    affiliation: "藤美学园幸存者小队 / 校医",
    grade: "校医 / 医疗支援",
    appearances: ["丧尸爆发篇"],
    timelineStatus: "爆发期幸存者",
    fandomSlug: "Shizuka_Marikawa",
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
      label: "Highschool of the Dead Wiki: Shizuka Marikawa",
      url: "https://highschoolofthedead.fandom.com/wiki/Shizuka_Marikawa",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对鞠川静香的校医、医疗支援和幸存者小队身份。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的鞠川静香 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "凡人级｜临时工具", "非战斗人员，本体输出很低。"],
        defense: ["凡人级", "凡人级｜队友保护/规避", "本体防御普通。"],
        movement: ["凡人速", "凡人速｜普通体能", "机动在人类范围。"],
        reaction: ["凡人速", "凡人速｜危机反应", "身体反应普通。"],
        vitality: ["凡人肉身", "凡人肉身｜生还经历", "生命体量普通。"],
        healing: ["无自愈", "缓慢自愈｜医疗知识/急救物资", "她能提供医疗支援，但自身不具备自愈。"],
        energy: ["凡人能量", "凡人能量｜医疗/车辆资源", "战斗资源主要是医疗、驾驶或后勤，不是输出能量。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "依赖补给和休息。"]
      }),
    notes: notes({
        penetration: "非战斗人员，攻击价值主要来自临时工具或队友火力。",
        resistance: "普通人类肉身，需要队友保护。",
        sensing: "医疗判断、伤情识别和后勤风险感知。",
        tactics: "医疗支援、驾驶/后勤和照顾伤员是核心作用。",
        special: "校医身份、急救知识、医疗物资管理、幸存者团队支援。",
        weakness: "正面战斗弱，受惊吓、被包围或物资短缺时风险很高。",
        setting: "按丧尸爆发期鞠川静香记录。",
        basis: "worldbook只用于抽取鞠川静香姓名；定级依据授权出版入口和角色资料入口，医疗支援不写成本体自愈。"
      })
  })]);
})();

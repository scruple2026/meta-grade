(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["学园默示录 HIGHSCHOOL OF THE DEAD"];
  if (!work) throw new Error("学园默示录 HIGHSCHOOL OF THE DEAD work metadata must load before character files.");

  registerCharacters([work.character({
    id: "kohta-hirano",
    name: "平野耕太",
    en: "Kohta Hirano",
    ja: "平野コータ",
    aliases: ["平野户田", "平野コータ", "Kohta", "Kouta Hirano", "枪械专家"],
    affiliation: "藤美学园幸存者小队",
    grade: "枪械宅 / 学生幸存者",
    appearances: ["丧尸爆发篇"],
    timelineStatus: "爆发期幸存者",
    fandomSlug: "Kohta_Hirano",
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
      label: "Highschool of the Dead Wiki: Kohta Hirano",
      url: "https://highschoolofthedead.fandom.com/wiki/Kohta_Hirano",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对平野耕太的枪械知识、射击定位和幸存者小队身份；worldbook中的“平野户田”保留为别名。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的平野户田 key/comment 补入；公开资料常用名为平野耕太/Kohta Hirano，未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "墙级｜枪械/弹药/临时武器｜装备", "本体普通，输出高度依赖枪械、弹药和临时武器。"],
        defense: ["凡人级", "凡人级｜队友掩护/距离", "本体防御低，靠距离和队友保护。"],
        movement: ["凡人速", "凡人速｜普通体能", "机动不突出。"],
        reaction: ["凡人速", "凡人速｜射击专注/危机反应", "射击判断强，但身体反应仍在人类范围。"],
        vitality: ["凡人肉身", "凡人肉身｜生还经历", "生命体量普通。"],
        healing: ["无自愈", "缓慢自愈｜急救/休整", "恢复依赖休整和医疗物资。"],
        energy: ["凡人能量", "墙级能量｜枪械/弹药资源｜装备", "战斗资源来自枪械、弹药和工具。"],
        energyRegen: ["无回能", "缓慢回能｜换弹/补给", "依赖补给和换弹。"]
      }),
    notes: notes({
        penetration: "枪械和临时武器可远程击杀丧尸或压制人类敌人，峰值取决于弹药和武器。",
        resistance: "普通学生肉身，必须保持距离避免被包围。",
        sensing: "枪械知识、射击视线、弹药管理和危险目标识别强。",
        tactics: "远程支援、火力分配、武器改造和战术建议是主要贡献。",
        special: "枪械知识、射击、临时武器制作、弹药管理。",
        weakness: "失去枪械/弹药后本体战斗力明显下降，近身战和机动较弱。",
        setting: "按丧尸爆发期平野耕太记录。",
        basis: "worldbook只用于抽取平野户田/平野耕太姓名；定级依据授权出版入口和角色资料入口，枪械作为装备峰值。"
      })
  })]);
})();

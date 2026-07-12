(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["学园默示录 HIGHSCHOOL OF THE DEAD"];
  if (!work) throw new Error("学园默示录 HIGHSCHOOL OF THE DEAD work metadata must load before character files.");

  registerCharacters([work.character({
    id: "rei-miyamoto",
    name: "宫本丽",
    en: "Rei Miyamoto",
    ja: "宮本麗",
    aliases: ["Rei", "Miyamoto", "枪术部"],
    affiliation: "藤美学园幸存者小队 / 枪术部",
    grade: "枪术部成员 / 学生幸存者",
    appearances: ["丧尸爆发篇"],
    timelineStatus: "爆发期幸存者",
    fandomSlug: "Rei_Miyamoto",
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
      label: "Highschool of the Dead Wiki: Rei Miyamoto",
      url: "https://highschoolofthedead.fandom.com/wiki/Rei_Miyamoto",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对宫本丽的枪术部背景、长柄武器战斗和幸存者小队身份。"
    }],
    revisionNotes: ["从缄默之秋 worldbook 的宫本丽 key/comment 补入；未采用 worldbook 正文描述。"],
    dimensions: dims({
        attack: ["凡人级", "砖级｜长枪/刺突武器｜武器", "枪术训练和长柄武器提高对丧尸的要害刺突效率。"],
        defense: ["凡人级", "凡人级｜距离控制/队友支援", "本体防御普通，依赖长柄武器保持距离。"],
        movement: ["凡人速", "凡人速｜运动能力", "运动能力较好但不脱离人类范围。"],
        reaction: ["凡人速", "亚音速｜枪术训练/危机反应", "长柄武器训练和实战压力提高反应。"],
        vitality: ["凡人肉身", "强化凡体｜训练/生还经历", "体能高于普通学生，但生命体量仍是人类。"],
        healing: ["无自愈", "缓慢自愈｜急救/休整", "恢复依赖休整和医疗物资。"],
        energy: ["凡人能量", "砖级能量｜长枪/体力", "能量资源来自体力和武器。"],
        energyRegen: ["无回能", "缓慢回能｜休息/补给", "依赖休息和补给。"]
      }),
    notes: notes({
        penetration: "长枪/刺突武器可利用距离攻击要害，对丧尸单体有效。攻击速度：宫本丽的长枪刺击随手臂伸展、步法和枪身回收完成，连续刺击需要重新调整枪尖；这套枪术没有离手飞行的远程载体。",
        resistance: "普通人类肉身，避免近身撕咬是核心防御。",
        sensing: "对敌群距离、队伍位置和逃生路线有战斗中判断。",
        tactics: "适合中距离牵制、掩护和与小室孝/毒岛冴子协同。",
        special: "枪术部训练、长柄武器使用、幸存者团队协同。",
        weakness: "情绪波动、被包围、武器损坏或地形狭窄会削弱发挥。",
        setting: "按丧尸爆发期宫本丽记录。",
        basis: "worldbook只用于抽取宫本丽姓名；定级依据授权出版入口和角色资料入口，长柄武器作为武器峰值。"
      })
  })]);
})();

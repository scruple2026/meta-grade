(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["斩！赤红之瞳"];
  if (!work) throw new Error("斩！赤红之瞳 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "esdeath",
    name: "艾斯德斯",
    en: "Esdeath",
    ja: "エスデス",
    aliases: ["Esdeath", "帝国将军", "狩人队长"],
    affiliation: "帝国 / 狩人",
    grade: "将军 / 帝具使",
    appearances: ["斩！赤红之瞳"],
    timelineStatus: "主线后期 / 帝具恶魔之粹持有者",
    fandomSlug: "Esdeath",
    confidence: "review",
    evidenceType: ["角色资料入口", "帝具资料入口", "worldbook名字索引", "争议峰值"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "Akame ga Kill! Wiki: Esdeath",
      url: "https://akamegakill.fandom.com/wiki/Esdeath",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于核对艾斯德斯的帝国将军身份、狩人成员、冰之帝具和主要能力入口。"
    }, {
      type: "wiki",
      scope: "能力资料入口",
      label: "Akame ga Kill! Wiki: Demon's Extract",
      url: "https://akamegakill.fandom.com/wiki/Demon%27s_Extract",
      lang: "en",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: true,
      claim: "用于交叉核对恶魔之粹、冰生成和摩珂钵特摩等帝具能力入口。"
    }],
    revisionNotes: [
      "从缄默之秋 worldbook 的艾斯德斯 key/comment 补入；未采用 worldbook 正文描述。",
      "大范围冰系控场与时间冻结属于帝具特殊权能，不直接换算为无限速或高防御。"
    ],
    dimensions: dims({
        attack: ["楼宇级｜冰系帝具", "街区级｜大范围冰系帝具/摩珂钵特摩｜争议", "常态可用冰枪、冰墙、冰爆等战斗输出；峰值按大范围冰系控场保守记录。"],
        defense: ["墙体级｜冰盾/冰甲", "楼宇级｜大范围冰墙/防护｜帝具", "防御峰值来自冰构造物和控场，不代表肉身硬度。"],
        movement: ["亚音速", "音速｜战斗机动/冰面位移", "高端近战与冰面机动支撑高速战斗，但不把停时写成移动速度。"],
        reaction: ["亚音速", "音速｜将军级战斗经验", "反应来自实战经验和帝具战斗，不把时间冻结等同本体反应。"],
        vitality: ["强化凡体", "楼宇级生命阈值｜帝具/高耐久", "本体耐久和战斗续航明显高于普通人，但生命体量与冰盾防御分开。"],
        healing: ["无自愈", "缓慢自愈｜休整/医疗", "缺少稳定自愈表现，恢复主要依赖休整。"],
        energy: ["楼宇级能量", "街区级能量｜冰系帝具/大范围控场", "恶魔之粹提供大量冰系输出资源；总量不自动反推每一击攻击规模。"],
        energyRegen: ["中速回能", "快速回能｜帝具持续释放", "可以连续制造冰，但大范围招式和时间冻结仍有使用窗口。"]
      }),
    notes: notes({
        penetration: "冰枪、冰刃、冰爆、冻结和大范围控场兼具杀伤与限制；时间冻结是特殊权能，不作为速度档。攻击速度：冰刃近战随本人接战节奏，冰枪与冰爆则是独立生成或投射手段；摩珂钵特摩的停时效果不等于冰枪飞行速度。",
        resistance: "冰盾、冰甲、冰墙和控场可抵挡攻击；肉身承伤、冰构造防护和帝具权能需要分开判断。",
        sensing: "将军级战场统率、杀意判断和近战距离感优秀。",
        tactics: "善于以冰墙切割战场、冻结路线、压缩对手行动空间，再用近战或冰枪收割。",
        special: "帝具恶魔之粹、冰生成、冰构造、冻结、大范围冰岚、摩珂钵特摩时间冻结。",
        weakness: "强度高度依赖帝具和持续输出；时间冻结等高阶技有条件与窗口，面对权能抗性或超远程压制需另判。",
        setting: "按主线后期帝具持有者艾斯德斯记录。",
        basis: "worldbook只用于抽取艾斯德斯姓名；定级依据Akame ga Kill! Wiki角色与帝具资料入口，称号和最强评价不直接换算为高阶破坏。"
      })
  })]);
})();

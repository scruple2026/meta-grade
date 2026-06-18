(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Grand Order"];

  if (!work) {
    throw new Error("Fate/Grand Order work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gray",
      name: "格蕾",
      en: "Gray",
      ja: "グレイ",
      affiliation: "迦勒底召唤 / 埃尔梅罗教室",
      grade: "Assassin / Add持有者",
      appearances: ["Fate/Grand Order", "Lord El-Melloi II's Case Files"],
      timelineStatus: "FGO 召唤灵基 / Assassin",
      aliases: ["小灰", "Gray", "Add", "Rhongomyniad"],
      fandomSlug: "Gray",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki: Gray",
          url: "https://typemoon.fandom.com/wiki/Gray",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对格蕾、Add、Rhongomyniad、二世事件簿和 FGO Assassin 灵基。"
        }
      ],
      revisionNotes: [
        "从型月DLC worldbook 的格蕾 key/comment 补入；未采用 worldbook 正文描述。",
        "Rhongomyniad 相关峰值按 Add/宝具条件标注，不写成常态无限输出。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜Add/宝具解放｜争议", "本体近战强于普通魔术师，Add 与宝具峰值提高输出。"],
        defense: ["墙级", "房屋级｜Add/灵基", "防御依赖 Add、防具和灵基加成。"],
        movement: ["亚音速", "音速｜Assassin灵基/近战身法", "近战身法和灵基支撑高速行动。"],
        reaction: ["亚音速", "音速｜战斗训练/灵基", "反应以训练、Add协同和灵基加成为主。"],
        vitality: ["精锐韧体", "房屋级生命阈值｜灵基", "基础仍接近强化人体，召唤灵基提高续战。"],
        healing: ["缓慢自愈", "中速自愈｜灵基/供魔", "恢复能力不突出，依赖灵基和供魔。"],
        energy: ["墙级能量", "楼级能量｜Add/宝具", "能量峰值来自 Add 和宝具解放。"],
        energyRegen: ["缓慢回能", "中速回能｜供魔", "供魔支撑灵基和宝具窗口。"]
      }),
      notes: notes({
        penetration: "镰刀/枪形态 Add 和 Rhongomyniad 相关峰值具备集中穿透，非稳定大范围输出。",
        resistance: "Add 和灵基提供防护；缺少高强常驻结界。",
        sensing: "Add 辅助、战斗训练和从者感知帮助识别敌人。",
        tactics: "擅长近身突袭、武装切换和与二世/队友配合。",
        special: "Assassin 灵基、Add、Rhongomyniad 相关宝具、亚瑟王容貌/灵墓背景。",
        weakness: "宝具峰值依赖 Add 展开和供魔；基础能量池有限。",
        setting: "按 FGO Assassin 格蕾召唤灵基记录，二世事件簿资料作角色入口补充。",
        basis: "worldbook只用于抽取格蕾姓名；定级依据公开角色资料入口和 FGO Assassin 灵基，宝具条件单独标注。"
      })
    })
  ]);
})();

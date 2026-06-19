(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["神雕侠侣"];

  if (!work) {
    throw new Error("神雕侠侣 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dugu-qiubai",
      name: "独孤求败",
      en: "Dugu Qiubai",
      aliases: ["獨孤求敗", "剑魔", "劍魔", "Dugu"],
      affiliation: "隐世剑客 / 剑魔传承",
      grade: "传说级剑客 / 独孤九剑源流",
      appearances: ["蛊 worldbook key/comment", "神雕侠侣", "笑傲江湖", "鹿鼎记"],
      timelineStatus: "跨书传说 / 未正面出场",
      fandomSlug: "獨孤求敗",
      confidence: "review",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "金庸 Wiki：獨孤求敗",
          url: "https://jinyong.fandom.com/zh/wiki/%E7%8D%A8%E5%AD%A4%E6%B1%82%E6%95%97",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对独孤求败被称为剑魔、从未正面出场、跨《神雕侠侣》《笑傲江湖》《鹿鼎记》被提及，以及玄铁剑法/独孤九剑/玄铁重剑相关传承。"
        },
        {
          type: "wiki",
          scope: "兵器与剑法入口",
          label: "金庸 Wiki：玄鐵重劍",
          url: "https://jinyong.fandom.com/zh/wiki/%E7%8E%84%E9%90%B5%E9%87%8D%E5%8A%8D",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对玄铁重剑、玄铁剑法、杨过继承重剑法门及独孤求败传说的资料入口。"
        }
      ],
      revisionNotes: [
        "从蛊 worldbook 的老剑神/独孤求败 key/comment 补入；未采用 worldbook 正文描述。",
        "独孤求败在原作中主要以传说和遗迹出现，面板按金庸顶级武者保守入口处理，不把“无敌于天下”直接换算为更高破坏档。"
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜玄铁剑法/独孤九剑传说｜争议", "按杨过、风清扬、令狐冲承接的剑法效果保守推入口，不写成超出金庸武侠尺度。"],
        defense: ["墙级", "房屋级｜顶级内力/剑术规避｜争议", "防御多来自内力、身法和破招理解，硬承伤缺少直接表现。"],
        movement: ["亚音速", "亚音速｜顶级剑客身法｜争议", "未正面出场，按金庸顶级剑客身法入口处理。"],
        reaction: ["亚音速", "亚音速｜无招/破招境界｜争议", "独孤九剑与无剑境界强调读招破绽和先手压制。"],
        vitality: ["精锐韧体", "精锐韧体｜顶级内力/传说状态｜争议", "仍按人类武者生命体量处理，不因传说身份抬成特殊生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜内功调息｜推定", "没有直接恢复表现，只按金庸内功调息给保守峰值。"],
        energy: ["墙级能量", "房屋级能量｜顶级内力/玄铁剑法传说｜争议", "能量池按顶级内力和重剑法门传承保守记录。"],
        energyRegen: ["缓慢回能", "中速回能｜调息｜推定", "回气依赖调息，缺少直接描写。"]
      }),
      notes: notes({
        penetration: "玄铁剑法重势重力，独孤九剑偏破招和攻击破绽；两者都是单体剑术/内力效能，不等同大范围破坏。",
        resistance: "顶级内力和剑术理解可降低正面风险，但缺少本人承伤描写，硬防御保持保守。",
        sensing: "传说中的无招、破招和剑意境界强调对敌人招式结构与破绽的判断。",
        tactics: "以剑道境界压制招式体系，重剑、木剑、无剑阶段体现从兵器到剑意的战术抽象。",
        special: "玄铁剑法、独孤九剑源流、无剑胜有剑、剑冢传承、神雕相关遗迹。",
        weakness: "本人从未正面出场，绝大多数战力只能从杨过、风清扬、令狐冲等继承者和剑冢文字侧面推断。",
        setting: "蛊 worldbook 的 key/comment 中出现老剑神/独孤求败；本条按金庸小说跨书传说角色记录，并挂在《神雕侠侣》下。",
        basis: "worldbook只用于抽取独孤求败姓名；定级依据金庸 Wiki 公开入口确认其剑魔称号、从未正面出场、玄铁剑法和独孤九剑传承。由于缺少本人直接战斗画面，所有高于普通顶级武者的部分均标争议或推定。"
      })
    })
  ]);
})();

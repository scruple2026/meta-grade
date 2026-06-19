(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鹿鼎记"];

  if (!work) {
    throw new Error("鹿鼎记 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "su-quan",
      name: "苏荃",
      en: "Su Quan",
      ja: "",
      affiliation: "神龙教 / 韦小宝家眷",
      grade: "神龙教教主夫人 / 武者",
      appearances: ["金庸共通世界书", "鹿鼎记"],
      timelineStatus: "主线综合期 / 神龙教夫人",
      aliases: ["蘇荃", "苏夫人", "神龙教夫人", "Su Quan"],
      fandomSlug: "蘇荃",
      confidence: "medium",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "金庸 Wiki：蘇荃",
          url: "https://jinyong.fandom.com/zh/wiki/%E8%98%87%E8%8D%83",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对苏荃、神龙教夫人和鹿鼎记角色身份。"
        }
      ],
      revisionNotes: [
        "从金庸共通 worldbook 的神龙教相关 key/comment 补入；未采用 worldbook 正文描述。",
        "神龙教资源、身份和后期家眷关系不并入个人常态战斗面板。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜神龙教武功/毒药条件", "武功强于普通人，峰值依赖神龙教武学、暗器或毒药条件。"],
        defense: ["砖级", "砖级｜身法/招架", "防御以身法、招架和江湖经验为主。"],
        movement: ["亚音速", "亚音速｜轻功", "具备金庸武者级轻功。"],
        reaction: ["亚音速", "亚音速｜江湖经验", "能应对普通武者和复杂局面。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功和训练提高续战。"],
        healing: ["缓慢自愈", "缓慢自愈｜调息", "恢复依赖调息休养。"],
        energy: ["砖级能量", "墙级能量｜内力/神龙教武学", "内力和毒术资源按中高端鹿鼎记武者处理。"],
        energyRegen: ["缓慢回能", "缓慢回能｜调息", "回气速度有限。"]
      }),
      notes: notes({
        penetration: "神龙教武功、毒药或暗器可形成条件杀伤；常态不按大范围输出处理。",
        resistance: "内功、身法和经验提供防护，但本体仍是武侠人体。",
        sensing: "熟悉神龙教环境和人情局势，擅长察言观色。",
        tactics: "能在神龙教内斗和韦小宝多重身份局势中周旋，偏机变与人心判断。",
        special: "神龙教夫人身份、神龙教武学、毒药/迷药语境、组织情报。",
        weakness: "正面硬拼不及鹿鼎记最顶尖武者；组织身份和情感关系会牵制行动。",
        setting: "金庸共通 worldbook 的神龙教传承与总览 key/comment 中出现苏荃；本条按《鹿鼎记》主线综合期记录。",
        basis: "worldbook只用于抽取苏荃姓名；定级依据公开角色资料入口和金庸武侠保守口径，组织资源不折算为个人攻防。"
      })
    })
  ]);
})();

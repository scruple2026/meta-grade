(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["侠客行"];

  if (!work) {
    throw new Error("侠客行 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bei-haishi",
      name: "贝海石",
      en: "Bei Haishi",
      ja: "",
      affiliation: "长乐帮",
      grade: "长乐帮军师 / 医道与谋略型武者",
      appearances: ["金庸共通世界书", "侠客行"],
      timelineStatus: "主线综合期 / 长乐帮军师",
      aliases: ["貝海石", "贝大夫", "长乐帮军师", "Bei Haishi"],
      fandomSlug: "貝海石",
      confidence: "medium",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "金庸 Wiki：貝海石",
          url: "https://jinyong.fandom.com/zh/wiki/%E8%B2%9D%E6%B5%B7%E7%9F%B3",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对贝海石、长乐帮军师和侠客行角色身份。"
        }
      ],
      revisionNotes: [
        "从金庸共通 worldbook 的长乐帮核心人物 key/comment 补入；未采用 worldbook 正文描述。",
        "长乐帮资源、阴谋和毒药条件不并入个人常态攻防。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜武功/毒药条件", "个人武功与医毒手段可制敌，峰值依赖条件。"],
        defense: ["砖级", "砖级｜内功/招架", "防御以武者身体、招架和回避为主。"],
        movement: ["亚音速", "亚音速｜轻功", "具备金庸武者级身法。"],
        reaction: ["亚音速", "亚音速｜谋略/江湖经验", "战斗反应与谋略判断强于普通武者。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
        healing: ["缓慢自愈", "中速自愈｜医术/调息", "医术和调息能改善恢复，但不是再生。"],
        energy: ["砖级能量", "墙级能量｜内力/医毒资源", "内力和医毒资源按金庸中高端武者处理。"],
        energyRegen: ["缓慢回能", "中速回能｜调息", "回气依赖调息。"]
      }),
      notes: notes({
        penetration: "武功、医术和毒药偏条件型单体控制，不等同大范围破坏。",
        resistance: "有内功和医术支撑，但本体仍可被高手、兵刃或反制手段压制。",
        sensing: "江湖阅历、医者观察和长乐帮情报帮助识别局势。",
        tactics: "擅长操控帮会局面、设局、借刀杀人和利用信息差。",
        special: "长乐帮军师、医术、毒药/药物语境、帮会资源。",
        weakness: "正面硬拼不是最强项；阴谋和帮会资源离场后个人面板有限。",
        setting: "金庸共通 worldbook 的长乐帮核心人物 key/comment 中出现贝海石；本条按《侠客行》主线综合期记录。",
        basis: "worldbook只用于抽取贝海石姓名；定级依据公开角色资料入口和金庸武侠保守口径，军师身份与帮会资源不直接抬档。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["神雕侠侣"];

  if (!work) {
    throw new Error("神雕侠侣 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "guo-xiang",
      name: "郭襄",
      en: "Guo Xiang",
      ja: "",
      affiliation: "襄阳郭家 / 峨嵋派源流",
      grade: "侠女 / 峨嵋开派祖师",
      appearances: ["金庸共通世界书", "神雕侠侣", "倚天屠龙记背景"],
      timelineStatus: "神雕后期 / 峨嵋开派前后",
      aliases: ["小东邪", "郭二姑娘", "峨嵋祖师", "Guo Xiang"],
      fandomSlug: "郭襄",
      confidence: "medium",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "金庸 Wiki：郭襄",
          url: "https://jinyong.fandom.com/zh/wiki/%E9%83%AD%E8%A5%84",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对郭襄、神雕侠侣角色身份和峨嵋派源流。"
        }
      ],
      revisionNotes: [
        "从金庸共通 worldbook 的峨嵋派相关 key/comment 补入；未采用 worldbook 正文描述。",
        "角色主体放入《神雕侠侣》；峨嵋开派作为后续设定和峰值语境，不混入《倚天屠龙记》主线角色版本。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜后期武学积累/峨嵋开派", "神雕后期年轻阶段不按五绝级处理；后续开派峰值保守记为墙级。"],
        defense: ["砖级", "墙级｜轻功/内功", "本体仍为武侠人体，防御依赖轻功、内力和招架。"],
        movement: ["亚音速", "亚音速｜轻功", "具备名门武学和江湖历练支撑的轻功。"],
        reaction: ["亚音速", "亚音速｜机敏/江湖经验", "机敏、胆识和临场判断突出。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "人体结构，内功提高续战。"],
        healing: ["缓慢自愈", "中速自愈｜内功调息", "恢复依赖内功调息和休养。"],
        energy: ["砖级能量", "墙级能量｜后期武学积累", "内力资源按后期名门高手保守处理。"],
        energyRegen: ["缓慢回能", "中速回能｜调息", "回气依赖调息。"]
      }),
      notes: notes({
        penetration: "武学来源复杂，偏轻灵机变和兵刃/掌法组合；无大范围破坏表现。",
        resistance: "名门内功和江湖经验提供防护，但神雕后期仍非顶级宗师硬度。",
        sensing: "机敏、胆识和交游经验强，擅长在复杂江湖局势中判断人心。",
        tactics: "敢于冒险、善于沟通和借势，后续开派体现组织与传承能力。",
        special: "小东邪、襄阳郭家背景、峨嵋开派源流、多家武学见闻。",
        weakness: "神雕本篇年轻阶段经验和内力厚度有限；峨嵋开派属于后续成长语境。",
        setting: "金庸共通 worldbook 的峨嵋派传承、历史、武当关系和总览 key/comment 中出现郭襄；本条主体按《神雕侠侣》后期记录。",
        basis: "worldbook只用于抽取郭襄姓名；定级依据公开角色资料入口和金庸武侠保守口径，峨嵋祖师身份不直接抬高破坏档。"
      })
    })
  ]);
})();

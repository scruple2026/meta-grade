(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];

  if (!work) {
    throw new Error("射雕英雄传 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ouyang-ke",
      name: "欧阳克",
      en: "Ouyang Ke",
      affiliation: "白驼山庄",
      grade: "白驼山庄少主 / 小毒物",
      appearances: ["金庸共通世界书", "射雕英雄传"],
      timelineStatus: "射雕主线期",
      aliases: ["歐陽克", "小毒物", "白驼山庄少主", "Ouyang Ke"],
      fandomSlug: "歐陽克",
      confidence: "review",
      evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "身份/武学",
          label: "金庸 Wiki：欧阳克",
          url: "https://jinyong.fandom.com/zh/wiki/%E6%AD%90%E9%99%BD%E5%85%8B",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "核对欧阳克为《射雕英雄传》反派、白驼山庄少主，擅用毒和蛇阵，武功包含神驼雪山掌与灵蛇拳。"
        },
        {
          type: "wiki",
          scope: "角色列表交叉核对",
          label: "金庸 Wiki：射雕英雄传角色列表",
          url: "https://jinyong.fandom.com/zh/wiki/%E5%B0%84%E9%B5%B0%E8%8B%B1%E9%9B%84%E5%82%B3%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "角色列表把欧阳克列入白驼山庄人物，说明其与欧阳锋、白驼山武学和射雕主线反派关系。"
        }
      ],
      revisionNotes: [
        "worldbook 仅用于金庸共通世界书 key/comment 中“白驼山庄·少庄主欧阳克”的姓名抽取；没有读取或采用 worldbook 正文描述。",
        "欧阳克按白驼山庄少主和射雕主线反派记录；不把欧阳锋的五绝级战力折算给他。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜神驼雪山掌/灵蛇拳/毒蛇", "武功高于普通江湖高手，毒与蛇阵提高杀伤条件；不按五绝级输出记录。"],
        defense: ["砖级", "墙级｜内力/身法/随从掩护", "防护来自内力、轻功和战斗经验，本体仍是人类武者。"],
        movement: ["亚音速", "亚音速｜白驼山庄轻功", "白驼山庄轻功支持快速近身和游走。"],
        reaction: ["亚音速", "亚音速｜中高端武者交锋", "可与射雕主线高手交手，但面对五绝级或主角后期强者明显不足。"],
        vitality: ["强化凡体", "精锐韧体｜内功", "人体生命结构，内功提高续战；被重创或偷袭仍会失能死亡。"],
        healing: ["缓慢自愈", "缓慢自愈｜调息/医治", "没有稳定战斗自愈。"],
        energy: ["砖级能量", "墙级能量｜白驼山庄内力/毒蛇资源", "内力和毒蛇资源可支撑多轮江湖战，但不是五绝级深厚内力。"],
        energyRegen: ["缓慢回能", "缓慢回能｜调息/补给", "回气和毒蛇布置依赖休整、调息和资源补给。"]
      }),
      notes: notes({
        penetration: "神驼雪山掌、灵蛇拳、毒药和蛇阵偏单体杀伤、牵制和中毒条件；纯破坏规模不高。",
        resistance: "本体抗打击仍是人类武者，依赖轻功、内力、随从和蛇阵拉开安全距离。",
        sensing: "江湖高手常规观察、听劲和应对经验；无远距索敌或特殊预知。",
        tactics: "善用白驼山庄随从、毒蛇、轻功和诱骗手段压制弱者；遇到黄蓉、杨康等计谋反制时容错低。",
        special: "白驼山庄少主、神驼雪山掌、灵蛇拳、用毒、蛇阵、女弟子随从。",
        weakness: "好色与骄矜导致多次中计；对五绝级高手、黄蓉式计谋和突袭缺少稳定应对。",
        setting: "金庸共通 worldbook 的白驼山庄 key/comment 中出现欧阳克；本条按《射雕英雄传》主线期记录。",
        basis: "worldbook只用于抽取欧阳克姓名；定级依据金庸 Wiki 角色页和射雕角色列表。白驼山庄少主和欧阳锋亲缘只支持武学来源，不代表继承欧阳锋五绝级面板。"
      })
    })
  ]);
})();

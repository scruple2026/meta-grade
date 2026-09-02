(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["碧血剑"];
  if (!work) throw new Error("碧血剑 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "yuan-chengzhi",
    name: "袁承志",
    en: "Yuan Chengzhi",
    aliases: ["金蛇营相关人物", "袁崇焕之子"],
    affiliation: "华山派 / 金蛇营相关",
    grade: "主角 / 华山派高手",
    appearances: ["碧血剑主线"],
    timelineStatus: "主线后期",
    fandomSlug: "袁承志",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：袁承志",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%A2%81%E6%89%BF%E5%BF%97",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对角色、华山派和金蛇剑相关资料入口；具体量级仍按保守武侠口径处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙体级", "房屋级｜金蛇剑法/混元功", "主线后期内力与剑法已属本作高端，仍按局部武侠破坏处理。"],
      defense: ["墙体级", "房屋级｜内力/招架", "内力、身法和兵刃招架支撑承压。"],
      movement: ["亚音速", "亚音速｜轻功", "金庸武侠高水平轻功，不写现代高速档。"],
      reaction: ["亚音速", "亚音速｜华山武学/实战", "主线后期实战经验和招式判断强。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/意志", "人体结构，内力和意志提高续战。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功调息可辅助恢复，但不按高速再生。"],
      energy: ["墙体级能量", "房屋级能量｜混元功/金蛇传承", "总内力和体力属本作高端，但不反推大范围攻击。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力恢复依赖调息。"]
    }),
    notes: notes({
      penetration: "金蛇剑法、华山武学和兵刃技巧偏单体杀伤、破招和穿刺，不等同大范围爆破。攻击速度：金蛇剑法和华山武学以近身兵刃出手、破招衔接为主，赶路身法不能替代剑尖到达目标的动作速度。",
      resistance: "内力和招架能力强；面对更高武侠体系顶级角色时仍按低到中武处理。",
      sensing: "江湖经验成长快，能识破常见招式和埋伏。",
      tactics: "兼具侠义、组织行动和临场破招能力，但政治/军事影响力不进入主面板。",
      special: "金蛇剑法、金蛇剑、华山派武学、混元功相关内力。",
      weakness: "破坏范围有限，主要依赖兵刃、内力和招式制胜。",
      setting: "按《碧血剑》主线后期袁承志记录。",
      basis: "worldbook只用于从comment/key抽取袁承志姓名；定级依据金庸 Wiki 和公开小说条目入口，按金庸低武到中武局部破坏口径记录。"
    })
  })]);
})();

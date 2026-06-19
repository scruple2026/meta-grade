(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "dingxian-shitai",
    name: "定闲师太",
    en: "Dingxian Shitai",
    aliases: ["定閒師太", "定闲", "恒山派掌门", "恒山三定"],
    affiliation: "恒山派 / 五岳剑派",
    grade: "恒山派掌门 / 恒山三定",
    appearances: ["金庸共通世界书", "笑傲江湖"],
    timelineStatus: "主线期 / 令狐冲接掌恒山前",
    confidence: "medium",
    evidenceType: ["角色列表入口", "门派条目入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色列表入口",
        label: "金庸 Wiki：笑傲江湖角色列表",
        url: "https://jinyong.fandom.com/zh/wiki/%E7%AC%91%E5%82%B2%E6%B1%9F%E6%B9%96%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对恒山三定为定静师太、定闲师太和定逸师太，并说明定闲临终前将恒山掌门之位传给令狐冲。"
      },
      {
        type: "wiki",
        scope: "门派入口",
        label: "金庸 Wiki：恒山派",
        url: "https://jinyong.fandom.com/zh/wiki/%E6%81%86%E5%B1%B1%E6%B4%BE",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "核对定闲师太为恒山派掌门，坚决反对五岳并派，并在遇害前请令狐冲接掌恒山。"
      }
    ],
    revisionNotes: [
      "定闲师太按恒山派掌门和恒山三定之一记录；被暗害和传位情节写入设定，不抬高生命体量或防御。"
    ],
    dimensions: dims({
      attack: ["砖级", "墙级｜恒山剑法/掌门", "恒山掌门级剑法与内力，按局部武侠杀伤保守记录。"],
      defense: ["砖级", "墙级｜内力/招架", "可凭内力和剑法防身，但仍是人体结构。"],
      movement: ["亚音速", "亚音速｜恒山轻功", "掌门级轻功和身法。"],
      reaction: ["亚音速", "亚音速｜掌门经验", "江湖经验与门派指挥力较强。"],
      vitality: ["强化凡体", "精锐韧体｜内力", "内功训练者体魄，不把遇害前后情节写成高生命结构。"],
      healing: ["缓慢自愈", "缓慢自愈｜调息", "无高速再生，恢复依靠调息。"],
      energy: ["砖级能量", "墙级能量｜内力", "恒山掌门内力资源，主要支持近身交锋和续战。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力需调息恢复。"]
    }),
    notes: notes({
      penetration: "恒山剑法偏精细剑招和门派武学，不等同范围破坏。",
      resistance: "内力、招架和身法提供武侠层面的防护；遭暗害说明并非高防御或高生命体量。",
      sensing: "有掌门阅历和门派危机判断，无特殊感知设定。",
      tactics: "能判断五岳并派风险并安排传位，偏稳健保守的门派领导者。",
      special: "恒山三定、恒山掌门、佛门门风、反对五岳并派。",
      weakness: "门派弱势且受嵩山派和岳不群布局压迫，遭暗害时容错有限。",
      setting: "金庸共通 worldbook 的恒山派 key/comment 中出现定闲师太；本条按令狐冲接掌恒山前的主线期记录。",
      basis: "worldbook只用于抽取定闲师太姓名；定级依据金庸 Wiki 恒山派和笑傲角色列表入口。掌门、三定身份只支持恒山派高层武者定位，不直接抬高破坏档。"
    })
  })]);
})();

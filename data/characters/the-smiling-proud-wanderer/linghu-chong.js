(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["笑傲江湖"];
  if (!work) throw new Error("笑傲江湖 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "linghu-chong",
    name: "令狐冲",
    en: "Linghu Chong",
    aliases: ["令狐师兄", "华山大弟子"],
    affiliation: "华山派",
    grade: "华山大弟子",
    appearances: ["金盆洗手"],
    timelineStatus: "金盆洗手早期 / 独孤九剑前",
    fandomSlug: "令狐沖",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["砖级", "墙级｜华山剑法/坐斗田伯光", "早期以华山剑法、胆识和临场应变为主。"],
      defense: ["砖级", "墙级｜江湖身手", "金盆洗手期仍会被伤病和强敌压制。"],
      movement: ["凡人速", "亚音速｜江湖轻功", "轻功和近战机动强于普通人。"],
      reaction: ["凡人速", "亚音速｜剑术应对", "能在酒楼坐斗田伯光中靠机智周旋。"],
      vitality: ["强化凡体", "精锐韧体｜意志/伤病", "可负伤周旋，但本体仍是人体。"],
      healing: ["缓慢自愈", "缓慢自愈｜休养/内功", "恢复依赖休养和内功调息。"],
      energy: ["砖级能量", "墙级能量｜内力/剑法", "早期内力不按后期顶级状态处理。"],
      energyRegen: ["缓慢回能", "缓慢回能｜调息", "内力需调息恢复。"]
    }),
    notes: notes({
      penetration: "早期剑法偏招式和破绽利用，不等同后期独孤九剑的稳定破招上限。",
      resistance: "胆气和江湖经验增长快，但伤病、内力不足和师门压力都是限制。",
      sensing: "观察力、酒局应变和对人情局势判断较强。",
      tactics: "临场胡搅、心理周旋和以弱拖强是早期核心。",
      special: "华山剑法、坐斗田伯光、笑傲江湖曲谱线索。",
      weakness: "金盆洗手期尚未获得独孤九剑，伤病和内力短板明显。",
      setting: "按金盆洗手早期令狐冲记录，不并入后期独孤九剑、吸星大法或易筋经。",
      basis: "worldbook只用于抽取令狐冲姓名；定级依据金庸 Wiki 和公开小说条目入口，主角成长不提前并入早期面板。"
    })
  })]);
})();

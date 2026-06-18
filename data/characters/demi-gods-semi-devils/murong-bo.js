(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "murong-bo",
    name: "慕容博",
    en: "Murong Bo",
    aliases: ["灰衣僧", "燕龙渊", "慕容复父亲"],
    affiliation: "姑苏慕容 / 藏经阁灰衣僧",
    grade: "复国策士 / 高手",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期 / 真相揭露",
    fandomSlug: "慕容博",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜少林绝技/慕容武学", "长期潜修使其攻防接近顶级老辈。"],
      defense: ["墙级", "房屋级｜深厚内力", "内力深厚但有强练隐患。"],
      movement: ["亚音速", "亚音速｜轻功/潜行", "藏经阁潜伏和身法强。"],
      reaction: ["亚音速", "亚音速｜老江湖经验", "江湖经验、谋略和读招很强。"],
      vitality: ["精锐韧体", "精锐韧体｜深厚内力", "人体结构，旧患和反噬明显。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可调息。"],
      energy: ["墙级能量", "房屋级能量｜深厚内力", "总内力较深。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力需调息。"]
    }),
    notes: notes({
      penetration: "慕容武学与少林绝技结合，偏精巧反制和近战杀伤。",
      resistance: "内力深厚但长期强练隐患不可忽略。",
      sensing: "谋略、伪装和江湖判断极强。",
      tactics: "长期布局能力强，复国执念影响其风险判断。",
      special: "斗转星移根基、少林绝技、雁门关旧案策动。",
      weakness: "复国执念、强练隐患和旧案真相使其被动。",
      setting: "按少室山大会期慕容博记录。",
      basis: "worldbook只用于抽取慕容博姓名；定级依据金庸 Wiki 和公开小说条目入口。"
    })
  })]);
})();

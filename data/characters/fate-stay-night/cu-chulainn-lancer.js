(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/stay night"];
  if (!work) throw new Error("Fate/stay night work metadata must load before character files.");

  registerCharacters([work.character({
    id: "cu-chulainn-lancer",
    name: "Lancer（库·丘林）",
    en: "Cu Chulainn",
    ja: "クー・フーリン",
    aliases: ["库丘林", "库·丘林", "光之子", "Lancer"],
    affiliation: "Lancer职阶 / 言峰绮礼阵营",
    grade: "从者 / 魔枪使用者",
    appearances: ["Fate", "Unlimited Blade Works", "Heaven's Feel"],
    timelineStatus: "第五次圣杯战争",
    fandomSlug: "C%C3%BA_Chulainn_(Lancer)",
    confidence: "review",
    evidenceType: ["官方入口", "角色页入口", "因果宝具"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["楼级", "街区级｜Gae Bolg｜争议", "常规枪术极强，刺穿死棘之枪是条件性因果杀伤。"],
      defense: ["房屋级", "楼级｜从者灵基/战斗续行", "防御不重装，靠机动、符文和续行。"],
      movement: ["音速", "超音速｜枪兵机动", "速度与近战突进优秀。"],
      reaction: ["音速", "超音速｜枪兵反应", "高速从者战反应。"],
      vitality: ["楼级生命阈值", "楼级生命阈值｜战斗续行", "战斗续行让重伤后仍能行动。"],
      healing: ["中速自愈｜灵体/供魔", "快速自愈｜符文/供魔", "恢复依赖供魔和符文条件。"],
      energy: ["楼级能量", "街区级能量｜宝具/符文｜争议", "魔枪和符文资源强但有限。"],
      energyRegen: ["中速回能", "中速回能｜供魔", "受御主供魔与令咒限制。"]
    }),
    notes: notes({
      penetration: "Gae Bolg偏因果逆转/必中刺心，不能简单折算为大范围破坏。",
      resistance: "战斗续行和符文很强，但防御装备不高。",
      sensing: "从者感知、战斗直觉和追击能力强。",
      tactics: "单挑、试探和追杀能力优秀，受御主命令限制明显。",
      special: "Gae Bolg、符文、战斗续行、避矢加护。",
      weakness: "御主命令、命运/幸运克制和宝具条件会影响结果。",
      setting: "按第五次圣杯战争Lancer记录。",
      basis: "worldbook只用于抽取库丘林姓名；定级依据官方入口与TYPE-MOON Wiki资料入口，因果宝具写入特殊杀伤。"
    })
  })]);
})();

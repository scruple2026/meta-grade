(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];
  if (!work) throw new Error("倚天屠龙记 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "zhang-wuji",
    name: "张无忌",
    en: "Zhang Wuji",
    aliases: ["张教主", "明教教主", "無忌", "Wuji"],
    affiliation: "明教 / 武当 / 天鹰教血脉",
    grade: "明教教主 / 九阳神功使用者",
    appearances: ["金庸共通世界书", "倚天屠龙记"],
    timelineStatus: "主线后期 / 光明顶后综合期",
    fandomSlug: "張無忌",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙级", "房屋级｜九阳神功/乾坤大挪移/太极拳剑", "高端内力和多门绝学可形成强单体压制，但不按大范围破坏处理。"],
      defense: ["墙级", "房屋级｜九阳神功/乾坤大挪移", "九阳内力和挪移卸劲提高承伤与化解能力。"],
      movement: ["亚音速", "亚音速｜轻功/太极身法", "金庸高端轻功和近战身法，未写入超音速。"],
      reaction: ["亚音速", "亚音速｜高手交锋", "能应对顶级武林高手围攻和兵刃变化。"],
      vitality: ["精锐韧体", "精锐韧体｜九阳护体", "生命结构仍为人体，九阳真气提高续战。"],
      healing: ["中速自愈", "中速自愈｜九阳神功/调息", "内功疗伤与抗毒能力较强，但不是瞬间再生。"],
      energy: ["墙级能量", "房屋级能量｜九阳内力", "九阳内力深厚，适合持续战斗和化解劲力。"],
      energyRegen: ["中速回能", "快速回能｜九阳调息", "九阳神功回气强，仍是内力调息过程。"]
    }),
    notes: notes({
      penetration: "九阳神功、乾坤大挪移、太极拳剑和圣火令武功偏单体劲力、卸劲、反制和兵刃技巧，范围破坏有限。",
      resistance: "对毒、寒热和内力冲击有较强抵抗；面对诡计、情感牵制和多人局势仍会受限。",
      sensing: "高手级听劲、观察和临战判断，能读对手招式变化。",
      tactics: "性格仁厚但临场学习强，擅长以深厚内力化解危局。",
      special: "九阳神功、乾坤大挪移、太极拳剑、圣火令武功、明教号召力。",
      weakness: "优柔寡断和情感牵制明显；政治资源不计入个人常态战力。",
      setting: "金庸共通 worldbook 的明教总览 key 中出现张无忌；本条按《倚天屠龙记》后期综合期记录。",
      basis: "worldbook只用于抽取张无忌姓名；定级依据金庸 Wiki 角色/作品入口和金庸武侠保守口径，教主身份不直接抬高破坏档。"
    })
  })]);
})();

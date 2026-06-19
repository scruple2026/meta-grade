(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "asfi-al-andromeda",
      name: "亚丝菲·阿尔·安朵美达",
      en: "Asfi Al Andromeda",
      ja: "アスフィ・アル・アンドロメダ",
      affiliation: "赫尔墨斯眷族",
      grade: "团长 / 万能者 / 魔道具制作者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 赫尔墨斯眷族团长期",
      aliases: ["亚丝菲", "Asfi", "Asfi Al Andromeda", "Perseus", "万能者"],
      fandomSlug: "Asfi_Al_Andromeda",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["房屋级", "楼级｜Level 4/魔道具", "Lv.4冒险者体能、短剑和魔道具能威胁高阶怪物或冒险者。"],
        defense: ["房屋级", "楼级｜Falna/装备/魔道具", "Falna体魄和魔道具提高承伤与撤退能力。"],
        movement: ["音速", "超音速｜飞行鞋/魔道具", "高阶冒险者机动叠加飞行装备，适合侦察和高速支援。"],
        reaction: ["音速", "超音速｜Level 4/战斗经验", "作为眷族团长和支援战斗员，能应对高速冒险者战。"],
        vitality: ["房屋级生命阈值", "楼级生命阈值｜Falna", "Lv.4冒险者体魄高于普通人，但不是再生型生命。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定高速自愈，战后依赖治疗和休整。"],
        energy: ["房屋级能量", "楼级能量｜魔道具/补给", "个人体力、魔力和携行魔道具共同支撑作战。"],
        energyRegen: ["缓慢回能", "中速回能｜补给/准备", "魔道具和药品需要准备，个人资源战后恢复。"]
      }),
      notes: notes({
        penetration: "短剑、飞行机动、炼金魔道具和携行装备偏精确打击与战术支援，不按大范围破坏处理。",
        resistance: "装备和Falna提升承伤，但正面硬抗不是核心定位。",
        sensing: "擅长侦察、潜入、追踪和现场支援，可通过魔道具补足视野与行动路线。",
        tactics: "作为赫尔墨斯眷族团长，执行能力和临场判断强，常负责把赫尔墨斯的计划落到具体行动。",
        special: "魔道具制作、飞行鞋、药品/道具支援、潜入侦察、赫尔墨斯眷族团长权限。",
        weakness: "需要预备道具和补给；面对纯正面高压战或道具被限制时优势下降。",
        setting: "按异端儿篇附近赫尔墨斯眷族团长期记录。",
        basis: "worldbook只用于抽取亚丝菲姓名；定级依据公开官方角色页与DanMachi Wiki资料入口，万能者称号不直接抬高破坏档。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "slan",
      name: "斯兰",
      en: "Slan",
      ja: "スラン",
      affiliation: "神之手",
      grade: "God Hand / 女神崇拜源头",
      appearances: ["蚀之刻", "正篇"],
      timelineStatus: "蚀之刻后 / 幽界显化",
      aliases: ["Slan", "スラン", "神之手", "Goddess of Flame"],
      fandomSlug: "Slan",
      confidence: "review",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["楼级", "街区级｜显化触肢/幽体伤害｜特殊｜争议", "显化体能压制格斯并造成实体与幽体伤害，但不按大范围破坏外推。"],
        defense: ["楼级", "街区级｜显化体/神之手存在｜争议", "显化体可被特殊武器 destabilize，神之手本体存在方式另算。"],
        movement: ["不适用｜幽界显现", "不适用｜幽界/显化", "常通过仪式、幽界或环境显化，不按连续移动速度。"],
        reaction: ["亚音速", "音速｜权能/因果预判｜争议", "可与格斯、髑髅骑士相关局面互动，主要依靠权能和显化体。"],
        vitality: ["楼级生命阈值｜显化体", "街区级生命阈值｜神之手存在｜争议", "显化体被破坏不等同本体死亡。"],
        healing: ["未知", "未知｜显化体消散", "表现更接近撤离或显化解除，不写成稳定再生。"],
        energy: ["楼级能量", "街区级能量｜幽界显化/精神诱导｜争议", "能通过环境与幽界显化并影响人类，但不直接换算成大爆破。"],
        energyRegen: ["未知", "未知｜神之手权能", "无可量化回能资料。"]
      }),
      notes: notes({
        penetration: "显化体可造成物理和幽体层面的压制，精神诱导与堕落诱惑属于特殊权能。攻击速度：显化体的肢体攻击随其当前肉身动作，精神诱导与堕落影响则不是普通投射物，需按接触、显化环境和作用条件判断。",
        resistance: "神之手存在方式特殊，显化体可被恶意浸染的Dragon Slayer等特殊条件干涉。",
        sensing: "长期观察格斯与人类欲望，可通过崇拜、梦境和幽界渠道影响现实。",
        tactics: "偏诱导、挑衅和精神污染，擅长利用痛苦、欲望和献祭心理。",
        special: "神之手、幽界显化、火焰女神崇拜、精神诱导、显化体压制、因果律感知。",
        weakness: "需要显化媒介或幽界语境；显化体受特殊武器和因果节点影响，不能视为不可触及本体。",
        setting: "按蚀之刻后Slan的神之手与幽界显化表现记录。",
        basis: "worldbook只用于抽取Slan姓名；定级依据Berserk Wiki公开资料入口，显化和精神诱导不直接提高到大破坏档。"
      })
    })
  ]);
})();

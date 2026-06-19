(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["神雕侠侣"];

  if (!work) {
    throw new Error("神雕侠侣 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lin-chaoying",
      name: "林朝英",
      en: "Lin Chaoying",
      affiliation: "古墓派",
      grade: "古墓派始创人 / 前代绝顶高手",
      appearances: ["金庸共通世界书", "神雕侠侣"],
      timelineStatus: "前代传说期 / 古墓派创立者",
      aliases: ["林女侠", "祖师婆婆", "古墓派祖师", "古墓派开山祖师", "Lin Chao-ying"],
      fandomSlug: "林朝英",
      confidence: "review",
      evidenceType: ["角色页入口", "小说资料入口", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "身份/武学",
          label: "金庸 Wiki：林朝英",
          url: "https://jinyong.fandom.com/zh/wiki/%E6%9E%97%E6%9C%9D%E8%8B%B1",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "核对林朝英为《神雕侠侣》人物、古墓派开山祖师，武学包含玉女心经、天罗地网势、玉蜂针、冰魄银针、美女拳法、玉女剑法、玉女素心剑法，并与王重阳同代对照。"
        }
      ],
      revisionNotes: [
        "worldbook 仅用于金庸共通世界书 key/comment 中的古墓派姓名抽取；没有读取或采用 worldbook 正文描述。",
        "林朝英在《神雕侠侣》主线开始前已逝，面板按前代传说期和古墓派创立者资料保守记录，避免把“绝顶高手”名号直接换成高破坏档。"
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜玉女心经/古墓派武学｜传说侧", "与王重阳同代对照，古墓派绝学单体杀伤强；按金庸顶级武者局部破坏保守记录。"],
        defense: ["墙级", "房屋级｜内力/身法/招架｜传说侧", "防护来自内力、轻功、招架和战斗经验，不按硬抗大范围破坏处理。"],
        movement: ["亚音速", "亚音速｜古墓轻功/天罗地网势", "古墓派身法和天罗地网势支持高端武侠轻功。"],
        reaction: ["亚音速", "亚音速｜顶级高手交锋｜传说侧", "按与王重阳级别高手对照的近战反应保守记录。"],
        vitality: ["精锐韧体", "精锐韧体｜内功", "仍是人体生命结构，内功和意志提升续战但不是特殊生命体。"],
        healing: ["缓慢自愈", "中速自愈｜内功/寒玉床/休整", "可借内功和寒玉床辅助修炼休整；无战斗快速再生。"],
        energy: ["墙级能量", "房屋级能量｜玉女心经/古墓派内功", "内力资源按前代绝顶高手处理，支撑古墓派绝学和长期修炼体系。"],
        energyRegen: ["缓慢回能", "中速回能｜调息/寒玉床/环境", "回气依赖调息、修炼环境和休整，不是瞬时回满。"]
      }),
      notes: notes({
        penetration: "玉女心经、玉女剑法、玉女素心剑法、天罗地网势和针法偏高速、招式克制与点穴/暗器杀伤；范围仍按武侠局部破坏处理。",
        resistance: "以身法、招架、内功和古墓环境应对强敌；本体硬度仍是人类武者，不等同护体结界。",
        sensing: "顶级武者的听劲、观招和近身预判；无跨区域索敌或超自然全知。",
        tactics: "武学创造力极强，能创设克制全真派武学的体系，并以机关心计和环境安排压制王重阳。",
        special: "古墓派始创、玉女心经、玉女剑法、玉女素心剑法、天罗地网势、美女拳法、玉蜂针、冰魄银针、银索金铃索、寒玉床修炼体系。",
        weakness: "主要资料来自前代回忆、设定和门派传承；主线开始前已故，缺少大量正面实战细节。",
        setting: "金庸共通 worldbook 的古墓派 key/comment 中出现林朝英；本条按《神雕侠侣》前代传说期记录。",
        basis: "worldbook只用于抽取林朝英姓名；定级依据金庸 Wiki 角色入口和古墓派武学资料。绝顶高手与王重阳对照只支持金庸顶级武者档，不直接换算为大范围破坏或超自然生命结构。"
      })
    })
  ]);
})();

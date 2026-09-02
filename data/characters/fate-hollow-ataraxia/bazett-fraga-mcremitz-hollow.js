(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/hollow ataraxia"];

  if (!work) {
    throw new Error("Fate/hollow ataraxia work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bazett-fraga-mcremitz-hollow",
      name: "巴泽特·弗拉加·马克雷米茨",
      en: "Bazett Fraga McRemitz",
      ja: "バゼット・フラガ・マクレミッツ",
      affiliation: "魔术协会 / 封印指定执行者",
      grade: "封印指定执行者 / Fragarach持有者",
      appearances: ["Fate/hollow ataraxia"],
      timelineStatus: "hollow ataraxia循环期 / Avenger契约",
      aliases: ["巴泽特", "Bazett", "Bazett Fraga McRemitz", "Gods Holder", "Fragarach持有者"],
      fandomSlug: "Bazett_Fraga_McRemitz",
      confidence: "review",
      evidenceType: ["资料入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "TYPE-MOON Wiki：Bazett Fraga McRemitz",
          url: "https://typemoon.fandom.com/wiki/Bazett_Fraga_McRemitz",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对巴泽特、封印指定执行者、Fate/hollow ataraxia 关键人物、Lancer原御主和Fragarach持有者语境。"
        },
        {
          type: "wiki",
          scope: "宝具机制入口",
          label: "TYPE-MOON Wiki：Fragarach",
          url: "https://typemoon.fandom.com/wiki/Fragarach",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对Fragarach作为对敌方王牌发动的条件型反击宝具；不把因果反击直接换算为大范围破坏。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "TYPE-MOON Wiki：Fate/hollow ataraxia",
          url: "https://typemoon.fandom.com/wiki/Fate/hollow_ataraxia",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对本作和hollow ataraxia语境；不作为单独量级依据。"
        }
      ],
      revisionNotes: ["从型月 DLC worldbook 的巴泽特 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["墙体级", "楼宇级｜Fragarach反击｜条件", "徒手、符文与魔术格斗高于普通人；Fragarach是对王牌的单体反击，不按大范围破坏处理。"],
        defense: ["墙体级", "房屋级｜符文/魔术防护", "人类魔术师本体，承伤强但不能按从者硬度处理。"],
        movement: ["亚音速", "音速｜魔术强化/近战突进", "封印指定执行者的近战突进和格斗速度。"],
        reaction: ["亚音速", "音速｜Fragarach发动窗口｜条件", "能抓取王牌发动窗口，但反击机制不等同常态全局预知。"],
        vitality: ["精锐韧体", "精锐韧体｜魔术强化/重伤续战", "人体结构，续战依赖意志、魔术强化和循环语境。"],
        healing: ["无自愈", "缓慢自愈｜治疗/循环语境", "本体无稳定高速自愈；循环或治疗不写成常态恢复。"],
        energy: ["砖块级能量", "楼宇级能量｜Fragarach/魔术资源｜条件", "个人魔术资源有限，Fragarach是高价值条件牌。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/循环语境", "补能需要休整或外部循环条件，不是无消耗战斗。"]
      }),
      notes: notes({
        penetration: "Fragarach针对敌方切札/王牌进行因果反击，单体穿透和克制极强；基础杀伤仍以魔术格斗与符文武装为主。攻击速度：符文强化拳脚随巴泽特近战出手，Fragarach要在对手使用王牌后触发因果反击；其先后制约不是普通飞行速度。",
        resistance: "魔术强化、封印指定执行者训练和符文防护提高承伤；对从者级正面火力、诅咒、精神干涉和供魔切断仍需单独判断。",
        sensing: "圣杯战争经验、魔术师感知和对王牌发动窗口的判断较强；Fragarach需要条件成立。",
        tactics: "擅长逼出对手王牌、近身压制和以Fragarach反杀；在缺少对手情报或对手不使用切札时收益下降。",
        special: "Fragarach、符文魔术、封印指定执行者格斗、Avenger契约、第四日循环语境。",
        weakness: "人类本体承伤有限；Fragarach弹数、发动条件、情报差和循环外状态都是关键限制。",
        setting: "按 Fate/hollow ataraxia 中巴泽特记录；Prisma世界线和FGO灵基不并入本条。",
        basis: "worldbook只用于抽取巴泽特姓名；定级依据 TYPE-MOON Wiki 角色、作品和Fragarach资料入口，条件反击与本体面板分开记录。"
      })
    })
  ]);
})();

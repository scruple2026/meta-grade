(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bazett-fraga-mcremitz",
      name: "巴泽特·弗拉加·马克雷米茨",
      en: "Bazett Fraga McRemitz",
      ja: "バゼット・フラガ・マクレミッツ",
      affiliation: "魔术协会 / 封印指定执行者",
      grade: "重要战斗角色 / 符文格斗 / 弗拉格拉克",
      appearances: ["2wei", "3rei", "剧场版相关"],
      timelineStatus: "2wei至3rei综合 / 休战协力期",
      aliases: ["巴泽特", "Bazett", "封印指定执行者"],
      fandomSlug: "Bazett_Fraga_McRemitz_(Fate/kaleid)",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位",
          label: "动画3rei官方角色页：バゼット・フラガ・マクレミッツ",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对巴泽特为封印指定执行者、拥有压倒性战斗力并曾负责Class Card回收任务。"
        },
        {
          type: "episode",
          scope: "对主角组压制与切札",
          label: "动画2wei官方分集简介第9-10话",
          url: "https://anime.prisma-illya.jp/2wei/story/",
          citation: "第9話「独りの戦い」 / 第10話「その手が守ったものは」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录巴泽特以压倒性力量逼入绝境，并以切札反制Rider Install美游的宝具；用于格斗、反应和弗拉格拉克峰值依据。"
        },
        {
          type: "wiki",
          scope: "符文格斗与复活符文",
          label: "TYPE-MOON Wiki: Bazett Fraga McRemitz (Fate/kaleid)",
          url: "https://typemoon.fandom.com/wiki/Bazett_Fraga_McRemitz_(Fate/kaleid)",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对符文强化、徒手对抗英灵影、复活符文和对Gilgamesh战表现；不作为官方量级证据。"
        },
        {
          type: "wiki",
          scope: "弗拉格拉克机制",
          label: "TYPE-MOON Wiki: Fragarach",
          url: "https://typemoon.fandom.com/wiki/Fragarach",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对Fragarach的对切札、因果/时间反击和条件限制；特殊机制不直接抬高破坏主等级。"
        }
      ],
      revisionNotes: [
        "初建条目：弗拉格拉克按条件型因果反击记录，不把命中心脏和宝具克制换算成高破坏范围。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜符文强化/弗拉格拉克｜条件", "徒手和符文强化可造成大范围局部破坏；弗拉格拉克是单体心脏反击，不按大范围破坏记录。"],
        defense: ["墙级", "楼级｜符文装甲/复活符文｜条件", "符文手套和肉体韧性极高，复活符文属于续命/恢复而非纯硬防。"],
        movement: ["亚音速", "超音速｜格斗突进", "近身爆发强，可压制魔法少女组。"],
        reaction: ["亚音速", "超音速｜对宝具反击", "能处理Class Card宝具战，但弗拉格拉克部分来自条件型反击机制。"],
        vitality: ["精锐韧体", "楼级生命阈值｜复活符文｜条件", "能承受重伤并靠复活符文续战，仍可能被克制或消耗。"],
        healing: ["中速自愈", "瞬愈｜复活符文｜条件", "复活符文可在心脏停止时瞬间恢复身体，触发条件和资源有限。"],
        energy: ["墙级能量", "楼级能量｜符文/弗拉格拉克", "主要是个人魔术、符文和一次性宝具资源。"],
        energyRegen: ["中速回能", "快速回能｜符文准备", "可连续格斗但宝具弹数和符文准备不是无限。"]
      }),
      notes: notes({
        penetration: "弗拉格拉克在对手使用切札后以因果/时间反击命中心脏，单体穿透和克制极强；基础破坏范围仍以符文格斗表现为准。",
        resistance: "符文装甲、肉体韧性和复活符文带来很强承伤与续战；不等同于对封印、概念、空间、供魔切断或多命目标的全免疫。",
        sensing: "封印指定执行者经验让她能识别宝具、符文和近战切札的发动窗口；Fragarach依赖判断对手切札，不是被动未来视。",
        tactics: "单兵反制能力极强，擅长用格斗和符文逼出对手王牌后以Fragarach反杀；面对无明显切札或多目标消耗战时战术收益下降。",
        special: "Age of Gods符文、符文装甲、复活符文、封印指定执行者格斗术、Fragarach条件型反击、对宝具切札压制。",
        weakness: "Fragarach需要对手发动切札且条件成立；对无明显切札、复数生命、同归于尽型诅咒或情报克制会失效或削弱。",
        setting: "按Prisma Illya世界线巴泽特记录；与Fate/hollow ataraxia资料交叉时只采用机制，不直接混入其他作品战绩。",
        basis: "依据官方角色页压倒性战斗力描述、2wei第9-10话对主角组和Rider Install的反制，以及资料页中的符文、复活和Fragarach条件定级。"
      })
    })
  ]);
})();

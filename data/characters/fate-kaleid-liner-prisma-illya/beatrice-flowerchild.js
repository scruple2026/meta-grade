(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "beatrice-flowerchild",
      name: "贝阿朵莉丝·弗劳尔柴尔德",
      en: "Beatrice Flowerchild",
      ja: "ベアトリス・フラワーチャイルド",
      affiliation: "恩兹华斯家 / Dolls",
      grade: "主要反派战斗员 / Berserker Class Card",
      appearances: ["3rei", "美游世界相关"],
      timelineStatus: "3rei / 雷神之锤使用期",
      aliases: ["贝阿朵莉丝", "Beatrice", "ベアトリス", "雷神托尔卡持有者"],
      fandomSlug: "Beatrice_Flowerchild",
      confidence: "review",
      evidenceType: ["官方角色页", "官方分集简介", "资料维基交叉核对"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与雷神之锤",
          label: "动画3rei官方角色页：ベアトリス・フラワーチャイルド",
          url: "https://anime.prisma-illya.jp/3rei/character/detail.php",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对贝阿朵莉丝为恩兹华斯Dolls、持有Berserker Class Card，并在Install后操纵雷击宝具Mjolnir。"
        },
        {
          type: "episode",
          scope: "初战压制与Thor卡",
          label: "动画3rei官方分集简介第2-4话",
          url: "https://anime.prisma-illya.jp/3rei/story/",
          citation: "第2話「邂逅と再会」 / 第4話「弱虫の妹へ」",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: true,
          claim: "官方简介记录贝阿朵莉丝追击伊莉雅和田中、展现压倒性力量，并把Berserker雷神Thor卡列为主角组需要对抗的敌方卡。"
        },
        {
          type: "wiki",
          scope: "Berserker卡与雷击宝具",
          label: "TYPE-MOON Wiki: Beatrice Flowerchild",
          url: "https://typemoon.fandom.com/wiki/Beatrice_Flowerchild",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "交叉核对Berserker Class Card、Mjolnir雷击和Doll身份；不作为官方量级证据。"
        }
      ],
      revisionNotes: [
        "补完初稿：雷神之锤和Berserker Install按宝具/形态峰值记录，雷电属性不直接换算为更高速度或范围破坏。"
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜Mjolnir/雷击｜Berserker Install｜争议", "锤击和雷击压制力强；峰值按雷神之锤宝具和本作可见范围保守列街区级。"],
        defense: ["房屋级", "楼级｜Berserker Install/Doll", "Berserker卡和Doll身体提高正面承伤，但不是全类型免疫。"],
        movement: ["亚音速", "音速｜Berserker突进", "近战突进和跳跃爆发强，雷击效果不直接写成移动速度。"],
        reaction: ["亚音速", "音速｜近战压制", "可压制初入美游世界的伊莉雅和田中，反应按近战表现保守记录。"],
        vitality: ["精锐韧体｜Doll", "楼级生命阈值｜Berserker Install", "Doll身体和狂战士卡带来高韧性，仍可被战术牵制和宝具克制。"],
        healing: ["无自愈", "常规自愈｜Doll维护/外部处理", "缺少稳定战斗中自愈表现；Doll维护不等同反转术式。"],
        energy: ["楼级能量", "街区级能量｜雷神之锤｜争议", "雷击宝具输出强但依赖Class Card和使用条件。"],
        energyRegen: ["常规回能", "快速回能｜Class Card", "可持续挥锤和雷击压制，但不是无限能源。"]
      }),
      notes: notes({
        penetration: "Mjolnir锤击、雷击和Berserker强化具备强破甲、震荡和范围压制；雷电杀伤是属性/宝具特性，不自动折算为光速或更高主破坏档。",
        resistance: "Berserker Install、Doll身体和高韧性让她适合正面强攻；对精神/人格干涉、Doll结构处理、空间封锁、供魔切断和针对雷击抗性仍需另判。",
        sensing: "感知主要来自Doll身体和近战压迫中的视听/魔力反应，缺少精密索敌或预知描写；雷击范围能迫使敌人暴露但不是侦查能力。",
        tactics: "战斗风格偏Berserker式强攻，擅长用雷击和Mjolnir压制正面空间；对诱导、远程消耗和空间牵制的处理相对粗糙。",
        special: "Berserker（雷神Thor系）Class Card、Mjolnir雷神之锤、雷击释放、Doll身体、狂战士式近战爆发和恩兹华斯阵营联动。",
        weakness: "战斗风格偏直接强攻，容易被远程消耗、空间/结界牵制、情报诱导和针对Doll或Class Card的手段处理；雷神之锤峰值依赖Install和宝具使用。",
        setting: "按Prisma Illya 3rei贝阿朵莉丝记录；Thor/雷神之锤只按本作表现，不把神话或其他Fate作品设定直接套入主面板。",
        basis: "依据3rei官方角色页对Berserker卡、Mjolnir和Doll身份的说明，结合第2-4话对伊莉雅/田中压制和敌方Thor卡定位保守定级。"
      })
    })
  ]);
})();

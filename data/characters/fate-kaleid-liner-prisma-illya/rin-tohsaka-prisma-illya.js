(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/kaleid liner 魔法少女☆伊莉雅"];

  if (!work) {
    throw new Error("Fate/kaleid liner 魔法少女☆伊莉雅 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "rin-tohsaka-prisma-illya",
      name: "远坂凛",
      en: "Rin Tohsaka",
      ja: "遠坂凛",
      affiliation: "魔术协会 / 时钟塔",
      grade: "魔术师 / 宝石魔术",
      appearances: ["职阶卡回收事件", "2wei", "3rei"],
      timelineStatus: "职阶卡回收事件 / Ruby前契约者",
      aliases: ["凛", "Rin", "红宝石前主人", "Kaleid Ruby前主人"],
      fandomSlug: "Rin_Tohsaka_(Fate/kaleid)",
      confidence: "medium",
      evidenceType: ["角色页入口", "作品资料入口", "worldbook姓名字段"],
      sourceQuality: "entry",
      evidenceLinks: [{
        type: "wiki",
        scope: "角色资料入口",
        label: "TYPE-MOON Wiki: Rin Tohsaka (Fate/kaleid)",
        url: "https://typemoon.fandom.com/wiki/Rin_Tohsaka_(Fate/kaleid)",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对Prisma Illya世界线的远坂凛、Class Card回收任务、宝石魔术和Magical Ruby前主人资料入口。"
      }, {
        type: "wiki",
        scope: "中文角色资料入口",
        label: "萌娘百科：远坂凛",
        url: "https://zh.moegirl.org.cn/远坂凛",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "中文交叉资料入口；用于核对远坂凛及其Fate/kaleid liner 魔法少女☆伊莉雅分支资料。"
      }, {
        type: "source",
        scope: "作品资料入口",
        label: "Wikipedia: Fate/kaleid liner Prisma Illya",
        url: "https://en.wikipedia.org/wiki/Fate/kaleid_liner_Prisma_Illya",
        lang: "en",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于交叉核对Prisma Illya初期设定：远坂凛被派遣回收Class Card，Magical Ruby改选伊莉雅后由凛监督任务。"
      }],
      revisionNotes: [
        "从魔法少女伊莉雅 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。",
        "本条按 Prisma Illya 远坂凛记录，不并入 Fate/stay night 圣杯战争路线战绩。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜宝石魔术/礼装", "宝石魔术可形成对人级爆发，不并入Fate本篇高端战绩。"],
        defense: ["凡人级", "墙级｜魔术防护/礼装", "本体是人类魔术师，峰值依赖防护与礼装。"],
        movement: ["凡人速", "亚音速｜魔术辅助", "无魔杖契约时以人类机动和短时魔术辅助为主。"],
        reaction: ["凡人速", "亚音速｜魔术战经验", "能应对魔术战和Class Card事件，但不按英灵速度处理。"],
        vitality: ["强化凡体", "强化凡体｜魔术师体质", "训练人类水平，缺少自愈。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "依赖治疗和休整。"],
        energy: ["砖级能量", "墙级能量｜宝石/礼装", "宝石储备能提高爆发，资源有限。"],
        energyRegen: ["中速回能", "中速回能｜休整/宝石补充", "宝石和魔力需要准备补充。"]
      }),
      notes: notes({
        penetration: "宝石魔术和礼装可造成对人爆发与局部破坏，缺少稳定大范围战斗表现。",
        resistance: "魔术防护有限，本体仍是人类；失去礼装或被高速近战贴身会明显吃亏。",
        sensing: "具备魔术师基础侦测、结界识别和Class Card任务经验。",
        tactics: "时钟塔派遣魔术师，擅长计划、术式分析和与露维亚竞争式协同。",
        special: "宝石魔术、魔术礼装、Class Card回收任务经验，曾为Magical Ruby契约者。",
        weakness: "资源依赖宝石、准备和礼装；喜剧性内斗与情绪会削弱任务效率。",
        setting: "按Prisma Illya早期凛记录，不并入Fate/stay night圣杯战争路线战绩。",
        basis: "worldbook只用于抽取远坂凛姓名；定级依据 TYPE-MOON Wiki、萌娘百科和作品资料入口，魔杖契约历史与本体战力分开记录。"
      })
    })
  ]);
})();

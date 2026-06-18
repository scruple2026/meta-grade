(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("DanMachi work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "dungeon-monsters",
      name: "地下城普通怪物",
      en: "Dungeon Monsters",
      ja: "モンスター",
      affiliation: "地下城",
      grade: "普通怪物 / 魔石与掉落物规则样本",
      appearances: ["异端儿篇", "全篇地下城"],
      timelineStatus: "普通怪物总括 / 非楼层主",
      aliases: [
        "怪物",
        "Monster",
        "魔石",
        "Magic Stone",
        "掉落物",
        "Drop Item",
        "哥布林",
        "Goblin",
        "狗头人",
        "Kobold",
        "米诺陶洛斯",
        "Minotaur",
        "Pass Parade",
        "怪物进呈"
      ],
      fandomSlug: "Monsters",
      confidence: "review",
      evidenceType: ["资料入口", "术语资料入口"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "怪物总表",
          label: "DanMachi Wiki: Monsters",
          url: "https://danmachi.fandom.com/wiki/Monsters",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对普通怪物由地下城产生、存在哥布林/狗头人/米诺陶洛斯等样本，并按怪物个体差异保守记录。"
        },
        {
          type: "wiki",
          scope: "术语资料入口",
          label: "DanMachi Wiki: Terminology",
          url: "https://danmachi.fandom.com/wiki/Terminology",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对魔石是怪物核心、掉落物是怪物死亡后残留素材；不把资源价值折算为单体战斗量级。"
        },
        {
          type: "official",
          scope: "日文官方剧情页",
          label: "TVアニメ「ダンまちIV」公式サイト：STORY",
          url: "https://danmachi.com/danmachi4/story/index2.php?slideNum=10",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对第4期远征窗口、强化种、怪物进呈和魔石语境；普通怪物总括不单独抬高到楼层主级。"
        }
      ],
      revisionNotes: ["从异端儿篇 worldbook 的 enemy_普通怪物魔石掉落物 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["砖级", "房屋级｜米诺陶洛斯/个体差异", "普通低层怪物很弱；中层强怪如米诺陶洛斯可威胁低阶冒险者。"],
        defense: ["砖级", "房屋级｜怪物体质/个体差异", "从哥布林、狗头人到米诺陶洛斯差异很大，非楼层主样本保守记录。"],
        movement: ["凡人速", "亚音速｜怪物机动/个体差异", "多数低中层怪物靠本能突进和包围，不按高速特化怪物统一抬档。"],
        reaction: ["凡人速", "亚音速｜怪物本能/个体差异", "低层样本以本能为主；中层怪物战斗反应更强。"],
        vitality: ["强化凡体", "房屋级生命阈值｜怪物体质", "魔石是核心弱点，破坏核心会使怪物死亡；体量随物种差异变化。"],
        healing: ["无自愈", "缓慢自愈｜怪物体质/个体差异", "普通怪物不按高速再生处理；强化种或特殊个体另行标注。"],
        energy: ["砖级能量", "房屋级能量｜魔石/怪物体质", "资源来自魔石、体力和物种体质；掉落物价值不等于战斗输出。"],
        energyRegen: ["缓慢回能", "中速回能｜休整/魔石资源", "普通怪物没有稳定高回能表现，战斗消耗后依本体状态恢复。"]
      }),
      notes: notes({
        penetration: "爪牙、体魄、冲撞、武器化身体、群体围攻和怪物进呈构成主要威胁；不同物种差异很大。",
        resistance: "怪物体质强于普通人，但魔石是核心弱点；破坏核心或足够伤害可直接失能/死亡。",
        sensing: "以怪物本能、地下城环境适应和群体行为为主；普通样本不具备稳定高阶索敌。",
        tactics: "普通样本多为本能攻击，怪物进呈和怪物宴属于冒险环境中的战术风险，不代表所有怪物有高智谋。",
        special: "魔石核心、掉落物、地下城生成、物种差异、怪物进呈、强化种风险。",
        weakness: "魔石核心、低智能、物种弱点、冒险者经验和公会情报都可被针对利用。",
        setting: "按 worldbook enemy 索引中的普通怪物/魔石/掉落物总括记录；楼层主、Juggernaut、阿斯泰里俄斯和异端儿另列。",
        basis: "worldbook只用于抽取普通怪物、魔石、掉落物、哥布林、狗头人和米诺陶洛斯等名称；定级依据公开怪物总表和术语资料入口，非楼层主样本保守记录。"
      })
    })
  ]);
})();

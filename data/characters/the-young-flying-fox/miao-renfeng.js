(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["飞狐外传"];
  if (!work) throw new Error("飞狐外传 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "miao-renfeng",
    name: "苗人凤",
    en: "Miao Renfeng",
    aliases: ["苗人鳳", "金面佛"],
    affiliation: "苗家剑法传人",
    grade: "飞狐系列顶级剑客",
    appearances: ["飞狐外传相关剧情"],
    timelineStatus: "飞狐外传期",
    fandomSlug: "苗人鳳",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口", "worldbook索引字段"],
    sourceQuality: "entry",
    evidenceLinks: [
      {
        type: "wiki",
        scope: "角色入口",
        label: "金庸 Wiki：苗人凤",
        url: "https://jinyong.fandom.com/zh/wiki/%E8%8B%97%E4%BA%BA%E9%B3%B3",
        lang: "zh",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "用于核对角色、外号和苗家剑法资料入口；具体量级仍按保守武侠口径处理。"
      }
    ],
    dimensions: dims({
      attack: ["墙体级", "房屋级｜苗家剑法", "飞狐系列顶级剑客，峰值仍按局部剑法杀伤处理。"],
      defense: ["墙体级", "房屋级｜招架/内力", "剑法、经验和内力支撑承压。"],
      movement: ["亚音速", "亚音速｜轻功/剑客身法", "顶级剑客身法快，但不写现代高速档。"],
      reaction: ["亚音速", "亚音速｜剑法判断", "剑术判断和实战经验强。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/意志", "人体结构，续战来自内力和意志。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "可调息恢复，不按再生能力处理。"],
      energy: ["墙体级能量", "房屋级能量｜苗家剑法/内力", "内力和体力属飞狐系列高端。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力消耗后需要调息。"]
    }),
    notes: notes({
      penetration: "苗家剑法偏兵刃单体杀伤和破招，不等同范围爆破。攻击速度：苗家剑法以近身兵刃交换和破招时机为核心，剑招出手不能由长途身法或反应描述直接替代。",
      resistance: "正面剑斗承压强；毒、暗算和剧情条件仍需单独处理。",
      sensing: "剑客经验丰富，能通过招式、气势和破绽判断对手。",
      tactics: "沉稳正面剑斗强，擅长以高水平基本功和经验压制对手。",
      special: "苗家剑法、金面佛名号、飞狐系列高手体系。",
      weakness: "破坏范围有限，对毒、暗器和非正面条件需谨慎。",
      setting: "按《飞狐外传》相关时期苗人凤记录；兼顾飞狐系列人物定位。",
      basis: "worldbook只用于从comment/key抽取苗人凤姓名；定级依据金庸 Wiki 和公开小说条目入口，按金庸低武到中武局部剑法口径记录。"
    })
  })]);
})();

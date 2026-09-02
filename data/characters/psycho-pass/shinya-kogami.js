(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["心理测量者"];

  if (!work) {
    throw new Error("Psycho-Pass work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shinya-kogami",
      name: "狡啮慎也",
      en: "Shinya Kogami",
      ja: "狡噛慎也",
      affiliation: "公安一系 / 执行官",
      grade: "执行官 / 前监视官",
      appearances: ["西比拉系统审判篇", "第一季"],
      timelineStatus: "第一季 / 追查槙岛",
      aliases: ["狡啮", "Kogami", "Kougami"],
      fandomSlug: "Shinya_Kogami",
      confidence: "medium",
      evidenceType: ["官方入口", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["砖块级", "墙体级｜Dominator/枪械/爆破", "优秀格斗与警用武装，Dominator授权时火力更高。"],
        defense: ["凡人级", "砖块级｜防具/格挡", "肉身仍是人类，靠训练和装备承伤。"],
        movement: ["凡人速", "亚音速｜格斗/追踪", "受训执行官机动。"],
        reaction: ["凡人速", "亚音速｜格斗/刑事直觉", "近战和追踪反应强。"],
        vitality: ["强化凡体", "精锐韧体", "高训练度和承压能力。"],
        healing: ["无自愈", "缓慢自愈｜体魄", "自然恢复。"],
        energy: ["砖块级能量｜体能/武器", "墙体级能量｜Dominator/爆破", "资源来自体能、武器和公安装备。"],
        energyRegen: ["中速回能", "缓慢回能｜补给", "弹药和装备需要补给。"]
      }),
      notes: notes({
        penetration: "Dominator、枪械、爆破、格斗和刑事追踪结合。攻击速度：狡噛的格斗按贴身出手判断，Dominator、普通枪弹与爆破装置则分别受瞄准、发射或引爆流程限制。",
        resistance: "无特殊抗性，肉身会被刀枪和爆炸伤害。",
        sensing: "刑警直觉、犯罪心理分析和追踪能力强。",
        tactics: "追查、伏击、近战和单独行动经验丰富，能针对槙岛式犯罪策划反制。",
        special: "Dominator使用、执行官权限、刑事追踪、犯罪心理侧写。",
        weakness: "执念会影响判断；Dominator受西比拉判定限制，离开公安后资源下降。",
        setting: "按第一季执行官狡啮慎也记录。",
        basis: "worldbook只用于抽取狡啮慎也姓名；定级依据PSYCHO-PASS官方入口、授权角色页与Psycho-Pass Wiki资料入口。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["Fate/Apocrypha"];

  if (!work) {
    throw new Error("Fate/Apocrypha work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kairi-sisigou",
      name: "狮子劫界离",
      en: "Kairi Sisigou",
      ja: "獅子劫界離",
      affiliation: "红方 / 魔术协会",
      grade: "红方 Saber 御主 / 死灵魔术师",
      appearances: ["Type-Moon DLC worldbook key/comment", "Fate/Apocrypha", "圣杯大战"],
      timelineStatus: "圣杯大战 / Mordred 御主",
      aliases: ["狮子劫", "Kairi Shishigou", "Shishigou Kairi", "獅子劫 界離", "红方 Saber 御主", "Mordred's Master"],
      fandomSlug: "Kairi_Sisigou",
      confidence: "review",
      evidenceType: ["官方角色页", "资料维基交叉核对", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "身份/阵营",
          label: "Fate/Apocrypha Official USA Website: Kairi Shishigou",
          url: "https://fate-apocryphausa.com/sp/character/?chara=sisigou",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "官方角色页确认他是自由死灵魔术师、受魔术协会雇佣参战，并且是 Mordred 的御主。"
        },
        {
          type: "wiki",
          scope: "能力/装备交叉资料",
          label: "TYPE-MOON Wiki: Kairi Sisigou",
          url: "https://typemoon.fandom.com/wiki/Kairi_Sisigou",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "交叉核对死灵魔术、侦测结界、Gandr 霰弹枪、心脏爆弹、Hydra 毒刃、战斗经验和对 Mordred 的供魔语境；不把从者宝具输出折算为 Kairi 本体面板。"
        }
      ],
      revisionNotes: [
        "worldbook 仅用于 key/comment 姓名抽取；没有读取或采用 worldbook 正文描述。",
        "本条目先作为 Apocrypha 专属人类御主补入；Mordred 的从者战力、宝具和令咒效果不计入 Kairi 自身主维度。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜死灵魔术礼装/心脏爆弹/毒刃｜条件", "常态靠改造短霰弹枪、Gandr 诅咒弹和死灵魔术礼装；峰值来自心脏爆弹、Hydra 毒刃等条件杀伤，不等同大范围破坏。"],
        defense: ["凡人级", "砖级｜魔兽皮衣/装备/规避", "本体仍是人类；防护主要来自装备、魔术师经验、战场规避和预设。"],
        movement: ["凡人速", "凡人速｜战场行动", "没有稳定超人移动表现；主要靠枪械、预设、隐蔽和 Mordred 协同。"],
        reaction: ["凡人速", "亚音速｜魔术师战/短距枪战｜争议", "能在魔术师战场中使用枪械和礼装处理威胁，但不按从者级反应记录。"],
        vitality: ["强化凡体", "精锐韧体｜老练魔术师/战场经验", "身体强壮、经验丰富但仍是人类生命结构。"],
        healing: ["无自愈", "缓慢自愈｜治疗/休整", "没有稳定战斗自愈；损伤依赖治疗、休整和事前准备。"],
        energy: ["砖级能量", "墙级能量｜礼装储备/御主供魔｜条件", "个人魔力和礼装支撑自身战斗并向 Mordred 供魔，但 Mordred 宝具输出不计入 Kairi 自身攻击。"],
        energyRegen: ["缓慢回能", "中速回能｜工房/灵脉/休整", "魔力回复依赖休整、工房或灵脉条件；不是快速战斗回满。"]
      }),
      notes: notes({
        penetration: "Gandr 诅咒弹、人类手指弹、魔术师心脏爆弹、Hydra 毒素和死灵魔术礼装具有高单体杀伤或针对魔术师的穿透价值，但范围破坏低。",
        resistance: "本体仍是人类御主；魔兽皮衣、枪械距离、工房布置和经验能降低风险，但正面承受从者级火力很危险。",
        sensing: "可布置侦测结界并依靠魔术师猎杀经验判断威胁；不是全域千里眼或自动未来视。",
        tactics: "自由魔术师和死灵术士，擅长赏金猎杀、预设陷阱、现代武装与魔术礼装混用，并能与 Mordred 进行高风险但高默契的协同。",
        special: "Mordred 的御主、令咒、死灵魔术、侦测结界、Gandr 霰弹枪、心脏爆弹、人类/动物肢体弹药、Hydra 毒刃、圆桌碎片触媒。",
        weakness: "人类本体、弹药和礼装资源有限，峰值依赖准备、命中或场地；对从者正面战和大范围高火力缺少硬抗手段。",
        setting: "按 Fate/Apocrypha 圣杯大战时期记录；worldbook 只提供姓名入口，不采用其正文描述。",
        basis: "官方页面核对角色身份与御主定位；TYPE-MOON Wiki 作为公开资料入口交叉核对装备和魔术机制。主维度按人类魔术师和装备条件保守记录，不折算 Mordred 的从者输出。"
      })
    })
  ]);
})();

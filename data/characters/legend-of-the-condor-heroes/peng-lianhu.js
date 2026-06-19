(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];

  if (!work) {
    throw new Error("射雕英雄传 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "peng-lianhu",
      name: "彭连虎",
      en: "Peng Lianhu",
      affiliation: "完颜洪烈阵营 / 黄河帮盟友",
      grade: "千手人屠 / 完颜洪烈手下高手",
      appearances: ["金庸共通世界书", "射雕英雄传"],
      timelineStatus: "射雕主线期 / 完颜洪烈门客",
      aliases: ["彭連虎", "千手人屠", "彭寨主", "Peng Lianhu"],
      fandomSlug: "彭連虎",
      confidence: "review",
      evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "身份/武学",
          label: "金庸 Wiki：彭连虎",
          url: "https://jinyong.fandom.com/zh/wiki/%E5%BD%AD%E9%80%A3%E8%99%8E",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "核对彭连虎为《射雕英雄传》人物、外号千手人屠、完颜洪烈手下五大高手之一，兵器为镔铁判官笔，并擅暗器与快手功夫。"
        },
        {
          type: "wiki",
          scope: "角色列表交叉核对",
          label: "金庸 Wiki：射雕英雄传角色列表",
          url: "https://jinyong.fandom.com/zh/wiki/%E5%B0%84%E9%B5%B0%E8%8B%B1%E9%9B%84%E5%82%B3%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "角色列表把彭连虎列为千手人屠，说明其与黄河帮、沙通天、侯通海、完颜洪烈阵营和周伯通制服结局的关系。"
        }
      ],
      revisionNotes: [
        "worldbook 仅用于金庸共通世界书 key/comment 中“黄河帮·与彭连虎之联盟”的姓名抽取；没有读取或采用 worldbook 正文描述。",
        "彭连虎按射雕主线期完颜洪烈门客和黄河帮盟友记录；千手人屠外号、五大高手定位和智囊作用只作作品内相对语境，不折算为五绝级面板。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜判官笔/暗器/快手功夫", "暗器、判官笔和快手功夫可威胁普通武者，但不按顶尖高手输出记录。"],
        defense: ["砖级", "墙级｜内力/招架", "本体仍是人类武者，防护来自内力、兵器招架和江湖经验。"],
        movement: ["凡人速", "亚音速｜身手敏捷", "公开资料强调身手敏捷和手快，保守写入江湖高手机动。"],
        reaction: ["凡人速", "亚音速｜暗器/快手", "快手、暗器和门客级交锋经验提高近战反应；面对周伯通等顶尖高手无稳定应对。"],
        vitality: ["强化凡体", "强化凡体｜内功", "人体生命结构，江湖武者体魄高于普通人但不写高生命阈值。"],
        healing: ["缓慢自愈", "缓慢自愈｜调息/医治", "没有稳定战斗自愈表现。"],
        energy: ["砖级能量", "墙级能量｜内力/暗器资源", "内力和暗器资源按一般江湖高手记录。"],
        energyRegen: ["缓慢回能", "缓慢回能｜调息/补给", "回气和暗器补给依赖休整。"]
      }),
      notes: notes({
        penetration: "镔铁判官笔、暗器和快手功夫偏点穴、刺击、偷袭与短距爆发，纯破坏范围有限。",
        resistance: "能参与门客级江湖战斗，但结局被周伯通等高手制服并长期被囚，说明上限低于顶尖高手。",
        sensing: "江湖经验、暗器判断和武学见识较广；无远距索敌或特殊感知。",
        tactics: "在沙通天、侯通海、灵智上人、梁子翁等人中常承担智囊和牵头作用，擅用计和协同行动。",
        special: "千手人屠外号、暗器、镔铁判官笔、与黄河帮/沙通天互援、完颜洪烈门客关系。",
        weakness: "心狠手辣但格局有限，遇到黄蓉、周伯通、五绝级人物和郭靖成长后的正面压制时容错低。",
        setting: "金庸共通 worldbook 的黄河帮 key/comment 中出现彭连虎；本条按《射雕英雄传》主线期记录。",
        basis: "worldbook只用于抽取彭连虎姓名；定级依据金庸 Wiki 角色页和射雕角色列表。千手人屠和完颜洪烈手下五大高手只支持江湖中层战斗定位，不直接抬到五绝级或大范围破坏。"
      })
    })
  ]);
})();

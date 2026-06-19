(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["射雕英雄传"];

  if (!work) {
    throw new Error("射雕英雄传 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hou-tonghai",
      name: "侯通海",
      en: "Hou Tonghai",
      affiliation: "黄河帮 / 完颜洪烈阵营",
      grade: "黄河帮高手 / 三头蛟",
      appearances: ["金庸共通世界书", "射雕英雄传"],
      timelineStatus: "射雕主线期 / 完颜洪烈门客",
      aliases: ["侯通海", "三头蛟", "三頭蛟", "黄河帮高手", "Hou Tonghai"],
      fandomSlug: "侯通海",
      confidence: "review",
      evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "身份/武学",
          label: "金庸 Wiki：侯通海",
          url: "https://jinyong.fandom.com/zh/wiki/%E4%BE%AF%E9%80%9A%E6%B5%B7",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "核对侯通海为《射雕英雄传》人物、外号三头蛟、黄河帮高手、完颜洪烈手下五大高手之一，兵器为三股钢叉。"
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
          claim: "角色列表把侯通海列为三头蛟和黄河帮高手，并说明其与完颜洪烈阵营、沙通天等人的关系。"
        }
      ],
      revisionNotes: [
        "worldbook 仅用于金庸共通世界书 key/comment 中“黄河帮·核心人物·侯通海”的姓名抽取；没有读取或采用 worldbook 正文描述。",
        "侯通海按射雕主线期黄河帮高手记录；完颜洪烈门客和五大高手定位只作作品内相对语境，不折算为五绝级面板。"
      ],
      dimensions: dims({
        attack: ["砖级", "墙级｜三股钢叉/黄河帮武功", "黄河帮高手和兵器杀伤可压制普通武者，但不按五绝或欧阳克级输出记录。"],
        defense: ["砖级", "墙级｜内力/招架", "本体为人类武者，防护来自内力、兵器招架和江湖经验。"],
        movement: ["凡人速", "亚音速｜江湖轻功", "有江湖高手轻功和近身机动，但缺少顶尖身法证据。"],
        reaction: ["凡人速", "亚音速｜高手交锋", "可参与射雕主线江湖混战；面对郭靖后期、五绝级或周伯通明显不足。"],
        vitality: ["强化凡体", "强化凡体｜内功", "人体生命结构，内功和江湖经验提高承伤，不写高生命阈值。"],
        healing: ["缓慢自愈", "缓慢自愈｜调息/医治", "没有稳定战斗自愈表现。"],
        energy: ["砖级能量", "墙级能量｜黄河帮内力", "内力资源按一般江湖高手记录。"],
        energyRegen: ["缓慢回能", "缓慢回能｜调息", "回气依赖休整和调息。"]
      }),
      notes: notes({
        penetration: "三股钢叉和黄河帮武功偏兵器近战、刺击和江湖搏杀；纯破坏范围有限。",
        resistance: "能参与门客级江湖战斗，但被郭靖击败并被周伯通等高手制服，说明上限明显低于顶尖高手。",
        sensing: "常规江湖观察、听劲和水路帮派经验；无远距索敌或特殊感知。",
        tactics: "与沙通天、彭连虎等人协同行动，适合门客群战和帮派冲突；单独临场判断不突出。",
        special: "黄河帮高手、三头蛟外号、三股钢叉、完颜洪烈门客关系。",
        weakness: "心性和判断力有限，面对黄蓉式计谋、郭靖成长后正面实力和周伯通等顶尖高手缺少应对。",
        setting: "金庸共通 worldbook 的黄河帮 key/comment 中出现侯通海；本条按《射雕英雄传》主线期记录。",
        basis: "worldbook只用于抽取侯通海姓名；定级依据金庸 Wiki 角色页和射雕角色列表。黄河帮高手与完颜洪烈手下五大高手只支持江湖中层战斗定位，不直接抬到五绝级或大范围破坏。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hiruzen-sarutobi",
      name: "猿飞日斩",
      en: "Hiruzen Sarutobi",
      ja: "猿飛ヒルゼン",
      affiliation: "木叶隐村",
      grade: "第三代火影 / 忍术教授",
      appearances: ["中忍考试篇", "木叶崩溃"],
      timelineStatus: "木叶崩溃 / 老年三代目",
      aliases: ["三代目火影", "Hiruzen", "Sarutobi", "忍术教授"],
      fandomSlug: "Hiruzen_Sarutobi",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从中忍考试 worldbook 名字池补入；主面板按老年木叶崩溃战记录。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜组合忍术/尸鬼封尽", "五遁、金刚如意棒和尸鬼封尽形成高端峰值；封印不折算破坏规模。"],
        defense: ["墙级", "楼级｜忍术防御/金刚如意棒", "老年本体防御有限，靠忍术、猿魔和战术防御。"],
        movement: ["亚音速", "超音速｜瞬身", "老年仍保有火影级短距机动。"],
        reaction: ["亚音速", "超音速｜经验", "经验和忍术理解支撑对多目标反应。"],
        vitality: ["强化凡体", "精锐韧体", "老年肉身会衰退，但意志和查克拉控制支撑长战。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["楼级能量", "街区级能量｜五遁/封印", "查克拉和术库丰富，但老年续航有限。"],
        energyRegen: ["中速回能", "中速回能", "高强度结界内战斗会快速消耗。"]
      }),
      notes: notes({
        penetration: "五遁连携、手里剑影分身、金刚如意棒和尸鬼封尽构成多类型杀伤；尸鬼封尽是同归封印，不是普通攻击档位。",
        resistance: "靠经验、替身、五遁防御和猿魔协防承伤；老年身体、防御持续性和封印代价是短板。",
        sensing: "火影级战场阅读、忍术识别和多目标判断强，但没有全知或远距自动索敌。",
        tactics: "术库极广，擅长用五遁、分身、通灵和封印拆解复杂局面；面对秽土转生和结界封锁时仍能寻找牺牲性胜机。",
        special: "五遁忍术、猿魔通灵、金刚如意棒、尸鬼封尽、影分身。",
        weakness: "老年体力和查克拉下降明显；尸鬼封尽代价极高，属于同归峰值。",
        setting: "按木叶崩溃篇老年三代目记录，不按巅峰青年传闻直接抬档。",
        basis: "依据猿飞日斩在木叶崩溃中对大蛇丸、秽土初代/二代和结界内战斗的表现定级。"
      })
    })
  ]);
})();

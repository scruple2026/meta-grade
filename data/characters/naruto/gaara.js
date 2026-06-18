(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gaara",
      name: "我爱罗",
      en: "Gaara",
      ja: "我愛羅",
      affiliation: "砂隐村",
      grade: "一尾人柱力 / 砂忍",
      appearances: ["中忍考试篇", "正篇"],
      timelineStatus: "中忍考试篇 / 守鹤暴走峰值",
      aliases: ["Gaara of the Sand", "砂瀑我爱罗", "守鹤"],
      fandomSlug: "Gaara",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从中忍考试 worldbook 名字池补入；主面板按中忍考试的一尾人柱力阶段记录。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜砂瀑/守鹤", "砂瀑大葬、砂缚柩和守鹤化可形成大范围压制。"],
        defense: ["楼级｜砂之盾", "街区级｜守鹤外衣", "自动砂防和尾兽化显著提高防御。"],
        movement: ["亚音速", "亚音速｜砂移动", "移动不是强项，依赖砂防和远程压制。"],
        reaction: ["亚音速", "超音速｜自动防御｜争议", "自动砂防可先于本人意识反应，但不等同本体速度。"],
        vitality: ["精锐韧体", "街区级生命阈值｜一尾外力", "人柱力与尾兽化提高生命阈值。"],
        healing: ["缓慢自愈", "中速自愈｜尾兽查克拉", "恢复有限，主要依靠砂防避免受伤。"],
        energy: ["楼级能量", "街区级能量｜一尾查克拉", "砂操控和尾兽查克拉资源较高。"],
        energyRegen: ["中速回能", "快速回能｜尾兽查克拉", "一尾查克拉提供续航但会带来失控风险。"]
      }),
      notes: notes({
        penetration: "砂缚柩、砂瀑送葬和守鹤化偏挤压、掩埋和范围封锁，适合压制机动差目标。",
        resistance: "自动砂防、砂之铠和守鹤外力提供高防御；高速近身、精神干扰和封印会绕过稳定防线。",
        sensing: "砂可作为周边警戒与防护媒介，自动防御降低偷袭风险；视野、注意力和砂量会限制控制。",
        tactics: "早期偏残酷正面压制，擅长用防守反击逼迫对手进入砂的控制范围；情绪失控会降低战术精密度。",
        special: "砂操控、自动防御、砂之铠、一尾守鹤查克拉、尾兽化。",
        weakness: "移动速度和近身体术不是优势；尾兽化不可稳定控制，失眠与精神状态会影响战斗。",
        setting: "按中忍考试篇我爱罗记录，不把后期风影时期的成熟砂控全部并入。",
        basis: "依据中忍考试预选、决赛和木叶崩溃阶段我爱罗的砂防、砂瀑与守鹤暴走表现定级。"
      })
    })
  ]);
})();

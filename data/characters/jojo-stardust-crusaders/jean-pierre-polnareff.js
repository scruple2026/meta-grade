(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["JOJO的奇妙冒险：星尘斗士"];

  if (!work) {
    throw new Error("JOJO的奇妙冒险：星尘斗士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jean-pierre-polnareff",
      name: "简·皮耶尔·波鲁那雷夫",
      en: "Jean Pierre Polnareff",
      ja: "ジャン・ピエール・ポルナレフ",
      affiliation: "乔斯达一行",
      grade: "银色战车使者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Jean_Pierre_Polnareff",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "JOJO 官方门户：星尘斗士角色页",
          url: "https://jojo-portal.com/anime/sc/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对星尘斗士官方角色和替身入口；替身速度/时间停止仍需原作章节或设定书补证。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜银色战车", "银色战车高速剑击以单体穿刺和切割为主。"],
        defense: ["凡人级", "墙级｜替身格挡", "本体脆弱，替身可格挡。"],
        movement: ["凡人速", "亚音速｜替身短距", "替身速度不等同本体长距移动。"],
        reaction: ["亚音速", "超音速｜替身剑速｜争议", "替身剑速极高但多数表现难精确换算。"],
        vitality: ["强化凡体", "精锐韧体", "多次重伤后仍能行动。"],
        healing: ["无自愈", "无自愈", "依赖治疗。"],
        energy: ["凡人能量", "房屋级能量｜替身", "替身输出集中在剑击。"],
        energyRegen: ["常规回能", "常规回能", "依赖体力与精神。"]
      }),
      notes: notes({
        penetration: "银色战车以高速剑刺、连斩、精密切割和脱甲后的速度爆发取胜，适合刺穿要害、截断小型投射物和近距压制；杀伤集中在剑尖与剑身，不是大范围输出。",
        resistance: "本体是人类，替身可用剑与速度格挡部分攻击；缺少再生和大范围防御，替身受创会反馈本体，面对远程、陷阱或规则替身时脆弱。",
        sensing: "替身使者感知和银色战车的高速剑路捕捉支撑近距判断；脱甲加速提升进攻但不扩大索敌范围。",
        tactics: "正面剑术执行力强，能用脱甲、连刺和精准格挡抢节奏；情绪化与复仇心容易被信息差能力利用。",
        special: "银色战车是近距高速剑士型替身，能精密刺击、连斩和脱甲加速；脱甲提升速度但牺牲防护。",
        weakness: "射程和攻击方式偏直线近战，脱甲加速牺牲防护；波鲁那雷夫容易被情绪、复仇心和信息差牵制。",
        setting: "按第三部星尘斗士旅程期银色战车记录，不计入第五部后续状态。",
        basis: "依据波鲁那雷夫在第三部多场替身战中的剑速、切割和承伤表现定级。"
      })
    })
  ]);
})();

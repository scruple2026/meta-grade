(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "krillin",
      name: "克林",
      en: "Krillin",
      ja: "クリリン",
      affiliation: "Z战士",
      grade: "地球武道家",
      appearances: ["那美克星篇", "正篇"],
      timelineStatus: "那美克星篇 / 地球战士",
      aliases: ["Kuririn", "气圆斩"],
      fandomSlug: "Krillin",
      confidence: "review",
      evidenceType: ["角色页入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Krillin（Dragon Ball）",
          url: "https://vsbattles.fandom.com/wiki/Krillin_%28Dragon_Ball%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核克林在那美克星篇及龙珠 Z 连续性中的气功、气圆斩和战力成长口径；本站仍保守标注争议。"
        }
      ],
      revisionNotes: [
        "从那美克星篇 worldbook 名字池补入；主面板按那美克星篇克林记录，不并入龙珠超。"
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜气圆斩｜争议", "气功波与气圆斩有高切割威胁，但不按赛亚人/弗利萨行星级对标直接抬档。"],
        defense: ["楼级", "街区级｜气防御｜争议", "气防御与武道训练支撑承伤，但面对基纽队和弗利萨明显脆弱。"],
        movement: ["高超音速", "宇宙速度级｜飞行｜争议", "舞空术可高速飞行，具体换算保守标争议。"],
        reaction: ["高超音速", "宇宙速度级｜争议", "可参与那美克星高压战斗，但不视为高端弗利萨级反应。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜气防御｜争议", "人类肉身依赖气防御提升生命阈值。"],
        healing: ["无自愈", "中速自愈｜外部仙豆/治疗", "自身无再生，依赖外部治疗。"],
        energy: ["街区级能量", "城市级能量｜气功/气圆斩｜争议", "气储量较地球篇大幅提高，但资源有限。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "可恢复气，但高强度战斗后会耗竭。"]
      }),
      notes: notes({
        penetration: "气圆斩是高切割型气功，适合以低范围高穿透威胁强敌；这不代表克林基础范围破坏等同高阶赛亚人。攻击速度：拳脚随克林近战机动，气功波与气圆斩放出后独立飞行；太阳拳先制造视觉干扰，不等于后续攻击瞬时命中。",
        resistance: "气防御和武道训练提高承伤，面对远高于自身的基纽队、弗利萨军和弗利萨本体时仍会迅速失去战斗力。",
        sensing: "可感知气、隐藏气并判断敌我强弱，对没有气或遮蔽气的目标会受限。",
        tactics: "经验丰富，擅长太阳拳、气圆斩、分散气功和团队协作，用技巧弥补面板差距。",
        special: "龟派气功、气圆斩、太阳拳、舞空术、气感知。",
        weakness: "人类肉身和气储量上限有限，面对远高于自身的速度/能量压制时容错率很低。",
        setting: "按那美克星篇克林记录，不含后续人造人篇、布欧篇或龙珠超状态。",
        basis: "依据克林在那美克星篇与弗利萨军、基纽队相关战斗中的气功、气圆斩、感知和团队支援表现定级。"
      })
    })
  ]);
})();

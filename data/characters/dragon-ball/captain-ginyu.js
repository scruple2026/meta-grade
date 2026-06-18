(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "captain-ginyu",
      name: "基纽队长",
      en: "Captain Ginyu",
      ja: "ギニュー",
      affiliation: "基纽特战队 / 弗利萨军",
      grade: "基纽特战队队长",
      appearances: ["那美克星篇"],
      timelineStatus: "那美克星篇 / 本体与换身术",
      aliases: ["Ginyu", "Captain Ginyu", "基纽"],
      fandomSlug: "Captain_Ginyu",
      confidence: "review",
      evidenceType: ["角色页入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Captain Ginyu",
          url: "https://vsbattles.fandom.com/wiki/Captain_Ginyu",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核基纽队长、基纽特战队和换身术的跨界口径；本站把换身术写入特殊能力，不直接提高破坏档。"
        }
      ],
      revisionNotes: [
        "从那美克星篇 worldbook 名字池补入；主面板按那美克星篇本体状态记录。"
      ],
      dimensions: dims({
        attack: ["城市级", "国家级｜气功｜争议", "作为基纽特战队队长远强于普通成员，但国家级只作龙珠战力尺度争议峰值。"],
        defense: ["城市级", "国家级｜气防御｜争议", "气防御和本体战斗力高，具体跨档换算保留争议。"],
        movement: ["宇宙速度级", "宇宙速度级｜飞行/高速战斗｜争议", "可高速飞行和近战。"],
        reaction: ["高超音速", "宇宙速度级｜争议", "可处理那美克星篇中高端高速战斗。"],
        vitality: ["城市级生命阈值", "国家级生命阈值｜气防御｜争议", "生命阈值依赖气防御和宇宙人身体。"],
        healing: ["无自愈", "中速自愈｜外部治疗/换身", "无稳定再生，换身是特殊逃生条件。"],
        energy: ["城市级能量", "国家级能量｜气功｜争议", "气储量强于普通特战队成员，但远低于最终形态弗利萨。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "气可恢复但换身和重伤会改变战斗状态。"]
      }),
      notes: notes({
        penetration: "基础气功和近战压制为主；换身术可夺取目标身体，属于命中条件型特殊权能，不计入破坏规模。",
        resistance: "本体气防御和宇宙人身体强，但若换入不适应身体或遭到重伤，战斗效率会大幅下降。",
        sensing: "依赖战斗力探测、气感知和弗利萨军战斗经验；傲慢和摆姿势习惯会暴露窗口。",
        tactics: "能用自伤制造换身收益，擅长压迫弱者与利用信息差；换身后若不熟悉目标身体会失控。",
        special: "身体交换术、气功、舞空术、基纽特战队协同。",
        weakness: "换身术需要命中和时机，可能被第三方干扰；换身后无法立刻发挥新身体全部实力。",
        setting: "按那美克星篇基纽队长记录，不并入龙珠超复活相关状态。",
        basis: "依据基纽在那美克星篇对悟空、贝吉塔、克林和悟饭相关战斗中的气、速度和换身术表现定级。"
      })
    })
  ]);
})();

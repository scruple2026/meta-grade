(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yhwach",
      name: "友哈巴赫",
      en: "Yhwach",
      ja: "ユーハバッハ",
      affiliation: "无形帝国",
      grade: "千年血战最终 boss / 灭却师之祖",
      appearances: ["正篇"],
      timelineStatus: "千年血战篇 / 灵王吸收峰值",
      aliases: [],
      fandomSlug: "Yhwach",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Yhwach",
          url: "https://vsbattles.fandom.com/wiki/Yhwach",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核友哈巴赫、全知全能和灵王吸收峰值的跨界量级口径。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：BLEACH―ブリーチ― 68",
          url: "https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-880423-1",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对灵王死亡、世界崩坏危机和千年血战高端世界结构背景；不把世界结构机制直接等同普通爆破。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：BLEACH―ブリーチ― 74",
          url: "https://www.shueisha.co.jp/books/items/contents.html?isbn=978-4-08-880774-4",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对友哈巴赫最终决战和败北条件；全知全能按预知/未来改写机制，不直接等于反应速度。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Bleach Wiki：Yhwach",
          url: "https://bleach.fandom.com/wiki/Yhwach",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对友哈巴赫角色资料、灭却师能力和最终战入口。"
        }
      ],
      dimensions: dims({
        attack: ["大陆级", "地表级｜全知全能/灵王吸收｜争议", "高峰涉及灵王、世界结构和未来改写，不能只按普通爆破理解。"],
        defense: ["大陆级", "地表级｜全知全能｜争议", "防御核心是未来改写和吸收能力，不是单纯硬度。"],
        movement: ["高超音速", "超第三宇宙速度级｜争议", "高端移动争议大，不默认光速。"],
        reaction: ["高超音速", "超第三宇宙速度级｜全知全能｜争议", "全知全能属于预知/未来改写，不直接等同反应速度。"],
        vitality: ["大陆级生命阈值｜争议", "地表级生命阈值｜灵王吸收｜争议", "生命结构和复归机制高度特殊。"],
        healing: ["极速自愈", "瞬愈｜未来改写｜争议", "可通过未来改写规避死亡，但有银箭等弱点。"],
        energy: ["大陆级能量", "地表级能量｜灵王吸收｜争议", "灵压和灵王相关资源极高。"],
        energyRegen: ["极速回能", "极速回能｜圣别/吸收", "可通过吸收回收力量。"]
      }),
      notes: notes({
        penetration: "全知全能通过预知和未来改写绕开常规防御，圣别与灵王吸收可夺取/回收力量；世界结构层面的崩坏危机属于灵王机制和峰值背景，不等同每次挥击都是地表爆破。",
        resistance: "友哈巴赫的防御核心是未来改写、力量吸收、圣别和灵王相关生命结构，而非单纯硬度；静止之银、能力被封、未来视被干扰和特定败北条件可绕过复归。",
        sensing: "全知全能提供未来观测/改写层面的信息优势，但应作为预知与规则机制处理，不直接折算反应速度。",
        tactics: "战略统合和能力分配强，能用圣别、灭却师体系和未来改写压制局势；静止之银等特定反制说明其机制存在窗口。",
        special: "全知全能、圣别、灭却师能力、灵王吸收、未来改写。",
        weakness: "对特定反制情报和静止之银高度敏感；全知全能虽强，但并非无条件即时反应速度，若能力窗口被切断或未来被干扰会暴露本体。",
        setting: "按千年血战篇吸收灵王后的最终战峰值记录；世界结构危机、未来改写和圣别都写作特殊机制，不把灭却师之祖称号直接换成普通破坏档。",
        basis: "依据友哈巴赫在千年血战篇作为最终 boss 的全知全能、灵王吸收和败北条件定级。"
      })
    })
  ]);
})();

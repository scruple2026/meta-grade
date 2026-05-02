(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一拳超人"];

  if (!work) {
    throw new Error("一拳超人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "boros",
      name: "波罗斯",
      en: "Boros",
      ja: "ボロス",
      category: "最终 boss",
      affiliation: "暗物质海贼团",
      grade: "外星霸主 / 第一季最终 boss",
      appearances: ["正篇"],
      timelineStatus: "流星爆发 / 崩星咆哮炮峰值",
      aliases: [],
      fandomSlug: "Boros",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Lord Boros",
          url: "https://vsbattles.fandom.com/wiki/Lord_Boros",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核流星爆发、崩星咆哮炮和再生峰值的跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：ワンパンマン ヒーロー大全",
          url: "https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-880549-8",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对早期怪人/外星敌人与ONE监修资料；崩星咆哮炮的地表级峰值仍按原作台词和争议换算处理。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：ワンパンマン 7",
          url: "https://books.shueisha.co.jp/items/contents.html?jdcn=08880262870701315501",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对波罗斯对埼玉战、流星爆发和崩星咆哮炮所在卷册；一次性大招与常态输出分开记录。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "One-Punch Man Wiki：Boros",
          url: "https://onepunchman.fandom.com/wiki/Boros",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对波罗斯角色资料、暗物质海贼团篇和能力入口。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "地表级｜崩星咆哮炮｜争议｜一次性", "常规解放与流星爆发很高；崩星咆哮炮按地表级争议峰值记录。"],
        defense: ["城市级", "地表级｜再生与装甲｜争议", "可承受埼玉普通攻击后再生，但并非无限耐久。"],
        movement: ["高超音速", "超第三宇宙速度级｜流星爆发｜争议", "流星爆发速度极高但精确换算争议。"],
        reaction: ["高超音速", "超第三宇宙速度级｜争议", "可进行极高速肉搏。"],
        vitality: ["城市级生命阈值", "地表级生命阈值｜再生｜争议", "生命力依赖高能量再生。"],
        healing: ["极速自愈", "瞬愈｜能量消耗", "可快速修复严重损伤，但能量耗尽会死亡。"],
        energy: ["城市级能量", "地表级能量｜崩星咆哮炮｜争议", "崩星咆哮炮为耗尽型大招。"],
        energyRegen: ["快速回能", "快速回能", "大招后能量枯竭属于消耗后果，不作为更低的峰值回能档。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "流星爆发、能量炮、超高速肉搏、再生。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据波罗斯与埼玉战中的装甲、流星爆发、月球踢和崩星咆哮炮设定表现定级。"
      })
    })
  ]);
})();

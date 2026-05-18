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
        penetration: "装甲解除、流星爆发肉搏、能量炮和崩星咆哮炮提供从高速踢击到耗尽型超大招的多层输出；崩星咆哮炮是一次性/耗尽峰值，不代表常规连发。",
        resistance: "装甲、外星生命力和高能量再生让波罗斯能在重创后迅速恢复，流星爆发提高攻防速度；再生消耗生命能量，能量耗尽后会迅速死亡。",
        sensing: "宇宙霸主级战斗经验与肉体感官支持极高速肉搏判断，但缺少特殊索敌或未来视表现。",
        tactics: "战斗风格偏正面压制，能按对手强度释放装甲、流星爆发和大招；能源消耗极快，战术容错集中在短爆发窗口。",
        special: "流星爆发、能量炮、超高速肉搏、再生。",
        weakness: "流星爆发和崩星咆哮炮都会快速消耗能量，大招后几乎没有续航；对埼玉级纯肉体压制缺少有效机制反制。",
        setting: "按对埼玉战的装甲解除、流星爆发和崩星咆哮炮峰值记录；地表级只作为争议一次性峰值。",
        basis: "依据波罗斯与埼玉战中的装甲、流星爆发、月球踢和崩星咆哮炮设定表现定级。"
      })
    })
  ]);
})();

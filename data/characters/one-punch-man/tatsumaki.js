(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一拳超人"];

  if (!work) {
    throw new Error("一拳超人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "tatsumaki",
      name: "战栗的龙卷",
      en: "Tatsumaki",
      ja: "戦慄のタツマキ",
      affiliation: "英雄协会",
      grade: "S级英雄 / 超能力者",
      appearances: ["正篇"],
      timelineStatus: "怪人协会篇",
      aliases: [],
      fandomSlug: "Tatsumaki",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Tatsumaki（Tornado of Terror）",
          url: "https://vsbattles.fandom.com/wiki/Tatsumaki_%28Tornado_of_Terror%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核怪人协会篇念动力大范围输出和屏障防御的跨界量级口径。"
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
          claim: "用于核对战栗的龙卷、S级英雄定位和ONE监修数据；念动力国家级峰值仍按后续怪人协会篇表现标争议。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：ワンパンマン 27",
          url: "https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-883336-1&mode=1",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对怪人协会篇、赛克斯/大蛇相关战场和龙卷大范围念动力表现；屏障与肉身防御仍分开记录。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "One-Punch Man Wiki：Tatsumaki",
          url: "https://onepunchman.fandom.com/wiki/Tatsumaki",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对龙卷角色资料、念动力能力和主要战斗入口。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "国家级｜超能力大范围扭曲｜争议", "大范围念动力可扭曲城市级战场，国家级作为高端争议峰值。"],
        defense: ["城市级", "国家级｜念动力屏障｜争议", "屏障远强于肉身，需标注覆盖和精神状态。"],
        movement: ["超音速", "高超音速｜念动力飞行｜争议", "飞行与战斗机动极快，缺少稳定光速证据。"],
        reaction: ["超音速", "高超音速｜念动力感知｜争议", "可在大范围战场同时应对多目标。"],
        vitality: ["精锐韧体", "街区级生命阈值｜念动力支撑", "肉身不等同屏障防御，重伤和精神消耗会削弱。"],
        healing: ["无自愈", "无自愈", "无自体再生。"],
        energy: ["城市级能量", "国家级能量｜争议", "超能力储量巨大，但会疲劳和精神枯竭。"],
        energyRegen: ["常规回能", "快速回能｜精神恢复", "高强度持续输出后需要恢复。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "念动力飞行、屏障、大范围扭曲、远程控制。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据龙卷对怪人协会、赛克斯相关战斗和大范围念动力表现保守定级。"
      })
    })
  ]);
})();

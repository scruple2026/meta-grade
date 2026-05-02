(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["死神"];

  if (!work) {
    throw new Error("死神 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sosuke-aizen",
      name: "蓝染惣右介",
      en: "Sosuke Aizen",
      ja: "藍染惣右介",
      affiliation: "护廷十三队叛徒 / 虚圈",
      grade: "破面篇最终 boss / 崩玉融合",
      appearances: ["正篇"],
      timelineStatus: "破面篇崩玉融合到千年血战封印后",
      aliases: [],
      fandomSlug: "Sosuke_Aizen",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Sosuke Aizen",
          url: "https://vsbattles.fandom.com/wiki/Sosuke_Aizen",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核蓝染崩玉融合、千年血战封印后状态和高端灵压口径。"
        },
        {
          type: "setting",
          scope: "日文官方角色书",
          label: "集英社：BLEACH OFFICIAL CHARACTER BOOK 3 UNMASKED",
          citation: "久保帯人『BLEACH OFFICIAL CHARACTER BOOK 3 UNMASKED』集英社, 2011年6月, ISBN 978-4-08-874861-0。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对破面篇、崩玉融合前后和蓝染相关角色资料；本站大陆级峰值仍标争议。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：BLEACH―ブリーチ― 69",
          url: "https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-880460-6",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对千年血战篇蓝染再登场和封印后状态；镜花水月与灵压主档分开记录。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Bleach Wiki：Sosuke Aizen",
          url: "https://bleach.fandom.com/wiki/Sosuke_Aizen",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对蓝染角色资料、镜花水月和崩玉相关入口。"
        }
      ],
      dimensions: dims({
        attack: ["城市级", "大陆级｜崩玉融合｜争议", "常态队长级灵压极强，崩玉融合后显著提升。"],
        defense: ["城市级", "大陆级｜崩玉再生｜争议", "崩玉提供进化和恢复，但仍可被封印。"],
        movement: ["高超音速", "超第三宇宙速度级｜瞬步｜争议", "高端瞬步速度争议大。"],
        reaction: ["高超音速", "超第三宇宙速度级｜争议", "可应对顶级死神战斗。"],
        vitality: ["城市级生命阈值", "大陆级生命阈值｜崩玉融合｜争议", "崩玉融合让死亡条件复杂。"],
        healing: ["极速自愈", "瞬愈｜崩玉｜争议", "崩玉可促成快速恢复和进化。"],
        energy: ["城市级能量", "大陆级能量｜崩玉｜争议", "灵压和崩玉储量极高。"],
        energyRegen: ["快速回能", "极速回能｜崩玉", "崩玉融合后恢复极强但可被封印。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "镜花水月、完全催眠、崩玉融合、高灵压、封印弱点。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据蓝染从尸魂界篇到破面篇、千年血战篇的灵压、崩玉恢复和镜花水月表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "father",
      name: "父亲大人",
      en: "Father",
      ja: "お父様",
      affiliation: "人造人阵营",
      grade: "最终 boss / 人造人源头",
      appearances: ["正篇"],
      timelineStatus: "最终日 / 全国炼成阵相关峰值",
      aliases: ["瓶中小人", "The Dwarf in the Flask"],
      fandomSlug: "Father",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Father（Fullmetal Alchemist）",
          url: "https://vsbattles.fandom.com/wiki/Father_%28Fullmetal_Alchemist%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核全国炼成阵、神之力和贤者之石峰值的跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "SQUARE ENIX：鋼の錬金術師パーフェクトガイドブック３",
          url: "https://magazine.jp.square-enix.com/top/comics/detail/9784757527133/",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对“お父様”的正体、逆转炼成阵和最终日前关键设定；国家级峰值仍限定为全国炼成阵/外源/仪式。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "SQUARE ENIX：鋼の錬金術師 CHRONICLE",
          url: "https://magazine.jp.square-enix.com/top/comics/detail/9784757532496/",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "作为完结后大全指南，用于核对父亲大人、贤者之石和最终日相关世界观；不把炼金术机制直接换成常态爆破等级。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Fullmetal Alchemist Wiki：Father",
          url: "https://fma.fandom.com/wiki/Father",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对父亲大人身份、最终日和全国炼成阵相关资料入口。"
        }
      ],
      defaultTimelineKey: "promised-day",
      timelinePanels: [
        {
          key: "dwarf-in-the-flask",
          label: "早期 / 瓶中小人",
          status: "瓶中小人，未取得类人体与全国炼成阵资源",
          dimensions: dims({
            attack: ["昆虫级", "昆虫级｜瓶中小人", "早期本体困在烧瓶中，缺少直接物理攻击表现，只按极低端本体处理。"],
            defense: ["昆虫级", "昆虫级｜烧瓶依赖", "生命高度依赖容器和环境，不能按后期人造人肉身处理。"],
            movement: ["不适用", "不适用", "瓶中阶段无独立空间位移能力。"],
            reaction: ["凡人速", "凡人速｜语言/意识", "可交流、诱导和谋划，但无高速战斗响应表现。"],
            vitality: ["昆虫级生命阈值｜烧瓶依赖｜特殊生命结构", "昆虫级生命阈值｜烧瓶依赖｜特殊生命结构", "生存条件特殊但本体脆弱，需说明容器依赖而不是抬高生命阈值。"],
            healing: ["无自愈", "无自愈", "未表现受损后自我修复。"],
            energy: ["昆虫级能量｜烧瓶内资源｜争议", "昆虫级能量｜炼金知识/灵魂资源雏形｜争议", "有炼金术知识和灵魂层面特殊性，但战斗可用资源极低，只作最低端能量池覆盖样例。"],
            energyRegen: ["无回能", "无回能", "未表现可自行恢复战斗资源。"]
          }),
          notes: "早期瓶中小人只作为父亲大人的前史时间线，不代表最终日战力。"
        },
        {
          key: "promised-day",
          label: "最终日 / 全国炼成阵",
          status: "全国炼成阵相关峰值",
          dimensions: dims({
            attack: ["街区级", "国家级｜全国炼成阵｜外源｜仪式", "常规炼成可大范围压制；国家级峰值来自全国炼成阵、贤者之石和外源仪式，不是随手常态输出。"],
            defense: ["街区级", "国家级｜神之力｜外源｜短时", "常态依赖贤者之石和再生；峰值为吸收巨大外源后的短暂状态。"],
            movement: ["凡人速", "亚音速｜炼成辅助", "没有稳定高速位移证据，主要靠炼成、防护和范围控制。"],
            reaction: ["亚音速", "超音速｜炼成防御｜争议", "可快速发动炼成与防护，但许多表现属于术式响应而非身体速度。"],
            vitality: ["街区级生命阈值｜贤者之石｜特殊生命结构", "城市级生命阈值｜贤者之石｜资源争议", "生命依赖大量贤者之石和特殊本体；高峰按资源型生命阈值记录，不等同肉身硬度。"],
            healing: ["快速自愈", "极速自愈｜贤者之石", "可消耗贤者之石修复身体，资源耗尽后崩溃。"],
            energy: ["街区级能量", "国家级能量｜全国炼成阵｜外源", "高峰能量来自国土炼成阵与大量灵魂资源，必须标注外源和仪式条件。"],
            energyRegen: ["缓慢回能", "快速回能｜贤者之石｜外源", "依赖贤者之石库存与外源吸收，不是瞬时回能。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "国家级｜全国炼成阵｜外源｜仪式", "常规炼成可大范围压制；国家级峰值来自全国炼成阵、贤者之石和外源仪式，不是随手常态输出。"],
        defense: ["街区级", "国家级｜神之力｜外源｜短时", "常态依赖贤者之石和再生；峰值为吸收巨大外源后的短暂状态。"],
        movement: ["凡人速", "亚音速｜炼成辅助", "没有稳定高速位移证据，主要靠炼成、防护和范围控制。"],
        reaction: ["亚音速", "超音速｜炼成防御｜争议", "可快速发动炼成与防护，但许多表现属于术式响应而非身体速度。"],
        vitality: ["街区级生命阈值｜贤者之石｜特殊生命结构", "城市级生命阈值｜贤者之石｜资源争议", "生命依赖大量贤者之石和特殊本体；高峰按资源型生命阈值记录，不等同肉身硬度。"],
        healing: ["快速自愈", "极速自愈｜贤者之石", "可消耗贤者之石修复身体，资源耗尽后崩溃。"],
        energy: ["街区级能量", "国家级能量｜全国炼成阵｜外源", "高峰能量来自国土炼成阵与大量灵魂资源，必须标注外源和仪式条件。"],
        energyRegen: ["缓慢回能", "快速回能｜贤者之石｜外源", "依赖贤者之石库存与外源吸收，不是瞬时回能。"]
      }),
      notes: notes({
        penetration: "炼成可分解、重构和压制物质结构；国家级峰值不是常规单发破坏。攻击速度：父亲大人的炼成要先发动再在作用区域分解或重构物质；若效果在接触处或范围内形成，就不应虚构一段未展示的飞行速度。",
        resistance: "贤者之石提供再生和防护，但资源可被消耗，神之力也存在容器承载上限。",
        sensing: "依赖贤者之石、国土炼成阵和炼金术网络掌握大范围状态；资源耗尽或阵式被破坏时感知与控制都会下降。",
        tactics: "长期布局和仪式操盘极强，能以国家级阵式和炼金术封锁制造绝对条件；近身失去资源后临场战术不如高端武斗者。",
        special: "贤者之石、国土炼成阵、炼金术封锁、物质重构、外源神之力吸收。",
        weakness: "峰值严重依赖仪式、阵成、贤者之石和外源；资源耗尽后防御与再生快速下降。",
        setting: "按最终日父亲大人记录；常态与全国炼成阵峰值分开标注。",
        basis: "依据父亲大人制造人造人、操控全国炼成阵、吸收外源力量和最终战被逐步消耗的表现定级。"
      })
    })
  ]);
})();

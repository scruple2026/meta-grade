(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "freeza",
      name: "弗利萨",
      en: "Frieza",
      ja: "フリーザ",
      affiliation: "弗利萨军",
      grade: "那美克星篇最终 boss",
      appearances: ["正篇"],
      timelineStatus: "那美克星篇最终形态",
      aliases: [],
      fandomSlug: "Frieza",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Frieza（Dragon Ball Z）",
          url: "https://vsbattles.fandom.com/wiki/Frieza",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核那美克星篇弗利萨、行星破坏和最终形态的跨界量级口径。"
        },
        {
          type: "source",
          scope: "作品量级参考",
          label: "VS Battles Wiki：Dragon Ball",
          url: "https://vsbattles.fandom.com/wiki/Dragon_Ball",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于核对龙珠 Z 漫画连续性、弗利萨篇和作品整体量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：ドラゴンボール完全版公式ガイド LANDMARK / FOREVER",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=4-08-873702-4",
          citation: "鳥山明『ドラゴンボール完全版公式ガイド Dragonball LANDMARK 少年編〜フリーザ編』集英社, 2003年, ISBN 978-4-08-873478-1；鳥山明ほか『ドラゴンボール完全版公式ガイド Dragonball FOREVER 人造人間編〜魔人ブウ編』集英社, 2004年, ISBN 4-08-873702-4。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对弗利萨篇、角色资料和战斗索引；行星级直接表现仍以原作卷话与本站 reference 解释为准。"
        }
      ],
      dimensions: dims({
        attack: ["行星级", "行星级｜死亡球", "具备直接破坏行星的明确表现和设定。"],
        defense: ["行星级｜行星毁灭生存｜直接表现", "行星级｜行星毁灭生存｜直接表现", "可承受行星毁灭环境和超赛悟空战斗。"],
        movement: ["宇宙速度级", "亚光速｜争议", "太空飞行和高端战斗速度很高但换算争议。"],
        reaction: ["高超音速", "亚光速｜争议", "那美克星篇高端反应。"],
        vitality: ["行星级生命结构｜残躯生存｜直接表现", "行星级生命结构｜残躯生存｜直接表现", "残躯仍能存活，生命力极强。"],
        healing: ["无自愈", "缓慢自愈｜改造/医疗", "自身无稳定快速再生。"],
        energy: ["行星级能量｜死亡球｜直接表现", "行星级能量｜死亡球｜直接表现", "气与死亡球足以行星级破坏。"],
        energyRegen: ["快速回能", "快速回能", "可长时间输出，但会消耗。"]
      }),
      notes: notes({
        penetration: "死亡光束以细小高速气束贯穿要害，死亡球和行星破坏技提供明确行星级大范围输出；形态释放是战斗力解放，不等于特殊规则即死。",
        resistance: "弗利萨能在太空、重伤和行星毁灭余波中存活，生命力极强；残躯生还不是高速再生，面对超赛级持续压制、气耗尽或被切碎后缺少外部修复会失去战斗力。",
        special: "死亡光束用于高速贯穿，死亡球用于行星级大范围破坏，多段变身控制力量输出，种族体质支持太空生存。",
        weakness: "终战中存在体力下滑和傲慢误判问题；半残状态虽可存活但战力严重受损，不能把残躯生存等同于完整防御。",
        setting: "按那美克星篇最终形态弗利萨记录，不含机械弗利萨、《龙珠超》黄金/黑弗利萨等后续版本。",
        basis: "依据弗利萨毁灭贝吉塔行星、那美克星战斗和残躯生还表现定级。"
      })
    })
  ]);
})();

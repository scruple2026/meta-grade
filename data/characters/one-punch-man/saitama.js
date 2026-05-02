(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一拳超人"];

  if (!work) {
    throw new Error("一拳超人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "saitama",
      name: "埼玉",
      en: "Saitama",
      ja: "サイタマ",
      affiliation: "英雄协会",
      grade: "主角 / 上限未明",
      appearances: ["正篇"],
      timelineStatus: "漫画后期综合表现 / 上限未明",
      aliases: [],
      fandomSlug: "Saitama",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Saitama",
          url: "https://vsbattles.fandom.com/wiki/Saitama",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核严肃拳、宇宙恐惧饿狼战和上限未明的跨界量级口径。"
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
          claim: "用于核对埼玉、S级英雄/怪人数据和ONE监修资料；埼玉的恒星级仅下限仍来自后续原作表现而非公式书直接定级。"
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
          claim: "用于核对埼玉对波罗斯战和本気モード/认真出手阶段；波罗斯战不能直接外推无限上限。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：ワンパンマン 34",
          citation: "ONE・村田雄介『ワンパンマン』34巻, 集英社, 2025年8月4日, ISBN 978-4-08-884676-7。",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对埼玉与宇宙恐惧模式饿狼的宇宙战场交锋；本站只写已表现下限和争议峰值。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "One-Punch Man Wiki：Saitama",
          url: "https://onepunchman.fandom.com/wiki/Saitama",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对埼玉角色资料和主要战斗入口。"
        }
      ],
      defaultTimelineKey: "late-manga-cosmic",
      timelinePanels: [
        {
          key: "boros-serious-punch",
          label: "波罗斯战 / 严肃拳下限",
          status: "认真系列初期可见峰值",
          dimensions: dims({
            attack: ["行星级｜仅下限｜争议", "行星级｜严肃拳｜仅下限｜争议", "波罗斯战给出远超常规英雄体系的可见下限，但不外推无限。"],
            defense: ["行星级｜仅下限｜争议", "行星级｜仅下限｜争议", "面对波罗斯战仍几乎无伤，按下限记录。"],
            movement: ["高超音速", "宇宙速度级｜争议", "存在月面返回等高速表现，换算争议大。"],
            reaction: ["高超音速", "宇宙速度级｜争议", "可应对波罗斯高端交锋。"],
            vitality: ["行星级生命结构｜仅下限｜争议", "行星级生命结构｜仅下限｜争议", "生命上限未明，只按已表现下限。"],
            healing: ["无自愈", "无自愈", "未表现依赖再生。"],
            energy: ["无资料", "无资料", "体力与上限无法换算。"],
            energyRegen: ["无资料", "无资料", "未表现传统回能机制。"]
          }),
          notes: "不计入后续宇宙恐惧饿狼战的成长曲线。"
        },
        {
          key: "late-manga-cosmic",
          label: "漫画后期 / 宇宙级强敌战",
          status: "宇宙恐惧饿狼战后综合表现",
          dimensions: dims({
            attack: ["行星级｜仅下限", "恒星级｜仅下限｜严肃拳｜争议", "明确远超常规英雄体系，但作品仍以搞笑与未见上限呈现；只记录保守下限。"],
            defense: ["行星级｜仅下限", "恒星级｜仅下限｜争议", "承受极高强度战斗仍近乎无伤，但不写无限或无敌。"],
            movement: ["高超音速", "亚光速｜争议", "存在跨天体与极高速战斗表现，具体速度换算争议极大。"],
            reaction: ["高超音速", "亚光速｜争议", "可应对宇宙级强敌高速交锋，仍不按无证光速以上处理。"],
            vitality: ["行星级生命结构｜仅下限", "恒星级生命结构｜仅下限｜争议", "生命上限未明，按已表现下限记录。"],
            healing: ["无自愈", "无自愈", "未表现依赖再生，主要是极高承伤。"],
            energy: ["无资料", "无资料", "能量总量包含肉体持久度；埼玉体力与上限未明，缺少可换算总资源上限，不按不适用处理。"],
            energyRegen: ["无资料", "无资料", "未表现传统回能机制；体力恢复上限无法量化。"]
          }),
          notes: "当前主面板版本；只记录已表现下限，不推无限。"
        }
      ],
      dimensions: dims({
        attack: ["行星级｜仅下限", "恒星级｜仅下限｜严肃拳｜争议", "明确远超常规英雄体系，但作品仍以搞笑与未见上限呈现；只记录保守下限。"],
        defense: ["行星级｜仅下限", "恒星级｜仅下限｜争议", "承受极高强度战斗仍近乎无伤，但不写无限或无敌。"],
        movement: ["高超音速", "亚光速｜争议", "存在跨天体与极高速战斗表现，具体速度换算争议极大。"],
        reaction: ["高超音速", "亚光速｜争议", "可应对宇宙级强敌高速交锋，仍不按无证光速以上处理。"],
        vitality: ["行星级生命结构｜仅下限", "恒星级生命结构｜仅下限｜争议", "生命上限未明，按已表现下限记录。"],
        healing: ["无自愈", "无自愈", "未表现依赖再生，主要是极高承伤。"],
        energy: ["无资料", "无资料", "能量总量包含肉体持久度；埼玉体力与上限未明，缺少可换算总资源上限，不按不适用处理。"],
        energyRegen: ["无资料", "无资料", "未表现传统回能机制；体力恢复上限无法量化。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "突破限制器后的异常体质、极高肉体能力、严肃拳系列。",
        weakness: "剧情上缺少可验证上限；认真程度与搞笑定位使精确评级困难。",
        setting: "按漫画后期综合表现初稿记录，未来需按具体篇章和严肃程度细分。",
        basis: "依据埼玉对波罗斯、怪人协会篇后续强敌和宇宙级战斗表现，只给已表现保守下限，不推无限。"
      })
    })
  ]);
})();

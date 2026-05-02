(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kaguya-otsutsuki",
      name: "大筒木辉夜",
      en: "Kaguya Otsutsuki",
      ja: "大筒木カグヤ",
      category: "最终 boss",
      affiliation: "大筒木一族",
      grade: "疾风传最终 boss / 查克拉始祖",
      appearances: ["正篇"],
      timelineStatus: "疾风传最终战",
      aliases: [],
      fandomSlug: "Kaguya_%C5%8Ctsutsuki",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Kaguya Otsutsuki",
          url: "https://vsbattles.fandom.com/wiki/Kaguya_%C5%8Ctsutsuki",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核辉夜、十尾查克拉和空间转移相关峰值的跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：NARUTO―ナルト―［秘伝・陣の書］ キャラクターオフィシャルデータBOOK",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=978-4-08-880263-3",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对第四次忍界大战、大筒木一族和忍界秘密相关设定；辉夜的空间/求道玉峰值仍按争议与条件峰值处理。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "NARUTO OFFICIAL SITE：巻ノ71「大好きだ」",
          url: "https://naruto-official.com/comics/01_153",
          lang: "ja",
          authority: "official",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对辉夜复活、查克拉回收意图以及鸣人/佐助以六道之力封印辉夜的原作卷册阶段。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Narutopedia：Kaguya Otsutsuki",
          url: "https://naruto.fandom.com/wiki/Kaguya_%C5%8Ctsutsuki",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对辉夜角色资料、查克拉始祖设定和最终战入口。"
        }
      ],
      dimensions: dims({
        attack: ["大陆级｜查克拉始祖｜争议", "行星级｜膨胀求道玉｜空间崩坏｜争议", "高峰涉及异空间与膨胀求道玉，不等同常规随手一击。"],
        defense: ["大陆级", "地表级｜查克拉始祖｜争议", "高查克拉与特殊生命结构极强，但可被封印。"],
        movement: ["高超音速", "高超音速｜特殊位移｜天之御中", "维度切换属于特殊位移，不计连续移动速度。"],
        reaction: ["高超音速", "高超音速｜白眼/轮回写轮眼｜争议", "高端忍界战斗反应，仍不按光速。"],
        vitality: ["行星级生命结构｜争议", "行星级生命结构｜争议", "近似不死的查克拉生命结构，主要弱点是封印。"],
        healing: ["极速自愈", "瞬愈｜查克拉恢复｜争议", "可快速恢复严重损伤。"],
        energy: ["大陆级能量", "行星级能量｜膨胀求道玉｜争议", "查克拉总量极高，峰值需标注空间与术式条件。"],
        energyRegen: ["极速回能", "极速回能｜神树/查克拉源头", "高回能依赖神树与查克拉体系设定。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "白眼、轮回写轮眼、天之御中、共杀灰骨、膨胀求道玉、封印弱点。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据辉夜作为疾风传最终 boss 的异空间、查克拉、共杀灰骨和膨胀求道玉表现定级，空间权能另写特殊权能。"
      })
    })
  ]);
})();

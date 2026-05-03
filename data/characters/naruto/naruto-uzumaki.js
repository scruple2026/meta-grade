(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "naruto-uzumaki",
      name: "漩涡鸣人",
      en: "Naruto Uzumaki",
      ja: "うずまきナルト",
      affiliation: "木叶隐村",
      grade: "主角 / 九尾人柱力 / 六道力量",
      appearances: ["正篇"],
      timelineStatus: "疾风传最终战 / 六道模式",
      aliases: [],
      fandomSlug: "Naruto_Uzumaki",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Naruto Uzumaki（Part II: War Arc）",
          url: "https://vsbattles.fandom.com/wiki/Naruto_Uzumaki_%28Part_II%3A_War_Arc%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核疾风传战争篇、九尾查克拉模式和六道模式的跨界量级口径。"
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
          claim: "用于核对第四次忍界大战、忍270/术232规模的数据书资料和六道/尾兽相关设定；本站大陆级等跨界换算仍保留争议标签。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：NARUTO―ナルト― 70",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=978-4-08-880151-3",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对鸣人获得六道仙人相关力量的剧情阶段；高端能级换算仍按本站 reference 保守处理。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Narutopedia：Naruto Uzumaki",
          url: "https://naruto.fandom.com/wiki/Naruto_Uzumaki",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对鸣人角色资料、形态变化和主要战斗入口。"
        }
      ],
      defaultTimelineKey: "final-six-paths",
      timelinePanels: [
        {
          key: "pain-arc",
          label: "佩恩战 / 仙人模式",
          status: "稳定仙人模式与九尾风险并存",
          dimensions: dims({
            attack: ["楼级", "街区级｜仙术/九尾爆发", "仙术螺旋丸、蛙组手和九尾爆发显著强于早期。"],
            defense: ["楼级", "街区级｜仙术/九尾查克拉", "仙术感知和九尾查克拉提高承伤。"],
            movement: ["亚音速", "超音速｜仙人模式", "仙人模式显著提升机动。"],
            reaction: ["亚音速", "超音速｜仙人感知", "仙人感知提升捕捉和应对。"],
            vitality: ["精锐韧体", "街区级生命阈值｜九尾查克拉", "人柱力生命力强，但不是后期六道层级。"],
            healing: ["快速自愈", "快速自愈｜九尾查克拉", "九尾查克拉提供恢复。"],
            energy: ["楼级能量", "街区级能量｜仙术/九尾", "仙术和九尾查克拉提高储量。"],
            energyRegen: ["快速回能", "快速回能", "可恢复仙术查克拉但有时间限制。"]
          }),
          notes: "此阶段不计入完整九尾与六道力量。"
        },
        {
          key: "war-kcm",
          label: "忍界大战 / 九尾查克拉模式",
          status: "九尾协同前后",
          dimensions: dims({
            attack: ["街区级", "国家级｜尾兽玉｜争议", "尾兽玉和大规模分身协同进入高端争议区。"],
            defense: ["街区级", "国家级｜九尾查克拉外衣｜争议", "外衣防护和恢复显著提升。"],
            movement: ["超音速", "高超音速｜九尾查克拉模式｜争议", "高端机动大幅提升。"],
            reaction: ["超音速", "高超音速｜感知｜争议", "恶意感知和高速战斗经验提升反应。"],
            vitality: ["街区级生命阈值", "国家级生命阈值｜九尾协同｜争议", "生命阈值主要来自人柱力和查克拉支撑。"],
            healing: ["快速自愈", "极速自愈｜九尾查克拉", "九尾协同恢复增强。"],
            energy: ["街区级能量", "国家级能量｜九尾查克拉｜争议", "总量极高，但单击、总量和持续输出分开。"],
            energyRegen: ["快速回能", "极速回能｜九尾协同", "九尾协同续航极强。"]
          }),
          notes: "作为六道模式前的高峰过渡。"
        },
        {
          key: "final-six-paths",
          label: "最终战 / 六道模式",
          status: "六道仙术与尾兽查克拉",
          dimensions: dims({
            attack: ["街区级", "大陆级｜六道仙术｜尾兽玉｜争议", "常态按忍术与体术，峰值计入六道与尾兽查克拉大招。"],
            defense: ["街区级", "大陆级｜九尾查克拉模式｜争议", "高峰依赖查克拉外衣、六道力量和恢复。"],
            movement: ["超音速", "高超音速｜六道模式｜争议", "高端战斗速度很高，但不按无证光速。"],
            reaction: ["超音速", "高超音速｜感知｜争议", "仙人感知和六道感知提升反应，特殊感知不直接等于光速。"],
            vitality: ["街区级生命阈值", "大陆级生命阈值｜九尾与六道｜争议", "人柱力与六道力量显著提升生命力。"],
            healing: ["快速自愈", "极速自愈｜九尾查克拉", "九尾查克拉和六道力量提供强恢复。"],
            energy: ["街区级能量", "大陆级能量｜九尾与六道｜争议", "查克拉储量极高，但需区分单发输出与总量。"],
            energyRegen: ["快速回能", "极速回能｜九尾协同", "九尾协同下恢复和续航极强。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "大陆级｜六道仙术｜尾兽玉｜争议", "常态按忍术与体术，峰值计入六道与尾兽查克拉大招。"],
        defense: ["街区级", "大陆级｜九尾查克拉模式｜争议", "高峰依赖查克拉外衣、六道力量和恢复。"],
        movement: ["超音速", "高超音速｜六道模式｜争议", "高端战斗速度很高，但不按无证光速。"],
        reaction: ["超音速", "高超音速｜感知｜争议", "仙人感知和六道感知提升反应，特殊感知不直接等于光速。"],
        vitality: ["街区级生命阈值", "大陆级生命阈值｜九尾与六道｜争议", "人柱力与六道力量显著提升生命力。"],
        healing: ["快速自愈", "极速自愈｜九尾查克拉", "九尾查克拉和六道力量提供强恢复。"],
        energy: ["街区级能量", "大陆级能量｜九尾与六道｜争议", "查克拉储量极高，但需区分单发输出与总量。"],
        energyRegen: ["快速回能", "极速回能｜九尾协同", "九尾协同下恢复和续航极强。"]
      }),
      notes: notes({
        penetration: "螺旋丸体系、仙术蛙组手、尾兽玉、求道玉级对抗和六道仙术让鸣人同时具备钝击、查克拉爆破、感知追踪和大规模分身围攻；尾兽玉与六道峰值按争议高峰，不把影分身数量直接换算为单体破坏。",
        resistance: "九尾查克拉外衣、仙人模式、六道力量和人柱力生命力提供高承伤与快速恢复；封印、查克拉抽离、幻术/精神干涉、求道玉/阴阳遁和尾兽协同被切断仍是关键风险。",
        special: "影分身、螺旋丸、仙人模式、九尾查克拉模式、六道仙术、尾兽玉。",
        weakness: "高峰依赖九尾协同、六道查克拉和仙术管理；大量分身会分摊查克拉，尾兽查克拉或仙术资源被压制时续航和恢复都会下降。",
        setting: "按疾风传最终战六道模式记录；佩恩战仙人模式、忍界大战九尾查克拉模式已拆入时间线，不把成年期或博人传状态并入。",
        basis: "依据鸣人从佩恩战到第四次忍界大战、六道模式与辉夜战中的表现定级，高峰标争议。"
      })
    })
  ]);
})();

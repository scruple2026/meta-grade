(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hashirama-senju",
      name: "千手柱间",
      en: "Hashirama Senju",
      ja: "千手柱間",
      affiliation: "木叶隐村 / 千手一族",
      grade: "初代火影 / 木遁仙术",
      appearances: ["终结谷回忆", "第四次忍界大战"],
      timelineStatus: "终结谷与秽土转生综合",
      aliases: ["初代火影", "忍者之神", "木遁"],
      fandomSlug: "Hashirama_Senju",
      confidence: "review",
      evidenceType: ["原作表现", "设定书入口", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Hashirama Senju",
          url: "https://vsbattles.fandom.com/wiki/Hashirama_Senju",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核木遁、仙术、真数千手和终结谷量级口径；本站保留争议标签。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：NARUTO―ナルト―［秘伝・陣の書］",
          citation: "岸本斉史『NARUTO―ナルト―［秘伝・陣の書］キャラクターオフィシャルデータBOOK』集英社, 2014年。",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对柱间、木遁、仙术和初代火影相关资料。"
        }
      ],
      defaultTimelineKey: "valley-sage",
      timelinePanels: [
        {
          key: "founding-hokage",
          label: "木叶建立期 / 木遁忍者",
          status: "木遁、强体质与医疗能力",
          dimensions: dims({
            attack: ["楼级", "街区级｜木遁", "大规模木遁可改变战场，但不计入真数千手峰值。"],
            defense: ["楼级", "街区级｜木遁防御", "木遁和体质提高承伤。"],
            movement: ["亚音速", "超音速｜忍者机动｜争议", "顶级忍者机动。"],
            reaction: ["亚音速", "超音速｜仙术前综合｜争议", "战斗经验和感知突出。"],
            vitality: ["精锐韧体", "街区级生命阈值｜强体质", "千手体质和恢复力突出。"],
            healing: ["快速自愈", "快速自愈｜体质/医疗", "恢复力强，但不按无限再生。"],
            energy: ["楼级能量", "街区级能量｜木遁", "查克拉储量很高。"],
            energyRegen: ["快速回能", "快速回能", "续航强。"]
          }),
          notes: "不计入终结谷对斑的仙术与真数千手峰值。"
        },
        {
          key: "valley-sage",
          label: "终结谷 / 仙法木遁",
          status: "仙人模式、真数千手、顶上化佛",
          dimensions: dims({
            attack: ["街区级", "国家级｜仙法木遁/真数千手｜争议", "真数千手与完全体须佐/九尾对抗属于高端争议区。"],
            defense: ["街区级", "国家级｜木遁/仙人体｜争议", "防御来自木遁结构、仙人体和恢复。"],
            movement: ["超音速", "高超音速｜争议", "顶级忍者高速交锋。"],
            reaction: ["超音速", "高超音速｜仙术感知｜争议", "仙术感知提升反应。"],
            vitality: ["街区级生命阈值", "国家级生命阈值｜仙人体｜争议", "仙人体和恢复力显著提高生命阈值。"],
            healing: ["快速自愈", "极速自愈｜仙人体", "恢复力极强，但仍可被封印或致命条件处理。"],
            energy: ["街区级能量", "国家级能量｜仙法木遁｜争议", "木遁和仙术储量极高。"],
            energyRegen: ["快速回能", "极速回能｜仙人体", "续航为核心优势。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "国家级｜仙法木遁/真数千手｜争议", "真数千手与完全体须佐/九尾对抗属于高端争议区。"],
        defense: ["街区级", "国家级｜木遁/仙人体｜争议", "防御来自木遁结构、仙人体和恢复。"],
        movement: ["超音速", "高超音速｜争议", "顶级忍者高速交锋。"],
        reaction: ["超音速", "高超音速｜仙术感知｜争议", "仙术感知提升反应。"],
        vitality: ["街区级生命阈值", "国家级生命阈值｜仙人体｜争议", "仙人体和恢复力显著提高生命阈值。"],
        healing: ["快速自愈", "极速自愈｜仙人体", "恢复力极强，但仍可被封印或致命条件处理。"],
        energy: ["街区级能量", "国家级能量｜仙法木遁｜争议", "木遁和仙术储量极高。"],
        energyRegen: ["快速回能", "极速回能｜仙人体", "续航为核心优势。"]
      }),
      notes: notes({
        penetration: "木遁以压制、封锁、吸收/束缚和大规模结构打击为主，不把封印压制直接换算成更高破坏级。",
        resistance: "仙人体、恢复和木遁防御强；幻术、封印、空间忍术等仍需单独判断。",
        sensing: "仙术感知、查克拉规模和木遁战场覆盖提高对强敌和尾兽的定位；秽土状态表现不直接并入生前常态。",
        tactics: "大战经验丰富，擅长用木遁束缚、吸收、分身和大范围压制管理尾兽级威胁；空间和高端瞳术仍需机制反制。",
        special: "木遁、仙人模式、真数千手、顶上化佛、强恢复、尾兽压制。",
        weakness: "峰值依赖仙术和大规模木遁展开；空间、封印和高端瞳术机制仍可绕过常规防御。",
        setting: "按终结谷生前峰值与秽土战争资料综合记录，秽土无限复原则不并入生前防御。",
        basis: "依据柱间与斑/九尾终结谷战、忍界大战秽土表现、木遁和仙术资料保守定级。"
      })
    })
  ]);
})();

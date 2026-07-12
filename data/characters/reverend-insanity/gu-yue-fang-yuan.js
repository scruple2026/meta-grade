(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["蛊真人"];

  if (!work) {
    throw new Error("蛊真人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gu-yue-fang-yuan",
      name: "古月方源",
      en: "Gu Yue Fang Yuan",
      ja: "",
      affiliation: "天地一家大爱盟",
      grade: "主角 / 九转蛊尊",
      appearances: ["正篇"],
      timelineStatus: "后期 / 大爱仙尊与九转蛊尊阶段",
      aliases: ["方源", "大爱仙尊", "炼天魔尊", "Guyue Fangyuan"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["中文网文资料入口", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "萌娘百科：古月方源",
          url: "https://zh.moegirl.org.cn/%E5%8F%A4%E6%9C%88%E6%96%B9%E6%BA%90",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对古月方源、春秋蝉、九转蛊尊、炼天魔尊/大爱仙尊和炼道/天道后期身份。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《蛊真人》",
          url: "https://zh.moegirl.org.cn/%E8%9B%8A%E7%9C%9F%E4%BA%BA",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对作品、作者、连载状态和起点下架语境；不作为单独战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:古月方源 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["大陆级｜九转蛊尊/仙蛊杀招｜争议", "大陆级｜尊者/炼道天道手段｜世界观依赖｜争议", "九转尊者阶段按作品高端保守记录，不写模糊旧标签或无限攻击。"],
        defense: ["大陆级｜至尊仙胎/仙道防护｜争议", "大陆级｜尊者防护/杀招布置｜争议", "防御依赖至尊仙胎、仙蛊、杀招和布置，不按称号直接抬无限。"],
        movement: ["超光速｜仙道移动杀招｜争议", "有限宇宙尺度超光速｜仙窍/杀招调度｜非纯速度｜争议", "移动杀招和仙窍体系很强，但不写无限速。"],
        reaction: ["超光速｜仙道斗法｜争议", "有限宇宙尺度超光速｜尊者博弈/天道应对｜争议", "尊者博弈和推演极强，但谋略不直接等于反应速度。"],
        vitality: ["大陆级生命阈值｜至尊仙胎｜争议", "大陆级生命阈值｜尊者/至尊仙胎｜争议", "至尊仙胎与仙窍结构极强，但不写无限生命。"],
        healing: ["快速自愈｜仙蛊/仙窍资源", "极速自愈｜至尊仙胎/仙道杀招｜争议", "恢复依赖蛊虫、仙窍资源和后期杀招。"],
        energy: ["大陆级能量｜仙元/仙窍资源｜争议", "大陆级能量｜尊者资源/天地秘境｜争议", "能量总量按九转尊者资源保守记录，不写模糊旧标签或无限能量池。"],
        energyRegen: ["快速回能｜仙窍经营", "极速回能｜尊者资源/经营体系｜争议", "优势在资源经营、蛊虫配置和长期准备。"]
      }),
      notes: notes({
        penetration: "仙蛊、杀招、炼道/天道手段和尊者级布置提供高穿透与规则压制；春秋蝉是时间回溯/重生机制，不按攻击档处理。攻击速度：仙蛊、杀招和尊者布置各有催动条件；春秋蝉回溯没有普通飞行弹道，且本身不按直接攻击处理。",
        resistance: "防御来自至尊仙胎、仙窍经营、仙蛊杀招和预设布局；被针对蛊虫、资源消耗和信息劣势仍会限制战斗。",
        sensing: "侦察蛊、推演、经验和尊者级博弈能力强，但不把布局优势直接折算反应速度。",
        tactics: "极端理性、长期布局、不择手段，擅长资源经营、信息差、重生经验和多线算计。",
        special: "春秋蝉、至尊仙胎、仙蛊、炼道尊者、天道手段、大爱仙尊身份。",
        weakness: "强度高度依赖蛊虫、仙元、仙窍资源、情报和时代局势；早期方源不能套用九转面板。",
        setting: "按后期九转蛊尊/大爱仙尊阶段记录；青茅山、三王山、北原和八转阶段后续可拆时间线。",
        basis: "worldbook只用于抽取古月方源姓名；定级依据萌娘百科角色/作品资料入口，九转尊者高端先按大陆级争议档保守处理。"
      })
    })
  ]);
})();

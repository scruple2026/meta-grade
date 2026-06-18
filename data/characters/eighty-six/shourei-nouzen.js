(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shourei-nouzen",
      name: "肖雷·诺赞",
      en: "Shourei Nouzen",
      ja: "ショーレイ・ノウゼン",
      affiliation: "Legion / Shepherd",
      grade: "Shepherd / 辛的兄长",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "Shepherd化 / Legion机体",
      aliases: ["Rei", "Shourei", "辛的兄长"],
      fandomSlug: "Shourei_Nouzen",
      confidence: "review",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "房屋级｜Legion机体｜争议", "Shepherd阶段威胁来自Legion重型机体和战场火力。"],
        defense: ["墙级", "房屋级｜Legion机体｜争议", "机体装甲和无人兵器结构高于人类肉身。"],
        movement: ["亚音速", "亚音速｜Legion机动", "按军用无人机体地面机动处理。"],
        reaction: ["亚音速", "亚音速｜Shepherd处理", "Shepherd保留人格/指挥处理能力，但不写超常高速。"],
        vitality: ["精锐韧体｜Legion机体", "房屋级生命阈值｜Shepherd核心｜争议", "生命体量按机体和中枢结构记录。"],
        healing: ["无自愈", "缓慢自愈｜维修/替换｜非即时", "缺少战斗中自我再生表现，修复依赖Legion系统。"],
        energy: ["墙级能量｜Legion机体", "房屋级能量｜重型机体｜争议", "能源与弹药来自Legion平台。"],
        energyRegen: ["缓慢回能｜补给", "缓慢回能｜Legion补给", "持续作战依赖补给和机体维护。"]
      }),
      notes: notes({
        penetration: "以Legion机体火力、装甲压制和Shepherd级战场判断威胁先锋战队。",
        resistance: "机体装甲强于Juggernaut驾驶员肉身，但核心/弱点仍可被集中打击。",
        sensing: "Legion网络与Shepherd处理能力提供战场信息优势。",
        tactics: "保留辛兄长的人格残响和高优先级猎杀意图，能针对辛的心理与战术习惯施压。",
        special: "Shepherd化、Legion网络、中枢化人格残响。",
        weakness: "核心和机体仍可被军武破坏；人格残响会形成明确战术执念。",
        setting: "按特别侦察任务中Shepherd化的肖雷记录。",
        basis: "worldbook只用于抽取肖雷姓名；定级依据公开官方角色页与86 Wiki资料入口，按Legion机体而非人类肉身记录。"
      })
    })
  ]);
})();

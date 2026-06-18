(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙符"];

  if (!work) {
    throw new Error("龙符 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "gu-chensha",
      name: "古尘沙",
      en: "Gu Chensha",
      ja: "",
      affiliation: "靖仙司 / 永界",
      grade: "主角 / 无龙心法最终阶段",
      appearances: ["正篇"],
      timelineStatus: "大结局 / 不朽第十层相关最终阶段",
      aliases: ["尘国公"],
      fandomSlug: "古尘沙",
      confidence: "disputed",
      evidenceType: ["中文网文原作", "高风险无限档", "最终阶段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "chapter",
          scope: "最终章",
          label: "纵横中文网：《龙符》第1149章 永远无敌 大结局",
          url: "https://read.zongheng.com/chapter/523438/40260958.html",
          citation: "梦入神机《龙符》第1149章《永远无敌 大结局》。",
          lang: "zh",
          authority: "primary",
          medium: "publisher",
          ratingEvidence: true,
          claim: "支撑古尘沙最终阶段、不朽第十层相关宇宙论和无限攻击代表项；本站不继续比较多元宇宙内部无限层级。"
        },
        {
          type: "wiki",
          scope: "社区线索",
          label: "中文论战 Wiki：《龙符》",
          url: "https://cntaps.fandom.com/zh/wiki/%E9%BE%99%E7%AC%A6",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于定位无龙心法、心灵力量和不朽第十层相关章节线索；不作为 primary 量级来源。"
        }
      ],
      revisionNotes: [
        "中文网文无限攻击能级代表样例：只把最终阶段的宇宙论攻击/改写能力收束为无限级，不把无限层级继续拆高。",
        "补全非代表维度：按最终阶段给保守高端争议档，但不把防御、生命和速度自动写成无限。"
      ],
      dimensions: dims({
        attack: ["有限宇宙级｜无龙心法后期｜宇宙论依赖｜争议", "无限级｜不朽第十层｜宇宙论依赖｜争议", "代表攻击能级的无限样例；按最终阶段可作用非有限宇宙论结构收束为无限级，不比较更大无限。"],
        defense: ["有限宇宙级｜最终境界防护｜宇宙论依赖｜争议", "有限宇宙级｜无龙心法防护｜非无限代表项｜争议", "最终阶段防护可按作品高端宇宙论争议档记录，但不从攻击无限反推出防御无限。"],
        movement: ["有限宇宙尺度超光速｜跨界机动｜宇宙论依赖｜争议", "有限宇宙尺度超光速｜规则层面机动｜非纯速度｜争议", "可跨越高端宇宙论战场，但大量位移带规则/心灵性质，标非纯速度；不按无限速处理。"],
        reaction: ["有限宇宙尺度超光速｜高端交锋｜宇宙论依赖｜争议", "有限宇宙尺度超光速｜心灵/规则交锋｜非纯反应｜争议", "后期交锋具备极高信息处理，但不把全知式处理直接写成无限反应。"],
        vitality: ["宇宙级生命结构｜最终境界｜宇宙论依赖｜争议", "宇宙级生命结构｜无龙心法/永界关联｜非无限代表项｜争议", "生命结构按最终境界高端记录；缺少单独死亡条件覆盖无限结构的整理前不写无限生命。"],
        healing: ["极速自愈｜规则重构｜条件｜争议", "瞬愈｜心灵/规则重构｜条件｜争议", "恢复更接近规则和心灵层面的重构，作为条件型峰值处理。"],
        energy: ["有限宇宙级能量｜心灵力量｜总量非单击｜争议", "无限级能量｜无龙心法｜总量非单击｜宇宙论依赖｜争议", "无龙心法涉及无限心灵力量，可记为能量总量无限；不自动反推出每次攻击都无限。"],
        energyRegen: ["不适用｜无限心灵能量池｜无消耗瓶颈｜争议", "不适用｜无龙心法无限能量池｜无消耗瓶颈｜争议", "真正无限可用能量池不按有限蓝条回复处理；若后续证据显示仍需转化/调用，再改回条件型回能。"]
      }),
      notes: notes({
        penetration: "最终阶段以无龙心法和不朽第十层相关改写为核心，攻击更接近宇宙论/规则层面的作用；本站只把明确非有限作用收束为攻击无限级，不继续比较无限多元、套娃或更高无限。",
        resistance: "防御补为有限宇宙级争议档；若后续要提高到无限，需要独立承伤、抵消或防线证据，而不是从攻击/境界反推。",
        sensing: "心灵网络、众生心灵和因果命运相关信息优势很强，但感知不自动折算为反应速度。",
        tactics: "古尘沙后期以改造文明、推演无龙心法和重构秩序为主，作战方式偏规则/文明工程，不是普通拳脚对轰。",
        special: "无龙心法、不朽第十层相关境界、心灵力量、因果命运/世界规则改写、文明改造。",
        weakness: "无限档高度依赖《龙符》后期宇宙论和最终阶段语境；跨作品对比时不能把诗性描述、境界名或文明理想当作无条件全能。",
        setting: "按《龙符》大结局最终阶段记录；早期祭天符诏、靖仙司和天子封神术阶段不并入本面板。",
        basis: "代表维度为攻击能级：依据最终章和无龙心法/不朽第十层相关设定，把可作用非有限宇宙论结构的攻击/改写收束为无限级；其它维度按最终阶段保守补档。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["凡人修仙传"];

  if (!work) {
    throw new Error("凡人修仙传 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "han-li",
      name: "韩立",
      en: "Han Li",
      ja: "",
      affiliation: "散修 / 青元宫",
      grade: "主角 / 大罗金仙阶段",
      appearances: ["正篇", "仙界篇"],
      timelineStatus: "仙界篇后期 / 大罗金仙与掌天瓶",
      aliases: ["韩老魔", "韩天尊", "韩跑跑", "厉飞雨", "掌天瓶主人"],
      fandomSlug: "",
      confidence: "review",
      evidenceType: ["中文网文原作入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "萌娘百科：韩立",
          url: "https://zh.moegirl.org.cn/%E9%9F%A9%E7%AB%8B",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对韩立、大罗金仙阶段、掌天瓶、仙界活动范围和人物定位；高端档位仍为后续原文补证前的争议口径。"
        },
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "维基百科：《凡人修仙传》",
          url: "https://zh.wikipedia.org/wiki/%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0",
          lang: "zh",
          authority: "cross-reference",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对作品、作者、连载网站与韩立主角身份；不作为单独战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:韩立 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["大陆级｜大罗金仙/法则｜争议", "有限宇宙级｜时间法则/掌天瓶｜宇宙论依赖｜争议", "仙界篇后期按高阶修仙与法则战保守入高端争议档，不写无限攻击。"],
        defense: ["大陆级｜大罗金仙体魄/法宝｜争议", "有限宇宙级｜法则防护/掌天瓶资源｜宇宙论依赖｜争议", "防御依赖法宝、炼体、法则和资源，不按境界名直接抬到无限。"],
        movement: ["超光速｜高阶遁速｜争议", "有限宇宙尺度超光速｜跨界遁行/法则｜争议", "高阶修仙者遁行和跨界语境极高，但需后续逐章补证。"],
        reaction: ["超光速｜高阶斗法｜争议", "有限宇宙尺度超光速｜法则斗法｜争议", "反应按高端斗法争议档处理，不把谋略和准备直接换成反应速度。"],
        vitality: ["大陆级生命阈值｜大罗金仙/炼体｜争议", "有限宇宙级生命结构｜仙界篇高端｜争议", "生命体量按高阶仙人和炼体资源保守记录，未写无限生命。"],
        healing: ["快速自愈｜丹药/法体", "极速自愈｜仙界资源/法则｜争议", "恢复依赖丹药、法体、法则与准备资源。"],
        energy: ["大陆级能量｜大罗金仙法力｜争议", "有限宇宙级能量｜掌天瓶/法则资源｜争议", "能量总量很高但不按掌天瓶外物直接写无限。"],
        energyRegen: ["快速回能｜丹药/灵材", "极速回能｜掌天瓶资源/法则调度｜争议", "韩立优势在资源、准备和续航，不等于无消耗瓶颈。"]
      }),
      notes: notes({
        penetration: "时间法则、法宝、炼体和多套底牌提供穿透与压制；掌天瓶作为关键外物资源写入峰值条件。",
        resistance: "防御来自炼体、法宝、法则、替身/保命资源和谨慎布置；不能把大罗金仙身份直接换成全维度无限。",
        sensing: "神识、阵法、傀儡、虫群和谨慎探查能力强，战斗前情报准备是核心优势。",
        tactics: "极端谨慎、擅长资源积累、诱敌、伏杀、逃遁和长期布局；能打则打，风险过高则撤退。",
        special: "掌天瓶、时间法则、青竹蜂云剑、噬金虫、傀儡、阵法、丹药资源。",
        weakness: "大量峰值依赖准备、法宝、资源和阶段；早期韩立不可套用仙界篇面板。",
        setting: "按仙界篇后期韩立记录；人界、灵界和飞升前版本后续应拆分时间线。",
        basis: "worldbook只用于抽取韩立姓名；定级依据公开资料入口、仙界篇后期身份和掌天瓶/法则语境，所有宇宙论档位先标争议。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["仙逆"];

  if (!work) {
    throw new Error("仙逆 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "wang-lin",
      name: "王林",
      en: "Wang Lin",
      ja: "",
      affiliation: "修真界 / 仙罡大陆",
      grade: "主角 / 终盘高阶修士",
      appearances: ["正篇"],
      timelineStatus: "终盘 / 踏天相关阶段",
      aliases: ["王老魔", "朱雀子", "古神王林"],
      fandomSlug: "",
      confidence: "disputed",
      evidenceType: ["中文网文原作入口", "高风险宇宙论档", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《仙逆》",
          url: "https://zh.moegirl.org.cn/%E4%BB%99%E9%80%86",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对《仙逆》、主角王林、修真成长和终盘高端语境；当前量级仍待原文卷章补证。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "起点中文网：《仙逆》",
          url: "https://www.qidian.com/book/1264634/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于确认正版作品入口；不单独作为战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:王林 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["有限宇宙级｜终盘本源/古神体系｜宇宙论依赖｜争议", "有限宇宙级｜踏天相关终盘｜非无限代表项｜争议", "终盘王林按修真高端宇宙论争议档记录，不写无限攻击。"],
        defense: ["有限宇宙级｜终盘法体/本源防护｜争议", "有限宇宙级｜古神/本源防护｜争议", "防御按终盘法体、本源与古神体系保守记录。"],
        movement: ["有限宇宙尺度超光速｜终盘遁行｜争议", "有限宇宙尺度超光速｜跨域/本源位移｜非纯速度｜争议", "跨域移动和本源处理很高，但不写无限速。"],
        reaction: ["有限宇宙尺度超光速｜终盘斗法｜争议", "有限宇宙尺度超光速｜本源交锋｜争议", "反应按终盘斗法争议档记录。"],
        vitality: ["有限宇宙级生命结构｜终盘法体｜争议", "有限宇宙级生命结构｜古神/本源关联｜争议", "生命结构极高但不写无限生命。"],
        healing: ["极速自愈｜法体/本源", "瞬愈｜终盘重构/本源｜争议", "恢复依赖终盘法体、本源和修真资源。"],
        energy: ["有限宇宙级能量｜终盘法力/本源｜争议", "有限宇宙级能量｜踏天相关终盘｜争议", "能量总量按终盘高端记录，不写无限能量池。"],
        energyRegen: ["极速回能｜本源/修真资源｜争议", "极速回能｜终盘本源循环｜非无限尺度｜争议", "补能极强但仍按有限高端处理。"]
      }),
      notes: notes({
        penetration: "本源、古神体系和终盘修真术法提供高层级压制；当前不做无限层级比较。",
        resistance: "防护来自法体、本源、古神体系和修真资源，不能由踏天名号直接推出全维度无限。",
        sensing: "终盘神识、本源感知和修真推演很强，但感知优势不直接折算反应速度。",
        tactics: "王林以冷静、忍耐、布局和本源体系斗法见长，能在长期追杀和高端修真局面中积累优势。",
        special: "本源、古神体系、化凡心境、终盘踏天相关境界、修真术法。",
        weakness: "本面板仅限终盘王林；朱雀星、人界、化凡前后和仙罡大陆不同阶段不能直接套用。",
        setting: "按《仙逆》终盘王林记录；不混入耳根其它作品后续扩展。",
        basis: "worldbook只用于抽取王林姓名；定级依据起点正版入口和萌娘百科作品资料入口，终盘高端暂收束为有限宇宙级争议档。"
      })
    })
  ]);
})();

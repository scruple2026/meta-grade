(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["一念永恒"];

  if (!work) {
    throw new Error("一念永恒 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "bai-xiaochun",
      name: "白小纯",
      en: "Bai Xiaochun",
      ja: "",
      affiliation: "灵溪宗 / 永恒仙域",
      grade: "主角 / 终盘永恒境",
      appearances: ["正篇"],
      timelineStatus: "终盘 / 永恒境相关阶段",
      aliases: ["夜葬", "白浩", "白老祖"],
      fandomSlug: "",
      confidence: "disputed",
      evidenceType: ["中文网文原作入口", "高风险宇宙论档", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "作品资料入口",
          label: "萌娘百科：《一念永恒》",
          url: "https://zh.moegirl.org.cn/%E4%B8%80%E5%BF%B5%E6%B0%B8%E6%81%92",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对《一念永恒》、白小纯主角身份、动画/小说资料入口和终盘高端语境。"
        },
        {
          type: "official",
          scope: "正版作品页",
          label: "起点中文网：《一念永恒》",
          url: "https://www.qidian.com/book/1003354631/",
          lang: "zh",
          authority: "official",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于确认正版作品入口；不单独作为战力证据。"
        }
      ],
      revisionNotes: ["从《道友先上我断后》worldbook 的详细人物:白小纯 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["可观测宇宙级｜终盘永恒境｜宇宙论依赖｜争议", "可观测宇宙级｜永恒境/不死长生功｜非无限代表项｜争议", "终盘按耳根体系高端争议档记录，不写无限攻击。"],
        defense: ["可观测宇宙级｜不死长生功/永恒境｜争议", "可观测宇宙级｜终盘防护｜争议", "防御按不死长生功、肉身和终盘境界保守记录。"],
        movement: ["可观测宇宙尺度超光速｜终盘遁行｜争议", "可观测宇宙尺度超光速｜永恒仙域高端｜争议", "高端遁行与跨域处理很强，但不写无限速。"],
        reaction: ["可观测宇宙尺度超光速｜终盘斗法｜争议", "可观测宇宙尺度超光速｜永恒境交锋｜争议", "反应按终盘高端斗法争议档记录。"],
        vitality: ["可观测宇宙级生命结构｜不死长生功｜争议", "可观测宇宙级生命结构｜永恒境｜争议", "生命与恢复很强，但不由永恒名号直接写无限生命。"],
        healing: ["极速自愈｜不死长生功", "瞬愈｜永恒境/肉身重构｜争议", "恢复是白小纯核心优势之一，但仍标条件和阶段。"],
        energy: ["可观测宇宙级能量｜终盘法力/炼药资源｜争议", "可观测宇宙级能量｜永恒境｜争议", "能量总量按终盘高端记录，不写无限能量池。"],
        energyRegen: ["极速回能｜丹药/体修资源｜争议", "极速回能｜永恒境循环｜非无限尺度｜争议", "补能极强但仍按有限高端处理。"]
      }),
      notes: notes({
        penetration: "终盘境界、炼药/丹炉相关手段和不死长生功体系提供高端压制；不把永恒名号换算成无限攻击。攻击速度：近身功法、丹炉镇压与放出的术法各有独立发动过程，终盘遁行档不能直接当作所有法术载体的速度。",
        resistance: "不死长生功和肉身恢复是防御核心，但防御、生命体量和恢复速度分开记录。",
        sensing: "高阶神识和危机判断很强，白小纯也擅长用怂、跑和准备规避高风险。",
        tactics: "白小纯常以保命、炼药、搅局、准备资源和临场逃生形成优势，终盘再进入高端正面战。",
        special: "不死长生功、炼药、丹炉、永恒境、保命与恢复路线。",
        weakness: "早期白小纯不可套用终盘面板；炼药副作用和怕死性格会改变战斗选择。",
        setting: "按《一念永恒》终盘白小纯记录；不混入耳根其它作品后续扩展。",
        basis: "worldbook只用于抽取白小纯姓名；定级依据起点正版入口和萌娘百科作品资料入口，终盘高端暂收束为可观测宇宙级争议档。"
      })
    })
  ]);
})();

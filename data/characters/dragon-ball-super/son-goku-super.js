(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠超"];

  if (!work) {
    throw new Error("龙珠超 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "son-goku-super",
      name: "孙悟空（龙珠超）",
      en: "Son Goku (Dragon Ball Super)",
      ja: "孫悟空",
      affiliation: "Z战士 / 第7宇宙",
      grade: "主角 / 神之气与自在极意",
      appearances: ["龙珠超动画", "龙珠超漫画"],
      timelineStatus: "力之大会至漫画后续综合高端",
      aliases: ["卡卡罗特", "Kakarot", "Son Goku"],
      fandomSlug: "Goku",
      confidence: "disputed",
      evidenceType: ["官方角色页", "跨界战力参考", "高风险速度覆盖样例"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "动画角色定位",
          label: "东映动画：《ドラゴンボール超》孙悟空角色页",
          url: "https://www.toei-anim.co.jp/tv/dragon_s/chara/01.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对《龙珠超》动画孙悟空角色定位、超级赛亚人背景和作品入口；不单独作为速度倍率依据。"
        },
        {
          type: "official",
          scope: "作品入口",
          label: "DRAGON BALL 官方网站",
          url: "https://dragon-ball-official.com/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对《龙珠超》官方作品与出版入口。"
        },
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Son Goku（Dragon Ball Super）",
          url: "https://vsbattles.fandom.com/wiki/Son_Goku_%28Dragon_Ball_Super%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核龙珠超悟空神之气、自在极意和高端速度/宇宙级量级争议；本站只按覆盖样例保守标争议。"
        }
      ],
      defaultTimelineKey: "ultra-instinct",
      timelinePanels: [
        {
          key: "god-ki-early",
          label: "破坏神篇 / 神之气初期",
          status: "超级赛亚人之神与破坏神级交锋",
          dimensions: dims({
            attack: ["恒星级｜神之气初期｜争议", "星系级｜破坏神篇余波｜争议", "神之气初期已远超Z后期；高端宇宙冲击按争议，不直接并入常态稳定。"],
            defense: ["恒星级｜神之气防御｜争议", "星系级｜破坏神篇交锋｜争议", "气防御可承受神之气高端交锋，但不等于常驻无条件宇宙级硬度。"],
            movement: ["光速｜神之气交锋｜争议", "超光速｜破坏神篇交锋｜争议", "作为速度覆盖样例记录；瞬间移动不计入连续速度。"],
            reaction: ["光速｜神之气交锋｜争议", "超光速｜破坏神篇交锋｜争议", "能参与神之气高速交锋；气感知和预判不单独折算。"],
            vitality: ["恒星级生命结构｜气防御｜争议", "星系级生命结构｜神之气｜争议", "生命阈值高度依赖气防御和形态维持。"],
            healing: ["无自愈", "中速自愈｜仙豆/外部", "自身没有稳定再生。"],
            energy: ["恒星级能量｜神之气｜争议", "星系级能量｜神之气｜争议", "神之气总量极高，但不把每一击都写成同档破坏。"],
            energyRegen: ["快速回能", "快速回能｜气恢复", "高强度形态会消耗体力和气。"]
          }),
          notes: "用于覆盖光速/超光速速度档；不计入自在极意。"
        },
        {
          key: "ultra-instinct",
          label: "力之大会后 / 自在极意",
          status: "自在极意及漫画后续高端综合",
          dimensions: dims({
            attack: ["星系级｜神之气高端｜争议", "可观测宇宙级｜自在极意｜宇宙论依赖｜争议", "高端形态可与龙珠超顶级敌人交锋；可观测宇宙级只按作品宇宙论争议峰值记录。"],
            defense: ["星系级｜神之气防御｜争议", "可观测宇宙级｜自在极意防御｜宇宙论依赖｜争议", "气防御、自在极意闪避和承伤共同构成高端防护；不等于无限防御。"],
            movement: ["高倍超光速｜自在极意机动｜争议", "恒星际超光速｜高端战斗机动｜争议", "覆盖高倍到恒星际有限速度档；瞬间移动、界王神传送和空间转移不计入。"],
            reaction: ["高倍超光速｜自在极意反应｜争议", "恒星际超光速｜高端战斗响应｜争议", "自在极意强化身体自动响应，但仍按有限争议档处理。"],
            vitality: ["星系级生命结构｜气防御｜争议", "可观测宇宙级生命结构｜自在极意｜争议", "赛亚人体质、气防御和高端形态共同提高生命阈值；不按无限生命处理。"],
            healing: ["无自愈", "中速自愈｜仙豆/外部", "自身没有稳定再生，常需外部恢复。"],
            energy: ["星系级能量｜神之气｜争议", "可观测宇宙级能量｜自在极意｜争议", "神之气总量极高；输出、总量和形态维持分开。"],
            energyRegen: ["快速回能", "极速回能｜气恢复/形态调整｜争议", "可在战斗中调节气与形态，但高端形态仍有消耗和负担。"]
          }),
          notes: "当前主面板；只覆盖有限高端速度，不写无限速。"
        }
      ],
      revisionNotes: [
        "新增条目：用于《龙珠超》与速度高端有限档覆盖；高端速度全部标争议，且明确排除瞬间移动。"
      ],
      dimensions: dims({
        attack: ["星系级｜神之气高端｜争议", "可观测宇宙级｜自在极意｜宇宙论依赖｜争议", "高端形态可与龙珠超顶级敌人交锋；可观测宇宙级只按作品宇宙论争议峰值记录。"],
        defense: ["星系级｜神之气防御｜争议", "可观测宇宙级｜自在极意防御｜宇宙论依赖｜争议", "气防御、自在极意闪避和承伤共同构成高端防护；不等于无限防御。"],
        movement: ["高倍超光速｜自在极意机动｜争议", "恒星际超光速｜高端战斗机动｜争议", "覆盖高倍到恒星际有限速度档；瞬间移动、界王神传送和空间转移不计入。"],
        reaction: ["高倍超光速｜自在极意反应｜争议", "恒星际超光速｜高端战斗响应｜争议", "自在极意强化身体自动响应，但仍按有限争议档处理。"],
        vitality: ["星系级生命结构｜气防御｜争议", "可观测宇宙级生命结构｜自在极意｜争议", "赛亚人体质、气防御和高端形态共同提高生命阈值；不按无限生命处理。"],
        healing: ["无自愈", "中速自愈｜仙豆/外部", "自身没有稳定再生，常需外部恢复。"],
        energy: ["星系级能量｜神之气｜争议", "可观测宇宙级能量｜自在极意｜争议", "神之气总量极高；输出、总量和形态维持分开。"],
        energyRegen: ["快速回能", "极速回能｜气恢复/形态调整｜争议", "可在战斗中调节气与形态，但高端形态仍有消耗和负担。"]
      }),
      notes: notes({
        penetration: "龟派气功、神之气爆发、自在极意近战和高端气功以高密度能量与格斗压制为主；瞬间移动只改变位置，不提高攻击能级。攻击速度：自在极意近战随身体自动应对，龟派气功与元气弹仍分别有放出、募集和蓄力过程；瞬间移动只缩短接战距离。",
        resistance: "气防御、赛亚人体质和自在极意闪避共同构成防护；毒、封印、气耗尽、形态负担和特殊规则不能被简单视为全免疫。",
        sensing: "气感知、神之气感知和战斗直觉极强；感知优势不自动折算为无限反应，瞬间移动也需要锁定条件。",
        tactics: "战斗学习速度和临场适应极强，能在高压战斗中调整形态、气量和节奏；好战性格仍会给强敌窗口。",
        special: "神之气、超级赛亚人之神、超级赛亚人蓝、自在极意、龟派气功、元气弹、瞬间移动。",
        weakness: "高端形态消耗与身体负担明显；瞬间移动需要可锁定气息，元气弹需要募集和蓄力；悟空常因好战性格接受高风险正面交锋。",
        setting: "按《龙珠超》动画/漫画高端综合记录；与《龙珠Z》悟空分开，不把后续形态回填到Z时期。",
        basis: "依据官方角色入口、龙珠超神之气/自在极意设定和跨界资料交叉复核；速度档位用于覆盖高风险有限速度层级，均标争议。"
      })
    })
  ]);
})();

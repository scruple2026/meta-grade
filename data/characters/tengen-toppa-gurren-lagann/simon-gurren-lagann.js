(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天元突破红莲螺岩"];

  if (!work) {
    throw new Error("天元突破红莲螺岩 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "simon-gurren-lagann",
      name: "西蒙/天元突破红莲螺岩",
      en: "Simon / Tengen Toppa Gurren Lagann",
      ja: "シモン / 天元突破グレンラガン",
      affiliation: "大红莲团",
      grade: "主角 / 螺旋力最终机体",
      appearances: ["TV动画最终决战", "剧场版螺岩篇"],
      timelineStatus: "最终决战 / 天元突破与超天元突破形态",
      aliases: ["西蒙", "シモン", "Tengen Toppa Gurren Lagann", "Super Tengen Toppa Gurren Lagann"],
      fandomSlug: "Simon",
      confidence: "disputed",
      evidenceType: ["官方作品入口", "跨界战力参考", "高风险宇宙论覆盖样例"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "作品入口",
          label: "天元突破グレンラガン 公式サイト",
          url: "https://www.gurren-lagann.net/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对《天元突破红莲螺岩》官方作品入口；最终决战量级仍需按画面和交叉资料保守标注。"
        },
        {
          type: "wiki",
          scope: "机体资料入口",
          label: "Gurren Lagann Wiki：Tengen Toppa Gurren Lagann",
          url: "https://gurrenlagann.fandom.com/wiki/Tengen_Toppa_Gurren_Lagann_%28Gunmen%29",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于定位天元突破机体、最终决战和形态资料入口；不单独作为官方量级证据。"
        },
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Tengen Toppa Gurren Lagann",
          url: "https://vsbattles.fandom.com/wiki/Tengen_Toppa_Gurren_Lagann",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核天元突破/超天元突破形态的星系到宇宙论尺度；本站只取星系级、超星系团级和高端有限速度覆盖档并标争议。"
        }
      ],
      defaultTimelineKey: "super-tengen-toppa",
      timelinePanels: [
        {
          key: "tengen-toppa",
          label: "TV最终决战 / 天元突破形态",
          status: "天元突破红莲螺岩",
          dimensions: dims({
            attack: ["星系级｜天元突破形态｜争议", "星系级｜螺旋力投射｜争议", "最终战机体尺度和攻击演出进入星系级覆盖样例；不按无限处理。"],
            defense: ["星系级｜螺旋力防护｜争议", "星系级｜天元突破形态｜争议", "机体与螺旋力防护承受最终战高端攻击，按星系级争议档记录。"],
            movement: ["星系尺度超光速｜最终战机动｜争议", "星系际超光速｜超螺旋宇宙交锋｜争议", "最终战移动和接战发生在高端宇宙论战场，作为有限天文速度覆盖样例。"],
            reaction: ["星系尺度超光速｜最终战交锋｜争议", "星系际超光速｜团队同步响应｜争议", "团队与机体同步应对高端攻击，仍按有限争议档处理。"],
            vitality: ["星系级生命结构｜机体/螺旋力链接｜争议", "星系级生命结构｜团队意志/机体承载｜争议", "生命体量按机体、螺旋力链接和驾驶者团队的最终战承载记录。"],
            healing: ["无自愈", "无自愈", "机体主要靠螺旋力与意志维持，不按生物再生处理。"],
            energy: ["星系级能量｜螺旋力｜争议", "星系级能量｜最终战输出｜争议", "螺旋力总量和输出进入星系级覆盖样例。"],
            energyRegen: ["快速回能｜螺旋力", "极速回能｜螺旋力爆发｜争议", "螺旋力可在战斗中持续爆发，但不是无限能量池。"]
          }),
          notes: "TV最终战天元突破形态；不包含剧场版超天元突破峰值。"
        },
        {
          key: "super-tengen-toppa",
          label: "剧场版 / 超天元突破峰值",
          status: "超天元突破红莲螺岩峰值",
          dimensions: dims({
            attack: ["星系级｜天元突破形态｜争议", "超星系团级｜超天元突破｜剧场版峰值｜争议", "星系级到超星系团级覆盖样例；最终战演出强烈象征化，需标剧场版峰值和争议。"],
            defense: ["星系级｜螺旋力防护｜争议", "超星系团级｜超天元突破防护｜剧场版峰值｜争议", "防御来自机体尺度、螺旋力和团队意志，不等于单个驾驶员肉身硬度。"],
            movement: ["超星系团尺度超光速｜剧场版最终战｜争议", "有限宇宙尺度超光速｜超螺旋宇宙｜争议", "覆盖超星系团到有限宇宙尺度有限速度；异空间/演出性质很强，不写无限速。"],
            reaction: ["超星系团尺度超光速｜剧场版最终战｜争议", "有限宇宙尺度超光速｜团队同步响应｜争议", "最终战响应跟随机体与团队同步，不把意志演出或空间设定升为无限反应。"],
            vitality: ["星系级生命结构｜机体/螺旋力链接｜争议", "超星系团级生命结构｜超天元突破承载｜争议", "生命结构按最终机体承载和团队链接记录；驾驶者本体不能单独套用该档。"],
            healing: ["无自愈", "无自愈", "机体主要靠螺旋力与意志维持，不按生物再生处理。"],
            energy: ["星系级能量｜螺旋力｜争议", "超星系团级能量｜超天元突破｜争议", "螺旋力峰值用于覆盖星系级与超星系团级能量总量，不自动反推无限。"],
            energyRegen: ["快速回能｜螺旋力", "极速回能｜螺旋力爆发｜争议", "可持续爆发和重整攻势，但不是无消耗无限能量池。"]
          }),
          notes: "当前主面板；剧场版超天元突破峰值只作为高端有限覆盖样例。"
        }
      ],
      revisionNotes: [
        "新增条目：用于覆盖星系级、超星系团级、星系级生命结构和高端有限速度档；不使用无限级或无限速。"
      ],
      dimensions: dims({
        attack: ["星系级｜天元突破形态｜争议", "超星系团级｜超天元突破｜剧场版峰值｜争议", "星系级到超星系团级覆盖样例；最终战演出强烈象征化，需标剧场版峰值和争议。"],
        defense: ["星系级｜螺旋力防护｜争议", "超星系团级｜超天元突破防护｜剧场版峰值｜争议", "防御来自机体尺度、螺旋力和团队意志，不等于单个驾驶员肉身硬度。"],
        movement: ["超星系团尺度超光速｜剧场版最终战｜争议", "有限宇宙尺度超光速｜超螺旋宇宙｜争议", "覆盖超星系团到有限宇宙尺度有限速度；异空间/演出性质很强，不写无限速。"],
        reaction: ["超星系团尺度超光速｜剧场版最终战｜争议", "有限宇宙尺度超光速｜团队同步响应｜争议", "最终战响应跟随机体与团队同步，不把意志演出或空间设定升为无限反应。"],
        vitality: ["星系级生命结构｜机体/螺旋力链接｜争议", "超星系团级生命结构｜超天元突破承载｜争议", "生命结构按最终机体承载和团队链接记录；驾驶者本体不能单独套用该档。"],
        healing: ["无自愈", "无自愈", "机体主要靠螺旋力与意志维持，不按生物再生处理。"],
        energy: ["星系级能量｜螺旋力｜争议", "超星系团级能量｜超天元突破｜争议", "螺旋力峰值用于覆盖星系级与超星系团级能量总量，不自动反推无限。"],
        energyRegen: ["快速回能｜螺旋力", "极速回能｜螺旋力爆发｜争议", "可持续爆发和重整攻势，但不是无消耗无限能量池。"]
      }),
      notes: notes({
        penetration: "螺旋力钻击、机体格斗和最终战能量投射以超大尺度穿透/对撞为主；星系级与超星系团级是有限覆盖样例，不等于无限杀伤。",
        resistance: "防御依赖机体、螺旋力、团队同步和最终战空间语境；驾驶员本体被剥离机体后不能继承同档硬度。",
        sensing: "团队同步、螺旋力共鸣和最终战战场信息让机体能应对超大尺度攻击；这不是全知索敌。",
        tactics: "西蒙和大红莲团以意志压制、团队同步、合体升级和正面突破为核心；战术风格极端进攻，不适合被解读成全类型规则压制。",
        special: "螺旋力、机体合体、天元突破形态、超天元突破形态、团队意志共鸣。",
        weakness: "最终战高度依赖机体、团队、螺旋力和超螺旋宇宙语境；普通状态、单个驾驶员本体和早期红莲螺岩不能套用该面板。",
        setting: "按TV最终决战与剧场版螺岩篇峰值记录；普通机体和早期地上篇不并入主面板。",
        basis: "依据官方作品入口、最终战机体形态资料入口和跨界资料交叉复核；本条只承担有限高端星系/超星系团覆盖，不写无限。"
      })
    })
  ]);
})();

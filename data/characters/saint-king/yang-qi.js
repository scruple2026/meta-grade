(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["圣王"];

  if (!work) {
    throw new Error("圣王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yang-qi",
      name: "杨奇",
      en: "Yang Qi",
      ja: "",
      affiliation: "圣王帝国 / 圣王界",
      grade: "主角 / 圣王最终阶段",
      appearances: ["正篇"],
      timelineStatus: "大结局 / 无限意志与圣王界阶段",
      aliases: ["圣王"],
      fandomSlug: "",
      confidence: "disputed",
      evidenceType: ["中文网文原作", "高风险无限档", "最终阶段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "chapter",
          scope: "后期境界",
          label: "纵横中文网：《圣王》作品页与最终章入口",
          url: "https://www.zongheng.com/detail/158432",
          citation: "梦入神机《圣王》第1324章《无限意志》、第1600章《最后的时刻 {大结局}》。",
          lang: "zh",
          authority: "primary",
          medium: "publisher",
          ratingEvidence: true,
          claim: "支撑杨奇后期无限意志和最终阶段资源池语境；无限级能量只按总量/资源池记录，不自动反推单击输出。"
        },
        {
          type: "official",
          scope: "授权作品页",
          label: "书旗小说：《圣王》",
          url: "https://ognv.shuqi.com/book/134330.html",
          lang: "zh",
          authority: "licensed",
          medium: "publisher",
          ratingEvidence: false,
          claim: "用于交叉核对作品、作者、章节总数和纵横中文数字版权说明。"
        }
      ],
      revisionNotes: [
        "中文网文无限能量总量代表样例：只把无限意志/圣王界/地狱熔炉相关后期资源池收束为能量总量无限。",
        "能量总量不自动反推攻击能级、防御能级或能量回复速度。"
      ],
      dimensions: dims({
        attack: ["未知", "未知", "本条不把无限能量总量自动换算为单次攻击无限。"],
        defense: ["未知", "未知", "防御需独立承伤、护盾或抵消证据。"],
        movement: ["未知", "未知", "后期境界不直接换算连续移动速度。"],
        reaction: ["未知", "未知", "无限意志不直接等同身体反应速度。"],
        vitality: ["未知", "未知", "不把能量池或意志层级直接换算为生命结构。"],
        healing: ["未知", "未知", "恢复范围和速度需另补原文证据。"],
        energy: ["有限宇宙级能量｜圣王界资源池｜总量非单击｜争议", "无限级能量｜无限意志/圣王界｜总量非单击｜宇宙论依赖｜争议", "代表能量总量的无限样例；只说明资源池/总量非有限，不等于每次攻击都能无限输出。"],
        energyRegen: ["未知", "未知", "回能速度不是无限档；若涉及吸收或补能，需要另按速度尺度记录。"]
      }),
      notes: notes({
        penetration: "本条不主打攻击定级；无限级能量是总量/资源池概念，只有能证明战斗时间内有效释放并充分耦合时，才可另作攻击依据。",
        resistance: "防御不由能量总量自动推出；若杨奇使用护体、圣王界或神器防护，应按防护覆盖率和承伤证据单独定级。",
        sensing: "无限意志提供高层级精神/意志优势，但不能直接换成反应速度或必中索敌。",
        tactics: "杨奇后期以圣王帝国、圣王界、地狱熔炉和意志层级管理资源，续航与资源调度是核心优势。",
        special: "神象镇狱劲、诸神印记、地狱熔炉、无限意志、圣王界、资源吸收与转化。",
        weakness: "无限能量总量不代表无限单击、无限防御或瞬时回能；跨作品时必须分清总量、释放速率、耦合效率和战斗可用窗口。",
        setting: "按《圣王》第1324章后期境界至第1600章大结局最终阶段记录；早期地狱熔炉胚胎和中期神界阶段不并入本面板。",
        basis: "代表维度为能量总量：依据无限意志、圣王界和后期资源池语境，把杨奇最终阶段可支配总资源收束为无限级能量，并明确总量不自动反推攻击。"
      })
    })
  ]);
})();

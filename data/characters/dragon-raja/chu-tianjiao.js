(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙族（江南）"];
  if (!work) throw new Error("龙族（江南） work metadata must load before character files.");

  registerCharacters([work.character({
    id: "chu-tianjiao",
    name: "楚天骄",
    en: "Chu Tianjiao",
    ja: "楚天骄",
    aliases: ["楚爹", "老楚", "楚老子"],
    affiliation: "卡塞尔学院执行局",
    grade: "S级混血种 / 超级执行官",
    appearances: ["悼亡者之瞳"],
    timelineStatus: "雨落狂流之暗 / 失踪前峰值",
    fandomSlug: "楚天骄",
    confidence: "medium",
    evidenceType: ["资料入口", "时零/执行官"],
    sourceQuality: "entry",
    evidenceLinks: [{
      type: "wiki",
      scope: "角色资料入口",
      label: "萌娘百科：楚天骄",
      url: "https://zh.moegirl.org.cn/楚天骄",
      lang: "zh",
      authority: "wiki",
      medium: "wiki",
      ratingEvidence: false,
      claim: "用于核对楚天骄的S级混血种、卡塞尔执行局、言灵时零和奥丁事件入口。"
    }],
    revisionNotes: ["worldbook 仅用于抽取《龙族》角色姓名；定级依据公开作品/资料入口并按保守跨界面板记录。"],
    dimensions: dims({
        attack: ["墙级", "楼级｜村雨/时零/超级执行官", "S级执行官和村雨近战很强，但对奥丁一战不写成可对等龙王输出。"],
        defense: ["墙级", "房屋级｜S级血统/执行官经验", "承伤高于一般混血种，面对奥丁和死侍群仍属高危。"],
        movement: ["亚音速", "音速｜时零/混血种爆发", "时零强化局部战斗机动和出手窗口。"],
        reaction: ["亚音速", "音速｜时零/超级执行官经验", "时零与执行官经验支撑高峰值反应。"],
        vitality: ["强化凡体", "房屋级生命阈值｜S级混血种", "生命体量按S级混血种保守记录，不等同龙王结构。"],
        healing: ["缓慢自愈", "快速自愈｜血统/医疗", "恢复依赖血统和医疗，失踪/疑似死亡状态不写成不死。"],
        energy: ["墙级能量", "楼级能量｜时零/村雨/执行装备", "能量池来自血统、言灵和武装。"],
        energyRegen: ["缓慢回能", "中速回能｜血统/休整", "时零和高强度近战后需要休整。"]
      }),
    notes: notes({
        penetration: "村雨、时零窗口和执行官刀术提供单体穿透杀伤。",
        resistance: "S级混血种体质和经验提高承伤，但不能抵消奥丁级威胁。",
        sensing: "长期执行绝密任务，对黑王/奥丁线索和战场异常有较强判断。",
        tactics: "超级执行官，擅长隐蔽调查、保护目标、诱敌和牺牲式断后。",
        special: "言灵时零、村雨、S级血统、卡塞尔执行局绝密任务经验。",
        weakness: "情报被抹除、奥丁尼伯龙根环境和保护楚子航的任务目标限制发挥。",
        setting: "按《悼亡者之瞳》雨落狂流之暗失踪前楚天骄记录。",
        basis: "worldbook只用于抽取楚天骄姓名；公开资料入口显示其S级混血种、超级执行官、言灵时零和奥丁事件定位，按高端混血种执行官保守记录。"
      })
  })]);
})();

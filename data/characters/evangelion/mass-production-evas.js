(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mass-production-evas",
      name: "量产EVA系列",
      en: "Mass Production Evangelions",
      ja: "エヴァンゲリオン量産機",
      affiliation: "SEELE",
      grade: "量产型EVA / 仪式用机群",
      appearances: ["The End of Evangelion"],
      timelineStatus: "旧剧场版 / 第三次冲击仪式",
      aliases: ["量产EVA", "量产机", "Mass Production Evangelion", "Eva Series", "EVA Series", "MP Evas", "复制朗基努斯之枪"],
      fandomSlug: "Mass_Production_Evangelion",
      confidence: "review",
      evidenceType: ["角色页入口", "设定资料入口", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "机体资料入口",
          label: "Evangelion Wiki: Mass Production Evangelion",
          url: "https://evangelion.fandom.com/wiki/Mass_Production_Evangelion",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对量产EVA、S2机关、飞行能力和复制朗基努斯之枪；本站只把这些作为旧剧场版条件峰值和仪式能力处理。"
        },
        {
          type: "wiki",
          scope: "机体与仪式资料入口",
          label: "EvaGeeks Wiki: Mass Production Evangelions",
          url: "https://wiki.evageeks.org/Mass_Production_Evangelions",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于交叉核对量产机在旧剧场版中围攻二号机、S2机关再启动和补完仪式阵列。"
        }
      ],
      revisionNotes: ["从 EVA 副本 worldbook 的 enemy_量产EVA系列与仪式阵列 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "街区级｜复制朗基努斯之枪/仪式｜争议", "近战与巨型武器为主；复制枪可穿透AT力场，仪式峰值不等同稳定轰炸。"],
        defense: ["楼级", "街区级｜AT力场/群体阵列｜争议", "生体机体、AT力场和群体阵列带来高生存力。"],
        movement: ["亚音速", "亚音速｜飞行", "具备大型机体飞行与空中包围能力，但不按高速连续飞行外推。"],
        reaction: ["亚音速", "亚音速｜Dummy Plug", "Dummy Plug 控制下可协同围攻，反应不按真人驾驶员峰值处理。"],
        vitality: ["楼级生命阈值", "街区级生命阈值｜核心未毁再启动/群体", "单机在核心未毁时可从重创中再启动，群体阵列提高任务持续性。"],
        healing: ["无自愈", "无自愈｜核心未毁再启动", "资料不支持量产机把S2机关用于再生；重创后再活动按核心未毁和再启动处理。"],
        energy: ["楼级能量", "街区级能量｜S2机关/仪式｜争议", "S2机关支撑长时间行动和仪式参与，不写成无限破坏能量。"],
        energyRegen: ["快速回能｜S2机关", "快速回能｜S2机关/仪式维持", "持续供能强，仍不等于无限级能量或瞬时回能。"]
      }),
      notes: notes({
        penetration: "复制朗基努斯之枪可针对AT力场和EVA核心形成高穿透，属于反AT力场/仪式武器，不按爆炸半径换算。",
        resistance: "AT力场、生体机体和核心未毁再启动让量产机能在被二号机重创后继续行动；朗基努斯之枪、核心处理和仪式状态仍可改变胜负。",
        sensing: "依赖 SEELE 控制、Dummy Plug 和战场协同，缺少独立侦察型索敌表现。",
        tactics: "以九机包围、空中机动、消耗二号机和仪式站位为核心；单机技巧不如顶级驾驶员EVA。",
        special: "S2机关、飞行翼、Dummy Plug、复制朗基努斯之枪、第三次冲击/补完仪式阵列。",
        weakness: "独立战术判断有限，战斗意义高度依赖SEELE部署和仪式条件；复制枪与仪式不能直接换成稳定输出档。",
        setting: "按 The End of Evangelion 旧剧场版量产机群记录，不混入 Rebuild 设定。",
        basis: "worldbook只用于抽取 enemy_量产EVA系列与仪式阵列；定级依据公开资料入口和旧剧场版中围攻二号机、S2机关再启动、补完仪式表现。"
      })
    })
  ]);
})();

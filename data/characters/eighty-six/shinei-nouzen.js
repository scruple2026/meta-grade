(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "shinei-nouzen",
      name: "辛艾·诺赞",
      en: "Shinei Nouzen",
      ja: "シンエイ・ノウゼン",
      affiliation: "先锋战队",
      grade: "Undertaker / 处理终端",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "先锋战队队长 / Juggernaut驾驶员",
      aliases: ["辛", "Shin", "Undertaker"],
      fandomSlug: "Shinei_Nouzen",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙级｜Juggernaut火炮｜装备", "本体是少年兵，战斗输出来自Juggernaut机体和火炮。"],
        defense: ["凡人级", "墙级｜Juggernaut装甲｜装备", "个人肉身脆弱，机体提供有限战场防护。"],
        movement: ["凡人速", "亚音速｜Juggernaut机动", "机动作战依赖高机动多脚战车。"],
        reaction: ["凡人速", "亚音速｜驾驶/战场预判", "驾驶经验和战场听觉强化预判，但不是超自然高速肉身。"],
        vitality: ["凡人肉身", "精锐韧体｜机体保护", "本体仍是凡人，峰值按机体承伤窗口记录。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙级能量｜弹药/机体", "战斗资源来自机体、弹药、燃料和整备。"],
        energyRegen: ["中速回能", "缓慢回能｜整备补给", "战斗资源需要补给和维修。"]
      }),
      notes: notes({
        penetration: "以Juggernaut主炮、机枪、机动包抄和对Legion弱点打击为主。",
        resistance: "机体可承受有限军武打击，但不是重装坦克；本体一旦暴露仍很脆弱。",
        sensing: "可听到Legion亡灵/黑羊相关声响，是本作内重要索敌优势。",
        tactics: "先锋战队队长，擅长近距机动、诱导、斩首和高风险突入。",
        special: "对Legion声音的感知、Undertaker经验、Juggernaut高机动作战。",
        weakness: "依赖机体、弹药和战场空间；正面重火力、防空火力和长期消耗会限制生存。",
        setting: "按特别侦察任务阶段辛艾·诺赞记录。",
        basis: "worldbook只用于抽取辛艾姓名；定级依据公开官方角色页与86 Wiki资料入口，按凡人驾驶员加稳定机体峰值记录。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "theoto-rikka",
      name: "西奥·利卡",
      en: "Theoto Rikka",
      ja: "セオト・リッカ",
      affiliation: "先锋战队",
      grade: "Laughing Fox / 处理终端",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "先锋战队 / Juggernaut驾驶员",
      aliases: ["Theo", "Theoto", "Laughing Fox"],
      fandomSlug: "Theoto_Rikka",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙体级｜Juggernaut火炮｜装备", "战斗输出来自机体武装。"],
        defense: ["凡人级", "墙体级｜Juggernaut装甲｜装备", "本体凡人，机体提供有限防护。"],
        movement: ["凡人速", "亚音速｜Juggernaut机动", "依赖机动兵器。"],
        reaction: ["凡人速", "亚音速｜驾驶经验", "具备先锋战队驾驶员的战场反应。"],
        vitality: ["凡人肉身", "精锐韧体｜机体保护", "峰值来自机体承伤。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙体级能量｜弹药/机体", "作战资源依赖机体与补给。"],
        energyRegen: ["中速回能", "缓慢回能｜整备补给", "弹药和机体需要整备。"]
      }),
      notes: notes({
        penetration: "Juggernaut火炮和机动作战。攻击速度：赛欧的Juggernaut炮击按炮弹飞行与装填节奏判断，机体迂回只改变射击位置，不直接提高弹速。",
        resistance: "机体防护有限，本体无特殊抗性。",
        sensing: "依靠通信、队友信息和战场观察。",
        tactics: "战场经验成熟，能在小队中执行机动支援和火力压制。",
        special: "Juggernaut驾驶、先锋战队协同。",
        weakness: "凡人本体和轻装机体容错低，长期战斗受弹药与整备限制。",
        setting: "按特别侦察任务阶段记录。",
        basis: "worldbook只用于抽取西奥姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kurena-kukumila",
      name: "可蕾娜·库库米拉",
      en: "Kurena Kukumila",
      ja: "クレナ・ククミラ",
      affiliation: "先锋战队",
      grade: "Gunslinger / 处理终端",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "先锋战队 / Juggernaut驾驶员",
      aliases: ["Kurena", "Gunslinger"],
      fandomSlug: "Kurena_Kukumila",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙体级｜Juggernaut火炮/狙击｜装备", "战斗输出来自机体武装和射击定位。"],
        defense: ["凡人级", "墙体级｜Juggernaut装甲｜装备", "本体凡人，机体提供有限防护。"],
        movement: ["凡人速", "亚音速｜Juggernaut机动", "依赖机动兵器。"],
        reaction: ["凡人速", "亚音速｜驾驶/射击", "射击和驾驶反应优秀，但不写超自然高速。"],
        vitality: ["凡人肉身", "精锐韧体｜机体保护", "峰值来自机体承伤。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙体级能量｜弹药/机体", "作战资源依赖机体与补给。"],
        energyRegen: ["中速回能", "缓慢回能｜整备补给", "弹药和机体需要整备。"]
      }),
      notes: notes({
        penetration: "Juggernaut火炮和远距射击能力。攻击速度：可蕾娜的远距炮弹离膛后独立于机体移动，狙击效果还取决于瞄准、射界与再次装填，并非贴身连打。",
        resistance: "机体防护有限，本体无特殊抗性。",
        sensing: "依靠瞄准、通信和战场观察。",
        tactics: "偏射击/火力支援定位，适合在队伍中提供覆盖和精确打击。",
        special: "Juggernaut驾驶、先锋战队协同。",
        weakness: "凡人本体和轻装机体容错低，近距被重火力压制时风险高。",
        setting: "按特别侦察任务阶段记录。",
        basis: "worldbook只用于抽取可蕾娜姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

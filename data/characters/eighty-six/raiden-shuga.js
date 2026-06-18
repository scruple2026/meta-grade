(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "raiden-shuga",
      name: "莱登·修迦",
      en: "Raiden Shuga",
      ja: "ライデン・シュガ",
      affiliation: "先锋战队",
      grade: "Wehrwolf / 副队长",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "先锋战队 / Juggernaut驾驶员",
      aliases: ["Raiden", "Wehrwolf"],
      fandomSlug: "Raiden_Shuga",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "墙级｜Juggernaut火炮｜装备", "战斗输出来自机体武装。"],
        defense: ["凡人级", "墙级｜Juggernaut装甲｜装备", "本体凡人，机体提供有限防护。"],
        movement: ["凡人速", "亚音速｜Juggernaut机动", "依赖机动兵器。"],
        reaction: ["凡人速", "亚音速｜驾驶经验", "老练驾驶员的战场反应。"],
        vitality: ["凡人肉身", "精锐韧体｜机体保护", "峰值来自机体承伤。"],
        healing: ["无自愈", "无自愈", "无自愈。"],
        energy: ["凡人能量", "墙级能量｜弹药/机体", "作战资源依赖机体与补给。"],
        energyRegen: ["中速回能", "缓慢回能｜整备补给", "弹药和机体需要整备。"]
      }),
      notes: notes({
        penetration: "Juggernaut火炮、机枪和协同火力。",
        resistance: "机体装甲有限，本体无特殊防护。",
        sensing: "依靠战场经验、通信和队伍协同感知威胁。",
        tactics: "先锋战队副队长，沉稳负责，擅长支援辛并维持队伍阵型。",
        special: "Juggernaut驾驶、先锋战队协同。",
        weakness: "依赖机体、弹药和队友通信；面对重型Legion火力时容错低。",
        setting: "按特别侦察任务阶段记录。",
        basis: "worldbook只用于抽取莱登姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

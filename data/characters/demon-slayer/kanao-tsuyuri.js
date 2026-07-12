(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "kanao-tsuyuri",
      name: "栗花落香奈乎",
      en: "Kanao Tsuyuri",
      ja: "栗花落カナヲ",
      affiliation: "鬼杀队 / 蝴蝶屋",
      grade: "主角团 / 花之呼吸",
      appearances: ["立志篇", "柱训练篇", "无限城篇"],
      timelineStatus: "无限城 / 对童磨战时期",
      aliases: ["花之呼吸", "彼岸朱眼"],
      fandomSlug: "Kanao_Tsuyuri",
      dimensions: dims({
        attack: ["墙级", "房屋级｜花之呼吸", "精密斩击和花之呼吸型为主。"],
        defense: ["凡人级", "墙级｜全集中呼吸", "防御仍是人类剑士水平。"],
        movement: ["亚音速", "亚音速", "柱继子级机动，未表现稳定声速位移。"],
        reaction: ["亚音速", "亚音速｜彼岸朱眼", "彼岸朱眼显著提升动态视觉，但不等同音速身体反应。"],
        vitality: ["强化凡体", "精锐韧体", "可在上弦战中承受重压。"],
        healing: ["无自愈", "缓慢自愈", "无自体再生。"],
        energy: ["凡人能量", "墙级能量｜全集中呼吸", "续航强于普通队士。"],
        energyRegen: ["中速回能", "快速回能", "依呼吸和休整恢复。"]
      }),
      notes: notes({
        penetration: "花之呼吸是高精度斩击，彼岸朱眼提升命中与回避。攻击速度：花之呼吸剑击随香奈乎贴身身法，彼岸朱眼提升观察和择机而非让刀刃自行加速，长时使用还受视力负担限制。",
        resistance: "彼岸朱眼代价是视力损伤，不是防御能力。",
        sensing: "彼岸朱眼可显著强化动态视觉和高速捕捉，平时也具备柱继子级观察力；代价是视力损伤，不宜长期常开。",
        tactics: "执行冷静、动作精密，适合在队友创造窗口后进行要害打击；主动谋略表现少于观察和执行。",
        special: "花之呼吸提供高精度斩击和身法，彼岸朱眼可把动态视力推到极限以捕捉高速目标，但代价是视力损伤。",
        weakness: "爆发依赖眼部负担，长期开启会损伤视力。",
        setting: "按无限城对童磨战时期记录；作为继子和最终战支援者定级，彼岸朱眼为代价型峰值。",
        basis: "依据香奈乎作为继子、柱训练和童磨战中的速度、视觉、剑术表现定级。"
      })
    })
  ]);
})();

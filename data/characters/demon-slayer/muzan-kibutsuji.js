(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["鬼灭之刃"];

  if (!work) {
    throw new Error("鬼灭之刃 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "muzan-kibutsuji",
      name: "鬼舞辻无惨",
      en: "Muzan Kibutsuji",
      ja: "鬼舞辻無惨",
      affiliation: "鬼 / 十二鬼月支配者",
      grade: "最终 Boss / 鬼王",
      appearances: ["立志篇", "无限城篇", "最终决战"],
      timelineStatus: "最终决战 / 鬼王本体综合状态",
      aliases: ["鬼王", "Demon King"],
      fandomSlug: "Muzan_Kibutsuji",
      dimensions: dims({
        attack: ["房屋级", "楼宇级｜血鬼术｜触手群", "多触手、冲击波和血液改造造成大范围近战压制。"],
        defense: ["房屋级", "楼宇级｜鬼王再生", "防御主要来自高速再生和多脑多心结构。"],
        movement: ["亚音速", "音速", "鬼王级机动和爆发，峰值保守按近声速战斗机动处理。"],
        reaction: ["亚音速", "音速", "能同时应对多名柱和主角团围攻，峰值按有效近战应对记录。"],
        vitality: ["精锐韧体｜鬼王结构", "精锐韧体｜多脑多心", "多脑多心与分裂能力显著提高失能阈值。"],
        healing: ["极速自愈｜鬼王", "瞬愈｜鬼王", "再生速度极高，需阳光、药物和持续斩击共同压制。"],
        energy: ["房屋级能量", "楼宇级能量｜鬼王", "血液支配、改造和再生资源为鬼中最高。"],
        energyRegen: ["极速回能", "极速回能", "持续作战和再生极强，但药物会削弱。"]
      }),
      notes: notes({
        penetration: "血液注入、细胞破坏和触手群是高接触杀伤，非纯破坏规模。攻击速度：多条触手可从不同方向连续挥扫，血液注入和细胞破坏须在触手或血液接触后生效，不能把毒性作用当作远程弹速。",
        resistance: "对普通斩击再生极强；阳光、珠世药物、赫刀和持续斩首压制有效。",
        sensing: "鬼王对自身血液、细胞和下属鬼有高控制与感知联系，多脑多心提高近战处理；阳光、药物和珠世系反制会干扰判断。",
        tactics: "长期生存和支配布局强，擅长分裂逃生、细胞控制和压制群体；战斗中恐惧阳光与自保优先会限制冒险决策。",
        special: "鬼王血液、鬼化/改造、记忆和细胞支配、多脑多心、高速再生、分裂逃生。",
        weakness: "阳光是根本弱点；药物可老化、分裂抑制和削弱再生。",
        setting: "作为最终 Boss 和十二鬼月上位源头收录，不属于十二鬼月成员。",
        basis: "依据无惨对鬼的支配、最终决战中对多柱围攻的再生、触手攻击、药物削弱表现定级。"
      })
    })
  ]);
})();

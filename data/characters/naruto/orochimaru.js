(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "orochimaru",
      name: "大蛇丸",
      en: "Orochimaru",
      ja: "大蛇丸",
      affiliation: "音隐村 / 三忍",
      grade: "三忍 / 禁术研究者",
      appearances: ["中忍考试篇", "正篇"],
      timelineStatus: "中忍考试至木叶崩溃 / 双手封印前后",
      aliases: ["Orochimaru", "蛇叔", "音忍"],
      fandomSlug: "Orochimaru",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      revisionNotes: [
        "从中忍考试 worldbook 名字池补入；先按木叶崩溃阶段记录，后续不同容器/秽土转生可拆时间线。"
      ],
      dimensions: dims({
        attack: ["楼级", "街区级｜通灵/禁术", "大蛇、草薙剑、忍术和秽土转生可制造大范围威胁。"],
        defense: ["墙级", "楼级｜软体/替身/蛇化", "本体防御依赖替身、蛇化和转生规避，不等同硬吃大范围爆破。"],
        movement: ["亚音速", "超音速｜瞬身", "三忍级机动。"],
        reaction: ["亚音速", "超音速｜战斗经验", "能与三代、三忍级对手交锋。"],
        vitality: ["精锐韧体", "街区级生命阈值｜转生/蛇化｜争议", "生命力和逃生能力异常，但多来自术式和容器机制。"],
        healing: ["缓慢自愈", "快速自愈｜蛇化/换身", "可通过蛇化、替身和容器技术恢复或脱离伤害。"],
        energy: ["楼级能量", "街区级能量｜通灵/禁术", "查克拉和禁术资源丰富，但会受封印和容器限制。"],
        energyRegen: ["快速回能", "快速回能｜容器/禁术", "续航强，双手被封印后施术大幅受限。"]
      }),
      notes: notes({
        penetration: "草薙剑、蛇群、通灵兽和禁术组合偏多段穿刺、束缚与压制；秽土转生属于召唤/外置战力，不直接折算本人单击破坏。",
        resistance: "蛇化、替身、软体改造和不尸转生提供异常生存，但封印术、灵魂攻击和容器崩坏是关键限制。",
        sensing: "依赖忍者感知、蛇类侦查、情报网和研究经验；对未知血继/封印仍需试探。",
        tactics: "长期计划、诱导、试验和情报战极强，擅长用通灵、容器、秽土和心理压力拆解对手。",
        special: "不尸转生、蛇系通灵、草薙剑、秽土转生、咒印、软体改造。",
        weakness: "容器适配、封印术和灵魂损伤会严重限制战力；木叶崩溃后双手封印使大量忍术不可用。",
        setting: "主面板按中忍考试到木叶崩溃阶段记录，不并入博人传或后期研究成果。",
        basis: "依据大蛇丸在中忍考试、死亡森林和木叶崩溃中对佐助、三代火影及通灵/禁术的表现定级。"
      })
    })
  ]);
})();

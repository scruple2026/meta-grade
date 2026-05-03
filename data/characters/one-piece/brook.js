(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["海贼王"];

  if (!work) {
    throw new Error("海贼王 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "brook",
      name: "布鲁克",
      en: "Brook",
      ja: "ブルック",
      affiliation: "草帽一伙",
      grade: "音乐家 / 黄泉果实能力者",
      appearances: ["正篇"],
      timelineStatus: "",
      aliases: [],
      fandomSlug: "Brook",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方作品入口",
          label: "少年ジャンプ官方《ONE PIECE》作品页",
          url: "https://www.shonenjump.com/j/rensai/onepiece.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "作为日文官方作品入口保留；灵魂/黄泉果实相关高风险机制仍需原作卷话补证。"
        }
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜灵魂寒气", "剑术和灵魂寒气具单体杀伤与控制。"],
        defense: ["凡人级", "墙级｜骷髅身体", "骷髅身体对部分伤害特殊，但结构脆弱。"],
        movement: ["亚音速", "超音速｜剑士突进｜争议", "高速剑士机动。"],
        reaction: ["亚音速", "亚音速", "剑士反应优秀。"],
        vitality: ["精锐韧体｜黄泉果实｜特殊生命结构", "精锐韧体｜黄泉果实", "灵魂复归后死亡条件特殊，但身体仍可破坏。"],
        healing: ["无自愈", "常规自愈｜骨骼修复/牛奶", "恢复带喜剧表现，保守记录。"],
        energy: ["墙级能量", "楼级能量｜灵魂寒气", "灵魂能力输出有限。"],
        energyRegen: ["常规回能", "常规回能", "依赖体力。"]
      }),
      notes: notes({
        penetration: "剑术高速突刺、灵魂寒气和音乐催眠可绕开单纯肉体硬碰硬，主打冻结、削弱节奏和灵魂侧干扰；黄泉果实带来的灵魂攻击不直接换算为更大破坏范围。",
        resistance: "骷髅身体对失血、部分器官伤和常规肉体弱点有特殊优势，灵魂可短时出窍侦查；骨架结构仍会被破坏，海楼石、强灵魂干涉和粉碎性打击需要另判。",
        special: "黄泉果实、灵魂出窍、寒气剑术、音乐催眠。",
        weakness: "身体结构轻脆，硬碰硬承伤不如重型战士；灵魂能力和催眠需要条件与节奏，面对无心智目标、高灵魂抗性或高速近身压制会受限。",
        setting: "按新世界后灵魂能力成熟版本记录；黄泉果实的特殊生命结构写入抗性和权能，不把喜剧恢复直接当高速再生。",
        basis: "依据布鲁克新世界篇灵魂能力、剑术和特殊生命结构表现定级。"
      })
    })
  ]);
})();

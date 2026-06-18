(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["电锯人"];

  if (!work) {
    throw new Error("电锯人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "makima",
      name: "玛奇玛",
      en: "Makima",
      ja: "マキマ",
      affiliation: "公安对魔特异课 / 支配恶魔",
      grade: "公安篇最终 boss / 支配恶魔",
      appearances: ["公安篇"],
      timelineStatus: "支配恶魔玛奇玛",
      aliases: ["支配恶魔", "Control Devil"],
      fandomSlug: "Makima",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方角色入口",
          label: "动画「电锯人」官方角色页",
          url: "https://www.chainsawman.dog/tvseries/character/",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对动画官方角色资料；契约/恶魔权能和高风险量级仍需原作章节补证。"
        }
      ],
      dimensions: dims({
        attack: ["房屋级", "街区级｜契约远程打击｜争议", "远程压杀和契约攻击单体杀伤极强，但许多效果属于权能，不直接按范围破坏抬级。"],
        defense: ["凡人级", "凡人级｜契约转移｜特殊防御", "肉身可被杀死；契约转移与复活机制写入特殊防御，不抬高抗破坏主等级。"],
        movement: ["凡人速", "亚音速", "常规位移不突出，强项是支配、契约和远程权能。"],
        reaction: ["亚音速", "亚音速｜恶魔感知", "可应对高危恶魔战斗，但不按光速或瞬移处理。"],
        vitality: ["凡人肉身｜恶魔", "凡人肉身｜契约转移｜特殊生命结构｜争议", "肉身可被常规杀死；死亡转嫁是契约条件和特殊生命结构，不按城市级生命阈值记录。"],
        healing: ["极速自愈", "瞬愈｜契约转移", "被杀后可通过契约效果复归，需标注条件。"],
        energy: ["无资料", "无资料", "契约网络、支配对象和国家契约是外部条件；缺少可换算为个人总资源规模的资料。"],
        energyRegen: ["快速回能", "极速回能｜契约转移", "取决于契约网络和支配对象，不是无条件瞬时回能。"]
      }),
      notes: notes({
        penetration: "支配、压杀、契约借力和远程仪式可绕开常规防御，属于权能型杀伤。",
        resistance: "肉身本身可被枪击、切割杀死；复活来自契约转移。",
        sensing: "支配、记忆/感知操控和契约网络让她能获取大量情报并远程定位部分目标；具体范围依赖支配关系和契约条件。",
        tactics: "长期布局、心理控制和资源调用极强，善于把支配对象、死亡转移和误导组成胜利条件；非常规爱意和认知绕过会破坏计划。",
        special: "支配、记忆/感知操控、契约借力、死亡转移、远程压杀、支配对象调用。",
        weakness: "能力依赖支配关系、契约条件和心理认知；非常规爱意/吞食等可绕过她的转移机制。",
        setting: "按公安篇最终 boss 玛奇玛记录，权能不直接换算成攻击主等级。",
        basis: "依据玛奇玛对公安、枪之恶魔、电锯人及支配对象的契约和复活表现定级，肉身防御与契约防御分开。"
      })
    })
  ]);
})();

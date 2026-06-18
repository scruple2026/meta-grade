(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["东京喰种"];

  if (!work) {
    throw new Error("东京喰种 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ayato-kirishima",
      name: "雾嶋绚都",
      en: "Ayato Kirishima",
      ja: "霧嶋絢都",
      affiliation: "青桐树",
      grade: "羽赫喰种",
      appearances: ["青桐树突袭", "安定区篇"],
      timelineStatus: "安定区篇前后 / 青桐树成员",
      aliases: ["绚都", "黑兔", "Ayato"],
      fandomSlug: "Ayato_Kirishima",
      confidence: "review",
      evidenceType: ["角色页入口", "官方入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "楼级｜羽赫", "羽赫爆射和高速近战具强单体压制。"],
        defense: ["墙级", "楼级｜喰种体质/赫子", "喰种体质和赫子支撑承伤。"],
        movement: ["亚音速", "音速｜羽赫机动", "羽赫高速突进是核心优势。"],
        reaction: ["亚音速", "音速", "可与高端喰种和搜查官周旋。"],
        vitality: ["强化凡体", "精锐韧体｜喰种体质", "可承受重创继续战斗。"],
        healing: ["快速自愈｜喰种再生", "快速自愈｜喰种再生", "再生受饥饿和伤势限制。"],
        energy: ["墙级能量", "楼级能量｜羽赫", "羽赫爆发消耗快。"],
        energyRegen: ["快速回能", "快速回能｜进食/恢复", "需要进食和休整。"]
      }),
      notes: notes({
        penetration: "羽赫晶体射击和高速近战可快速破坏人体与赫子防御。",
        resistance: "喰种再生和体质强，但持续消耗、库因克和 RC 抑制仍是威胁。",
        sensing: "喰种感官、街战经验和青桐树战斗经历支撑追击。",
        tactics: "偏强攻和速度压制，能以火力逼退弱敌；情绪化会带来过度近身风险。",
        special: "羽赫、喰种再生、高速突袭。",
        weakness: "羽赫续航相对短，面对高防御或经验型对手容易被拖入消耗。",
        setting: "按安定区篇前后的青桐树绚都记录。",
        basis: "依据绚都在青桐树突袭和相关喰种战斗中的羽赫、机动和承伤表现定级。"
      })
    })
  ]);
})();

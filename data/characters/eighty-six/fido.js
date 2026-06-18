(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["86 -不存在的战区-"];

  if (!work) {
    throw new Error("86 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "fido",
      name: "法多",
      en: "Fido",
      ja: "ファイド",
      affiliation: "先锋战队支援机",
      grade: "Scavenger / 支援机械",
      appearances: ["先锋战队特别侦察任务"],
      timelineStatus: "先锋战队支援机",
      aliases: ["Fido", "Scavenger"],
      fandomSlug: "Fido",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "砖级｜机械冲撞/工具", "本职是支援与搬运，直接攻击有限。"],
        defense: ["砖级", "墙级｜机械结构", "支援机结构强于普通生物肉身，但不是主战机体。"],
        movement: ["亚音速", "亚音速｜支援机动", "按地面支援机械机动处理。"],
        reaction: ["凡人速", "亚音速｜自动控制", "有自动控制和跟随能力，但不是高端战斗AI。"],
        vitality: ["强化凡体｜机械结构", "精锐韧体｜机械结构", "按机械机体失能阈值记录。"],
        healing: ["无自愈", "无自愈", "受损后需要维修，不是自愈。"],
        energy: ["砖级能量｜电源/机械", "墙级能量｜补给物资", "主要携带补给与设备资源。"],
        energyRegen: ["缓慢回能｜充电/整备", "缓慢回能｜充电/整备", "需要维修、充电和补给。"]
      }),
      notes: notes({
        penetration: "可用机械结构、工具和搬运支援造成有限物理威胁，但不是主攻单位。",
        resistance: "机械结构有一定耐损性，重火力或核心破坏仍可快速失能。",
        sensing: "具备跟随、记录和支援识别能力，可辅助队伍行动。",
        tactics: "作为支援机承担运输、补给、记录和救援，战术价值高于直接战斗力。",
        special: "Scavenger支援、补给搬运、战场记录。",
        weakness: "缺少主战武装，受损后依赖维修。",
        setting: "按先锋战队支援机法多记录。",
        basis: "worldbook只用于抽取法多姓名；定级依据公开官方角色页与86 Wiki资料入口。"
      })
    })
  ]);
})();

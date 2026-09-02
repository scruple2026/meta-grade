(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["天龙八部"];
  if (!work) throw new Error("天龙八部 work metadata must load before character files.");

  registerCharacters([work.character({
    id: "xiao-feng",
    name: "萧峰",
    en: "Xiao Feng",
    aliases: ["乔峰", "乔帮主", "萧大王", "北乔峰"],
    affiliation: "丐帮 / 辽国南院大王",
    grade: "天龙三兄弟 / 降龙十八掌高手",
    appearances: ["少室山大会"],
    timelineStatus: "少室山大会期",
    fandomSlug: "蕭峰",
    confidence: "medium",
    evidenceType: ["角色页入口", "小说条目入口"],
    sourceQuality: "entry",
    dimensions: dims({
      attack: ["墙体级", "房屋级｜降龙十八掌", "以掌力、内力和近战压制为主，峰值按局部强破坏记录。"],
      defense: ["墙体级", "房屋级｜内力护体", "高强度内力和体魄支撑硬战。"],
      movement: ["亚音速", "亚音速｜轻功", "江湖顶级轻功与近战机动。"],
      reaction: ["亚音速", "亚音速｜群战经验", "少室山群战中反应与读招极强。"],
      vitality: ["精锐韧体", "精锐韧体｜内力/意志", "仍是人体结构，强在承伤和意志。"],
      healing: ["缓慢自愈", "中速自愈｜内功调息", "内功可调息恢复，不是高速再生。"],
      energy: ["墙体级能量", "房屋级能量｜深厚内力", "总内力可支撑连战，不等同单次大范围破坏。"],
      energyRegen: ["缓慢回能", "中速回能｜调息", "内力需要调息恢复。"]
    }),
    notes: notes({
      penetration: "降龙十八掌以内力掌劲和近身压制见长，穿透强于范围破坏。攻击速度：降龙十八掌包含贴身掌击与外放掌劲，前者随萧峰接战、后者有独立作用距离；均无证据另换具体速度档。",
      resistance: "体魄、内力和战意强，但刀剑、毒伤和围攻仍能造成实际威胁。",
      sensing: "江湖经验、听风辨位和读招能力极强。",
      tactics: "群战、单挑、气势压制和临场判断都属顶级。",
      special: "降龙十八掌、擒龙功、深厚内力、战场统率。",
      weakness: "重情重义，常受身份、亲友和民族立场牵制。",
      setting: "按少室山大会期萧峰记录。",
      basis: "worldbook只用于抽取萧峰姓名；定级依据金庸 Wiki 和公开小说条目入口，北乔峰名号不直接折算高档。"
    })
  })]);
})();

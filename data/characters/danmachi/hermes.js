(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["在地下城寻求邂逅是否搞错了什么"];

  if (!work) {
    throw new Error("在地下城寻求邂逅是否搞错了什么 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "hermes",
      name: "赫尔墨斯",
      en: "Hermes",
      ja: "ヘルメス",
      affiliation: "赫尔墨斯眷族",
      grade: "主神 / 情报操盘者",
      appearances: ["异端儿篇"],
      timelineStatus: "异端儿篇 / 神力禁用下界期",
      aliases: ["赫尔墨斯", "Hermes", "赫尔墨斯眷族", "英雄操盘"],
      fandomSlug: "Hermes",
      confidence: "medium",
      evidenceType: ["官方角色页", "角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["凡人级", "凡人级｜神力禁用", "下界神明不以本体攻击参战，威胁主要来自情报和眷族调度。"],
        defense: ["凡人级", "凡人级｜神力禁用", "不把神格身份换算为下界肉身防御。"],
        movement: ["凡人速", "凡人速", "日常移动与潜入行动，不按冒险者机动处理。"],
        reaction: ["凡人速", "凡人速｜计谋/预判", "反应优势主要来自情报预判，不是高速肉搏。"],
        vitality: ["凡人肉身", "凡人肉身｜神明下界体", "神明身份属于设定项，下界体不按高生命体量处理。"],
        healing: ["无自愈", "无自愈", "未按稳定自愈角色处理。"],
        energy: ["不适用｜神力禁用", "不适用｜眷族资源", "神力禁用；眷族、人脉和道具资源写入特殊项而非个人能量池。"],
        energyRegen: ["不适用｜神力禁用", "不适用｜神力禁用", "没有可量化战斗回能。"]
      }),
      notes: notes({
        penetration: "本体攻击很低；实际威胁来自诱导局势、安排眷族行动和制造英雄舞台。",
        resistance: "神明身份有世界观意义，但下界禁用神力时不作为战斗防御档。",
        sensing: "情报网、人脉、眷族行动和对欧拉丽局势的观察能力突出。",
        tactics: "擅长操盘、试探和推动贝尔走向英雄叙事；常通过亚丝菲、赫尔墨斯眷族和外部势力执行计划。",
        special: "下界神明、赫尔墨斯眷族主神、情报操盘、英雄剧本诱导、隐秘协力。",
        weakness: "本体缺少直接战斗力；计划容易被贝尔等当事人的选择打断，也受神明规则和下界禁用神力约束。",
        setting: "按异端儿篇第11卷附近的赫尔墨斯英雄操盘线记录。",
        basis: "worldbook只用于抽取赫尔墨斯姓名；定级依据公开官方角色页与DanMachi Wiki资料入口，神格和操盘能力不折算为本体攻防。"
      })
    })
  ]);
})();

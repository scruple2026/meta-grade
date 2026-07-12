(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "conrad",
      name: "康拉德",
      en: "Conrad",
      ja: "コンラッド",
      affiliation: "神之手",
      grade: "God Hand / 地形转化与瘟疫显化",
      appearances: ["蚀之刻", "正篇"],
      timelineStatus: "蚀之刻 / 神之手显现",
      aliases: ["Conrad", "コンラッド", "神之手", "瘟疫显化"],
      fandomSlug: "Conrad",
      confidence: "review",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "街区级｜地形转化/瘟疫显化｜特殊｜争议", "可在仪式中转化地形并通过鼠群/瘟疫显化，但不是常规爆破输出。"],
        defense: ["墙级", "街区级｜神之手存在｜争议", "防御来自神之手存在方式和显化语境，缺少常规硬抗换算。"],
        movement: ["不适用｜幽界显现", "不适用｜幽界/显化", "通过仪式、鼠群或幽界显化，不按连续移动速度。"],
        reaction: ["亚音速", "亚音速｜因果预判", "偏仪式和因果视角，不以高速战斗反应为主。"],
        vitality: ["精锐韧体", "街区级生命阈值｜神之手存在｜争议", "存在方式特殊，显化体不等同本体生命阈值。"],
        healing: ["未知", "未知｜神之手存在", "缺少稳定自愈资料。"],
        energy: ["墙级能量", "街区级能量｜地形转化/显化｜争议", "权能可影响仪式空间和瘟疫显化，但缺少纯输出规模。"],
        energyRegen: ["未知", "未知｜神之手权能", "无可量化回能资料。"]
      }),
      notes: notes({
        penetration: "地形转化、瘟疫/鼠群显化和献祭仪式支援属于特殊权能，不按普通打击解释。攻击速度：瘟疫、鼠群显化和地形转化通过媒介或仪式扩散，没有可与拳脚同尺测量的单一飞行弹体；发动条件比视觉快慢更关键。",
        resistance: "神之手存在方式特殊；显化体和本体承伤边界需分开。",
        sensing: "具备神之手的因果视角，能在仪式和幽界节点参与局势推动。",
        tactics: "话语较少，定位更偏仪式结构、环境显化和灾厄推动。",
        special: "神之手、地形转化、鼠群/瘟疫显化、因果律感知、幽界显现。",
        weakness: "直接战斗表现和人格策略资料少；多数能力依赖仪式、幽界或显化媒介。",
        setting: "按蚀之刻与后续Conrad显化表现记录。",
        basis: "worldbook只用于抽取Conrad姓名；定级依据Berserk Wiki公开资料入口，地形和瘟疫显化按特殊权能处理。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "void",
      name: "虚空",
      en: "Void",
      ja: "ボイド",
      affiliation: "神之手",
      grade: "God Hand / 烙印仪式执行者",
      appearances: ["蚀之刻", "正篇"],
      timelineStatus: "蚀之刻 / 神之手显现",
      aliases: ["Void", "ボイド", "神之手", "烙印仪式"],
      fandomSlug: "Void",
      confidence: "review",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "街区级｜空间扭曲/烙印仪式｜特殊｜争议", "空间扭曲和烙印仪式是特殊权能，不按纯破坏范围扩张。"],
        defense: ["墙级", "街区级｜空间扭曲/神之手存在｜特殊｜争议", "可用空间扭曲反制攻击，防御更多来自权能和存在方式。"],
        movement: ["不适用｜幽界显现", "不适用｜幽界/权能位移", "神之手显现不按连续移动速度换算。"],
        reaction: ["亚音速", "音速｜空间反制/因果预判｜争议", "可反制髑髅骑士突袭，但主要来自权能和因果视角。"],
        vitality: ["精锐韧体", "街区级生命阈值｜神之手存在｜争议", "存在方式特殊，缺少常规肉身伤害换算。"],
        healing: ["未知", "未知｜神之手存在", "缺少稳定自愈资料。"],
        energy: ["墙级能量", "街区级能量｜空间/烙印权能｜争议", "权能规模高于人类和普通使徒，但不按神之手称号泛化到大范围破坏。"],
        energyRegen: ["未知", "未知｜神之手权能", "无可量化回能资料。"]
      }),
      notes: notes({
        penetration: "空间扭曲、因果视角和烙印仪式是特殊处理，可绕开普通攻防逻辑，但不直接等同大范围爆破。攻击速度：空间扭曲与烙印仪式没有稳定的常规弹道，是否生效取决于显化和仪式条件，不能因空间性质直接判成瞬时攻击。",
        resistance: "神之手存在方式和空间权能提供强抗性；面对因果节点、幽界武器或特殊反制仍需另判。",
        sensing: "能观察因果律流向并处理献祭仪式，但公开资料也显示不能预见一切。",
        tactics: "冷静、仪式性强，负责引导献祭、宣告因果与执行烙印。",
        special: "神之手、空间扭曲、因果律感知、Invocation of Doom、牺牲烙印、幽界显现。",
        weakness: "高端权能依赖神之手/幽界语境；缺少常规肉搏、持续追击和可量化回能资料。",
        setting: "按蚀之刻与后续神之手显现记录。",
        basis: "worldbook只用于抽取Void姓名；定级依据Berserk Wiki公开资料入口，空间扭曲和烙印仪式写入特殊权能，不换算成天体级破坏。"
      })
    })
  ]);
})();

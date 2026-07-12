(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["剑风传奇"];

  if (!work) {
    throw new Error("剑风传奇 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "ubik",
      name: "尤比克",
      en: "Ubik",
      ja: "ユービック",
      affiliation: "神之手",
      grade: "God Hand / 意识诱导者",
      appearances: ["蚀之刻", "正篇"],
      timelineStatus: "蚀之刻 / 神之手显现",
      aliases: ["Ubik", "ユービック", "神之手", "意识诱导"],
      fandomSlug: "Ubik",
      confidence: "review",
      evidenceType: ["角色页入口"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["无资料", "墙级｜意识显化/精神诱导｜特殊｜争议", "主要价值是精神操纵和意识显化，缺少直接破坏表现。"],
        defense: ["墙级", "街区级｜神之手存在｜争议", "防御来自神之手存在方式和仪式语境，不等同肉身硬度。"],
        movement: ["不适用｜漂浮/幽界显现", "不适用｜幽界/权能位移", "漂浮和显现不按跨地移动速度。"],
        reaction: ["亚音速", "亚音速｜因果预判/诱导", "偏心理诱导和因果视角，不以高速攻防为主。"],
        vitality: ["精锐韧体", "街区级生命阈值｜神之手存在｜争议", "存在方式特殊，缺少常规肉身伤害换算。"],
        healing: ["未知", "未知｜神之手存在", "缺少稳定自愈资料。"],
        energy: ["无资料", "墙级能量｜意识显化/幻象诱导｜争议", "能打开意识层面和幻象诱导，但缺少纯能量输出资料。"],
        energyRegen: ["未知", "未知｜神之手权能", "无可量化回能资料。"]
      }),
      notes: notes({
        penetration: "精神诱导、意识显化和献祭说服可绕开普通攻防，但不是直接破坏能级。攻击速度：乌伯克主要以意识显化和语言诱导推动献祭，缺少可记录为高速拳脚或弹体的正面攻击；效果依赖交流与仪式进程。",
        resistance: "神之手存在方式特殊；直接承伤资料少，不能把身份直接写成高硬度。",
        sensing: "能读取和诱导候选者的创伤、欲望与选择，具备因果律视角但非全知。",
        tactics: "擅长话术、幻象和情绪操纵，推动持有贝黑莱特者主动献祭。",
        special: "神之手、意识显化、精神诱导、幻象/形体变化、因果律感知、献祭说服。",
        weakness: "直接破坏和肉搏资料很少；权能多依赖仪式、心理入口和贝黑莱特语境。",
        setting: "按蚀之刻与使徒仪式中的Ubik记录。",
        basis: "worldbook只用于抽取Ubik姓名；定级依据Berserk Wiki公开资料入口，意识操纵写入特殊权能而非攻击能级。"
      })
    })
  ]);
})();

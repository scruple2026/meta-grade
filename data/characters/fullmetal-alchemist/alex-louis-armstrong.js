(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["钢之炼金术师"];

  if (!work) {
    throw new Error("钢之炼金术师 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "alex-louis-armstrong",
      name: "亚历克斯·路易·阿姆斯特朗",
      en: "Alex Louis Armstrong",
      ja: "アレックス・ルイ・アームストロング",
      affiliation: "亚美斯多利斯军部",
      grade: "国家炼金术师 / 豪腕之炼金术师",
      appearances: ["正篇"],
      timelineStatus: "正篇 / 中央军与最终日战斗",
      aliases: ["阿姆斯特朗少佐", "豪腕之炼金术师", "Major Armstrong", "Strong Arm Alchemist"],
      fandomSlug: "Alex_Louis_Armstrong",
      confidence: "review",
      evidenceType: ["角色页入口", "官方角色入口"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "official",
          scope: "官方角色入口",
          label: "映画『鋼の錬金術師 嘆きの丘の聖なる星』：アレックス・ルイ・アームストロング",
          url: "https://www.hagaren-movie.net/ipn/character/alex.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对阿姆斯特朗少佐身份、豪腕别称、手甲炼成和体术组合；正篇战力仍按保守角色入口处理。"
        }
      ],
      revisionNotes: [
        "初建条目：先按正篇保守初稿收录，后续可补章节/集数级证据。"
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜炼成武装｜地形突刺", "以拳击、手甲炼成和地形突刺作战，破坏多为局部墙体、石柱和掩体规模。"],
        defense: ["凡人级", "墙级｜肌肉防护｜格挡", "本体仍是人类肉身，峰值来自强壮体格、格挡和炼成掩体。"],
        movement: ["凡人速", "亚音速｜近战爆发", "无超常长距离位移，短距冲刺和拳斗速度优于普通士兵。"],
        reaction: ["凡人速", "亚音速", "可参与国家炼金术师级近战和混战，但不按枪械或炼成特效直接抬到音速以上。"],
        vitality: ["强化凡体", "精锐韧体", "体格、训练和意志使其能承受重击继续战斗，但仍受失血、骨折和内伤限制。"],
        healing: ["无自愈", "无自愈", "没有超常自愈，依赖医疗和休养。"],
        energy: ["无资料", "无资料", "阿姆斯特朗式炼金术缺少可换算个人能量池的资料。"],
        energyRegen: ["无资料", "无资料", "可连续炼成和拳斗，但没有可量化的个人回能机制。"]
      }),
      notes: notes({
        penetration: "手甲上的炼成阵可把拳击与石质突刺、石拳和地形改造结合，适合破坏掩体、打断行动和制造近战压迫；不把炼成技巧等同大范围爆破。",
        resistance: "强壮体格和军人训练提供优秀抗打击表现，手甲和炼成掩体可临时格挡；面对枪械齐射、爆炸、毒和高热仍按人类弱点处理。",
        sensing: "主要依赖视线、战场经验、军人训练和近战距离判断；没有超自然索敌或远距感知。",
        tactics: "正面压制、保护平民和协同作战意识强，擅长以炼成地形逼迫对手进入拳斗距离；面对高速远程或隐蔽敌人需要队友信息支援。",
        special: "阿姆斯特朗家传炼金术、手甲炼成阵、石质武装、地形突刺、军人格斗。",
        weakness: "输出依赖手甲、近战距离和可炼成材料；本体没有再生，远程火力、湿滑/脆弱地形和高机动对手会削弱稳定性。",
        setting: "按正篇中央军时期到最终日战斗的阿姆斯特朗少佐记录；不单独收录喜剧夸张或非正篇宣传峰值。",
        basis: "依据阿姆斯特朗作为国家炼金术师的拳斗、手甲炼成、地形破坏和最终日协同战表现，保守定为墙级常态、房屋级局部峰值。"
      })
    })
  ]);
})();

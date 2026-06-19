(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) {
    throw new Error("咒术回战 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "mei-mei",
      name: "冥冥",
      en: "Mei Mei",
      ja: "冥冥",
      affiliation: "自由术师 / 前东京高专",
      grade: "一级术师 / 黑鸟操术",
      appearances: ["怀玉・玉折", "涩谷事变", "新宿决战"],
      timelineStatus: "涩谷事变至新宿决战",
      aliases: ["Mei Mei", "黑鸟操术", "Bird Manipulation", "神风", "Bird Strike"],
      fandomSlug: "Mei_Mei",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Mei Mei",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Mei_Mei",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对冥冥、一级术师、黑鸟操术和涩谷事变相关表现；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战新宿决战 worldbook 的新宿决战高频角色 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜神风/黑鸟操术", "近战斧击与黑鸟操术结合，神风是高穿透单体峰值。"],
        defense: ["墙级", "楼级｜咒力防护/术师体术", "一级术师肉体强化和咒力防护较强，但不按高阶怪物硬度处理。"],
        movement: ["亚音速", "音速｜一级术师体术", "可参与涩谷高压战斗并与使役乌鸦协同。"],
        reaction: ["亚音速", "音速", "一级术师战斗反应，能处理近战和术式配合。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "人类术师生命体量，靠战术、护体和规避降低风险。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜黑鸟操术/神风", "咒力资源主要用于鸟类使役、视野共享和神风爆发。"],
        energyRegen: ["中速回能", "快速回能｜一级术师续航", "续航强于普通术师，但神风等峰值仍消耗资源。"]
      }),
      notes: notes({
        penetration: "神风通过乌鸦自杀式攻击形成高单体穿透；本体斧击偏近战物理杀伤。",
        resistance: "咒力强化与一级术师体术支撑近战承伤；没有稳定自愈，硬吃领域或高阶术式风险高。",
        sensing: "黑鸟操术提供远程视野共享、侦察和战场监控，乌鸦被清除会削弱索敌。",
        tactics: "利益优先且善于风险控制，常用侦察、远程打击和弟弟忧忧的支援规避不利局面。",
        special: "黑鸟操术、视野共享、神风、近战斧术、忧忧协同与撤离支援。",
        weakness: "依赖乌鸦数量、视野与发动条件；本体没有高阶恢复，面对领域或超高速近身风险高。",
        setting: "按涩谷事变至新宿决战冥冥记录，一级术师头衔不直接外推高量级。",
        basis: "worldbook只用于抽取冥冥姓名；定级依据公开角色资料入口和黑鸟操术/神风在涩谷事变中的表现。"
      })
    })
  ]);
})();

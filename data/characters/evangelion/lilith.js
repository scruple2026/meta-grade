(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["新世纪福音战士"];

  if (!work) {
    throw new Error("新世纪福音战士 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "lilith",
      name: "莉莉丝",
      en: "Lilith",
      ja: "リリス",
      affiliation: "Terminal Dogma / SEELE补完仪式",
      grade: "第二使徒 / 生命之源",
      appearances: ["TV版", "The End of Evangelion"],
      timelineStatus: "旧剧场版 / 莉莉丝-绫波临界状态",
      aliases: ["Lilith", "第二使徒", "白色巨人", "Giant Rei", "巨大绫波", "绫波莉莉丝", "LCL之海"],
      fandomSlug: "Lilith",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "使徒资料入口",
          label: "Evangelion Wiki: Lilith",
          url: "https://evangelion.fandom.com/wiki/Lilith",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于核对莉莉丝、第二使徒、Terminal Dogma本体、与绫波丽/亚当胚胎结合及第三次冲击/补完仪式关联。"
        },
        {
          type: "wiki",
          scope: "使徒与补完资料入口",
          label: "EvaGeeks Wiki: Lilith",
          url: "https://wiki.evageeks.org/Lilith",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "用于交叉核对莉莉丝在TV/旧剧场版中的身份、Terminal Dogma状态和补完仪式语境。"
        }
      ],
      revisionNotes: ["从 EVA worldbook 的 entity_莉莉丝与绫波临界状态 key/comment 补入；未采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["不适用", "地表级｜第三次冲击/补完仪式｜争议", "平时被钉在Terminal Dogma，不作为常规攻击者；峰值是绫波/亚当胚胎/仪式条件下的人类补完效应。"],
        defense: ["无资料", "城市级｜AT力场/仪式状态｜争议", "本体承伤资料有限，仪式状态可展开极强AT力场与异常存在形式。"],
        movement: ["不适用", "不适用｜仪式显现", "莉莉丝本体缺少常规移动战表现，巨大绫波属于仪式显现。"],
        reaction: ["不适用", "不适用｜仪式意志", "不按普通战斗反应速度排序。"],
        vitality: ["无资料", "地表级生命阈值｜生命之源/补完仪式｜争议", "作为生命之源和补完核心的特殊生命结构处理，不能简单等同普通肉身耐久。"],
        healing: ["不适用", "极速自愈｜仪式重构/争议", "补完中的形体变化属于仪式重构，不等同普通自愈。"],
        energy: ["无资料", "地表级能量｜第三次冲击/补完仪式｜争议", "峰值记录仪式资源与补完效应，不等同单次个人攻击输出。"],
        energyRegen: ["不适用", "不适用｜仪式条件", "没有可独立比较的个人回能循环。"]
      }),
      notes: notes({
        penetration: "第三次冲击/补完可绕开常规防御，把人类个体层面的存在转化为补完语境；这属于仪式与存在改写，不是普通破坏光炮。",
        resistance: "莉莉丝本体与AT力场、LCL、灵魂/补完机制相关；朗基努斯之枪、绫波意志、初号机和SEELE仪式条件会决定其作用边界。",
        sensing: "缺少常规索敌表现；补完状态涉及全人类精神/灵魂层面的连接，但不写成普通侦察能力。",
        tactics: "几乎没有独立战术行动；关键变量是绫波丽的选择、初号机、量产机阵列、朗基努斯之枪和SEELE仪式。",
        special: "第二使徒、生命之源、LCL、AT力场、与绫波/亚当胚胎结合、第三次冲击、人类补完仪式。",
        weakness: "平时受封印/钉缚与设施条件限制；峰值高度依赖外部仪式、绫波意志和补完计划，不是稳定遭遇战面板。",
        setting: "按 TV/旧剧场版莉莉丝与巨大绫波/补完仪式阶段记录，不混入 Rebuild 设定。",
        basis: "worldbook只用于抽取莉莉丝姓名和巨大绫波别名；定级依据公开资料入口和旧剧场版第三次冲击/补完仪式语境，所有高档均标注条件与争议。"
      })
    })
  ]);
})();

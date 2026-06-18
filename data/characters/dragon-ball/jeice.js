(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "jeice",
      name: "吉斯",
      en: "Jeice",
      ja: "ジース",
      affiliation: "基纽特战队 / 弗利萨军",
      grade: "基纽特战队副手 / 成员",
      appearances: ["那美克星篇"],
      timelineStatus: "那美克星篇 / 基纽特战队成员",
      aliases: ["Jeice", "Jiece", "ジース", "Red Magma"],
      fandomSlug: "Jeice",
      confidence: "review",
      evidenceType: ["官方角色展示", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与那美克星篇",
          label: "DRAGON BALL Official Site: Weekly Character Showcase #179 Jiece",
          url: "https://en.dragon-ball-official.com/news/01_2951.html",
          citation: "Weekly Character Showcase #179: Jiece!, Tale 272-283 references",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对吉斯为基纽特战队成员、基纽副手，与巴特联手对抗悟空并在后续与基纽行动。"
        },
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki: Jeice",
          url: "https://vsbattles.fandom.com/wiki/Jeice",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核吉斯作为基纽特战队成员的那美克星篇量级；本站按基纽队长以下保守记录。"
        }
      ],
      revisionNotes: ["从龙珠那美克星篇 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["城市级", "城市级｜气功/Crusher Ball｜争议", "气功和Crusher Ball具高输出，但低于基纽队长和悟空到场后的压制线。"],
        defense: ["城市级", "城市级｜气防御｜争议", "宇宙人身体和气防御强，仍无法承受高差距压制。"],
        movement: ["高超音速", "宇宙速度级｜飞行/高速战斗｜争议", "可高速飞行和与巴特合击。"],
        reaction: ["高超音速", "宇宙速度级｜争议", "可参与那美克星篇高速战斗，但被悟空气势和速度压制。"],
        vitality: ["城市级生命阈值", "城市级生命阈值｜气防御｜争议", "生命阈值来自气防御与宇宙人身体。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "无稳定再生。"],
        energy: ["城市级能量", "城市级能量｜气功/Crusher Ball｜争议", "可释放高强度气功和合击。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "可连续战斗但消耗明显。"]
      }),
      notes: notes({
        penetration: "气功、Crusher Ball和与巴特的组合攻击是主要杀伤手段。",
        resistance: "气防御较强，但在悟空到场后的差距面前无法稳定承压。",
        sensing: "使用探测器、弗利萨军经验和战场判断，能意识到悟空异常但初期仍误判。",
        tactics: "较会观察局势，是基纽副手和巴特搭档，能撤退汇报；正面压制不足时会依赖队友。",
        special: "气功、Crusher Ball、舞空术、与巴特合击、基纽特战队协同。",
        weakness: "面对高差距敌人会依赖队友或撤退，单兵特殊机制不如基纽和古尔多。",
        setting: "按那美克星篇吉斯记录。",
        basis: "worldbook只用于抽取吉斯姓名；定级依据Dragon Ball官方角色展示与那美克星篇表现，按基纽队长以下保守记录。"
      })
    })
  ]);
})();

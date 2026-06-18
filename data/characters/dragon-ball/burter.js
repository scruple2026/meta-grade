(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "burter",
      name: "巴特",
      en: "Burter",
      ja: "バータ",
      affiliation: "基纽特战队 / 弗利萨军",
      grade: "基纽特战队成员",
      appearances: ["那美克星篇"],
      timelineStatus: "那美克星篇 / 基纽特战队成员",
      aliases: ["Burter", "バータ", "宇宙最快"],
      fandomSlug: "Burter",
      confidence: "review",
      evidenceType: ["官方角色展示", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与速度特征",
          label: "DRAGON BALL Official Site: Weekly Character Showcase #178 Burter",
          url: "https://en.dragon-ball-official.com/news/01_2928.html",
          citation: "Weekly Character Showcase #178: Burter!, Tale 272-282 references",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对巴特为基纽特战队成员，具突出速度，能接住飞出的龙珠，但后来被悟空速度压制。"
        },
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki: Burter",
          url: "https://vsbattles.fandom.com/wiki/Burter",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核巴特的那美克星篇战力与速度口径；本站不把宇宙最快自称写成最高速度档。"
        }
      ],
      revisionNotes: ["从龙珠那美克星篇 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["城市级", "城市级｜气功/合击｜争议", "攻击和气功与特战队普通强者同级，特点更偏速度。"],
        defense: ["城市级", "城市级｜气防御｜争议", "气防御强于普通战士，但被悟空压制。"],
        movement: ["宇宙速度级", "宇宙速度级｜自称宇宙最快｜争议", "官方资料强调速度突出；宇宙最快是角色自负表述，实际被悟空反超。"],
        reaction: ["高超音速", "宇宙速度级｜速度型战斗", "速度型成员，能参与与悟空的高速交手但判断跟不上差距。"],
        vitality: ["城市级生命阈值", "城市级生命阈值｜气防御｜争议", "宇宙人身体与气防御支撑承伤。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "无稳定再生。"],
        energy: ["城市级能量", "城市级能量｜气功/合击｜争议", "气储量强但不及基纽队长。"],
        energyRegen: ["快速回能", "快速回能｜气恢复", "可连续高速战斗但会消耗。"]
      }),
      notes: notes({
        penetration: "气功、近战和与吉斯的合击为主，速度用于命中和压制，不等同更高破坏档。",
        resistance: "气防御和速度规避强，但遇到悟空这种更高速/更高输出对手时迅速失效。",
        sensing: "依赖战斗力探测器、速度自信和基纽特战队经验。",
        tactics: "擅长高速追击和与吉斯联手，但自负会误判真正速度差。",
        special: "高速飞行、舞空术、气功、与吉斯合击、基纽特战队协同。",
        weakness: "速度称号有自负成分；面对真正更快的对手时战术单一。",
        setting: "按那美克星篇巴特记录。",
        basis: "worldbook只用于抽取巴特姓名；定级依据Dragon Ball官方角色展示与那美克星篇表现，速度特点写入说明但不无限上推。"
      })
    })
  ]);
})();

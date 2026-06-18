(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["龙珠"];

  if (!work) {
    throw new Error("龙珠 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "guldo",
      name: "古尔多",
      en: "Guldo",
      ja: "グルド",
      affiliation: "基纽特战队 / 弗利萨军",
      grade: "基纽特战队成员 / 超能力者",
      appearances: ["那美克星篇"],
      timelineStatus: "那美克星篇 / 基纽特战队成员",
      aliases: ["Guldo", "グルド", "时间停止"],
      fandomSlug: "Guldo",
      confidence: "review",
      evidenceType: ["官方角色展示", "跨界参考"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "official",
          scope: "角色定位与超能力",
          label: "DRAGON BALL Official Site: Weekly Character Showcase #118 Guldo",
          url: "https://en.dragon-ball-official.com/news/01_2072.html",
          citation: "Weekly Character Showcase #118: Guldo!, Tale 272-274 references",
          lang: "en",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "核对古尔多为基纽特战队成员，战斗力不高但拥有时间停止和念动力等超能力。"
        },
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki: Guldo",
          url: "https://vsbattles.fandom.com/wiki/Guldo",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于交叉复核古尔多战力低于其他特战队成员但具时间停止/念动力的跨界处理；特殊能力不直接提高破坏档。"
        }
      ],
      revisionNotes: ["从龙珠那美克星篇 worldbook 的 comment/key 姓名池补入；不采用 worldbook 正文描述。"],
      dimensions: dims({
        attack: ["楼级", "城市级｜念动力/气功｜争议", "基础战斗力明显低于其他成员，峰值来自念动力控制和气功杀伤。"],
        defense: ["楼级", "城市级｜气防御｜争议", "身体和气防御低于其他特战队成员，仍高于普通战士。"],
        movement: ["超音速", "高超音速｜飞行/短距战斗", "速度远弱于悟饭和克林释放气后的高速压迫。"],
        reaction: ["超音速", "高超音速｜超能力辅助", "身体反应不顶尖，依赖停止时间和念动力制造窗口。"],
        vitality: ["楼级生命阈值", "城市级生命阈值｜气防御｜争议", "生命阈值低于其他成员，正面承伤短板明显。"],
        healing: ["无自愈", "缓慢自愈｜医疗/休整", "无稳定再生。"],
        energy: ["楼级能量", "城市级能量｜超能力/气功｜争议", "资源更多体现在超能力控制而非高输出硬拼。"],
        energyRegen: ["中速回能", "快速回能｜气恢复/超能力", "时间停止和念动力存在呼吸、精神和体力限制。"]
      }),
      notes: notes({
        penetration: "破坏输出低于其他成员，但时间停止、念动力定身和物体控制可制造单体处决窗口。",
        resistance: "身体短板明显，若时间停止或念动力被打断，很容易被速度型战士击杀。",
        sensing: "依赖四眼观察、探测器和超能力预判；可看穿克林破坏龙珠的意图。",
        tactics: "擅长以停止时间、念动力和偷袭弥补战力差距；正面硬拼很弱。",
        special: "短时间停止、念动力束缚、物体控制、气功、基纽特战队协同。",
        weakness: "时间停止依赖屏息/条件且持续有限；身体能力低，遭遇突袭或斩首时容错极低。",
        setting: "按那美克星篇古尔多记录。",
        basis: "worldbook只用于抽取古尔多姓名；定级依据Dragon Ball官方角色展示和那美克星篇表现，时间停止写入特殊权能而不抬高攻击主档。"
      })
    })
  ]);
})();

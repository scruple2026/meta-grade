(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["倚天屠龙记"];

  if (!work) {
    throw new Error("倚天屠龙记 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "yang-dingtian",
      name: "阳顶天",
      en: "Yang Dingtian",
      ja: "",
      affiliation: "明教",
      grade: "明教第三十三代教主 / 乾坤大挪移修炼者",
      appearances: ["金庸共通世界书", "倚天屠龙记"],
      timelineStatus: "主线前史 / 明教鼎盛期",
      aliases: ["陽頂天", "杨破天", "陽教主", "阳教主", "Yang Dingtian"],
      fandomSlug: "陽頂天",
      confidence: "review",
      evidenceType: ["角色页入口", "角色列表入口", "worldbook姓名字段"],
      sourceQuality: "specific",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "身份/武学",
          label: "金庸 Wiki：阳顶天",
          url: "https://jinyong.fandom.com/zh/wiki/%E9%99%BD%E9%A0%82%E5%A4%A9",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "核对阳顶天为《倚天屠龙记》人物、明教第三十三代教主，武功包含大九天手和乾坤大挪移。"
        },
        {
          type: "wiki",
          scope: "角色列表交叉核对",
          label: "金庸 Wiki：倚天屠龙记角色列表",
          url: "https://jinyong.fandom.com/zh/wiki/%E5%80%9A%E5%A4%A9%E5%B1%A0%E9%BE%8D%E8%A8%98%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8",
          lang: "zh",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: true,
          claim: "角色列表把阳顶天列为明教鼎盛期教主，并提供其与明教人物、前史战绩的交叉核对入口。"
        }
      ],
      revisionNotes: [
        "worldbook 仅用于金庸共通世界书 key/comment 中“阳顶天失踪”和“明教 / 光明顶 / 张无忌 / 阳顶天 / 四大法王 / 五散人 / 五行旗”的姓名抽取；没有读取或采用 worldbook 正文描述。",
        "阳顶天按主线前史中的明教第三十三代教主记录；由于直接正面战斗描写有限，面板保持 review，不把教主身份或“绝顶高手”旁白直接换算成大范围破坏。"
      ],
      dimensions: dims({
        attack: ["墙级", "房屋级｜大九天手/乾坤大挪移｜前史", "明教教主级内力和大九天手爆发可压制高端武者，但仍按武侠单体/局部破坏处理。"],
        defense: ["墙级", "房屋级｜乾坤大挪移/顶级内力｜前史", "防护主要来自内力、卸劲和高手级招架，不写作大范围抗毁。"],
        movement: ["亚音速", "亚音速｜明教顶级高手身法", "按金庸顶尖武者轻功和近战身法记录，不写超音速。"],
        reaction: ["亚音速", "亚音速｜顶级高手交锋", "能与高端江湖人物交手并造成压制，反应保持武侠高手尺度。"],
        vitality: ["精锐韧体", "精锐韧体｜顶级内力", "生命结构仍为人体；走火入魔死亡说明修炼风险不能转化为高生命结构。"],
        healing: ["缓慢自愈", "中速自愈｜内功调息｜推定", "顶级内功可辅助调息疗伤，但缺少稳定战斗再生表现。"],
        energy: ["墙级能量", "房屋级能量｜明教教主级内力/乾坤大挪移", "可用内力资源按明教鼎盛期教主和乾坤大挪移修炼者保守记录。"],
        energyRegen: ["缓慢回能", "中速回能｜调息", "回气依赖内功调息；没有瞬时补满或无限能量设定。"]
      }),
      notes: notes({
        penetration: "大九天手和乾坤大挪移偏单体劲力爆发、卸劲、借力和招式反制；杀伤强于范围破坏。",
        resistance: "顶级内力和乾坤大挪移可提高化劲与承伤，但本体仍是人类武者，内功失控会致命。",
        sensing: "按明教教主级武者的常规听劲、观察和临战判断处理；无远距索敌或预知资料。",
        tactics: "能统御明教鼎盛期人物并维持教主地位，武学理解高；具体临场战例多属前史，保持保守。",
        special: "明教第三十三代教主、大九天手、乾坤大挪移、明教组织号召力。",
        weakness: "修炼乾坤大挪移时因情绪冲击走火入魔而死；组织资源不计入个人常态面板。",
        setting: "金庸共通 worldbook 的天鹰教和明教 key/comment 中出现阳顶天；本条按《倚天屠龙记》主线前史的明教鼎盛期记录。",
        basis: "worldbook只用于抽取阳顶天姓名；定级依据金庸 Wiki 角色页与倚天角色列表。明教教主、绝顶高手和乾坤大挪移只支持武侠高端单体面板，不直接换算为城市级以上破坏。"
      })
    })
  ]);
})();

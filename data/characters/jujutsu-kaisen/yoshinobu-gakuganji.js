(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["咒术回战"];

  if (!work) throw new Error("咒术回战 work metadata must load before character files.");

  registerCharacters([
    work.character({
      id: "yoshinobu-gakuganji",
      name: "乐岩寺嘉伸",
      en: "Yoshinobu Gakuganji",
      ja: "楽巌寺嘉伸",
      affiliation: "京都咒术高专",
      grade: "校长 / 咒力音波",
      appearances: ["京都姐妹校交流会", "涩谷事变后"],
      timelineStatus: "正篇",
      aliases: ["乐岩寺", "Gakuganji", "Yoshinobu Gakuganji", "京都校长", "咒力音波"],
      fandomSlug: "Yoshinobu_Gakuganji",
      confidence: "review",
      evidenceType: ["角色页入口", "worldbook名字索引"],
      sourceQuality: "entry",
      evidenceLinks: [
        {
          type: "wiki",
          scope: "角色资料入口",
          label: "Jujutsu Kaisen Wiki: Yoshinobu Gakuganji",
          url: "https://jujutsu-kaisen.fandom.com/wiki/Yoshinobu_Gakuganji",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对乐岩寺嘉伸、京都校长和咒力音波相关资料；具体量级按作品内表现保守记录。"
        }
      ],
      revisionNotes: [
        "从咒术回战改 worldbook 的乐岩寺嘉伸 key/comment 补入；未采用 worldbook 正文描述。"
      ],
      dimensions: dims({
        attack: ["墙级", "楼级｜咒力音波/乐器", "咒力音波可进行中距攻击和压制，范围与破坏保守记录。"],
        defense: ["墙级", "楼级｜咒力防护/老练术师", "高龄术师但经验和咒力防护稳定，仍不按前线顶级硬防处理。"],
        movement: ["凡人速", "亚音速｜术师基础", "非高速机动型。"],
        reaction: ["亚音速", "音速｜老练术师经验", "经验和咒力应对优于普通术师，但身体机动有限。"],
        vitality: ["精锐韧体", "精锐韧体｜咒力强化", "人类术师生命体量，承伤依赖咒力防护和经验。"],
        healing: ["无自愈", "无自愈", "缺少稳定反转术式自愈表现。"],
        energy: ["墙级能量", "楼级能量｜咒力音波", "咒力资源用于乐器媒介和音波攻击。"],
        energyRegen: ["中速回能", "快速回能｜老练术师续航", "续航按高年资术师保守记录。"]
      }),
      notes: notes({
        penetration: "咒力音波偏中距能量/振动压制，依赖乐器媒介和施术窗口。",
        resistance: "咒力防护和经验较强，肉身仍有人类老年术师限制。",
        sensing: "具备校长和资深术师判断，非远距索敌型。",
        tactics: "保守、制度化，擅长指挥和政治判断；正面战斗依赖术式距离。",
        special: "咒力音波、乐器媒介、京都校长经验、咒术高层关系。",
        weakness: "机动有限，媒介和施术窗口受干扰会削弱输出。",
        setting: "按正篇京都校长状态记录，不把职位或高层身份直接折算为高战力。",
        basis: "worldbook只用于抽取乐岩寺嘉伸姓名；定级依据公开角色资料入口和咒力音波表现。"
      })
    })
  ]);
})();

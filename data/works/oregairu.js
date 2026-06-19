(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "我的青春恋爱物语果然有问题";

  registerWorkSource(WORK, {
    slug: "oregairu",
    originalLanguage: "ja",
    pageLabel: "Oregairu Wiki 角色页",
    pageBase: "https://oregairu.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [{
      type: "official",
      scope: "日文动画官方入口",
      label: "やはり俺の青春ラブコメはまちがっている。完",
      url: "https://www.tbs.co.jp/anime/oregairu/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对作品官方入口；不作为单独量级换算依据。"
    }, {
      type: "official",
      scope: "官方角色入口",
      label: "TBS：登場人物",
      url: "https://www.tbs.co.jp/anime/oregairu/character/",
      lang: "ja",
      authority: "official",
      medium: "official-site",
      ratingEvidence: false,
      claim: "用于核对动画主要角色列表。"
    }],
    commonLinks: [{
      label: "Oregairu Wiki",
      url: "https://oregairu.fandom.com/wiki/My_Teen_Romantic_Comedy_SNAFU_Wiki",
      claim: "角色资料入口；普通校园角色不据此扩大战力面板。"
    }],
    scaleEvidenceLinks: [],
    scaleNotes: {
      scope: "当前收录《综漫-春物》worldbook key/comment 中的侍奉部主角团：比企谷八幡、雪之下雪乃和由比滨结衣；教师、家人、同学和学生会支线角色不扩入。",
      versionPolicy: "按原作/动画主线校园时期记录；不把综漫穿越、二创外力、玩家变量或跨界设定并入正式面板。",
      highRisk: [],
      conservativeNotes: "本作品角色按普通现代校园人类处理；社交能力、洞察、心理博弈和剧情影响力写入战术/特殊说明，不折算为攻击、防御、速度或能量等级。"
    },
    sourcePolicy: "TBS 官方站和官方角色页用于核对作品/角色；Oregairu Wiki 是资料入口。worldbook 仅用于姓名抽取。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

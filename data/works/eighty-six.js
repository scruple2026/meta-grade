(function () {
  "use strict";

  const { character, registerWorkSource } = window.POWER_WIKI;
  const WORK = "86 -不存在的战区-";

  registerWorkSource(WORK, {
    slug: "eighty-six",
    originalLanguage: "ja",
    pageLabel: "86 -Eighty Six- Wiki 角色页",
    pageBase: "https://86-eighty-six.fandom.com/wiki/",
    pageLanguage: "en",
    canonicalLinks: [
      {
        type: "official",
        scope: "日文官方角色页",
        label: "TVアニメ『86-エイティシックス-』公式サイト：Character",
        url: "https://anime-86.com/character/",
        lang: "ja",
        authority: "official",
        medium: "official-site",
        claim: "用于核对86动画主要角色、先锋战队成员和阵营身份；本站不把军衔或指挥权直接折算为个人战力。"
      }
    ],
    commonLinks: [
      {
        label: "86 -Eighty Six- Wiki 角色总表",
        url: "https://86-eighty-six.fandom.com/wiki/Category:Characters"
      }
    ],
    scaleNotes: {
      scope: "当前收录先锋战队特别侦察任务的主角团核心：蕾娜、辛、莱登、西奥、安琪、可蕾娜和法多；肖雷、共和国军官、整备支援和技术支援不再按名字池扩入。",
      versionPolicy: "人类本体、Juggernaut/Legion机体、Para-RAID指挥链和整备支援分开标注；不把指挥单位全部算作角色个人常态。",
      highRisk: ["Legion", "Shepherd", "Para-RAID", "远程火力指挥", "无人战争谎言"],
      conservativeNotes: "86角色多数是凡人肉身，战斗峰值来自机体、弹药、传感器、指挥链或Legion系统；低科技军武不自动抬到城市级。"
    },
    sourcePolicy: "角色页/官方角色页是入口来源；具体火力和机体参数后续可补小说卷章或设定资料。"
  });

  window.POWER_WIKI_WORKS = window.POWER_WIKI_WORKS || {};
  window.POWER_WIKI_WORKS[WORK] = {
    name: WORK,
    character(raw) {
      return character({ work: WORK, ...raw });
    }
  };
})();

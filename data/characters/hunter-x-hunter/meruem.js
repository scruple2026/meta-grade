(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["全职猎人"];

  if (!work) {
    throw new Error("全职猎人 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "meruem",
      name: "梅路艾姆",
      en: "Meruem",
      ja: "メルエム",
      affiliation: "嵌合蚁",
      grade: "蚁王",
      appearances: ["蚁王篇"],
      timelineStatus: "吸收普夫与尤匹后峰值",
      aliases: ["蚁王"],
      fandomSlug: "Meruem",
      evidenceLinks: [
        {
          type: "official",
          scope: "日文官方动画入口",
          label: "日本电视台「HUNTER×HUNTER」Cast/Staff",
          url: "https://www.ntv.co.jp/hunterhunter/caststaff/index.html",
          lang: "ja",
          authority: "official",
          medium: "official-site",
          ratingEvidence: false,
          claim: "用于核对2011动画官方入口；念能力、成人杰和蚁篇高风险峰值仍需原作卷话或公式书补证。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "城市级｜吸收后念量｜争议", "肉体与念量远超人类念能力者，城市级作为吸收后能量上层争议保守标注。"],
        defense: ["街区级", "城市级｜贫者蔷薇近爆生还｜争议", "近距离承受蔷薇后仍存活但重伤中毒，不能等同无伤硬抗。"],
        movement: ["超音速", "高超音速｜争议", "远超顶级念能力者，但缺少可精确换算的高端速度。"],
        reaction: ["超音速", "高超音速｜争议", "可适应尼特罗极高速连击，峰值仍标争议。"],
        vitality: ["街区级生命阈值", "城市级生命阈值｜争议", "生命力极强，但毒素和细胞层面损伤仍致命。"],
        healing: ["快速自愈", "极速自愈｜吸收后", "吸收护卫军后可快速恢复重伤，但仍无法解除蔷薇毒。"],
        energy: ["街区级能量", "城市级能量｜吸收后｜争议", "吸收后念量远高于常规角色，具体上限保留争议。"],
        energyRegen: ["快速回能", "极速回能｜吸收后", "吸收后资源恢复显著增强。"]
      }),
      notes: notes({
        penetration: "以压倒性肉体和念量破坏目标，缺少复杂穿透型权能。攻击速度：梅路艾姆的肉体打击随接战和身体发力完成，突进接近与实际出手不能混为一段；吸收护卫军后的念能力若形成远程效果，则须按对应能力的发动与传播另判。",
        resistance: "对冲击、热和爆炸承受极强，但贫者蔷薇毒素可致命。",
        sensing: "嵌合蚁王体质、念成长和学习能力让他快速理解对手模式；吸收护卫军后感知更强，但毒素仍可绕过。",
        tactics: "适应学习能力极端优秀，能在对战中解析尼特罗节奏并寻找突破；早期情感和人类策略理解不足会造成判断盲区。",
        special: "嵌合蚁王体质、学习进化、吸收护卫军能力、念能力增长。",
        weakness: "对毒素和不可逆细胞损伤仍存在弱点；早期对人类情感与策略缺乏理解。",
        setting: "按吸收普夫、尤匹后的峰值记录；贫者蔷薇本身不计入梅路艾姆攻击。",
        basis: "依据梅路艾姆与尼特罗战、蔷薇近爆生还、吸收护卫军后的速度与念量表现定级。"
      })
    })
  ]);
})();

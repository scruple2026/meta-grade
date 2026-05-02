(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["火影忍者"];

  if (!work) {
    throw new Error("火影忍者 work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "sasuke-uchiha",
      name: "宇智波佐助",
      en: "Sasuke Uchiha",
      ja: "うちはサスケ",
      category: "主角团",
      affiliation: "木叶隐村 / 宇智波",
      grade: "主角团 / 轮回眼持有者",
      appearances: ["正篇"],
      timelineStatus: "疾风传最终战 / 轮回眼",
      aliases: [],
      fandomSlug: "Sasuke_Uchiha",
      evidenceLinks: [
        {
          type: "source",
          scope: "跨界战力参考",
          label: "VS Battles Wiki：Sasuke Uchiha（Part II）",
          url: "https://vsbattles.fandom.com/wiki/Sasuke_Uchiha_%28Part_II%29",
          lang: "en",
          authority: "cross-reference",
          medium: "cross-wiki",
          ratingEvidence: true,
          claim: "用于复核疾风传后期永恒万花筒、轮回眼和须佐能乎的跨界量级口径。"
        },
        {
          type: "setting",
          scope: "日文官方设定书",
          label: "集英社：NARUTO―ナルト―［秘伝・陣の書］ キャラクターオフィシャルデータBOOK",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=978-4-08-880263-3",
          lang: "ja",
          authority: "official",
          medium: "databook",
          ratingEvidence: true,
          claim: "用于核对第四次忍界大战、轮回眼/须佐能乎相关角色与术资料；本站大陆级等跨界换算仍保留争议标签。"
        },
        {
          type: "chapter",
          scope: "日文原作卷册",
          label: "集英社：NARUTO―ナルト― 72",
          url: "https://books.shueisha.co.jp/items/contents_amp.html?isbn=978-4-08-880220-6",
          lang: "ja",
          authority: "primary",
          medium: "manga",
          ratingEvidence: true,
          claim: "用于核对辉夜封印后的鸣人对佐助最终战和轮回眼阶段；高端能级换算仍按本站 reference 保守处理。"
        },
        {
          type: "wiki",
          scope: "角色页入口",
          label: "Narutopedia：Sasuke Uchiha",
          url: "https://naruto.fandom.com/wiki/Sasuke_Uchiha",
          lang: "en",
          authority: "wiki",
          medium: "wiki",
          ratingEvidence: false,
          claim: "用于核对佐助角色资料、眼术和主要战斗入口。"
        }
      ],
      defaultTimelineKey: "final-rinnegan",
      timelinePanels: [
        {
          key: "five-kage-summit",
          label: "五影会谈 / 万花筒",
          status: "万花筒与未完成须佐能乎",
          dimensions: dims({
            attack: ["楼级", "街区级｜天照/须佐能乎", "杀伤强但范围和稳定性低于后期。"],
            defense: ["楼级", "街区级｜须佐能乎", "须佐能乎为外覆防御。"],
            movement: ["超音速", "超音速｜瞬身", "高速瞬身和体术。"],
            reaction: ["超音速", "超音速｜写轮眼", "写轮眼预判提升反应。"],
            vitality: ["精锐韧体", "精锐韧体｜咒印/查克拉支撑", "主要靠闪避、防御和意志。"],
            healing: ["无自愈", "常规自愈｜外部治疗", "重伤通常需要外部治疗。"],
            energy: ["楼级能量", "街区级能量｜万花筒", "万花筒消耗巨大。"],
            energyRegen: ["常规回能", "常规回能", "续航受瞳力消耗限制。"]
          }),
          notes: "不计入永恒万花筒和轮回眼。"
        },
        {
          key: "eternal-mangekyo",
          label: "永恒万花筒 / 完全体须佐",
          status: "轮回眼前高峰",
          dimensions: dims({
            attack: ["街区级", "国家级｜完全体须佐能乎｜争议", "完全体须佐进入高端争议区。"],
            defense: ["街区级", "国家级｜完全体须佐能乎｜争议", "外覆防御，不等于本体肉身。"],
            movement: ["超音速", "高超音速｜瞬身｜争议", "高端忍战机动。"],
            reaction: ["超音速", "高超音速｜写轮眼｜争议", "瞳术提升捕捉和预判。"],
            vitality: ["精锐韧体", "街区级生命阈值｜查克拉支撑", "生命体量不随须佐防御等额提升。"],
            healing: ["无自愈", "常规自愈｜外部治疗", "自身恢复仍有限。"],
            energy: ["街区级能量", "国家级能量｜须佐能乎｜争议", "查克拉储量与瞳力消耗很高。"],
            energyRegen: ["常规回能", "快速回能｜外源", "高峰依赖外源或储备。"]
          }),
          notes: "用于区分轮回眼最终战。"
        },
        {
          key: "final-rinnegan",
          label: "最终战 / 轮回眼",
          status: "六道查克拉与因陀罗之矢",
          dimensions: dims({
            attack: ["街区级", "大陆级｜轮回眼｜须佐能乎｜争议", "高峰来自完全体须佐能乎、因陀罗之矢和六道力量。"],
            defense: ["街区级", "大陆级｜完全体须佐能乎｜争议", "须佐能乎是外覆防御，肉身本体需另算。"],
            movement: ["超音速", "高超音速｜瞬身与天手力｜争议", "天手力属于空间置换，不计连续移动速度。"],
            reaction: ["超音速", "高超音速｜写轮眼/轮回眼｜争议", "瞳术提升预判和捕捉，不直接按光速。"],
            vitality: ["精锐韧体", "街区级生命阈值｜查克拉支撑", "主要依靠防御、闪避和查克拉，不是高生命体量肉身。"],
            healing: ["无自愈", "常规自愈｜医疗/外源", "自身恢复不如鸣人，重伤需外部治疗。"],
            energy: ["街区级能量", "大陆级能量｜六道查克拉｜争议", "峰值查克拉来源包含六道与尾兽相关资源。"],
            energyRegen: ["常规回能", "快速回能｜外源/尾兽查克拉", "常态续航有限，高峰依赖外源或储备。"]
          }),
          notes: "当前主面板版本。"
        }
      ],
      dimensions: dims({
        attack: ["街区级", "大陆级｜轮回眼｜须佐能乎｜争议", "高峰来自完全体须佐能乎、因陀罗之矢和六道力量。"],
        defense: ["街区级", "大陆级｜完全体须佐能乎｜争议", "须佐能乎是外覆防御，肉身本体需另算。"],
        movement: ["超音速", "高超音速｜瞬身与天手力｜争议", "天手力属于空间置换，不计连续移动速度。"],
        reaction: ["超音速", "高超音速｜写轮眼/轮回眼｜争议", "瞳术提升预判和捕捉，不直接按光速。"],
        vitality: ["精锐韧体", "街区级生命阈值｜查克拉支撑", "主要依靠防御、闪避和查克拉，不是高生命体量肉身。"],
        healing: ["无自愈", "常规自愈｜医疗/外源", "自身恢复不如鸣人，重伤需外部治疗。"],
        energy: ["街区级能量", "大陆级能量｜六道查克拉｜争议", "峰值查克拉来源包含六道与尾兽相关资源。"],
        energyRegen: ["常规回能", "快速回能｜外源/尾兽查克拉", "常态续航有限，高峰依赖外源或储备。"]
      }),
      notes: notes({
        penetration: "主要按可见破坏与命中效果记录；特殊机制不直接抬高主攻击能级。",
        resistance: "防御、抗性、再生和特殊免疫分开记录，不把难杀直接换算为高防御。",
        special: "写轮眼、万花筒、须佐能乎、轮回眼、天手力、因陀罗之矢。",
        weakness: "存在资源、体力、条件、情报或本体弱点，已在峰值标签和依据中限制。",
        setting: "按当前初稿指定时间线记录，后续可按篇章拆分更细版本。",
        basis: "依据佐助从疾风传后期到终结谷最终战的须佐能乎、轮回眼和高端忍术表现定级。"
      })
    })
  ]);
})();

(function () {
  "use strict";

  const { dims, notes, registerCharacters } = window.POWER_WIKI;
  const work = window.POWER_WIKI_WORKS && window.POWER_WIKI_WORKS["暗杀教室"];

  if (!work) {
    throw new Error("Assassination Classroom work metadata must load before character files.");
  }

  registerCharacters([
    work.character({
      id: "korosensei",
      name: "杀老师",
      en: "Korosensei",
      ja: "殺せんせー",
      affiliation: "椚丘中学3年E班",
      grade: "E班教师 / 触手生物",
      appearances: ["E班暗杀计划"],
      timelineStatus: "E班暗杀计划 / 常规授课期",
      aliases: ["殺せんせー", "章鱼", "Koro-sensei"],
      fandomSlug: "Korosensei",
      confidence: "review",
      evidenceType: ["官方入口", "角色页入口", "高风险速度"],
      sourceQuality: "entry",
      dimensions: dims({
        attack: ["墙级", "街区级｜触手/局部破坏｜争议", "常规触手可高效破坏局部目标；月球事件暂只写入说明，不进入主表高风险档。"],
        defense: ["墙级", "街区级｜触手体/防御形态｜争议", "常规武器难以命中和伤害，弱点武器另算。"],
        movement: ["超音速", "高超音速｜设定高速｜争议", "原作以极高速度为核心设定；未补具体集数/话数前不写入更高主档。"],
        reaction: ["超音速", "高超音速｜设定高速｜争议", "能配合自身高速行动和教学分身式操作。"],
        vitality: ["街区级生命阈值｜触手体", "街区级生命阈值｜防御形态｜争议", "生命结构异常且弱点明确。"],
        healing: ["快速自愈｜触手再生", "极速自愈｜触手体｜争议", "触手体可高速修复但存在反杀老师物质弱点。"],
        energy: ["街区级能量｜触手体", "街区级能量｜持续高速行动｜争议", "持续高速行动和多功能触手体现高总资源；月球事件暂不作为主表总量。"],
        energyRegen: ["快速回能｜触手体", "极速回能｜触手体｜争议", "高速行动和恢复能力强，但非无限资源。"]
      }),
      notes: notes({
        penetration: "高速触手、教学式多任务行动、局部破坏和反制暗杀；月球事件属于高风险争议证据，未补具体章节/集数前不等同任意常规单击。",
        resistance: "常规攻击难以命中并受触手体防御影响，但反杀老师武器和特定弱点有效。",
        sensing: "高速感知、多目标观察和教师式注意力分配极强。",
        tactics: "教学、诱导、闪避和临场保护能力极强，常因教育目标自限。",
        special: "触手体、高速移动、再生、防御形态、反杀老师物质弱点、月球事件争议。",
        weakness: "受反杀老师武器、特定弱点、情感与教育目标限制；高风险月球相关表现需单独标注。",
        setting: "按E班暗杀计划常规授课期记录。",
        basis: "worldbook只用于抽取杀老师姓名；定级依据官方动画入口与Assassination Classroom Wiki资料入口，速度和月球事件保留争议标签。"
      })
    })
  ]);
})();

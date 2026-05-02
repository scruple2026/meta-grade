(function () {
  "use strict";

  const DIMENSIONS = [
    { key: "attack", label: "攻击能级" },
    { key: "defense", label: "防御能级" },
    { key: "movement", label: "移动速度" },
    { key: "reaction", label: "反应速度" },
    { key: "vitality", label: "生命体量" },
    { key: "healing", label: "生命回复速度" },
    { key: "energy", label: "能量总量" },
    { key: "energyRegen", label: "能量回复速度" }
  ];

  const WORK_SOURCES = {};
  const DEFAULT_SOURCE = {
    slug: "",
    originalLanguage: "",
    pageLabel: "来源角色页",
    pageBase: "",
    canonicalLinks: [],
    commonLinks: [],
    scaleEvidenceLinks: [],
    scaleNotes: null
  };
  const REVIEW_KEYWORDS = ["争议", "仅下限", "仅上限", "外源", "一次性", "仪式", "特殊", "设定", "直接", "持续", "装备", "短时", "条件", "不可控", "剧情限定"];
  const HIGH_RISK_RANKS = [
    "国家级",
    "大陆级",
    "地表级",
    "行星级",
    "恒星级",
    "星系级",
    "超星系团级",
    "有限宇宙级",
    "无限级",
    "超第三宇宙速度级",
    "亚光速",
    "光速",
    "超光速"
  ];

  const registry = [];

  function dims(values) {
    const result = {};
    for (const dimension of DIMENSIONS) {
      result[dimension.key] = makeDimension(values[dimension.key]);
    }
    return result;
  }

  function makeDimension(value) {
    if (!value) {
      return { normal: "无资料", peak: "无资料", brief: "资料不足，暂不强行定级。", evidence: [] };
    }
    if (!Array.isArray(value) && typeof value === "object") {
      return {
        normal: value.normal || "无资料",
        peak: value.peak || "无资料",
        brief: value.brief || "按常态/峰值双档记录。",
        evidence: normalizeList(value.evidence)
      };
    }
    return { normal: value[0], peak: value[1], brief: value[2], evidence: normalizeList(value[3]) };
  }

  function notes(value) {
    return {
      penetration: value.penetration,
      resistance: value.resistance,
      special: value.special,
      weakness: value.weakness,
      setting: value.setting,
      basis: value.basis
    };
  }

  function character(raw) {
    const work = raw.work || "未标注作品";
    const source = WORK_SOURCES[work] || DEFAULT_SOURCE;
    const workSlug = raw.workSlug || source.slug || "";
    const characterLinks = raw.fandomSlug && source.pageBase
      ? [{
        type: "wiki",
        scope: "角色页入口",
        label: source.pageLabel || DEFAULT_SOURCE.pageLabel,
        url: `${source.pageBase}${raw.fandomSlug}`,
        lang: source.pageLanguage || "",
        authority: "wiki",
        medium: "wiki",
        ratingEvidence: false,
        claim: "角色资料入口；不单独作为高风险量级依据。"
      }]
      : [];
    const evidenceLinks = normalizeEvidenceLinks(raw.evidenceLinks);
    const dimensions = raw.dimensions;
    const timelinePanels = normalizeTimelinePanels(raw.timelinePanels, dimensions, raw.timelineStatus || raw.timeline || raw.version || "");
    const confidence = raw.confidence || inferConfidence(raw, dimensions);
    const evidenceType = normalizeList(raw.evidenceType);
    const sourceQuality = raw.sourceQuality || (hasSpecificEvidence(evidenceLinks) ? "specific" : "entry");
    const auditFindings = [
      ...normalizeAuditFindings(raw.auditFindings),
      ...inferAuditFindings(raw, dimensions, evidenceLinks, source)
    ];
    const auditWarnings = [
      ...normalizeList(raw.auditWarnings),
      ...auditFindings.map((finding) => finding.message)
    ];
    return {
      id: raw.id,
      name: raw.name,
      en: raw.en,
      ja: raw.ja,
      aliases: raw.aliases || [],
      work,
      workSlug,
      affiliation: raw.affiliation,
      appearances: raw.appearances,
      timelineStatus: raw.timelineStatus || raw.timeline || raw.version || "",
      works: [work],
      grade: raw.grade,
      defaultTimelineKey: raw.defaultTimelineKey || "",
      confidence,
      evidenceType,
      sourceQuality,
      auditFindings,
      auditWarnings: [...new Set(auditWarnings)],
      timelinePanels,
      dimensions,
      notes: raw.notes,
      evidenceLinks,
      revisionNotes: normalizeList(raw.revisionNotes),
      links: [
        ...characterLinks,
        ...normalizeSourceLinks(raw.links),
        ...(source.canonicalLinks || []),
        ...(source.commonLinks || [])
      ]
    };
  }

  function registerWorkSource(work, source) {
    WORK_SOURCES[work] = {
      slug: source.slug || "",
      originalLanguage: source.originalLanguage || "",
      pageLabel: source.pageLabel || DEFAULT_SOURCE.pageLabel,
      pageBase: source.pageBase || "",
      pageLanguage: source.pageLanguage || "",
      canonicalLinks: normalizeSourceLinks(source.canonicalLinks),
      commonLinks: normalizeSourceLinks(source.commonLinks),
      scaleEvidenceLinks: normalizeEvidenceLinks(source.scaleEvidenceLinks),
      scaleNotes: source.scaleNotes || null,
      sourcePolicy: source.sourcePolicy || ""
    };
    publish();
  }

  function registerCharacters(entries) {
    entries.forEach((entry) => {
      registry.push(Array.isArray(entry.links) ? entry : character(entry));
    });
    publish();
  }

  function publish() {
    window.POWER_WIKI_DIMENSIONS = DIMENSIONS;
    window.POWER_WIKI_SKIPPED_NON_COMBAT_COUNT = 0;
    window.POWER_WIKI_CHARACTERS = registry;
    window.POWER_WIKI_WORK_SOURCES = WORK_SOURCES;
    window.JJK_DIMENSIONS = DIMENSIONS;
    window.JJK_SKIPPED_NON_COMBAT_COUNT = 0;
    window.JJK_CHARACTERS = registry;
  }

  function normalizeTimelinePanels(panels, dimensions, timelineStatus) {
    const normalized = normalizeList(panels).map((panel, index) => ({
      key: panel.key || "",
      label: panel.label || panel.timelineStatus || "时间线状态",
      status: panel.status || panel.timelineStatus || "",
      dimensions: panel.dimensions || dimensions,
      notes: panel.notes || "",
      evidenceType: normalizeList(panel.evidenceType),
      confidence: panel.confidence || ""
    }));
    if (normalized.length) return normalized;
    return [{
      key: "current",
      label: timelineStatus || "当前主面板",
      status: timelineStatus || "",
      dimensions,
      notes: "当前角色主面板。",
      evidenceType: [],
      confidence: ""
    }];
  }

  function normalizeList(value) {
    if (!value) return [];
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  }

  function normalizeEvidenceLinks(value) {
    return normalizeList(value).map((link) => {
      if (typeof link === "string") {
        return {
          type: "source",
          scope: "",
          label: link,
          url: link,
          citation: "",
          claim: "",
          lang: "",
          authority: "",
          medium: "",
          ratingEvidence: false
        };
      }
      return {
        type: link.type || "source",
        scope: link.scope || "",
        label: link.label || link.scope || link.url || "证据来源",
        url: link.url || "",
        citation: link.citation || "",
        claim: link.claim || "",
        lang: normalizeToken(link.lang),
        authority: normalizeToken(link.authority),
        medium: normalizeToken(link.medium),
        ratingEvidence: link.ratingEvidence === true
      };
    });
  }

  function normalizeSourceLinks(value) {
    return normalizeEvidenceLinks(value);
  }

  function hasSpecificEvidence(links) {
    return normalizeList(links).some(isRatingEvidence);
  }

  function evidenceQuality(links, originalLanguage = "") {
    const list = normalizeList(links);
    const ratingLinks = list.filter(isRatingEvidence);
    return {
      hasLinks: list.length > 0,
      hasRatingEvidence: ratingLinks.length > 0,
      hasAuthoritative: ratingLinks.some(isAuthoritativeEvidence),
      hasOriginalLanguage: Boolean(originalLanguage) && ratingLinks.some((link) => link.lang === originalLanguage),
      hasOnlyEntryOrReference: list.length > 0 && !list.some(isRatingEvidence)
    };
  }

  function isRatingEvidence(link) {
    if (!link) return false;
    if (link.ratingEvidence === true) return true;
    return ["chapter", "episode", "setting"].includes(link.type) && Boolean(link.claim || link.citation);
  }

  function isAuthoritativeEvidence(link) {
    if (!link) return false;
    if (["primary", "official", "licensed"].includes(link.authority)) return true;
    return ["chapter", "episode", "setting", "official"].includes(link.type) && !["wiki", "cross-reference"].includes(link.authority);
  }

  function inferConfidence(raw, dimensions) {
    const text = serializeForAudit(raw, dimensions);
    if (/争议|无资料|未知|仅下限|仅上限/.test(text)) return "disputed";
    if (/外源|一次性|仪式|特殊位移|不可控|剧情限定/.test(text)) return "review";
    if (/设定|推算|换算/.test(text)) return "medium";
    return "stable";
  }

  function inferAuditFindings(raw, dimensions, evidenceLinks, source) {
    const findings = [];
    const text = serializeForAudit(raw, dimensions);
    const quality = evidenceQuality(evidenceLinks, source && source.originalLanguage);
    for (const dimension of DIMENSIONS) {
      const entry = dimensions && dimensions[dimension.key];
      if (!entry) continue;
      for (const field of ["normal", "peak"]) {
        const value = entry[field];
        const rank = baseRank(value);
        if (!isHighRiskRank(rank)) continue;
        const scoped = [value, entry.brief, raw.notes && raw.notes.basis, raw.notes && raw.notes.setting].join(" ");
        if (!REVIEW_KEYWORDS.some((keyword) => scoped.includes(keyword))) {
          findings.push({
            severity: "high",
            dimension: dimension.key,
            dimensionLabel: dimension.label,
            field,
            value,
            rank,
            message: `${dimension.label}${field === "peak" ? "峰值" : "常态"}使用高风险档位“${rank}”，需要争议/外源/直接表现/设定等证据标注。`
          });
        } else if (!evidenceLinks.length) {
          findings.push({
            severity: "high",
            dimension: dimension.key,
            dimensionLabel: dimension.label,
            field,
            value,
            rank,
            message: `${dimension.label}${field === "peak" ? "峰值" : "常态"}【${value}】缺少章节/集数/设定书级 evidenceLinks。`
          });
        } else if (!quality.hasRatingEvidence) {
          findings.push({
            severity: "high",
            dimension: dimension.key,
            dimensionLabel: dimension.label,
            field,
            value,
            rank,
            message: `${dimension.label}${field === "peak" ? "峰值" : "常态"}【${value}】现有来源多为入口或跨界参考，缺少直接支撑量级的原作章节/集数/设定书依据。`
          });
        } else if (source && source.originalLanguage && !quality.hasOriginalLanguage) {
          findings.push({
            severity: "medium",
            dimension: dimension.key,
            dimensionLabel: dimension.label,
            field,
            value,
            rank,
            message: `${dimension.label}${field === "peak" ? "峰值" : "常态"}【${value}】已有量级证据，但缺少原作语言（${source.originalLanguage}）来源。`
          });
        } else if (!quality.hasAuthoritative) {
          findings.push({
            severity: "medium",
            dimension: dimension.key,
            dimensionLabel: dimension.label,
            field,
            value,
            rank,
            message: `${dimension.label}${field === "peak" ? "峰值" : "常态"}【${value}】已有量级证据，但缺少原作/官方/授权来源。`
          });
        } else {
          continue;
        }
      }
    }
    if (!evidenceLinks.length && /争议|仅下限|国家级|大陆级|地表级|行星级|恒星级|超第三宇宙速度级|亚光速|光速|超光速/.test(text)) {
      findings.push({
        severity: "high",
        dimension: "",
        dimensionLabel: "整体来源",
        field: "",
        value: "",
        rank: "",
        message: "高争议或高档位角色缺少章节/集数/设定书级 evidenceLinks。"
      });
    }
    const seen = new Set();
    return findings.filter((finding) => {
      const key = `${finding.severity}|${finding.dimension}|${finding.field}|${finding.message}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function normalizeAuditFindings(value) {
    return normalizeList(value).map((finding) => {
      if (typeof finding === "string") {
        return { severity: "medium", dimension: "", dimensionLabel: "", field: "", value: "", rank: "", message: finding };
      }
      return {
        severity: finding.severity || "medium",
        dimension: finding.dimension || "",
        dimensionLabel: finding.dimensionLabel || "",
        field: finding.field || "",
        value: finding.value || "",
        rank: finding.rank || "",
        message: finding.message || "待审条目。"
      };
    });
  }

  function isHighRiskRank(rank) {
    return HIGH_RISK_RANKS.some((item) => String(rank || "").includes(item));
  }

  function serializeForAudit(raw, dimensions) {
    return JSON.stringify({
      dimensions,
      notes: raw.notes,
      confidence: raw.confidence,
      evidenceType: raw.evidenceType
    });
  }

  function baseRank(value) {
    return String(value || "").split("｜")[0].trim();
  }

  function normalizeToken(value) {
    return String(value || "").trim().toLowerCase();
  }

  window.POWER_WIKI = {
    dimensions: DIMENSIONS,
    sources: WORK_SOURCES,
    evidenceQuality,
    dims,
    notes,
    character,
    registerWorkSource,
    registerCharacters,
    publish,
    get characters() {
      return registry;
    }
  };

  publish();
})();

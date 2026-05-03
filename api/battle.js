const OPENAI_RESPONSES_PATH = "/responses";
const MAX_BODY_LENGTH = 28000;
const MAX_TEXT_LENGTH = 900;
const DEFAULT_MODEL = "gpt-4o-mini";

const DIMENSIONS = [
  ["attack", "攻击能级"],
  ["defense", "防御能级"],
  ["movement", "移动速度"],
  ["reaction", "反应速度"],
  ["vitality", "生命体量"],
  ["healing", "生命回复速度"],
  ["energy", "能量总量"],
  ["energyRegen", "能量回复速度"]
];

const RESULT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    winner: {
      type: "string",
      enum: ["left", "right", "draw", "unclear"]
    },
    confidence: {
      type: "string",
      enum: ["low", "medium", "high"]
    },
    summary: { type: "string" },
    verdict: { type: "string" },
    panelUse: { type: "string" },
    keyFactors: {
      type: "array",
      items: { type: "string" }
    },
    phases: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          title: { type: "string" },
          text: { type: "string" }
        },
        required: ["title", "text"]
      }
    },
    caveats: {
      type: "array",
      items: { type: "string" }
    }
  },
  required: ["winner", "confidence", "summary", "verdict", "panelUse", "keyFactors", "phases", "caveats"]
};

module.exports = async function handler(req, res) {
  setJsonHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method === "GET") {
    res.status(200).json({
      ok: true,
      configured: Boolean(process.env.OPENAI_API_KEY),
      model: process.env.OPENAI_MODEL || DEFAULT_MODEL
    });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Only POST is supported." });
    return;
  }

  try {
    const body = await parseJsonBody(req);
    const request = normalizeBattleRequest(body);

    if (!process.env.OPENAI_API_KEY) {
      res.status(503).json({
        ok: false,
        error: "Vercel 环境变量 OPENAI_API_KEY 尚未配置，无法生成 AI 对战演绎。"
      });
      return;
    }

    const model = cleanToken(process.env.OPENAI_MODEL || DEFAULT_MODEL, DEFAULT_MODEL);
    const baseUrl = String(process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/+$/, "");
    const response = await fetch(`${baseUrl}${OPENAI_RESPONSES_PATH}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        store: false,
        max_output_tokens: 1800,
        input: [
          {
            role: "system",
            content: buildSystemPrompt()
          },
          {
            role: "user",
            content: JSON.stringify(request, null, 2)
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "battle_result",
            strict: true,
            schema: RESULT_SCHEMA
          }
        }
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = data && data.error && data.error.message ? data.error.message : "LLM provider request failed.";
      res.status(response.status).json({ ok: false, error: message });
      return;
    }

    const outputText = extractOutputText(data);
    const result = JSON.parse(outputText);
    res.status(200).json({
      ok: true,
      model,
      result,
      usage: data.usage || null
    });
  } catch (error) {
    const status = error && error.status ? error.status : 500;
    res.status(status).json({
      ok: false,
      error: error && error.message ? error.message : "Battle generation failed."
    });
  }
};

function setJsonHeaders(res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
}

async function parseJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const raw = typeof req.body === "string" ? req.body : await readBody(req);
  if (raw.length > MAX_BODY_LENGTH) throw httpError(413, "请求体过大。");
  try {
    return raw ? JSON.parse(raw) : {};
  } catch (_error) {
    throw httpError(400, "请求体不是合法 JSON。");
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > MAX_BODY_LENGTH) {
        reject(httpError(413, "请求体过大。"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function normalizeBattleRequest(body) {
  const left = normalizeFighter(body.left, "left");
  const right = normalizeFighter(body.right, "right");
  if (left.id && right.id && left.work === right.work && left.id === right.id && left.stage.key === right.stage.key) {
    throw httpError(400, "请选择两个不同角色或不同时间线状态。");
  }
  return {
    left,
    right,
    options: normalizeOptions(body.options || {})
  };
}

function normalizeFighter(value, side) {
  if (!value || typeof value !== "object") throw httpError(400, `缺少 ${side} 角色。`);
  const dimensions = {};
  for (const [key, label] of DIMENSIONS) {
    const item = value.stage && value.stage.dimensions ? value.stage.dimensions[key] : value.dimensions && value.dimensions[key];
    dimensions[key] = {
      label,
      normal: cleanText(item && item.normal, 80) || "无资料",
      peak: cleanText(item && item.peak, 80) || "无资料",
      brief: cleanText(item && item.brief, 180) || "资料不足，暂不强行定级。"
    };
  }
  return {
    side,
    id: cleanToken(value.id, ""),
    name: cleanText(value.name, 80),
    en: cleanText(value.en, 100),
    ja: cleanText(value.ja, 100),
    work: cleanText(value.work, 80),
    affiliation: cleanText(value.affiliation, 120),
    grade: cleanText(value.grade, 160),
    confidence: cleanText(value.confidence, 40),
    evidenceType: cleanList(value.evidenceType, 8, 40),
    auditWarnings: cleanList(value.auditWarnings, 6, 180),
    stage: {
      key: cleanToken(value.stage && value.stage.key, "current"),
      label: cleanText(value.stage && value.stage.label, 80),
      status: cleanText(value.stage && value.stage.status, 180),
      notes: cleanText(value.stage && value.stage.notes, 260),
      dimensions
    },
    notes: normalizeNotes(value.notes),
    evidenceLinks: cleanEvidenceLinks(value.evidenceLinks)
  };
}

function normalizeOptions(value) {
  return {
    panelMode: pick(value.panelMode, ["normal", "peak", "both"], "peak"),
    specialPolicy: pick(value.specialPolicy, ["allow", "conservative", "panel-only"], "conservative"),
    outputStyle: pick(value.outputStyle, ["analysis", "narrative"], "analysis")
  };
}

function normalizeNotes(notes) {
  const value = notes && typeof notes === "object" ? notes : {};
  return {
    penetration: cleanText(value.penetration, MAX_TEXT_LENGTH),
    resistance: cleanText(value.resistance, MAX_TEXT_LENGTH),
    special: cleanText(value.special, MAX_TEXT_LENGTH),
    weakness: cleanText(value.weakness, MAX_TEXT_LENGTH),
    setting: cleanText(value.setting, MAX_TEXT_LENGTH),
    basis: cleanText(value.basis, MAX_TEXT_LENGTH)
  };
}

function cleanEvidenceLinks(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 8).map((link) => ({
    type: cleanText(link && link.type, 30),
    label: cleanText(link && link.label, 80),
    claim: cleanText(link && link.claim, 220),
    citation: cleanText(link && link.citation, 160),
    ratingEvidence: Boolean(link && link.ratingEvidence)
  }));
}

function buildSystemPrompt() {
  return [
    "你是跨作品战力维基的对战演绎器，只能基于用户提供的 JSON 角色资料做推断。",
    "不要引入外部剧情、粉丝设定、未提供资料或你自己的作品知识。不要把称号、危险等级、剧情地位直接换算成主量级。",
    "必须区分常态和峰值。panelMode=normal 时只按常态；panelMode=peak 时按峰值；panelMode=both 时先看常态，再说明峰值是否改变结论。",
    "特殊权能、领域、封印、空间、灵魂、一次性、外源、仪式、装备等只能按 notes 和峰值标签解释；条件不明时必须写入 caveats。",
    "允许输出 draw 或 unclear。证据不足、命中条件不明、速度/破防关系无法稳定判断时，不要强判。",
    "输出必须是符合 JSON Schema 的中文 JSON，不要 Markdown，不要代码块。"
  ].join("\n");
}

function extractOutputText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) return data.output_text;
  for (const item of data.output || []) {
    if (item.type !== "message") continue;
    for (const content of item.content || []) {
      if (content.type === "refusal") throw httpError(400, content.refusal || "模型拒绝生成该对战。");
      if (content.type === "output_text" && content.text) return content.text;
    }
  }
  throw httpError(502, "LLM 响应缺少文本输出。");
}

function cleanText(value, maxLength) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function cleanToken(value, fallback) {
  const text = String(value || "").trim();
  return /^[A-Za-z0-9._:/-]+$/.test(text) ? text.slice(0, 120) : fallback;
}

function cleanList(value, maxItems, maxLength) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, maxItems).map((item) => cleanText(item, maxLength)).filter(Boolean);
}

function pick(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

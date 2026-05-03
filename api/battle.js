const OPENAI_RESPONSES_PATH = "/responses";
const MAX_BODY_LENGTH = 28000;
const MAX_TEXT_LENGTH = 420;
const MAX_OUTPUT_TOKENS = 1800;
const DEFAULT_MODEL = "gpt-4o-mini";
const STREAM_DONE = "[DONE]";

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
  if (req.method === "OPTIONS") {
    setJsonHeaders(res);
    res.status(204).end();
    return;
  }

  if (req.method === "GET") {
    setJsonHeaders(res);
    res.status(200).json({
      ok: true,
      configured: Boolean(process.env.OPENAI_API_KEY),
      model: process.env.OPENAI_MODEL || DEFAULT_MODEL
    });
    return;
  }

  if (req.method !== "POST") {
    setJsonHeaders(res);
    res.status(405).json({ ok: false, error: "Only POST is supported." });
    return;
  }

  try {
    const body = await parseJsonBody(req);
    const request = normalizeBattleRequest(body);

    if (!process.env.OPENAI_API_KEY) {
      setJsonHeaders(res);
      res.status(503).json({
        ok: false,
        error: "Vercel 环境变量 OPENAI_API_KEY 尚未配置，无法生成 AI 对战演绎。"
      });
      return;
    }

    const model = cleanToken(process.env.OPENAI_MODEL || DEFAULT_MODEL, DEFAULT_MODEL);
    const baseUrl = String(process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/+$/, "");
    const wantsStream = acceptsStream(req);
    if (wantsStream) {
      await streamBattleResponse(req, res, baseUrl, model, request);
      return;
    }

    const response = await fetch(`${baseUrl}${OPENAI_RESPONSES_PATH}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildProviderPayload(model, request, false))
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = data && data.error && data.error.message ? data.error.message : "LLM provider request failed.";
      res.status(response.status).json({ ok: false, error: message });
      return;
    }

    const outputText = extractOutputText(data);
    const result = parseBattleResult(outputText);
    res.status(200).json({
      ok: true,
      model,
      result,
      usage: data.usage || null
    });
  } catch (error) {
    if (res.headersSent) {
      sendSse(res, "error", { error: error && error.message ? error.message : "Battle generation failed." });
      res.end();
      return;
    }
    setJsonHeaders(res);
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

function setSseHeaders(res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-cache, no-transform",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no"
  });
}

function acceptsStream(req) {
  const accept = String(req.headers && req.headers.accept || "");
  return accept.includes("text/event-stream");
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
      notes: cleanText(value.stage && value.stage.notes, 160),
      dimensions
    },
    notes: normalizeNotes(value.notes),
    evidenceLinks: cleanEvidenceLinks(value.evidenceLinks)
  };
}

function normalizeOptions(value) {
  return {
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
  return value.slice(0, 4).map((link) => ({
    type: cleanText(link && link.type, 30),
    label: cleanText(link && link.label, 80),
    claim: cleanText(link && link.claim, 160),
    citation: cleanText(link && link.citation, 120),
    ratingEvidence: Boolean(link && link.ratingEvidence)
  }));
}

function buildProviderPayload(model, request, stream) {
  return {
    model,
    store: false,
    stream,
    max_output_tokens: MAX_OUTPUT_TOKENS,
    input: [
      {
        role: "system",
        content: buildSystemPrompt()
      },
      {
        role: "user",
        content: JSON.stringify(request)
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
  };
}

function buildSystemPrompt() {
  return [
    "你是跨作品战力维基的对战演绎器，只能基于用户提供的 JSON 角色资料做推断。",
    "不要引入外部剧情、粉丝设定、未提供资料或你自己的作品知识。不要把称号、危险等级、剧情地位直接换算成主量级。",
    "必须同时考虑常态和峰值：常态决定基础交换和持续表现，峰值决定爆发、特殊权能窗口和短时上限。",
    "能量总量和能量回复速度必须参与判断，用来解释续航、峰值维持时间、爆发频率、消耗战和是否会因资源不足失去优势。",
    "不要把峰值当作无限常态；如果峰值依赖外源、一次性、短时、领域、仪式、装备或条件命中，必须说明触发和维持限制。",
    "特殊权能、领域、封印、空间、灵魂、一次性、外源、仪式、装备等只能按 notes 和峰值标签解释；条件不明时必须写入 caveats。",
    "允许输出 draw 或 unclear。证据不足、命中条件不明、速度/破防关系无法稳定判断时，不要强判。",
    "输出必须精炼：summary、verdict、panelUse 各 1 句；keyFactors 3-5 条；phases 2-4 段；caveats 2-4 条。",
    "输出必须是符合 JSON Schema 的中文 JSON，不要 Markdown，不要代码块。"
  ].join("\n");
}

async function streamBattleResponse(req, res, baseUrl, model, request) {
  const startedAt = Date.now();
  const requestId = makeRequestId();
  setSseHeaders(res);
  res.write(": connected\n\n");
  sendSse(res, "meta", { ok: true, model, requestId });

  let outputText = "";
  let usage = null;
  let upstreamStatus = 0;
  try {
    const response = await fetch(`${baseUrl}${OPENAI_RESPONSES_PATH}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "text/event-stream"
      },
      body: JSON.stringify(buildProviderPayload(model, request, true))
    });
    upstreamStatus = response.status;
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const message = data && data.error && data.error.message ? data.error.message : "LLM provider request failed.";
      sendSse(res, "error", { error: message, status: response.status, requestId });
      res.end();
      return;
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/event-stream") || !response.body) {
      const data = await response.json().catch(() => ({}));
      outputText = extractOutputText(data);
      const result = parseBattleResult(outputText);
      sendSse(res, "done", { ok: true, model, result, usage: data.usage || null, requestId });
      res.end();
      return;
    }

    sendSse(res, "status", { message: "upstream_connected", requestId });
    await readSseStream(response.body, (event) => {
      const type = event.type || event.event || "";
      if (type === "response.output_text.delta") {
        const delta = event.delta || "";
        outputText += delta;
        sendSse(res, "delta", { delta, requestId });
        return;
      }
      if (type === "response.output_text.done" && event.text) {
        outputText = event.text;
        return;
      }
      if (type === "response.completed") {
        usage = event.response && event.response.usage ? event.response.usage : usage;
        if (event.response && event.response.status === "incomplete") {
          const reason = event.response.incomplete_details && event.response.incomplete_details.reason
            ? event.response.incomplete_details.reason
            : "unknown";
          throw httpError(502, `模型输出未完成：${reason}。`);
        }
        return;
      }
      if (type === "response.incomplete") {
        const reason = event.response && event.response.incomplete_details && event.response.incomplete_details.reason
          ? event.response.incomplete_details.reason
          : "unknown";
        throw httpError(502, `模型输出未完成：${reason}。`);
      }
      if (type === "response.failed") {
        const message = event.response && event.response.error && event.response.error.message
          ? event.response.error.message
          : "模型生成失败。";
        throw httpError(502, message);
      }
      if (type === "error") {
        const message = event.error && event.error.message ? event.error.message : event.message || "模型流式响应错误。";
        throw httpError(502, message);
      }
      if (type === "response.refusal.delta" || type === "response.refusal.done") {
        const message = event.refusal || "模型拒绝生成该对战。";
        throw httpError(400, message);
      }
    });

    const result = parseBattleResult(outputText);
    sendSse(res, "done", {
      ok: true,
      model,
      result,
      usage,
      requestId,
      elapsedMs: Date.now() - startedAt
    });
    res.end();
  } catch (error) {
    const message = error && error.message ? error.message : "Battle generation failed.";
    console.error("[battle]", {
      requestId,
      upstreamStatus,
      elapsedMs: Date.now() - startedAt,
      error: message
    });
    sendSse(res, "error", { error: message, requestId });
    res.end();
  }
}

async function readSseStream(body, onEvent) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const parts = buffer.split(/\r?\n\r?\n/);
    buffer = parts.pop() || "";
    for (const part of parts) {
      const event = parseSseEvent(part);
      if (event) onEvent(event);
    }
  }
  buffer += decoder.decode();
  if (buffer.trim()) {
    const event = parseSseEvent(buffer);
    if (event) onEvent(event);
  }
}

function parseSseEvent(part) {
  let eventType = "message";
  const data = [];
  for (const line of part.split(/\r?\n/)) {
    if (!line || line.startsWith(":")) continue;
    const separator = line.indexOf(":");
    const field = separator >= 0 ? line.slice(0, separator) : line;
    const value = separator >= 0 ? line.slice(separator + 1).replace(/^ /, "") : "";
    if (field === "event") eventType = value;
    if (field === "data") data.push(value);
  }
  if (!data.length) return null;
  const raw = data.join("\n");
  if (raw === STREAM_DONE) return null;
  const parsed = JSON.parse(raw);
  return { event: eventType, ...parsed };
}

function sendSse(res, event, data) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
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

function parseBattleResult(outputText) {
  try {
    return JSON.parse(outputText);
  } catch (_error) {
    throw httpError(502, "模型返回的 JSON 不完整或格式错误，通常是输出被截断；请重试或降低输出复杂度。");
  }
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

function makeRequestId() {
  return `battle_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

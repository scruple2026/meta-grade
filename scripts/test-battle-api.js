#!/usr/bin/env node
"use strict";

const assert = require("assert/strict");
const crypto = require("crypto");
const path = require("path");

const HANDLER_PATH = path.join(__dirname, "..", "api", "battle.js");
const ENV_KEYS = [
  "OPENAI_API_KEY",
  "OPENAI_MODEL",
  "OPENAI_BASE_URL",
  "BATTLE_API_DISABLED",
  "BATTLE_ACCESS_CODES",
  "BATTLE_ACCESS_CODE_HASHES",
  "BATTLE_DAILY_REQUEST_LIMIT",
  "BATTLE_DAILY_TOKEN_LIMIT",
  "BATTLE_RATE_LIMIT_WINDOW_MS",
  "BATTLE_RATE_LIMIT_MAX",
  "BATTLE_LOG_LEVEL",
  "BATTLE_QUOTA_BACKEND",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "KV_REST_API_URL",
  "KV_REST_API_TOKEN"
];

const originalEnv = { ...process.env };
const originalFetch = global.fetch;
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const tests = [];

test("GET reports disabled state and safe public quota backend", async () => {
  const handler = createHandler({ BATTLE_API_DISABLED: "1" });
  const res = await invoke(handler, { method: "GET" });
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.ok, true);
  assert.equal(res.body.disabled, true);
  assert.equal(res.body.configured, false);
  assert.equal(res.body.quotaBackend, "memory");
  assert.equal(res.body.accessRequired, false);
});

test("GET reports gray-release readiness without exposing secrets", async () => {
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    OPENAI_MODEL: "test-model",
    OPENAI_BASE_URL: "https://provider.test/v1",
    BATTLE_ACCESS_CODES: "alpha",
    BATTLE_DAILY_REQUEST_LIMIT: "10",
    BATTLE_DAILY_TOKEN_LIMIT: "1000",
    BATTLE_LOG_LEVEL: "info"
  });
  const res = await invoke(handler, { method: "GET" });
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.configured, true);
  assert.equal(res.body.accessRequired, true);
  assert.equal(res.body.dailyBudget.requestLimitConfigured, true);
  assert.equal(res.body.dailyBudget.tokenLimitConfigured, true);
  assert.equal(JSON.stringify(res.body).includes("sk-test"), false);
  assert.equal(JSON.stringify(res.body).includes("alpha"), false);
});

test("POST respects BATTLE_API_DISABLED", async () => {
  const handler = createHandler({ BATTLE_API_DISABLED: "1" });
  const res = await invokeBattle(handler);
  assert.equal(res.statusCode, 503);
  assert.equal(res.body.code, "disabled");
});

test("POST rejects missing access code before later stages", async () => {
  const handler = createHandler({ BATTLE_ACCESS_CODES: "alpha" });
  const res = await invokeBattle(handler);
  assert.equal(res.statusCode, 401);
  assert.equal(res.body.code, "access_code_required");
});

test("POST accepts a correct access code and reaches OpenAI configuration check", async () => {
  const handler = createHandler({ BATTLE_ACCESS_CODES: "alpha" });
  const res = await invokeBattle(handler, { headers: { "X-Battle-Access-Code": "alpha" } });
  assert.equal(res.statusCode, 503);
  assert.equal(res.body.code, "missing_openai_key");
});

test("POST supports hashed access codes and ignores plaintext codes when hashes exist", async () => {
  const hash = hashAccessCode("alpha");
  const handler = createHandler({
    BATTLE_ACCESS_CODE_HASHES: hash,
    BATTLE_ACCESS_CODES: "alpha"
  });
  const wrong = await invokeBattle(handler, { headers: { "X-Battle-Access-Code": "wrong" } });
  assert.equal(wrong.statusCode, 401);
  const correct = await invokeBattle(handler, { headers: { "X-Battle-Access-Code": "alpha" } });
  assert.equal(correct.statusCode, 503);
  assert.equal(correct.body.code, "missing_openai_key");
});

test("POST rejects the same character on the same timeline", async () => {
  const provider = createProviderMock();
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    BATTLE_RATE_LIMIT_MAX: "0"
  }, provider.fetch);
  const body = sampleBattlePayload({ sameFighter: true });
  const res = await invokeBattle(handler, { body });
  assert.equal(res.statusCode, 400);
  assert.equal(provider.calls.length, 0);
});

test("POST completes through the Responses API", async () => {
  const provider = createProviderMock();
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    BATTLE_RATE_LIMIT_MAX: "0"
  }, provider.fetch);
  const res = await invokeBattle(handler);
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.ok, true);
  assert.equal(res.body.result.winner, "left");
  assert.equal(provider.calls[0].pathname, "/v1/responses");
});

test("POST falls back from Responses to Chat Completions", async () => {
  const provider = createProviderMock({ responsesStatus: 404 });
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    BATTLE_RATE_LIMIT_MAX: "0"
  }, provider.fetch);
  const res = await invokeBattle(handler);
  assert.equal(res.statusCode, 200);
  assert.equal(res.body.ok, true);
  assert.equal(res.body.fallback, "chat_completions");
  assert.deepEqual(provider.calls.map((call) => call.pathname), ["/v1/responses", "/v1/chat/completions"]);
});

test("POST enforces in-memory daily request budget", async () => {
  const provider = createProviderMock();
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    BATTLE_DAILY_REQUEST_LIMIT: "1",
    BATTLE_RATE_LIMIT_MAX: "0"
  }, provider.fetch);
  const first = await invokeBattle(handler);
  assert.equal(first.statusCode, 200);
  const second = await invokeBattle(handler);
  assert.equal(second.statusCode, 429);
  assert.equal(second.body.code, "daily_request_limit");
});

test("POST enforces in-memory daily token budget", async () => {
  const provider = createProviderMock({ usage: { total_tokens: 5 } });
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    BATTLE_DAILY_TOKEN_LIMIT: "1",
    BATTLE_RATE_LIMIT_MAX: "0"
  }, provider.fetch);
  const first = await invokeBattle(handler);
  assert.equal(first.statusCode, 200);
  const second = await invokeBattle(handler);
  assert.equal(second.statusCode, 429);
  assert.equal(second.body.code, "daily_token_limit");
});

test("Redis rate limit uses a hashed client key and shared counter", async () => {
  const provider = createProviderMock();
  const redis = createRedisFetch(provider.fetch);
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    UPSTASH_REDIS_REST_URL: "https://redis.test",
    UPSTASH_REDIS_REST_TOKEN: "redis-token",
    BATTLE_RATE_LIMIT_MAX: "1",
    BATTLE_RATE_LIMIT_WINDOW_MS: "60000"
  }, redis.fetch);
  const first = await invokeBattle(handler, { ip: "203.0.113.9" });
  assert.equal(first.statusCode, 200);
  const second = await invokeBattle(handler, { ip: "203.0.113.9" });
  assert.equal(second.statusCode, 429);
  assert.equal(second.body.code, "rate_limit");
  const rateKeys = redis.calls
    .flatMap((call) => flattenCommands(call.commands))
    .filter((command) => command[0] === "INCR")
    .map((command) => command[1]);
  assert.equal(rateKeys.length >= 2, true);
  assert.match(rateKeys[0], /^battle:rate:[a-f0-9]{64}:\d+$/);
  assert.equal(rateKeys[0].includes("203.0.113.9"), false);
});

test("Redis daily request budget is shared through the daily hash", async () => {
  const provider = createProviderMock();
  const redis = createRedisFetch(provider.fetch);
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    UPSTASH_REDIS_REST_URL: "https://redis.test",
    UPSTASH_REDIS_REST_TOKEN: "redis-token",
    BATTLE_RATE_LIMIT_MAX: "0",
    BATTLE_DAILY_REQUEST_LIMIT: "1"
  }, redis.fetch);
  const first = await invokeBattle(handler);
  assert.equal(first.statusCode, 200);
  const second = await invokeBattle(handler);
  assert.equal(second.statusCode, 429);
  assert.equal(second.body.code, "daily_request_limit");
  const dailyCommands = redis.calls.flatMap((call) => flattenCommands(call.commands));
  assert.equal(dailyCommands.some((command) => command[0] === "HINCRBY" && command[2] === "requests"), true);
  assert.equal(dailyCommands.some((command) => command[0] === "EXPIRE" && command[2] === 172800), true);
});

test("Redis token budget records provider usage and blocks the next request", async () => {
  const provider = createProviderMock({ usage: { total_tokens: 5 } });
  const redis = createRedisFetch(provider.fetch);
  const handler = createHandler({
    OPENAI_API_KEY: "sk-test",
    UPSTASH_REDIS_REST_URL: "https://redis.test",
    UPSTASH_REDIS_REST_TOKEN: "redis-token",
    BATTLE_RATE_LIMIT_MAX: "0",
    BATTLE_DAILY_TOKEN_LIMIT: "1"
  }, redis.fetch);
  const first = await invokeBattle(handler);
  assert.equal(first.statusCode, 200);
  const second = await invokeBattle(handler);
  assert.equal(second.statusCode, 429);
  assert.equal(second.body.code, "daily_token_limit");
  const dailyCommands = redis.calls.flatMap((call) => flattenCommands(call.commands));
  assert.equal(dailyCommands.some((command) => command[0] === "HINCRBY" && command[2] === "tokens" && command[3] === 5), true);
});

test("auto Redis backend falls back to memory when Redis is unavailable", async () => {
  const provider = createProviderMock();
  const redis = createRedisFetch(provider.fetch, { fail: true });
  const logs = captureConsole();
  try {
    const handler = createHandler({
      OPENAI_API_KEY: "sk-test",
      UPSTASH_REDIS_REST_URL: "https://redis.test",
      UPSTASH_REDIS_REST_TOKEN: "redis-token",
      BATTLE_RATE_LIMIT_MAX: "1"
    }, redis.fetch);
    const res = await invokeBattle(handler);
    assert.equal(res.statusCode, 200);
    assert.equal(logs.errorText().includes("redis-token"), false);
  } finally {
    logs.restore();
  }
});

test("forced Redis backend fails closed when Redis is unavailable", async () => {
  const provider = createProviderMock();
  const redis = createRedisFetch(provider.fetch, { fail: true });
  const logs = captureConsole();
  try {
    const handler = createHandler({
      OPENAI_API_KEY: "sk-test",
      UPSTASH_REDIS_REST_URL: "https://redis.test",
      UPSTASH_REDIS_REST_TOKEN: "redis-token",
      BATTLE_QUOTA_BACKEND: "redis",
      BATTLE_RATE_LIMIT_MAX: "1"
    }, redis.fetch);
    const res = await invokeBattle(handler);
    assert.equal(res.statusCode, 503);
    assert.equal(res.body.code, "quota_backend_unavailable");
    assert.equal(provider.calls.length, 0);
  } finally {
    logs.restore();
  }
});

test("battle logs omit prompts, model output, access codes, hashes, and API keys", async () => {
  const provider = createProviderMock({
    result: resultFixture({ verdict: "SECRET_OUTPUT_MARKER" })
  });
  const logs = captureConsole();
  try {
    const handler = createHandler({
      OPENAI_API_KEY: "sk-secret-key",
      BATTLE_ACCESS_CODES: "SECRET_ACCESS_CODE",
      BATTLE_LOG_LEVEL: "info",
      BATTLE_RATE_LIMIT_MAX: "0"
    }, provider.fetch);
    const body = sampleBattlePayload({ leftName: "SECRET_PROMPT_MARKER" });
    const res = await invokeBattle(handler, {
      headers: { "X-Battle-Access-Code": "SECRET_ACCESS_CODE" },
      body
    });
    assert.equal(res.statusCode, 200);
    const text = logs.allText();
    assert.equal(text.includes("SECRET_PROMPT_MARKER"), false);
    assert.equal(text.includes("SECRET_OUTPUT_MARKER"), false);
    assert.equal(text.includes("SECRET_ACCESS_CODE"), false);
    assert.equal(text.includes(hashAccessCode("SECRET_ACCESS_CODE")), false);
    assert.equal(text.includes("sk-secret-key"), false);
  } finally {
    logs.restore();
  }
});

run().catch((error) => {
  restoreGlobals();
  console.error(error && error.stack ? error.stack : String(error));
  process.exit(1);
});

function test(name, fn) {
  tests.push({ name, fn });
}

async function run() {
  let passed = 0;
  for (const item of tests) {
    restoreGlobals();
    try {
      await item.fn();
      passed += 1;
      console.log(`ok ${passed} - ${item.name}`);
    } catch (error) {
      console.error(`not ok ${passed + 1} - ${item.name}`);
      throw error;
    }
  }
  restoreGlobals();
  console.log(`passed ${passed}/${tests.length} battle API tests`);
}

function restoreGlobals() {
  for (const key of ENV_KEYS) {
    if (Object.prototype.hasOwnProperty.call(originalEnv, key)) {
      process.env[key] = originalEnv[key];
    } else {
      delete process.env[key];
    }
  }
  global.fetch = originalFetch;
  console.log = originalConsoleLog;
  console.error = originalConsoleError;
}

function createHandler(env = {}, fetchImpl = createProviderMock().fetch) {
  const currentLog = console.log;
  const currentError = console.error;
  restoreGlobals();
  console.log = currentLog;
  console.error = currentError;
  for (const key of ENV_KEYS) delete process.env[key];
  Object.assign(process.env, env);
  global.fetch = fetchImpl;
  delete globalThis.__META_GRADE_BATTLE_RATE_LIMITS;
  delete globalThis.__META_GRADE_BATTLE_DAILY_USAGE;
  delete require.cache[require.resolve(HANDLER_PATH)];
  return require(HANDLER_PATH);
}

async function invokeBattle(handler, options = {}) {
  return invoke(handler, {
    method: "POST",
    headers: options.headers || {},
    body: options.body || sampleBattlePayload(),
    ip: options.ip
  });
}

async function invoke(handler, options = {}) {
  const req = {
    method: options.method || "POST",
    headers: lowerHeaders({
      Accept: "application/json",
      ...(options.headers || {})
    }),
    body: options.body,
    socket: { remoteAddress: options.ip || "198.51.100.10" },
    setEncoding() {},
    on() {},
    destroy() {}
  };
  const res = createMockResponse();
  await handler(req, res);
  return res;
}

function createMockResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: undefined,
    chunks: [],
    headersSent: false,
    writableEnded: false,
    setHeader(name, value) {
      this.headers[String(name).toLowerCase()] = value;
    },
    getHeader(name) {
      return this.headers[String(name).toLowerCase()];
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(value) {
      this.body = value;
      this.headersSent = true;
      this.writableEnded = true;
      return this;
    },
    writeHead(code, headers) {
      this.statusCode = code;
      Object.entries(headers || {}).forEach(([name, value]) => this.setHeader(name, value));
      this.headersSent = true;
    },
    write(chunk) {
      this.chunks.push(String(chunk || ""));
      this.headersSent = true;
    },
    end(chunk = "") {
      if (chunk) this.chunks.push(String(chunk));
      this.headersSent = true;
      this.writableEnded = true;
    },
    on() {}
  };
}

function lowerHeaders(headers) {
  return Object.fromEntries(Object.entries(headers).map(([name, value]) => [name.toLowerCase(), value]));
}

function sampleBattlePayload(options = {}) {
  const left = fighterFixture({
    id: options.sameFighter ? "left" : "left",
    name: options.leftName || "角色甲",
    stageKey: "final"
  });
  const right = fighterFixture({
    id: options.sameFighter ? "left" : "right",
    name: "角色乙",
    stageKey: "final"
  });
  return {
    left,
    right,
    options: {
      outputStyle: "verdict",
      environment: {
        key: "standard-arena",
        distanceKey: "standard-100m",
        intelPolicyKey: "encounter"
      }
    }
  };
}

function fighterFixture({ id, name, stageKey }) {
  return {
    id,
    name,
    work: "测试作品",
    affiliation: "测试阵营",
    grade: "测试能力",
    confidence: "review",
    evidenceType: ["表现"],
    stage: {
      key: stageKey,
      label: "最终",
      status: "测试状态",
      dimensions: dimensionFixture()
    },
    notes: {
      penetration: "测试攻击性质。",
      resistance: "测试防御抗性。",
      sensing: "测试感知。",
      tactics: "测试战术。",
      special: "测试特殊能力。",
      weakness: "测试短板。",
      setting: "测试设定。",
      basis: "测试评级依据。",
      timeline: "测试时间线。"
    },
    evidenceLinks: []
  };
}

function dimensionFixture() {
  const item = { normal: "墙体级", peak: "楼宇级", brief: "测试面板。" };
  return {
    attack: item,
    defense: item,
    movement: { normal: "亚音速", peak: "音速", brief: "测试速度。" },
    reaction: { normal: "亚音速", peak: "音速", brief: "测试反应。" },
    vitality: { normal: "强化凡体", peak: "精锐韧体", brief: "测试生命体量。" },
    healing: { normal: "无自愈", peak: "缓慢自愈", brief: "测试自愈。" },
    energy: { normal: "墙体级能量", peak: "楼宇级能量", brief: "测试能量。" },
    energyRegen: { normal: "缓慢回能", peak: "中速回能", brief: "测试回能。" }
  };
}

function resultFixture(overrides = {}) {
  return {
    winner: "left",
    confidence: "medium",
    summary: "角色甲略占优势。",
    verdict: "角色甲胜。",
    panelUse: "综合常态、峰值和续航判断。",
    environmentUse: "标准空旷场下双方可见。",
    keyFactors: ["面板优势", "续航稳定", "命中条件清楚"],
    phases: [
      { title: "开局", text: "角色甲先建立压制。" },
      { title: "终局", text: "角色甲维持优势。" }
    ],
    caveats: ["资料仍需人工复核。"],
    ...overrides
  };
}

function createProviderMock(options = {}) {
  const calls = [];
  const usage = options.usage || { total_tokens: 17 };
  const result = options.result || resultFixture();
  const responsesStatus = options.responsesStatus || 200;
  return {
    calls,
    async fetch(url, init = {}) {
      const parsed = new URL(url);
      calls.push({ url: parsed.toString(), pathname: parsed.pathname, body: parseJson(init.body) });
      if (parsed.pathname.endsWith("/responses")) {
        if (responsesStatus >= 200 && responsesStatus < 300) {
          return jsonResponse({
            output_text: JSON.stringify(result),
            usage
          }, responsesStatus);
        }
        return jsonResponse({
          error: { message: "unknown endpoint: /responses" }
        }, responsesStatus);
      }
      if (parsed.pathname.endsWith("/chat/completions")) {
        return jsonResponse({
          choices: [{ message: { content: JSON.stringify(result) } }],
          usage
        }, 200);
      }
      throw new Error(`unexpected fetch URL: ${url}`);
    }
  };
}

function createRedisFetch(providerFetch, options = {}) {
  const calls = [];
  const strings = new Map();
  const hashes = new Map();
  return {
    calls,
    async fetch(url, init = {}) {
      const parsed = new URL(url);
      if (parsed.hostname === "redis.test") {
        if (options.fail) throw new Error("redis unavailable");
        const commands = parseJson(init.body);
        calls.push({ url: parsed.toString(), commands });
        if (parsed.pathname.endsWith("/multi-exec") || parsed.pathname.endsWith("/pipeline")) {
          return jsonResponse(commands.map((command) => redisCommandResult(command, strings, hashes)), 200);
        }
        return jsonResponse(redisCommandResult(commands, strings, hashes), 200);
      }
      return providerFetch(url, init);
    }
  };
}

function redisCommandResult(command, strings, hashes) {
  const name = String(command[0] || "").toUpperCase();
  if (name === "INCR") {
    const key = command[1];
    const next = Number(strings.get(key) || 0) + 1;
    strings.set(key, next);
    return { result: next };
  }
  if (name === "PEXPIRE" || name === "EXPIRE") {
    return { result: 1 };
  }
  if (name === "HMGET") {
    const key = command[1];
    const hash = hashes.get(key) || new Map();
    return { result: command.slice(2).map((field) => hash.has(field) ? String(hash.get(field)) : null) };
  }
  if (name === "HINCRBY") {
    const key = command[1];
    const field = command[2];
    const amount = Number(command[3] || 0);
    const hash = hashes.get(key) || new Map();
    const next = Number(hash.get(field) || 0) + amount;
    hash.set(field, next);
    hashes.set(key, hash);
    return { result: next };
  }
  return { error: `unsupported command ${name}` };
}

function flattenCommands(commands) {
  if (!Array.isArray(commands)) return [];
  if (Array.isArray(commands[0])) return commands;
  return [commands];
}

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

function parseJson(value) {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (_error) {
    return null;
  }
}

function hashAccessCode(value) {
  const code = String(value || "").trim().slice(0, 200);
  return `sha256:${crypto.createHash("sha256").update(code).digest("hex")}`;
}

function captureConsole() {
  const logs = [];
  const errors = [];
  console.log = (...args) => logs.push(args);
  console.error = (...args) => errors.push(args);
  return {
    restore() {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    },
    allText() {
      return [...logs, ...errors].map((entry) => entry.map(stringifyLogArg).join(" ")).join("\n");
    },
    errorText() {
      return errors.map((entry) => entry.map(stringifyLogArg).join(" ")).join("\n");
    }
  };
}

function stringifyLogArg(value) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch (_error) {
    return String(value);
  }
}

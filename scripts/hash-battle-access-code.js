#!/usr/bin/env node
"use strict";

const crypto = require("crypto");

const MAX_ACCESS_CODE_LENGTH = 200;

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  const code = input.trim().slice(0, MAX_ACCESS_CODE_LENGTH);
  if (!code) {
    console.error("No access code received on stdin.");
    process.exitCode = 1;
    return;
  }
  const digest = crypto.createHash("sha256").update(code).digest("hex");
  console.log(`sha256:${digest}`);
});

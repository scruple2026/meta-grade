#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const referencePath = path.join(ROOT, "reference.md");
const outputPath = path.join(ROOT, "data/reference.js");

const markdown = fs.readFileSync(referencePath, "utf8").replace(/\r\n?/g, "\n");
const source = `(function () {
  "use strict";

  window.POWER_WIKI_REFERENCE_MD = ${JSON.stringify(markdown)};
})();
`;

fs.writeFileSync(outputPath, source);
console.log("synced data/reference.js from reference.md");

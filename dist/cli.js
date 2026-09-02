"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
async function main() { let body = ''; for await (const chunk of process.stdin)
    body += chunk; try {
    const input = JSON.parse(body);
    const output = await (0, index_js_1.calculateQimen)(input);
    process.stdout.write(JSON.stringify({ ok: true, data: output, canonical: (0, index_js_1.toQimenJson)(output) }));
}
catch (error) {
    process.stdout.write(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : String(error) }));
    process.exitCode = 1;
} }
void main();

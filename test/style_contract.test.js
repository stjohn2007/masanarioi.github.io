const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");

function fixture(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "style-contract-"));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  for (const name of [
    "package.json",
    "_config.yml",
    "Gemfile",
    ".al-folio-overrides.yml",
    "_includes",
    "_layouts",
    "test/integration_plugin_toggles.sh",
    "test/integration_distill.sh",
  ]) {
    const destination = path.join(directory, name);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.cpSync(path.join(root, name), destination, { recursive: true });
  }
  fs.mkdirSync(path.join(directory, "test/visual"), { recursive: true });
  return directory;
}

function check(directory) {
  return spawnSync(process.execPath, [path.join(root, "test/style_contract.js")], { cwd: directory, encoding: "utf8" });
}

test("registered site templates pass the starter contract", (t) => {
  const result = check(fixture(t));
  assert.equal(result.status, 0, result.stderr);
});

test("unregistered templates are rejected", (t) => {
  const directory = fixture(t);
  fs.writeFileSync(path.join(directory, "_includes/unreviewed.liquid"), "<p>Unreviewed</p>");
  const result = check(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /unreviewed.liquid.*must be reviewed and registered/);
});

test("changes to acknowledged templates require review", (t) => {
  const directory = fixture(t);
  fs.appendFileSync(path.join(directory, "_layouts/about.liquid"), "<!-- changed -->");
  const result = check(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /about.liquid.*changed since review/);
});

test("deleting a registered site template is rejected", (t) => {
  const directory = fixture(t);
  fs.unlinkSync(path.join(directory, "_includes/header.liquid"));
  const result = check(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /header.liquid.*is missing/);
});

test("malformed metadata fails with an actionable error", (t) => {
  const directory = fixture(t);
  fs.writeFileSync(path.join(directory, ".al-folio-overrides.yml"), "overrides: [");
  const result = check(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Invalid override metadata/);
});

test("plugin runtime assets remain forbidden", (t) => {
  const directory = fixture(t);
  fs.mkdirSync(path.join(directory, "assets/tailwind"), { recursive: true });
  const result = check(directory);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Starter must not own core component path `assets\/tailwind`/);
});

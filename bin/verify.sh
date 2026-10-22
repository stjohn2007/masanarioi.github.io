#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

npm run lint:prettier
npm run lint:style-contract
npm run test:style-contract
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit

for test in comments plugin_toggles distill bootstrap_compat upgrade_cli css_minify; do
  bash "test/integration_${test}.sh"
done

echo "Pre-deploy verification passed."

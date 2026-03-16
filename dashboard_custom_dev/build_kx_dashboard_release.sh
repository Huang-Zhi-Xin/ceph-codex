#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="/Users/huangzx/workspace/ceph"
FRONTEND_DIR="${ROOT_DIR}/src/pybind/mgr/dashboard/frontend"
NODE20_BIN="/opt/homebrew/opt/node@20/bin"

if [[ ! -x "${NODE20_BIN}/node" ]]; then
  echo "node@20 is not installed under ${NODE20_BIN}" >&2
  exit 1
fi

export PATH="${NODE20_BIN}:$PATH"
export DASHBOARD_FRONTEND_LANGS="zh-Hans"
export CI=1
export COPYFILE_DISABLE=1

cd "${FRONTEND_DIR}"

echo "[1/4] Applying glossary translations"
node "${ROOT_DIR}/dashboard_custom_dev/translation_tools/fill_zh_cn_glossary.js"
node "${ROOT_DIR}/dashboard_custom_dev/translation_tools/audit_zh_cn_missing.js"

echo "[2/4] Installing frontend dependencies"
npm ci

echo "[3/4] Building localized frontend"
rm -rf dist angular.backup.json
npm run build:localize

echo "[4/4] Packaging frontend artifacts"
rm -rf /tmp/kx-dashboard /tmp/kx-dashboard.tgz
mkdir -p /tmp/kx-dashboard
cp -r dist /tmp/kx-dashboard/
cp package.json /tmp/kx-dashboard/
tar -C /tmp -czf /tmp/kx-dashboard.tgz kx-dashboard

echo "Release package created at /tmp/kx-dashboard.tgz"

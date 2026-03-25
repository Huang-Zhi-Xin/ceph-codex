#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="/Users/huangzx/workspace/ceph"
FRONTEND_DIR="${ROOT_DIR}/src/pybind/mgr/dashboard/frontend"
IMAGE_DIR="${ROOT_DIR}/dashboard_custom_dev/image"
NODE20_BIN="/opt/homebrew/opt/node@20/bin"

BASE_IMAGE="${BASE_IMAGE:-registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0}"
REGISTRY="${REGISTRY:-registry.cn-hangzhou.aliyuncs.com/kaixinlab}"
IMAGE_NAME="${IMAGE_NAME:-kx-storage-dashboard}"
IMAGE_TAG="${IMAGE_TAG:-v20.2.0-kx.$(date +%Y%m%d%H%M)}"
PLATFORM="${PLATFORM:-linux/amd64}"

if [[ ! -x "${NODE20_BIN}/node" ]]; then
  echo "node@20 is not installed under ${NODE20_BIN}" >&2
  exit 1
fi

export PATH="${NODE20_BIN}:$PATH"
export DASHBOARD_FRONTEND_LANGS="zh-Hans"
export CI=1
export SHELL="/bin/sh"
export npm_config_script_shell="/bin/sh"

cd "${FRONTEND_DIR}"
node "${ROOT_DIR}/dashboard_custom_dev/translation_tools/fill_zh_cn_glossary.js"
npm ci
rm -rf dist angular.backup.json
npm run build:localize

rm -rf "${IMAGE_DIR}/dist" "${IMAGE_DIR}/package.json"
cp -r "${FRONTEND_DIR}/dist" "${IMAGE_DIR}/dist"
cp "${FRONTEND_DIR}/package.json" "${IMAGE_DIR}/package.json"

FULL_IMAGE="${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

cd "${IMAGE_DIR}"
docker buildx build \
  --platform "${PLATFORM}" \
  --build-arg BASE_IMAGE="${BASE_IMAGE}" \
  -t "${FULL_IMAGE}" \
  --load \
  .

echo "Built image: ${FULL_IMAGE}"
docker image inspect "${FULL_IMAGE}" --format 'Platform={{.Architecture}}/{{.Os}} ImageID={{.Id}}'

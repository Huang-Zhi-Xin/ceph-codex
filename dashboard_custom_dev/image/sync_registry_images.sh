#!/usr/bin/env bash
set -euo pipefail

REGISTRY_NAMESPACE="${REGISTRY_NAMESPACE:-registry.cn-hangzhou.aliyuncs.com/kaixinlab}"
PLATFORM="${PLATFORM:-linux/amd64}"
OUTPUT_FILE="${OUTPUT_FILE:-/Users/huangzx/workspace/ceph/dashboard_custom_dev/image/aliyun-image-manifest.txt}"

IMAGES=(
  "quay.io/ceph/ceph:v20.2.0|${REGISTRY_NAMESPACE}/ceph:20.2.0"
  "quay.io/ceph/grafana:12.2.0|${REGISTRY_NAMESPACE}/grafana:12.2.0"
  "quay.io/prometheus/prometheus:v3.6.0|${REGISTRY_NAMESPACE}/prometheus:v3.6.0"
  "quay.io/prometheus/alertmanager:v0.28.1|${REGISTRY_NAMESPACE}/alertmanager:v0.28.1"
  "quay.io/prometheus/node-exporter:v1.9.1|${REGISTRY_NAMESPACE}/node-exporter:v1.9.1"
  "quay.io/ceph/nvmeof:1.5|${REGISTRY_NAMESPACE}/nvmeof:1.5"
)

command -v docker >/dev/null 2>&1 || {
  echo "docker not found in PATH" >&2
  exit 1
}

mkdir -p "$(dirname "${OUTPUT_FILE}")"
{
  echo "# KX Storage 阿里云私有仓库镜像清单"
  echo
  echo "生成时间: $(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo "镜像平台: ${PLATFORM}"
  echo "目标仓库: ${REGISTRY_NAMESPACE}"
  echo
  printf '%-45s %-75s %s\n' "SOURCE_IMAGE" "TARGET_IMAGE" "DIGEST"
} >"${OUTPUT_FILE}"

for item in "${IMAGES[@]}"; do
  src="${item%%|*}"
  dst="${item##*|}"

  echo "[pull] ${src}"
  docker pull --platform "${PLATFORM}" "${src}"

  echo "[tag]  ${dst}"
  docker tag "${src}" "${dst}"

  echo "[push] ${dst}"
  docker push "${dst}" >/dev/null

  digest="$(docker buildx imagetools inspect "${dst}" --format '{{json .Manifest.Digest}}' 2>/dev/null | tr -d '"')"
  if [[ -z "${digest}" || "${digest}" == "null" ]]; then
    digest="unavailable"
  fi

  printf '%-45s %-75s %s\n' "${src}" "${dst}" "${digest}" | tee -a "${OUTPUT_FILE}"
done

echo
echo "Wrote manifest: ${OUTPUT_FILE}"

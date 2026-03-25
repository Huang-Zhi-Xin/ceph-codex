# KX Storage 分布式存储管理系统安装与更新手册

## 1. 文档目的

本文档用于指导在 `Ceph v20.2.0` 基线之上，完成 KX Storage Dashboard 的本地构建、镜像同步、私有仓库发布、集群安装、正式更新、回滚与验收。

适用范围：

- 开发机构建环境：macOS
- 私有仓库：`registry.cn-hangzhou.aliyuncs.com/kaixinlab`
- 测试集群节点：`node11`
- 正式发布方式：全部镜像从阿里云私有仓库拉取

## 2. 版本矩阵

- Ceph 基线标签：`v20.2.0`
- 开发分支：`codex/dashboard-dev-manual-v20.2.0`
- 前端源码目录：
  `/Users/huangzx/workspace/ceph/src/pybind/mgr/dashboard/frontend`
- 二开交付目录：
  `/Users/huangzx/workspace/ceph/dashboard_custom_dev`
- 推荐 Node 版本：`20.x LTS`
- 容器运行时：`docker`
- 正式发布镜像平台：`linux/amd64`

## 3. 阿里云私有仓库镜像清单

正式安装与更新仅使用以下镜像：

- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/nvmeof:1.5`

说明：

- `ceph` 镜像用于 `cephadm bootstrap`、`mon/mgr/osd/mds/rgw` 及相关基础守护进程。
- `kx-storage-dashboard` 为 KX 二开后的正式 `mgr` 镜像。
- `nvmeof` 为可选镜像，默认不启用，但需预同步到私有仓库。
- `NFS/SMB/iSCSI` 当前仍依赖 `ceph` 基础镜像，不单独维护公共镜像条目。

## 4. 开发机构建前提

### 4.1 Homebrew

```bash
brew --version
```

### 4.2 安装 Node 20

```bash
brew install node@20
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
node -v
npm -v
```

要求：

- `node -v` 不低于 `18.19`
- 推荐使用 `20.x`

### 4.3 Docker

```bash
docker version
```

## 5. 私有仓库镜像同步

### 5.1 登录阿里云私有仓库

```bash
docker login registry.cn-hangzhou.aliyuncs.com
```

### 5.2 同步基础镜像与可选镜像

使用项目内同步脚本：

```bash
cd /Users/huangzx/workspace/ceph
bash dashboard_custom_dev/image/sync_registry_images.sh
```

脚本会执行：

- 从上游拉取基础镜像
- 重标记到 `registry.cn-hangzhou.aliyuncs.com/kaixinlab/...`
- 推送到阿里云私有仓库
- 输出镜像与 digest 清单

输出清单：

- `dashboard_custom_dev/image/aliyun-image-manifest.txt`

### 5.3 校验私有仓库镜像

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/nvmeof:1.5
```

## 6. Dashboard 正式构建

### 6.1 前端正式构建

```bash
cd /Users/huangzx/workspace/ceph
bash dashboard_custom_dev/build_kx_dashboard_release.sh
```

该脚本会自动完成：

- 应用批量汉化术语表
- 输出当前中文包剩余未翻译条目统计
- 安装前端依赖
- 构建 `en-US` 与 `zh-Hans`
- 生成 `/tmp/kx-dashboard.tgz`

### 6.2 手工构建方式

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
export DASHBOARD_FRONTEND_LANGS="zh-Hans"
export CI=1
export COPYFILE_DISABLE=1
export SHELL="/bin/sh"
export npm_config_script_shell="/bin/sh"

cd /Users/huangzx/workspace/ceph/src/pybind/mgr/dashboard/frontend
node /Users/huangzx/workspace/ceph/dashboard_custom_dev/translation_tools/fill_zh_cn_glossary.js
node /Users/huangzx/workspace/ceph/dashboard_custom_dev/translation_tools/audit_zh_cn_missing.js
npm ci
rm -rf dist angular.backup.json
npm run build:localize
ls -1 dist
```

构建成功后，应至少存在：

- `dist/en-US`
- `dist/zh-Hans`

## 7. 自定义镜像制作

### 7.1 构建镜像

```bash
cd /Users/huangzx/workspace/ceph

export BASE_IMAGE="registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0"
export REGISTRY="registry.cn-hangzhou.aliyuncs.com/kaixinlab"
export IMAGE_NAME="kx-storage-dashboard"
export IMAGE_TAG="v20.2.0-kx.$(date +%Y%m%d%H%M)"
export PLATFORM="linux/amd64"

bash dashboard_custom_dev/image/build_image.sh
```

构建完成后会输出：

```text
registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>
```

### 7.2 推送镜像

```bash
docker push registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>
```

### 7.3 镜像校验

```bash
docker buildx imagetools inspect registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>
```

说明：

- 镜像默认基础镜像已切到阿里云私有仓库中的 `ceph:20.2.0`
- 正式镜像必须使用 `linux/amd64` 构建
- 文档与脚本不再使用 `quay.io` 作为默认正式源

## 8. node11 首次安装流程

### 8.1 登录阿里云私有仓库

```bash
sudo docker login registry.cn-hangzhou.aliyuncs.com
```

### 8.2 预拉取基础镜像

```bash
sudo docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0
sudo docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0
sudo docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0
sudo docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1
sudo docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1
```

### 8.3 使用私有仓库镜像引导集群

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 bootstrap \
  --mon-ip 192.168.100.111 \
  --single-host-defaults \
  --initial-dashboard-user admin \
  --initial-dashboard-password 'Admin@123456'
```

### 8.4 校验引导结果

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph -s
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph mgr services
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph config dump | grep container_image
```

## 9. node11 更新流程

### 9.1 更新前检查

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph -s
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph orch ps --daemon_type mgr
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph mgr services
```

### 9.2 开发期临时覆盖更新

适用场景：

- 当天频繁改动前端
- 只需要快速验证页面效果
- 暂不需要将最新前端固化到正式镜像

```bash
scp /tmp/kx-dashboard.tgz <user>@<dashboard-host>:/tmp/

ssh <user>@<dashboard-host>
mkdir -p /tmp/kx-dashboard
tar -xzf /tmp/kx-dashboard.tgz -C /tmp

for cid in $(sudo docker ps --format '{{.ID}} {{.Names}}' | awk '/mgr-/{print $1}'); do
  sudo docker exec "$cid" sh -c 'rm -rf /usr/share/ceph/mgr/dashboard/frontend/dist/*'
  sudo docker cp /tmp/kx-dashboard/dist/. "$cid":/usr/share/ceph/mgr/dashboard/frontend/dist/
  sudo docker cp /tmp/kx-dashboard/package.json "$cid":/usr/share/ceph/mgr/dashboard/frontend/package.json
done

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph mgr fail
```

说明：

- 该方式只适合当天调试
- `mgr` 重建或镜像切换后，手工覆盖内容会丢失

### 9.3 日终正式持久化更新

```bash
sudo docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph config set mgr container_image registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch daemon redeploy mgr.<host>.<active-id> --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch daemon redeploy mgr.<host>.<standby-id> --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>
```

### 9.4 组件服务使用私有仓库镜像

示例：

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch apply rgw default --placement=1

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch apply mds cephfs --placement=1
```

监控与可选组件需要在 spec 或 apply 前确认私有镜像已可拉取。

### 9.5 更新状态检查

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph orch ps --format json-pretty
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph config dump | grep container_image
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph -s
```

验收要求：

- `container_image_name` 全部来自 `registry.cn-hangzhou.aliyuncs.com/kaixinlab/...`
- `mgr` 守护进程状态正常
- `ceph -s` 无新增异常

## 10. 回滚流程

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph config set mgr container_image registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:<previous-tag>

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch daemon redeploy mgr.<host>.<active-id> --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:<previous-tag>

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch daemon redeploy mgr.<host>.<standby-id> --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:<previous-tag>
```

回滚后检查：

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph orch ps --daemon_type mgr
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph -s
```

## 11. 常见问题

### 11.1 `npm run build:localize` 失败

```bash
brew install node@20
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
export SHELL="/bin/sh"
export npm_config_script_shell="/bin/sh"
node -v
```

### 11.2 页面更新后仍显示旧内容

处理顺序：

```text
1. 浏览器无痕窗口访问
2. 强制刷新
3. 清理 cd-lang cookie
4. 再次检查 mgr 镜像是否已切换完成
```

### 11.3 目标节点仍尝试拉取公网镜像

检查：

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph config dump | grep container_image
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph orch ps --format json-pretty
```

要求：

- 配置和运行时镜像名都来自阿里云私有仓库
- 正式文档、脚本和集群配置中不再使用 `quay.io`

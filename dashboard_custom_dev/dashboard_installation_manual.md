# KX Storage 分布式存储管理系统安装与更新手册

## 1. 文档目的

本文档用于指导在 `Ceph v20.2.0` 基线之上，完成 KX Storage Dashboard 的本地构建、镜像制作、发布更新、回滚和验收。

适用范围：

- 开发机构建环境：macOS
- 测试集群节点：`node11 (192.168.100.111)`
- Dashboard 发布方式：自定义镜像滚动更新

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

## 3. 开发机构建前提

### 3.1 Homebrew

本机需已安装 Homebrew：

```bash
brew --version
```

### 3.2 安装 Node 20

```bash
brew install node@20
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
node -v
npm -v
```

要求：

- `node -v` 不低于 `18.19`
- 推荐实际版本为 `20.x`

### 3.3 Docker

```bash
docker version
```

要求本机 Docker Desktop 或等效 Docker 环境已正常启动。

## 4. Dashboard 正式构建

### 4.1 执行前端构建

推荐直接使用项目内脚本：

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

### 4.2 手工构建方式

如需手工执行：

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
export DASHBOARD_FRONTEND_LANGS="zh-Hans"
export CI=1
export COPYFILE_DISABLE=1

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

## 5. 自定义镜像制作

### 5.1 镜像构建目录

镜像构建目录位于：

`/Users/huangzx/workspace/ceph/dashboard_custom_dev/image`

目录内容：

- `Dockerfile`
- `build_image.sh`

### 5.2 构建镜像

默认基线镜像：

- `quay.io/ceph/ceph:v20.2.0`

构建示例：

```bash
cd /Users/huangzx/workspace/ceph

export BASE_IMAGE="quay.io/ceph/ceph:v20.2.0"
export REGISTRY="your.registry.local/kx"
export IMAGE_NAME="kx-storage-dashboard"
export IMAGE_TAG="v20.2.0-kx.$(date +%Y%m%d%H%M)"
export PLATFORM="linux/amd64"

bash dashboard_custom_dev/image/build_image.sh
```

构建完成后会输出完整镜像名，例如：

```text
your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530
```

镜像构建逻辑会先清理上游镜像中的原始 Dashboard 多语言目录，再仅写入本次构建生成的 `en-US` 与 `zh-Hans`，避免旧语言包残留。

注意：

- 开发机为 Mac 时，默认本地镜像可能是 `arm64`
- `node11` 为 `amd64`
- 正式镜像必须使用 `linux/amd64` 构建，否则即使镜像可以导入，也无法在 `node11` 上作为持久运行镜像使用

### 5.3 推送镜像

```bash
docker login your.registry.local
docker push your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530
```

### 5.4 推荐的持久化发布方式

推荐在 `node11` 可访问的私有镜像仓库中保存自定义镜像，然后让 `cephadm` 按仓库地址拉取并重建 `mgr`。

推荐方案：

- 方案 A：使用独立私有仓库
- 方案 B：在 `node11` 或同网段节点部署本地仓库，例如 `registry:2`

示例：

```bash
docker run -d --restart=always -p 5000:5000 --name registry registry:2
```

然后将镜像标记并推送到该仓库：

```bash
docker tag kx-storage-dashboard:v20.2.0-kx.20260316-amd64 192.168.100.111:5000/kx/kx-storage-dashboard:v20.2.0-kx.20260316
docker push 192.168.100.111:5000/kx/kx-storage-dashboard:v20.2.0-kx.20260316
```

若仓库使用 HTTP，需要在 `node11` 的 Docker 配置中加入 `insecure-registries`，然后重启 Docker。

### 5.5 离线导出镜像

若当前没有可用私有镜像仓库，可在本机导出镜像文件后再传输到 `node11`：

```bash
docker save your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530 | gzip > /tmp/kx-storage-dashboard-v20.2.0-kx.202603161530.tar.gz
ls -lh /tmp/kx-storage-dashboard-v20.2.0-kx.202603161530.tar.gz
```

如仅使用本地测试标签，也可导出当前本机构建镜像：

```bash
docker save kx-storage-dashboard:v20.2.0-kx.local | gzip > /tmp/kx-storage-dashboard-v20.2.0-kx.local.tar.gz
```

## 6. node11 正式更新流程

说明：

- 以下步骤需要 `node11` 可通过 SSH 正常访问。
- 当前若 SSH 不通，应先修复网络或 SSH 服务，再执行更新。

### 6.1 更新前检查

在 `node11` 执行：

```bash
sudo cephadm shell -- ceph -s
sudo cephadm shell -- ceph orch ps --daemon_type mgr
sudo cephadm shell -- ceph mgr services
sudo docker images | grep ceph
```

记录以下信息：

- 当前 Ceph 健康状态
- 当前 `mgr` 守护进程数量
- 当前 Dashboard 访问地址
- 当前正在使用的 Ceph 镜像标签或镜像 ID

### 6.2 正式持久化更新

推荐使用私有仓库镜像地址执行更新。以下命令中的镜像名以本地仓库为例：

```bash
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph config set mgr container_image 192.168.100.111:5000/kx/kx-storage-dashboard:v20.2.0-kx.20260316
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph config get mgr container_image
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch daemon redeploy mgr.node11.fyfdob --image 192.168.100.111:5000/kx/kx-storage-dashboard:v20.2.0-kx.20260316
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch daemon redeploy mgr.node11.puvban --image 192.168.100.111:5000/kx/kx-storage-dashboard:v20.2.0-kx.20260316
```

这种方式的特点：

- `cephadm` 后续重建 `mgr` 时仍会从你指定的仓库镜像启动
- 节点重启、`mgr` 切换、容器重建后不会丢失二次开发内容
- 不再依赖手工 `docker cp`

### 6.3 登录镜像仓库

```bash
sudo docker login your.registry.local
```

### 6.4 拉取新镜像

```bash
sudo docker pull your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530
```

### 6.5 离线导入镜像（仅临时测试使用）

将镜像压缩包复制到 `node11` 后执行：

```bash
gzip -dc /tmp/kx-storage-dashboard-v20.2.0-kx.202603161530.tar.gz | sudo docker load
sudo docker images | grep kx-storage-dashboard
```

若使用的是本地测试标签导出的镜像，需要先为其重打正式标签：

```bash
sudo docker tag kx-storage-dashboard:v20.2.0-kx.local your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530
```

说明：

- 离线导入只适合临时验证
- `cephadm orch upgrade start` 在更新时通常仍会尝试向镜像仓库执行 `docker pull`
- 因此，若没有一个 `node11` 可访问的私有仓库，离线导入后的本地镜像无法作为长期稳定的正式发布方案

### 6.6 执行 mgr 滚动更新

```bash
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph config set mgr container_image your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch upgrade start --image your.registry.local/kx/kx-storage-dashboard:v20.2.0-kx.202603161530 --daemon-types mgr
```

### 6.7 更新状态检查

```bash
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch upgrade status
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch ps --daemon_type mgr
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph -s
```

## 7. 更新后验收

### 7.1 页面验收

访问 Dashboard，检查以下内容：

- 登录页品牌为 `KX Storage`
- 登录页副标题为中文
- 浏览器标签页标题为 `KX Storage`
- favicon 为 KX 图标，且无右上角状态点
- About 弹窗已替换品牌信息且无 Ceph copyright 文案
- 帮助菜单仅保留 `API` 与 `About`
- 左侧导航主要菜单已汉化

### 7.2 集群验收

```bash
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph -s
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph mgr services
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch ps --daemon_type mgr
```

验收要求：

- Dashboard 可访问
- `mgr` 守护进程状态正常
- `ceph -s` 无新增异常

## 8. 回滚流程

若更新后页面异常、品牌资源丢失或 Dashboard 无法访问，按以下步骤回滚：

### 8.1 切回旧镜像

```bash
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph config set mgr container_image <上一版本镜像>
sudo cephadm --image quay.io/ceph/ceph:v20.2.0 shell -- ceph orch upgrade start --image <上一版本镜像> --daemon-types mgr
```

### 8.2 回滚后检查

```bash
sudo cephadm shell -- ceph orch upgrade status
sudo cephadm shell -- ceph orch ps --daemon_type mgr
sudo cephadm shell -- ceph -s
```

## 9. 常见问题

### 9.1 `npm run build:localize` 失败，提示 Node 版本过低

原因：

- 本机 Node 版本低于 Angular CLI 要求

处理：

```bash
brew install node@20
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
node -v
```

### 9.2 页面更新后仍显示旧内容

处理顺序：

```text
1. 浏览器无痕窗口访问
2. 强制刷新
3. 清理 cd-lang cookie
4. 再次检查 mgr 镜像是否已切换完成
```

### 9.3 无法更新到 node11

检查项：

- `node11` SSH 是否可访问
- `ssh` 服务是否启动
- 防火墙是否放通
- node11 到镜像仓库是否可达
- `docker pull` 是否成功

### 9.4 自定义镜像已更新，但 Dashboard 资源未生效

检查项：

- 镜像中是否包含 `/usr/share/ceph/mgr/dashboard/frontend/dist/zh-Hans`
- `mgr` 是否确实使用了新镜像
- `ceph orch upgrade status` 是否完成
- 浏览器缓存是否已清除

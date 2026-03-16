# Ceph Dashboard 测试部署手册（基于 `v20.2.0`）

## 1. 目标

在测试机 `node11 (192.168.100.111)` 上完成一套可访问 Dashboard 的 Ceph 测试环境，用于后续 Dashboard 二次开发验证。

本手册优先提供“单机快速验证”路径，先看功能和界面，再决定是否扩展多机。

## 2. 当前分支信息

- 打包基线标签：`v20.2.0`
- 开发分支：`codex/dashboard-dev-manual-v20.2.0`

## 3. 测试机准备

在 `node11` 上准备：

- Linux（推荐 Rocky/Ubuntu/Debian 任一较新版本）
- `docker`
- `systemd`
- `python3`
- `ssh` 服务已启动
- 主机名可解析（本机 `/etc/hosts` 至少包含）
  - `192.168.100.111 node11`

建议先关闭或放通防火墙相关端口（最小要保证 8443 可访问 Dashboard）。

## 4. 测试机基础环境搭建（必做，Ubuntu 24.04）

以下步骤在 `node11 (192.168.100.111)` 执行。

### 4.1 设置主机名与 hosts

```bash
sudo hostnamectl set-hostname node11
echo "192.168.100.111 node11" | sudo tee -a /etc/hosts
```

### 4.2 系统更新与基础工具

Ubuntu 24.04:

```bash
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install curl vim chrony python3 openssh-server
```

### 4.3 启动必要服务

```bash
sudo systemctl enable --now chronyd || sudo systemctl enable --now chrony
sudo systemctl enable --now sshd || sudo systemctl enable --now ssh
```

### 4.4 校验基础环境

```bash
timedatectl
python3 --version
docker --version
ssh -V
```

### 4.5 防火墙与 SELinux（测试环境建议）

为减少部署阶段干扰，测试环境可临时放通或关闭防火墙（生产环境请按最小权限放通）：

```bash
sudo systemctl stop firewalld 2>/dev/null || true
sudo systemctl disable firewalld 2>/dev/null || true
```

如遇容器或端口访问异常，再检查 SELinux 状态：

```bash
getenforce || true
```

### 4.6 网络连通性自检

```bash
ping -c 3 192.168.100.111
ip a
```

## 5. 安装 cephadm（测试环境）

在 `node11` 执行：

```bash
CEPH_RELEASE=20.2.0   # 基于当前 v20.2.0 标签
curl --silent --remote-name --location https://download.ceph.com/rpm-${CEPH_RELEASE}/el9/noarch/cephadm
chmod +x cephadm
sudo mv cephadm /usr/local/bin/
cephadm version
```

## 6. 单机引导集群并启用 Dashboard

在 `node11` 执行：

```bash
sudo cephadm bootstrap \
  --mon-ip 192.168.100.111 \
  --single-host-defaults \
  --initial-dashboard-user admin \
  --initial-dashboard-password 'Admin@123456'
```

引导后检查：

```bash
sudo cephadm shell -- ceph -s
sudo cephadm shell -- ceph mgr services
```

访问地址（示例）：

- `https://192.168.100.111:8443`
- 用户名：`admin`
- 密码：`Admin@123456`
- 修改密码为：kaixinlab12345


## 7. 为 Dashboard 提供可观察数据（风险）

单机只起 MON/MGR 时，Dashboard 内容较少。建议至少加一块空盘作为 OSD（例如 `/dev/sdb`）：

```bash
sudo cephadm shell -- ceph orch apply osd --all-available-devices
sudo cephadm shell -- ceph -s
```
含义是：把“所有被判定为可用的块设备”拿去创建 OSD。
创建 OSD 会清盘/重写该设备（原数据不可用）。

要点：

它通常不会动已经挂载为 /、/boot 的系统盘分区
但会动“未挂载且被判定可用”的磁盘（你本地如果有闲置盘或历史数据盘，可能中招）
所以你这种有重要本地数据的机器，不建议用 --all-available-devices
如果你不希望自动吃掉所有空盘，请改用设备过滤规则（后续可补充精细化 OSD 编排）。

## 8. Dashboard 前端打包与更新到 node11（Mac 开发机 -> Linux 测试机）

适用场景：
- 代码在本机 Mac。
- Ceph 集群运行在独立测试机 `node11`。
- 先快速验证 Dashboard 二次开发效果。

### 8.1 在 Mac 上构建并打包前端产物

```bash
cd /Users/huangzx/workspace/ceph/src/pybind/mgr/dashboard/frontend

# Angular CLI 要求 Node.js >= 18.19，当前低于该版本会直接构建失败
node -v

npm ci
rm -rf dist angular.backup.json

# 关键：不设该变量时 cd.js 只会构建英文
export DASHBOARD_FRONTEND_LANGS="zh-Hans"
export CI=1
npm run build:localize

# 应看到 en-US 和 zh-Hans 两个目录
ls -1 dist

# 可选：快速确认本轮品牌资源已进入构建目录
find dist -maxdepth 2 \( -name 'kx-favicon.svg' -o -name 'kx-registry-logo.svg' \)

mkdir -p /tmp/kx-dashboard
cp -r dist /tmp/kx-dashboard/
cp package.json /tmp/kx-dashboard/

# 避免 macOS 资源叉文件（._*）被一起打入包
export COPYFILE_DISABLE=1
tar -C /tmp -czf /tmp/kx-dashboard.tgz kx-dashboard
```

### 8.2 从 Mac 传输到 node11

```bash
scp /tmp/kx-dashboard.tgz kaixin@192.168.100.111:/tmp/
```

### 8.3 在 node11 上替换 mgr 容器内前端文件

```bash
ssh kaixin@192.168.100.111
mkdir -p /tmp/kx-dashboard
tar -xzf /tmp/kx-dashboard.tgz -C /tmp
```

查看 mgr 容器：

```bash
sudo docker ps --format '{{.ID}} {{.Names}}' | grep mgr
```

对所有 mgr 容器执行备份与覆盖：

```bash
for cid in $(sudo docker ps --format '{{.ID}} {{.Names}}' | awk '/mgr-/{print $1}'); do
  sudo docker exec "$cid" sh -c 'mkdir -p /usr/share/ceph/mgr/dashboard/frontend && cp -a /usr/share/ceph/mgr/dashboard/frontend /usr/share/ceph/mgr/dashboard/frontend.bak.$(date +%s)'
  sudo docker exec "$cid" sh -c 'rm -rf /usr/share/ceph/mgr/dashboard/frontend/dist/*'
  sudo docker cp /tmp/kx-dashboard/dist/. "$cid":/usr/share/ceph/mgr/dashboard/frontend/dist/
  sudo docker cp /tmp/kx-dashboard/package.json "$cid":/usr/share/ceph/mgr/dashboard/frontend/package.json
done
```

触发 mgr 切换让前端重新加载：

```bash
sudo cephadm shell -- ceph mgr fail
```

校验替换结果：

```bash
for cid in $(sudo docker ps --format '{{.ID}} {{.Names}}' | awk '/mgr-/{print $1}'); do
  echo "=== $cid ==="
  sudo docker exec "$cid" sh -c "ls -1 /usr/share/ceph/mgr/dashboard/frontend/dist"
  sudo docker exec "$cid" sh -c "find /usr/share/ceph/mgr/dashboard/frontend/dist -maxdepth 2 \\( -name 'kx-favicon.svg' -o -name 'kx-registry-logo.svg' \\)"
done
```

### 8.4 回滚（如需）

```bash
for cid in $(sudo docker ps --format '{{.ID}} {{.Names}}' | awk '/mgr-/{print $1}'); do
  bak=$(sudo docker exec "$cid" sh -c "ls -dt /usr/share/ceph/mgr/dashboard/frontend.bak.* 2>/dev/null | head -n1")
  [ -n "$bak" ] && sudo docker exec "$cid" sh -c "rm -rf /usr/share/ceph/mgr/dashboard/frontend && cp -a $bak /usr/share/ceph/mgr/dashboard/frontend"
done
sudo cephadm shell -- ceph mgr fail
```

说明：
- 上述方式用于快速验证，容器重建后可能被覆盖。
- 持久化方案应采用自定义镜像并 `ceph orch upgrade --daemon-types mgr` 滚动升级。

## 9. 基础验收清单

- 能登录 Dashboard
- 主页能看到 Cluster Status / Capacity / Performance 卡片
- 登录页显示 `KX Storage` 品牌信息
- 浏览器标签页标题显示 `KX Storage`
- 浏览器标签页图标已变为 KX 图标，且不再显示右上角橘色状态点
- 右上角帮助菜单不再显示 `Documentation` 与 `Report an issue...`
- About 弹窗不再显示 `Copyright(c) ... Ceph contributors` 与 `Free software (LGPL 2.1).`
- `ceph -s` 显示 `HEALTH_OK` 或可解释的告警
- Manager 模块包含 dashboard：

```bash
sudo cephadm shell -- ceph mgr module ls | grep dashboard
```

如页面未立即更新：

```bash
# 浏览器侧处理
# 1. 无痕窗口访问
# 2. 强制刷新（Shift + Command + R）
# 3. 清理 cd-lang cookie 后重试
```

## 10. 是否需要其他测试机

当前目标是“先看 Dashboard 再做二开”，**1 台 `node11` 就够**。

建议补充其他测试机的场景：

- 需要验证高可用/故障切换（至少 3 台）
- 需要验证扩缩容、重平衡、主机下线等流程（建议 3 台起）
- 需要观察更真实性能图和容量变化（建议 3 台起，至少 3 OSD）

推荐最小多机场景：

- `node11 192.168.100.111`（bootstrap + admin）
- `node12 192.168.100.112`
- `node13 192.168.100.113`

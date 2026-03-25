# KX Storage 离线安装包准备说明（Docker 版）

## 一、目录规范

统一目录：

```text
/opt/kx-storage-offline/
```

建议结构：

```text
apt/
images/
scripts/
config/
docs/
```

## 二、APT 离线包准备

```bash
apt download docker.io docker-ce docker-ce-cli containerd.io lvm2 chrony python3 python3-pip
```

生成索引：

```bash
dpkg-scanpackages . /dev/null | gzip -9c > Packages.gz
```

## 三、Docker 安装包

```bash
apt download docker.io docker-ce docker-ce-cli containerd.io
```

## 四、阿里云私有仓库镜像准备

### 4.1 需要准备的镜像

- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/nvmeof:1.5`

### 4.2 同步镜像到阿里云私有仓库

在开发机执行：

```bash
cd /Users/huangzx/workspace/ceph
bash dashboard_custom_dev/image/sync_registry_images.sh
```

### 4.3 从阿里云私有仓库拉取并打包离线镜像

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1
docker pull registry.cn-hangzhou.aliyuncs.com/kaixinlab/nvmeof:1.5

docker save -o kx-storage-images.tar \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build> \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0 \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0 \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1 \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1 \
  registry.cn-hangzhou.aliyuncs.com/kaixinlab/nvmeof:1.5
```

### 4.4 校验离线镜像包

```bash
ls -lh kx-storage-images.tar
sha256sum kx-storage-images.tar > kx-storage-images.tar.sha256
```

## 五、离线包总校验

```bash
tar -czf kx-storage-offline.tar.gz *
sha256sum kx-storage-offline.tar.gz > checksum.txt
```

## 六、离线安装后的镜像校验

在目标节点导入后执行：

```bash
docker load -i /opt/kx-storage-offline/images/kx-storage-images.tar
docker images | egrep 'kaixinlab/(ceph|kx-storage-dashboard|grafana|prometheus|alertmanager|node-exporter|nvmeof)'
```

要求：

- 导入后的镜像名全部来自 `registry.cn-hangzhou.aliyuncs.com/kaixinlab/...`
- 不再使用旧版 `quay.io/ceph/ceph:v18` 或 `grafana/grafana` 示例

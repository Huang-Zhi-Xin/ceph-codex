# KX Storage 分布式存储管理系统安装手册（Docker 版）

## 一、离线目录

统一目录：

```text
/opt/kx-storage-offline/
```

建议结构：

```text
/opt/kx-storage-offline/
├── apt/
├── images/
├── scripts/
├── config/
└── docs/
```

## 二、基础安装

```bash
sudo dpkg -i /opt/kx-storage-offline/apt/*.deb || sudo apt-get -f install -y
```

## 三、安装 Docker

```bash
sudo dpkg -i /opt/kx-storage-offline/apt/docker*.deb || sudo apt-get -f install -y
sudo systemctl enable docker
sudo systemctl start docker
sudo docker version
```

## 四、导入阿里云私有仓库镜像离线包

```bash
sudo docker load -i /opt/kx-storage-offline/images/kx-storage-images.tar
```

导入后校验：

```bash
sudo docker images | egrep 'kaixinlab/(ceph|kx-storage-dashboard|grafana|prometheus|alertmanager|node-exporter|nvmeof)'
```

## 五、登录阿里云私有仓库

```bash
sudo docker login registry.cn-hangzhou.aliyuncs.com
```

## 六、初始化 Ceph

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 bootstrap \
  --mon-ip 192.168.100.111 \
  --initial-dashboard-user admin \
  --initial-dashboard-password 'Admin@123456'
```

## 七、集群部署

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch host add node112 192.168.100.112

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch host add node113 192.168.100.113

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch apply mon --placement="node111,node112,node113"

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch apply mgr --placement=3

sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch apply osd --all-available-devices
```

## 八、存储服务

块存储：

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph osd pool create rbd 128
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  rbd pool init rbd
```

文件存储：

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph fs volume create cephfs
```

对象存储：

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- \
  ceph orch apply rgw default --placement=3
```

## 九、访问控制台

```text
https://<IP>:8443
```

## 十、验证

```bash
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph -s
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph df
sudo cephadm --image registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0 shell -- ceph config dump | grep container_image
```

验证要求：

- `container_image` 配置使用阿里云私有仓库路径
- 运行中的 daemon 镜像不再指向 `quay.io`
- Dashboard 可正常访问

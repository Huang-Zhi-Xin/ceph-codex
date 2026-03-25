# KX Storage Dashboard Secondary Development Workspace

本目录用于存放 KX Storage Dashboard 二次开发相关的交付物、镜像同步脚本与辅助工具。

当前包含：

- `dashboard_test_deployment_manual.md`：测试部署手册
- `dashboard_installation_manual.md`：正式安装与更新手册
- `dashboard_user_manual.md`：正式用户使用手册
- `KX_Storage_Install_Manual.md`：Docker 版离线安装手册
- `KX_Storage_Offline_Preparation.md`：离线镜像与安装包准备说明
- `build_kx_dashboard_release.sh`：本地正式构建脚本
- `translation_tools/`：批量汉化工具与术语表
- `image/build_image.sh`：KX Dashboard 正式镜像构建脚本
- `image/sync_registry_images.sh`：阿里云私有仓库镜像同步脚本
- `image/aliyun-image-manifest.txt`：镜像同步输出清单

正式镜像仓库：

- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/ceph:20.2.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/kx-storage-dashboard:v20.2.0-kx.<date.build>`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/grafana:12.2.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/prometheus:v3.6.0`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/alertmanager:v0.28.1`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/node-exporter:v1.9.1`
- `registry.cn-hangzhou.aliyuncs.com/kaixinlab/nvmeof:1.5`

常用命令：

```bash
# 同步基础镜像和可选镜像到阿里云私有仓库
bash /Users/huangzx/workspace/ceph/dashboard_custom_dev/image/sync_registry_images.sh

# 统计当前中文包剩余未翻译条目
node /Users/huangzx/workspace/ceph/dashboard_custom_dev/translation_tools/audit_zh_cn_missing.js

# 本地正式构建与打包
bash /Users/huangzx/workspace/ceph/dashboard_custom_dev/build_kx_dashboard_release.sh

# 构建正式 mgr 镜像
bash /Users/huangzx/workspace/ceph/dashboard_custom_dev/image/build_image.sh
```

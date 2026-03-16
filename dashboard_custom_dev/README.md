# KX Storage Dashboard Secondary Development Workspace

本目录用于存放 KX Storage Dashboard 二次开发相关的交付物与辅助工具。

当前包含：

- `dashboard_test_deployment_manual.md`：测试部署手册
- `dashboard_installation_manual.md`：正式安装与更新手册
- `dashboard_user_manual.md`：正式用户使用手册
- `build_kx_dashboard_release.sh`：本地正式构建脚本
- `translation_tools/`：批量汉化工具与术语表
- `image/`：自定义镜像构建文件

常用命令：

```bash
# 统计当前中文包剩余未翻译条目
node /Users/huangzx/workspace/ceph/dashboard_custom_dev/translation_tools/audit_zh_cn_missing.js

# 本地正式构建与打包
bash /Users/huangzx/workspace/ceph/dashboard_custom_dev/build_kx_dashboard_release.sh
```

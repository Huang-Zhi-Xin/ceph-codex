# KX Storage Dashboard 汉化问题收敛测试记录

## 1. 测试批次信息

| 字段 | 内容 |
| --- | --- |
| 测试日期 | 2026-03-25 |
| 测试环境 | Dashboard 联调测试环境 |
| Dashboard 地址 | 待补充 |
| 测试版本 | `v20.2.0-kx.20260323.1` |
| 浏览器 | Chrome |
| 测试人员 | 待补充 |
| 协同人员 | 待补充 |

## 2. 测试结果汇总

| 模块 | Pass | Fail | Blocked | 备注 |
| --- | --- | --- | --- | --- |
| 基础冒烟 | 9 | 3 | 0 | About 版本展示与全局漏翻待收敛 |
| 多集群 | 1 | 1 | 1 | 集群管理列表与空态汉化待补齐 |
| 集群 | 6 | 3 | 0 | Monitor、CRUSH、Ceph Users 存在系统性漏翻 |
| 块存储 | 6 | 2 | 0 | 创建页与 Trash 相关文案待统一 |
| 对象存储 | 7 | 5 | 0 | User、Bucket、Topic、Multisite、Configuration 多处未汉化 |
| 文件存储 | 4 | 6 | 0 | 子卷组、子卷、快照调度、SMB 创建链路缺口较多 |
| 可观测性 | 2 | 3 | 0 | Logs/Alerts/Silences/Grafana 时间选择器存在问题 |
| 用户与权限 | 2 | 2 | 1 | 用户/角色创建页未汉化，受限账号深测后置 |

## 3. 详细测试记录

| 模块 | 页面/功能 | 前置条件 | 操作步骤 | 期望结果 | 实际结果 | 结论(Pass/Fail/Blocked) | 截图/备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 基础冒烟 | `SMK-09` About 弹窗 | 已登录 | 打开 About | 品牌、版本、版权信息符合定制要求 | 品牌正确，但产品版本与 Ceph 版本展示混淆 | Fail | 需区分“产品版本/ Ceph 基线版本” |
| 基础冒烟 | `SMK-11` 面包屑一致性 | 已登录 | 进入二级页面抽查 | 面包屑、页面标题、页签一致 | 存在页签或标题英文残留 | Fail | 以多集群、对象存储、文件存储为主 |
| 基础冒烟 | `SMK-12` 全局漏翻检查 | 已登录 | 抽查首页、导航、弹窗、通知 | 无明显英文漏网 | 高频词条与动态表单仍有英文 | Fail | 公共组件问题跨页复现 |
| 多集群 | `MC-02` 集群管理页可达 | 已登录 | 进入“多集群 > 集群管理” | 页面可打开，列表或空态正常 | 页面可达，但 `Alias / Connection / Token expires / Clusters List` 未完全汉化 | Fail | 优先修表头与页签 |
| 集群 | `CL-M-01` Monitor | 已登录 | 打开 Monitor | 页面可达，状态信息正常 | `quorum con/mon`、`required con/mon` 术语错误 | Fail | 术语需统一 |
| 集群 | `CL-C-01` CRUSH Map | 已登录 | 打开 CRUSH Map | 结构数据可加载 | 详情 `Key / Value` 未汉化 | Fail | 公共 Key/Value 组件问题 |
| 集群 | `CL-CU-01` Ceph Users 列表 | 已登录 | 打开 Ceph Users | 列表、按钮、表单可用 | CRUD 表头、字段、按钮存在英文 | Fail | 动态 CRUD 映射不足 |
| 块存储 | `BL-02` 新建 RBD | 允许写操作 | 新建测试镜像 | 表单校验正确，文案中文 | 表单标题、字段占位、Set mode/Trash 相关文案有英文 | Fail | 影响高频创建链路 |
| 块存储 | `BL-NS-01` Namespace | 已登录 | 打开 Namespace | 页面可达，表单文案正确 | 关联表单和操作文案存在残留英文 | Fail | 需跟随公共动作统一修复 |
| 对象存储 | `RGW-U-01` User | 已登录 | 打开 User/创建页 | 列表、创建页、详情中文 | `Create User / User entity / Caps / Key / Account name` 有英文 | Fail | 动态 CRUD 与列表表头均需处理 |
| 对象存储 | `RGW-B-01` Bucket | 已登录 | 打开 Bucket | 列表、表单、提示中文 | `Number of Shards` 等表头未汉化 | Fail | 列表页问题 |
| 对象存储 | `RGW-T-01` Topic | 已登录 | 打开 Topic | 页面可达，列表中文 | `Amazon resource name` 未汉化 | Fail | 列表表头问题 |
| 对象存储 | `RGW-M-01` Multisite | 已登录 | 打开 Multisite 各页签 | 未配置引导、空态、按钮中文 | 未配置提示、Pipe/Flow 字段、Setup Multi-site Replication 等存在英文 | Fail | 长尾页面集中 |
| 对象存储 | `RGW-C-01` Configuration | 已登录 | 打开 Configuration | 页面可达，配置内容中文 | `Key Management Service Provider` 等字段未汉化 | Fail | 列表列名问题 |
| 文件存储 | `FS-02` 文件系统详情 | 存在文件系统 | 打开详情 | 字段、页签、状态正常 | `Rank`、`Key / Value` 残留英文 | Fail | 公共详情组件问题 |
| 文件存储 | `FS-SG-01` 子卷组 | 已登录 | 打开子卷组 | 列表与创建链路中文 | 侧边 `Groups` 与表单文案未完全汉化 | Fail | 导航标题问题 |
| 文件存储 | `FS-SV-01` 子卷 | 已登录 | 打开子卷 | 列表、详情、创建链路中文 | `Subvolumes`、删除确认等文案存在英文 | Fail | 列表与弹窗均受影响 |
| 文件存储 | `FS-SS-01` 快照调度 | 已登录 | 打开 Snapshot Schedule | 列表、启用提示、创建链路中文 | 模块启用提示和部分列名残留英文 | Fail | 包含动态动作文案 |
| 文件存储 | `FS-NFS-01` NFS | 已登录 | 打开 NFS | 列表、空态、创建页中文 | IP/主机名等列头局部英文 | Fail | 表头问题 |
| 文件存储 | `FS-SMB-01` SMB | 已登录 | 打开 SMB/创建页 | 页面、弹窗、表单中文 | SMB Share/Users&Groups 创建页标题与按钮存在英文 | Fail | 创建链路问题 |
| 可观测性 | `OBS-L-01` Logs | 已登录 | 打开 Logs | 列表、筛选、详情中文 | 页签/表头/过滤提示有英文 | Fail | 页面级文案 |
| 可观测性 | `OBS-A-01` Active Alerts | 已登录 | 打开 Active Alerts | 级别、计数、详情中文 | `Summary / Active Alerts / Source` 等高频词有英文 | Fail | 公共告警页问题 |
| 可观测性 | `OBS-S-02` Silences | 已登录 | 打开 Silences | 列表、空态、详情中文 | 页签、表头、提示存在英文，Grafana 时间选择器布局异常 | Fail | 含非翻译问题 |
| 用户与权限 | `AUTH-01` 管理员菜单 | 管理员账号 | 登录并进入用户管理 | 管理员菜单可见且中文 | 菜单可见，但用户/角色创建页标题、字段、按钮未完全汉化 | Fail | 管理链路问题 |
| 用户与权限 | `AUTH-03` 无权限 URL | 受限账号 | 直访无权限页面 | 正确提示或 403 | 当前账号能力不足，未完成闭环验证 | Blocked | 受限账号联调后补测 |

## 4. 缺陷清单

| 缺陷编号 | 级别(P0/P1/P2/P3) | 模块 | 页面/功能 | 问题描述 | 复现步骤 | 期望结果 | 实际结果 | 截图/备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| I18N-001 | P1 | 基础冒烟 | About 弹窗 | 产品版本与 Ceph 版本展示混淆 | 登录后打开 About | 清晰区分产品版本与 Ceph 基线版本 | 当前展示口径不清晰 | 影响 `SMK-09` |
| I18N-002 | P1 | 多集群 | 集群管理页 | 表头与页签未完全汉化 | 进入“多集群 > 集群管理” | `Alias / Connection / Token expires / Clusters List` 均为中文 | 页面存在英文表头与页签 | 影响 `MC-02` |
| I18N-003 | P1 | 集群 | Monitor | `quorum` 相关术语错译 | 打开 Monitor | 使用统一中文术语 | 仍显示英文或语义不一致 | 影响 `CL-M-01` |
| I18N-004 | P1 | 集群/文件存储 | CRUSH / CephFS 详情 | `Key / Value` 未汉化 | 打开 CRUSH、CephFS 详情 | 公共详情表头为中文 | 仍显示英文 | 公共组件缺陷 |
| I18N-005 | P1 | 集群 | Ceph Users CRUD | 动态表单标题、字段、按钮未汉化 | 打开 Ceph Users 新建/编辑 | 标题、字段、按钮均为中文 | 存在 `Create User / User entity / Caps / Key` 英文 | 影响 `CL-CU-01` |
| I18N-006 | P1 | 块存储 | RBD 创建页 | 创建链路文案未统一 | 打开 RBD 创建页 | 表单标题、占位、按钮中文 | 存在英文标题/占位/提示 | 影响 `BL-02` |
| I18N-007 | P1 | 对象存储 | RGW 多页面 | User/Bucket/Topic/Configuration 多页面表头与字段漏翻 | 分别进入 Users、Buckets、Topics、Configuration | 高风险字段均为中文 | 存在 `Account name / Number of Shards / Amazon resource name / Key Management Service Provider` 等英文 | 系统性问题 |
| I18N-008 | P1 | 文件存储 | 子卷组/子卷/快照调度/SMB | 文件存储长尾页面大量漏翻 | 进入相关页面及创建弹窗 | 列表、导航、弹窗、按钮中文 | `Groups / Subvolumes / SMB Share` 等仍为英文 | 影响 `FS-*` |
| I18N-009 | P1 | 用户与权限 | 用户/角色创建页 | 管理员侧创建页标题、placeholder、提交按钮未汉化 | 进入用户/角色创建页 | 表单标题与动作按钮中文 | 显示英文拼接标题和按钮 | 影响 `AUTH-01` |
| I18N-010 | P2 | 可观测性 | Logs/Alerts/Silences | 页签、表头、提示存在英文残留 | 打开可观测性各页 | 高频词统一中文 | `Summary / Active Alerts / Silences / Source` 等英文残留 | 影响 `OBS-*` |
| UI-011 | P2 | 可观测性 | Grafana 时间选择器 | 时间选择器布局异常 | 打开 Grafana 嵌入页 | 时间选择器完整可用 | 选择器布局错位、可用性差 | 非翻译问题，需样式修复 |

## 5. 阻塞项清单

| 模块 | 页面/功能 | 阻塞原因 | 需要补齐的环境/权限 | 备注 |
| --- | --- | --- | --- | --- |
| 用户与权限 | `AUTH-03` 无权限 URL | 当前联调未完成受限账号闭环验证 | 受限账号与权限矩阵 | 本轮先收管理员路径 |
| 多集群 | `MC-03` 未配置提示 | 部分场景依赖实际多集群空态/托管态配置 | 测试环境多集群配置切换 | 当前已有部分静态提示可验证 |

## 6. 结论

### 6.1 是否通过验收

- [ ] 通过
- [x] 有条件通过
- [ ] 不通过

### 6.2 结论说明

- `P0` 数量：0
- `P1` 数量：9
- `P2` 数量：2
- `P3` 数量：0
- `Blocked` 数量：2

### 6.3 后续动作

- 待修复问题：按“公共组件 -> 高频页面 -> 长尾页面”完成汉化收敛
- 待补齐环境：受限账号、部分多集群空态切换能力、线上部署验证链路
- 建议复测范围：`SMK-09`、`SMK-11`、`SMK-12`、`MC-02`、`CL-M-01`、`CL-C-01`、`CL-CU-01`、`BL-02`、`BL-NS-01`、`RGW-U-01`、`RGW-B-01`、`RGW-T-01`、`RGW-M-01`、`RGW-C-01`、`FS-02`、`FS-SG-01`、`FS-SV-01`、`FS-SS-01`、`FS-NFS-01`、`FS-SMB-01`、`OBS-L-01`、`OBS-A-01`、`OBS-S-02`、`AUTH-01`、`AUTH-03`

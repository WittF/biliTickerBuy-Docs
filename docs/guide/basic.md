# 基础配置

## 安装

### 环境要求
- 支持的操作系统：
  - Windows (AMD64)
  - macOS (Intel/ARM64)
  - Linux (AMD64/ARM64)

### 下载安装
1. 根据您的系统架构选择对应的版本：

**Windows**
- AMD64: `biliTickerBuy_windows_amd64_v2.11.0-patch.1.zip`

**macOS**
- Intel: `biliTickerBuy_macos_intel_v2.11.0-patch.1.zip`
- ARM64 (M1/M2): `biliTickerBuy_macos_arm64_v2.11.0-patch.1.zip`

**Linux**
- AMD64: `biliTickerBuy_linux_amd64_v2.11.0-patch.1.zip`
- ARM64: `biliTickerBuy_linux_arm64_v2.11.0-patch.1.zip`

2. 解压下载的文件
```bash
# Windows
使用解压工具解压

# macOS/Linux
unzip biliTickerBuy_<系统>_<架构>_v2.11.0-patch.1.zip
```

3. 进入解压后的目录
```bash
cd biliTickerBuy
```

## 基本配置

### 配置文件
在项目根目录创建 `config.yaml` 文件，基本配置如下：

```yaml
cookie: "你的B站cookie"
target_id: "目标票务ID"
```

### 必要参数说明
- `cookie`: B站登录后的cookie信息
- `target_id`: 要抢购的票务ID

## 运行

### 启动命令
```bash
# Windows
biliTickerBuy.exe

# macOS/Linux
./biliTickerBuy
```

### 运行状态
程序运行时会显示以下信息：
- 登录状态
- 目标票务信息
- 抢票进度

## 注意事项
1. 请确保下载的版本与您的系统架构匹配
2. 请确保cookie有效
3. 建议提前测试配置是否正确
4. 请遵守B站的使用规则 
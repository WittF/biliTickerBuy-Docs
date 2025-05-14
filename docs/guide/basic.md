# 基础配置

## 安装

### 环境要求
- Python 3.8 或更高版本
- pip 包管理器

### 安装步骤
1. 克隆仓库
```bash
git clone https://github.com/W1ttF/biliTickerBuy.git
cd biliTickerBuy
```

2. 安装依赖
```bash
pip install -r requirements.txt
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
python main.py
```

### 运行状态
程序运行时会显示以下信息：
- 登录状态
- 目标票务信息
- 抢票进度

## 注意事项
1. 请确保cookie有效
2. 建议提前测试配置是否正确
3. 请遵守B站的使用规则 
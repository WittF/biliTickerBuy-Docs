---
title: 安装
description: B站抢票工具安装指南
---

# 安装指南

本页面提供了在不同操作系统上安装B站抢票工具的详细步骤。

## Windows 安装

1. 访问 [GitHub Releases](https://github.com/mikumifa/biliTickerBuy/releases) 页面
2. 下载最新版本的 `biliTickerBuy-windows-x64.zip`
3. 解压下载的文件
4. 运行 `biliTickerBuy.exe`

::: warning 注意事项
- 如果遇到安全软件拦截，请将程序添加到白名单
- 如果文件被Windows Defender隔离，请参考[恢复被隔离的文件](https://blog.csdn.net/xitongzhijia_abc/article/details/125373425)
:::

## macOS 安装

1. 访问 [GitHub Releases](https://github.com/mikumifa/biliTickerBuy/releases) 页面
2. 根据你的CPU类型选择对应的版本：
   - Intel芯片：下载 `biliTickerBuy-macos-x64.zip`
   - Apple Silicon：下载 `biliTickerBuy-macos-arm64.zip`
3. 解压下载的文件
4. 运行 `biliTickerBuy` 可执行文件

::: warning 注意事项
如果遇到"无法打开"的提示，请参考[macOS无法打开解决方案](https://blog.csdn.net/qq_44633541/article/details/123191328)
:::

## Linux 安装

1. 访问 [GitHub Releases](https://github.com/mikumifa/biliTickerBuy/releases) 页面
2. 下载 `biliTickerBuy-linux-x64.zip`
3. 解压下载的文件
4. 运行 `biliTickerBuy` 可执行文件

## Docker 安装

如果你熟悉Docker，可以使用以下命令安装和运行：

```bash
# 克隆项目
git clone https://github.com/mikumifa/biliTickerBuy.git

# 进入项目目录
cd biliTickerBuy

# 构建Docker镜像
docker build -t bilitickerbuy .

# 运行Docker容器（可以修改端口号）
docker run -d -p 7860:7860 --name bilitickerbuy_container bilitickerbuy
```

## 下载速度慢？

如果从GitHub下载速度较慢，可以尝试以下方法：
1. 使用国内镜像源
2. 使用下载工具
3. 参考[加速下载方案](https://blog.csdn.net/qq_42009262/article/details/106992684)

## 下一步

完成安装后，请查看[快速开始](/guide/getting-started)了解如何使用本工具。 
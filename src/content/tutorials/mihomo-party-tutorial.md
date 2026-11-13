---
title: "Mihomo Party 新手极速上手配置教程（Windows/macOS）"
description: "针对 2026 最新开源代理核心 Mihomo Party 的新手图文教程。一步步指导客户端下载安装、订阅链接导入、分流规则配置、DNS 防泄漏及虚拟网卡 TUN 模式启用，解决各类常见连接与报错问题。"
pubDate: "2026-03-15"
author: "节点研究所"
category: "客户端配置"
platform: "Windows / macOS"
tags: ["Mihomo", "Clash内核", "Windows教程", "TUN模式"]
featured: true
seoTitle: "Mihomo Party配置教程：订阅导入、覆写与TUN模式调优指南"
seoDescription: "针对 2026 最新开源代理核心 Mihomo Party 的新手图文教程。一步步指导客户端下载安装、订阅链接导入、分流规则配置、DNS 防泄漏及虚拟网卡 TUN 模式启用，解决各类常见连接与报错问题。"
seoKeywords: "Mihomo Party教程, Mihomo配置, 订阅导入, TUN模式, 规则覆写, Clash核心, 代理客户端, DNS防泄漏"
---

# Mihomo Party 新手极速上手配置教程

**Mihomo Party** 是 2025-2026 年最受好评的新一代科学上网客户端。相比传统 Clash for Windows，它拥有完全现代化的清爽 UI、原生集成 Mihomo (Clash Meta) 强大内核，且支持一键开启全局 TUN 虚拟网卡代理，即便是不支持系统代理的终端命令行或游戏也能轻松接管。

---

## 一、 客户端下载与安装

1. 打开官方开源发布页：[Mihomo Party GitHub Releases](https://github.com/mihomo-party-org/mihomo-party/releases)。
2. 根据您的操作系统下载对应安装包：
   - **Windows 用户**：下载 `Mihomo.Party-Setup-x.x.x.exe`。
   - **macOS 用户**：下载 `.dmg` 文件（Apple Silicon 芯片选 aarch64，Intel 芯片选 x64）。
3. 双击完成安装，并授予必要的网络权限。

---

## 二、 导入机场订阅链接

1. 登录您购买的机场后台，在用户中心找到 **「一键导入」** 或 **「复制订阅地址」**。
2. 推荐选择 **Clash 订阅** 或 **通用订阅**。
3. 打开 Mihomo Party 客户端：
   - 点击左侧导航栏的 **「订阅 (Profiles)」** 图标。
   - 在顶部输入框粘贴刚才复制的订阅 URL。
   - 点击右侧的 **「导入」** 按钮。
4. 订阅下载完成后，点击选中该订阅配置卡片即可生效。

---

## 三、 节点选择与分流模式

在左侧导航栏切换到 **「节点 (Proxies)」**：
- **规则模式 (Rule)**：**强烈推荐**。访问国内网站（百度、淘宝、微信）直连，访问国外受限网站（Google、YouTube、ChatGPT）自动通过节点走代理。
- **全局模式 (Global)**：所有流量一律走代理节点（一般用于特定测试）。
- **直连模式 (Direct)**：不走任何代理。

在 **「节点选择」** 策略组中，您可以点击右上角的测速按钮，挑选延迟最低（绿色）的 IPLC/IEPL 专线节点使用。

---

## 四、 开启 TUN 虚拟网卡模式（解决命令行与游戏代理）

许多国外客户端（如 Git 命令行、部分 Steam 游戏、Telegram 桌面版）默认不遵循系统的 HTTP 代理设置。此时只需开启 TUN 模式：

1. 进入 Mihomo Party 的 **「设置 (Settings)」** 页面。
2. 找到 **「TUN 模式」** 选项。
3. 首次开启时，客户端会提示安装虚拟网卡驱动（系统会弹出管理员授权，点击允许即可）。
4. 开启后，整台电脑的所有网络流量都会自动接入分流引擎，真正做到全局无死角加速。

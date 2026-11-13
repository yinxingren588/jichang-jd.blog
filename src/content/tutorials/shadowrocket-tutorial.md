---
title: "iOS 小火箭（Shadowrocket）新手配置全流程"
description: "iOS 平台经典翻墙利器小火箭（Shadowrocket）详尽使用手册。指导美区 Apple ID 获取、节点订阅链接添加与自动更新、分流场景规则配置以及证书解密 HTTPS 流量实操要点。"
pubDate: "2026-03-01"
author: "节点研究所"
category: "客户端配置"
platform: "iOS / iPadOS"
tags: ["iOS", "小火箭", "Shadowrocket", "苹果手机"]
featured: true
seoTitle: "Shadowrocket小火箭配置教程：iOS节点导入与规则分流技巧"
seoDescription: "iOS 平台经典翻墙利器小火箭（Shadowrocket）详尽使用手册。指导美区 Apple ID 获取、节点订阅链接添加与自动更新、分流场景规则配置以及证书解密 HTTPS 流量实操要点。"
seoKeywords: "Shadowrocket教程, 小火箭配置, iOS节点导入, 订阅更新, 分流规则, 证书解密, 苹果科学上网"
---

# iOS 小火箭（Shadowrocket）新手配置全流程

Shadowrocket（俗称“小火箭”）是 iOS 生态最流行、最易用的网络代理工具。

---

## 一、 如何下载小火箭？

因为众所周知的政策原因，Shadowrocket 无法在中国大陆区 App Store 下载，需要准备一个**美区（或其它非国区）Apple ID**：
1. 在手机 App Store 中退出当前大陆账号，登录美区 Apple ID。
2. 搜索 `Shadowrocket`（开发者为 PanGuoJian，注意甄别盗版山寨软件）。
3. 购买并下载（价格一般为 \$2.99 美元）。

---

## 二、 订阅导入方式

### 方法 A：一键导入（最推荐）
在 Safari 浏览器中登录您的机场用户中心，点击 **「导入到 Shadowrocket」**，系统会自动拉起小火箭并完成节点同步。

### 方法 B：二维码扫码导入
打开小火箭，点击左上角的 **「扫描」** 图标，对准机场后台提供的节点订阅二维码扫一扫即可。

### 方法 C：手动添加 URL
1. 点击右上角 **「+」** 号。
2. 类型选择 **「Subscribe」**（订阅）。
3. 在 URL 栏粘贴机场提供的订阅链接，备注写机场名字，点击右上角保存。

---

## 三、 全局路由设置

在小火箭首页下方，找到 **「全局路由」**：
- 默认请选择 **「配置」**（智能分流模式）：国内直连，国外走节点代理。
- 不要选「代理」（那是全局走代理，会导致国内 App 变慢甚至无法加载本地外卖/银行）。
- 点击最上方的开关开启代理，首次连接时系统会提示「添加 VPN 配置」，使用面容或指纹确认即可。

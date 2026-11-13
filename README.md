# V机场节点推荐 - 机场节点与测速评测博客框架

专为**机场推荐、测速横评、科学上网客户端配置教程、Affiliate返利引流**定制的现代高性能博客系统。基于 **Astro 5 + Tailwind CSS** 构建，原生具备毫秒级加载速度、极致 SEO 表现以及丰富的转化引流组件。

---

## ✨ 核心特性

- ⚡ **极致加载速度**：Astro 孤岛架构，纯静态预渲染（SSG），Lighthouse 跑分接近 100 分。
- 🔍 **多维度交互式筛选器**：支持按「线路类型（IPLC专线/IEPL专线/BGP中继）」、「价格区间（¥15以下/¥15-30/高端住宅）」、「应用场景（ChatGPT/4K流媒体/稳定）」实时无刷新筛选机场。
- 🎫 **专属优惠码一键复制**：卡片与正文内自带「一键复制优惠码」，复制成功后自动触发全站 Toast 浮动提示，极大提升转化率。
- 📱 **全平台客户端教程中心**：预设 Windows (Mihomo Party / Clash Verge)、macOS、iOS (小火箭 Shadowrocket / 圈X)、Android、软路由全套教程体系与直达下载。
- 📊 **晚高峰测速天梯榜**：内置 20:00-22:00 极限压力测速、流媒体解锁报告模板。
- 🛡️ **安全与 SEO 保护**：推广外链全量配置 `rel="noopener noreferrer nofollow sponsored"`，防止站点权重分散；自带合规免责声明页面。
- ☁️ **零运维成本部署**：支持一键发布到 Cloudflare Pages、Vercel 或 GitHub Pages，全球免费 CDN 加速，抗攻击防封能力极强。

---

## 🚀 本地开发与启动

在当前项目根目录执行以下命令：

```bash
# 1. 启动本地开发服务器（支持热重载）
cmd /c "npm run dev"

# 2. 编译生产版本静态文件（输出至 /dist 目录）
cmd /c "npm run build"

# 3. 本地预览生产构建产物
cmd /c "npm run preview"
```

启动后，在浏览器访问控制台提示的地址（通常为 `http://localhost:4321`）即可实时预览站点。

---

## 📁 目录结构与日常更新指南

```text
jichang-jd.blog/
├── src/
│   ├── components/            # 核心 UI 与引流组件
│   │   ├── AirportCard.astro  # 单个机场卡片（带评分、流媒体标签、一键复制、直达开通）
│   │   ├── AirportFilter.astro# 交互式即时筛选器与卡片容器
│   │   ├── ClientTutorials.astro # 全平台客户端卡片模块
│   │   ├── FaqSection.astro   # 新手选购常见问题（SEO 问答收录）
│   │   ├── Header.astro       # 顶部导航（含暗黑模式切换）
│   │   ├── Footer.astro       # 页脚与版权/免责声明
│   │   └── Toast.astro        # 全站浮动提示（复制成功提示）
│   │
│   ├── content/               # Markdown 文章内容库
│   │   └── tutorials/         # 教程与测速报告
│   │       ├── mihomo-party-tutorial.md       # Mihomo Party 新手教程
│   │       ├── clash-verge-rev-tutorial.md    # Clash Verge 教程
│   │       ├── shadowrocket-tutorial.md       # iOS 小火箭教程
│   │       └── speedtest-comparison-2026.md   # 晚高峰测速横向实测报告
│   │
│   ├── data/                  # 结构化配置数据
│   │   ├── airports.ts        # 机场推荐数据源（增删改查机场从这里操作）
│   │   └── clients.ts         # 客户端下载与版本数据源
│   │
│   ├── layouts/
│   │   └── Layout.astro       # 全站基础布局、SEO Meta 与 OpenGraph
│   └── pages/                 # 页面路由
│       ├── index.astro        # 博客首页
│       ├── disclaimer.astro   # 免责声明与合规告示页
│       └── tutorials/         # 教程列表页与详情动态页
│
├── dist/                      # 编译打包生成的纯静态页面（用于上线部署）
├── public/                    # 静态资源（Favicon 等）
├── astro.config.mjs           # Astro 配置文件
└── tailwind.config.mjs        # Tailwind CSS 配置文件
```

---

## 🛠️ 如何添加或修改机场推荐？

打开 [`src/data/airports.ts`](file:///c:/Users/user/Desktop/新团%20博客/jichang-jd.blog/src/data/airports.ts)，在 `airportsData` 数组中直接添加或修改对象即可：

```typescript
{
  id: 'speed-cloud',                  // 唯一标识
  name: '极速云（SpeedCloud）',         // 机场名称
  slogan: '全内网企业级 IPLC 专线...',   // 一句话特点介绍
  badge: '👑 年度综合推荐第一',          // 推荐角标
  badgeColor: 'amber',                // 角标颜色: amber | emerald | purple | indigo | rose
  featured: true,                     // 是否置顶
  rating: 4.9,                        // 评分（最高 5.0）
  reviewCount: 382,                   // 评价人数
  lineType: 'IPLC专线',                // 线路类型: 'IPLC专线' | 'IEPL专线' | 'BGP中继'
  price: 18.8,                        // 起步价格（数字）
  billingCycle: '元/月起',             // 计费周期展示
  traffic: '150GB / 月起',            // 流量规格
  protocols: ['Shadowsocks', 'Trojan', 'VLESS'], // 支持协议
  streaming: ['ChatGPT 4o', 'Netflix', 'Disney+', 'TikTok'], // 解锁支持
  speedPeak: '1000Mbps 千兆满载',      // 晚高峰实测峰值速率
  discount: '年付享 8 折优惠',          // 折扣文案
  couponCode: 'SPEED2026',            // 专属优惠码（支持一键点击复制）
  affUrl: 'https://你的返利链接.com',   // 推广返利链接
  desc: '详细评测简述...',
  pros: [                             // 优势要点
    '全专线低延迟，晚高峰延迟稳定性极佳',
    '全解锁 Netflix/Disney+/ChatGPT',
  ],
  tags: ['iplc', 'chatgpt', 'streaming', 'stable'], // 筛选标签
}
```

---

## 📝 如何发布新的客户端教程或测速报告？

直接在 [`src/content/tutorials/`](file:///c:/Users/user/Desktop/新团%20博客/jichang-jd.blog/src/content/tutorials/) 目录下新建 `.md` 文件，头部添加 Frontmatter 元信息即可自动生成文章页面和路由：

```markdown
---
title: "你的教程标题"
description: "文章一句话导读..."
pubDate: "2026-03-25"
author: "节点研究所"
category: "客户端配置" # 或 "测速评测"
platform: "Windows / Android"
tags: ["Sing-box", "新协议", "测速"]
featured: true
---

# 这里直接用标准 Markdown 写作
文章内容会自动渲染排版，且底部会自动挂载「推荐稳定机场」引流转化模块。
```

---

## 🌐 免费一键上线部署（推荐 Cloudflare Pages）

1. **GitHub 托管**：
   - 将本项目代码推送到您的私有或公开 GitHub 仓库。
2. **连接 Cloudflare Pages**：
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) -> 选择 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**。
   - 选择该代码仓库。
3. **构建设置**：
   - **Framework preset（框架预设）**：选择 `Astro`
   - **Build command（构建命令）**：`npm run build`
   - **Build output directory（输出目录）**：`dist`
4. **绑定自定义域名**：
   - 部署完成后在 Cloudflare 绑定您的域名，Cloudflare 会自动为您签发免费 SSL 证书并开启全球 CDN 加速！

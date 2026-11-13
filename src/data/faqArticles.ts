// src/data/faqArticles.ts - 全部 24 篇 FAQ 独立精修技术文章数据仓库
export interface FaqSectionContent {
  title: string;
  paragraphs: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  tips?: string[];
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface FaqArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'line' | 'client' | 'ai' | 'purchase' | 'troubleshoot';
  categoryName: string;
  badge: string;
  pubDate: string;
  readTime: string;
  author: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  sections: FaqSectionContent[];
  relatedSlugs: string[];
}

export const faqArticles: FaqArticle[] = [
  // 1. IPLC / IEPL 专线
  {
    id: 'line-1',
    slug: 'iplc-iepl-dedicated-line-guide',
    title: '什么是 IPLC / IEPL 专线？为什么强烈推荐选择企业纯专线？',
    summary: '深入剖析 IPLC 物理电路与 IEPL 以太网专线的物理架构原理，解答内网专线如何实现脱离公网防火墙干扰、超低抖动与晚高峰极高稳定性。',
    category: 'line',
    categoryName: '线路与专线架构',
    badge: '专线物理架构',
    pubDate: '2026-11-13',
    readTime: '6 分钟精读',
    author: '网络协议实验室',
    tags: ['IPLC专线', 'IEPL专线', '晚高峰稳定性', '专线原理'],
    seoTitle: 'IPLC与IEPL专线有什么区别？企业内网专线优势深度解析',
    seoDescription: '深入剖析 IPLC 物理电路与 IEPL 国际以太网专线的物理架构差异。详解为什么内网专线能绕过公网防火墙干扰、保障晚高峰超低延迟与微秒级抖动，为高要求出海用户提供选购建议。',
    seoKeywords: 'IPLC专线, IEPL专线, 内网专线原理, 专线与中继区别, 晚高峰不卡顿, 企业跨境专线, 物理光纤专线',
    relatedSlugs: ['bgp-relay-vs-direct-difference', 'evening-peak-network-congestion-causes', 'vless-protocol-vs-vmess-comparison'],
    sections: [
      {
        title: '一、 IPLC 与 IEPL 的本质定义与物理走向',
        paragraphs: [
          '很多用户在选购机场时经常看到“IPLC”或“IEPL”的宣传字眼，但并不清楚它们与普通中继机场的物理区别。',
          'IPLC (International Private Leased Circuit，国际私有租用线路) 是点对点的物理光纤专线，如同两点之间铺设了一条专属高速公路；而 IEPL (International Ethernet Private Line，国际以太网专线) 则是基于二层以太网技术构建的纯内网连接，具有更高的协议扩展性和更现代的调度能力。',
          '它们最核心的共同特征是：**从国内机房入口到境外机房出口，全程完全在通信运营商的私有内网骨干光纤中传输**，物理上脱离了公共互联网（Public Internet）。'
        ],
        table: {
          headers: ['对比维度', '企业 IEPL / IPLC 纯专线', 'BGP 隧道中继', '普通公网直连 (单线VPS)'],
          rows: [
            ['传输路径', '运营商内网跨境光缆直连', '国内汇聚经公网出口隧道加密', '直接走公网国际骨干路由'],
            ['经过防火墙(GFW)', '❌ 100% 物理不过公网防火墙', '⚠️ 流量包裹加密后过公网出口', '⚠️ 裸面 GFW，极易被阻断'],
            ['晚高峰拥塞率', '0% (独享保障物理带宽)', '5% ~ 15% (受国际公网拥堵波及)', '20% ~ 40% (严重丢包断流)'],
            ['网络抖动 (Jitter)', '< 3ms (业界天花板极值)', '15ms ~ 35ms (轻微波动)', '50ms ~ 120ms (剧烈波动)'],
            ['敏感时期抗干扰', '完全不受任何外部封锁影响', '偶尔入口被探针嗅探需容灾', '直接大面积超时失联']
          ]
        }
      },
      {
        title: '二、 为什么严肃外贸办公与 4K 秒开必须依赖纯专线？',
        paragraphs: [
          '1. **晚高峰零拥塞**：普通宽带在晚高峰时段，国际骨干出口带宽被成千上万民用流量塞满，电信联通会自动开启 QoS 限速丢包；而企业 IEPL 专线采购的是独立专线资源，晚高峰跑分依然能稳稳跑满千兆。',
          '2. **数据零丢包**：对于观看 4K/8K 视频，一旦丢包率超过 3%，TCP 协议将频繁触发重传，造成画面反复缓冲转圈；纯专线零丢包特性确保 4K 进度条随意拖拽无等待。',
          '3. **AI 交互与外贸会话不掉线**：ChatGPT 4o 或跨国 Zoom 视频会议对短时断流极其敏感，专线低延迟低抖动保证会话连接长久存活。'
        ],
        tips: [
          '选购建议：本站独家主推的【隐形人】采用端到端企业级 IEPL 纯内网专线直连，全节点实测抖动低于 3ms，是目前体验最顶级的专线标杆。'
        ]
      }
    ]
  },

  // 2. BGP 中继与公网直连
  {
    id: 'line-2',
    slug: 'bgp-relay-vs-direct-difference',
    title: 'BGP 智能中继和普通公网直连有什么本质区别？',
    summary: '科普 BGP Anycast 智能多线路由与普通单线 VPS 之间的巨大差距，了解为什么优质中继能改善国内三网延迟。',
    category: 'line',
    categoryName: '线路与专线架构',
    badge: '技术原理解析',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '网络协议实验室',
    tags: ['BGP中继', '三网优化', '网络拓扑', '路由调度'],
    seoTitle: 'BGP中继与公网直连有什么区别？多线接入防丢包原理解析',
    seoDescription: '详细对比 BGP 智能中继与普通公网直连节点的技术实现。分析电信、联通、移动多线汇聚与智能故障切换如何降低跨境丢包，解释为何直连节点在高峰期容易出现断流与大面积延迟飙升。',
    seoKeywords: 'BGP中继, 公网直连, 节点线路对比, 智能多线接入, 跨网优化, 晚高峰丢包, 隧道加密传输',
    relatedSlugs: ['iplc-iepl-dedicated-line-guide', 'evening-peak-network-congestion-causes'],
    sections: [
      {
        title: '一、 BGP 路由协议的工作机制',
        paragraphs: [
          'BGP (Border Gateway Protocol，边界网关协议) 是互联网核心自治系统之间的动态路由协议。',
          '普通公网直连机场通常只在海外租用一台普通 VPS，国内电信、联通、移动用户直连该境外服务器。由于三网国际出口路由各不相同（例如移动走 CMI、电信走 163、联通走 4837），不同地区用户连接体验参差不齐，遇运营商网络抖动便直接瘫痪。',
          '而 BGP 智能中继在国内骨干机房部署了多线接入服务器，同时与电信、联通、移动建立 BGP 对等互联。'
        ]
      },
      {
        title: '二、 BGP 带来的三大核心体验升级',
        paragraphs: [
          '• **三网用户就近低延迟接入**：电信用户走电信骨干、联通走联通骨干，在机房内部汇聚，全国平均入口延迟降低 40% 以上；',
          '• **智能容灾自动切线**：当某条国际海底光缆突发故障中断时，BGP 路由器可在毫秒级自动切换至备用传输路径，用户几乎感知不到掉线；',
          '• **抗主动嗅探能力更强**：国内用户直接建立连接的是合规国内机房，境外敏感特征流量被包裹在内网隧道中，不易被 GFW 深度包检测识别。'
        ]
      }
    ]
  },

  // 3. 晚高峰降速原因
  {
    id: 'line-3',
    slug: 'evening-peak-network-congestion-causes',
    title: '为什么晚上（20:00-23:00）高峰期很多普通机场会严重降速甚至断网？',
    summary: '揭开国际出口骨干网晚高峰 QoS 限速、公网拥塞与超售机制的真相，教你避开晚高峰卡顿机场。',
    category: 'line',
    categoryName: '线路与专线架构',
    badge: '晚高峰必知',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '网络架构工程师',
    tags: ['晚高峰', 'QoS限速', '骨干网拥塞', '带宽超售'],
    seoTitle: '为什么晚高峰机场节点频繁卡顿降速？国际骨干网拥塞原因',
    seoDescription: '解析每晚 20:00 至 23:00 代理节点网络质量断崖式下跌的技术真相。探讨国际出海骨干网互联点带宽超售、运营商 QOS 限速策略及防火墙阻断机制，并提供针对性的专线换用方案。',
    seoKeywords: '晚高峰卡顿, 国际出口拥堵, 骨干网QOS, 节点延迟飙升, 晚高峰断流, 专线抗拥堵, 科学上网提速',
    relatedSlugs: ['iplc-iepl-dedicated-line-guide', 'speedtest-fast-but-4k-buffers-reasons'],
    sections: [
      {
        title: '一、 晚高峰三大降速幕后推手',
        paragraphs: [
          '每晚 20:00 至 23:00 是全国网民娱乐、追剧、打游戏的高峰时段，国际互联网出境流量达到全天的峰值。普通机场在此期间崩盘的主要原因有三点：',
          '1. **国际公网出口 QoS 劣化**：基础运营商在出口带宽达到 90% 警戒线时，会对非企业级专线流量进行 QoS（服务质量）降级处理，主动丢弃部分 UDP/TCP 数据包；',
          '2. **机场主超售比例失控**：廉价机场往往采购 1Gbps 的公网中继带宽，却卖给 5000 甚至上万名用户。白天人少勉强能用，晚高峰所有人同时在线，人均带宽瞬间跌至几百 Kbps；',
          '3. **主动探测与阻断加剧**：高峰期 GFW 的规则引擎负载同步上升，加密特征明显的传统协议连接更容易被识别并下发 RST 阻断重置包。'
        ]
      },
      {
        title: '二、 如何彻底解决晚高峰降速？',
        paragraphs: [
          '唯一的根本解法是选择**不走公网国际出口的内网纯专线**（企业 IEPL / IPLC）。专线带宽物理独享，不受电信联通晚高峰公网调控影响，下行带宽与丢包率全天 24 小时保持一致稳定。'
        ]
      }
    ]
  },

  // 4. VLESS 协议 vs VMess
  {
    id: 'line-4',
    slug: 'vless-protocol-vs-vmess-comparison',
    title: '什么是轻量 VLESS 协议？相比传统 VMess 协议有什么优势？',
    summary: '从协议层开销、加密握手与客户端功耗角度，全方位解析为什么现代高阶机场全面转向轻量 VLESS 协议。',
    category: 'line',
    categoryName: '线路与专线架构',
    badge: '现代协议栈',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '网络协议实验室',
    tags: ['VLESS', 'VMess', '协议开销', 'CPU发热'],
    seoTitle: 'VLESS协议与VMess协议有什么区别？轻量代理协议性能对比',
    seoDescription: '深度解析新一代代理协议 VLESS 与经典 VMess 协议的核心区别。剖析 VLESS 去除双重加密、降低服务端与移动端 CPU 占用及引入 XTLS 流控黑科技的性能优势，指导客户端正确配置。',
    seoKeywords: 'VLESS协议, VMess协议, 代理协议对比, XTLS黑科技, 软路由减负, 协议性能评测, 节点加密方式',
    relatedSlugs: ['iplc-iepl-dedicated-line-guide', 'best-clients-windows-mac-ios-android'],
    sections: [
      {
        title: '一、 VMess 协议的历史局限',
        paragraphs: [
          'VMess 诞生于早年公网代理直接穿透防火墙的年代，为了对抗 GFW 嗅探，VMess 内部设计了极其复杂的命令认证头、时间戳校验与二次加密机制。',
          '然而，在当今普及企业 IEPL 纯内网专线的环境下，数据在物理内网传输本身已经 100% 安全。VMess 冗长的二次握手包反而带来了约 20%~30% 的额外网络开销，且大幅加重了客户端设备的加解密 CPU 负荷。'
        ]
      },
      {
        title: '二、 VLESS 带来的轻量级革命',
        paragraphs: [
          '• **开销大幅削减 65%**：VLESS 是无状态协议，去除了传统繁琐的自制加密与认证流程，将协议头缩减到极限；',
          '• **握手延迟减半**：连接首包即可携带真实请求，网页首次打开与流媒体首帧加载速度显著加快；',
          '• **移动设备降温省电**：手机或笔记本不再需要进行繁重的二次加解密运算，长时间挂载代理后台电量消耗直降 70%。'
        ]
      }
    ]
  },

  // 5. 节点倍率机制
  {
    id: 'line-5',
    slug: 'node-traffic-multiplier-explained',
    title: '节点倍率（1.0x、0.5x、5.0x）是什么意思？有什么选购避坑猫腻？',
    summary: '教你看穿不良机场以“超大流量”为幌子的高倍率吸血猫腻，为什么 1.0x 纯净计费才是良心标准。',
    category: 'line',
    categoryName: '线路与专线架构',
    badge: '避坑必看',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '评测实验室',
    tags: ['节点倍率', '流量陷阱', '计费猫腻', '选购避坑'],
    seoTitle: '节点倍率是什么意思？0.5x与5.0x倍率避坑与实际扣费揭秘',
    seoDescription: '全面揭露机场节点倍率扣费机制与商家的隐蔽套路。通俗计算 10GB 流量在不同倍率节点下的实际消耗，提醒警惕标榜大流量却暗设 5 倍甚至 10 倍高扣费节点的虚标行为，教你科学利用低倍率。',
    seoKeywords: '节点倍率, 机场倍率套路, 流量计算规则, 高倍率避坑, 0.5倍率节点, 机场计费陷阱, 订阅流量消耗',
    relatedSlugs: ['monthly-vs-yearly-airport-purchase-guide', 'cheap-unlimited-traffic-scam-analysis'],
    sections: [
      {
        title: '一、 倍率换算与扣除规则',
        paragraphs: [
          '节点倍率是机场计费面板中用于计算实际流量扣除的系数：',
          '• **1.0x 倍率（标准纯净）**：消耗 1GB 真实流量，面板精准扣除 1GB；',
          '• **0.5x 倍率（平价大流量）**：消耗 1GB 真实流量，面板仅扣除 0.5GB，适合下载大型文件；',
          '• **3.0x ~ 10.0x 倍率（高倍率节点）**：消耗 1GB 真实流量，面板扣除 3GB 甚至 10GB！'
        ]
      },
      {
        title: '二、 选购避坑：高倍率吸血陷阱',
        paragraphs: [
          '不良黑心机场最惯用的伎俩：低价宣传“1000GB 月度大流量”，但当您购买进入节点列表后，发现所有低延迟专线节点全部被标注为 5x 或 8x 倍率。',
          '这意味着原本的 1000GB，使用专线时实际只有 120GB~200GB 便告罄！本站主推的【隐形人】全节点明码标价，主力线路严格遵循 1.0x 纯净倍率，没有任何暗扣套路。'
        ]
      }
    ]
  },

  // 6. 客户端推荐全平台
  {
    id: 'client-1',
    slug: 'best-clients-windows-mac-ios-android',
    title: 'Windows / Mac / iOS / Android 分别推荐使用什么客户端最好用？',
    summary: '2026 最新全平台科学上网客户端横评推荐：Mihomo Party、Clash Verge Rev、小火箭 Shadowrocket 下载与选型全解。',
    category: 'client',
    categoryName: '客户端与订阅配置',
    badge: '小白必备',
    pubDate: '2026-11-13',
    readTime: '6 分钟精读',
    author: '终端软件评测组',
    tags: ['客户端推荐', 'Mihomo Party', 'Shadowrocket', 'Clash Verge Rev'],
    seoTitle: '全平台科学上网客户端推荐：Win/Mac/iOS/安卓选型指南',
    seoDescription: '汇总当前主流操作系统好用的代理客户端：Windows 与 Mac 首选现代直观的 Mihomo Party 与 Clash Verge Rev；iOS 平台必备小火箭 Shadowrocket；Android 首选 Surfboard 与 Clash Meta。',
    seoKeywords: '科学上网客户端, Mihomo Party, Clash Verge Rev, Shadowrocket小火箭, Surfboard, 安卓代理软件, 苹果翻墙工具',
    relatedSlugs: ['subscription-timeout-0ms-fix', 'tun-virtual-nic-mode-guide'],
    sections: [
      {
        title: '一、 Windows 平台首选推荐',
        paragraphs: [
          '1. **Mihomo Party（强烈推荐首选）**：基于现代 Electron + Vue 3 打造，界面极度清爽优美，内置 Clash.Meta 优质核心，原生支持 TUN 虚拟网卡模式，一键开启全系统代理，对新手极其友好。',
          '2. **Clash Verge Rev**：开源社区活跃主力维护版本，支持多种内核切换与强大自定义配置扩展脚本，适合高阶玩家。'
        ]
      },
      {
        title: '二、 macOS 平台推荐',
        paragraphs: [
          '• **Mihomo Party for Mac**：原生支持 Apple Silicon M1/M2/M3/M4 芯片架构，功耗极低，自带开机自启与全局路由接管；',
          '• **Clash Verge Rev for Mac**：兼容性强，支持系统状态栏紧凑小图标展示。'
        ]
      },
      {
        title: '三、 iOS / iPadOS 苹果移动端推荐',
        paragraphs: [
          '• **Shadowrocket（小火箭）**：iOS 生态事实上的行业标准工具。需使用非中国大陆区 Apple ID（如美区/港区）在 App Store 购买下载（\$2.99 一次性买断）。支持扫码一键导入节点、多订阅自动合并与规则分流；',
          '• **Stash**：界面精致高级，被称为 iOS 上的顶级 Clash 体验，功能更为全面。'
        ]
      },
      {
        title: '四、 Android 安卓平台推荐',
        paragraphs: [
          '• **Clash Meta for Android (CMFA)**：全面支持现代 VLESS / Hysteria 2 / Trojan 协议，分流精准，省电稳定；',
          '• **Flclash**：基于 Flutter 打造的现代化跨平台客户端，动画流畅。'
        ]
      }
    ]
  },

  // 7. 订阅超时 0ms 故障排查
  {
    id: 'client-2',
    slug: 'subscription-timeout-0ms-fix',
    title: '订阅链接导入客户端后，节点测速一直显示“Timeout / 超时”或“0ms”怎么解决？',
    summary: '节点全部超时爆红连不上？系统时间不同步、防火墙拦截、订阅过期与 DNS 污染 4 步终极排查修复指南。',
    category: 'client',
    categoryName: '客户端与订阅配置',
    badge: '高频故障排查',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '技术支持组',
    tags: ['Timeout', '节点超时', '0ms报错', '排障教程'],
    seoTitle: '节点测速全部超时Timeout或显示0ms？5步故障排查解决指南',
    seoDescription: '针对导入订阅后所有节点显示 Timeout 超时、测试延迟 0ms 或连接不上的典型故障。系统排查系统时间误差、本地 DNS 污染、订阅链接被阻断、核心未启动及代理端口冲突等五大诱因。',
    seoKeywords: '节点超时, 订阅连接失败, 延迟0ms, Clash报错, 系统时间同步, DNS污染排查, 节点不可用修复',
    relatedSlugs: ['proxy-residual-fake-offline-fix', 'wechat-works-google-fails-fix'],
    sections: [
      {
        title: '一、 第一杀手：本地系统时间未同步（占 70% 概率）',
        paragraphs: [
          '现代代理协议（如 VMess/VLESS/Trojan）在建立 TLS 加密握手时，要求客户端与服务端时间误差不得超过 60 秒。一旦电脑或手机时间偏快或偏慢 1 分钟，握手包校验便会直接被服务器丢弃，导致全节点超时！',
          '**修复步骤**：进入系统“设置 → 时间和语言 → 日期和时间”，手动点击“立即同步”按钮，并开启“自动设置时间”开关。'
        ]
      },
      {
        title: '二、 第二杀手：订阅链接已过期或未成功拉取',
        paragraphs: [
          '请打开机场官网后台，检查套餐是否已经到期，或者当月流量是否已经耗尽。进入客户端订阅列表，右键点击订阅链接选择“更新（Update）”，确保拉取到的节点数量大于 0。'
        ]
      },
      {
        title: '三、 第三杀手：杀毒软件或系统防火墙拦截本地端口',
        paragraphs: [
          '某些国内第三方安全卫士（如 360、火绒或电脑管家）会拦截代理客户端的本地监听端口（默认 7890）。请将客户端软件加入安全软件的白名单或暂时退出安全软件测试。'
        ]
      }
    ]
  },

  // 8. 规则分流 / 全局 / 直连模式
  {
    id: 'client-3',
    slug: 'proxy-modes-rule-global-direct-explained',
    title: '什么是规则分流（Rule）、全局模式（Global）与直连（Direct）？日常该怎么选？',
    summary: '详解三种核心代理运行模式的工作原理与最佳应用场景，教你如何既能海外秒开又不影响国内 App 速度。',
    category: 'client',
    categoryName: '客户端与订阅配置',
    badge: '分流优化',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '网络协议实验室',
    tags: ['规则分流', '全局模式', '直连模式', '日常使用'],
    seoTitle: '规则分流、全局模式与直连有什么区别？日常代理模式正确设置',
    seoDescription: '图文通俗讲解 Rule 规则分流、Global 全局代理与 Direct 直连模式的工作逻辑。指导如何实现国内网站直连秒开、海外服务自动加速，并避免误开全局导致境内账号异地登录异常与流量浪费。',
    seoKeywords: '规则分流, 全局模式, 直连模式, 分流规则设置, 国内直连, 代理模式选择, Clash分流配置',
    relatedSlugs: ['bypass-china-domestic-apps-slow-fix', 'tun-virtual-nic-mode-guide'],
    sections: [
      {
        title: '一、 三大模式核心区别',
        paragraphs: [
          '1. **规则分流（Rule / 强烈建议日常默认开启）**：客户端内置数万条智能分流规则与国内外域名数据库。访问百度、微信、淘宝、B站等国内应用自动直连，不走代理；访问 Google、YouTube、GitHub、ChatGPT 时才自动路由至代理节点。既省流量，又保证国内网站极速加载。',
          '2. **全局模式（Global）**：强制设备上发起的所有网络请求一律经过选定的境外代理节点。通常仅在外贸特定冷门软件分流规则未命中，或者排查网络连接故障时临时开启。',
          '3. **直连模式（Direct）**：所有网络流量完全不走任何节点，等同于关闭代理客户端。'
        ]
      }
    ]
  },

  // 9. 开启代理国内 App 变慢
  {
    id: 'client-4',
    slug: 'bypass-china-domestic-apps-slow-fix',
    title: '开启代理后，为什么微信、淘宝、抖音等国内 App 会变慢甚至打不开？',
    summary: '手把手教你解决国内网络被绕路减速的烦恼：GeoIP 数据库更新、Bypass CN 与白名单配置教程。',
    category: 'client',
    categoryName: '客户端与订阅配置',
    badge: '日常使用',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '终端软件评测组',
    tags: ['国内App变慢', 'Bypass CN', '分流排障', '微信延迟'],
    seoTitle: '开梯子后微信/淘宝变慢打不开？绕过大陆流量优化设置教程',
    seoDescription: '彻底解决开启代理后微信图片发不出、淘宝打不开、网易云音乐灰歌等痛点。指导配置 GeoIP 数据库、正确启用绕过大陆（Bypass LAN & Mainland）规则及修复 DNS 导致的国内 CDN 绕路问题。',
    seoKeywords: '绕过大陆, 微信卡顿修复, 代理分流优化, 国内网站打不开, GeoIP规则, DNS解析污染, CDN加速修复',
    relatedSlugs: ['proxy-modes-rule-global-direct-explained', 'tun-virtual-nic-mode-guide'],
    sections: [
      {
        title: '一、 问题根源分析',
        paragraphs: [
          '当国内 App 变慢时，99% 的原因是因为：',
          '• 您误将代理模式设置成了“全局模式（Global）”，导致国内数据被送到香港或美国绕了一大圈再回来；',
          '• 客户端内置的 GeoIP（中国大陆 IP 数据库）版本陈旧，部分国内服务器 IP 未被正确识别为大陆直连。'
        ]
      },
      {
        title: '二、 解决与优化方案',
        paragraphs: [
          '1. 在客户端主界面将模式切换为【规则（Rule）】；',
          '2. 检查配置项，确保勾选了“绕过大陆 IP（Bypass CN）”或“大陆白名单”；',
          '3. 在设置中点击“更新 GeoIP 数据库”，拉取最新大陆 IP 网段。'
        ]
      }
    ]
  },

  // 10. TUN 虚拟网卡模式
  {
    id: 'client-5',
    slug: 'tun-virtual-nic-mode-guide',
    title: '什么是 TUN 虚拟网卡模式？打游戏、用特定桌面软件为什么要开 TUN？',
    summary: '全面科普 TUN 虚拟网卡底层接管机制，解决命令行 Terminal、Git、在线游戏及海外办公软件代理失效的难题。',
    category: 'client',
    categoryName: '客户端与订阅配置',
    badge: '进阶技能',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '网络架构工程师',
    tags: ['TUN模式', '虚拟网卡', '游戏加速', '终端代理'],
    seoTitle: '什么是TUN虚拟网卡模式？游戏联机与全流量托管配置指南',
    seoDescription: '详解 TUN 虚拟网卡模式在网络第三层接管系统全局流量的实现原理。说明其解决特定桌面应用不走系统代理、终端命令行翻墙受阻及外服联机游戏加速痛点的独特价值与配置开启方法。',
    seoKeywords: 'TUN模式, 虚拟网卡代理, 命令行代理, 游戏外服加速, 全局流量接管, Mihomo TUN, Clash网卡驱动',
    relatedSlugs: ['best-clients-windows-mac-ios-android', 'proxy-modes-rule-global-direct-explained'],
    sections: [
      {
        title: '一、 普通代理模式 vs TUN 模式的差异',
        paragraphs: [
          '普通代理模式通过配置操作系统自带的 HTTP/SOCKS5 代理端口（如 127.0.0.1:7890）实现。这种方式仅能接管 Chrome、Edge、Firefox 等主动遵循系统代理设置的浏览器软件。',
          '而对于 Git 命令行、CMD/PowerShell、Python 脚本、游戏客户端、Discord 语音或部分外贸 ERP 软件，它们根本不读取系统代理，流量依旧走本地裸连从而超时失败。'
        ]
      },
      {
        title: '二、 TUN 模式如何彻底解决痛点？',
        paragraphs: [
          'TUN (Tunnel) 模式在操作系统底层直接安装一块虚拟网卡（Virtual Adapter），从网络第 3 层（IP 网络层）直接接管整台设备进出的所有原始数据包并转发给内核分流。开启 TUN 后，您电脑上的所有软件无需进行任何代理设置，均能全自动享受智能加速。'
        ]
      }
    ]
  },

  // 11. ChatGPT 5秒盾与报错
  {
    id: 'ai-1',
    slug: 'chatgpt-claude-access-denied-cloudflare-fix',
    title: '为什么访问 ChatGPT / Claude 会频繁提示 Access Denied 或死循环验证码？',
    summary: '揭开机房公有云广播 IP 与商业住宅原生 IP 的本质风控差距，教你彻底解决 Cloudflare 5秒盾与 OpenAI 封号隐患。',
    category: 'ai',
    categoryName: 'AI生产力与流媒体',
    badge: 'AI必备',
    pubDate: '2026-11-13',
    readTime: '6 分钟精读',
    author: 'AI 安全研究组',
    tags: ['ChatGPT', 'Claude', 'Cloudflare 5秒盾', '住宅原生IP'],
    seoTitle: 'ChatGPT与Claude访问受限Access Denied？Cloudflare拦截解决',
    seoDescription: '针对访问 ChatGPT、Claude 频繁遇到 Access Denied、1020 报错或死循环人机验证的根本解决办法。深度解析 OpenAI 基于 Cloudflare IP 纯净度的风控机制，提供住宅原生 IP 节点选用方案。',
    seoKeywords: 'ChatGPT受限, Access Denied, Claude被封, Cloudflare拦截, 原生IP节点, 人机验证循环, AI节点解锁',
    relatedSlugs: ['residential-isp-ip-scam-score-explained', 'overseas-banking-paypal-proxy-safety'],
    sections: [
      {
        title: '一、 OpenAI 与 Claude 的风控底层机制',
        paragraphs: [
          'OpenAI 和 Anthropic 采购了 Cloudflare 顶级企业版安全防护服务。它们根据请求发起的出口 IP 类型对流量进行严格评分：',
          '• **机房广播 IP（Data Center / Hosting）**：AWS、阿里云、DigitalOcean 等公开云服务商的机房网段。由于黑客扫号机器人大量使用此类 IP，Cloudflare 会直接下发 Cloudflare Turnstile 5秒人机验证盾，严重时直接返回 1020 / Access Denied 报错并冻结账号；',
          '• **商业住宅原生双 ISP IP（Residential / ISP）**：属于境外当地电信运营商（如香港 HKT/HKBN、美国 AT&T/Comcast）分配给企业和家庭的真实宽带 IP，欺诈评分极低，享受绿灯通行，秒进 ChatGPT 4o。'
        ]
      },
      {
        title: '二、 彻底解除验证码的最佳实践',
        paragraphs: [
          '1. 选用明确承诺配备原生商业住宅 IP 的专线机场（如隐形人）；',
          '2. 固定使用同一个国家和地区的稳定节点，避免短时间内在香港、新加坡、美国之间频繁跳跃；',
          '3. 浏览器开启无痕隐私模式，清除带有风险标记的旧 Cookie。'
        ]
      }
    ]
  },

  // 12. 住宅原生 IP 与 Scam Score
  {
    id: 'ai-2',
    slug: 'residential-isp-ip-scam-score-explained',
    title: '什么是住宅原生双 ISP IP？Scam Score 欺诈分有什么用？',
    summary: '学会像专业工程师一样检测节点出口纯净度：IPinfo 归属查询、Scam Score 评分与双 ISP 原生属性全景解读。',
    category: 'ai',
    categoryName: 'AI生产力与流媒体',
    badge: '技术硬核',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: 'AI 安全研究组',
    tags: ['双ISP', 'Scam Score', '原生IP', 'IP纯净度'],
    seoTitle: '什么是住宅原生双ISP IP？Scam Score欺诈分检测与防封号解析',
    seoDescription: '通俗科普原生住宅 IP、机房 Hosting IP 与双 ISP 属性对海外账号防封的重要性。演示如何使用 IPinfo、Scamalytics 检测 IP 欺诈分，确保跨境电商运营、海外社媒养号与 AI 工具稳定使用。',
    seoKeywords: '住宅原生IP, 双ISP IP, Scam Score欺诈分, 机房IP区别, 跨境防封号, IP纯净度检测, Scamalytics',
    relatedSlugs: ['chatgpt-claude-access-denied-cloudflare-fix', 'netflix-disney-streaming-unlock-guide'],
    sections: [
      {
        title: '一、 什么是双 ISP 原生 IP？',
        paragraphs: [
          '在国际 IP 数据库查询中，IP 类型通常分为 Hosting（机房数据中心）与 ISP（互联网服务提供商）。“双 ISP 原生 IP”指的是该 IP 在 IP2Location 与 IPinfo 两大主流权威数据库中，ASN 与类型均被标记为纯正的当地家庭/商业 ISP，没有任何虚拟数据中心机房特征。'
        ]
      },
      {
        title: '二、 欺诈评分（Scam Score）指标解读',
        paragraphs: [
          '• **Scam Score 0 ~ 15 分（极佳）**：纯净无暇的绿标原生 IP，适合 AI 开发、跨国企业支付、跨境电商防关联；',
          '• **Scam Score 16 ~ 40 分（普通）**：日常浏览与看剧不受影响，但在某些高风控银行网站可能弹人机验证；',
          '• **Scam Score > 50 分（高危）**：已被列入垃圾邮件或机器人黑名单，随时触发各大平台风控。'
        ]
      }
    ]
  },

  // 13. 流媒体解锁
  {
    id: 'ai-3',
    slug: 'netflix-disney-streaming-unlock-guide',
    title: '为什么 Netflix 只能看自制剧？怎样才能看全部地区独播电影？',
    summary: '解析 Netflix 区域版权封锁策略与非自制剧屏蔽机制，教你识别真正支持 4K 原生解锁的优质专线节点。',
    category: 'ai',
    categoryName: 'AI生产力与流媒体',
    badge: '流媒体解锁',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '流媒体评测组',
    tags: ['Netflix解锁', 'Disney+', '流媒体版权', '4K秒开'],
    seoTitle: 'Netflix为什么只能看自制剧？流媒体4K全区解锁原理与节点选择',
    seoDescription: '揭秘 Netflix 仅展示自制剧 Originals 的核心诱因：版权 IP 库检测非原生代理。讲解如何挑选支持 DNS 解锁或原生住宅广播的节点，畅享非自制独播大片与 Disney+ 4K HDR 杜比视听体验。',
    seoKeywords: 'Netflix解锁, 流媒体节点, 只能看自制剧, Disney+解锁, 4K原生解锁, 非自制剧播放, 流媒体分流',
    relatedSlugs: ['speedtest-fast-but-4k-buffers-reasons', 'residential-isp-ip-scam-score-explained'],
    sections: [
      {
        title: '一、 Netflix 静默封锁机制',
        paragraphs: [
          'Netflix 购买的大多数好莱坞院线电影、热门日漫、韩剧均有严格的地域版权保护。当 Netflix 识别到您的节点来自普通海外机房时，为了防止被好莱坞片方起诉，它不会直接报错，而是会**静默屏蔽所有受版权保护的第三方影视库**，仅向您展示 Netflix 全球通用的自制原创剧（如《怪奇物语》、《鱿鱼游戏》）。',
          '如果您在搜索栏搜索《绝命毒师》或特定日漫无法找到，说明当前节点已被识别为机房代理，未实现完整解锁。'
        ]
      },
      {
        title: '二、 完整解锁的必要技术保障',
        paragraphs: [
          '高品质流媒体机场通过部署专线 DNS 智能分流与原生住宅出口，向 Netflix 认证服务器呈现合规家庭 IP，实现 Netflix 全区独家片库、Disney+ IMAX 增强版、HBO Max 与 YouTube 4K/8K HDR 无损秒开。'
        ]
      }
    ]
  },

  // 14. 境外银行支付安全
  {
    id: 'ai-4',
    slug: 'overseas-banking-paypal-proxy-safety',
    title: '使用代理节点登录海外银行、Stripe、PayPal 会被风控封号吗？',
    summary: '跨境出海从业者必备的金融防封指南：固定节点、静态住宅 IP 与环境隔离三大安全法则。',
    category: 'ai',
    categoryName: 'AI生产力与流媒体',
    badge: '出海金融',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '跨境合规专家',
    tags: ['PayPal风控', 'Stripe支付', '海外银行', '跨境安全'],
    seoTitle: '用代理登录海外银行与PayPal会封号吗？跨境金融安全防风控指南',
    seoDescription: '面向海淘与跨境出海群体的海外金融账户代理安全指南。详细解析常见银行（汇丰、Wise、Stripe、PayPal）的异地 IP 登录风控机制，指导如何锁定固定原生住宅 IP 与防止连接中途跳换。',
    seoKeywords: '海外银行代理, PayPal防封, Wise异地登录, Stripe风控, 固定IP节点, 跨境资金安全, 住宅IP防封',
    relatedSlugs: ['chatgpt-claude-access-denied-cloudflare-fix', 'residential-isp-ip-scam-score-explained'],
    sections: [
      {
        title: '一、 金融风控系统的核心监控点',
        paragraphs: [
          'PayPal、Stripe、Wise 以及美国商业银行（如 Chase、BOA）的实时反欺诈引擎对网络登录环境极度严苛。触发风控封账的主要原因包括：',
          '• **出口 IP 地址飘忽不定**：上午在香港 IP 登录，下午切换到了美国洛杉矶 IP，被系统判定为盗号入侵；',
          '• **万人共用黑名单机房 IP**：同网段存在其他用户进行黑产或欺诈交易，连带导致整段 IP 被风控；',
          '• **浏览器指纹与时区冲突**：代理出口在美国，但系统时区与浏览器语言暴露在东八区。'
        ]
      },
      {
        title: '二、 安全合规防护策略',
        paragraphs: [
          '1. 固定绑定单一优质纯专线节点（如隐形人的美国美西专线）；',
          '2. 使用指纹浏览器或独立虚拟环境，确保时区、语言与代理 IP 地理归属保持严格一致；',
          '3. 严禁使用任何公开的免费或低价共享节点进行敏感资产交易。'
        ]
      }
    ]
  },

  // 15. 月付 vs 年付防跑路
  {
    id: 'purchase-1',
    slug: 'monthly-vs-yearly-airport-purchase-guide',
    title: '新手选购应该选月付还是年付？怎么最大程度防跑路？',
    summary: '买机场如何避开跑路套路盘？新手首次体验的“阶梯式订阅”黄金法则与试错成本控制攻略。',
    category: 'purchase',
    categoryName: '选购防坑与套餐付费',
    badge: '核心避坑准则',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '评测实验室',
    tags: ['月付年付', '防跑路', '订阅策略', '新手必读'],
    seoTitle: '新手买机场选月付还是年付？防跑路与资金安全选购决策指南',
    seoDescription: '为科学上网新手提供客观的购买周期建议。深度对比月付、季付与年付的风险收益比，传授判断机场运营周期、储备备用小流量套餐及在优惠力度与资金安全之间取得平衡的科学选型方法。',
    seoKeywords: '机场月付还是年付, 机场防跑路, 订阅周期选择, 便宜年付风险, 备用节点购买, 科学上网避坑',
    relatedSlugs: ['cheap-unlimited-traffic-scam-analysis', 'airport-refund-policy-and-testing-tips'],
    sections: [
      {
        title: '一、 新手阶段：坚决执行“月付体验”',
        paragraphs: [
          '任何机场在不同地区、不同家庭宽带（电信/联通/移动）以及不同时间段的表现都存在客观差异。',
          '【避坑铁律】：初次接触任何新品牌，**坚决不要为了所谓的“年付7折”直接一次性付满一年**！务必先购买单月起步套餐（例如隐形人 ¥24/月 白银纪元），在自己平时的使用场景及晚高峰高负载时段完整体验 2 周以上。'
        ]
      },
      {
        title: '二、 进阶阶段：满意后再转季付或年付',
        paragraphs: [
          '当您连续体验一个月后，确认该机场节点在晚高峰没有丢包卡顿、客服工单响应及时，此时再在续费时选择季付或年付，叠加本站专属优惠码，才能稳稳享受折上折最大化性价比，且完全没有资金沉没风险。'
        ]
      }
    ]
  },

  // 16. 超低价年付陷阱
  {
    id: 'purchase-2',
    slug: 'cheap-unlimited-traffic-scam-analysis',
    title: '网上常见的“29元一年不限流量”低价机场靠谱吗？背后的商业陷阱是什么？',
    summary: '揭露低价垃圾机场跑路盘的运作逻辑：成本倒挂、高倍率超售与圈钱跑路套路全链条剖析。',
    category: 'purchase',
    categoryName: '选购防坑与套餐付费',
    badge: '套路揭秘',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '安全审计组',
    tags: ['低价陷阱', '跑路盘', '无限流量骗局', '商业逻辑'],
    seoTitle: '网上29元一年不限流量机场靠谱吗？低价超售与跑路内幕揭秘',
    seoDescription: '深度揭秘超低价“不限流量”机场背后的商业运作模型。分析百倍超售、租用廉价直连线路、随时卷款跑路的恶劣生态，说明为什么真正的高带宽物理专线必定有合理的流量与成本定价法则。',
    seoKeywords: '不限流量机场, 便宜机场陷阱, 机场跑路内幕, 超售严重, 垃圾中继直连, 免费节点套路, 机场成本核算',
    relatedSlugs: ['monthly-vs-yearly-airport-purchase-guide', 'node-traffic-multiplier-explained'],
    sections: [
      {
        title: '一、 带宽与服务器真实成本账本',
        paragraphs: [
          '商业网络带宽有其不可突破的硬性物理成本：真正合规的企业 IEPL 专线，每 1Gbps 端口月租费用高达上万元；正规 BGP 国内入口服务器每台月租亦需数千元。',
          '如果一个机场收费仅 29 元一年还声称“不限流量”，平均每个月仅收 2.4 元。从基础商业经济学来看，该机场**每多运营一个月，亏损额就成倍扩大**。'
        ]
      },
      {
        title: '二、 资金盘三大跑路收割步骤',
        paragraphs: [
          '1. **前期低价引流**：在各类论坛、Telegram 频道大量发布 20 多元一年的超低价年付广告，聚集上万名图便宜的羊毛党；',
          '2. **资金池见顶与瘫痪**：收割数十万元年付预付款后，服务器带宽严重拥堵，节点大面积飘红断流，客服停止回复工单；',
          '3. **关站换壳重生**：突然关闭网站失联跑路，几周后换一套域名和 UI 界面，重新包装成另一个新机场继续收割下一轮。'
        ]
      }
    ]
  },

  // 17. 支付方式与安全
  {
    id: 'purchase-3',
    slug: 'airport-payment-methods-safety-guide',
    title: '机场支持哪些支付方式？国内微信/支付宝付款安全吗？',
    summary: '全面解答机场结算安全疑惑：第三方免签约收银台的工作原理、个人信息脱敏及加密货币 USDT 支付建议。',
    category: 'purchase',
    categoryName: '选购防坑与套餐付费',
    badge: '支付安全',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '安全合规专家',
    tags: ['微信支付', '支付宝支付', 'USDT', '隐私安全'],
    seoTitle: '买机场支持哪些支付方式？微信支付宝与USDT虚拟币支付安全性',
    seoDescription: '系统分析购买代理服务时主流支付渠道的隐私与资金安全属性。解析正规第三方聚合支付通道如何阻断商家获取个人敏感信息，对比微信、支付宝与 USDT 加密货币支付在隐私保护上的差异。',
    seoKeywords: '机场支付方式, 微信买机场安全吗, 支付宝付款隐私, USDT虚拟币支付, 聚合发卡安全, 科学上网隐私',
    relatedSlugs: ['monthly-vs-yearly-airport-purchase-guide', 'exclusive-coupon-code-usage-guide'],
    sections: [
      {
        title: '一、 第三方支付网关的结算流程',
        paragraphs: [
          '正规主流机场一般接入第三方免签约支付收银台系统（如易支付、聚合扫码或国际商业结汇接口）。',
          '在整个支付过程中，您是在第三方合规支付网关内完成微信或支付宝扫码，支付账单抬头通常显示为普通商贸或数码技术服务商。机场主后台仅能接收到支付平台返回的订单流水号，**绝对无法获取您的银行卡号、支付宝账户或个人身份隐私**。'
        ]
      },
      {
        title: '二、 追求极致隐私的进阶方案：USDT 虚拟币',
        paragraphs: [
          '如果从业于高敏外贸或对个人隐私有严苛需求，部分主流机场支持通过 TRC20 / ERC20 通道使用 USDT 稳定币付款，全程去中心化流转，更加隐蔽安全。'
        ]
      }
    ]
  },

  // 18. 退款政策与试错
  {
    id: 'purchase-4',
    slug: 'airport-refund-policy-and-testing-tips',
    title: '购买套餐后如果用不习惯或者不会配置，可以申请退款吗？',
    summary: '虚拟网络带宽服务的退款行业惯例全解析，如何将试用成本降至最低以及售后维权注意事项。',
    category: 'purchase',
    categoryName: '选购防坑与套餐付费',
    badge: '售后政策',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '评测实验室',
    tags: ['退款政策', '工单支持', '试用建议', '售后维权'],
    seoTitle: '机场购买后能退款吗？退款政策门槛与小成本测试防坑技巧',
    seoDescription: '剖析主流机场对服务退款的行业通行规则（虚拟商品不退或扣除首月流量手续费）。指导用户在首次订购前优先挑选小额尝鲜包或月付套餐进行真机测速，确保满意后再考虑长期续费。',
    seoKeywords: '机场退款政策, 购买退款要求, 节点试用技巧, 虚拟商品售后, 机场踩坑维权, 先测后买攻略',
    relatedSlugs: ['monthly-vs-yearly-airport-purchase-guide', 'subscription-timeout-0ms-fix'],
    sections: [
      {
        title: '一、 虚拟商品行业的退款通则',
        paragraphs: [
          '由于网络节点属于即时消耗型数字虚拟资源，机场一旦开通账号，海外专线带宽成本便已发生。因此，行业内普遍约定：套餐一旦产生大量流量消耗，通常不支持无理由退款。',
          '但正规良心品牌（如隐形人）通常提供完善的售前工单与客服协助：如因本地运营商无法连通等技术客观原因且流量消耗极低时，支持在规定时效内通过工单友好协商处理。'
        ]
      }
    ]
  },

  // 19. 专属优惠码使用
  {
    id: 'purchase-5',
    slug: 'exclusive-coupon-code-usage-guide',
    title: '本站独家专享优惠码怎么使用？在哪里输入抵扣？',
    summary: '手把手结账流程图解：优惠码一键复制、结账抵扣框定位、折上折叠加与防失效操作技巧。',
    category: 'purchase',
    categoryName: '选购防坑与套餐付费',
    badge: '优惠码使用',
    pubDate: '2026-11-13',
    readTime: '3 分钟精读',
    author: '福利优惠专栏',
    tags: ['优惠码', '折上折', '结算抵扣', '立减折扣'],
    seoTitle: '机场优惠码怎么使用？独家折扣码输入与折上折省钱续费攻略',
    seoDescription: '详细图文指导如何在主流机场结账收银台正确输入独家折扣码。解答优惠码大小写报错、优惠码与年付折扣能否叠加及老用户续费如何享受限时折上折优惠等高频常见疑问。',
    seoKeywords: '机场优惠码, 折扣码怎么用, 隐形人优惠码, 机场续费折扣, 结账代码输入, 便宜科学上网, 优惠券抵扣',
    relatedSlugs: ['monthly-vs-yearly-airport-purchase-guide', 'airport-payment-methods-safety-guide'],
    sections: [
      {
        title: '一、 优惠码标准使用 4 步流程',
        paragraphs: [
          '1. 在本站对应推荐卡片或测速表格中，点击专享优惠码（如隐形人专属码：`yxr888`），系统将自动将代码复制到剪贴板；',
          '2. 点击“直达官网开通”按钮进入机场官方控制台，注册登录后进入“购买订阅”挑选对应周期的套餐；',
          '3. 在订单结算确认页面的“折价券 / 促销代码（Coupon Code）”输入框中粘贴刚才复制的代码；',
          '4. 点击右侧“验证 / 应用”按钮，看到页面总金额出现立减折扣后，再点击确认支付。'
        ]
      }
    ]
  },

  // 20. 假断网修复（系统代理残留）
  {
    id: 'troubleshoot-1',
    slug: 'proxy-residual-fake-offline-fix',
    title: '电脑关掉梯子后突然打不开任何网页，断网了怎么恢复？（系统代理残留排查）',
    summary: '新手最高频的“代理残留假断网”急救方案：Windows 代理设置与 Mac 代理网络一键复位教学。',
    category: 'troubleshoot',
    categoryName: '连接故障与排查',
    badge: '高频救急方案',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '技术支持组',
    tags: ['假断网', '代理残留', '127.0.0.1', '急救教程'],
    seoTitle: '关闭梯子后电脑无法上网？系统代理残留假断网一分钟修复教程',
    seoDescription: '针对客户端异常崩溃或未正常退出后，电脑提示“无法连接到代理服务器”的系统假断网问题。提供 Windows Internet 选项与 macOS 网络偏好设置中一键取消代理勾选的图文实操恢复步骤。',
    seoKeywords: '系统代理残留, 关梯子无法上网, 假断网修复, 代理服务器连接失败, Windows网络恢复, macOS代理关闭',
    relatedSlugs: ['wechat-works-google-fails-fix', 'subscription-timeout-0ms-fix'],
    sections: [
      {
        title: '一、 假断网的核心机理',
        paragraphs: [
          '很多用户在不用梯子时直接强制杀掉客户端进程或直接拔掉电源关机。此时代理客户端未来得及向 Windows/macOS 发送“注销系统代理”命令。',
          '系统底层依然保留了将全部 HTTP 流量转发给本地 `127.0.0.1:7890` 的配置。但该端口对应的代理内核已经关闭，导致所有浏览器打开网页均提示“连接被拒绝 / 无法连接到互联网”。'
        ]
      },
      {
        title: '二、 30秒一键修复方案',
        paragraphs: [
          '• **Windows 修复（极简）**：按下键盘 `Win + I` 打开系统设置 → 点击“网络和 Internet” → 点击左侧“代理” → 在手动设置代理下方，将【使用代理服务器】开关直接切换为“关”，网页立刻恢复秒开！',
          '• **macOS 修复**：打开“系统设置 → 网络 → Wi-Fi（或当前已连接网络）→ 详细信息 → 代理”，将页面中的“网页代理 (HTTP)”和“安全网页代理 (HTTPS)”前面的勾选框全部取消，点击“好”保存生效。'
        ]
      }
    ]
  },

  // 21. 微信通但国外网站不通
  {
    id: 'troubleshoot-2',
    slug: 'wechat-works-google-fails-fix',
    title: '为什么节点已连接成功，但只能发微信/QQ，打开 Google / YouTube 提示“无法访问此网站”？',
    summary: '国内网络畅通但外网不通？系统代理开关、DNS 污染与浏览器插件冲突的 3 步排障清单。',
    category: 'troubleshoot',
    categoryName: '连接故障与排查',
    badge: '常见排障',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '技术支持组',
    tags: ['能发微信打不开谷歌', '系统代理开关', 'DNS污染', '排查方案'],
    seoTitle: '为什么微信正常但Google打不开？节点已连却无法出海排查教程',
    seoDescription: '诊断节点显示延迟正常、微信可收发消息，但浏览器打开 Google 或 YouTube 提示“连接已重置”的典型场景。排查客户端系统代理是否开启、浏览器第三方插件冲突及 TUN 网卡路由冲突。',
    seoKeywords: '微信能用Google打不开, 节点连上网页打不开, 无法访问国外网站, 系统代理未接管, 浏览器代理冲突, 科学上网故障',
    relatedSlugs: ['proxy-residual-fake-offline-fix', 'tun-virtual-nic-mode-guide'],
    sections: [
      {
        title: '一、 第一步：检查客户端“系统代理”总开关',
        paragraphs: [
          '在 Mihomo Party 或 Clash Verge 中，仅启动软件并不代表系统已被接管。请确认软件主界面左下角的【系统代理（System Proxy）】开关已显示为高亮绿色开启状态。'
        ]
      },
      {
        title: '二、 第二步：检查浏览器是否安装了代理插件',
        paragraphs: [
          '如果 Chrome 或 Edge 安装了 SwitchyOmega 等第三方代理扩展，插件的优先级高于操作系统代理，容易出现规则覆盖导致海外网页无法加载。建议将插件设置为“系统代理”或暂时禁用。'
        ]
      },
      {
        title: '三、 第三步：检查节点是否已经超时',
        paragraphs: [
          '在节点列表中手动执行一次延迟测试，确保当前选中的节点延迟不是红色的“Timeout”，尝试手动切换至同地区的其他备用节点测试。'
        ]
      }
    ]
  },

  // 22. 测速高但 4K 依然卡顿
  {
    id: 'troubleshoot-3',
    slug: 'speedtest-fast-but-4k-buffers-reasons',
    title: '节点测速高达几百兆，但实际看 4K 视频依然频繁缓冲卡顿，这是为什么？',
    summary: '揭开突发带宽测试与持续高码率视频流的区别：网络抖动、TCP 重传丢包与伪千兆跑分的真相。',
    category: 'troubleshoot',
    categoryName: '连接故障与排查',
    badge: '性能真相',
    pubDate: '2026-11-13',
    readTime: '5 分钟精读',
    author: '流媒体技术组',
    tags: ['4K卡顿', '网络抖动', '丢包率重传', 'Speedtest真相'],
    seoTitle: '为什么节点测速几百兆但看4K依然卡顿？吞吐与缓冲瓶颈深度解析',
    seoDescription: '科学解释 Speedtest 测速跑满几百兆带宽，但在 YouTube 或 Netflix 上播放 4K/8K 视频仍不断转圈卡顿的底层技术原因。剖析 TCP 连接抖动、丢包重传延迟、缓存队列堆积与单线程性能瓶颈。',
    seoKeywords: '测速快但4K卡顿, 单线程速度, 节点抖动丢包, 视频缓冲慢, TCP拥塞控制, YouTube转圈, 机场虚标',
    relatedSlugs: ['iplc-iepl-dedicated-line-guide', 'evening-peak-network-congestion-causes'],
    sections: [
      {
        title: '一、 Speedtest 测速与 4K 视频的区别',
        paragraphs: [
          'Speedtest 或测速节点测试的是数秒钟内的单/多线程极限爆发吞吐，许多普通中继为了跑出好看的数据，给测速服务器配置了瞬时突发带宽。',
          '而在线观看 YouTube 或 Netflix 4K/8K 视频，考验的是长达数十分钟持续稳定的连续数据流传输。如果线路存在 5% 的持续丢包，TCP 拥塞控制算法会强制将传输窗口降至最低，导致视频缓冲停滞。'
        ]
      },
      {
        title: '二、 选购关键：关注抖动低于 3ms 的真专线',
        paragraphs: [
          '只有企业 IEPL 专线能够做到全程 0 丢包且网络抖动（Jitter）低于 3ms，确保高码率 4K/8K 流媒体长时间连续播放不转圈。'
        ]
      }
    ]
  },

  // 23. 突发断网敏感期自救
  {
    id: 'troubleshoot-4',
    slug: 'emergency-self-rescue-during-outages',
    title: '遇到敏感时期突发大面积节点超时失联，应该如何紧急自救？',
    summary: '面对网络波动与大面积断联的应急生存指南：订阅刷新、协议切换与双机场容灾备份策略。',
    category: 'troubleshoot',
    categoryName: '连接故障与排查',
    badge: '紧急自救',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '应急运维组',
    tags: ['大面积断网', '紧急自救', '容灾切换', '敏感时期'],
    seoTitle: '突发节点大面积超时断连？重大敏感时期备用连接应急自救指南',
    seoDescription: '针对特殊敏感时期公共网络阻断升级导致机场节点大面积超时的紧急自救策略。指导快速更新订阅拉取最新可用节点、开启备用应急线路，以及利用多协议客户端快速恢复海外关键生产力。',
    seoKeywords: '节点大面积超时, 敏感时期断连, 应急备用节点, 订阅更新失败, 机场失联自救, 科学上网紧急恢复',
    relatedSlugs: ['subscription-timeout-0ms-fix', 'monthly-vs-yearly-airport-purchase-guide'],
    sections: [
      {
        title: '一、 紧急自救三步法',
        paragraphs: [
          '1. **刷新订阅拉取应急节点**：优秀机场在骨干网波动时，会在后台几分钟内启用备用入口。在客户端右键订阅点击“更新订阅”，往往能立即拉取到最新修复的可用节点；',
          '2. **切换更强的抗封锁协议**：若 VMess 节点失效，切换至 VLESS、Hysteria 2 或 Trojan 节点尝试连接；',
          '3. **启用第二家备用通道（双机场策略）**：对于严肃出海办公与学术团队，永远不要把鸡蛋放在同一个篮子里。常备一家主力专线（如隐形人）+ 一家平价备用小机场，主备无缝切换保万无一失。'
        ]
      }
    ]
  },

  // 24. 在线设备数与软路由
  {
    id: 'troubleshoot-5',
    slug: 'simultaneous-device-limits-and-router-setup',
    title: '机场的“同时在线设备数限制”是什么意思？可以在软路由上使用吗？',
    summary: '搞懂设备并发连接数的统计规则，以及如何在 OpenWrt 路由器上实现全屋局域网设备免客户端科学上网。',
    category: 'troubleshoot',
    categoryName: '连接故障与排查',
    badge: '设备规则',
    pubDate: '2026-11-13',
    readTime: '4 分钟精读',
    author: '网络架构工程师',
    tags: ['设备限制', '软路由', 'OpenWrt', '局域网共享'],
    seoTitle: '机场同时在线设备数限制是什么？多设备共享与软路由配置指南',
    seoDescription: '全面剖析机场“限制 2-5 台设备同时在线”的技术判定规则（并发 IP 数检测与连接数统计）。讲解家庭与工作室如何利用软路由 OpenWrt 或透明网关统一分流，实现多设备不超标流畅共享。',
    seoKeywords: '设备数限制, 同时在线设备, 软路由分流, OpenWrt科学上网, 透明网关代理, 局域网共享梯子, 机场防踢出',
    relatedSlugs: ['tun-virtual-nic-mode-guide', 'best-clients-windows-mac-ios-android'],
    sections: [
      {
        title: '一、 设备数限制的真实含义',
        paragraphs: [
          '“限制 3 台设备”指的是**同一时间**发起外网连接的独立公网 IP 设备数量。如果家里有 5 台设备，但平时只有 2 台同时在线，完全不会受到限制；但当第 4 台设备同时发起外网请求时，会导致最先连接的设备被临时切断。'
        ]
      },
      {
        title: '二、 软路由多设备破限技巧',
        paragraphs: [
          '如果将订阅节点部署在 OpenWrt、ImmortalWrt 等软路由（通过 OpenClash 或 PassWall）上，由于全屋的手机、平板、电脑、电视盒子均连接路由器内网，在机场服务器端看来仅代表**路由器这 1 台设备**发起的出口连接，即可合规实现全屋数十台设备同时高速畅享。'
        ]
      }
    ]
  }
];

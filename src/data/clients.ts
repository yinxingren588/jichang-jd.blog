export interface ClientInfo {
  id: string;
  name: string;
  platform: 'Windows' | 'macOS' | 'iOS' | 'Android' | 'Router';
  version: string;
  tags: string[];
  difficulty: '新手极简' | '进阶玩家' | '极客专业';
  coreFeature: string;
  downloadUrl: string;
  guideSlug: string;
}

export const clientsData: ClientInfo[] = [
  {
    id: 'mihomo-party-win',
    name: 'Mihomo Party',
    platform: 'Windows',
    version: 'v1.5.8+',
    tags: ['当前最火', '颜值极高', 'Clash内核'],
    difficulty: '新手极简',
    coreFeature: '现代化极简 UI，内置一键导入订阅，支持规则分流与链式代理，2026 年最推荐的 Windows 客户端。',
    downloadUrl: 'https://github.com/mihomo-party-org/mihomo-party/releases',
    guideSlug: 'mihomo-party-tutorial',
  },
  {
    id: 'clash-verge-rev-win',
    name: 'Clash Verge Rev',
    platform: 'Windows',
    version: 'v2.0.0+',
    tags: ['经典开源', '稳定高效'],
    difficulty: '新手极简',
    coreFeature: '基于 Tauri 开发，内存占用极低，支持原生 Clash Meta (Mihomo) 内核，支持系统代理与 TUN 模式。',
    downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
    guideSlug: 'clash-verge-rev-tutorial',
  },
  {
    id: 'shadowrocket-ios',
    name: 'Shadowrocket（小火箭）',
    platform: 'iOS',
    version: '最新版',
    tags: ['iOS国民神器', '支持全协议'],
    difficulty: '新手极简',
    coreFeature: 'iOS 平台上下载量与普及率第一的代理工具，支持扫码导入订阅、按域名规则分流，操作极其容易上手。',
    downloadUrl: 'https://apps.apple.com/app/shadowrocket/id932747118',
    guideSlug: 'shadowrocket-tutorial',
  },
  {
    id: 'quantumult-x-ios',
    name: 'Quantumult X（圈X）',
    platform: 'iOS',
    version: '最新版',
    tags: ['脚本神器', '进阶必入'],
    difficulty: '进阶玩家',
    coreFeature: 'UI 优雅且支持强大重写与 JavaScript 脚本，适合对去广告、策略组有深度定制需求的 iOS 用户。',
    downloadUrl: 'https://apps.apple.com/app/quantumult-x/id1252047127',
    guideSlug: 'quantumult-x-tutorial',
  },
  {
    id: 'clash-meta-android',
    name: 'Clash Meta for Android',
    platform: 'Android',
    version: '最新稳定版',
    tags: ['安卓首选', '开源无广告'],
    difficulty: '新手极简',
    coreFeature: '原生支持 Mihomo 核心，完美兼容各类新协议，分应用代理、暗黑模式一应俱全。',
    downloadUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases',
    guideSlug: 'clash-meta-android-tutorial',
  },
  {
    id: 'v2rayn-win',
    name: 'v2rayN',
    platform: 'Windows',
    version: 'v7.0+',
    tags: ['老牌全能', '支持全协议'],
    difficulty: '进阶玩家',
    coreFeature: '经典 Windows 代理神器，原生支持 Xray、Sing-box 双内核，支持一键批量测速与自定义路由规则。',
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    guideSlug: 'v2rayn-tutorial',
  },
];

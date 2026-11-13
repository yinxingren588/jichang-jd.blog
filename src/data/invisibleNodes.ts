// invisibleNodes.ts - 隐形人 60 大在售核心专线节点官方实测全量数据
export interface InvisibleNode {
  id: string;
  name: string;
  region: '香港' | '台湾' | '日本' | '新加坡' | '美国';
  regionCode: 'HK' | 'TW' | 'JP' | 'SG' | 'US';
  flag: string;
  protocol: 'VLESS';
  port: string;
  latency: number | null; // ms
  multiplier: '1.0×';
  natType: 'FullCone UDP' | 'FullCone' | 'Symmetric';
  streaming: string[];
  status: 'online' | 'maintenance';
}

export const invisibleNodes: InvisibleNode[] = [
  // 香港核心枢纽节点（20个）
  { id: 'HK01', name: '[vless] 香港 01 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 31, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK02', name: '[vless] 香港 02 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 30, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK03', name: '[vless] 香港 03 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 31, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK04', name: '[vless] 香港 04 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 30, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK05', name: '[vless] 香港 05 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 27, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK06', name: '[vless] 香港 06 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 32, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK07', name: '[vless] 香港 07 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 31, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK08', name: '[vless] 香港 08 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 29, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK09', name: '[vless] 香港 09 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 29, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK10', name: '[vless] 香港 10 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 31, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK11', name: '[vless] 香港 11 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 27, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK12', name: '[vless] 香港 12 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 30, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK13', name: '[vless] 香港 13 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 30, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK14', name: '[vless] 香港 14 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 24, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK15', name: '[vless] 香港 15 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 26, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK16', name: '[vless] 香港 16 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 29, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK17', name: '[vless] 香港 17 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 25, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK18', name: '[vless] 香港 18 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 30, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK19', name: '[vless] 香港 19 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 25, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },
  { id: 'HK20', name: '[vless] 香港 20 - IEPL 专线', region: '香港', regionCode: 'HK', flag: '🇭🇰', protocol: 'VLESS', port: '443 / TLS', latency: 31, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['Netflix', 'Disney+', 'YouTube 4K'], status: 'online' },

  // 台湾流媒体直连节点（10个）
  { id: 'TW01', name: '[vless] 台湾 01 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 42, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW02', name: '[vless] 台湾 02 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 37, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW03', name: '[vless] 台湾 03 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 39, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW04', name: '[vless] 台湾 04 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 40, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW05', name: '[vless] 台湾 05 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 38, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW06', name: '[vless] 台湾 06 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 35, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW07', name: '[vless] 台湾 07 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 39, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW08', name: '[vless] 台湾 08 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 43, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW09', name: '[vless] 台湾 09 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 38, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },
  { id: 'TW10', name: '[vless] 台湾 10 - IEPL 直连', region: '台湾', regionCode: 'TW', flag: '🇹🇼', protocol: 'VLESS', port: '443 / TLS', latency: 35, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['动画疯', 'Line TV', 'Netflix'], status: 'online' },

  // 日本高速专线节点（10个）
  { id: 'JP01', name: '[vless] 日本 01 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 43, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP02', name: '[vless] 日本 02 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 47, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP03', name: '[vless] 日本 03 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 47, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP04', name: '[vless] 日本 04 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 47, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP05', name: '[vless] 日本 05 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 44, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP06', name: '[vless] 日本 06 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 47, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP07', name: '[vless] 日本 07 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 50, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP08', name: '[vless] 日本 08 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 50, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP09', name: '[vless] 日本 09 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 49, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },
  { id: 'JP10', name: '[vless] 日本 10 - BGP 专线', region: '日本', regionCode: 'JP', flag: '🇯🇵', protocol: 'VLESS', port: '443 / TLS', latency: 47, multiplier: '1.0×', natType: 'FullCone', streaming: ['Netflix', 'DMM', 'AbemaTV'], status: 'online' },

  // 新加坡亚太枢纽节点（10个）
  { id: 'SG01', name: '[vless] 新加坡 01 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 23, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG02', name: '[vless] 新加坡 02 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 17, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG03', name: '[vless] 新加坡 03 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 11, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG04', name: '[vless] 新加坡 04 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 17, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG05', name: '[vless] 新加坡 05 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 12, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG06', name: '[vless] 新加坡 06 - 极速核心', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 10, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG07', name: '[vless] 新加坡 07 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 11, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },
  { id: 'SG08', name: '[vless] 新加坡 08 - 热备冗余', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: null, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5'], status: 'maintenance' },
  { id: 'SG09', name: '[vless] 新加坡 09 - 热备冗余', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: null, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5'], status: 'maintenance' },
  { id: 'SG10', name: '[vless] 新加坡 10 - AI 生产力', region: '新加坡', regionCode: 'SG', flag: '🇸🇬', protocol: 'VLESS', port: '443 / TLS', latency: 17, multiplier: '1.0×', natType: 'FullCone UDP', streaming: ['ChatGPT', 'Claude 3.5', 'Gemini'], status: 'online' },

  // 美国原生落地节点（10个）
  { id: 'US01', name: '[vless] 美国 01 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 100, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US02', name: '[vless] 美国 02 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 100, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US03', name: '[vless] 美国 03 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 100, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US04', name: '[vless] 美国 04 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 98, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US05', name: '[vless] 美国 05 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 98, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US06', name: '[vless] 美国 06 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 101, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US07', name: '[vless] 美国 07 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 98, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US08', name: '[vless] 美国 08 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 98, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US09', name: '[vless] 美国 09 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 98, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
  { id: 'US10', name: '[vless] 美国 10 - 原生纯净', region: '美国', regionCode: 'US', flag: '🇺🇸', protocol: 'VLESS', port: '443 / TLS', latency: 102, multiplier: '1.0×', natType: 'Symmetric', streaming: ['OpenAI', 'Disney+', 'Hulu'], status: 'online' },
];

export const nodeSummary = {
  totalNodes: 60,
  activeNodes: 58,
  maintenanceNodes: 2,
  minLatency: '10 ms (新加坡 06)',
  medianLatency: '35 ms',
  testDate: '2026-11-13',
  testDateLabel: '2026年11月13日 (今日最新实测)',
  testEnv: '中国电信 1000M / Wi-Fi 6 / Windows 客户端晚高峰实测',
};

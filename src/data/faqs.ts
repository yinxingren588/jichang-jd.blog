// src/data/faqs.ts - 权威专业 2026 科学上网与机场节点常见问答数据库
import { faqArticles } from './faqArticles';

export interface FAQItem {
  id: string;
  slug: string;
  category: 'line' | 'client' | 'ai' | 'purchase' | 'troubleshoot';
  categoryName: string;
  question: string;
  answer: string;
  badge?: string;
  featured?: boolean;
}

export const faqCategories = [
  { key: 'all', name: '全部问答', icon: '📚' },
  { key: 'line', name: '线路与专线架构', icon: '🌐' },
  { key: 'client', name: '客户端与订阅配置', icon: '💻' },
  { key: 'ai', name: 'AI生产力与流媒体', icon: '🤖' },
  { key: 'purchase', name: '选购防坑与套餐付费', icon: '💰' },
  { key: 'troubleshoot', name: '连接故障与排查', icon: '🔧' },
];

export const faqData: FAQItem[] = faqArticles.map((art) => ({
  id: art.id,
  slug: art.slug,
  category: art.category,
  categoryName: art.categoryName,
  question: art.title,
  answer: art.summary + '\n\n' + art.sections[0]?.paragraphs?.join('\n\n'),
  badge: art.badge,
  featured: ['line-1', 'line-3', 'client-1', 'client-2', 'ai-1', 'purchase-1', 'troubleshoot-1'].includes(art.id),
}));

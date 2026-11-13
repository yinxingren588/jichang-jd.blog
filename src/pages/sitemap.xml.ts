import type { APIRoute } from 'astro';
import { faqArticles } from '../data/faqArticles';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://jichang-jd.blog';
  const currentDate = '2026-11-13';

  // 1. 核心母版页面
  const corePages = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { url: '/ranking', priority: '0.9', changefreq: 'daily', lastmod: currentDate },
    { url: '/airports/invisible-cloud', priority: '0.9', changefreq: 'daily', lastmod: currentDate },
    { url: '/speedtest', priority: '0.8', changefreq: 'daily', lastmod: currentDate },
    { url: '/tutorials', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/guide', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/faq', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/disclaimer', priority: '0.3', changefreq: 'monthly', lastmod: currentDate },
  ];

  // 2. 24 篇 FAQ 技术文章
  const faqPages = faqArticles.map((article) => ({
    url: `/faq/${article.slug}`,
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: article.pubDate || currentDate,
  }));

  // 3. 客户端与测速教程文章
  const tutorials = await getCollection('tutorials');
  const tutorialPages = tutorials.map((post) => {
    const slug = post.id.replace(/\.(md|mdx)$/, '');
    return {
      url: `/tutorials/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: post.data.pubDate || currentDate,
    };
  });

  const allUrls = [...corePages, ...faqPages, ...tutorialPages];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${siteUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

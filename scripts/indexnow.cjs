/**
 * Bing IndexNow 自动化即时推送脚本
 * 官方文档: https://www.indexnow.org/documentation
 */
const https = require('https');
const { faqArticles } = require('../src/data/faqArticles.ts');

const HOST = 'jichang-jd.blog';
const SITE_URL = `https://${HOST}`;
const API_KEY = 'edd9dc1f47e9eeac9db1fff660785d10';
const KEY_LOCATION = `${SITE_URL}/${API_KEY}.txt`;

// 36 个待推送的页面 URL 列表
const coreUrls = [
  '/',
  '/ranking',
  '/airports/invisible-cloud',
  '/speedtest',
  '/tutorials',
  '/guide',
  '/faq',
  '/disclaimer'
];

const faqUrls = faqArticles.map((a) => `/faq/${a.slug}`);

const tutorialUrls = [
  '/tutorials/mihomo-party-tutorial',
  '/tutorials/clash-verge-rev-tutorial',
  '/tutorials/shadowrocket-tutorial',
  '/tutorials/speedtest-comparison-2026'
];

const allUrls = [...coreUrls, ...faqUrls, ...tutorialUrls].map((path) => `${SITE_URL}${path}`);

const payload = {
  host: HOST,
  key: API_KEY,
  keyLocation: KEY_LOCATION,
  urlList: allUrls
};

console.log('======================================================');
console.log('🚀 准备向 Bing IndexNow 提交全站即时索引推送请求');
console.log(`- 目标域名: ${HOST}`);
console.log(`- API Key: ${API_KEY}`);
console.log(`- 密钥验证文件: ${KEY_LOCATION}`);
console.log(`- 待推送页面总数: ${allUrls.length} 个页面`);
console.log('======================================================\n');

function submitToIndexNow(endpointHost, endpointPath) {
  return new Promise((resolve) => {
    const postData = JSON.stringify(payload);

    const options = {
      hostname: endpointHost,
      port: 443,
      path: endpointPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'Bing-IndexNow-Client/1.0'
      },
      timeout: 10000
    };

    console.log(`📡 正在向 ${endpointHost}${endpointPath} 发送批量推送请求...`);

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        const statusCode = res.statusCode;
        console.log(`  ↪ 响应状态码: ${statusCode} ${res.statusMessage || ''}`);
        if (statusCode === 200) {
          console.log(`  ✅ 成功提交: Bing IndexNow 已成功接收并开始处理该批次 URL。`);
        } else if (statusCode === 202) {
          console.log(`  ✅ 成功接收 (202 Accepted): Key 正在比对验证中，稍后完成处理。`);
        } else if (statusCode === 400) {
          console.log(`  ⚠️ 400 Bad Request: 格式或参数错误。返回值: ${body}`);
        } else if (statusCode === 403) {
          console.log(`  ⚠️ 403 Forbidden: Key 无效或 keyLocation 无法访问（若尚未上线公网则属正常）。`);
        } else if (statusCode === 422) {
          console.log(`  ⚠️ 422 Unprocessable: 提交的 URL 与 host 域名不匹配。返回值: ${body}`);
        } else {
          console.log(`  ℹ️ 返回内容: ${body || '无额外返回文本'}`);
        }
        resolve({ host: endpointHost, statusCode, body });
      });
    });

    req.on('error', (err) => {
      console.error(`  ❌ 网络请求失败 (${endpointHost}): ${err.message}`);
      resolve({ host: endpointHost, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      console.error(`  ❌ 请求超时 (${endpointHost})`);
      resolve({ host: endpointHost, error: 'Timeout' });
    });

    req.write(postData);
    req.end();
  });
}

async function run() {
  // 同时提交给官方 IndexNow 统一端点及微软 Bing 独立端点
  await submitToIndexNow('api.indexnow.org', '/indexnow');
  console.log('');
  await submitToIndexNow('www.bing.com', '/indexnow');
  console.log('\n======================================================');
  console.log('🎉 推送脚本执行完毕！');
  console.log('📌 提示: 当网站部署上线到公网时，Bing 爬虫会自动拉取 keyLocation 验证文件完成握手。');
  console.log('======================================================');
}

run();

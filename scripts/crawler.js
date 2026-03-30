/**
 * 澳大利亚留学移民新闻爬虫
 * 爬取官方来源：Home Affairs, Study Australia, 各州政府
 */

const axios = require('axios');
const cheerio = require('cheerio');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// 官方来源配置
const SOURCES = {
  home_affairs: {
    name: '澳大利亚移民局',
    baseUrl: 'https://www.homeaffairs.gov.au',
    feeds: [
      '/news-and-media/latest-news',
      '/changes-visa-program',
    ]
  },
  study_australia: {
    name: 'Study Australia',
    baseUrl: 'https://www.studyaustralia.gov.au',
    feeds: [
      '/news',
    ]
  },
  immigration_nsw: {
    name: '新南威尔士州移民局',
    baseUrl: 'https://www.nsw.gov.au',
    feeds: [
      '/visas-and-migrants',
    ]
  },
  immigration_vic: {
    name: '维多利亚州移民局',
    baseUrl: 'https://www.vic.gov.au',
    feeds: [
      '/migration',
    ]
  },
};

// 关键词过滤 - 只保留相关内容
const KEYWORDS = [
  'student visa', 'subclass 500', '500 visa',
  'graduate', '485 visa', 'post-study work',
  'skilled', '189', '190', '491', 'state nomination',
  'migration', 'immigration', 'visa',
  'international student', 'study permit',
  'processing time', 'quota', 'policy change',
];

const EXCLUDE_KEYWORDS = [
  'china', 'chinese', 'hk', 'hong kong', 'taiwan',
  'advertisement', 'sponsored', 'promotion',
  'rumor', 'speculation', 'unconfirmed',
];

// 获取HTML内容
async function fetchPage(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 30000,
    });
    return cheerio.load(response.data);
  } catch (error) {
    console.log(`Error fetching ${url}: ${error.message}`);
    return null;
  }
}

// 检查是否包含相关关键词
function isRelevant(text) {
  const lowerText = text.toLowerCase();
  
  // 必须包含至少一个关键词
  const hasKeyword = KEYWORDS.some(k => lowerText.includes(k));
  if (!hasKeyword) return false;
  
  // 不能包含排除关键词
  const hasExclude = EXCLUDE_KEYWORDS.some(k => lowerText.includes(k));
  if (hasExclude) return false;
  
  return true;
}

// 提取文章内容
async function extractArticle(url, $) {
  // 从页面提取文章信息
  const title = $('h1').first().text().trim() || $('title').text().trim();
  const content = $('article, .content, .body, main').first().text().trim();
  const date = $('time, .date, [datetime]').first().attr('datetime') || new Date().toISOString();
  
  if (!title || title.length < 10) return null;
  if (!isRelevant(title + content)) return null;
  
  return {
    url,
    title,
    content: content.substring(0, 2000),
    date: new Date(date),
  };
}

// 主爬取函数
async function crawl() {
  console.log('🚀 开始爬取澳大利亚官方新闻...\n');
  
  const results = [];
  
  // 爬取各来源
  for (const [key, source] of Object.entries(SOURCES)) {
    console.log(`📰 爬取: ${source.name}`);
    
    for (const feed of source.feeds) {
      const url = source.baseUrl + feed;
      const $ = await fetchPage(url);
      
      if ($) {
        // 提取文章链接
        const links = [];
        $('a[href]').each((i, el) => {
          const href = $(el).attr('href');
          if (href && href.includes('/news') || href.includes('/media')) {
            links.push(href.startsWith('http') ? href : source.baseUrl + href);
          }
        });
        
        console.log(`  - 发现 ${links.length} 篇文章`);
        
        // 逐个爬取文章
        for (const link of links.slice(0, 5)) {
          const article$ = await fetchPage(link);
          if (article$) {
            const article = await extractArticle(link, article$);
            if (article) {
              results.push({
                ...article,
                source: source.name,
              });
            }
          }
        }
      }
    }
  }
  
  console.log(`\n✅ 爬取完成，共获取 ${results.length} 篇相关文章`);
  return results;
}

// 存储到数据库
async function saveToDatabase(articles) {
  console.log('\n💾 保存到数据库...');
  
  for (const article of articles) {
    try {
      // 检查是否已存在
      const exists = await prisma.article.findFirst({
        where: {
          title: article.title,
        },
      });
      
      if (!exists) {
        await prisma.article.create({
          data: {
            title: article.title,
            summary: article.content.substring(0, 200),
            content: article.content,
            impact: '请查看原文',
            source: article.source,
            sourceUrl: article.url,
            tags: ['澳洲留学', '签证政策'],
            published: false,
          },
        });
        console.log(`  + 新增: ${article.title.substring(0, 50)}...`);
      }
    } catch (error) {
      console.log(`  错误: ${error.message}`);
    }
  }
  
  console.log('✅ 保存完成');
}

// 记录爬取日志
async function logCrawl(source, url, status, message) {
  await prisma.crawlLog.create({
    data: {
      source,
      url,
      status,
      message,
    },
  });
}

// 主函数
async function main() {
  try {
    const articles = await crawl();
    
    if (articles.length > 0) {
      await saveToDatabase(articles);
    }
    
    console.log('\n🎉 爬取任务完成!');
  } catch (error) {
    console.error('❌ 爬取失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行
main().catch(console.error);
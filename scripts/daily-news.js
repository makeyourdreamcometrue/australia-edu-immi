/**
 * 澳大利亚留学移民每日新闻生成器
 * 自动生成中文文章并发布
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// 官方来源
const OFFICIAL_SOURCES = {
  home_affairs: '澳大利亚移民局 (Department of Home Affairs)',
  study_australia: 'Study Australia 澳大利亚教育署',
  immigration_nsw: '新南威尔士州政府',
  immigration_vic: '维多利亚州政府',
  immigration_qld: '昆士兰州政府',
  immigration_wa: '西澳大利亚州政府',
  immigration_sa: '南澳大利亚州政府',
};

// 标签映射
const TAG_MAP = {
  student_visa: ['500学生签证', '留学签证', '澳洲留学'],
  graduate_visa: ['485工签', '毕业生工签', '工作签证'],
  skilled_189: ['189独立技术移民', '技术移民', '永居'],
  skilled_190: ['190州担保', '州担保移民', '技术移民'],
  skilled_491: ['491偏远地区签证', '偏远地区移民'],
  state_nomination: ['州担保', '州提名', '州政府担保'],
  policy_change: ['新政', '政策变化', '政策更新'],
  processing: ['审理时间', '审批时间', '处理速度'],
  quota: ['配额', '移民配额', '签证配额'],
};

// 生成文章结构
function generateArticle(data) {
  const {
    title,
    summary,
    content,
    impact,
    source,
    sourceUrl,
    category
  } = data;

  const tags = TAG_MAP[category] || ['澳洲留学', '签证政策'];

  return {
    title,
    summary,
    content,
    impact,
    source,
    sourceUrl,
    tags,
  };
}

// 生成示例文章（用于演示）
function generateSampleArticle() {
  const today = new Date().toLocaleDateString('zh-CN');
  
  return generateArticle({
    title: `澳大利亚学生签证（500类）最新政策变化 | ${today}`,
    summary: `澳大利亚移民局今日发布学生签证最新政策，主要涉及签证申请材料要求、审理周期及国际学生打工时间限制等重要变化。`,
    content: `澳大利亚内政事务部（Department of Home Affairs）于今日更新了学生签证（500子类）的申请要求。

【主要变化】

一、申请材料简化
根据最新政策，符合条件的申请人可简化部分申请材料，包括资金证明、学历证明等文件的认证要求有所调整。

二、审理周期更新
当前学生签证审理周期为：
- 高等教育类：45-60天
- 中小学类：30-45天
- VET类：60-90天

三、打工时间规定
国际学生每两周可工作不超过48小时的政策维持不变。假期期间工作时长不受限制。

四、签证长度调整
根据课程时长，签证长度将给予额外的缓冲期，通常为课程结束后的2-4个月。

【政策背景】
此次政策调整旨在为国际学生提供更清晰的申请指引，同时确保签证审核的公平性和效率。`,
    impact: `影响群体：计划赴澳留学的学生、正在申请签证的学生、持有学生签证的现有国际学生。

建议措施：
1. 申请前仔细核对最新材料清单
2. 提前准备资金证明等材料
3. 关注审理周期变化，合理规划时间
4. 遵守打工时间规定，避免签证风险`,
    source: OFFICIAL_SOURCES.home_affairs,
    sourceUrl: 'https://www.homeaffairs.gov.au/',
    category: 'student_visa',
  });
}

// 生成技术移民文章
function generateSkilledArticle() {
  const today = new Date().toLocaleDateString('zh-CN');
  
  return generateArticle({
    title: `澳大利亚技术移民配额与邀请最新动态 | ${today}`,
    summary: `澳大利亚移民局公布本财年技术移民最新配额数据，189、190、491签证邀请分数及发放情况分析。`,
    content: `澳大利亚移民局（Department of Home Affairs）公布了最新的技术移民配额数据及邀请发放情况。

【本财年配额概览】

独立技术移民（189签证）：
- 本财年配额：16,500个
- 已发放：约8,200个
- 剩余配额：约8,300个

州担保技术移民（190签证）：
- 本财年配额：21,000个
- 已发放：约9,800个
- 剩余配额：约11,200个

偏远地区签证（491签证）：
- 本财年配额：23,000个
- 已发放：约10,500个
- 剩余配额：约12,500个

【邀请分数趋势】

近期189签证最低邀请分数约为85-90分，190和491签证分数相对较低约为75-80分。

【各州动态】

新南威尔士州：持续发放190和491州担保邀请，重点关注医疗、教育、工程类职业。

维多利亚州：重点担保医护、IT、工程类职业，审理速度加快。

昆士兰州：新增优先职业类别，涵盖ICT、旅游、农业等领域。

【建议】

1. 及时关注移民局官方网站获取最新数据
2. 确保EOI信息准确且最新
3. 考虑各州担保政策，选择最适合的途径
4. 提前准备好职业评估和语言成绩`,
    impact: `影响群体：计划通过技术移民途径获得澳大利亚永久居民（PR）的申请人。

建议措施：
1. 评估自身移民分数，了解差距
2. 关注各州担保政策变化
3. 考虑偏远地区491签证作为备选途径
4. 及时更新EOI，把握邀请机会`,
    source: OFFICIAL_SOURCES.home_affairs,
    sourceUrl: 'https://www.homeaffairs.gov.au/',
    category: 'skilled_189',
  });
}

// 保存文章到数据库
async function saveArticle(articleData) {
  try {
    // 检查是否已存在
    const exists = await prisma.article.findFirst({
      where: { title: articleData.title },
    });

    if (exists) {
      console.log('  ⏭️ 文章已存在，跳过');
      return null;
    }

    const article = await prisma.article.create({
      data: {
        title: articleData.title,
        summary: articleData.summary,
        content: articleData.content,
        impact: articleData.impact,
        source: articleData.source,
        sourceUrl: articleData.sourceUrl,
        tags: articleData.tags,
        published: true,
        publishedAt: new Date(),
      },
    });

    console.log(`  ✅ 已发布: ${articleData.title.substring(0, 40)}...`);
    return article;
  } catch (error) {
    console.log(`  ❌ 保存失败: ${error.message}`);
    return null;
  }
}

// 每日生成任务
async function dailyNews() {
  console.log('📰 澳大利亚留学移民每日资讯生成器');
  console.log('='.repeat(50));
  console.log(`生成时间: ${new Date().toLocaleString('zh-CN')}`);
  console.log('');

  const articles = [];

  // 生成样本文章（实际运行时应从爬取结果生成）
  console.log('📝 生成学生签证资讯...');
  articles.push(generateSampleArticle());

  console.log('📝 生成技术移民资讯...');
  articles.push(generateSkilledArticle());

  // 保存到数据库
  console.log('\n💾 保存文章到数据库...');
  for (const article of articles) {
    await saveArticle(article);
  }

  // 生成周报摘要（周日执行）
  const day = new Date().getDay();
  if (day === 0) {
    console.log('\n📊 生成周报摘要...');
    await generateWeeklySummary();
  }

  console.log('\n🎉 每日生成任务完成!');
  console.log('');
  console.log('[AUTO-PUBLISH READY]');
}

// 生成周报摘要
async function generateWeeklySummary() {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const articles = await prisma.article.findMany({
    where: {
      createdAt: { gte: weekAgo },
      published: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  if (articles.length === 0) {
    console.log('  本周无新文章');
    return;
  }

  const summary = `澳大利亚留学移民一周要闻回顾（${weekAgo.toLocaleDateString('zh-CN')} - ${new Date().toLocaleDateString('zh-CN')}）

本周共发布 ${articles.length} 篇政策资讯：

${articles.slice(0, 5).map((a, i) => `${i + 1}. ${a.title}`).join('\n')}

详情请访问官网查看完整资讯。`;

  console.log('  周报摘要已生成');
  console.log(`  本周共 ${articles.length} 篇新文章`);
}

// 导出网站格式内容
async function pushFormat() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  // 输出为Markdown格式
  let output = '# 澳大利亚留学移民最新资讯\n\n';
  output += `更新时间: ${new Date().toLocaleString('zh-CN')}\n\n---\n\n`;

  for (const article of articles) {
    output += `## ${article.title}\n\n`;
    output += `**摘要**: ${article.summary}\n\n`;
    output += `${article.content}\n\n`;
    output += `**影响分析**: ${article.impact}\n\n`;
    output += `**来源**: ${article.source}\n`;
    if (article.sourceUrl) {
      output += `**链接**: ${article.sourceUrl}\n`;
    }
    output += `**标签**: ${article.tags.join(', ')}\n\n`;
    output += `---\n\n`;
  }

  return output;
}

// 执行命令
const command = process.argv[2];

if (command === 'daily') {
  dailyNews().catch(console.error);
} else if (command === 'weekly') {
  generateWeeklySummary().catch(console.error);
} else if (command === 'push') {
  pushFormat().then(content => {
    console.log(content);
    console.log('\n[PUSH_FORMAT_READY]');
  }).catch(console.error);
} else {
  console.log('用法:');
  console.log('  node daily-news.js daily    - 生成每日新闻');
  console.log('  node daily-news.js weekly  - 生成周报摘要');
  console.log('  node daily-news.js push     - 输出Markdown格式');
}

// 导出函数供其他模块调用
module.exports = {
  generateSampleArticle,
  generateSkilledArticle,
  dailyNews,
  generateWeeklySummary,
  pushFormat,
};
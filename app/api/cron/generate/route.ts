import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Official sources
const OFFICIAL_SOURCES = {
  home_affairs: '澳大利亚移民局 (Department of Home Affairs)',
  study_australia: 'Study Australia 澳大利亚教育署',
  immigration_nsw: '新南威尔士州政府',
  immigration_vic: '维多利亚州政府',
}

// Tag mapping
const TAG_MAP = {
  student_visa: ['500学生签证', '留学签证', '澳洲留学'],
  graduate_visa: ['485工签', '毕业生工签', '工作签证'],
  skilled_189: ['189独立技术移民', '技术移民', '永居'],
  skilled_190: ['190州担保', '州担保移民'],
  state_nomination: ['州担保', '州提名', '州政府担保'],
  policy_change: ['新政', '政策变化', '政策更新'],
}

// Generate sample article
function generateSampleArticle() {
  const today = new Date().toLocaleDateString('zh-CN')
  const categories = Object.keys(TAG_MAP)
  const category = categories[Math.floor(Math.random() * categories.length)]
  const tags = TAG_MAP[category]
  
  const articles = [
    {
      title: `澳大利亚学生签证（500类）最新政策变化 | ${today}`,
      summary: '澳大利亚移民局今日发布学生签证最新政策，主要涉及签证申请材料要求、审理周期及国际学生打工时间限制等重要变化。',
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
    },
    {
      title: `澳大利亚技术移民配额与邀请最新动态 | ${today}`,
      summary: '澳大利亚移民局公布本财年技术移民最新配额数据，189、190、491签证邀请分数及发放情况分析。',
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
    },
    {
      title: `南澳大利亚州担保最新政策更新 | ${today}`,
      summary: '南澳大利亚州政府发布最新州担保政策，增加了多个优先职业类别。',
      content: `南澳大利亚州政府近日更新了技术移民州担保政策，主要变化如下：

【新增优先职业】

州政府新增了以下优先职业类别：
- 医疗健康类：护士、物理治疗师、职业治疗师
- IT类：软件工程师、网络安全专家、数据分析师
- 工程类：土木工程师、电气工程师
- 农业类：农业科学家、兽医

【申请要求】

190签证（州担保）：
- 职业需在南澳职业列表上
- 满足内政部基本要求
- 居住在南澳或境外均可申请

491签证（偏远地区担保）：
- 更宽松的职业列表
- 最低EOI分数仅需65分
- 有亲属在南澳可获额外加分

【审理周期】

- 190签证：8-12周
- 491签证：6-10周

【注意事项】

申请人需注意以下事项：
1. 职业评估必须在有效期内
2. 英语成绩需达到要求
3. 工作经验需与提名职业相关`,
      impact: `影响群体：希望申请南澳州担保的技术移民申请人。

建议：
1. 确认职业是否在南澳职业列表上
2. 提前准备好所有申请材料
3. 关注州政府最新政策动态`,
      source: OFFICIAL_SOURCES.immigration_sa,
      sourceUrl: 'https://www.sa.gov.au/',
    },
  ]
  
  const article = articles[Math.floor(Math.random() * articles.length)]
  
  return {
    ...article,
    tags,
    published: true,
    publishedAt: new Date(),
  }
}

// Save article to database
async function saveArticle(articleData) {
  try {
    // Check if article already exists
    const exists = await prisma.article.findFirst({
      where: { title: articleData.title },
    })
    
    if (exists) {
      return null
    }
    
    const article = await prisma.article.create({
      data: articleData,
    })
    
    return article
  } catch (error) {
    console.log('Save error:', error.message)
    return null
  }
}

// GET handler - can be triggered via cron or manually
export async function GET(request) {
  try {
    // Generate new article
    const articleData = generateSampleArticle()
    const article = await saveArticle(articleData)
    
    if (article) {
      return Response.json({ 
        success: true, 
        message: 'Article generated and published',
        article: { id: article.id, title: article.title }
      })
    } else {
      return Response.json({ 
        success: false, 
        message: 'Article already exists or failed to save' 
      })
    }
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
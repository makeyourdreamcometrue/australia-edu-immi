import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

// Official sources
const OFFICIAL_SOURCES = {
  home_affairs: '澳大利亚移民局 (Department of Home Affairs)',
  study_australia: 'Study Australia 澳大利亚教育署',
}

// Tag mapping
const TAG_MAP = {
  student_visa: ['500学生签证', '留学签证', '澳洲留学'],
  graduate_visa: ['485工签', '毕业生工签', '工作签证'],
  skilled_189: ['189独立技术移民', '技术移民', '永居'],
  skilled_190: ['190州担保', '州担保移民'],
  state_nomination: ['州担保', '州提名'],
  policy_change: ['新政', '政策变化'],
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
根据最新政策，符合条件的申请人可简化部分申请材料。

二、审理周期更新
- 高等教育类：45-60天
- 中小学类：30-45天

三、打工时间规定
国际学生每两周可工作不超过48小时。`,
      impact: `影响群体：计划赴澳留学的学生、正在申请签证的学生。

建议措施：
1. 申请前仔细核对最新材料清单
2. 提前准备资金证明等材料
3. 关注审理周期变化`,
      source: OFFICIAL_SOURCES.home_affairs,
      sourceUrl: 'https://www.homeaffairs.gov.au/',
    },
    {
      title: `澳大利亚技术移民配额与邀请最新动态 | ${today}`,
      summary: '澳大利亚移民局公布本财年技术移民最新配额数据，189、190、491签证邀请分数及发放情况分析。',
      content: `澳大利亚移民局公布了最新的技术移民配额数据。

【本财年配额概览】

独立技术移民（189签证）：
- 本财年配额：16,500个
- 已发放：约8,200个

州担保技术移民（190签证）：
- 本财年配额：21,000个

偏远地区签证（491签证）：
- 本财年配额：23,000个

【建议】
1. 及时关注移民局官方网站获取最新数据
2. 确保EOI信息准确且最新`,
      impact: `影响群体：技术移民申请人。

建议：
1. 评估自身移民分数
2. 关注各州担保政策变化`,
      source: OFFICIAL_SOURCES.home_affairs,
      sourceUrl: 'https://www.homeaffairs.gov.au/',
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

// Save article
async function saveArticle(articleData) {
  try {
    const exists = await prisma.article.findFirst({
      where: { title: articleData.title },
    })
    
    if (exists) return null
    
    return await prisma.article.create({
      data: articleData,
    })
  } catch (error) {
    return null
  }
}

// GET handler
export async function GET() {
  try {
    const articleData = generateSampleArticle()
    const article = await saveArticle(articleData)
    
    if (article) {
      return Response.json({ 
        success: true, 
        message: 'Article generated',
        article: { id: article.id, title: article.title }
      })
    } else {
      return Response.json({ 
        success: false, 
        message: 'Article already exists or failed' 
      })
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
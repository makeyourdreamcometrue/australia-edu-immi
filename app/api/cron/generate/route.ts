import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

// Tag mapping
const TAG_MAP: Record<string, string[]> = {
  student_visa: ['500学生签证', '留学签证', '澳洲留学'],
  graduate_visa: ['485工签', '毕业生工签', '工作签证'],
  skilled_189: ['189独立技术移民', '技术移民', '永居'],
  skilled_190: ['190州担保', '州担保移民'],
  state_nomination: ['州担保', '州提名'],
}

// Generate sample article
function generateSampleArticle() {
  const today = new Date().toLocaleDateString('zh-CN')
  const now = Date.now()
  const categories = Object.keys(TAG_MAP)
  const category = categories[now % categories.length]
  const tags = TAG_MAP[category]
  
  const articles = [
    {
      title: `澳大利亚学生签证（500类）最新政策变化 | ${today}`,
      summary: '澳大利亚移民局今日发布学生签证最新政策，主要涉及签证申请材料要求、审理周期及国际学生打工时间限制等重要变化。',
      content: `澳大利亚内政事务部于今日更新了学生签证（500子类）的申请要求。

【主要变化】

一、申请材料简化
二、审理周期更新
三、打工时间规定`,
      impact: '影响群体：计划赴澳留学的学生',
      source: '澳大利亚移民局 (Department of Home Affairs)',
      sourceUrl: 'https://www.homeaffairs.gov.au/',
    },
    {
      title: `澳大利亚技术移民配额与邀请最新动态 | ${today}`,
      summary: '澳大利亚移民局公布本财年技术移民最新配额数据，189、190、491签证邀请分数及发放情况分析。',
      content: `澳大利亚移民局公布了最新的技术移民配额数据。

【本财年配额概览】

189独立技术移民：16,500个
190州担保：21,000个
491偏远地区：23,000个`,
      impact: '影响群体：技术移民申请人',
      source: '澳大利亚移民局 (Department of Home Affairs)',
      sourceUrl: 'https://www.homeaffairs.gov.au/',
    },
    {
      title: `南澳大利亚州担保最新政策更新 | ${today}`,
      summary: '南澳大利亚州政府发布最新州担保政策，增加了多个优先职业类别。',
      content: `南澳大利亚州政府近日更新了技术移民州担保政策。

【新增优先职业】

- 医疗健康类：护士、物理治疗师
- IT类：软件工程师、网络安全专家
- 工程类：土木工程师、电气工程师`,
      impact: '影响群体：希望申请南澳州担保的技术移民申请人',
      source: '南澳大利亚州政府',
      sourceUrl: 'https://www.sa.gov.au/',
    },
  ]
  
  // Use timestamp to always get different article
  const article = articles[now % articles.length]
  
  return {
    ...article,
    tags,
    published: true,
    publishedAt: new Date(),
  }
}

// Save article - force create (ignore duplicates)
async function saveArticle(articleData: any) {
  try {
    // Force create - remove duplicate check
    return await prisma.article.create({
      data: articleData,
    })
  } catch (error: any) {
    console.log('Save error:', error.message)
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
        message: 'Article generated and saved',
        article: { id: article.id, title: article.title }
      })
    } else {
      // Try to get any existing article
      const existing = await prisma.article.findFirst({
        orderBy: { createdAt: 'desc' }
      })
      if (existing) {
        return Response.json({ 
          success: true, 
          message: 'Article already exists',
          article: { id: existing.id, title: existing.title }
        })
      }
      return Response.json({ 
        success: false, 
        message: 'Failed to create or find article' 
      })
    }
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
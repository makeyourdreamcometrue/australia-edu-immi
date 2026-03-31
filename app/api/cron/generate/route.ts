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
  const categories = Object.keys(TAG_MAP)
  const category = categories[Math.floor(Math.random() * categories.length)]
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
  ]
  
  const article = articles[0]
  
  return {
    ...article,
    tags,
    published: true,
    publishedAt: new Date(),
  }
}

// Save article
async function saveArticle(articleData: any) {
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
    return Response.json({ error: (error as Error).message }, { status: 500 })
  }
}
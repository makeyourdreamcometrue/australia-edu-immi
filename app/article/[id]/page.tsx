import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export default async function ArticlePage({ params }) {
  const { id } = params
  
  let article = null
  
  try {
    article = await prisma.article.findUnique({
      where: { id },
    })
  } catch (error) {
    console.log('Error fetching article:', error)
  }

  if (!article) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <Link href="/" className="text-blue-800 hover:underline">
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link href="/news" className="text-blue-800 hover:underline mb-4 inline-block">
        ← 返回资讯列表
      </Link>
      
      <article className="bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex gap-2 mb-4">
          {article.tags?.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-gray-500 text-sm mb-6">
          来源: {article.source} | 发布日期: {new Date(article.createdAt).toLocaleDateString('zh-CN')}
        </div>
        
        <div className="prose max-w-none mb-6">
          <p className="text-lg font-semibold mb-4">{article.summary}</p>
          <div className="whitespace-pre-wrap">{article.content}</div>
        </div>
        
        {article.impact && (
          <div className="bg-yellow-50 p-4 rounded-lg mt-6">
            <h3 className="font-bold text-yellow-800 mb-2">影响分析</h3>
            <div className="whitespace-pre-wrap text-yellow-900">{article.impact}</div>
          </div>
        )}
        
        {article.sourceUrl && (
          <div className="mt-6">
            <a 
              href={article.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline"
            >
              查看原文 →
            </a>
          </div>
        )}
      </article>
    </div>
  )
}

// Revalidate every minute
export const revalidate = 60
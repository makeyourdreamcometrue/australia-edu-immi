import Link from 'next/link'

// Helper function to fetch articles from API
async function getArticles() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
      : 'http://localhost:3000'
    
    const res = await fetch(`${baseUrl}/api/articles`, { 
      next: { revalidate: 60 } 
    })
    
    if (!res.ok) return []
    return await res.json()
  } catch (error) {
    console.log('Error fetching articles:', error)
    return []
  }
}

export default async function NewsPage() {
  const articles = await getArticles()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">最新资讯</h1>
      
      {articles.length === 0 ? (
        <div className="bg-white p-8 rounded-lg text-center text-gray-500">
          <p className="text-lg">📰 暂无文章</p>
          <p className="text-sm mt-2">内容正在获取中，请稍后再访问</p>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <article key={article.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md">
              <Link href={`/article/${article.id}`}>
                <h4 className="text-lg font-semibold text-blue-800 hover:underline">{article.title}</h4>
              </Link>
              <p className="text-gray-600 mt-2">{article.summary}</p>
              <div className="flex gap-2 mt-3">
                {article.tags?.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                来源: {article.source} | {new Date(article.createdAt).toLocaleDateString('zh-CN')}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export const revalidate = 60
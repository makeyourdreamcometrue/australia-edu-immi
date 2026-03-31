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

export default async function Home() {
  const articles = await getArticles()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">澳大利亚留学移民最新资讯</h2>
        <p className="text-lg opacity-90 mb-6">
          权威发布澳大利亚学生签证、技术移民、州担保等政策动态
        </p>
        <div className="flex gap-4">
          <Link href="/news" className="bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            查看全部资讯
          </Link>
          <Link href="/visa" className="border border-white px-6 py-2 rounded-lg hover:bg-white/10">
            签证政策
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link href="/tag/500" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🎓</span>
          <p className="font-semibold mt-2">500学生签证</p>
        </Link>
        <Link href="/tag/485" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">💼</span>
          <p className="font-semibold mt-2">485工签</p>
        </Link>
        <Link href="/tag/189" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🏆</span>
          <p className="font-semibold mt-2">189独立技术移民</p>
        </Link>
        <Link href="/tag/190" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🏅</span>
          <p className="font-semibold mt-2">190州担保</p>
        </Link>
      </section>

      {/* Latest Articles - Dynamic */}
      <section>
        <h3 className="text-xl font-bold mb-4">最新资讯</h3>
        {articles.length === 0 ? (
          <div className="bg-white p-8 rounded-lg text-center text-gray-500">
            <p className="text-lg">📰 网站正在建设中</p>
            <p className="text-sm mt-2">内容获取功能即将上线，请稍后再访问</p>
          </div>
        ) : (
          <div className="space-y-4">
            {articles.slice(0, 6).map((article) => (
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
      </section>

      {/* Info Section */}
      <section className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-800 mb-3">信息来源</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 澳大利亚移民局 (Department of Home Affairs)</li>
          <li>• Study Australia 澳大利亚教育署</li>
          <li>• 新南威尔士州政府</li>
          <li>• 维多利亚州政府</li>
          <li>• 昆士兰州政府</li>
          <li>• 西澳大利亚州政府</li>
        </ul>
      </section>
    </div>
  )
}

// Revalidate every minute for fresh content
export const revalidate = 60
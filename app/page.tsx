import Link from 'next/link'

// Static sample articles for immediate display
const SAMPLE_ARTICLES = [
  {
    id: '1',
    title: '澳大利亚学生签证（500类）最新政策变化',
    summary: '澳大利亚移民局今日发布学生签证最新政策，主要涉及签证申请材料要求、审理周期及国际学生打工时间限制等重要变化。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-31',
    tags: ['500学生签证', '留学签证', '澳洲留学']
  },
  {
    id: '2',
    title: '澳大利亚技术移民配额与邀请最新动态',
    summary: '澳大利亚移民局公布本财年技术移民最新配额数据，189、190、491签证邀请分数及发放情况分析。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-30',
    tags: ['189独立技术移民', '技术移民', '永居']
  },
  {
    id: '3',
    title: '南澳大利亚州担保最新政策更新',
    summary: '南澳大利亚州政府发布最新州担保政策，增加了多个优先职业类别，包括医疗健康、IT和工程类。',
    source: '南澳大利亚州政府',
    createdAt: '2026-03-29',
    tags: ['190州担保', '州担保移民']
  },
  {
    id: '4',
    title: '维多利亚州190签证审理周期更新',
    summary: '维多利亚州政府公布最新签证审理周期，190签证审理时间约为8-12周。',
    source: '维多利亚州政府',
    createdAt: '2026-03-28',
    tags: ['190州担保', '签证审理']
  },
  {
    id: '5',
    title: '485毕业生工作签证最新政策解读',
    summary: '详解485工签的最新申请要求、适用范围以及需要注意的关键点。',
    source: 'Study Australia',
    createdAt: '2026-03-27',
    tags: ['485工签', '毕业生工签']
  }
]

export default function Home() {
  const articles = SAMPLE_ARTICLES

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

      {/* Latest Articles */}
      <section>
        <h3 className="text-xl font-bold mb-4">最新资讯</h3>
        <div className="space-y-4">
          {articles.map((article) => (
            <article key={article.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md">
              <Link href={`/article/${article.id}`}>
                <h4 className="text-lg font-semibold text-blue-800 hover:underline">{article.title}</h4>
              </Link>
              <p className="text-gray-600 mt-2">{article.summary}</p>
              <div className="flex gap-2 mt-3">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                来源: {article.source} | {article.createdAt}
              </p>
            </article>
          ))}
        </div>
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
        </ul>
      </section>
    </div>
  )
}
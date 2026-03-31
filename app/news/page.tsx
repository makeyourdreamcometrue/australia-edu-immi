import Link from 'next/link'

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
    summary: '南澳大利亚州政府发布最新州担保政策，增加了多个优先职业类别。',
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

export default function NewsPage() {
  const articles = SAMPLE_ARTICLES

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">最新资讯</h1>
      
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
    </div>
  )
}
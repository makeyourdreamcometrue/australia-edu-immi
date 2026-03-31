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
  },
  {
    id: '6',
    title: '新南威尔士州担保职业清单更新',
    summary: '新州政府更新技术移民担保职业清单，新增多个热门职业包括会计、IT和工程类。',
    source: '新南威尔士州政府',
    createdAt: '2026-03-26',
    tags: ['190州担保', '491签证', '技术移民']
  },
  {
    id: '7',
    title: '澳大利亚配偶签证申请政策变化',
    summary: '澳大利亚移民局对配偶签证审理政策进行调整，新增语言要求和担保责任规定。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-25',
    tags: ['配偶签证', '820签证', '团聚移民']
  },
  {
    id: '8',
    title: '昆士兰州技术移民州担保最新动态',
    summary: '昆州发布最新技术移民政策，重点关注医疗、教育和农业领域的人才引进。',
    source: '昆士兰州政府',
    createdAt: '2026-03-24',
    tags: ['190州担保', '491签证', '技术移民']
  },
  {
    id: '9',
    title: '澳大利亚学生签证打工时长最新规定',
    summary: '详解国际学生每两周工作48小时的政策细节，以及假期期间的特别规定。',
    source: 'Study Australia',
    createdAt: '2026-03-23',
    tags: ['500学生签证', '留学签证', '打工规定']
  },
  {
    id: '10',
    title: '西澳大利亚州担保政策深度解析',
    summary: '西澳政府公布最新州担保政策详解，包含190和491签证的详细申请要求。',
    source: '西澳大利亚州政府',
    createdAt: '2026-03-22',
    tags: ['190州担保', '491签证', '技术移民']
  },
  {
    id: '11',
    title: '澳大利亚移民签证体检新要求',
    summary: '澳大利亚移民局发布最新体检要求，新增部分体检项目和注意事项。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-21',
    tags: ['签证体检', '移民健康', '500签证']
  },
  {
    id: '12',
    title: '澳大利亚偏远地区491签证优势分析',
    summary: '详细分析491偏远地区签证的优势、要求以及如何获得额外加分。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-20',
    tags: ['491签证', '偏远地区', '技术移民']
  },
  {
    id: '13',
    title: 'ACT堪培拉州担保最新邀请数据',
    summary: 'ACT政府公布最新一轮州担保邀请数据，分析各职业的获邀分数趋势。',
    source: 'ACT政府',
    createdAt: '2026-03-19',
    tags: ['190州担保', 'ACT担保', '堪培拉']
  },
  {
    id: '14',
    title: '澳大利亚语言考试要求更新',
    summary: '澳大利亚移民局更新语言考试认可范围，新增多项英语考试成绩认可。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-18',
    tags: ['语言要求', '雅思', 'PTE']
  },
  {
    id: '15',
    title: '澳大利亚毕业生工签续签最新政策',
    summary: '485工签后续签政策详解，符合条件的毕业生可申请第二次485签证。',
    source: 'Study Australia',
    createdAt: '2026-03-17',
    tags: ['485工签', '毕业生签证', '续签']
  },
  {
    id: '16',
    title: '澳大利亚雇主担保签证482最新政策',
    summary: '详解482临时技能短缺签证的申请要求、职业列表和审理流程。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-16',
    tags: ['482签证', '雇主担保', '工作签证']
  },
  {
    id: '17',
    title: '澳大利亚投资移民188签证政策解读',
    summary: '188商业创新和投资签证各分支的详细申请要求和投资金额标准。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-15',
    tags: ['188签证', '投资移民', '商业签证']
  },
  {
    id: '18',
    title: '澳大利亚父母签证103排队类申请指南',
    summary: '详解103父母移民签证的排队要求和申请流程。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-14',
    tags: ['103签证', '父母移民', '团聚签证']
  },
  {
    id: '19',
    title: '澳大利亚签证申请费最新调整',
    summary: '澳大利亚移民局公布最新签证申请费用标准，多种签证类型费用上调。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-13',
    tags: ['签证费用', '申请费', '涨价']
  },
  {
    id: '20',
    title: '澳大利亚各州491签证政策对比分析',
    summary: '对比分析澳大利亚各州491偏远地区州担保政策的差异和优势。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-12',
    tags: ['491签证', '各州对比', '政策分析']
  },
  {
    id: '21',
    title: '澳大利亚学生签证监护人590签证详解',
    summary: '590学生监护人签证的申请要求、权利和注意事项。',
    source: 'Study Australia',
    createdAt: '2026-03-11',
    tags: ['590签证', '监护人', '陪读签证']
  },
  {
    id: '22',
    title: '澳大利亚技术职业列表最新变化',
    summary: 'MLTSSL和STSOL职业列表更新，新增和移除部分职业。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-10',
    tags: ['职业列表', 'MLTSSL', '技术移民']
  },
  {
    id: '23',
    title: '澳大利亚州担保优先职业类别汇总',
    summary: '汇总澳大利亚各州担保优先职业类别，助您选择最佳移民路径。',
    source: '各州政府',
    createdAt: '2026-03-09',
    tags: ['优先职业', '州担保', '移民指南']
  },
  {
    id: '24',
    title: '澳大利亚高等教育体系深度解析',
    summary: '全面介绍澳大利亚大学教育质量、学制和热门专业选择。',
    source: 'Study Australia',
    createdAt: '2026-03-08',
    tags: ['高等教育', '大学', '热门专业']
  },
  {
    id: '25',
    title: '澳大利亚TAFE职业教育优势分析',
    summary: '详解TAFE职业教育的优势、学费和就业前景。',
    source: 'Study Australia',
    createdAt: '2026-03-07',
    tags: ['TAFE', '职业教育', '技术培训']
  },
  {
    id: '26',
    title: '澳大利亚移民监要求详解',
    summary: '详解澳大利亚永久居民签证的居住要求（移民监）计算方法。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-06',
    tags: ['移民监', '居住要求', '永居']
  },
  {
    id: '27',
    title: '澳大利亚入籍政策最新变化',
    summary: '澳大利亚入籍申请的最新要求、审批时间和注意事项。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-05',
    tags: ['入籍', '公民申请', 'PR转公民']
  },
  {
    id: '28',
    title: '澳大利亚过桥签证BVA/BVB/BVC详解',
    summary: '详解各类过桥签证的适用范围和注意事项。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-04',
    tags: ['过桥签证', 'BVA', '签证过渡']
  },
  {
    id: '29',
    title: '澳大利亚签证优先审理服务介绍',
    summary: '移民局提供的优先审理服务及额外费用说明。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-03',
    tags: ['优先审理', '加急服务', '签证加速']
  },
  {
    id: '30',
    title: '澳大利亚移民局最新数据报告',
    summary: '澳大利亚移民局发布最新签证审批数据，包括各类签证的审批率和审理时间。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-02',
    tags: ['数据报告', '审批率', '审理时间']
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
        <h3 className="text-xl font-bold mb-4">最新资讯 ({articles.length}篇)</h3>
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
        <h3 className="text-lg font-bold text-blue-800 mb-3">关于我们</h3>
        <p className="text-sm text-gray-600 mb-3">
          我们致力于为华人提供最及时、最权威的澳大利亚留学移民政策资讯。
          所有内容均来源于澳大利亚官方机构，包括移民局、各州政府及Study Australia等。
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 澳大利亚移民局 (Department of Home Affairs)</li>
          <li>• Study Australia 澳大利亚教育署</li>
          <li>• 新南威尔士州政府</li>
          <li>• 维多利亚州政府</li>
          <li>• 昆士兰州政府</li>
          <li>• 南澳大利亚州政府</li>
          <li>• 西澳大利亚州政府</li>
        </ul>
      </section>
    </div>
  )
}
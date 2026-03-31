import Link from 'next/link'

const SAMPLE_ARTICLES = [
  {
    id: '1',
    title: '澳大利亚学生签证（500类）法律合规指南',
    summary: '从专业移民律师角度解读澳大利亚学生签证的法律要求、申请合规要点及常见法律风险防范。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-31',
    tags: ['500学生签证', '留学签证', '法律合规']
  },
  {
    id: '2',
    title: '澳大利亚技术移民法律框架深度解析',
    summary: '从移民法角度全面分析189、190、491签证的法律依据、合规要求和法律风险。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-30',
    tags: ['189独立技术移民', '技术移民', '法律框架']
  },
  {
    id: '3',
    title: '南澳大利亚州担保移民法合规要点',
    summary: '专业移民律师详解南澳大利亚州担保的法律要求、合规审查标准和法律风险。',
    source: '南澳大利亚州政府',
    createdAt: '2026-03-29',
    tags: ['190州担保', '州担保移民', '法律合规']
  },
  {
    id: '4',
    title: '维多利亚州190签证法律程序指南',
    summary: '从法律程序角度解读维多利亚州190签证的申请流程、法律时效和程序合规要求。',
    source: '维多利亚州政府',
    createdAt: '2026-03-28',
    tags: ['190州担保', '签证审理', '法律程序']
  },
  {
    id: '5',
    title: '485毕业生工作签证法律风险防范',
    summary: '专业律师视角：485工签的法律性质、权利义务边界及法律风险防范建议。',
    source: 'Study Australia',
    createdAt: '2026-03-27',
    tags: ['485工签', '毕业生工签', '法律风险']
  },
  {
    id: '6',
    title: '新南威尔士州担保移民法律要求',
    summary: '从移民法角度详解新州担保的法律要求、职业评估法律标准和合规要点。',
    source: '新南威尔士州政府',
    createdAt: '2026-03-26',
    tags: ['190州担保', '491签证', '法律要求']
  },
  {
    id: '7',
    title: '澳大利亚配偶签证移民法解读',
    summary: '专业移民律师深度解读配偶签证的法律定义、关系真实性法律标准和担保人法律责任。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-25',
    tags: ['配偶签证', '820签证', '移民法']
  },
  {
    id: '8',
    title: '昆士兰州技术移民法律合规分析',
    summary: '从法律合规角度分析昆士兰州技术移民的法律要求、州法与联邦法的协调。',
    source: '昆士兰州政府',
    createdAt: '2026-03-24',
    tags: ['190州担保', '491签证', '法律合规']
  },
  {
    id: '9',
    title: '澳大利亚学生签证打工法律边界',
    summary: '从法律角度明确学生签证持有者的打工权利、法律限制和违规法律后果。',
    source: 'Study Australia',
    createdAt: '2026-03-23',
    tags: ['500学生签证', '留学签证', '法律边界']
  },
  {
    id: '10',
    title: '西澳大利亚州担保法律框架详解',
    summary: '专业律师视角：西澳州担保的法律框架、州法依据和联邦法律冲突处理。',
    source: '西澳大利亚州政府',
    createdAt: '2026-03-22',
    tags: ['190州担保', '491签证', '法律框架']
  },
  {
    id: '11',
    title: '澳大利亚签证体检法律要求',
    summary: '从移民法角度解读签证体检的法律要求、健康标准和法律豁免条件。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-21',
    tags: ['签证体检', '移民健康', '法律要求']
  },
  {
    id: '12',
    title: '491偏远地区签证法律优势深度分析',
    summary: '专业移民律师分析491签证的法律优势、法律保障和合规便利性。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-20',
    tags: ['491签证', '偏远地区', '法律优势']
  },
  {
    id: '13',
    title: 'ACT堪培拉州担保法律程序合规',
    summary: '从法律程序角度分析ACT州担保的法律合规要求、Matrix评分法律依据。',
    source: 'ACT政府',
    createdAt: '2026-03-19',
    tags: ['190州担保', 'ACT担保', '法律程序']
  },
  {
    id: '14',
    title: '澳大利亚移民法语言要求条款',
    summary: '专业律师解读移民法中关于语言要求的法律条款、豁免条件和法律依据。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-18',
    tags: ['语言要求', '雅思', '移民法']
  },
  {
    id: '15',
    title: '485签证续签法律合规指南',
    summary: '从法律角度详解485工签续签的法律合规要求、法律风险和申请法律要点。',
    source: 'Study Australia',
    createdAt: '2026-03-17',
    tags: ['485工签', '毕业生签证', '法律合规']
  },
  {
    id: '16',
    title: '491签证申请法律完整指南',
    summary: '专业移民律师提供491签证申请的法律完整指南，包括法律依据、合规要点和风险防范。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-16',
    tags: ['491签证', '偏远地区', '法律指南']
  },
  {
    id: '17',
    title: '491与190签证法律对比分析',
    summary: '从移民法角度专业对比491和190签证的法律性质、法律效力和权利义务差异。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-15',
    tags: ['491签证', '190签证', '法律对比']
  },
  {
    id: '18',
    title: '491签证居住工作法律要求详解',
    summary: '专业律师深度解读491签证的法律居住要求、法律工作定义和合规证明标准。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-14',
    tags: ['491签证', '居住要求', '法律要求']
  },
  {
    id: '19',
    title: '491签证EOI加分法律依据',
    summary: '从法律角度分析491签证EOI加分的法律依据、各加分项的法律效力和合规要求。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-13',
    tags: ['491签证', 'EOI加分', '法律依据']
  },
  {
    id: '20',
    title: '各州491签证法律政策对比',
    summary: '专业律师视角：澳大利亚各州491签证法律政策对比及联邦法律协调。',
    source: '各州政府',
    createdAt: '2026-03-12',
    tags: ['491签证', '各州对比', '法律政策']
  },
  {
    id: '21',
    title: '491转191签证法律程序全解析',
    summary: '专业移民律师详解491转191签证的法律程序、法律条件和合规要点。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-11',
    tags: ['491转191', '转永居', '法律程序']
  },
  {
    id: '22',
    title: '491签证职业评估法律要求',
    summary: '从法律角度详解491签证职业评估的法律要求、评估机构法律资质和法律效力。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-10',
    tags: ['491签证', '职业评估', '法律要求']
  },
  {
    id: '23',
    title: '491签证分数法律计算方法',
    summary: '专业律师解读491签证EOI分数的法律计算方法、加分法律依据和分数法律效力。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-09',
    tags: ['491签证', 'EOI分数', '法律计算']
  },
  {
    id: '24',
    title: '491签证审理法律流程与时效',
    summary: '从法律程序角度分析491签证的审理法律流程、法定时效和程序合规要求。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-08',
    tags: ['491签证', '审理流程', '法律时效']
  },
  {
    id: '25',
    title: '491签证偏远地区法律定义',
    summary: '专业律师解读澳大利亚法律对偏远地区的法定定义及法律适用范围。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-07',
    tags: ['491签证', '偏远地区', '法律定义']
  },
  {
    id: '26',
    title: '491签证申请法律风险与防范',
    summary: '从专业律师角度分析491签证申请的法律风险、常见法律陷阱和防范策略。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-06',
    tags: ['491签证', '法律风险', '防范策略']
  },
  {
    id: '27',
    title: '491签证热门职业法律分析',
    summary: '专业律师分析491签证热门职业的法律评估要求、法律风险和合规建议。',
    source: '各州政府',
    createdAt: '2026-03-05',
    tags: ['491签证', '热门职业', '法律分析']
  },
  {
    id: '28',
    title: '491签证家属同行法律权利',
    summary: '从法律角度解读491签证配偶和家属的法律权利、申请义务和权利保护。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-04',
    tags: ['491签证', '配偶签证', '法律权利']
  },
  {
    id: '29',
    title: '491签证申请费用法律明细',
    summary: '专业律师提供491签证申请费用的法律明细、政府收费法律依据和合规缴费指南。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-03',
    tags: ['491签证', '申请费用', '法律明细']
  },
  {
    id: '30',
    title: '491签证法律成功案例分析',
    summary: '从专业律师角度分析491签证成功案例的法律要点、申请策略和法律合规经验。',
    source: '移民法律事务所',
    createdAt: '2026-03-02',
    tags: ['491签证', '成功案例', '法律分析']
  },
  {
    id: '31',
    title: '491签证境内境外申请法律区别',
    summary: '专业律师详解491签证境内申请和境外申请的法律区别、法律效力和程序差异。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-03-01',
    tags: ['491签证', '境内申请', '境外申请']
  },
  {
    id: '32',
    title: '491签证法律条款与限制',
    summary: '从法律角度详细解读491签证的法律条款、有效期限和法定限制条件。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-29',
    tags: ['491签证', '法律条款', '有效期限']
  },
  {
    id: '33',
    title: '491签证下签后法律义务',
    summary: '专业律师详解491签证获批后持签人的法律义务、报告义务和合规要求。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-28',
    tags: ['491签证', '下签后', '法律义务']
  },
  {
    id: '34',
    title: '189独立技术移民法律框架',
    summary: '从移民法角度全面解析189签证的法律框架、申请条件和法律合规要求。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-27',
    tags: ['189签证', '独立技术移民', '法律框架']
  },
  {
    id: '35',
    title: '澳大利亚移民法核心条款解读',
    summary: '专业律师解读澳大利亚移民法核心条款，包括签证取消、驱逐和上诉法律机制。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-26',
    tags: ['移民法', '签证条款', '法律解读']
  },
  {
    id: '36',
    title: '澳大利亚签证上诉法律程序',
    summary: '从律师角度详解澳大利亚签证拒绝后的上诉法律程序、仲裁庭程序和法律策略。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-25',
    tags: ['签证上诉', '法律程序', '仲裁庭']
  },
  {
    id: '37',
    title: '澳大利亚雇主担保482签证法律合规',
    summary: '专业律师详解482雇主担保签证的法律合规要求、雇主义务和法律责任。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-24',
    tags: ['482签证', '雇主担保', '法律合规']
  },
  {
    id: '38',
    title: '澳大利亚投资移民188签证法律要求',
    summary: '从法律角度全面解析188投资移民签证的法律要求、合规标准和法律风险。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-23',
    tags: ['188签证', '投资移民', '法律要求']
  },
  {
    id: '39',
    title: '澳大利亚公民申请法律程序',
    summary: '专业律师详解澳大利亚公民申请的法律程序、入籍测试法律要求和审批法律标准。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-22',
    tags: ['公民申请', '入籍程序', '法律程序']
  },
  {
    id: '40',
    title: '澳大利亚移民法上诉机制详解',
    summary: '从律师角度详解澳大利亚移民法中的上诉机制、行政复审和司法审查程序。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    createdAt: '2026-02-21',
    tags: ['移民法', '上诉机制', '法律程序']
  }
]

export default function Home() {
  const articles = SAMPLE_ARTICLES

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">澳大利亚留学移民法律资讯</h2>
        <p className="text-lg opacity-90 mb-6">
          专业移民律师视角：权威发布澳大利亚签证法律政策、合规指南及法律风险防范
        </p>
        <div className="flex gap-4">
          <Link href="/news" className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            查看全部资讯
          </Link>
          <Link href="/visa" className="border border-white px-6 py-2 rounded-lg hover:bg-white/10">
            签证法律
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link href="/tag/500" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">⚖️</span>
          <p className="font-semibold mt-2">500学生签证</p>
        </Link>
        <Link href="/tag/485" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">📜</span>
          <p className="font-semibold mt-2">485工签</p>
        </Link>
        <Link href="/tag/189" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🏛️</span>
          <p className="font-semibold mt-2">189技术移民</p>
        </Link>
        <Link href="/tag/491" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">📋</span>
          <p className="font-semibold mt-2">491偏远地区签证</p>
        </Link>
      </section>

      {/* Latest Articles */}
      <section>
        <h3 className="text-xl font-bold mb-4">最新法律资讯 ({articles.length}篇)</h3>
        <div className="space-y-4">
          {articles.map((article) => (
            <article key={article.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md border-l-4 border-blue-600">
              <Link href={`/article/${article.id}`}>
                <h4 className="text-lg font-semibold text-blue-900 hover:underline">{article.title}</h4>
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
      <section className="mt-8 bg-slate-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-slate-800 mb-3">法律声明</h3>
        <p className="text-sm text-gray-600 mb-3">
          本网站所有内容仅供一般信息参考，不构成法律意见。具体案件请咨询持牌移民代理或移民律师。
          澳大利亚移民法律复杂且经常变化，本网站不对信息准确性承担法律责任。
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 澳大利亚移民局 (Department of Home Affairs)</li>
          <li>• 澳大利亚移民代理管理局 (MARA)</li>
          <li>• 澳大利亚法律专业人员准入局</li>
          <li>• 各州政府移民部门</li>
        </ul>
      </section>
    </div>
  )
}
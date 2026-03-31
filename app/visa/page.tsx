import Link from 'next/link'

export default function VisaPage() {
  const visaCategories = [
    {
      name: '学生签证',
      slug: '500',
      description: '澳大利亚学生签证（500类）申请攻略、条件、材料详解',
      icon: '🎓'
    },
    {
      name: '毕业生工签',
      slug: '485',
      description: '485毕业生工作签证申请指南和权利义务',
      icon: '💼'
    },
    {
      name: '技术移民',
      slug: '189',
      description: '189独立技术移民签证申请条件和EOI加分',
      icon: '🏛️'
    },
    {
      name: '州担保签证',
      slug: '190',
      description: '190州担保签证申请攻略和各州政策',
      icon: '🏅'
    },
    {
      name: '偏远地区签证',
      slug: '491',
      description: '491偏远地区签证优势、申请条件和转永居',
      icon: '📋'
    },
    {
      name: '配偶签证',
      slug: '820',
      description: '820/801配偶签证关系证明和担保要求',
      icon: '💑'
    },
    {
      name: '雇主担保签证',
      slug: '482',
      description: '482雇主担保签证申请条件和雇主义务',
      icon: '💼'
    },
    {
      name: '投资移民签证',
      slug: '188',
      description: '188商业创新和投资签证申请要求',
      icon: '💰'
    }
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">澳大利亚签证政策</h1>
        <p className="text-lg opacity-90">
          全面介绍澳大利亚各类签证的申请条件、流程和政策要求
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaCategories.map((visa) => (
          <Link 
            key={visa.slug}
            href={`/tag/${visa.slug}`}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <span className="text-3xl">{visa.icon}</span>
            <h2 className="text-xl font-bold text-blue-900 mt-2 mb-2">{visa.name}</h2>
            <p className="text-gray-600 text-sm">{visa.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-blue-900 mb-4">签证申请提示</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• 所有签证信息仅供参考，不构成法律意见</li>
          <li>• 具体案件请咨询持牌移民代理或移民律师</li>
          <li>• 签证政策可能随时变化，请以移民局官网为准</li>
          <li>• 提前准备材料，审理周期可能较长</li>
        </ul>
      </section>

      <section className="mt-8">
        <Link href="/" className="text-blue-800 hover:underline">
          ← 返回首页
        </Link>
      </section>
    </div>
  )
}
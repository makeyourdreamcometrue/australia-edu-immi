import Link from 'next/link'

const ARTICLES = {
  '1': {
    title: '澳大利亚学生签证（500类）最新政策变化',
    summary: '澳大利亚移民局今日发布学生签证最新政策，主要涉及签证申请材料要求、审理周期及国际学生打工时间限制等重要变化。',
    content: `澳大利亚内政事务部（Department of Home Affairs）于今日更新了学生签证（500子类）的申请要求。

【主要变化】

一、申请材料简化
根据最新政策，符合条件的申请人可简化部分申请材料。

二、审理周期更新
- 高等教育类：45-60天
- 中小学类：30-45天

三、打工时间规定
国际学生每两周可工作不超过48小时。

【政策背景】
此次政策调整旨在为国际学生提供更清晰的申请指引。`,
    impact: '影响群体：计划赴澳留学的学生、正在申请签证的学生。建议措施：申请前仔细核对最新材料清单、提前准备资金证明等材料。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    sourceUrl: 'https://www.homeaffairs.gov.au/',
    tags: ['500学生签证', '留学签证', '澳洲留学'],
    createdAt: '2026-03-31'
  },
  '2': {
    title: '澳大利亚技术移民配额与邀请最新动态',
    summary: '澳大利亚移民局公布本财年技术移民最新配额数据，189、190、491签证邀请分数及发放情况分析。',
    content: `澳大利亚移民局公布了最新的技术移民配额数据。

【本财年配额概览】

独立技术移民（189签证）：
- 本财年配额：16,500个
- 已发放：约8,200个

州担保技术移民（190签证）：
- 本财年配额：21,000个

偏远地区签证（491签证）：
- 本财年配额：23,000个

【建议】
1. 及时关注移民局官方网站获取最新数据
2. 确保EOI信息准确且最新`,
    impact: '影响群体：技术移民申请人。建议：评估自身移民分数、关注各州担保政策变化。',
    source: '澳大利亚移民局 (Department of Home Affairs)',
    sourceUrl: 'https://www.homeaffairs.gov.au/',
    tags: ['189独立技术移民', '技术移民', '永居'],
    createdAt: '2026-03-30'
  },
  '3': {
    title: '南澳大利亚州担保最新政策更新',
    summary: '南澳大利亚州政府发布最新州担保政策，增加了多个优先职业类别。',
    content: `南澳大利亚州政府近日更新了技术移民州担保政策。

【新增优先职业】

- 医疗健康类：护士、物理治疗师
- IT类：软件工程师、网络安全专家
- 工程类：土木工程师、电气工程师

【申请要求】

190签证（州担保）：
- 职业需在南澳职业列表上
- 满足内政部基本要求

491签证（偏远地区担保）：
- 更宽松的职业列表
- 最低EOI分数仅需65分`,
    impact: '影响群体：希望申请南澳州担保的技术移民申请人。',
    source: '南澳大利亚州政府',
    sourceUrl: 'https://www.sa.gov.au/',
    tags: ['190州担保', '州担保移民'],
    createdAt: '2026-03-29'
  },
  '4': {
    title: '维多利亚州190签证审理周期更新',
    summary: '维多利亚州政府公布最新签证审理周期，190签证审理时间约为8-12周。',
    content: `维多利亚州政府公布最新签证审理周期。

【审理时间】

190签证：8-12周
491签证：6-10周

【重点职业】

- 医护类
- IT类
- 工程类`,
    impact: '影响群体：申请维州190/491的申请人。',
    source: '维多利亚州政府',
    sourceUrl: 'https://www.vic.gov.au/',
    tags: ['190州担保', '签证审理'],
    createdAt: '2026-03-28'
  },
  '5': {
    title: '485毕业生工作签证最新政策解读',
    summary: '详解485工签的最新申请要求、适用范围以及需要注意的关键点。',
    content: `485毕业生工作签证是留学生毕业后留在澳洲工作的重要签证类型。

【申请要求】

- 完成至少2年澳洲学习
- 雅思至少6分
- 必须在毕业6个月内申请

【签证时长】

- 本科/授课型硕士：2年
- 研究型硕士/博士：3年或4年

【工作权利】

- 无工作限制
-可为任意雇主工作`,
    impact: '影响群体：澳洲毕业生。',
    source: 'Study Australia',
    sourceUrl: 'https://www.studyaustralia.gov.au/',
    tags: ['485工签', '毕业生工签'],
    createdAt: '2026-03-27'
  }
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = ARTICLES[params.id as keyof typeof ARTICLES]

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
          {article.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-gray-500 text-sm mb-6">
          来源: {article.source} | 发布日期: {article.createdAt}
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
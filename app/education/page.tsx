import Link from 'next/link'

const EDUCATION_NEWS = [
  {
    id: 'edu-1',
    title: '澳大利亚大学2026年最新排名 - 八大名校全面解析',
    summary: '2026年澳大利亚大学排名出炉，八大名校实力分析，附各大学特色专业和申请要求。',
    content: `【引言】

澳大利亚高等教育享誉全球，八大名校，更是其中的翘楚。本文为您详细解析2026年澳大利亚大学排名和各校特色。

【2026年八大名校排名】

1. 澳大利亚国立大学（ANU）
- 全球排名：前30
- 特色：政治学、国际关系、计算机科学
- 位置：堪培拉

2. 墨尔本大学
- 全球排名：前40
- 特色：医学、法律、商科、工程
- 位置：墨尔本

3. 悉尼大学
- 全球排名：前50
- 特色：医学、会计、金融、工程
- 位置：悉尼

4. 新南威尔士大学（UNSW）
- 全球排名：前50
- 特色：工程、商科、法律
- 位置：悉尼

5. 昆士兰大学
- 全球排名：前50
- 特色：农业、酒店管理、医学
- 位置：布里斯班

6. 莫纳什大学
- 全球排名：前60
- 特色：药剂学、医学、工程
- 位置：墨尔本

7. 西澳大利亚大学
- 全球排名：前100
- 特色：采矿工程、医学、会计
- 位置：珀斯

8. 阿德莱德大学
- 全球排名：前120
- 特色：医学、酿酒工程、会计
- 位置：阿德莱德

【申请要求】

本科入学：
- 雅思6.5分（各单项不低于6.0）
- 高考成绩或预科成绩
- 部分专业需要面试

研究生入学：
- 雅思6.5-7.0分
- 本科学位和成绩单
- 研究计划（研究型）
- 推荐信

【学费范围】

- 本科：25,000-45,000澳元/年
- 研究生：28,000-50,000澳元/年

【热门专业】

1. 商科（会计、金融、管理）
2. 工程（IT、土木、机械）
3. 医学与健康科学
4. 法律
5. 教育`,
    impact: `【影响群体】

- 计划赴澳留学的本科生
- 计划攻读研究生的学生
- 家长了解澳大利亚教育资源

【建议】

1. 提前规划申请timeline
2. 准备语言考试
3. 关注各大学申请截止日期
4. 准备申请材料
5. 考虑奖学金机会`,
    source: 'Study Australia - 2026年2月更新',
    sourceUrl: 'https://www.studyaustralia.gov.au/',
    tags: ['高等教育', '大学', '留学指南', '2026年排名'],
    createdAt: '2026-03-15'
  },
  {
    id: 'edu-2',
    title: '澳大利亚高中教育体系详解 - 公立与私立学校选择指南',
    summary: '全面介绍澳大利亚高中教育体系，公立与私立学校的区别，附各州顶尖高中推荐和申请流程。',
    content: `【引言】

澳大利亚的中小学教育质量享誉全球，本文为您详细解读澳大利亚高中教育体系。

【教育体系概览】

澳大利亚实行12年制义务教育：
- 小学：1-6年级（7年）
- 初中：7-10年级（4年）
- 高中：11-12年级（2年）

【学校类型】

一、公立学校
- 优势：学费较低、国际化程度高
- 学费：约15,000-20,000澳元/年
- 招生：本地学生为主

二、私立学校
- 优势：教学质量高、设施完善
- 学费：25,000-50,000澳元/年
- 招生：名额有限

三、教会学校
- 特色：宗教教育与学术并重
- 学费：20,000-40,000澳元/年

【各州优秀高中】

新南威尔士州：
- Sydney Grammar School
- Newcastle Grammar School

维多利亚州：
- Melbourne Grammar School
- Geelong Grammar

昆士兰州：
- Brisbane Grammar School
- St. Paul's School

【申请要求】

入读高中：
- 年龄：15-18岁
- 雅思5.5分或参加语言课程
- 完整���绩单
- 担保人材料

【签证要求】

500学生签证：
- 需要入读正式课程
- 购买OSHC健康保险
- 证明足够资金

【注意事项】

1. 提前申请（学位有限）
2. 准备语言考试成绩
3. 了解各校招生标准
4. 考虑住宿安排`,
    impact: `【影响群体】

- 计划送子女赴澳读高中的家长
- 初中毕业生

【建议】

1. 提前了解各校情况
2. 参加学校开放日
3. 准备申请材料
4. 考虑陪读签证`,
    source: 'Study Australia - 2026年1月更新',
    sourceUrl: 'https://www.studyaustralia.gov.au/',
    tags: ['高中教育', '留学', '中学', '学校选择'],
    createdAt: '2026-03-14'
  },
  {
    id: 'edu-3',
    title: '澳大利亚TAFE职业教育 - 实用技能培训最佳选择',
    summary: 'TAFE是澳大利亚实用的职业教育体系，详解TAFE课程选择、学费优势和就业前景。',
    content: `【引言】

TAFE（Technical and Further Education）是澳大利亚著名的职业教育体系，为学生提供实用的职业技能培训。

【TAFE优势】

1. 学制短：6个月-2年
2. 学费低：约5,000-20,000澳元/年
3. 实践强：课程注重实际操作
4. 就业好：毕业即就业
5. 移民快：技能职业容易移民

【热门课程】

一、商业类
- 会计 Certificate III/IV
- 商业管理 Diploma
- 市场营销 Certificate IV

二、IT类
- 网络安全 Certificate IV
- 软件开发 Diploma
- 数据分析 Diploma

三、工程类
- 木工 Certificate III
- 电工 Certificate III
- 汽车维修 Certificate III

四、健康护理类
- 老年护理 Certificate III
- 儿童教育 Certificate III
- 个人护理 Certificate III

五、酒店管理
- 酒店管理 Certificate III
- 烹饪 Certificate III
- 旅游 Certificate III

【申请要求】

1. 雅思5.5分或同等
2. 高中毕业或同等学历
3. 年满18岁（部分课程）

【学费】

- Certificate课程：5,000-10,000澳元
- Diploma课程：10,000-20,000澳元

【就业前景】

TAFE毕业生非常抢手，很多课程提供实习机会，毕业后就业率高。

【移民机会】

TAFE课程对应的职业在MLTSSL清单上，可以通过技术移民获取永居。`,
    impact: `【影响群体】

- 想要快速就业的学生
- 想要学习实用技能的人
- 考虑移民的人

【建议】

1. 选择热门专业
2. 关注就业率
3. 了解移民政策
4. 考虑奖学金`,
    source: 'TAFE Australia - 2026年2月更新',
    sourceUrl: 'https://www.tafesa.edu.au/',
    tags: ['职业教育', 'TAFE', '技能培训', '实用课程'],
    createdAt: '2026-03-13'
  },
  {
    id: 'edu-4',
    title: '澳大利亚研究生申请完全指南 - 硕士与博士申请流程',
    summary: '详解澳大利亚研究生申请流程，包括研究型硕士、授课型硕士和博士的申请要求和步骤。',
    content: `【引言】

澳大利亚的研究生教育质量世界领先，本文为您详细解读申请流程。

【研究生类型】

一、授课型硕士（Master by Coursework）
- 学制：1-2年
- 特点：课堂授课为主
- 适合：想要快速就业的学生
- 例子：Master of Business, Master of Engineering

二、研究型硕士（Master by Research）
- 学制：1-2年
- 特点：研究为主
- 适合：想要深入研究的学生
- 要求：需要找到导师

三、博士（PhD）
- 学制：3-4年
- 特点：独立研究
- 适合：想要做学术研究的学生
- 要求：研究计划、导师同意

【申请要求】

授课型硕士：
1. 雅思6.5-7.0分
2. 本科学位和成绩单
3. 个人陈述
4. 推荐信（2封）

研究型硕士/博士：
1. 雅思7.0分
2. 本科学位（荣誉学位优先）
3. 研究计划
4. 导师套磁
5. 推荐信（2-3封）

【申请流程】

1. 选定���校和专业
2. 准备申请材料
3. 提交申请（直接向大学或中介）
4. 等待录取通知
5. 接受录取
6. 申请签证

【学费范围】

- 授课型硕士：30,000-50,000澳元/年
- 研究型硕士：25,000-40,000澳元/年
- 博士：25,000-45,000澳元/年

【奖学金】

澳大利亚各大学提供多种奖学金：
1. 国际学生奖学金
2. 研究奖学金
3. 院系奖学金

申请奖学金通常需要：
- 优秀的学术成绩
- 研究计划
- 推荐信`,
    impact: `【影响群体】

- 本科毕业生
- 想要深造的学生

【时间规划】

建议提前8-12个月开始准备：
1. 选定目标学校
2. 准备语言考试
3. 准备申请材料
4. 提交申请
5. 等待结果
6. 申请签证`,
    source: 'Study Australia - 2026年1月更新',
    sourceUrl: 'https://www.studyaustralia.gov.au/',
    tags: ['研究生', '硕士', '博士', '留学指南', '申请流程'],
    createdAt: '2026-03-12'
  },
  {
    id: 'edu-5',
    title: '澳大利亚留学生活成本全解析 - 各城市费用对比',
    summary: '详细分析澳大利亚各主要城市的生活成本，包括住宿、餐饮、交通等费用对比。',
    content: `【引言】

计划赴澳留学，生活成本是重要考量因素。本文为您详细分析各城市费用。

【主要城市生活成本】

一、悉尼（悉尼）
- 每周住宿：400-600澳元
- 每周餐饮：150-250澳元
- 每周交通：50-80澳元
- 每周总花费：600-930澳元

二、墨尔本
- 每周住宿：350-500澳元
- 每周餐饮：150-200澳元
- 每周交通：40-70澳元
- 每周总花费：540-770澳元

三、布里斯班
- 每周住宿：300-450澳元
- 每周餐饮：120-180澳元
- 每周交通：30-50澳元
- 每周总花费：450-680澳元

四、阿德莱德
- 每周住宿：250-400澳元
- 每周餐饮：100-150澳元
- 每周交通：30-40澳元
- 每周总花费：380-590澳元

五、珀斯
- 每周住宿：280-420澳元
- 每周餐饮：120-180澳元
- 每周交通：40-60澳元
- 每周总花费：440-660澳元

六、堪培拉
- 每周住宿：300-450澳元
- 每周餐饮：120-180澳元
- 每周交通：40-50澳元
- 每周总花费：460-680澳元

【住宿选择】

1. 学校宿舍：200-500澳元/周
2. homestay：250-400澳元/周
3. 合租公寓：200-400澳元/周
4. 独立租房：300-600澳元/周

【兼职收入】

- 最低工资：21.38澳元/小时
- 每周可工作：48小时（学生签证）
- 每周收入：约800-1000澳元（全职兼职）

【省钱建议】

1. 申请校内工作
2. 寻找合租
3. 自己做饭
4. 购买二手物品
5. 使用学生折扣`,
    impact: `【预算建议】

- 悉尼/墨尔本：25,000-35,000澳元/年
- 其他城市：20,000-28,000澳元/年

【建议】

1. 提前做好预算
2. 申请奖学金
3. 寻找兼职
4. 合理安排支出`,
    source: 'Study Australia - 2026年更新',
    sourceUrl: 'https://www.studyaustralia.gov.au/',
    tags: ['生活成本', '留学预算', '城市选择', '省钱'],
    createdAt: '2026-03-11'
  }
]

export default function EducationPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">澳大利亚教育资讯</h1>
        <p className="text-lg opacity-90">
          全面介绍澳大利亚教育体系：大学、高中、TAFE及研究生申请
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link href="/tag/edu-uni" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🎓</span>
          <p className="font-semibold mt-2">大学</p>
        </Link>
        <Link href="/tag/edu-high" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🏫</span>
          <p className="font-semibold mt-2">高中</p>
        </Link>
        <Link href="/tag/edu-tafe" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🔧</span>
          <p className="font-semibold mt-2">TAFE</p>
        </Link>
        <Link href="/tag/edu-master" className="bg-white p-4 rounded-lg shadow hover:shadow-md text-center">
          <span className="text-2xl">🎓</span>
          <p className="font-semibold mt-2">研究生</p>
        </Link>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">最新教育资讯 ({EDUCATION_NEWS.length}篇)</h3>
        <div className="space-y-4">
          {EDUCATION_NEWS.map((article) => (
            <article key={article.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md border-l-4 border-green-600">
              <Link href={`/edu/${article.id}`}>
                <h4 className="text-lg font-semibold text-green-800 hover:underline">{article.title}</h4>
              </Link>
              <p className="text-gray-600 mt-2">{article.summary}</p>
              <div className="flex gap-2 mt-3">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
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

      <section className="mt-8 bg-green-50 p-6 rounded-lg">
        <h2 className="text-lg font-bold text-green-800 mb-3">教育服务</h2>
        <ul className="text-gray-700 space-y-2">
          <li>• 语言课程（ELICOS）</li>
          <li>• 中小学教育</li>
          <li>• 职业教育（TAFE）</li>
          <li>• 高等教育（大学）</li>
          <li>• 研究生教育</li>
        </ul>
      </section>

      <section className="mt-8">
        <Link href="/" className="text-green-800 hover:underline">
          ← 返回首页
        </Link>
      </section>
    </div>
  )
}
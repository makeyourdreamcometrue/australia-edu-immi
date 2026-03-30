# 澳大利亚留学移民资讯网

澳大利亚留学移民最新政策、签证动态、州担保信息发布平台。

## 功能特性

- 🗞️ 每日自动抓取澳大利亚官方新闻
- 📝 自动生成中文资讯文章
- 🏷️ 智能分类和标签系统
- 📱 响应式设计，支持多设备访问

## 技术栈

- **前端**: Next.js 14 + React + TypeScript
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL + Prisma
- **部署**: Vercel
- **爬虫**: Cheerio + Axios

## 数据库模型

```prisma
model Article {
  id          String   @id @default(cuid())
  title       String
  summary     String   @db.Text
  content     String   @db.Text
  impact      String   @db.Text
  source      String
  sourceUrl   String?
  tags        String[]
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model CrawlLog {
  id        String   @id @default(cuid())
  source    String
  url       String
  status    String
  createdAt DateTime @default(now())
}
```

## 快速开始

```bash
# 安装依赖
npm install

# 设置环境变量
cp .env.example .env
# 编辑 .env 添加 DATABASE_URL

# 运行开发服务器
npm run dev

# 抓取新闻（需要先设置 DATABASE_URL）
npm run crawl

# 生成每日资讯
npm run daily
```

## 自动化

- **每日生成**: `npm run daily` - 生成当日新闻文章
- **周报摘要**: 周日自动生成一周政策回顾
- **部署**: 连接 Vercel 自动部署

## 官方信息来源

- 澳大利亚移民局 (Department of Home Affairs)
- Study Australia
- 新南威尔士州移民局
- 维多利亚州移民局
- 昆士兰州移民局
- 西澳大利亚州移民局
- 南澳大利亚州移民局
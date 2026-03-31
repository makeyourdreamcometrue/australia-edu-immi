import Link from 'next/link'

export default function NewsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">最新资讯</h1>
      
      <div className="bg-white p-8 rounded-lg text-center text-gray-500">
        <p className="text-lg">📰 暂无文章</p>
        <p className="text-sm mt-2">内容正在获取中，请稍后再访问</p>
        <Link href="/" className="inline-block mt-4 text-blue-800 hover:underline">
          返回首页
        </Link>
      </div>
    </div>
  )
}
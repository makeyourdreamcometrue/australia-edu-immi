import Link from 'next/link'

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="text-center py-12">
      <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
      <Link href="/" className="text-blue-800 hover:underline">
        返回首页
      </Link>
    </div>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '澳大利亚留学移民资讯',
  description: '澳大利亚留学移民最新政策、签证动态、州担保信息',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-blue-900 text-white py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🇦🇺 澳大利亚留学移民资讯</h1>
            <nav className="flex gap-6">
              <a href="/" className="hover:underline">首页</a>
              <a href="/news" className="hover:underline">最新资讯</a>
              <a href="/visa" className="hover:underline">签证政策</a>
              <a href="/about" className="hover:underline">关于我们</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto py-8 px-6">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>© 2026 澳大利亚留学移民资讯 | 专业·权威·及时</p>
          <p className="text-sm text-gray-400 mt-2">信息来源：澳大利亚移民局、Study Australia、及各州政府官方网站</p>
        </footer>
      </body>
    </html>
  )
}
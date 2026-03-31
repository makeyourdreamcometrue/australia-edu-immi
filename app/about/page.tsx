export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">关于我们</h1>
        <p className="text-lg opacity-90">
          澳大利亚留学移民资讯平台
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">平台介绍</h2>
        <p className="text-gray-700 mb-4">
          我们致力于为华人提供最及时、最权威的澳大利亚留学移民政策资讯。
          所有内容均来源于澳大利亚官方机构，包括移民局、各州政府及Study Australia等。
        </p>
        <p className="text-gray-700">
          网站内容仅供一般信息参考，不构成法律意见。具体案件请咨询持牌移民代理或移民律师。
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">信息来源</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• 澳大利亚移民局 (Department of Home Affairs)</li>
          <li>• Study Australia 澳大利亚教育署</li>
          <li>• 新南威尔士州政府</li>
          <li>• 维多利亚州政府</li>
          <li>• 昆士兰州政府</li>
          <li>• 南澳大利亚州政府</li>
          <li>• 西澳大利亚州政府</li>
          <li>• ACT堪培拉政府</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">免责声明</h2>
        <p className="text-gray-700 text-sm">
          本网站所有内容仅供一般信息参考，不构成法律意见。澳大利亚移民法律复杂且经常变化，
          本网站不对信息的准确性、完整性或时效性承担任何责任。具体案件请咨询持牌移民代理
          或移民律师。
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">联系方式</h2>
        <p className="text-gray-700">
          网站：<a href="https://australia-edu-immi-1xqa.vercel.app" className="text-blue-800 hover:underline">
            australia-edu-immi-1xqa.vercel.app
          </a>
        </p>
        <p className="text-gray-700 mt-2">
          © 2026 澳大利亚留学移民资讯 | 专业·权威·及时
        </p>
      </section>

      <section className="mt-8">
        <a href="/" className="text-blue-800 hover:underline">
          ← 返回首页
        </a>
      </section>
    </div>
  )
}
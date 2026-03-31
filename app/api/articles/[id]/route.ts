import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  try {
    const { id } = params
    const article = await prisma.article.findUnique({
      where: { id },
    })
    
    if (!article) {
      return Response.json({ error: 'Article not found' }, { status: 404 })
    }
    
    return Response.json(article)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
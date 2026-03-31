import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request) {
  try {
    const articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
    
    return Response.json(articles)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
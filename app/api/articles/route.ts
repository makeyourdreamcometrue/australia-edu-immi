import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
    
    return Response.json(articles)
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 })
  }
}
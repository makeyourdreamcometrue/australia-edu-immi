import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

// Force dynamic rendering to avoid build-time DB connection
export async function GET() {
  try {
    // Add a small timeout test
    await prisma.$connect()
    
    const articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })
    
    await prisma.$disconnect()
    return Response.json(articles)
  } catch (error: any) {
    console.error('Database error:', error.message)
    return Response.json({ 
      error: 'Database connection failed',
      details: error.message 
    }, { status: 500 })
  }
}
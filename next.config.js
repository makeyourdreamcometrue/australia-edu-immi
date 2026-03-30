/** @type {import('next').NextConfig} */
const nextConfig = {
  // No static export - we need server for database (Prisma)
  // output: 'export', // REMOVED - needs server-side rendering
}

module.exports = nextConfig
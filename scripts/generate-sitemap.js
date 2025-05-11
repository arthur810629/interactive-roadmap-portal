const fs = require('fs')
const path = require('path')

// Пример: можно грузить из JSON или .js
const categories = [
  'programming',
  'testing',
  'data',
  'ai',
  'product',
  'project',
  'design',
  'marketing',
  'hr',
  'management',
]

const professions = [
  'frontend',
  'backend',
  'data-analyst',
  'bi',
  'fullstack',
]

const skills = [
  'html', 'css', 'javascript', 'react', 'nodejs', 'sql', 'python',
]

const baseUrl = 'https://skillsmap.io'
const date = new Date().toISOString().split('T')[0] // YYYY-MM-DD

function createEntry(route) {
  return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
  </url>`
}

const entries = [
  '/',
  ...categories.map((id) => `/roadmap/${id}`),
  ...professions.map((id) => `/profession/${id}`),
  ...skills.map((id) => `/skill/${id}`),
].map(createEntry)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${entries.join('\n')}
</urlset>`

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap)

console.log('✅ sitemap.xml создан в /public')

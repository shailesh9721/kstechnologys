// Runs automatically before `npm run build`. Writes public/sitemap.xml and public/robots.txt
import { writeFileSync } from 'node:fs'
import { SITE, SERVICES, POSTS, CITIES, cityPath } from '../src/data/content.js'

const paths = [
  '/', '/about', '/services', ...SERVICES.map((s) => `/services/${s.slug}`),
  '/portfolio', '/pricing', '/blog', ...POSTS.map((p) => `/blog/${p.slug}`),
  '/faq', '/locations', ...CITIES.map(cityPath), '/contact', '/privacy-policy', '/terms',
]
const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths.map((p) => `<url><loc>${SITE}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`).join('\n') + `\n</urlset>\n`
writeFileSync('public/sitemap.xml', xml)
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\nDisallow: /thank-you\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`sitemap: ${paths.length} URLs`)

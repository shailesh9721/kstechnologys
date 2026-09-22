import { useEffect } from 'react'
import { CFG, SITE, CITIES } from '../data/content'

function setMeta(sel, attr, val, create) {
  let el = document.head.querySelector(sel)
  if (!el) { el = document.createElement(create.tag); Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v)); document.head.appendChild(el) }
  el.setAttribute(attr, val)
}

/** Sets <title>, description, canonical, Open Graph and optional JSON-LD for each route. */
export default function Seo({ title, desc, path = '/', schema }) {
  useEffect(() => {
    const full = title.includes(CFG.brand) ? title : `${title} | ${CFG.brand}`
    const url = SITE + path
    document.title = full
    setMeta('meta[name="description"]', 'content', desc, { tag: 'meta', attrs: { name: 'description' } })
    setMeta('link[rel="canonical"]', 'href', url, { tag: 'link', attrs: { rel: 'canonical' } })
    setMeta('meta[property="og:title"]', 'content', full, { tag: 'meta', attrs: { property: 'og:title' } })
    setMeta('meta[property="og:description"]', 'content', desc, { tag: 'meta', attrs: { property: 'og:description' } })
    setMeta('meta[property="og:url"]', 'content', url, { tag: 'meta', attrs: { property: 'og:url' } })
    const org = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: CFG.brand, url: SITE + '/', email: CFG.email, telephone: CFG.phone, areaServed: ['India', ...CITIES], sameAs: Object.values(CFG.social) }
    let ld = document.getElementById('ld-json')
    if (!ld) { ld = document.createElement('script'); ld.id = 'ld-json'; ld.type = 'application/ld+json'; document.head.appendChild(ld) }
    ld.textContent = JSON.stringify(schema ? [org, schema] : org)
  }, [title, desc, path, schema])
  return null
}

export const faqSchema = (items) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})

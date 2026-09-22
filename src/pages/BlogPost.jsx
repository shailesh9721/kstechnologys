import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import NotFound from './NotFound'
import { Section, Wrap, PageHero, PostCard } from '../components/ui'
import { CFG, POSTS } from '../data/content'

export default function BlogPost() {
  const { slug } = useParams()
  const p = POSTS.find((x) => x.slug === slug)
  if (!p) return <NotFound />
  const date = new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, datePublished: p.date, description: p.desc, author: { '@type': 'Organization', name: CFG.brand } }
  return (
    <>
      <Seo path={`/blog/${p.slug}`} title={p.title} desc={p.desc} schema={schema} />
      <PageHero title={p.title} lead={`${date} · ${p.read} read`} crumbs={[['Blog', '/blog'], ['Article']]} />
      <Section className="article !pt-8">
        <div className="narrow">
          {/* content comes from src/data/content.js (your own trusted text) */}
          <div dangerouslySetInnerHTML={{ __html: p.body }} />
          <hr className="border-0 border-t border-line my-10" />
          <p className="text-muted">Need help with this? <Link to="/contact"><b>Talk to our team</b></Link>.</p>
        </div>
      </Section>
      <Section flush><Wrap><h2>More to read</h2><div className="grid gap-5 md:grid-cols-3">{POSTS.filter((o) => o !== p).map((o) => <PostCard key={o.slug} p={o} />)}</div></Wrap></Section>
    </>
  )
}

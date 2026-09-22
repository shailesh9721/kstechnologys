import { Link, useParams } from 'react-router-dom'
import Seo, { faqSchema } from '../components/Seo'
import NotFound from './NotFound'
import { Section, Wrap, SecHead, Two, PageHero, CtaBand, Faq, FeatGrid, TechChips, Steps } from '../components/ui'
import { SERVICES, WA_LINK } from '../data/content'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const others = SERVICES.filter((o) => o.slug !== s.slug).slice(0, 3)
  return (
    <>
      <Seo path={`/services/${s.slug}`} title={s.name} desc={`${s.short} ${s.lead}`.slice(0, 160)} schema={faqSchema(s.faqs)} />
      <PageHero title={s.name} lead={s.lead} crumbs={[['Services', '/services'], [s.name]]} />
      <Section><Wrap>
        <SecHead title="What you get" text={s.short} />
        <FeatGrid items={s.items} />
        <div className="btn-row">
          <Link to={`/contact?service=${encodeURIComponent(s.name)}`} className="btn btn-primary">Get a quote for this</Link>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Ask on WhatsApp</a>
        </div>
      </Wrap></Section>
      <Section flush><Two><div><h2>Tools we use</h2><p className="text-muted">Chosen for speed, security and easy long-term maintenance.</p></div><TechChips items={s.tech} /></Two></Section>
      <Section flush><Wrap><SecHead title="How it works" text="What happens after you get in touch." /><Steps /></Wrap></Section>
      <Section flush><Two><h2>Common questions</h2><Faq items={s.faqs} /></Two></Section>
      <Section flush><Wrap>
        <h2>Related services</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {others.map((o) => (<Link key={o.slug} to={`/services/${o.slug}`} className="p-5 border border-line rounded-m bg-surface no-underline hover:border-brand"><b className="block font-display text-[1.05rem]">{o.name}</b><span className="text-muted text-[.95rem]">{o.short}</span></Link>))}
        </div>
      </Wrap></Section>
      <CtaBand />
    </>
  )
}

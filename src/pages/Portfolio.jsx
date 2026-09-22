import { useState } from 'react'
import Seo from '../components/Seo'
import { Section, Wrap, SecHead, Two, PageHero, CtaBand, Quotes, Stats, WorkCard } from '../components/ui'
import { WORK, WORK_CATS } from '../data/content'

export default function Portfolio() {
  const [f, setF] = useState('all')
  const list = WORK.map((w, i) => ({ w, wide: i < 2 })).filter(({ w }) => f === 'all' || w.cat === f)
  const feat = WORK[6]
  return (
    <>
      <Seo path="/portfolio" title="Portfolio" desc="Websites, e-commerce stores, Figma-to-HTML builds and web apps delivered by our development team." />
      <PageHero title="Our work" lead="A selection of websites, stores and web apps built by our team, some under white-label agreements." crumbs={[['Portfolio']]} />
      <Section><Wrap>
        <div className="flex flex-wrap gap-2 mb-7" role="group" aria-label="Filter projects">
          {['all', ...WORK_CATS].map((c) => (
            <button key={c} type="button" aria-pressed={f === c} onClick={() => setF(c)}
              className={`px-4 py-2 rounded-full border text-[.95rem] font-medium cursor-pointer ${f === c ? 'bg-ink text-bg border-ink' : 'bg-surface text-ink border-line'}`}>{c === 'all' ? 'All' : c}</button>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-5">{list.map(({ w, wide }) => <WorkCard key={w.t} w={w} wide={wide && f === 'all'} />)}</div>
      </Wrap></Section>
      <Section flush>
        <Two>
          <div><h2>Featured project: {feat.t}</h2><p className="lead">{feat.d}</p></div>
          <div>
            <h3>The challenge</h3><p className="text-muted">The store was slow on mobile and the theme made collection pages hard to browse.</p>
            <h3>What we did</h3><p className="text-muted">Customised the theme, compressed and resized media, simplified filters and cleaned up third-party scripts.</p>
            <h3>The outcome</h3><p className="text-muted">Faster pages, a smoother product browsing experience and fewer abandoned carts.</p>
          </div>
        </Two>
      </Section>
      <Section flush><Wrap><SecHead title="Client feedback" text="What people say after launch." /><Quotes /></Wrap></Section>
      <Stats />
      <CtaBand title="Want your project on this page?" />
    </>
  )
}

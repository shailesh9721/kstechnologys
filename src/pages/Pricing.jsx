import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import { Section, Wrap, SecHead, Two, PageHero, CtaBand, Faq } from '../components/ui'
import { PLANS, MAINT, FAQS } from '../data/content'

export default function Pricing() {
  return (
    <>
      <Seo path="/pricing" title="Pricing" desc="Fixed-price web development plans: starter and business websites, e-commerce, web apps and monthly maintenance." />
      <PageHero title="Simple, fixed-price plans" lead="Starting prices for common projects. Every quote is fixed after we review your design and requirements." crumbs={[['Pricing']]} />
      <Section><Wrap>
        <div className="grid gap-5 lg:grid-cols-3 items-stretch">
          {PLANS.map((p) => (
            <div key={p.name} className={`rounded-l p-8 flex flex-col border ${p.feat ? 'bg-dark text-dark-ink border-dark' : 'bg-surface border-line'}`}>
              {p.feat && <span className="self-start bg-mark text-[#14213D] text-[.8rem] font-semibold px-2.5 py-0.5 rounded-md mb-3">Most chosen</span>}
              <h3>{p.name}</h3>
              <p className={p.feat ? 'text-[#B8C2E0]' : 'text-muted'}>{p.blurb}</p>
              <div className="font-display font-bold text-[2.4rem] tracking-tight mt-1">{p.price !== 'Custom' && 'Rs. '}{p.price}</div>
              <span className={p.feat ? 'text-[#B8C2E0]' : 'text-muted'}>{p.note}</span>
              <ul className="list-none p-0 my-5 grid gap-2.5 flex-1">
                {p.feats.map((f) => (<li key={f} className="flex gap-2.5 items-start text-[.99rem]"><Icon name="check" className={`w-[1.1em] h-[1.1em] mt-1 shrink-0 ${p.feat ? 'text-mark' : 'text-ok'}`} />{f}</li>))}
              </ul>
              <Link to="/contact" className={`btn ${p.feat ? 'btn-light' : 'btn-primary'} justify-center`}>{p.cta}</Link>
            </div>
          ))}
        </div>
        <p className="text-muted mt-5">Prices exclude GST, domain, hosting and paid plugins or themes. Final quote depends on the number of pages, features and the state of your design files.</p>
      </Wrap></Section>
      <Section flush><Wrap>
        <SecHead title="Maintenance plans" text="Keep your site updated, backed up and secure after launch." />
        <div className="overflow-x-auto"><table className="w-full border-collapse bg-surface border border-line text-[.98rem]">
          <thead><tr>{['Plan', 'Price', 'Includes'].map((h) => <th key={h} className="text-left p-3.5 bg-soft font-display border-b border-line">{h}</th>)}</tr></thead>
          <tbody>{MAINT.map(([a, b, c]) => <tr key={a}><td className="p-3.5 border-b border-line"><b>{a}</b></td><td className="p-3.5 border-b border-line">{b}</td><td className="p-3.5 border-b border-line">{c}</td></tr>)}</tbody>
        </table></div>
      </Wrap></Section>
      <Section flush><Two>
        <div><h2>What affects the price</h2><p className="lead">The more we know upfront, the more accurate the quote.</p></div>
        <ul className="grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
          {['Number of unique page designs', 'Custom features and integrations', 'Content and media readiness', 'Timeline and urgency', 'E-commerce catalogue size', 'Design file quality'].map((t) => <li key={t} className="feat !py-4 font-display font-bold">{t}</li>)}
        </ul>
      </Two></Section>
      <Section flush><Two><h2>Pricing questions</h2><Faq items={[FAQS[3], FAQS[0], FAQS[5]]} /></Two></Section>
      <CtaBand title="Not sure which plan fits?" text="Send us your design or a rough idea and we will recommend the simplest option." />
    </>
  )
}

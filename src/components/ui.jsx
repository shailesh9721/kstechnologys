import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon, { FEAT_ICONS } from './Icon'
import { CFG, SERVICES, TESTIMONIALS, WA_LINK } from '../data/content'

export const Section = ({ children, flush = false, className = '', dark = false }) => (
  <section className={`${flush ? 'pb-14 md:pb-24' : 'py-14 md:py-24'} ${dark ? 'bg-dark text-dark-ink' : ''} ${className}`}>{children}</section>
)
export const Wrap = ({ children, className = '' }) => <div className={`wrap ${className}`}>{children}</div>

export const SecHead = ({ title, text }) => (
  <div className="grid gap-2 md:grid-cols-[1fr_.8fr] md:gap-8 items-end mb-9">
    <h2 className="!mb-0">{title}</h2>
    {text && <p className="!m-0 text-muted">{text}</p>}
  </div>
)
export const Two = ({ children, className = '' }) => (
  <div className={`wrap grid gap-7 md:gap-14 md:grid-cols-2 items-start ${className}`}>{children}</div>
)

export const PageHero = ({ title, lead, crumbs = [] }) => (
  <div className="pt-11 md:pt-[4.6rem] pb-7 md:pb-10 border-b border-line bg-surface">
    <Wrap>
      <nav className="crumbs flex flex-wrap gap-2 text-[.92rem] text-muted mb-5" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {crumbs.map(([t, to]) => (
          <span key={t} className="flex gap-2"><span>/</span>{to ? <Link to={to}>{t}</Link> : <span>{t}</span>}</span>
        ))}
      </nav>
      <h1 className="!text-[clamp(2.1rem,4.6vw,3.6rem)] max-w-[20ch]">{title}</h1>
      <p className="lead !mb-0">{lead}</p>
    </Wrap>
  </div>
)

export const CtaBand = ({ title = "Have a design or an idea? Let's build it.", text = 'Tell us what you need. You will get a clear scope, timeline and quote, usually within one working day.' }) => (
  <Section flush={false}>
    <Wrap>
      <div className="bg-brand text-brand-ink rounded-l p-8 md:p-14 grid gap-8 md:grid-cols-[1.3fr_1fr] items-center">
        <div><h2 className="!mb-2">{title}</h2><p className="!m-0 opacity-90">{text}</p></div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link to="/contact" className="btn bg-white text-[#14213D] hover:-translate-y-0.5">Start your project</Link>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn border-white text-white hover:bg-white hover:text-[#14213D]">Chat on WhatsApp</a>
        </div>
      </div>
    </Wrap>
  </Section>
)

export const Faq = ({ items }) => (
  <div className="faq">
    {items.map(([q, a]) => (<details key={q}><summary>{q}</summary><p className="mt-3 mb-0 text-muted max-w-[68ch]">{a}</p></details>))}
  </div>
)

export const TechChips = ({ items }) => (
  <div className="flex flex-wrap gap-2">{items.map((t) => <span key={t} className="chip">{t}</span>)}</div>
)

export const Steps = ({ className = '' }) => (
  <ol className={`steps line grid gap-x-[1.4rem] gap-y-8 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
    {[['Discover', 'We review your design, content and goals, then send a scope, timeline and fixed quote.'],
      ['Build', 'Development starts in a private staging site. You see progress every week.'],
      ['Test', 'We test on real phones and browsers, check speed and fix your feedback.'],
      ['Launch', 'We go live, hand over files and access, and stay on call for post-launch fixes.']].map(([h, p]) => (
      <li key={h}><h3 className="!mb-1">{h}</h3><p className="!m-0 text-muted text-[.98rem]">{p}</p></li>
    ))}
  </ol>
)

export const SvcRows = () => (
  <div className="border-b border-line">
    {SERVICES.map((s) => (
      <Link key={s.slug} to={`/services/${s.slug}`} className="group grid grid-cols-[1fr_44px] md:grid-cols-[1fr_1.3fr_44px] gap-x-6 gap-y-1 items-center py-6 px-1 border-t border-line no-underline transition-all hover:bg-surface hover:px-5">
        <h3 className="!m-0">{s.name}</h3>
        <p className="!m-0 text-muted col-start-1 row-start-2 md:col-start-auto md:row-start-auto">{s.short}</p>
        <span className="w-11 h-11 rounded-full border border-line grid place-items-center row-span-2 md:row-span-1 col-start-2 md:col-start-3 row-start-1 transition group-hover:bg-brand group-hover:text-brand-ink group-hover:border-brand"><Icon name="chev" className="w-[18px] h-[18px]" /></span>
      </Link>
    ))}
  </div>
)

export const FeatGrid = ({ items }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {items.map(([t, d], i) => (
      <div key={t} className="feat"><Icon name={FEAT_ICONS[i % 6]} className="w-[26px] h-[26px] text-brand mb-3" /><h3 className="!text-[1.12rem] !mb-1">{t}</h3><p className="!m-0 text-muted text-[.98rem]">{d}</p></div>
    ))}
  </div>
)

export const WorkCard = ({ w, wide }) => (
  <article className={`card overflow-hidden flex flex-col col-span-12 sm:col-span-6 ${wide ? 'lg:col-span-6' : 'lg:col-span-4'}`}>
    <div className={`${wide ? 'aspect-[16/10] lg:aspect-[16/7]' : 'aspect-[16/10]'} pt-[12%] px-[10%] relative overflow-hidden`} style={{ background: w.c2 }}>
      <div className="bg-white rounded-t-[10px] h-full p-[9px_11px] shadow-[0_12px_28px_-12px_rgba(20,33,61,.35)]">
        <div className="flex gap-1 mb-2">{[0, 1, 2].map((i) => <i key={i} className="w-1.5 h-1.5 rounded-full bg-[#D9DEE8]" />)}</div>
        <span className="block h-3.5 w-[70%] rounded mb-1.5" style={{ background: w.c1 }} />
        <span className="block h-[7px] w-[90%] rounded bg-[#E3E7F2] mb-1.5" />
        <span className="block h-[7px] w-[55%] rounded bg-[#E3E7F2]" />
        <div className="grid grid-cols-3 gap-1.5 mt-2.5">
          <i className="h-[34px] rounded-[5px] opacity-85" style={{ background: w.c1 }} />
          <i className="h-[34px] rounded-[5px]" style={{ background: w.c2 }} /><i className="h-[34px] rounded-[5px]" style={{ background: w.c2 }} />
        </div>
      </div>
    </div>
    <div className="p-[1.3rem_1.4rem_1.5rem]"><h3 className="!mb-1">{w.t}</h3><p className="text-muted text-[.98rem] !mb-3.5">{w.d}</p><span className="chip">{w.cat}</span></div>
  </article>
)

export const PostCard = ({ p }) => (
  <Link to={`/blog/${p.slug}`} className="card flex flex-col no-underline overflow-hidden transition hover:-translate-y-1">
    <div className="aspect-[2/1] grid place-items-center p-4 text-center font-mono text-[.95rem] text-white" style={{ background: p.c1 }}>{p.read} read</div>
    <div className="p-[1.3rem_1.4rem_1.5rem]">
      <span className="text-[.88rem] text-muted">{new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
      <h3 className="!mt-1 !mb-2">{p.title}</h3><p className="text-muted text-[.98rem] !mb-0">{p.desc}</p>
    </div>
  </Link>
)

export const Quotes = () => (
  <div className="grid grid-flow-col auto-cols-[minmax(300px,420px)] gap-5 overflow-x-auto snap-x snap-mandatory pb-4" tabIndex={0} aria-label="Client feedback">
    {TESTIMONIALS.map(([i, r, q]) => (
      <figure key={i} className="card m-0 p-7 snap-start">
        <p className="text-[1.08rem] !mb-5">&ldquo;{q}&rdquo;</p>
        <figcaption className="flex items-center gap-3">
          <span className="w-[42px] h-[42px] rounded-full bg-brand text-brand-ink grid place-items-center font-display font-bold">{i}</span>
          <b>{r}</b>
        </figcaption>
      </figure>
    ))}
  </div>
)

function Counter({ end, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(end)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      setN(0)
      const s = performance.now()
      const tick = (now) => { const k = Math.min(1, (now - s) / 1200); setN(Math.round(end * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(tick) }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [end])
  return <b ref={ref} className="block font-display font-bold text-[clamp(1.9rem,4vw,2.9rem)] leading-none tracking-tight">{n}{suffix}</b>
}

export const Stats = () => {
  const s = CFG.stats
  const rows = [[s.years, '+', 'years building websites'], [s.projects, '+', 'websites and apps delivered'], [s.clients, '+', 'happy clients'], [s.countries, '', 'countries served']]
  return (
    <div className="bg-soft py-10">
      <Wrap className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {rows.map(([n, suf, l]) => (<div key={l}><Counter end={n} suffix={suf} /><span className="text-muted text-[.97rem]">{l}</span></div>))}
      </Wrap>
    </div>
  )
}

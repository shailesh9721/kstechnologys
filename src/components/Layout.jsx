import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { CFG, SERVICES, CITIES, WA_LINK, cityPath } from '../data/content'
import { store } from '../lib/storage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const navLink = ({ isActive }) => `block px-3 py-2 rounded-lg font-medium no-underline hover:bg-soft max-lg:py-4 max-lg:text-[1.1rem] max-lg:border-b max-lg:border-line max-lg:rounded-none ${isActive ? 'bg-soft' : ''}`

function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light')
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next); document.documentElement.setAttribute('data-theme', next); store.set('kst-theme', next)
  }
  return (
    <header className="sticky top-0 z-[100] border-b border-line">
      {/* blur lives on a sibling layer so it doesn't trap the fixed mobile menu */}
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-[color-mix(in_srgb,var(--bg)_88%,transparent)]" />
      <div className="wrap flex items-center gap-6 min-h-[70px]">
        <Link to="/" className="flex items-center gap-2.5 no-underline font-display font-bold text-[1.25rem] tracking-tight" aria-label={`${CFG.brand} home`}>
          <span className="w-[34px] h-[34px] rounded-[9px] bg-brand text-brand-ink grid place-items-center font-mono font-semibold text-[.82rem] tracking-normal">KS</span>{CFG.brand}
        </Link>
        <nav id="nav" aria-label="Main" className={`lg:ml-auto max-lg:fixed max-lg:inset-x-0 max-lg:top-[70px] max-lg:bottom-0 max-lg:bg-bg max-lg:px-5 max-lg:pt-4 max-lg:pb-12 max-lg:overflow-auto max-lg:transition-transform max-lg:duration-200 ${open ? 'max-lg:translate-x-0 max-lg:visible' : 'max-lg:translate-x-full max-lg:invisible'}`}>
          <ul className="flex items-center gap-1 max-lg:flex-col max-lg:items-stretch list-none p-0 m-0">
            <li><NavLink to="/" end className={navLink}>Home</NavLink></li>
            <li className="group relative">
              <NavLink to="/services" end className={(s) => navLink(s) + ' flex items-center gap-1'}>Services <Icon name="down" className="w-3 h-3" /></NavLink>
              <ul className="list-none m-0 lg:absolute lg:left-0 lg:top-full lg:min-w-[290px] lg:bg-surface lg:border lg:border-line lg:rounded-m lg:p-2 lg:shadow-[0_24px_48px_-24px_rgba(20,33,61,.35)] lg:opacity-0 lg:invisible lg:translate-y-1.5 lg:transition lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-focus-within:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 max-lg:pl-4 p-0">
                {SERVICES.map((s) => <li key={s.slug}><NavLink to={`/services/${s.slug}`} className={navLink}>{s.name}</NavLink></li>)}
              </ul>
            </li>
            {[['/portfolio', 'Portfolio'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/blog', 'Blog'], ['/contact', 'Contact']].map(([to, l]) => (
              <li key={to}><NavLink to={to} className={navLink}>{l}</NavLink></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 max-lg:ml-auto">
          <button type="button" className="icon-btn" onClick={toggle} aria-label="Switch light or dark theme"><Icon name={theme === 'dark' ? 'moon' : 'sun'} /></button>
          <Link to="/contact" className="btn btn-primary max-lg:hidden">Get a quote</Link>
          <button type="button" className="icon-btn lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav"><Icon name={open ? 'close' : 'menu'} /></button>
        </div>
      </div>
    </header>
  )
}

const fLink = 'text-[#B8C2E0] text-[.97rem] no-underline hover:text-white hover:underline'
function Footer() {
  const so = CFG.social
  return (
    <footer className="bg-dark text-dark-ink pt-14 md:pt-[4.5rem] pb-6">
      <div className="wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5 no-underline font-display font-bold text-[1.25rem] text-white mb-3"><span className="w-[34px] h-[34px] rounded-[9px] bg-brand text-brand-ink grid place-items-center font-mono text-[.82rem]">KS</span>{CFG.brand}</Link>
            <p className="text-[#B8C2E0] text-[.97rem]">{CFG.tagline} Built for design studios, agencies and business owners.</p>
            <p className="flex gap-4">{[['LinkedIn', so.linkedin], ['GitHub', so.github], ['Instagram', so.instagram]].map(([l, u]) => <a key={l} className={fLink} href={u} target="_blank" rel="noopener noreferrer">{l}</a>)}</p>
          </div>
          <div><h4 className="text-white">Services</h4><ul className="list-none p-0 m-0 grid gap-2">{SERVICES.map((s) => <li key={s.slug}><Link className={fLink} to={`/services/${s.slug}`}>{s.name}</Link></li>)}</ul></div>
          <div><h4 className="text-white">Company</h4><ul className="list-none p-0 m-0 grid gap-2">{[['/about', 'About us'], ['/portfolio', 'Portfolio'], ['/pricing', 'Pricing'], ['/blog', 'Blog'], ['/faq', 'FAQ'], ['/locations', 'Locations'], ['/contact', 'Contact']].map(([to, l]) => <li key={to}><Link className={fLink} to={to}>{l}</Link></li>)}</ul></div>
          <div>
            <h4 className="text-white">Talk to us</h4>
            <ul className="list-none p-0 m-0 grid gap-2 text-[#B8C2E0] text-[.97rem]">
              <li><a className={fLink} href={`mailto:${CFG.email}`}>{CFG.email}</a></li>
              <li><a className={fLink} href={`tel:${CFG.phone.replace(/\s/g, '')}`}>{CFG.phone}</a></li>
              <li>{CFG.hours}</li><li>{CFG.address}</li>
            </ul>
            <h4 className="text-white mt-5">Areas</h4>
            <ul className="list-none p-0 m-0 grid gap-2">{CITIES.map((c) => <li key={c}><Link className={fLink} to={cityPath(c)}>Web developer in {c}</Link></li>)}</ul>
          </div>
        </div>
        <div className="mt-10 pt-5 border-t border-white/15 flex flex-wrap gap-x-6 gap-y-2 justify-between text-[.92rem] text-[#98A3C6]">
          <span>&copy; {new Date().getFullYear()} {CFG.brand}. All rights reserved.</span>
          <span className="flex gap-4"><Link className={fLink} to="/privacy-policy">Privacy policy</Link><Link className={fLink} to="/terms">Terms of service</Link><a className={fLink} href="/sitemap.xml">Sitemap</a></span>
        </div>
      </div>
    </footer>
  )
}

function Floating() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <div className="fixed right-4 bottom-4 z-[90] flex flex-col items-end gap-3">
      <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`w-11 h-11 rounded-full bg-surface text-ink border border-line grid place-items-center shadow-lg transition ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}><Icon name="up" /></button>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-[54px] h-[54px] rounded-full bg-[#1FA855] text-white grid place-items-center shadow-[0_12px_28px_-10px_rgba(0,0,0,.45)]"><Icon name="wa" className="w-[26px] h-[26px]" /></a>
    </div>
  )
}

function CookieNotice() {
  const [hidden, setHidden] = useState(() => !!store.get('kst-cookie'))
  if (hidden) return null
  const choose = (v) => { store.set('kst-cookie', v); setHidden(true) }
  return (
    <div role="dialog" aria-label="Cookie notice" className="fixed left-4 bottom-4 max-sm:right-4 max-sm:bottom-24 z-[95] max-w-[660px] bg-surface border border-line rounded-m px-4 py-3 shadow-[0_20px_40px_-20px_rgba(20,33,61,.5)] text-[.9rem] flex flex-wrap items-center gap-3.5">
      <p className="!m-0 flex-[1_1_280px]">This site saves your theme choice and may use cookies to measure visits. Read our <Link to="/privacy-policy" className="underline">privacy policy</Link>.</p>
      <div className="flex gap-2">
        <button className="btn btn-primary !py-[.45rem] !px-4 !text-[.9rem]" onClick={() => choose('yes')}>Accept</button>
        <button className="btn btn-ghost !py-[.45rem] !px-4 !text-[.9rem]" onClick={() => choose('no')}>Decline</button>
      </div>
    </div>
  )
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="absolute -left-[999px] top-0 z-[200] bg-brand text-brand-ink px-4 py-3 focus:left-4 focus:top-4">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
      <Floating />
      <CookieNotice />
    </>
  )
}

import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import { Section, Wrap, PageHero } from '../components/ui'
import { CFG, SERVICES, WA_LINK } from '../data/content'

const budgets = ['Not sure yet', 'Under Rs. 15,000', 'Rs. 15,000 to 50,000', 'Rs. 50,000 to 1,50,000', 'Above Rs. 1,50,000']

function Field({ id, label, error, children }) {
  return <div className={`field ${error ? 'bad' : ''}`}><label htmlFor={id}>{label}</label>{children}<div className="err">{error}</div></div>
}

export default function Contact() {
  const [params] = useSearchParams()
  const nav = useNavigate()
  const [v, setV] = useState({ Name: '', Email: '', Phone: '', Service: params.get('service') || '', Budget: budgets[0], Message: '', _honey: '' })
  const [errs, setErrs] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | error
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (errs[k]) setErrs({ ...errs, [k]: '' }) }

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (!v.Name.trim()) er.Name = 'Please enter your name.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.Email)) er.Email = 'Enter a valid email address.'
    if (!v.Service) er.Service = 'Please choose a service.'
    if (!v.Message.trim()) er.Message = 'Tell us a little about your project.'
    setErrs(er)
    if (Object.keys(er).length) return
    setStatus('sending')
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${CFG.email}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...v, _subject: `New enquiry from ${CFG.domain}`, _captcha: 'false', _template: 'table' }),
      })
      if (!r.ok) throw new Error('failed')
      nav('/thank-you')
    } catch { setStatus('error') }
  }

  return (
    <>
      <Seo path="/contact" title="Contact Us" desc={`Get a free quote for your website, store or web app. Message ${CFG.brand} on WhatsApp, email or the contact form.`} />
      <PageHero title="Let's talk about your project" lead="Share a few details. You will get a reply with next steps, usually within one working day." crumbs={[['Contact']]} />
      <Section><Wrap className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
        <form onSubmit={submit} noValidate className="card grid gap-4 p-6 md:p-9">
          <input className="absolute -left-[9999px]" tabIndex={-1} autoComplete="off" aria-hidden="true" name="_honey" value={v._honey} onChange={set('_honey')} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="n" label="Your name" error={errs.Name}><input id="n" value={v.Name} onChange={set('Name')} autoComplete="name" /></Field>
            <Field id="e" label="Email" error={errs.Email}><input id="e" type="email" value={v.Email} onChange={set('Email')} autoComplete="email" /></Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="p" label="Phone / WhatsApp"><input id="p" type="tel" value={v.Phone} onChange={set('Phone')} autoComplete="tel" /></Field>
            <Field id="s" label="What do you need?" error={errs.Service}>
              <select id="s" value={v.Service} onChange={set('Service')}><option value="">Choose a service</option>{SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}<option>Something else</option></select>
            </Field>
          </div>
          <Field id="b" label="Budget"><select id="b" value={v.Budget} onChange={set('Budget')}>{budgets.map((b) => <option key={b}>{b}</option>)}</select></Field>
          <Field id="m" label="Project details" error={errs.Message}><textarea id="m" className="min-h-[140px] resize-y" placeholder="Share your design link, pages, features and deadline." value={v.Message} onChange={set('Message')} /></Field>
          <button className="btn btn-primary justify-center disabled:opacity-60" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send enquiry'}</button>
          {status === 'error' && <p role="alert" className="!m-0 text-err">Could not send the form. Please email <a href={`mailto:${CFG.email}`} className="underline">{CFG.email}</a> or use WhatsApp.</p>}
          <p className="!m-0 text-muted text-[.9rem]">By sending this form you agree to our <Link to="/privacy-policy" className="underline">privacy policy</Link>.</p>
        </form>
        <div className="grid gap-4">
          {[['mail', 'Email', CFG.email, `mailto:${CFG.email}`], ['phone', 'Call', CFG.phone, `tel:${CFG.phone.replace(/\s/g, '')}`], ['wa', 'WhatsApp', 'Fastest way to reach us', WA_LINK], ['clock', 'Working hours', CFG.hours], ['pin', 'Location', CFG.address]].map(([i, t, s, href]) => {
            const inner = <><Icon name={i} className="w-6 h-6 shrink-0 text-brand mt-0.5" /><div><b className="block">{t}</b><span className="text-muted text-[.97rem]">{s}</span></div></>
            const cls = 'flex gap-4 p-5 border border-line rounded-m bg-surface no-underline'
            return href ? <a key={t} className={cls + ' hover:border-brand'} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a> : <div key={t} className={cls}>{inner}</div>
          })}
        </div>
      </Wrap></Section>
      <Section flush><Wrap className="grid gap-8 md:grid-cols-2">
        <h2>What happens next</h2>
        <ol className="steps grid gap-7">
          {[['We read your brief', 'Within one working day we reply with questions or a quick call slot.'], ['You get a scoped quote', 'Timeline, deliverables and fixed price, in writing.'], ['We start', 'After advance payment we set up staging and begin the build.']].map(([h, p]) => <li key={h}><h3 className="!mb-1">{h}</h3><p className="!m-0 text-muted">{p}</p></li>)}
        </ol>
      </Wrap></Section>
    </>
  )
}

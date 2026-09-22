import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import { Section, Wrap, Two, PageHero, CtaBand } from '../components/ui'
import { CITIES, cityPath } from '../data/content'

export default function Locations() {
  return (
    <>
      <Seo path="/locations" title="Locations" desc="Remote web development team serving Gurugram, Delhi, Noida and clients across India and abroad." />
      <PageHero title="Where we work" lead="We are a remote-first team, so distance never slows a project down." crumbs={[['Locations']]} />
      <Section><Wrap><div className="grid gap-4 md:grid-cols-3">
        {CITIES.map((c) => (<Link key={c} to={cityPath(c)} className="flex gap-4 p-5 border border-line rounded-m bg-surface no-underline hover:border-brand"><Icon name="pin" className="w-6 h-6 shrink-0 text-brand mt-0.5" /><div><b className="block">Web developer in {c}</b><span className="text-muted text-[.97rem]">Websites, e-commerce and web apps for {c} businesses and studios.</span></div></Link>))}
      </div></Wrap></Section>
      <Section flush><Two>
        <h2>How remote works</h2>
        <div><p>We work through video calls, WhatsApp, email and shared staging links. You get the same attention as a local team, often faster and at lower cost, because we do not carry office overheads.</p>
          <p>We also serve clients in other Indian cities and overseas. <Link to="/contact"><b>Tell us where you are</b></Link> and we will set up call times that suit you.</p></div>
      </Two></Section>
      <CtaBand />
    </>
  )
}

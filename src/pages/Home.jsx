import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Demo from '../components/Demo'
import { Section, Wrap, SecHead, Two, CtaBand, Faq, TechChips, Steps, SvcRows, WorkCard, PostCard, Quotes, Stats } from '../components/ui'
import { CFG, CITIES, FAQS, POSTS, TECH, WORK, cityPath } from '../data/content'

const handoff = [
  ['file', 'We review your file first', 'Missing states, unclear spacing or fonts we cannot load? You hear about it before we start, not after.'],
  ['lock', 'NDA and your branding', 'Your client stays your client. We work quietly in the background.'],
  ['clock', 'Staging link every week', 'Review the build as it grows and correct course early.'],
]

export default function Home() {
  return (
    <>
      <Seo path="/" title={`${CFG.brand} | Web Developers for Designers, Agencies & Businesses`}
        desc="Web development studio building WordPress sites, e-commerce stores and custom web apps. Figma to HTML, white-label development and technical SEO. Get a quote." />

      <section className="pt-10 md:pt-20 pb-12 md:pb-[5.5rem]">
        <Wrap className="hero-in grid gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-[4.5rem] items-center">
          <div>
            <h1 className="!mb-[.45em]">{CFG.tagline}</h1>
            <p className="lead">{CFG.brand} builds WordPress sites, online stores and custom web apps for design studios, agencies and business owners who want it built right, and on time.</p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Start your project</Link>
              <Link to="/portfolio" className="btn btn-ghost">See our work</Link>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-muted text-[.98rem] list-none p-0">
              {['Pixel-accurate builds', 'Fixed-price quotes', 'Source code is yours'].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><Icon name="check" className="w-[1.1em] h-[1.1em] text-ok" />{t}</li>
              ))}
            </ul>
          </div>
          <Demo />
        </Wrap>
      </section>

      <div className="py-6 border-y border-line bg-surface">
        <Wrap className="flex flex-wrap items-center gap-x-4 gap-y-2"><p className="!m-0 mr-3 text-muted text-[.95rem]">Built with</p><TechChips items={TECH} /></Wrap>
      </div>

      <Section><Wrap>
        <SecHead title="Everything after the design is done" text="From a five-page brochure site to a custom dashboard, one team handles the code, testing, speed and support." />
        <SvcRows />
      </Wrap></Section>

      <Section dark>
        <Wrap className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <h2>You design. We develop.</h2>
            <p className="lead !text-[#B8C2E0]">If you are a designer or run a studio, you already know the pain: a beautiful file turns into a site that does not quite match. We fix that.</p>
            <div className="btn-row">
              <Link to="/services/white-label-development" className="btn btn-light">White-label development</Link>
              <Link to="/services/figma-to-html" className="btn border-white text-white hover:bg-white hover:text-[#14213D]">Figma to HTML</Link>
            </div>
          </div>
          <div className="grid gap-3.5">
            {handoff.map(([i, h, p]) => (
              <div key={h} className="flex gap-4 items-start p-[1.1rem_1.2rem] border border-white/15 rounded-m bg-white/[.04]">
                <Icon name={i} className="w-[22px] h-[22px] shrink-0 text-mark mt-1" />
                <div><h4 className="!mb-0.5 text-white">{h}</h4><p className="!m-0 text-[.97rem] text-[#B8C2E0]">{p}</p></div>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section><Wrap>
        <SecHead title="How a project runs" text="Four clear stages. You always know what is happening and what we need from you." />
        <Steps />
      </Wrap></Section>

      <Section flush><Wrap>
        <SecHead title="Recent work" text="A few websites and apps we have shipped for studios and business owners." />
        <div className="grid grid-cols-12 gap-5">{WORK.slice(0, 5).map((w, i) => <WorkCard key={w.t} w={w} wide={i < 2} />)}</div>
        <div className="btn-row"><Link to="/portfolio" className="btn btn-ghost">View all projects</Link></div>
      </Wrap></Section>

      <Stats />

      <Section><Wrap>
        <SecHead title="What clients say" text="Studios, store owners and institutes we have worked with." />
        <Quotes />
      </Wrap></Section>

      <Section flush>
        <Two>
          <div><h2>Where we work</h2><p className="lead">We are a remote-first team serving businesses and studios across India and abroad, with a focus on the Delhi NCR region.</p></div>
          <div className="grid gap-4">
            {CITIES.map((c) => (
              <Link key={c} to={cityPath(c)} className="flex gap-4 p-5 border border-line rounded-m bg-surface no-underline hover:border-brand">
                <Icon name="pin" className="w-6 h-6 shrink-0 text-brand mt-0.5" /><div><b className="block">Web developer in {c}</b><span className="text-muted text-[.97rem]">Websites, stores and apps for {c} businesses</span></div>
              </Link>
            ))}
          </div>
        </Two>
      </Section>

      <Section flush>
        <Two>
          <div><h2>Questions we hear often</h2><p className="lead">Short answers. For anything else, write to us.</p><div className="btn-row"><Link to="/faq" className="btn btn-ghost">Read all FAQs</Link></div></div>
          <Faq items={FAQS.slice(0, 5)} />
        </Two>
      </Section>

      <Section flush><Wrap>
        <SecHead title="From the blog" text="Practical notes on building, launching and speeding up websites." />
        <div className="grid gap-5 md:grid-cols-3">{POSTS.map((p) => <PostCard key={p.slug} p={p} />)}</div>
      </Wrap></Section>

      <CtaBand />
    </>
  )
}

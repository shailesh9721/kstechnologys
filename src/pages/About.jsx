import Seo from '../components/Seo'
import Icon, { FEAT_ICONS } from '../components/Icon'
import { Section, Wrap, SecHead, Two, PageHero, CtaBand, Quotes, Stats, Steps, TechChips } from '../components/ui'
import { CFG, TECH } from '../data/content'

const vals = [
  ['Build it exactly', 'If the design says 24px, it is 24px. We treat your file as the source of truth.'],
  ['Say it plainly', 'Clear updates, honest timelines and no jargon-filled reports.'],
  ['Keep it fast', 'Speed is part of quality. We measure it before we call a project done.'],
  ['Leave you in control', 'You own the code, the hosting login and the domain. Always.'],
]
const roles = [
  ['code', 'Lead developer', 'Plans the build, writes the code and is your technical contact.'],
  ['users', 'Project coordinator', 'Keeps the schedule, collects feedback and sends weekly updates.'],
  ['shield', 'QA tester', 'Checks every page on real devices before you see it.'],
]

export default function About() {
  return (
    <>
      <Seo path="/about" title="About Us" desc={`${CFG.brand} is a remote-first web development team building WordPress, e-commerce and custom web apps for designers, agencies and businesses.`} />
      <PageHero title={`We are ${CFG.brand}`} lead="A small development team that builds websites so that designers, agencies and business owners can focus on their own work." crumbs={[['About']]} />
      <Section>
        <Two>
          <h2>Why we exist</h2>
          <div>
            <p className="lead">Many good designs are lost in development, and many good businesses are held back by slow, hard-to-manage websites.</p>
            <p>{CFG.brand} started with a simple idea: be the developer that designers trust and business owners can reach. We focus only on development: front-end, WordPress, e-commerce and web apps. We do not try to be a design studio or an ad agency. That is why we can work with them.</p>
            <p>Today we are a remote-first team serving clients across India and abroad, delivering everything from five-page sites to custom software.</p>
          </div>
        </Two>
      </Section>
      <Stats />
      <Section><Wrap>
        <SecHead title="How we work" text="Four principles that shape every project." />
        <div className="grid gap-5 md:grid-cols-2">{vals.map(([t, d], i) => (<div key={t} className="feat"><Icon name={FEAT_ICONS[i]} className="w-[26px] h-[26px] text-brand mb-3" /><h3 className="!text-[1.12rem] !mb-1">{t}</h3><p className="!m-0 text-muted text-[.98rem]">{d}</p></div>))}</div>
      </Wrap></Section>
      <Section flush><Wrap>
        <SecHead title="Who you will work with" text="Every project has a small, dedicated group." />
        <div className="grid gap-5 md:grid-cols-3">{roles.map(([i, t, d]) => (<div key={t} className="feat"><Icon name={i} className="w-[26px] h-[26px] text-brand mb-3" /><h3 className="!text-[1.12rem] !mb-1">{t}</h3><p className="!m-0 text-muted text-[.98rem]">{d}</p></div>))}</div>
      </Wrap></Section>
      <Section flush><Wrap><SecHead title="Our process" text="Clear steps from first message to launch." /><Steps /></Wrap></Section>
      <Section flush><Two><div><h2>Our toolbox</h2><p className="text-muted">Modern, well-supported tools we are happy to hand over to any developer.</p></div><TechChips items={TECH} /></Two></Section>
      <Section flush><Wrap><SecHead title="Kind words" text="From the people we have built for." /><Quotes /></Wrap></Section>
      <CtaBand title="Let's talk about your project" />
    </>
  )
}

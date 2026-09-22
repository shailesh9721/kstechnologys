import Seo from '../components/Seo'
import { Section, Wrap, SecHead, PageHero, CtaBand, TechChips, Steps, SvcRows } from '../components/ui'
import { TECH } from '../data/content'

export default function Services() {
  return (
    <>
      <Seo path="/services" title="Web Development Services" desc="WordPress, e-commerce, Figma to HTML, web apps, white-label development, speed and SEO, and maintenance from one team." />
      <PageHero title="Web development services" lead="Everything you need to turn a design or an idea into a fast, reliable website." crumbs={[['Services']]} />
      <Section><Wrap><SvcRows /></Wrap></Section>
      <Section flush><Wrap><SecHead title="Technology we work with" text="We pick the simplest stack that does the job well." /><TechChips items={[...TECH, 'Sass', 'Bootstrap', 'Express', 'PostgreSQL', 'Figma']} /></Wrap></Section>
      <Section flush><Wrap><SecHead title="How we work" text="Same clear process for every service." /><Steps /></Wrap></Section>
      <CtaBand />
    </>
  )
}

import { useParams } from 'react-router-dom'
import Seo, { faqSchema } from '../components/Seo'
import NotFound from './NotFound'
import { Section, Wrap, SecHead, Two, PageHero, CtaBand, Faq, SvcRows } from '../components/ui'
import { CITIES } from '../data/content'

export default function CityPage() {
  const { city } = useParams()
  const c = CITIES.find((x) => x.toLowerCase() === city)
  if (!c) return <NotFound />
  const faqs = [
    [`Do you have an office in ${c}?`, `We are remote-first. We meet ${c} clients over video calls and can arrange in-person meetings for larger projects.`],
    ['How quickly can you start?', 'Most projects start within a week of approval of the quote and advance payment.'],
    [`Can you work with my ${c} design studio or agency?`, 'Yes. White-label work under NDA is a big part of our business.'],
  ]
  return (
    <>
      <Seo path={`/web-developer-in/${city}`} title={`Web Developer in ${c}`} desc={`Web development for ${c}: WordPress, e-commerce, Figma to HTML and custom web apps. Fast websites for ${c} businesses and studios.`} schema={faqSchema(faqs)} />
      <PageHero title={`Web developer in ${c}`} lead={`Websites, online stores and web apps for ${c} businesses, startups and design studios.`} crumbs={[['Locations', '/locations'], [c]]} />
      <Section><Two>
        <div><h2>Development that fits {c} businesses</h2><p className="lead">Whether you are a startup, a local shop or an agency serving {c} clients, we build websites that load fast and turn visitors into enquiries.</p></div>
        <div><p>{c} businesses compete online every day. A slow, dated or hard-to-manage site costs leads. We build clean, fast, mobile-friendly websites with the features you need, from enquiry forms and WhatsApp chat to payment gateways and dashboards.</p><p>We are remote-first, so you get quick responses without paying for office overheads.</p></div>
      </Two></Section>
      <Section flush><Wrap><SecHead title={`Services for ${c}`} text="Pick what you need. We will scope it and quote clearly." /><SvcRows /></Wrap></Section>
      <Section flush><Two><h2>{c} FAQs</h2><Faq items={faqs} /></Two></Section>
      <CtaBand title={`Building something in ${c}?`} />
    </>
  )
}

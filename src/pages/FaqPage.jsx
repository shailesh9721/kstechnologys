import Seo, { faqSchema } from '../components/Seo'
import { Section, PageHero, CtaBand, Faq } from '../components/ui'
import { FAQS } from '../data/content'

export default function FaqPage() {
  return (
    <>
      <Seo path="/faq" title="FAQ" desc="Answers about web development timelines, payments, ownership, hosting and post-launch support." schema={faqSchema(FAQS)} />
      <PageHero title="Frequently asked questions" lead="Straight answers about timelines, payments, ownership and support." crumbs={[['FAQ']]} />
      <Section><div className="narrow"><Faq items={FAQS} /></div></Section>
      <CtaBand title="Still have a question?" text="Message us on WhatsApp or send an email. We reply within one working day." />
    </>
  )
}

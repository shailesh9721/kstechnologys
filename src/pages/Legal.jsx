import Seo from '../components/Seo'
import { Section, PageHero } from '../components/ui'
import { CFG, LEGAL_UPDATED } from '../data/content'

const mail = <a href={`mailto:${CFG.email}`}>{CFG.email}</a>

export function Privacy() {
  return (
    <>
      <Seo path="/privacy-policy" title="Privacy Policy" desc={`How ${CFG.brand} collects, uses and protects your information.`} />
      <PageHero title="Privacy policy" lead="How we handle your information." crumbs={[['Privacy policy']]} />
      <Section><div className="narrow legal">
        <p className="text-muted">Last updated: {LEGAL_UPDATED}</p>
        <p>This policy explains how {CFG.brand} ("we", "us") handles information when you use {CFG.domain}.</p>
        <h2>Information we collect</h2>
        <ul><li>Details you submit through the contact form: name, email, phone, project details.</li><li>Basic technical data such as browser type and pages visited, if analytics is enabled.</li><li>A theme preference and cookie choice stored in your browser.</li></ul>
        <h2>How we use it</h2>
        <ul><li>To reply to your enquiry and prepare quotes.</li><li>To improve our website and services.</li><li>To meet legal or accounting obligations.</li></ul>
        <h2>Sharing</h2><p>We do not sell your data. We share it only with service providers who help us run the site (such as email and hosting) or when required by law. The contact form is delivered using FormSubmit.</p>
        <h2>Retention and security</h2><p>We keep enquiry details only as long as needed for the purpose above and take reasonable steps to protect them.</p>
        <h2>Your choices</h2><p>You can ask us to access, correct or delete your information at any time by writing to {mail}.</p>
        <h2>Cookies</h2><p>You can accept or decline optional cookies using the notice on the site and clear cookies in your browser settings at any time.</p>
        <h2>Contact</h2><p>{CFG.brand}, {CFG.address}. Email: {CFG.email}.</p>
      </div></Section>
    </>
  )
}

export function Terms() {
  const s = [
    ['Services and quotes', 'Each project is defined by a written quote or proposal that states the scope, timeline and price. Work outside that scope is quoted separately.'],
    ['Payments', 'Payment schedules are stated in the quote. Work begins after the advance payment. Prices exclude taxes, domains, hosting and paid third-party tools unless stated.'],
    ['Client responsibilities', 'You agree to provide content, design files, access and timely feedback. Delays in materials may move the delivery date. You confirm that you own or have the right to use everything you send us.'],
    ['Revisions', 'Each plan includes a stated number of revision rounds. Additional changes are billed at our hourly rate.'],
    ['Ownership', 'On full payment, you own the final deliverables and source code we created for you. Third-party libraries, plugins and fonts remain under their own licences. We may show non-confidential work in our portfolio unless you request otherwise or we work under NDA.'],
    ['Confidentiality', 'We treat your files and business information as confidential and sign an NDA on request.'],
    ['Warranty and support', 'We fix bugs in delivered work during the free post-launch support period stated in your plan. We do not guarantee search rankings, traffic or sales.'],
    ['Limitation of liability', 'To the extent permitted by law, our liability is limited to the amount you paid for the affected project.'],
    ['Governing law', 'These terms are governed by the laws of India. Please contact us first so we can resolve any concern together.'],
  ]
  return (
    <>
      <Seo path="/terms" title="Terms of Service" desc={`Terms for using ${CFG.domain} and hiring ${CFG.brand}.`} />
      <PageHero title="Terms of service" lead="The ground rules for working together." crumbs={[['Terms of service']]} />
      <Section><div className="narrow legal">
        <p className="text-muted">Last updated: {LEGAL_UPDATED}</p>
        <p>By using {CFG.domain} or engaging {CFG.brand}, you agree to these terms.</p>
        {s.map(([h, p]) => <div key={h}><h2>{h}</h2><p>{p}</p></div>)}
        <h2>Contact</h2><p>Questions? Email {mail}.</p>
      </div></Section>
    </>
  )
}

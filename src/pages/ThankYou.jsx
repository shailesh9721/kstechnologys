import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import { Section } from '../components/ui'
import { WA_LINK } from '../data/content'

export default function ThankYou() {
  return (
    <Section>
      <Seo path="/thank-you" title="Thank you" desc="Your enquiry has been sent." />
      <div className="narrow text-center">
        <h1>Thank you, message received.</h1>
        <p className="lead mx-auto">We will reply within one working day. For anything urgent, message us on WhatsApp.</p>
        <div className="btn-row justify-center">
          <a className="btn btn-wa" href={WA_LINK} target="_blank" rel="noopener noreferrer"><Icon name="wa" />WhatsApp us</a>
          <Link className="btn btn-ghost" to="/">Back to home</Link>
        </div>
      </div>
    </Section>
  )
}

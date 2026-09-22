import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { Section } from '../components/ui'

export default function NotFound() {
  return (
    <Section>
      <Seo path="/404" title="Page not found" desc="This page does not exist." />
      <div className="narrow text-center">
        <h1>This page does not exist.</h1>
        <p className="lead mx-auto">The link may be old or mistyped. Try one of these instead.</p>
        <div className="btn-row justify-center">
          <Link className="btn btn-primary" to="/">Home</Link><Link className="btn btn-ghost" to="/services">Services</Link><Link className="btn btn-ghost" to="/contact">Contact</Link>
        </div>
      </div>
    </Section>
  )
}

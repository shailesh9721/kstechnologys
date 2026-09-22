import Seo from '../components/Seo'
import { Section, Wrap, PageHero, CtaBand, PostCard } from '../components/ui'
import { POSTS } from '../data/content'

export default function Blog() {
  return (
    <>
      <Seo path="/blog" title="Blog" desc="Tips on Figma handoff, WordPress, custom development and Core Web Vitals from our web development team." />
      <PageHero title="Blog" lead="Practical notes on building, launching and speeding up websites." crumbs={[['Blog']]} />
      <Section><Wrap><div className="grid gap-5 md:grid-cols-3">{POSTS.map((p) => <PostCard key={p.slug} p={p} />)}</div></Wrap></Section>
      <CtaBand />
    </>
  )
}

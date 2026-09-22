// ============================================================
//  KS TECHNOLOGYS - CONTENT & CONFIG
//  Sab text, contact details, prices yahin se change karein.
//  "TODO" wali values apni real details se replace karein.
// ============================================================

export const CFG = {
  brand: 'KS Technologys',
  domain: 'kstechnologys.com',              // TODO: agar domain alag hai
  email: 'hello@kstechnologys.com',         // TODO: real email (contact form yahin aayega)
  phone: '+91 00000 00000',                 // TODO
  wa: '910000000000',                       // TODO: WhatsApp number, country code ke saath, + ke bina
  address: 'India (remote-first team)',     // TODO
  hours: 'Mon to Sat, 10:00 to 19:00 IST',
  stats: { years: 5, projects: 100, clients: 60, countries: 4 }, // TODO: sahi numbers
  tagline: 'Web developers who turn designs into fast, working websites.',
  social: {
    linkedin: 'https://www.linkedin.com/',  // TODO
    github: 'https://github.com/',          // TODO
    instagram: 'https://www.instagram.com/',// TODO
  },
}
export const SITE = `https://${CFG.domain}`
export const WA_LINK = `https://wa.me/${CFG.wa}?text=${encodeURIComponent('Hi KS Technologys, I want to discuss a website project.')}`

export const SERVICES = [
  { slug: 'figma-to-html', name: 'Figma & PSD to HTML',
    short: 'Pixel-accurate, responsive code from Figma, XD, Sketch or PSD files.',
    lead: 'You spent weeks on the design. We build it so the live site matches it on every screen size: spacing, type, states and all.',
    items: [
      ['Pixel-accurate layouts', 'We measure against your design, not by eye. Spacing, type scale and colours match the file.'],
      ['Every breakpoint', 'Mobile, tablet, laptop and wide screens are all built and tested, not just resized.'],
      ['Clean, readable code', 'Semantic HTML, organised CSS and plain JavaScript that the next developer can pick up.'],
      ['Component-based builds', 'Need React or Next.js? We split the design into reusable components.'],
      ['Accessibility basics', 'Colour contrast, keyboard focus, alt text and correct heading order.'],
      ['Cross-browser testing', 'Chrome, Safari, Firefox and Edge, on real phones and desktops.'],
    ],
    tech: ['HTML5', 'CSS3', 'Sass', 'Tailwind', 'Bootstrap', 'JavaScript', 'React', 'Next.js'],
    faqs: [
      ['Which design files do you accept?', 'Figma, Adobe XD, Sketch, PSD and AI files. A shared Figma link with view access is the easiest.'],
      ['Do you need the fonts and assets?', 'Yes. Share the font files or licence details and exported assets. We can export them from Figma if you give us access.'],
      ['Will you build animations and hover states?', 'Yes. If they are in the design or the prototype, we build them. If not, we can suggest subtle ones.'],
    ] },
  { slug: 'wordpress-development', name: 'WordPress development',
    short: 'Custom themes, page-builder sites, plugins and migrations.',
    lead: 'A WordPress site your team can actually edit, built on clean code instead of a stack of heavy plugins.',
    items: [
      ['Custom theme development', 'Built from scratch to match your design, with no bloated multipurpose theme underneath.'],
      ['Elementor and Gutenberg', 'Editable layouts, reusable blocks and global styles so your team can update pages safely.'],
      ['Plugin customisation', 'Need something a plugin almost does? We extend it or write a small custom one.'],
      ['Migration and redesign', 'Move hosts or rebuild an old site without losing URLs, content or rankings.'],
      ['Forms and integrations', 'Contact forms, CRMs, email tools, WhatsApp chat and payment gateways.'],
      ['Security hardening', 'Limited login attempts, updated core, backups and file-permission clean-up.'],
    ],
    tech: ['WordPress', 'PHP', 'Elementor', 'Gutenberg', 'ACF', 'MySQL', 'WooCommerce'],
    faqs: [
      ['Custom theme or page builder, which is better?', 'A custom theme is faster and cleaner. A page builder is easier for non-technical editors. We often combine both: custom code with editable blocks.'],
      ['Can I edit the site myself afterwards?', 'Yes. We build with editing in mind and give you a short walkthrough video for your team.'],
      ['Can you move my existing site to a new host?', 'Yes. We handle files, database, SSL and DNS, and check every page before switching.'],
    ] },
  { slug: 'ecommerce-development', name: 'E-commerce development',
    short: 'WooCommerce and Shopify stores with Indian payments and shipping.',
    lead: 'Online stores that load quickly, take payments without friction and are simple to manage every day.',
    items: [
      ['WooCommerce and Shopify', 'We recommend the platform that fits your catalogue size, budget and team.'],
      ['Payment gateways', 'Razorpay, PayU, Cashfree, Stripe, PayPal and UPI, set up and tested with real orders.'],
      ['Shipping and logistics', 'Shiprocket and courier integrations, pincode checks and shipping rules.'],
      ['GST-ready invoices', 'Tax settings, invoice PDFs and order emails that suit Indian stores.'],
      ['Catalogue import', 'Bulk product upload from Excel or CSV, with variants and images.'],
      ['Checkout optimisation', 'Fewer steps, guest checkout and clear errors to cut abandoned carts.'],
    ],
    tech: ['WooCommerce', 'Shopify', 'Liquid', 'PHP', 'Razorpay', 'Stripe', 'Shiprocket'],
    faqs: [
      ['WooCommerce or Shopify?', 'Shopify is quicker to launch and needs less maintenance. WooCommerce gives more control and lower running costs. We will tell you honestly which fits.'],
      ['Can you connect my store to a courier partner?', 'Yes. Shiprocket and most major courier APIs are supported.'],
      ['Will you add my products for me?', 'We can import them in bulk from a spreadsheet. Each extra hour of manual entry is quoted separately.'],
    ] },
  { slug: 'web-application-development', name: 'Web application development',
    short: 'Dashboards, portals and booking systems in React, Node and Laravel.',
    lead: 'When a template will not do, we build the tool your business needs: secure, fast and ready to grow.',
    items: [
      ['Custom web apps', 'Customer portals, admin dashboards, CRMs, booking and inventory tools.'],
      ['React and Next.js frontends', 'Fast interfaces with server rendering where search visibility matters.'],
      ['Node and Laravel backends', 'REST APIs, authentication, roles and permissions, background jobs.'],
      ['Third-party integrations', 'Payment, SMS, email, maps, ERPs and any service with an API.'],
      ['Database design', 'MySQL, PostgreSQL or MongoDB, modelled properly so it scales.'],
      ['Deployment', 'VPS, cloud or shared hosting, with SSL, backups and a simple release process.'],
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'Laravel', 'PHP', 'MySQL', 'MongoDB'],
    faqs: [
      ['Do you build in phases?', 'Yes. We ship a working first version quickly, then add features in milestones so you see progress every week.'],
      ['Who owns the code?', 'You do. On final payment the full source code and repository access are handed over.'],
      ['Can you add features to an app someone else built?', 'Yes, after a short code review to understand what is there.'],
    ] },
  { slug: 'white-label-development', name: 'White-label development for designers',
    short: 'A quiet development partner for design studios and agencies.',
    lead: 'You keep the client and the credit. We take the code, on your brand, under NDA, on your timeline.',
    items: [
      ['Your brand, not ours', 'We work under NDA and communicate as part of your team when needed.'],
      ['Clean design handoff', 'We review your Figma file before starting and flag anything that will not work on the web.'],
      ['Fixed-price quotes', 'Send a design, get a scoped quote. No surprises when you invoice your client.'],
      ['Weekly progress links', 'Staging site access from the first week, so you can review as we build.'],
      ['Scalable capacity', 'Extra hands for busy months without hiring a full-time developer.'],
      ['Post-launch fixes', 'Bug-fix window after launch so your client stays happy.'],
    ],
    tech: ['Figma', 'HTML5', 'CSS3', 'WordPress', 'React', 'Shopify', 'Git'],
    faqs: [
      ['Will you contact my client directly?', 'Only if you ask us to. By default we talk only to you.'],
      ['Do you sign NDAs?', 'Yes, before any files are shared.'],
      ['How do we hand off the finished site?', "As a zip, a Git repository or a direct deploy to your client's hosting, whichever you prefer."],
    ] },
  { slug: 'website-speed-seo', name: 'Speed & technical SEO',
    short: 'Core Web Vitals, clean markup, schema and search-ready structure.',
    lead: 'A fast site ranks better and converts better. We fix the technical side so your content and ads can work harder.',
    items: [
      ['Core Web Vitals fixes', 'We improve LCP, INP and CLS using real measurements, not just a score.'],
      ['Image and font optimisation', 'Modern formats, correct sizes, lazy loading and fast font delivery.'],
      ['Caching and CDN', 'Server, browser and CDN caching set up for your host.'],
      ['Technical SEO', 'Meta tags, canonicals, sitemap, robots rules, redirects and structured data.'],
      ['Search Console setup', 'Verified property, submitted sitemap and error monitoring.'],
      ['Audit report', 'A clear list of what we found, what we fixed and what is left.'],
    ],
    tech: ['Lighthouse', 'PageSpeed', 'Search Console', 'Schema.org', 'Cloudflare', 'GTmetrix'],
    faqs: [
      ['Do you do content writing or link building?', 'No. We focus on the technical foundation. We work well alongside your SEO or content team.'],
      ['How fast can you make my site?', 'It depends on the starting point. Most sites gain a lot from image, script and caching fixes alone. You get a before and after report.'],
      ['Will changes break my site?', 'We work on a staging copy first and only push changes live after testing.'],
    ] },
  { slug: 'website-maintenance', name: 'Website maintenance & support',
    short: 'Updates, backups, security checks and small changes every month.',
    lead: 'Your website is never finished. We keep it updated, backed up and safe so you can focus on the business.',
    items: [
      ['Updates', 'Core, plugins and themes updated on staging first, then live.'],
      ['Daily backups', 'Automatic off-site backups with tested restores.'],
      ['Security monitoring', 'Malware scans, firewall rules and cleanup if something goes wrong.'],
      ['Uptime checks', 'We are alerted within minutes if the site goes down.'],
      ['Monthly change hours', 'Text, image, banner and small layout changes included every month.'],
      ['Monthly report', 'A short summary of what was done and how the site performed.'],
    ],
    tech: ['WordPress', 'Shopify', 'cPanel', 'Cloudflare', 'UptimeRobot', 'Sucuri'],
    faqs: [
      ['Do unused hours roll over?', 'Small unused hours roll over for one month.'],
      ['Can you maintain a site you did not build?', 'Yes, after a short health check.'],
      ['What if my site gets hacked?', 'Active maintenance plans include cleanup. Otherwise we can do a one-time rescue.'],
    ] },
]

export const CITIES = ['Gurugram', 'Delhi', 'Noida']

export const PLANS = [
  { name: 'Starter website', price: '15,000', note: 'One-time, starting from', blurb: 'For freelancers and small businesses that need a clean presence.',
    feats: ['Up to 5 pages', 'Responsive on all devices', 'Contact form and WhatsApp button', 'Basic SEO setup', '1 round of revisions', '7 days post-launch support'], cta: 'Ask for a quote', feat: false },
  { name: 'Business website', price: '35,000', note: 'One-time, starting from', blurb: "For growing companies and agencies' client projects.",
    feats: ['Up to 12 pages', 'Custom design implementation', 'WordPress CMS with editing training', 'Speed and technical SEO', 'Blog, forms and integrations', '3 rounds of revisions', '30 days post-launch support'], cta: 'Start this plan', feat: true },
  { name: 'E-commerce & web apps', price: 'Custom', note: 'Scoped after a call', blurb: 'For online stores, portals and custom software.',
    feats: ['WooCommerce, Shopify or custom', 'Payment and shipping integrations', 'Admin dashboards and roles', 'Milestone-based delivery', 'Staging environment', 'Source code handover'], cta: 'Book a call', feat: false },
]

export const MAINT = [
  ['Basic', 'Rs. 2,000 / month', 'Updates, backups, uptime checks'],
  ['Standard', 'Rs. 5,000 / month', 'Basic + security scans, 3 change hours, monthly report'],
  ['Priority', 'Rs. 10,000 / month', 'Standard + 8 change hours, same-day response'],
]

// TODO: apne real projects se replace karein
export const WORK = [
  { t: 'Clinic booking website', cat: 'WordPress', d: 'Custom theme with online appointment forms and doctor profiles.', c1: '#3A3AF2', c2: '#DCE0FF' },
  { t: 'Furniture WooCommerce store', cat: 'E-commerce', d: 'Catalogue of 400+ products with Razorpay and Shiprocket.', c1: '#0E8F5B', c2: '#D5F2E4' },
  { t: 'IT institute website', cat: 'WordPress', d: 'Course pages, enquiry funnels and student admission forms.', c1: '#F24E8E', c2: '#FFDCE9' },
  { t: 'SaaS marketing site', cat: 'Figma to HTML', d: "Designer's Figma file built pixel-perfect with animations.", c1: '#14213D', c2: '#DDE3F3' },
  { t: 'Car dealership catalogue', cat: 'Web apps', d: 'Searchable inventory with filters and lead capture.', c1: '#E58A00', c2: '#FFEBC7' },
  { t: 'Restaurant ordering app', cat: 'Web apps', d: 'Menu, cart and order dashboard built with React and Node.', c1: '#C62828', c2: '#FFD9D9' },
  { t: 'Home decor Shopify store', cat: 'E-commerce', d: 'Fast theme customisation and collection pages.', c1: '#7B4DFF', c2: '#E7DEFF' },
  { t: 'Agency landing pages', cat: 'Figma to HTML', d: '12 landing pages delivered white-label for a design studio.', c1: '#0097A7', c2: '#D2F1F5' },
]
export const WORK_CATS = ['WordPress', 'E-commerce', 'Web apps', 'Figma to HTML']

// TODO: real client reviews se replace karein
export const TESTIMONIALS = [
  ['DS', 'Founder, design studio', 'They took our Figma file and returned a site that looked exactly like it. Our client never had a single spacing complaint.'],
  ['OS', 'Owner, online store', 'Store launched on time, payments worked from day one, and pages load fast even on mobile data.'],
  ['TI', 'Director, training institute', 'Enquiries went up after the new site. Updates are easy for our team to make on their own.'],
  ['CL', 'Creative lead, agency', 'Reliable white-label partner. Clear updates, no missed deadlines and clean code.'],
]

export const FAQS = [
  ['How long does a website take?', 'A 5-page website usually takes 1 to 2 weeks. A 12-page business site takes 3 to 5 weeks. Stores and web apps are scoped in milestones. You get a timeline before we start.'],
  ['Do you do design as well?', 'Our focus is development. If you already have a design, we build it exactly. If you need one, we work with trusted designers or build from a template that you approve.'],
  ['What do you need to start?', 'Your design files (or reference sites), content, logo and brand colours, and a clear list of pages and features. Missing content? We will tell you what to prepare.'],
  ['How does payment work?', 'Usually 40% advance, 30% at the design-approval or staging stage and 30% on delivery. Larger projects are split into milestones.'],
  ['Will the website work on mobile?', 'Yes. Every site is built mobile-first and tested on real devices.'],
  ['Who owns the website and code?', 'You do. After final payment we hand over all files, source code and access.'],
  ['Do you provide hosting and domain?', 'We can guide you or set it up on your account. You always own the domain and hosting login.'],
  ['What happens after launch?', 'Every project includes free post-launch support. After that you can choose a maintenance plan or pay per task.'],
  ['Can you work with my agency or design studio?', 'Yes. White-label work under NDA is a big part of what we do.'],
  ['Do you work with clients outside India?', 'Yes. We work remotely with clients across time zones and communicate by email, WhatsApp and video calls.'],
]

export const POSTS = [
  { slug: 'figma-to-html-designer-developer-handoff', title: 'A cleaner Figma-to-code handoff: 9 things designers can do',
    desc: 'Small changes in your Figma file save days of back-and-forth with your developer.', date: '2026-09-01', read: '5 min', c1: '#3A3AF2',
    body: `<p>A good handoff is less about tools and more about removing guesswork. These habits make a developer's job faster and your final site closer to the design.</p>
<h2>Name and organise layers</h2><p>Frames named "Hero", "Pricing" and "Footer" are far easier to build than "Frame 4302". Group related elements and delete hidden leftovers.</p>
<h2>Use styles and variables</h2><p>Define colours, text styles and spacing as styles or variables. We turn these directly into CSS custom properties, so the code mirrors your design system.</p>
<h2>Design every state</h2><p>Buttons need hover, focus and disabled states. Forms need error and success messages. Menus need an open state on mobile. If it is not designed, the developer has to guess.</p>
<h2>Show mobile and tablet</h2><p>Desktop-only files force developers to invent the mobile layout. Even rough mobile frames remove most confusion.</p>
<div class="callout"><b>Quick checklist:</b> auto layout on, consistent spacing scale, fonts shared, assets exported, prototype links for animations.</div>
<h2>Share fonts and assets early</h2><p>Licensing font files late is a common cause of delays. Share them at kickoff, along with logos in SVG.</p>
<h2>Do a review on staging</h2><p>Instead of a long final review, check the staging site weekly. Small differences are cheap to fix while the build is in progress.</p>` },
  { slug: 'wordpress-vs-custom-website', title: 'WordPress or custom code: which is right for your business?',
    desc: 'A plain-language comparison to help you choose the right foundation for your website.', date: '2026-09-08', read: '6 min', c1: '#0E8F5B',
    body: `<p>Both are good choices. The right one depends on how often you update content, how unique your features are and your long-term budget.</p>
<h2>Choose WordPress when</h2><ul><li>Your team will edit pages, blogs or products regularly.</li><li>You need a site live in a few weeks.</li><li>Most features (forms, SEO, payments) already exist as reliable plugins.</li></ul>
<h2>Choose custom code when</h2><ul><li>You are building a tool, portal or dashboard with unique logic.</li><li>You expect heavy traffic or complex data.</li><li>You need full control over performance and security.</li></ul>
<h2>Cost over time</h2><p>WordPress has a lower starting cost and a steady maintenance cost. Custom software costs more upfront but may cost less to run when built well. Whichever you choose, budget for updates, backups and small improvements.</p>
<div class="callout"><b>Our rule of thumb:</b> if it is a website, start with WordPress. If it is software, build custom.</div>
<h2>Can you mix both?</h2><p>Yes. A common setup is WordPress for marketing pages and a React or Laravel application for the logged-in product.</p>` },
  { slug: 'core-web-vitals-checklist', title: 'A practical Core Web Vitals checklist for 2026',
    desc: 'The fixes that move LCP, INP and CLS the most, in the order we usually do them.', date: '2026-09-15', read: '7 min', c1: '#E58A00',
    body: `<p>Core Web Vitals measure how fast a page shows content (LCP), how quickly it responds (INP) and how stable it looks (CLS). Here is where we start on most audits.</p>
<h2>1. Fix the largest image first</h2><p>Your hero image is usually the LCP element. Serve it in WebP or AVIF at the right size, never lazy-load it and preload it.</p>
<pre>&lt;link rel="preload" as="image" href="hero.webp"&gt;
&lt;img src="hero.webp" width="1200" height="720" alt="..." fetchpriority="high"&gt;</pre>
<h2>2. Reserve space to stop layout shifts</h2><p>Always set width and height on images, embeds and ads. Reserve space for banners and cookie notices.</p>
<h2>3. Reduce JavaScript</h2><p>Remove unused plugins and third-party scripts. Load chat widgets and trackers after the page is interactive.</p>
<h2>4. Optimise fonts</h2><p>Use two font families at most, self-host them and add <code>font-display: swap</code>.</p>
<h2>5. Cache everything sensible</h2><p>Use server caching, browser caching and a CDN. On WordPress, a single well-configured caching plugin beats three overlapping ones.</p>
<div class="callout"><b>Measure with real data:</b> Search Console's Core Web Vitals report shows real user results. Lab scores are a guide, not the goal.</div>` },
]

export const TECH = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'WooCommerce', 'Shopify', 'Tailwind', 'MySQL', 'MongoDB', 'Git']
export const LEGAL_UPDATED = '21 September 2026'
export const cityPath = (c) => `/web-developer-in/${c.toLowerCase()}`

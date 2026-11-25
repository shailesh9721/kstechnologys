// ============================================================
//  KS TECHNOLOGYS - CONTENT & CONFIG (MERN STACK FOCUSED)
//  Sab text, contact details, prices yahin se change karein.
//  "TODO" wali values apni real details se replace karein.
// ============================================================

export const CFG = {
  brand: 'KS Technologys',
  domain: 'kstechnologys.com',              // TODO: agar domain alag hai
  email: 'shailesh97218542@gmail.com',              // TODO: real email (contact form yahin aayega)
  phone: '+91 9721854225',                  // TODO
  wa: '9721854225',                         // TODO: WhatsApp number, country code ke saath, + ke bina
  address: 'India (remote-first team)',      // TODO
  hours: 'Mon to Sat, 10:00 to 19:00 IST',
  stats: { years: 2, projects: 20, clients: 11, countries: 4 }, // TODO: sahi numbers
  tagline: 'MERN stack developers who turn designs and ideas into fast, working web apps.',
  social: {
    linkedin: 'https://www.linkedin.com/',  // TODO
    github: 'https://github.com/shailesh9721/kstechnologys',          // TODO
    instagram: 'https://www.instagram.com/reel/DQFN4vcErDb/?evlk=eWE3cWl2a3A4bnZx', // TODO
  },
}
export const SITE = `https://${CFG.domain}`
export const WA_LINK = `https://wa.me/${CFG.wa}?text=${encodeURIComponent('Hi KS Technologys, I want to discuss a web app project.')}`

export const SERVICES = [
  { slug: 'figma-to-react', name: 'Figma to React & Next.js',
    short: 'Pixel-accurate, responsive React components from Figma, XD, Sketch or PSD files.',
    lead: 'You spent weeks on the design. We build it as clean React or Next.js components that match it on every screen size: spacing, type, states and all.',
    items: [
      ['Pixel-accurate components', 'We measure against your design, not by eye. Spacing, type scale and colours match the file.'],
      ['Every breakpoint', 'Mobile, tablet, laptop and wide screens are all built and tested, not just resized.'],
      ['Reusable component library', 'Buttons, cards, forms and sections split into props-driven React components.'],
      ['Tailwind or CSS Modules', 'Whichever your team prefers, set up with a consistent spacing and colour scale.'],
      ['Accessibility basics', 'Colour contrast, keyboard focus, alt text and correct heading order.'],
      ['Cross-browser testing', 'Chrome, Safari, Firefox and Edge, on real phones and desktops.'],
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'CSS Modules', 'Framer Motion'],
    faqs: [
      ['Which design files do you accept?', 'Figma, Adobe XD, Sketch, PSD and AI files. A shared Figma link with view access is the easiest.'],
      ['Do you need the fonts and assets?', 'Yes. Share the font files or licence details and exported assets. We can export them from Figma if you give us access.'],
      ['Will you build animations and hover states?', 'Yes. If they are in the design or the prototype, we build them. If not, we can suggest subtle ones.'],
    ] },
  { slug: 'frontend-development', name: 'React & Next.js frontend development',
    short: 'Fast, SEO-ready React and Next.js frontends with clean, maintainable code.',
    lead: 'A frontend your team can actually maintain, built with reusable components, typed props and a design-system mindset instead of one-off pages.',
    items: [
      ['Next.js App Router', 'Server components, layout routing, metadata and image optimisation done properly.'],
      ['State management', 'Redux Toolkit, Zustand or React Query, chosen based on your data needs.'],
      ['API integration', 'REST and GraphQL clients wired with proper loading, error and empty states.'],
      ['Authentication UI', 'Login, signup, protected routes and JWT/session handling on the client.'],
      ['Forms and validation', 'React Hook Form + Zod, with clear inline errors and accessible labels.'],
      ['Performance budget', 'Code splitting, lazy loading and image optimisation to keep Core Web Vitals green.'],
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'React Query', 'Zod', 'Tailwind'],
    faqs: [
      ['React or Next.js?', 'If SEO and fast first load matter, Next.js. If it is a logged-in dashboard, plain React with Vite is often simpler. We will recommend honestly.'],
      ['Can you work with our existing codebase?', 'Yes, after a short code review to understand structure, state and conventions.'],
      ['Do you write tests?', 'For key flows, yes. Vitest and React Testing Library for components and hooks.'],
    ] },
  { slug: 'backend-development', name: 'Node.js & Express backend development',
    short: 'REST APIs, authentication, roles and business logic in Node.js and Express.',
    lead: 'Backends built to be understood six months later: clear routes, validated input, sensible error handling and tests where they matter.',
    items: [
      ['REST API design', 'Resource-based routes, proper status codes, pagination and versioning.'],
      ['Authentication & roles', 'JWT access/refresh tokens, bcrypt hashing, role-based access control.'],
      ['MongoDB modelling', 'Mongoose schemas, indexes and relations designed for real query patterns.'],
      ['Validation & errors', 'Zod or Joi validation, centralised error middleware and consistent API responses.'],
      ['Third-party integrations', 'Payments (Razorpay/Stripe), email, SMS, file uploads and any service with an API.'],
      ['Deployment', 'Render, Railway, Vercel or a VPS, with environment config, logging and backups.'],
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Zod', 'Razorpay', 'Stripe'],
    faqs: [
      ['Do you build in phases?', 'Yes. We ship a working first version quickly, then add features in milestones so you see progress every week.'],
      ['Who owns the code?', 'You do. On final payment the full source code and repository access are handed over.'],
      ['Can you add features to an app someone else built?', 'Yes, after a short code review to understand what is there.'],
    ] },
  { slug: 'full-stack-mern', name: 'Full-stack MERN application development',
    short: 'Dashboards, portals and booking systems end-to-end in React, Node, Express and MongoDB.',
    lead: 'When a template will not do, we build the tool your business needs: secure, fast and ready to grow — from database schema to deployed UI.',
    items: [
      ['Custom web apps', 'Customer portals, admin dashboards, CRMs, booking and inventory tools.'],
      ['End-to-end ownership', 'Database schema, API, frontend, auth and deployment handled by one team.'],
      ['Real-time features', 'Socket.io for live order dashboards, chat and notifications.'],
      ['File uploads', 'Cloudinary or S3-backed image and document uploads with size and type checks.'],
      ['Admin panels', 'CRUD screens, filters, search and role-based access for internal teams.'],
      ['Staging + production', 'Separate environments with a simple, repeatable release process.'],
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'Cloudinary', 'Vercel', 'Render'],
    faqs: [
      ['Do you build in phases?', 'Yes. We ship a working first version quickly, then add features in milestones so you see progress every week.'],
      ['Who owns the code?', 'You do. On final payment the full source code and repository access are handed over.'],
      ['Can you add features to an app someone else built?', 'Yes, after a short code review to understand what is there.'],
    ] },
  { slug: 'white-label-mern', name: 'White-label MERN development for agencies',
    short: 'A quiet full-stack development partner for design studios and agencies.',
    lead: 'You keep the client and the credit. We take the code — React, Next.js, Node, MongoDB — on your brand, under NDA, on your timeline.',
    items: [
      ['Your brand, not ours', 'We work under NDA and communicate as part of your team when needed.'],
      ['Clean design handoff', 'We review your Figma file before starting and flag anything that will not work on the web.'],
      ['Fixed-price quotes', 'Send a design or spec, get a scoped quote. No surprises when you invoice your client.'],
      ['Weekly progress links', 'Staging site access from the first week, so you can review as we build.'],
      ['Scalable capacity', 'Extra hands for busy months without hiring a full-time developer.'],
      ['Post-launch fixes', 'Bug-fix window after launch so your client stays happy.'],
    ],
    tech: ['Figma', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Git'],
    faqs: [
      ['Will you contact my client directly?', 'Only if you ask us to. By default we talk only to you.'],
      ['Do you sign NDAs?', 'Yes, before any files are shared.'],
      ['How do we hand off the finished app?', 'As a Git repository or a direct deploy to your client\'s hosting, whichever you prefer.'],
    ] },
  { slug: 'website-speed-seo', name: 'Speed & technical SEO',
    short: 'Core Web Vitals, clean React markup, schema and search-ready structure.',
    lead: 'A fast site ranks better and converts better. We fix the technical side of your React or Next.js app so your content and ads can work harder.',
    items: [
      ['Core Web Vitals fixes', 'We improve LCP, INP and CLS using real measurements, not just a lab score.'],
      ['Image and font optimisation', 'next/image, modern formats, correct sizes, lazy loading and fast font delivery.'],
      ['Caching and CDN', 'Vercel/Cloudflare edge caching and ISR where it fits your app.'],
      ['Technical SEO', 'Metadata API, canonicals, sitemap, robots rules, redirects and structured data.'],
      ['Search Console setup', 'Verified property, submitted sitemap and error monitoring.'],
      ['Audit report', 'A clear list of what we found, what we fixed and what is left.'],
    ],
    tech: ['Lighthouse', 'PageSpeed', 'Search Console', 'Schema.org', 'Cloudflare', 'Next.js Metadata'],
    faqs: [
      ['Do you do content writing or link building?', 'No. We focus on the technical foundation. We work well alongside your SEO or content team.'],
      ['How fast can you make my site?', 'It depends on the starting point. Most sites gain a lot from image, script and caching fixes alone. You get a before and after report.'],
      ['Will changes break my site?', 'We work on a staging copy first and only push changes live after testing.'],
    ] },
  { slug: 'website-maintenance', name: 'Web app maintenance & support',
    short: 'Dependency updates, backups, monitoring and small changes every month.',
    lead: 'Your app is never finished. We keep dependencies updated, errors monitored and backups running so you can focus on the business.',
    items: [
      ['Dependency updates', 'npm packages, Node versions and security patches applied on staging first, then live.'],
      ['Daily backups', 'Automatic MongoDB Atlas and code backups with tested restores.'],
      ['Error monitoring', 'Sentry or LogRocket wired in, with alerts for real production errors.'],
      ['Uptime checks', 'We are alerted within minutes if the app or API goes down.'],
      ['Monthly change hours', 'Text, image, UI tweaks and small feature changes included every month.'],
      ['Monthly report', 'A short summary of what was done and how the app performed.'],
    ],
    tech: ['Node.js', 'MongoDB Atlas', 'Sentry', 'Vercel', 'Render', 'UptimeRobot', 'GitHub Actions'],
    faqs: [
      ['Do unused hours roll over?', 'Small unused hours roll over for one month.'],
      ['Can you maintain an app you did not build?', 'Yes, after a short code health check.'],
      ['What if something breaks in production?', 'Active maintenance plans include priority fixes. Otherwise we can do a one-time rescue.'],
    ] },
]

export const CITIES = ['Gurugram', 'Delhi', 'Noida']

export const PLANS = [
  { name: 'Starter website', price: '15,000', note: 'One-time, starting from', blurb: 'For freelancers and small businesses that need a clean presence.',
    feats: ['Up to 5 pages', 'Responsive on all devices', 'Contact form and WhatsApp button', 'Basic SEO setup', '1 round of revisions', '7 days post-launch support'], cta: 'Ask for a quote', feat: false },
  { name: 'Business website', price: '35,000', note: 'One-time, starting from', blurb: "For growing companies and agencies' client projects.",
    feats: ['Up to 12 pages', 'Custom React or Next.js build', 'Editable content via a simple CMS or JSON config', 'Speed and technical SEO', 'Blog, forms and integrations', '3 rounds of revisions', '30 days post-launch support'], cta: 'Start this plan', feat: true },
  { name: 'Full-stack MERN apps', price: 'Custom', note: 'Scoped after a call', blurb: 'For portals, dashboards, booking systems and custom software.',
    feats: ['React + Node + Express + MongoDB', 'Authentication, roles and permissions', 'Payment and third-party integrations', 'Milestone-based delivery', 'Staging environment', 'Source code handover'], cta: 'Book a call', feat: false },
]

export const MAINT = [
  ['Basic', 'Rs. 2,000 / month', 'Dependency updates, backups, uptime checks'],
  ['Standard', 'Rs. 5,000 / month', 'Basic + error monitoring, 3 change hours, monthly report'],
  ['Priority', 'Rs. 10,000 / month', 'Standard + 8 change hours, same-day response'],
]

// TODO: apne real projects se replace karein
export const WORK = [
  { t: 'Clinic booking platform', cat: 'MERN', d: 'React frontend with Node/Express REST APIs, MongoDB for doctor profiles, JWT auth and online appointment scheduling.', c1: '#3A3AF2', c2: '#DCE0FF' },
  { t: 'Furniture e-commerce app', cat: 'MERN', d: 'Full-stack MERN store with 400+ products, cart, Razorpay payment integration and order management dashboard.', c1: '#0E8F5B', c2: '#D5F2E4' },
  { t: 'Institute admission portal', cat: 'MERN', d: 'Course listing, enquiry funnel and student admission forms with Express APIs and MongoDB storage.', c1: '#F24E8E', c2: '#FFDCE9' },
  { t: 'SaaS dashboard & marketing app', cat: 'React', d: 'Figma design converted into a pixel-perfect React + Tailwind app with animations and reusable components.', c1: '#14213D', c2: '#DDE3F3' },
  { t: 'Car dealership inventory app', cat: 'MERN', d: 'Searchable vehicle inventory with filters, lead capture and admin CRUD built on Node/Express + MongoDB.', c1: '#E58A00', c2: '#FFEBC7' },
  { t: 'Restaurant ordering app', cat: 'MERN', d: 'Menu, cart and live order dashboard built with React, Node, Express and MongoDB.', c1: '#C62828', c2: '#FFD9D9' },
  { t: 'Home decor e-commerce app', cat: 'MERN', d: 'Collection pages, product filtering and fast React UI backed by Express APIs and MongoDB.', c1: '#7B4DFF', c2: '#E7DEFF' },
  { t: 'Agency landing pages', cat: 'React', d: '12 responsive landing pages built as reusable React + Tailwind components with smooth animations.', c1: '#0097A7', c2: '#D2F1F5' },
]
export const WORK_CATS = ['MERN', 'React', 'Full-stack', 'Figma to React']

// TODO: real client reviews se replace karein
export const TESTIMONIALS = [
  ['DS', 'Founder, design studio', 'They took our Figma file and returned a React app that looked exactly like it. Our client never had a single spacing complaint.'],
  ['OS', 'Owner, online store', 'Store launched on time, Razorpay worked from day one, and pages load fast even on mobile data.'],
  ['TI', 'Director, training institute', 'Enquiries went up after the new portal. Our team can update content without calling a developer.'],
  ['CL', 'Creative lead, agency', 'Reliable white-label MERN partner. Clear updates, no missed deadlines and clean code.'],
]

export const FAQS = [
  ['How long does a website take?', 'A 5-page website usually takes 1 to 2 weeks. A 12-page business site takes 3 to 5 weeks. Full-stack apps are scoped in milestones. You get a timeline before we start.'],
  ['Do you do design as well?', 'Our focus is development. If you already have a Figma design, we build it exactly. If you need one, we work with trusted designers.'],
  ['What do you need to start?', 'Your design files (or reference sites), content, logo and brand colours, and a clear list of pages and features. Missing content? We will tell you what to prepare.'],
  ['How does payment work?', 'Usually 40% advance, 30% at the design-approval or staging stage and 30% on delivery. Larger projects are split into milestones.'],
  ['Will the website work on mobile?', 'Yes. Every site is built mobile-first and tested on real devices.'],
  ['Who owns the website and code?', 'You do. After final payment we hand over all files, source code and repository access.'],
  ['Do you provide hosting and domain?', 'We can guide you or set it up on your account. You always own the domain and hosting login.'],
  ['What happens after launch?', 'Every project includes free post-launch support. After that you can choose a maintenance plan or pay per task.'],
  ['Can you work with my agency or design studio?', 'Yes. White-label work under NDA is a big part of what we do.'],
  ['Do you work with clients outside India?', 'Yes. We work remotely with clients across time zones and communicate by email, WhatsApp and video calls.'],
]

export const POSTS = [
  { slug: 'figma-to-react-handoff', title: 'A cleaner Figma-to-React handoff: 9 things designers can do',
    desc: 'Small changes in your Figma file save days of back-and-forth with your React developer.', date: '2026-09-01', read: '5 min', c1: '#3A3AF2',
    body: `<p>A good handoff is less about tools and more about removing guesswork. These habits make a developer's job faster and your final React app closer to the design.</p>
<h2>Name and organise layers</h2><p>Frames named "Hero", "Pricing" and "Footer" are far easier to build than "Frame 4302". Group related elements and delete hidden leftovers.</p>
<h2>Use styles and variables</h2><p>Define colours, text styles and spacing as Figma variables. We turn these directly into Tailwind tokens or CSS custom properties, so the code mirrors your design system.</p>
<h2>Design every state</h2><p>Buttons need hover, focus and disabled states. Forms need error and success messages. Menus need an open state on mobile. If it is not designed, the developer has to guess.</p>
<h2>Show mobile and tablet</h2><p>Desktop-only files force developers to invent the mobile layout. Even rough mobile frames remove most confusion.</p>
<div class="callout"><b>Quick checklist:</b> auto layout on, consistent spacing scale, fonts shared, assets exported, prototype links for animations.</div>
<h2>Share fonts and assets early</h2><p>Licensing font files late is a common cause of delays. Share them at kickoff, along with logos in SVG.</p>
<h2>Do a review on staging</h2><p>Instead of a long final review, check the staging site weekly. Small differences are cheap to fix while the build is in progress.</p>` },
  { slug: 'nextjs-vs-spa-react', title: 'Next.js or a plain React SPA: which one do you need?', desc: 'A plain-language comparison to help you choose the right React foundation for your project.', date: '2026-09-08', read: '6 min', c1: '#0E8F5B',
    body: `<p>Both are React. The right one depends on whether the page needs to be found on Google, how much of it is logged-in, and how you want to host it.</p>
<h2>Choose Next.js when</h2><ul><li>SEO and fast first paint matter (marketing pages, blogs, e-commerce catalogues).</li><li>You want server components, image optimisation and routing out of the box.</li><li>You plan to host on Vercel or another Node-capable host.</li></ul>
<h2>Choose a plain React SPA when</h2><ul><li>The app is mostly behind a login (dashboards, admin panels, portals).</li><li>You want a very simple static deploy (Vercel, Netlify, S3).</li><li>SEO is not a concern for most screens.</li></ul>
<h2>Cost over time</h2><p>A Vite + React SPA has a very low running cost. Next.js adds flexibility but needs a Node runtime or edge host. Whichever you choose, budget for updates, monitoring and backups.</p>
<div class="callout"><b>Our rule of thumb:</b> if Google needs to see it, Next.js. If only users see it, plain React.</div>
<h2>Can you mix both?</h2><p>Yes. A common setup is a Next.js marketing site with a separate React admin dashboard talking to the same Node/Express API.</p>` },
  { slug: 'core-web-vitals-react-checklist', title: 'A practical Core Web Vitals checklist for React apps (2026)', desc: 'The fixes that move LCP, INP and CLS the most in React and Next.js apps, in the order we usually do them.', date: '2026-09-15', read: '7 min', c1: '#E58A00',
    body: `<p>Core Web Vitals measure how fast a page shows content (LCP), how quickly it responds (INP) and how stable it looks (CLS). Here is where we start on most React audits.</p>
<h2>1. Fix the largest image first</h2><p>Your hero image is usually the LCP element. In Next.js, use <code>next/image</code> with priority. In a plain React app, serve WebP or AVIF at the right size and preload it.</p>
<pre>&lt;link rel="preload" as="image" href="hero.webp"&gt;
&lt;img src="hero.webp" width="1200" height="720" alt="..." fetchpriority="high"&gt;</pre>
<h2>2. Reserve space to stop layout shifts</h2><p>Always set width and height on images, embeds and ads. Reserve space for banners and cookie notices.</p>
<h2>3. Reduce JavaScript</h2><p>Remove unused libraries and third-party scripts. Code-split routes with <code>React.lazy</code> or dynamic imports. Load chat widgets and trackers after the page is interactive.</p>
<h2>4. Optimise fonts</h2><p>Use two font families at most, self-host them and add <code>font-display: swap</code>. In Next.js, <code>next/font</code> handles this.</p>
<h2>5. Cache everything sensible</h2><p>Use CDN caching (Vercel, Cloudflare) and React Query cache for API data. Stale-while-revalidate is usually the right default.</p>
<div class="callout"><b>Measure with real data:</b> Search Console's Core Web Vitals report shows real user results. Lab scores are a guide, not the goal.</div>` },
]

export const TECH = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST API', 'JWT', 'Socket.io', 'Git', 'Vercel']
export const LEGAL_UPDATED = '23 November 2026'
export const cityPath = (c) => `/web-developer-in/${c.toLowerCase()}`
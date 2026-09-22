KS TECHNOLOGYS - REACT + TAILWIND WEBSITE
==========================================
Stack: React 18, React Router 6, Tailwind CSS 3, Vite 5.
26 routes, saare pages custom components se bane hain (koi template nahi).

1) LOCAL MEIN CHALANA
   npm install
   npm run dev          -> http://localhost:5173

2) APNI DETAILS BADLEIN
   src/data/content.js kholein - sab text, email, phone, WhatsApp number,
   prices, projects, testimonials wahin hain. "TODO" dhundh lein.

3) PRODUCTION BUILD
   npm run build         -> dist/ folder banega (deploy ke liye yehi upload karein)
   npm run preview        -> build ko locally test karne ke liye

4) DEPLOY KAISE KAREIN
   - Vercel / Netlify: repo connect karein, build command "npm run build",
     output "dist". vercel.json already SPA rewrite ke liye set hai.
   - Apna / cPanel hosting: `npm run build` chalayein, poora dist/ folder
     public_html me upload karein. dist/.htaccess already SPA fallback
     (React Router) sambhalta hai, kuch aur setup nahi chahiye.

5) CONTACT FORM
   FormSubmit.co API se chalta hai (koi backend nahi chahiye).
   Site live hone ke baad form ek baar submit karein - email par activation
   link aayega, use confirm karein. Uske baad saari enquiries seedhe
   aapke email par aayengi.

6) SEO
   npm run build se pehle sitemap.xml aur robots.txt khud generate hote hain
   (scripts/generate-sitemap.mjs), src/data/content.js ke hisaab se.
   Har page apna <title>, meta description aur schema.org JSON-LD khud set
   karta hai (src/components/Seo.jsx).

Folder structure:
  src/data/content.js     -> saara text/config (yahi sabse zyada edit hoga)
  src/components/         -> Layout, header, footer, reusable UI blocks, icons
  src/pages/               -> har route ka page
  src/index.css            -> Tailwind + custom component classes

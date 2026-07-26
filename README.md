# The Biology Mentor

Marketing website for **The Biology Mentor** — Ms. Preeti Bhardwaj's Biology
tutoring & coaching business in Dubai/UAE, serving Years 9-13 students across
IGCSE, A-Level, CBSE, ICSE, NEET and Olympiad preparation.

Plain React + Tailwind single-page site. No proprietary platform lock-in —
this is a normal static site you can host anywhere.

## Stack

- [Vite](https://vitejs.dev/) + React 18
- Tailwind CSS
- [framer-motion](https://www.framer.com/motion/) for scroll animations
- [lucide-react](https://lucide.dev/) for icons

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Wiring up the contact form

The form on the site posts to [Formspree](https://formspree.io) so enquiries
land in your inbox with zero backend to maintain:

1. Create a free account at formspree.io and make a new form.
2. Copy its endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Copy `.env.example` to `.env` and set:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
4. Rebuild/redeploy. Until this is set, the "Book Free Diagnostic Session"
   button falls back to opening WhatsApp instead, so no enquiry is silently lost.

## Deploying

Any static host works — the build output is a plain `dist/` folder.

**Vercel / Netlify / Cloudflare Pages** (recommended, all have generous free tiers):
- Build command: `npm run build`
- Output directory: `dist`
- Add the `VITE_FORMSPREE_ENDPOINT` environment variable in the host's dashboard.
- Point your domain's DNS at the host following their custom-domain instructions.

## Before going live — checklist

- [ ] **Real photo** — drop an actual photo of Ms. Preeti at
      `public/images/preeti-bhardwaj.jpg` (the site currently shows a
      monogram placeholder if this file is missing).
- [ ] **Real testimonials** — `src/components/landing/Testimonials.jsx`
      currently ships with illustrative quotes standing in for real ones.
      Replace them with genuine parent/student feedback (with permission)
      before launch — publishing fabricated reviews as genuine is
      misleading advertising.
- [x] **Contact details verified** — phone, WhatsApp number and email in
      `src/config/site.js` are confirmed real.
- [ ] **Confirm delivery mode** — copy currently says sessions are available
      "online or in-person"; update `HowItWorks.jsx` / `FAQ.jsx` if that's
      not accurate.
- [ ] **Formspree endpoint** set (see above).
- [x] **Domain set** — `thebiologymentor.com`, wired into `index.html` and
      `public/robots.txt`. Still need to point its DNS at whichever host
      you deploy to.
- [ ] **Social share image** — add `public/og-image.jpg` (1200x630px) for
      link previews on WhatsApp/Facebook/LinkedIn.
- [ ] **Analytics** (optional) — add Google Analytics/Meta Pixel snippet to
      `index.html` if you want to track visitors.

## Project structure

```
src/
  components/
    ui/           shared button/input/select primitives
    landing/       one component per homepage section
  config/site.js   single source of truth for phone/email/WhatsApp/location
  pages/Home.jsx   assembles all sections
```

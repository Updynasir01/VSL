# VSL Website — Next.js

Vision Solutions Limited marketing site. Next.js 14 (App Router) + TypeScript + Tailwind CSS, with API routes for the contact form and newsletter (email via Resend).

## Pages
- `/` — home (hero, partners, why VSL, testimonial, stories, CTA)
- `/services` — Advise / Build / Run + process
- `/impact` — case studies
- `/contact` — quote form → `POST /api/contact`
- `sitemap.xml`, `robots.txt`, favicon, WhatsApp floating button — built in

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

## Environment variables

| Variable | What |
| --- | --- |
| `RESEND_API_KEY` | Free key from https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | Where submissions arrive (info@vsolcorp.com) |
| `CONTACT_FROM_EMAIL` | Verified sender. Use `VSL Website <onboarding@resend.dev>` until your domain is verified in Resend |
| `NEXT_PUBLIC_SITE_URL` | Your production URL, e.g. `https://vsolcorp.com` |

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In [vercel.com](https://vercel.com) → **Add New Project** → import the repo. Vercel auto-detects Next.js; no config needed.
3. In **Settings → Environment Variables**, add the four variables above.
4. Deploy. The contact form and newsletter will email `CONTACT_TO_EMAIL` via Resend.
5. (Recommended) In Resend, verify your `vsolcorp.com` domain, then change `CONTACT_FROM_EMAIL` to e.g. `VSL Website <noreply@vsolcorp.com>`.

## Notes
- Case-study / section photos are hot-linked from Unsplash (allowed by `next.config.mjs` remotePatterns). Replace with your own photos in `public/` when ready.
- Partner logos live in `public/logos/`.
- Testimonial name and case-study details are illustrative — replace with real client facts.

# KC Cuts and Style LLC — Marketing Website

A full marketing website for **KC Cuts and Style LLC**, the sensory-friendly mobile haircut practice of Kristina Arroyo — licensed hairstylist with 25+ years experience, specializing in therapeutic haircuts for clients with ASD and SPD.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom brand palette + typography)
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Deployment:** Vercel (recommended)

---

## Project Structure

```
kc-cuts/
├── app/
│   ├── layout.tsx            # Root layout (Nav + Footer)
│   ├── globals.css           # Global styles, Tailwind config, CSS vars
│   ├── page.tsx              # Home (/)
│   ├── not-found.tsx         # 404 page
│   ├── about/
│   │   └── page.tsx          # About (/about)
│   ├── services/
│   │   └── page.tsx          # Services (/services)
│   ├── waitlist/
│   │   └── page.tsx          # Waitlist (/waitlist)
│   └── resources/
│       └── page.tsx          # Resources (/resources)
├── components/
│   ├── Nav.tsx               # Sticky nav, mobile hamburger
│   ├── Hero.tsx              # Full-height hero with animated entrance
│   ├── Footer.tsx            # Footer with logo, links, service area
│   ├── WaveDivider.tsx       # Organic SVG section dividers
│   ├── FadeInSection.tsx     # Intersection Observer fade-in wrapper
│   ├── ServiceCard.tsx       # Service overview card
│   ├── TestimonialStrip.tsx  # Horizontal scrolling testimonials
│   ├── WaitlistForm.tsx      # Controlled form with validation
│   └── CredentialBadge.tsx   # Affiliation/credential badge component
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd kc-cuts

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The site is optimized for Vercel deployment — no additional configuration required for the free tier.

---

## Brand Colors

Defined in `tailwind.config.ts` and available as Tailwind utilities:

| Name | Tailwind Class | Hex |
|------|---------------|-----|
| Crimson (primary) | `bg-crimson-800` | `#8B1A1A` |
| Gold (accent) | `bg-gold-500` | `#d4a017` |
| Cream (background) | `bg-cream-100` | `#faf7f0` |
| Sage (secondary accent) | `bg-sage-500` | `#5e8362` |

---

## Pages

| Route | Page | Status |
|-------|------|--------|
| `/` | Home | Complete |
| `/about` | About Kristina | Complete |
| `/services` | Services | Complete |
| `/waitlist` | Waitlist Form | Complete |
| `/resources` | Resources / Guide | Complete |

---

## Open TODOs

The following items are left as `// TODO` comments throughout the codebase:

### High Priority (before launch)

**`components/WaitlistForm.tsx`** — Replace Formspree endpoint with real form handler

Currently the form POSTs to a placeholder Formspree URL (`https://formspree.io/f/YOUR_FORM_ID`). To activate:
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint ID
3. Replace `YOUR_FORM_ID` in `WaitlistForm.tsx`

Alternative: replace the fetch call with any backend handler (Resend, EmailJS, a Next.js API route, etc.)

**`app/about/page.tsx`**, **`app/page.tsx`** — Add real photography once summer headshot session complete

Dark gradient placeholder panels exist for Kristina's headshot. Replace with an `<Image>` component pointing to the real photo.

### Medium Priority

**`app/resources/page.tsx`** — Wire up Instagram embed once API token provided

A 6-cell placeholder grid exists for the Instagram feed. Use the Instagram Basic Display API or a service like Elfsight or Curator.io once credentials are available.

**`components/Footer.tsx`**, **`app/services/page.tsx`** — Confirm service area towns with Kristina

Current list: Westborough, Marlborough, Northborough, Shrewsbury + surrounding MetroWest. Update once confirmed.

**`components/Footer.tsx`** — Confirm email address with Kristina

Placeholder email `hello@kccutsandstyle.com` — update once the real business email is established.

### Future Content

**`app/resources/page.tsx`** — Add blog/resource posts once content strategy confirmed

A "Coming Soon" placeholder is in place. When blog content is ready, add a CMS (Sanity, Contentful, or MDX) or a simple `/app/resources/[slug]/page.tsx` route.

---

## Accessibility

- Semantic HTML throughout (landmarks, headings hierarchy, ARIA labels)
- `focus-visible` states on all interactive elements
- `aria-label` on icon-only elements and external links
- `prefers-reduced-motion` media query disables all animations
- Screen reader-only text where icon buttons are used
- Form fields with `aria-required`, `aria-describedby` for error messages

---

## Performance Notes

- Fonts loaded via `next/font/google` (no layout shift)
- No external image dependencies (CSS gradients for hero background)
- Intersection Observer for scroll animations (no scroll event listeners)
- All animations use CSS `transform` and `opacity` (GPU composited)

---

*Built for KC Cuts and Style LLC. All rights reserved.*

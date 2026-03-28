# Afrilion Consulting

Marketing website for Afrilion Consulting — a Nigerian professional services firm specialising in BSS, OSS, and VAS solutions for mobile network operators and MVNOs across Africa. The site covers the firm's services, founder story, team, vendor expertise, and a lead capture form that routes directly to Google Sheets.

---

## What the site covers

**Hero and services** — The landing page opens with a full-viewport hero, followed by an animated vendor logo carousel and four service cards covering BSS/OSS implementation, project delivery, IT testing, and business consulting.

**Why us** — An accordion section with animated expand/collapse that lets users read through Afrilion's four key differentiators without leaving the page.

**About the team** — A founder profile section with expandable biography, a team group photo section, and a "Who We Are" panel covering vision, mission, and values. Includes an MNO experience showcase displaying the logos of the four major Nigerian operators the team has worked with.

**Lead capture form** — A nine-field contact form (name, company, job title, email, phone, country, service of interest, project description, and consent checkbox) that submits to a Next.js API route, which appends the data directly to a Google Sheet via the Sheets API. Includes server-side rate limiting at 200 requests per minute.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Font Awesome (React) |
| Form backend | Google Sheets API v4 + JWT auth |
| Rate limiting | `limiter` package |
| Responsive detection | Mantine hooks (`useMediaQuery`) |
| Deployment | Vercel |

---

## Project structure

```
src/
├── app/
│   ├── api/
│   │   └── submit-form/
│   │       └── route.ts        # API route — validates, rate-limits, appends to Google Sheet
│   ├── layout.tsx               # Root layout with Nav and Footer
│   └── page.tsx                 # Home page — composes all sections
├── components/
│   ├── Buttons.tsx              # PrimaryButtons and SmoothScrollLink
│   ├── Cards.tsx                # Four service cards with Font Awesome icons
│   ├── Carousel.tsx             # Infinite vendor logo marquee
│   ├── Footer.tsx               # Contact info with clipboard-copy and social links
│   ├── Nav.tsx                  # Responsive navbar with mobile drawer
│   └── Typography.tsx           # Tagline, Title, Paragraph primitives
├── data/
│   ├── services.json            # Service card content and icon mapping
│   ├── vendors.json             # Vendor and MNO logo paths
│   └── why-us.json              # Accordion content
├── hooks/
│   ├── useDesktop.tsx           # lg+ breakpoint detection
│   └── useMobile.tsx            # ≤850px breakpoint detection
├── sections/
│   ├── CTA.tsx                  # Lead capture form with Google Sheets integration
│   ├── Hero.tsx                 # Full-viewport hero with scroll indicator
│   ├── OurTeam.tsx              # Founder, team, vision/mission/values, MNO logos
│   ├── Services.tsx             # Service cards section
│   └── WhyUs.tsx                # Animated accordion section
├── style/
│   └── globals.css              # Tailwind base + dotted-bg utility classes
└── utils/
    ├── fontawesome.ts           # Font Awesome library configuration
    └── googleSheetsService.ts   # JWT auth and sheet append logic
```
---

## Key implementation decisions

**Smooth scroll navigation** — The site is a single-page layout. The `SmoothScrollLink` component intercepts anchor clicks and calls `scrollIntoView({ behavior: 'smooth' })` on the target section. The mobile nav drawer closes on any link click via a `setIsOpen` callback passed down as a prop.

**Animated vendor carousel** — The carousel duplicates the vendor array and applies a continuous `x: ["0%", "-50%"]` animation so the loop is seamless. The duplicate ensures the second copy is visually identical to the first, preventing a visible jump at the reset point.

**Mobile-responsive nav** — The navbar reads the `isMobileScreen` hook (≤850px) and renders either a hamburger/drawer or the inline desktop menu. The `useLockBodyScroll` hook from `react-use` prevents the page from scrolling while the mobile drawer is open. The drawer closes automatically when the screen resizes above the breakpoint.

**Rate limiting** — The API route uses a token-bucket rate limiter set to 200 requests per minute. Requests that exceed the limit receive a `429 Too Many Requests` response before any Sheets API call is made, protecting the service account quota.

**Expandable founder bio** — On desktop, the full founder biography is always visible. On mobile, a "See More / See Less" toggle controlled by `AnimatePresence` and Framer Motion's `height: "auto"` animation reveals or hides the extended text. The same pattern is used for the team section bio on mobile.

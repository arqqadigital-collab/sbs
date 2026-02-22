

## TechSync Landing Page — Refactoring Plan

### Goal
Take the existing single-file React landing page and split it into a clean, production-ready component architecture — **without changing any visual design, styling, or functionality**.

### Component Breakdown

The file will be split into the following structure:

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          — Top navigation bar (desktop + mobile)
│   │   └── Footer.tsx          — Site footer with links & branding
│   ├── sections/
│   │   ├── Hero.tsx            — Video background hero with CTA
│   │   ├── TransformSection.tsx — Tabbed "How We Transform" section
│   │   ├── DeliverSection.tsx  — "What We Deliver" cards with sticky layout
│   │   ├── TrustedSection.tsx  — Marquee logo carousel
│   │   ├── StatsSection.tsx    — Key stats (200+, 15+, 98%)
│   │   ├── TestimonialSection.tsx — Client testimonials with dot navigation
│   │   ├── CTABannerSection.tsx — "Ready To Evolve?" call-to-action
│   │   └── ContactSection.tsx  — Contact form + office info + social links
├── pages/
│   └── Index.tsx               — Composes all sections into the landing page
├── App.tsx                     — Router setup (unchanged structure)
└── main.tsx                    — Entry point (unchanged)
```

### What Will Be Done

1. **Extract each component** into its own file under `sections/` or `layout/` — keeping exact same JSX, Tailwind classes, and logic
2. **Clean up imports** — each file imports only the lucide-react icons it needs
3. **Move data constants** (tab data, testimonials, logos, office numbers) into the component files where they're used for self-contained components
4. **Update Index.tsx** to import and compose all sections
5. **Convert to TypeScript** (.tsx) with proper typing where applicable
6. **Ensure Vite + Vercel compatibility** — everything stays client-side, no SSR concerns

### What Will NOT Change
- No design, color, or layout modifications
- No Tailwind class changes
- No animation or interaction changes
- No removal of features
- Brand colors, fonts, and visual identity stay identical


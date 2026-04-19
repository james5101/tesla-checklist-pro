# TeslaChecklistPro — UI

Tesla delivery-day inspection web app. Two surfaces: a marketing landing page and an inspection app.

## Stack

- Vite + React 18 + TypeScript
- react-router-dom — routes: `/` (marketing), `/app` (inspection), `/inspection`, `/how-it-works`, `/owners`, `/faq` (info pages), `/:slug` (per-model SEO landings; catch-all, must stay last)
- No CSS framework — design tokens live as CSS variables in `src/styles/tokens.css`, component styling is inline `style={{…}}` (matches the design prototype verbatim)
- Dual theme (standard + cyber) — toggled via `html[data-theme]`, seeded pre-React in `index.html` to avoid flash

## Layout

- `src/pages/Marketing.tsx` — Nav, Hero, FeatureGrid, HowItWorks, Footer. `Nav` and `Footer` are exported for reuse on model-landing pages.
- `src/pages/InspectionApp.tsx` — TopBar, ModelPicker, SidebarNav, InspectionView
- `src/pages/ModelLanding.tsx` — per-model SEO landing pages (`/model-y-delivery-checklist` etc.). All 5 Tesla models share one template; content is data-driven from the `MODELS` record. Old short slugs (`/model-y`) redirect via `LEGACY_REDIRECTS`.
- `src/pages/Inspection.tsx`, `HowItWorks.tsx`, `Owners.tsx`, `Faq.tsx` — info pages linked from the Nav. Each calls `useSeo` for per-route title/meta/canonical; Faq ships `FAQPage` JSON-LD.
- `src/components/InfoPage.tsx` — shared hero + CTA layout primitive used by the four info pages, plus a small `Section` helper for eyebrow/title/body blocks.
- `src/components/Icon.tsx` — shared 24×24 / 1.5px-stroke SVG wrapper (Lucide-style)
- `src/components/ThemeToggle.tsx` — standard↔cyber theme switcher, mounted in marketing Nav and app TopBar
- `src/hooks/useSeo.ts` — sets document.title, meta tags (description, OG, Twitter), canonical link, JSON-LD per route
- `src/hooks/useTheme.ts` — reads/writes `html[data-theme]` with MutationObserver so other components react to changes
- `src/styles/tokens.css` — colors, type, spacing, radii, motion + cyber-theme overrides and animations
- `src/assets/` — logos, checklist pattern, icon SVGs (bundled by Vite; do not link directly in `index.html`)
- `public/` — `favicon.svg`, `robots.txt`, `sitemap.xml` (served verbatim at site root)
- `.claude/skills/teslachecklistpro-design-system/` — design-system skill (tokens, UI kit, preview HTML, assets). Read-only reference, not imported by the app. Invoke as `/teslachecklistpro-design-system` when designing new UI.

## Design system rules

Enforce these in every change:

- **Theme-agnostic color**: always use CSS vars (`var(--accent)`, `var(--danger)`, `var(--fg-1)`). Never hardcode hex — cyber theme remaps every token. `--danger` is magenta in cyber; use it for flag-specific UI, not `--accent`.
- Surfaces: `--bg-0` → `--bg-3` (3-tier dark). No gradients on backgrounds — only on the logo mark.
- Accent: standard is Voltage Red, cyber is cyan. Use sparingly — one accent per screen region.
- Type: Geist sans + Geist Mono. No serifs. No emoji.
- Radii: `2px` max (`--radius-sm`). Use 1px hairlines (`--line`), not shadows, for separation.
- Motion: `120–240ms`, `cubic-bezier(0.2, 0, 0, 1)`, never bouncy. Cyber adds ambient animations (scan sweep, flicker, glitch, flag pulse).
- Voice: technical, direct, calm. Sentence case. "You" for reader. Numerals always (e.g. "147", not "one hundred and forty-seven" — except in display headlines).
- Don't fabricate authoritative data (recall IDs, statistics, owner counts). Cite community sources or link to canonical ones (NHTSA for recalls).

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — typecheck + production build
- `npm run preview` — serve the production build

## Deployment

Hosted on Vercel at [teslachecklistpro.com](https://teslachecklistpro.com). Repo: `https://github.com/james5101/tesla-checklist-pro` (remote `origin`, branch `master`).

- `vercel.json` — single SPA catch-all rewrite. Static files (favicon, sitemap, robots, hashed /assets/*) are served first by Vercel's filesystem check; only unknown paths fall through to `/index.html` so React Router can handle them. Vercel `source` uses path-to-regexp — no regex lookaheads.
- `@vercel/analytics` — `<Analytics />` is mounted inside `BrowserRouter` in `src/main.tsx`. Enable in the Vercel project dashboard for pageview data to start flowing.

## Known gaps

See `TODO.md`. Most notable: photo capture per item is still cosmetic, per-model checklist variations aren't wired (one shared 147-point list across all 5 models), and Sign in is still a placeholder link to `/app`.

## Windows + npm note

`package.json` pins `@rollup/rollup-win32-x64-msvc` as an optional dep so `npm install` under Git Bash (which reports `linux` as the npm `os`) still resolves the Windows native binary. If you move to WSL or Linux, that line can be dropped.

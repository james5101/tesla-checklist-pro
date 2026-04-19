# TODO

## Content

- [x] Populate the remaining 139 checklist items across 6 categories — sourced from TMC, r/TeslaLounge, Cybertruck Owners Club, InsideEVs, Tesla Support
- [x] Add remaining 15 Exterior items (23 of 23 seeded)
- [x] Rename "Documentation" → "Documents & kit" (was bucketing UMC/adapters/mats alongside paperwork)
- [ ] Per-model checklist variations (Model S/3/X/Y/Cybertruck — currently one shared list)
- [ ] Cybertruck-specific items not yet carved out (stainless panel gouges, frunk water intrusion, glue-bond checks)

## Inspection app features

- [x] Wire up **Export PDF** button — jsPDF + autoTable, lazy-loaded on click, per-category tables with flagged rows highlighted, timestamped filename
- [ ] Photo capture per inspection item (camera icon already in asset set)
- [x] Notes field per flagged item — inline textarea below flagged rows, persisted, rendered as sub-row in PDF (only when non-empty)
- [x] Offline support / local persistence (localStorage, auto-save on every state change, resume banner + reset)
- [x] VIN entry — optional, inline-editable in TopBar, prompts on export if empty, normalized + persisted
- [x] Step indicator: dropped "STEP 1 OF 2" (one-screen flow, no false step promise)
- [ ] Keyboard shortcuts (P/F/S for pass/flag/skip, J/K to move between items)
- [x] Filter within a category — All / Unchecked / Flagged chips in category header (skipped free-text search as low-value)
- [x] Resume-in-progress inspection (banner on ModelPicker shows saved session — resume or discard)

## Marketing site

- [x] Wire nav links (Inspection, How it works, Owners, FAQ) to real pages
- [x] Inspection page — `/inspection`, 6-category breakdown with sample items, cross-links to per-model pages
- [x] How it works page — `/how-it-works`, 3-step workflow + methodology + under-the-hood
- [x] Owners page — `/owners`, source list + maintenance cadence + contribute CTA
- [x] FAQ page — `/faq`, 12 Q&A with accordion + `FAQPage` JSON-LD
- [x] Shared `InfoPage` layout primitive for info pages
- [ ] Replace `feedback@teslachecklistpro.com` with a real mailbox (referenced on Owners page)
- [ ] Sign in / auth flow (both "Sign in" and "Start inspection" currently deep-link to `/app`)
- [x] Mobile breakpoint pass — `useMediaQuery` hook, 768px breakpoint, responsive across Marketing + InspectionApp
- [x] Dual-theme system (standard + cyber) — full token swap + ambient animations (scan, flicker, glitch, flag pulse), `ThemeToggle` in Nav + TopBar, pre-React seed to avoid flash
- [x] Replace fake hero stats strip with source credits (TMC, r/TeslaLounge, Cybertruck Owners, InsideEVs)

## SEO

- [x] Per-route `useSeo` hook — title, description, OG, Twitter, canonical, JSON-LD with cleanup
- [x] `public/robots.txt` + `public/sitemap.xml` (home + 5 model pages + 4 info pages)
- [x] Per-model landing pages with long-tail slugs (`/model-y-delivery-checklist` etc.) — intro, quick facts, top 5 to inspect, common issues, touchscreen features, NHTSA recall callout, source credits. ~800 words each.
- [x] Legacy short slugs (`/model-y`) 301-redirect to long-tail via `<Navigate replace>`
- [x] FAQ page emits `FAQPage` JSON-LD for rich-result eligibility
- [ ] Blog / editorial surface for long-tail topic coverage beyond the 5 model pages
- [ ] Per-page hero image (OG `og:image`) generated or curated — currently no image in meta
- [ ] Submit sitemap to Google Search Console now that domain is live
- [ ] Per-model checklist variations driven from a per-model item set (currently all 5 pages CTA into the same shared checklist)

## Design system coverage

- [ ] Port the `preview/*.html` token cards to an internal `/design-system` route for live reference
- [ ] Empty-state illustration for unseeded categories (currently a plain text message)
- [ ] Toast / notification component (not yet in kit)
- [ ] Modal component (tokens exist: `--shadow-modal`)

## Infra / code quality

- [x] Deploy to Vercel at teslachecklistpro.com, SPA fallback via `vercel.json` catch-all rewrite
- [x] Favicon wired from `public/favicon.svg` (prior link pointed at `/src/assets/...` which only worked in dev)
- [x] GitHub remote set up at `james5101/tesla-checklist-pro` on `master`
- [x] Vercel Analytics — `@vercel/analytics` + `<Analytics />` in `BrowserRouter`; enable in dashboard to start collecting
- [ ] Local-host Geist fonts instead of Google CDN (brand README flags licensing)
- [x] Shared layout primitive for info pages (`InfoPage` + `Section`); home/model-landing still repeat inline container styles
- [ ] Lint setup (ESLint + Prettier)
- [ ] Unit tests for inspection state (pass/flag/skip toggle, status-toggling-off)
- [ ] Playwright smoke test: home → pick Model 3 → flag EXT_004 → verify flagged count

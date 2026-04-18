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

- [ ] Wire nav links (Inspection, How it works, Owners, FAQ) to real sections / pages
- [ ] Owners page
- [ ] FAQ page
- [ ] Sign in / auth flow (both "Sign in" and "Start inspection" currently deep-link to `/app`)
- [x] Mobile breakpoint pass — `useMediaQuery` hook, 768px breakpoint, responsive across Marketing + InspectionApp

## Design system coverage

- [ ] Port the `preview/*.html` token cards to an internal `/design-system` route for live reference
- [ ] Empty-state illustration for unseeded categories (currently a plain text message)
- [ ] Toast / notification component (not yet in kit)
- [ ] Modal component (tokens exist: `--shadow-modal`)

## Infra / code quality

- [ ] Local-host Geist fonts instead of Google CDN (brand README flags licensing)
- [ ] Extract shared layout primitives (Container, Section, Stack) — right now inline styles repeat `maxWidth: 1200, padding: '0 40px'`
- [ ] Lint setup (ESLint + Prettier)
- [ ] Unit tests for inspection state (pass/flag/skip toggle, status-toggling-off)
- [ ] Playwright smoke test: home → pick Model 3 → flag EXT_004 → verify flagged count

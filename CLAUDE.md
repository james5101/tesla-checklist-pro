# TeslaChecklistPro — UI

Tesla delivery-day inspection web app. Two surfaces: a marketing landing page and an inspection app.

## Stack

- Vite + React 18 + TypeScript
- react-router-dom for `/` (marketing) and `/app` (inspection)
- No CSS framework — design tokens live as CSS variables in `src/styles/tokens.css`, component styling is inline `style={{…}}` (matches the design prototype verbatim)

## Layout

- `src/pages/Marketing.tsx` — Nav, Hero, FeatureGrid, HowItWorks, Footer
- `src/pages/InspectionApp.tsx` — TopBar, ModelPicker, SidebarNav, InspectionView
- `src/components/Icon.tsx` — shared 24×24 / 1.5px-stroke SVG wrapper (Lucide-style)
- `src/styles/tokens.css` — colors, type, spacing, radii, motion (copied from design system)
- `src/assets/` — logos, checklist pattern, icon SVGs
- `_design/` — original design-system handoff bundle (read-only reference; not imported by app)

## Design system rules

Enforce these in every change:

- Surfaces: `--bg-0` → `--bg-3` (3-tier dark). No gradients on backgrounds — only on the logo mark.
- Accent: Voltage Red `#FF2D2D`. Use sparingly — one accent per screen region.
- Type: Geist sans + Geist Mono. No serifs. No emoji.
- Radii: `2px` max (`--radius-sm`). Use 1px hairlines (`--line`), not shadows, for separation.
- Motion: `120–240ms`, `cubic-bezier(0.2, 0, 0, 1)`, never bouncy.
- Voice: technical, direct, calm. Sentence case. "You" for reader. Numerals always (e.g. "147", not "one hundred and forty-seven" — except in display headlines).

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — typecheck + production build
- `npm run preview` — serve the production build

## Known gaps

See `TODO.md`. Most notable: only the Exterior category has seeded items (8 of 147); other six categories are empty states. Export PDF and photo capture are cosmetic.

## Windows + npm note

`package.json` pins `@rollup/rollup-win32-x64-msvc` as an optional dep so `npm install` under Git Bash (which reports `linux` as the npm `os`) still resolves the Windows native binary. If you move to WSL or Linux, that line can be dropped.

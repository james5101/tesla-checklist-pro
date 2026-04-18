# TeslaChecklistPro

Free 147-point delivery inspection for new Teslas. Mobile-first web app, works offline, exports a PDF to hand to your delivery advisor.

**Live:** [teslachecklistpro.com](https://teslachecklistpro.com)

Covers Model S, Model 3, Model X, Model Y, and Cybertruck. Sourced from owner communities (TeslaMotorsClub, r/TeslaLounge, Cybertruck Owners Club, InsideEVs). No affiliation with Tesla, Inc.

## Stack

Vite + React 18 + TypeScript + react-router-dom. Design tokens as CSS variables; inline-style components. Dual theme (standard + cyber). No backend — state lives in `localStorage`.

## Scripts

```
npm install
npm run dev        # Vite dev server
npm run build      # typecheck + production build
npm run preview    # serve the production build
```

## Project notes

See [CLAUDE.md](CLAUDE.md) for architecture and design-system rules, and [TODO.md](TODO.md) for known gaps and the roadmap.

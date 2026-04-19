# TeslaChecklistPro — Design System

Brand & design system for **TeslaChecklistPro**, a Tesla delivery-day inspection web app. Dark, minimalist, cutting-edge startup aesthetic.

## Index
- `colors_and_type.css` — all tokens
- `assets/` — logos, icons, pattern
- `preview/` — design-token cards
- `ui_kits/marketing/` — landing page
- `ui_kits/app/` — checklist app
- `SKILL.md` — portable Claude skill descriptor

## Palette
- Surfaces: `#0A0B0D` → `#22252B` (3-tier dark)
- Ink: `#F5F6F7` → `#3E434C`
- Accent (Voltage Red): `#FF2D2D`

## Theming (dual-theme system)
The system supports multiple themes driven by `data-theme` on `<html>`.

**Available themes:**
- `standard` — default. Dark, clinical, Tesla-adjacent. Voltage red accent.
- `cyber` — "Neon Ops". Deep indigo/violet surfaces, neon cyan primary (`#00F0FF`), magenta secondary (`#FF2EC8`), Chakra Petch display type, scanline overlay, grid background, clipped-corner buttons with neon glow.

**How it works:** every token is declared per-theme in `colors_and_type.css` under `html[data-theme="..."]`. Switching the attribute re-skins every component instantly — no component changes required.

**Using the toggle:** `<ThemeToggle />` from `ui_kits/shared/theme-toggle.jsx`. Persists selection to `localStorage['tcp-theme']`. Lives in the marketing nav and the app top bar.

**Adding a new theme:** copy the `html[data-theme="cyber"]` block in `colors_and_type.css`, rename, override tokens. Add to the toggle's cycle.

## Type
`Geist` sans + `Geist Mono`. No serifs. No emoji.

## Voice
Technical, direct, calm. Sentence case. "You" for reader. Numerals always.

## Visual rules
- 2px radii max. 1px hairlines, not shadows.
- Motion: 120–240ms, `cubic-bezier(0.2, 0, 0, 1)`, never bouncy.
- No gradients on backgrounds — only on the logo mark.

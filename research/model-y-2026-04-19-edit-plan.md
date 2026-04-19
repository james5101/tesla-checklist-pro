# Edit plan — model-y-2026-04-19.md

Source brief: `research/model-y-2026-04-19.md`
Target file: `src/data/checklist.ts`
Current total (read from CATEGORIES at plan time): 147
Proposed total after plan: 151

## Summary

Translates the 2026-04-19 Model Y (Juniper-leaning) brief into 4 new items, 7 expansions, and 1 reword. Touches two categories for new items (`exterior` +3, `interior` +1) and seven items across `exterior`, `wheels`, `interior`, `software`, and `docs` for in-place edits. Headline copy in six `src/pages/*.tsx` files references the old total of 147 and must be updated to 151. Confidence note: the brief's Reddit (r/TeslaLounge) cross-check was blocked on this run, so every citation is TMC-only. The evidence bar (two+ independent TMC threads per item) is still met, but the ambient-strip, phone-key, and TCU items would be stronger with a Reddit corroboration — worth flagging in review.

## New items

### exterior (EXT_)
Current highest ID in this category: EXT_023
Count before: 23 → after: 26

- **EXT_024**
  - title: `Rear light bar trim alignment`
  - spec: `Flush across full width · no step at either quarter panel · no wavy gap to body`
  - Brief ref: "trim around the new full-width light bar sits proud or uneven"
  - Commentary: Juniper-specific (2025+ Y rear light bar). Kept in shared list per rulebook; model affinity noted only here.

- **EXT_025**
  - title: `Liftgate bump stop rattle`
  - spec: `Close liftgate firmly · listen for rattle or knock from lower plug or threaded stop`
  - Brief ref: "Juniper tailgate rattle traced to a loose lower rubber plug/stop"
  - Commentary: Pairs with the existing flush-fit check now broadened into EXT_010. Catchable on delivery day with a firm close.

- **EXT_026**
  - title: `Rear hatch seam sealant coverage`
  - spec: `Inspect seams behind tail lights for skipped factory seam sealant · no bare metal visible in channel`
  - Brief ref: "missing factory seam sealant behind tailgate lamps is the common culprit"
  - Commentary: Pre-Juniper origin but still reported on recent Ys. Visual-only check, no tools.

### interior (INT_)
Current highest ID in this category: INT_032
Count before: 32 → after: 33

- **INT_033**
  - title: `Ambient light strip dash-to-door continuity`
  - spec: `Strip runs continuous from dash to door on both sides · no vertical step at the meeting point`
  - Brief ref: "where the dash accent light meets the door accent light, the two strips do not line up"
  - Commentary: Juniper-specific (new ambient dash strip). No existing item covers the feature.

## Expansion items

- **EXT_002** — locate by current title `Frunk latch operation`
  - Current title: `Frunk latch operation`
  - Proposed title: `Frunk latch and flush fit`
  - Current spec: `Opens smoothly from app and manual release`
  - Proposed spec: `Opens smoothly from app and manual release · lid sits flush to fenders both sides · threaded bump stops tuned`
  - Brief ref: "frunk sits proud or uneven because the threaded rubber bump stops were not tuned at the factory"
  - Commentary: Broadens from latch-only to latch plus flush-fit and bump-stop adjustment cue.

- **EXT_010** — locate by current title `Trunk/liftgate alignment`
  - Current title: `Trunk/liftgate alignment`
  - Proposed title: `Trunk/liftgate alignment and flush to quarters`
  - Current spec: `Gap: 4.0–5.0 mm · flush within 0.5 mm at quarter panels`
  - Proposed spec: `Gap: 4.0–5.0 mm · flush within 0.5 mm at quarter panels · panel not sitting inboard of body line`
  - Brief ref: "hatch panel does not sit flush with the body … reported on multiple Juniper deliveries"
  - Commentary: Existing flush tolerance stays; adds explicit check for inboard/outboard step the brief calls out.

- **EXT_019** — locate by current title `Headlight alignment and pattern`
  - Current title: `Headlight alignment and pattern`
  - Proposed title: `Headlight and front light bar alignment, aim, and clarity`
  - Current spec: `Matrix beam even · no fogging · housing gap within 1 mm`
  - Proposed spec: `Matrix beam even · no fogging or internal condensation in housings or front light bar after a wash · vertical aim at or below headlight center on a wall at 25 ft · housing gap within 1 mm`
  - Brief ref: "water droplets persist inside the new Juniper front light bar after car washes"; "headlights arrive un-aimed … above headlight center height"
  - Commentary: Folds two brief items into one existing check — front light bar condensation and factory headlight aim. Keeps qualitative aim guidance ("at or below center"); the brief did not supply a degree tolerance, so none is invented.

- **WHL_005** — locate by current title `Aero cover fitment`
  - Current title: `Aero cover fitment`
  - Proposed title: `Aero cover fitment at rest and at speed`
  - Current spec: `All clips engaged · no rattle · centered on hub`
  - Proposed spec: `All clips engaged · centered on hub · no rattle at rest · no clicking from clips at 5–15 mph with window down`
  - Brief ref: "Juniper wheel cover clips make a clicking sound at low speed, window down"
  - Commentary: Adds the low-speed roll test Tesla has itself acknowledged.

- **INT_023** — locate by current title `Door card fit and handle pull test`
  - Current title: `Door card fit and handle pull test`
  - Proposed title: `Door card and B-pillar trim fit`
  - Current spec: `No loose clips · handle firm · no creak under 10 lb pull`
  - Proposed spec: `Press firmly on all four door cards and both B-pillar covers · no clip pops loose · handle firm · no creak under 10 lb pull`
  - Brief ref: "pillar and door card trim loosens because clips were not fully seated at assembly"
  - Commentary: Adds B-pillar covers to the existing door-card press-test. Same check method, wider surface area.

- **INT_031** — locate by current title `Rear window sunshade or defrost`
  - Current title: `Rear window sunshade or defrost`
  - Proposed title: `Rear window defrost function`
  - Current spec: `Defrost grid intact · clears condensation within 3 minutes`
  - Proposed spec: `Fire defrost from climate menu · grid intact · glass warms to touch and clears condensation within 3 minutes`
  - Brief ref: "new Model Ys have left the factory with rear defrost disabled and must be enabled via service mode"
  - Commentary: Existing item assumed defrost was active. New spec forces an active fire-and-verify so a software-disabled grid is caught on the lot. Title narrows from "sunshade or defrost" to just defrost — sunshade is not present on Y and the "or" was doing no work. Flagging this narrowing for review.

- **SFT_004** — locate by current title `Wi-Fi and LTE connectivity`
  - Current title: `Wi-Fi and LTE connectivity`
  - Proposed title: `Wi-Fi and LTE connectivity and mid-drive stability`
  - Current spec: `Connects to 5 GHz · LTE bars steady · Premium Connectivity active`
  - Proposed spec: `Connects to 5 GHz · LTE bars steady · Premium Connectivity active · stays connected across a 15-minute drive with no mid-drive drop`
  - Brief ref: "Juniper premium-data drops every ~15 min while driving; root cause is the WiFi module causing the TCU to reboot"
  - Commentary: Extends a point-in-time check into a short-drive stability check. 15 min matches the brief-cited drop cadence.

- **SFT_007** — locate by current title `Phone key Bluetooth unlock`
  - Current title: `Phone key Bluetooth unlock`
  - Proposed title: `Phone key Bluetooth unlock and pairing persistence`
  - Current spec: `Unlocks at 6 ft · locks at walkaway · no drops on restart`
  - Proposed spec: `Unlocks at 6 ft · locks at walkaway · no drops on restart · stays paired after 20 minutes parked in home Wi-Fi range`
  - Brief ref: "phone key drops after ~20 min when parked at home"
  - Commentary: Juniper-reported; catchable post-delivery rather than at handover, but worth logging as a 24-hour follow-up.

## Reword items

- **DOC_003** — locate by current title `Monroney window sticker`
  - Current title: `Monroney window sticker`
  - Proposed title: `Monroney window sticker line-by-line match`
  - Current spec: `Matches configuration, options, and MSRP on order agreement`
  - Proposed spec: `Paint, wheels, interior, motor count, FSD and Enhanced Autopilot lines all match order agreement · MSRP matches pre-delivery quote`
  - Brief ref: "wrong paint, wrong trim, or FSD missing on the label are all reported"
  - Commentary: Same scope, sharper spec. Calls out the specific fields most commonly wrong per the two TMC threads.

## CATEGORIES count updates

```ts
// before
{ id: 'exterior', label: 'Exterior', count: 23 },
// after
{ id: 'exterior', label: 'Exterior', count: 26 },
```

```ts
// before
{ id: 'interior', label: 'Interior', count: 32 },
// after
{ id: 'interior', label: 'Interior', count: 33 },
```

## Headline copy updates

Old total: 147. New total: 151.

- `src/pages/Marketing.tsx:127` — "A 147-point delivery inspection, built from 4 years of Tesla forum threads," → "A 151-point delivery inspection, built from 4 years of Tesla forum threads,"
- `src/pages/Marketing.tsx:256` — "Six systems. 147 checks." → "Six systems. 151 checks."
- `src/pages/Marketing.tsx:472` — "'A 147-point inspection to perform when taking delivery of a new Tesla, sourced from owner community forums.'" → "'A 151-point inspection to perform when taking delivery of a new Tesla, sourced from owner community forums.'"
- `src/pages/Marketing.tsx:498` — "title: 'TeslaChecklistPro — 147-point Tesla delivery inspection checklist'" → "title: 'TeslaChecklistPro — 151-point Tesla delivery inspection checklist'"
- `src/pages/Marketing.tsx:500` — "'Free delivery-day inspection checklist for every Tesla: Model S, 3, X, Y, and Cybertruck. 147 points sourced from owner forums. Export a PDF for your advisor. No signup.'" → "… 151 points sourced from owner forums. …"
- `src/pages/HowItWorks.tsx:9` — "Choose your Tesla from the model picker. The app loads the 147-point list …" → "… 151-point list …"
- `src/pages/HowItWorks.tsx:29` — "'The TeslaChecklistPro workflow: pick your model, walk a 147-point inspection across six categories …'" → "… 151-point inspection …"
- `src/pages/HowItWorks.tsx:36` — "'A three-step workflow for walking a 147-point inspection during Tesla delivery …'" → "… 151-point inspection …"
- `src/pages/HowItWorks.tsx:87` — `<Section eyebrow="METHODOLOGY" title="Where the 147 items came from.">` → `<Section eyebrow="METHODOLOGY" title="Where the 151 items came from.">`
- `src/pages/Owners.tsx:44` — "… here the 147-point list came from …" → "… where the 151-point list came from …"
- `src/pages/Owners.tsx:58` — "… curated into 147 checks, free for anyone taking delivery." → "… curated into 151 checks, free for anyone taking delivery."
- `src/pages/Owners.tsx:69` — "The 147-point walk closes that gap." → "The 151-point walk closes that gap."
- `src/pages/Inspection.tsx:90` — "title: 'Tesla delivery inspection — what the 147-point walk covers'" → "… 151-point walk covers"
- `src/pages/Inspection.tsx:92` — "… 147 total points. Free, offline-capable." → "… 151 total points. …"
- `src/pages/Inspection.tsx:219` — "The 147-point core list applies to all five models …" → "The 151-point core list applies to all five models …"
- `src/pages/Faq.tsx:17` — "Yes. The 147-point checklist, PDF export, notes …" → "Yes. The 151-point checklist, PDF export, notes …"
- `src/pages/Faq.tsx:41` — "… The 147-point core list covers items common to all five. …" → "… The 151-point core list …"
- `src/pages/Faq.tsx:52` — `q: 'Why 147 points?'` → `q: 'Why 151 points?'` **FLAG for human rewrite.** The answer body underneath this question (not shown here) almost certainly leans on the 147 figure as the narrative hook. A straight substitution may leave the answer text out of sync — reviewer should read the full Q/A pair and rewrite together.
- `src/pages/Faq.tsx:136` — "Everything you'd want to know before you trust a 147-point inspection with the most expensive thing you'll buy this year." → "… 151-point inspection …"
- `src/pages/ModelLanding.tsx:37` — "This 147-point checklist covers both trims …" (Model S copy) → "This 151-point checklist covers both trims …"
- `src/pages/ModelLanding.tsx:141` — "… This 147-point checklist covers everything the refresh introduced …" (Model 3 copy) → "… This 151-point checklist …"
- `src/pages/ModelLanding.tsx:461` — "This checklist adds Cybertruck-specific items on top of the standard 147 points." → "… on top of the standard 151 points." **FLAG for human review.** Rhythm is fine, but Cybertruck-specific items are not actually wired yet (per CLAUDE.md known gaps), so the "on top of the standard 151" phrasing remains aspirational. Reviewer may want to soften to "on top of the standard list" to avoid the overclaim.
- `src/pages/ModelLanding.tsx:582` — `` const title = `${model.name} delivery checklist — 147 points to inspect before you sign`; `` → `` … 151 points to inspect before you sign`; ``
- `src/pages/ModelLanding.tsx:583` — `` const description = `${model.name} delivery inspection checklist: 147 points sourced from owner forums. …`; `` → `` … 151 points sourced from owner forums. …`; ``
- `src/pages/ModelLanding.tsx:815` — "{model.name}-specific issues the 147-point walk catches." → "… the 151-point walk catches."

No "nearly 150" / "about 150" style round-number claims were found, so 151 substitutes cleanly in every sentence except the two flagged above.

## Open questions

- **INT_031 title narrowing.** Existing title is `Rear window sunshade or defrost`. Model Y has no rear sunshade, so the proposed reword drops "sunshade or". Confirm no other model under the shared list has a rear sunshade that would need its own item before accepting the narrowing.
- **EXT_019 folded two items.** The brief listed front light bar condensation and factory headlight aim as separate lines; both were folded into EXT_019 because they share the same housing check. If reviewer prefers two discrete items (e.g. one for aim, one for clarity), split EXT_019 into an expansion plus a new `EXT_027` for headlight aim and bump counts accordingly.
- **No Reddit corroboration.** All brief citations are TMC-only (r/TeslaLounge crawler was blocked). Ambient-strip (INT_033), phone-key persistence (SFT_007), and TCU stability (SFT_004) would benefit most from a Reddit re-check before these three changes ship.
- **No invented tolerances.** The brief did not supply numeric tolerances for headlight vertical aim, ambient-strip step, or hatch flush-to-quarter. Specs were written qualitatively per the rulebook. If the reviewer has an internal measurement standard, specs can be tightened on apply.
- **Model affinity not encoded.** Juniper-specific items (rear light bar trim, liftgate bump-stop rattle, ambient strip continuity, aero cover click, phone-key persistence, TCU stability, front light bar condensation) all land in the shared list per rulebook. When per-model variants are wired per `TODO.md`, these are the strongest candidates for Y-only gating.

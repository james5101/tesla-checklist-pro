/**
 * Tesla delivery-day accessories — curated list.
 *
 * Every item here is backed by at least two independent owner-forum threads.
 * See docs/accessories-research-brief.md for the full research pass + citations
 * that didn't make the cut.
 *
 * Shipping dark (not in sitemap, not linked from nav) until Amazon Associates
 * is approved. When ready to monetize, populate `affiliate` on each item and
 * wire the sitemap/nav entries.
 *
 * Confidence tiers (HIGH / MEDIUM) are internal — they don't render on the
 * page, but they drive prioritization on future content refreshes.
 */

export type AccessoryCategory = 'charging' | 'exterior' | 'interior' | 'organization' | 'safety';

export type ModelId = 'model-s' | 'model-3' | 'model-x' | 'model-y' | 'cybertruck';

export type SourceTag = 'TMC' | 'Reddit' | 'CTOC' | 'TOO';

export interface Citation {
  title: string;
  url: string;
  source: SourceTag;
}

export interface AccessoryAddon {
  name: string;
  blurb: string;
  brands: string[];
  priceRange: string;
  sources: Citation[];
}

export interface Accessory {
  id: string;
  name: string;
  category: AccessoryCategory;
  /** Which Tesla models this applies to. 'all' = universal. */
  models: 'all' | ModelId[];
  /** Brands owners actually name in forum threads. Provider-agnostic. */
  brands: string[];
  /** Rough price range, e.g. "$150–$280". */
  priceRange: string;
  /** Production-ready prose — 2–3 sentences, owner-voice. */
  blurb: string;
  /** Honest counterpoint — "skip this if…" */
  skipIf: string;
  /** 2–4 forum citations. Real URLs only. */
  sources: Citation[];
  /** Optional call-out for model- or generation-specific fitment gotchas. */
  modelNote?: string;
  /** Optional upsell that only applies in a narrow case (e.g. J1772 lock). */
  addon?: AccessoryAddon;
  /** Internal research confidence. Not rendered. */
  confidence: 'HIGH' | 'MEDIUM';
  /** Affiliate slot — empty until Amazon Associates is approved. */
  affiliate?: { provider: string; url: string };
}

export interface SkipItem {
  id: string;
  name: string;
  /** Specific named brands this warning applies to, where the evidence supports naming them.
   *  Empty array when the problem is the category itself, not specific brands. */
  brandsNamed: string[];
  /** Why the category is heavily marketed. */
  whyPushed: string;
  /** Plain-prose summary of owner sentiment. */
  whyOwnersSkip: string;
  sources: Citation[];
}

export interface ExcludedItem {
  name: string;
  reason: string;
}

// ──────────────────────────────────────────────────────────────
// RECOMMENDED (8 items)
// ──────────────────────────────────────────────────────────────

export const ACCESSORIES: Accessory[] = [
  {
    id: 'floor-mats',
    name: 'All-weather floor mats',
    category: 'interior',
    models: 'all',
    brands: ['3D MAXpider', 'TuxMat', 'Tesla OEM All-Weather', 'WeatherTech'],
    priceRange: '$150–$280 / set',
    blurb:
      "Tesla's factory carpet mats stain on the first wet commute and don't come clean. Owners describe an upgraded set as the single highest-ROI day-one purchase. TuxMat rides higher up the side trim than 3D MAXpider, which matters if you carry snow or mud — though MAXpider is the cheaper pick for mild-climate drivers.",
    skipIf:
      "You live somewhere genuinely dry and never carry passengers in muddy boots. The factory carpets are fine for a year of clean conditions.",
    sources: [
      {
        title: 'TuxMat or 3D MAXpider/LCDS Floormats for Model Y?',
        url: 'https://teslamotorsclub.com/tmc/threads/tuxmat-or-3d-maxpider-lcds-floormats-for-model-y.319220/',
        source: 'TMC',
      },
      {
        title: 'The Floor Mat Decision — If It Helps Others',
        url: 'https://teslamotorsclub.com/tmc/threads/the-floor-mat-decision-if-it-helps-others.293644/',
        source: 'TMC',
      },
      {
        title: 'Are 3D Maxpider Mats still the best choice?',
        url: 'https://teslamotorsclub.com/tmc/threads/are-3d-maxpider-mats-still-the-best-choice.314973/',
        source: 'TMC',
      },
      {
        title: 'Tesla OEM All Weather Mats vs WeatherTech Mats for 2023 MY',
        url: 'https://teslamotorsclub.com/tmc/threads/tesla-oem-all-weather-mats-vs-weathertech-mats-for-2023-my.290825/',
        source: 'TMC',
      },
    ],
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tesla+all+weather+floor+mats&tag=teslachecklis-20' },
    confidence: 'HIGH',
  },
  {
    id: 'mud-flaps',
    name: 'Mud flaps (front pair, at minimum)',
    category: 'exterior',
    models: 'all',
    brands: ['Tesla OEM', 'RPM Tesla', 'BASENOR', 'Yeslak'],
    priceRange: '$30–$90',
    blurb:
      "Tesla paint is famously thin, and the front tires kick rocks straight into the lower rear doors and quarter panels. Owners post chipping photos at 10,000–15,000 km without flaps. Front flaps are the high-value pair; rears mostly protect the driver behind you.",
    skipIf:
      "You only drive swept urban roads and never touch fresh-chip seal or gravel — though at $30 a front pair is cheap insurance against $900 bumper paintwork.",
    sources: [
      {
        title: 'Are rear mud flaps really necessary?',
        url: 'https://teslamotorsclub.com/tmc/threads/are-rear-mud-flaps-really-necessary.230242/',
        source: 'TMC',
      },
      {
        title: 'Stone chip protection: mudflaps vs Tesla paint protection film?',
        url: 'https://teslamotorsclub.com/tmc/threads/stone-chip-protection-mudflaps-vs-tesla-paint-protection-film.299677/',
        source: 'TMC',
      },
      {
        title: 'Mud Flaps? Rear Door Chipping Bad',
        url: 'https://teslamotorsclub.com/tmc/threads/mud-flaps-rear-door-chipping-bad.190697/',
        source: 'TMC',
      },
      {
        title: 'Pics: Tesla OEM Cybertruck Mud Flaps installed photos & review',
        url: 'https://www.cybertruckownersclub.com/forum/threads/pics-tesla-oem-cybertruck-mud-flaps-installed-photos-review.19006/',
        source: 'CTOC',
      },
    ],
    modelNote: 'Value ranking across the lineup: Cybertruck > Model Y > Model 3 > Model S > Model X.',
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tesla+mud+flaps&tag=teslachecklis-20' },
    confidence: 'HIGH',
  },
  {
    id: 'screen-protector',
    name: 'Tempered-glass screen protector',
    category: 'interior',
    models: ['model-s', 'model-3', 'model-x', 'model-y'],
    brands: ['Spigen GlasTR EZ FIT', 'Abstract Ocean', 'TESBROS', 'Tesery'],
    priceRange: '$25–$60',
    blurb:
      "Fingernail scratches on the centre display are common and not warrantied. Matte (anti-glare) is the more-recommended finish in owner threads — the glare reduction outweighs the small loss of sharpness, and owners report they stop wiping fingerprints constantly. Owners with multi-year matte installs report no degradation.",
    skipIf:
      "You have a 2024+ Highland Model 3 or Juniper Model Y with the factory anti-reflective coating. Owners on those cars are split — several threads warn that aftermarket protectors mute the factory AR layer. Wait for Highland/Juniper-specific reviews before buying.",
    sources: [
      {
        title: 'Screen protector — Matte or Gloss?',
        url: 'https://teslamotorsclub.com/tmc/threads/screen-protector-matte-or-gloss.293513/',
        source: 'TMC',
      },
      {
        title: 'Which Screen Protector? Do I need one?',
        url: 'https://teslamotorsclub.com/tmc/threads/which-screen-protector-do-i-need-one.297319/',
        source: 'TMC',
      },
      {
        title: 'Spigen Matte screen protector — looking for feedback',
        url: 'https://teslamotorsclub.com/tmc/threads/spigen-matte-screen-protector-looking-for-feedback.272876/',
        source: 'TMC',
      },
    ],
    modelNote:
      'Cybertruck: buy Cybertruck-specific only. Owners report mixed fitment on generic listings that claim CT support.',
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tesla+screen+protector+tempered+glass&tag=teslachecklis-20' },
    confidence: 'MEDIUM',
  },
  {
    id: 'console-organizer',
    name: 'Centre console organizer trays',
    category: 'organization',
    models: ['model-s', 'model-3', 'model-x', 'model-y'],
    brands: ['BASENOR', 'TESBROS', 'Spigen', 'T Sportline', 'JOWUA', 'TSLDRV'],
    priceRange: '$25–$60',
    blurb:
      "The bare console well is one large cavern that swallows keys, AirPods, and receipts. A tiered set — front tray, armrest box insert, cup-holder mat — is the single most-mentioned organization purchase across every model thread. Owners describe it as an accessory they actually use every day, not just the first week.",
    skipIf:
      "You keep the console empty as a carry-bag drop zone. The tray set reduces total volume.",
    sources: [
      {
        title: "Tesla Owners: What's Your Most Useful Accessory?",
        url: 'https://teslamotorsclub.com/tmc/threads/tesla-owners-what%E2%80%99s-your-most-useful-accessory.343719/',
        source: 'TMC',
      },
      {
        title: 'Brand new Y! Must have accessories?',
        url: 'https://teslamotorsclub.com/tmc/threads/brand-new-y-must-have-accessories.233690/',
        source: 'TMC',
      },
      {
        title: 'Just got a refreshed Model X, what are some must-have accessories nowadays?',
        url: 'https://teslamotorsclub.com/tmc/threads/just-got-a-refreshed-model-x-what-are-some-must-have-accessories-nowadays.311694/',
        source: 'TMC',
      },
    ],
    modelNote:
      "The Highland (Model 3, 2024+) and Juniper (Model Y, 2025+) consoles changed shape. Buy a tray sold for your specific generation — 'fits all' claims should be treated with suspicion.",
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tesla+center+console+organizer&tag=teslachecklis-20' },
    confidence: 'HIGH',
  },
  {
    id: 'sentry-drive',
    name: 'High-endurance USB or SSD for Sentry Mode',
    category: 'safety',
    models: 'all',
    brands: ['Samsung PRO Endurance microSD', 'SanDisk High Endurance', 'Samsung T7 Shield SSD'],
    priceRange: '$30–$120 (256 GB – 1 TB)',
    blurb:
      "Sentry Mode and Dashcam record continuously, and standard USB sticks fail within months because they aren't rated for sustained writes. Threads consistently steer new owners toward a high-endurance microSD (Samsung PRO Endurance is the most-named) or a Samsung T7 Shield SSD. Day-one is cheaper than discovering a corrupt drive after an incident.",
    skipIf:
      "Nothing — if Sentry Mode is running, you need a write-rated drive. Tesla doesn't include one.",
    sources: [
      {
        title: 'Dashcam/Sentry Mode USB Recommendations',
        url: 'https://teslamotorsclub.com/tmc/threads/dashcam-sentry-mode-usb-recommendations.202443/',
        source: 'TMC',
      },
      {
        title: 'USB Drive For Recording Sentry Mode, etc.',
        url: 'https://teslamotorsclub.com/tmc/threads/usb-drive-for-recording-sentry-mode-etc.225146/',
        source: 'TMC',
      },
      {
        title: 'Best SSD/USB Thumbdrive for Tesla Dashcam/Sentry and Music',
        url: 'https://www.teslaownersonline.com/threads/best-ssd-usb-thumbdrive-for-tesla-dashcam-sentry-and-music.36203/',
        source: 'TOO',
      },
    ],
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=high+endurance+usb+drive+sentry+mode+dashcam&tag=teslachecklis-20' },
    confidence: 'HIGH',
  },
  {
    id: 'tire-kit',
    name: 'Tire plug kit + 12V compressor',
    category: 'safety',
    models: 'all',
    brands: ['Slime compressor (50063, 40051)', 'Stop & Go pocket plugger', 'ARB', 'Tesla OEM kit'],
    priceRange: '$40–$120',
    blurb:
      "Teslas don't carry a spare. Owners recommend a real plug kit plus a 12V compressor — and explicitly warn against the green Slime sealant. Sealant can damage TPMS sensors and ruin the foam-lined tires fitted to Model 3, Y, and Cybertruck, often forcing a full tire replacement instead of a $20 plug.",
    skipIf:
      "You live next door to a tire shop and have AAA. Otherwise this is the cheapest peace-of-mind item on the list.",
    sources: [
      {
        title: 'Tire Repair Kit?',
        url: 'https://teslamotorsclub.com/tmc/threads/tire-repair-kit.219590/',
        source: 'TMC',
      },
      {
        title: 'Tesla Tire Repair Kit same as Slime Tire Repair Kit?',
        url: 'https://teslamotorsclub.com/tmc/threads/tesla-tire-repair-kit-same-as-slime-tire-repair-kit.311802/',
        source: 'TMC',
      },
      {
        title: 'Thoughts on carrying a tire patch kit instead of…',
        url: 'https://teslamotorsclub.com/tmc/threads/thoughts-on-carrying-a-tire-patch-kit-instead-of.229720/',
        source: 'TMC',
      },
      {
        title: 'Tire inflation compressor kit question',
        url: 'https://teslamotorsclub.com/tmc/threads/tire-inflation-compressor-kit-question.335736/',
        source: 'TMC',
      },
    ],
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tire+plug+kit+12v+compressor&tag=teslachecklis-20' },
    confidence: 'HIGH',
  },
  {
    id: 'mobile-connector',
    name: 'Tesla Mobile Connector (240V)',
    category: 'charging',
    models: 'all',
    brands: ['Tesla OEM Gen 2 Mobile Connector', 'Lectron portable Level 2', 'Splitvolt'],
    priceRange: '$230–$330',
    blurb:
      "New Teslas no longer ship with a Mobile Connector in the box — Tesla removed it as standard in 2022. Owners universally recommend buying one even if you also install a Wall Connector, for visiting family with a NEMA 14-50 dryer outlet, hotel charging, and emergencies. Most owners keep it in the frunk permanently.",
    skipIf:
      "You've hardwired a Wall Connector and never travel beyond Supercharger range. Even then, most owners keep one as backup.",
    sources: [
      {
        title: 'Mobile Charger: Do I need it?',
        url: 'https://teslamotorsclub.com/tmc/threads/mobile-charger-do-i-need-it.295808/',
        source: 'TMC',
      },
      {
        title: 'Mobile Connector vs. Wall Charger — Renting a House',
        url: 'https://teslamotorsclub.com/tmc/threads/mobile-connector-vs-wall-charger-renting-a-house.315137/',
        source: 'TMC',
      },
      {
        title: 'Do you keep a mobile charger in your car?',
        url: 'https://www.teslaownersonline.com/threads/do-you-keep-a-mobile-charger-in-your-car.21489/',
        source: 'TOO',
      },
      {
        title: 'Is a backup mobile connector necessary?',
        url: 'https://teslamotorsclub.com/tmc/threads/is-a-backup-mobile-connector-necessary.270250/',
        source: 'TMC',
      },
    ],
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tesla+mobile+connector+240v+NEMA+14-50&tag=teslachecklis-20' },
    modelNote:
      "Cybertruck: the Mobile Connector at 32A is slow for the truck's larger pack. Owners call a hardwired Wall Connector at 48A essential there — the mobile unit is a backup, not a primary.",
    addon: {
      name: 'J1772 adapter lock (optional add-on)',
      blurb:
        "If you'll ever charge at non-Tesla public stations, add a small lock. The car-side adapter locks to the car — but the charger-side handle has a release latch anyone can press, leaving with your $50–$100 adapter. Forum threads include first-hand theft posts.",
      brands: ['Lectron', 'CapturePro (TeslaChargerLock.com)'],
      priceRange: '$15–$35',
      sources: [
        {
          title: 'Adapter lock',
          url: 'https://teslamotorsclub.com/tmc/threads/adapter-lock.306473/',
          source: 'TMC',
        },
        {
          title: 'Leave J1772 adapter attached and locked, ready to charge',
          url: 'https://teslamotorsclub.com/tmc/threads/leave-j1772-adapter-attached-and-locked-ready-to-charge.179780/',
          source: 'TMC',
        },
        {
          title: 'J1772 to Tesla Adapter + J1772 CapturePro Unplug Lock',
          url: 'https://teslamotorsclub.com/tmc/threads/j1772-to-tesla-adapter-j1772-capturepro-unplug-lock.235189/',
          source: 'TMC',
        },
      ],
    },
    confidence: 'HIGH',
  },
  {
    id: 'sunshade',
    name: 'Windshield sunshade (custom-fit)',
    category: 'interior',
    models: 'all',
    brands: ['HeatShield', 'Covercraft UVS100', 'EcoNour'],
    priceRange: '$40–$120',
    blurb:
      "On hot days the dash, steering wheel, and gear stalk reach surface temperatures owners describe as painful to touch. A custom-fit shade keeps surfaces 30–50°F cooler and reduces UV degradation of the dash topper. Owners who tried a $20 generic and an $80 custom-fit overwhelmingly recommend the custom-fit — the cheap one falls down.",
    skipIf: 'You garage the car at home and at work. The dash never sees direct sun.',
    sources: [
      {
        title: 'Do you use a windshield sunshade?',
        url: 'https://teslamotorsclub.com/tmc/threads/do-you-use-a-windshield-sunshade.269648/',
        source: 'TMC',
      },
      {
        title: 'Recommended Model Y sun shade for windshield',
        url: 'https://teslamotorsclub.com/tmc/threads/recommended-model-y-sun-shade-for-windshield.294974/',
        source: 'TMC',
      },
      {
        title: 'Anyone pick up a sunshade for a Juniper?',
        url: 'https://teslamotorsclub.com/tmc/threads/anyone-pick-up-a-sunshade-for-a-juniper.342967/',
        source: 'TMC',
      },
      {
        title: 'Windshield Sun Shade for Cybertruck?',
        url: 'https://www.cybertruckownersclub.com/forum/threads/windshield-sun-shade-for-cybertruck.12314/',
        source: 'CTOC',
      },
    ],
    modelNote: 'Highest ROI on Model S, 3, and Y (large glass roofs amplify cabin heat).',
    affiliate: { provider: 'amazon', url: 'https://www.amazon.com/s?k=tesla+windshield+sunshade+custom+fit&tag=teslachecklis-20' },
    confidence: 'MEDIUM',
  },
];

// ──────────────────────────────────────────────────────────────
// SKIP LIST (5 items) — the differentiator
// ──────────────────────────────────────────────────────────────

export const SKIP_LIST: SkipItem[] = [
  {
    id: 'auto-presenting-doors',
    name: 'Aftermarket auto-presenting / soft-close door handle kits',
    brandsNamed: [],
    whyPushed:
      'Heavy YouTube sponsorship, $400–$700 price points, "luxury feel" marketing language.',
    whyOwnersSkip:
      "Every Tesla software update breaks at least one brand of these. Forum threads document doors that present too early (10 metres away), retract before you reach the trunk, or stop working entirely after FSD updates. Several owners describe the install as regret — and the 12V wiring tap as a battery-drain risk.",
    sources: [
      {
        title: 'New Self Presenting Door Handles',
        url: 'https://teslamotorsclub.com/tmc/threads/new-self-presenting-door-handles.338589/',
        source: 'TMC',
      },
      {
        title: 'Automatic doors (aftermarket) not working after 12.6.3 update',
        url: 'https://teslamotorsclub.com/tmc/threads/automatic-doors-aftermarket-not-working-after-12-6-3-update.340776/',
        source: 'TMC',
      },
      {
        title: 'Auto Presenting Door Handle',
        url: 'https://teslamotorsclub.com/tmc/threads/auto-presenting-door-handle.343410/',
        source: 'TMC',
      },
    ],
  },
  {
    id: 'wireless-charger-replacements',
    name: 'Aftermarket wireless charger replacements (Jeda, TapTes) on post-2021 cars',
    brandsNamed: ['Jeda', 'TapTes'],
    whyPushed:
      'Huge Amazon presence. Vendor blogs push them as upgrades even though modern Teslas already ship with a perfectly good factory wireless pad.',
    whyOwnersSkip:
      "DOA rates are unusually high. Threads describe pads that drain phones faster than they charge, adhesive failures, and creaking trim. Post-2021 cars already have a factory wireless pad — replacing it is a solution to a non-problem.",
    sources: [
      {
        title: "Tesla's vs Jeda Wireless charger",
        url: 'https://teslamotorsclub.com/tmc/threads/teslas-vs-jeda-wireless-charger.167485/',
        source: 'TMC',
      },
      {
        title: "Jeda charging pad for model 3 doesn't work",
        url: 'https://teslamotorsclub.com/tmc/threads/jeda-charging-pad-for-model-3-doesnt-work.270899/',
        source: 'TMC',
      },
      {
        title: 'Wireless phone charger replacement',
        url: 'https://teslamotorsclub.com/tmc/threads/wireless-phone-charger-replacement.270968/',
        source: 'TMC',
      },
    ],
  },
  {
    id: 'ct-noname-accessories',
    name: 'No-name Cybertruck bed caps and tonneau accessories (CyberGear and similar)',
    brandsNamed: ['CyberGear'],
    whyPushed:
      'Aggressive forum advertising, sponsored-post placements, low prices. The accessory market for Cybertruck is new and crowded.',
    whyOwnersSkip:
      "Tesla is currently fixing factory tonneau gaps under warranty — replacing the factory cover with an aftermarket unit forfeits that fix. Several no-name vendors have shipped counterfeit or undersized parts. Wait: the CT accessory market is too young to trust most brands.",
    sources: [
      {
        title: 'Extremely disappointed in CyberGear — Warning thread',
        url: 'https://www.cybertruckownersclub.com/forum/threads/extremely-disappointed-in-cybergear-warning-thread-around-products.54850/',
        source: 'CTOC',
      },
      {
        title: 'What accessories are you buying and tools/straps are you keeping in the bed?',
        url: 'https://www.cybertruckownersclub.com/forum/threads/what-accessories-are-you-buying-and-tools-straps-are-you-keeping-in-the-bed.18416/',
        source: 'CTOC',
      },
      {
        title: 'Tonneau cover gap issue fixed by Service Center under warranty',
        url: 'https://www.cybertruckownersclub.com/forum/threads/tonneau-cover-gap-issue-fixed-by-service-center-under-warranty.30916/',
        source: 'CTOC',
      },
    ],
  },
  {
    id: 'door-sill-ppf',
    name: 'Stick-on door-sill / scuff PPF kits',
    brandsNamed: [],
    whyPushed:
      '$20–$40 Amazon best-sellers. Vendor starter-kit bundles tag these onto every Tesla accessory box.',
    whyOwnersSkip:
      "Textured plastic sills don't hold adhesive. Threads report pieces peeling within weeks. Owners who actually care about sill scuffs are pointed to professional rocker-panel PPF instead — not stick-on strips. The factory sills clean up fine with a damp interior wipe.",
    sources: [
      {
        title: 'Door sill protector — clear is better?',
        url: 'https://teslamotorsclub.com/tmc/threads/door-sill-protector-clear-is-better.142880/',
        source: 'TMC',
      },
      {
        title: '2023 Model Y Door Sill Protectors',
        url: 'https://teslamotorsclub.com/tmc/threads/2023-model-y-door-sill-protectors.299471/',
        source: 'TMC',
      },
      {
        title: 'Protecting Door Sill Plates',
        url: 'https://teslamotorsclub.com/tmc/threads/protecting-door-sill-plates.88109/',
        source: 'TMC',
      },
    ],
  },
  {
    id: 'door-seal-kits',
    name: 'Door-seal "wind noise reduction" kits and pop-on frunk-lip strips',
    brandsNamed: [],
    whyPushed: 'Viral TikTok and YouTube videos, $15–$30 impulse buys.',
    whyOwnersSkip:
      "At best they do nothing measurable. At worst the extra door-seal strips prevent the door from closing properly and tear the factory weatherstripping when you remove them. No thread we found that actually instrumented cabin noise showed a measurable reduction.",
    sources: [
      {
        title: 'Buyer Beware: Door Seal Kit Wind Noise Road Noise Reduction',
        url: 'https://teslamotorsclub.com/tmc/threads/buyer-beware-door-seal-kit-wind-noise-road-noise-reduction.192615/',
        source: 'TMC',
      },
      {
        title: 'What does everyone think of adding extra door seals?',
        url: 'https://forums.tesla.com/discussion/164136/what-does-everyone-think-of-adding-extra-door-seals',
        source: 'TMC',
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// INVESTIGATED BUT EXCLUDED
// ──────────────────────────────────────────────────────────────

export const EXCLUDED: ExcludedItem[] = [
  {
    name: 'Trunk / cargo liner',
    reason:
      "Owner support exists, but the use case overlaps heavily with the all-weather mats above. Held back to keep the list short.",
  },
  {
    name: 'Phone mounts (MagBak, BASENOR adhesive-free, etc.)',
    reason:
      "Owner threads are mixed. The factory wireless pad already holds a phone for charging, and the nav screen is the main display — a mount is niche.",
  },
  {
    name: 'Key card holders and lanyards',
    reason:
      'Nearly universal purchase, but driven by personal preference rather than functional need. No consistent brand consensus.',
  },
  {
    name: 'Paint Protection Film (full-body)',
    reason:
      'Strong value, but priced as a $1,500–$6,500 professional install — not a day-one accessory purchase. Belongs in a separate longer-term-protection piece.',
  },
  {
    name: 'Falcon-wing garage edge protectors (Model X)',
    reason:
      'The recurring recommendation is "pool noodles on the garage rails." Not an accessory we can meaningfully list.',
  },
];

// ──────────────────────────────────────────────────────────────
// COPY BLOCKS
// ──────────────────────────────────────────────────────────────

export const LAST_UPDATED = '2026-04-24';

export const INTRO = `Most "must-have Tesla accessories" lists are padded to 25 or 50 items because word count beats curation — and because long lists surface more affiliate links per page. This one is 8 items. They're the accessories that repeatedly show up in owner threads on TeslaMotorsClub, r/TeslaLounge, and Cybertruck Owners Club as the ones people actually use, months after delivery. Where the category is genuinely noisy, we've also listed what owners say to skip — and why.`;

export const FITMENT_WARNING = `Owning a 2024+ Highland Model 3 or a 2025+ Juniper Model Y? Both refreshes changed interior dimensions. "Fits all Model 3" or "fits all Model Y" listings often don't — especially console trays and screen protectors. Check the generation-specific fitment note on each item, and always verify the year range in the product listing before buying.`;

export const CYBERTRUCK_CALLOUT = `The Cybertruck accessory market is still young. Brand reputations haven't stabilized yet — several CT-specific vendors have already failed quality bars (see the CyberGear warning in the skip section). A handful of universal items on this page apply to Cybertruck, but if you just took CT delivery, expect the deepest accessory picks to come from the next 12–18 months of owner reports, not today.`;

export const FTC_DISCLOSURE = `TeslaChecklistPro plans to earn affiliate commissions on some links on this page. We only list items backed by at least two independent owner-forum threads — not sponsored placements, not items we were paid to cover. The "what we'd skip" section names products we will never link to. If a recommendation on this page ever stops matching owner consensus, it comes off the page.`;

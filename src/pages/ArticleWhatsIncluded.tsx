import { Link } from 'react-router-dom';
import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';
import { CitationLink, Sources, type Citation } from '../components/Citations';

const PUBLISHED = '2026-05-01';
const UPDATED = '2026-05-01';

// ───────────────────────────────────────────────────────────────────
// Citation banks
// ───────────────────────────────────────────────────────────────────

const teslaSourceCites: Citation[] = [
  { source: 'Tesla', title: 'Taking Delivery — official', url: 'https://www.tesla.com/support/taking-delivery' },
  { source: 'Tesla', title: 'After Taking Delivery — official', url: 'https://www.tesla.com/support/after-taking-delivery' },
  {
    source: 'Tesla',
    title: 'Cybertruck FAQ — the only model with a published inclusion list',
    url: 'https://www.tesla.com/support/cybertruck-faq',
  },
  {
    source: 'Tesla',
    title: 'SAE J1772 Charging Adapter — "included with every Tesla vehicle delivery"',
    url: 'https://shop.tesla.com/product/sae-j1772-charging-adapter',
  },
  {
    source: 'Tesla',
    title: 'Mobile Connector — official Tesla support',
    url: 'https://www.tesla.com/support/charging/mobile-connector',
  },
];

const mobileConnectorCites: Citation[] = [
  {
    source: 'Other',
    title: 'TechCrunch — "Tesla pulls the plug on the Gen 2 Mobile Connector Bundle" (Apr 18, 2022)',
    url: 'https://techcrunch.com/2022/04/18/tesla-pulls-the-plug-on-the-gen-2-mobile-connector-bundle-included-with-vehicle-purchase/',
  },
  {
    source: 'Other',
    title: 'InsideEVs — "Tesla Orders Starting April 17 Won\'t Include Mobile Connector"',
    url: 'https://insideevs.com/news/580762/tesla-mobile-connector-eliminated-as-standard/',
  },
  {
    source: 'TMC',
    title: 'Tesla has officially removed the mobile connector — discussion thread (Apr 2022)',
    url: 'https://teslamotorsclub.com/tmc/threads/tesla-has-officially-removed-the-mobile-connector-as-a-standard-accessory-with-every-new-car-purchase-now-a-400-separate-purchase.264277/',
  },
  {
    source: 'TMC',
    title: 'NEMA 14-50 adapter no longer included with vehicles (2019)',
    url: 'https://teslamotorsclub.com/tmc/threads/nema-14-50-adapter-no-longer-included-with-vehicles.150170/',
  },
];

const cybertruckCites: Citation[] = [
  {
    source: 'CTOC',
    title: 'Cybertruck Foundation Series Delivered — accessories and quirks',
    url: 'https://www.cybertruckownersclub.com/forum/threads/cybertruck-foundation-series-delivered-accessories-and-quirks.11826/',
  },
  {
    source: 'CTOC',
    title: 'Floor Mats — one carpet mat came with Cybertruck?',
    url: 'https://www.cybertruckownersclub.com/forum/threads/floor-mats-one-carpet-mat-came-with-cybertruck.12902/',
  },
  {
    source: 'CTOC',
    title: 'Non-Foundation Owners — what floor mats do you plan on using? (post-Foundation)',
    url: 'https://www.cybertruckownersclub.com/forum/threads/non-foundation-owners-what-floor-mats-do-you-plan-on-using.29989/',
  },
  {
    source: 'CTOC',
    title: 'PowerShare Mobile Connector (Gen 3) — discussion',
    url: 'https://www.cybertruckownersclub.com/forum/threads/charging-equipment-included-on-day-one-conflicting-info.14456/',
  },
  {
    source: 'CTOC',
    title: 'Did anyone get wall connector with their Cybertruck',
    url: 'https://www.cybertruckownersclub.com/forum/threads/did-anyone-get-wall-connector-with-their-cybertruck-the-said-theyre-not-included-only-the-mobile-connector.16439/',
  },
  {
    source: 'CTOC',
    title: 'Do non-Foundation Series CTs come with J1772 Adapter?',
    url: 'https://www.cybertruckownersclub.com/forum/threads/do-non-foundation-series-cts-come-with-j1772-adapter.25787/',
  },
  {
    source: 'Other',
    title: 'Electrek — "Tesla is buffing Foundation Series badges off Cybertrucks" (Dec 14, 2024)',
    url: 'https://electrek.co/2024/12/14/tesla-buffing-foundation-series-badges-off-cybertrucks-sell-them-as-regular/',
  },
  {
    source: 'Other',
    title: 'autoevolution — "Tesla saved money on the non-Foundation Series Cybertruck" (Oct 2024)',
    url: 'https://www.autoevolution.com/news/tesla-saved-money-on-the-non-foundation-series-cybertruck-but-not-as-much-as-you-d-think-240942.html',
  },
];

const usbDriveCites: Citation[] = [
  {
    source: 'TMC',
    title: 'BEST memory for sentry mode on 2024 Tesla Model 3 Highland',
    url: 'https://teslamotorsclub.com/tmc/threads/best-memory-for-sentry-mode-on-2024-telsa-model-3-highland.321248/',
  },
  {
    source: 'TMC',
    title: '2026 Y Juniper Sentry mode storage upgrades',
    url: 'https://teslamotorsclub.com/tmc/threads/2026-y-juniper-sentry-mode-storage-upgrades.344765/',
  },
  {
    source: 'TOO',
    title: '2024 M3 Highland USB / Sentry / Music port',
    url: 'https://www.teslaownersonline.com/threads/2024-m3-highland-usb-sentry-music-port.32148/',
  },
  {
    source: 'CTOC',
    title: 'USB drive recommendation for Sentry Mode? (Cybertruck factory drive)',
    url: 'https://www.cybertruckownersclub.com/forum/threads/usb-drive-recommendation-for-sentry-mode.19754/',
  },
  {
    source: 'TOO',
    title: 'Dashcam and Sentry Mode USB drive keeps malfunctioning',
    url: 'https://www.teslaownersonline.com/threads/dashcam-and-sentry-mode-usb-drive-keeps-malfunctioning.32244/',
  },
];

const matsAndExtrasCites: Citation[] = [
  {
    source: 'TMC',
    title: 'Tesla OEM All Weather Mats vs WeatherTech Mats for 2023 MY',
    url: 'https://teslamotorsclub.com/tmc/threads/tesla-oem-all-weather-mats-vs-weathertech-mats-for-2023-my.290825/',
  },
  {
    source: 'TMC',
    title: 'Tire Repair Kit?',
    url: 'https://teslamotorsclub.com/tmc/threads/tire-repair-kit.219590/',
  },
  {
    source: 'TOO',
    title: '2026 Launch Y — Portable Air Compressor "comes with Tire Repair Kit"',
    url: 'https://www.teslaownersonline.com/threads/portable-air-compressor-comes-with-tire-repair-kit-in-26-launch-y.37053/',
  },
  {
    source: 'CTOC',
    title: 'Does Cybertruck come with Tire Repair Kit?',
    url: 'https://www.cybertruckownersclub.com/forum/threads/does-cybertruck-come-with-tire-repair-kit.12284/page-2',
  },
  {
    source: 'TMC',
    title: 'Highland delivery threads — J1772 adapter intermittently missing',
    url: 'https://teslamotorsclub.com/tmc/threads/model-3-highland-us-waiting-room.319421/page-50',
  },
];

const verifyCites: Citation[] = [
  {
    source: 'Tesla',
    title: 'Get to know your pre-delivery tasks — interactive video',
    url: 'https://www.tesla.com/support/interactive-videos/get-to-know-your-pre-delivery-tasks',
  },
  {
    source: 'TMC',
    title: 'Picking up 2026 MY soon — delivery checklist?',
    url: 'https://teslamotorsclub.com/tmc/threads/picking-up-2026-my-soon-delivery-checklist.346011/',
  },
  {
    source: 'TMC',
    title: 'Does new Model Y come with J1772 Adapter (2025 confirmation)',
    url: 'https://teslamotorsclub.com/tmc/threads/does-new-model-y-come-with-j1772-adapter.343836/',
  },
];

// ───────────────────────────────────────────────────────────────────
// Per-model bundle table
// ───────────────────────────────────────────────────────────────────

interface BundleRow {
  where: string;
  item: string;
  confidence: 'HIGH' | 'MED' | 'LOW';
}

const MODELS: { key: string; name: string; rows: BundleRow[]; note?: string }[] = [
  {
    key: 'model-s',
    name: 'Model S (2024–2026)',
    note: 'Plaid does not bundle additional in-car contents — the Plaid premium is powertrain, wheels, and software. The 2026 Model S Signature Edition (announced April 2026, invite-only) bundles software perks but no documented physical additions to the frunk.',
    rows: [
      { where: 'Cabin', item: '2 key cards in a cardboard sleeve', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'J1772 charging adapter', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'Factory USB drive (~128 GB Samsung Bar Plus, Tesla-logo)', confidence: 'MED' },
      { where: 'Documents folder', item: 'Window sticker (Monroney Label), owner docs', confidence: 'HIGH' },
      { where: 'Cabin', item: 'Carpet floor mats (factory, not all-weather)', confidence: 'HIGH' },
    ],
  },
  {
    key: 'model-3',
    name: 'Model 3 Highland (2024+)',
    note: 'Multiple 2024 Highland delivery threads report the J1772 adapter missing on day one. Tesla\'s product page says it\'s included; verify the glovebox before signing.',
    rows: [
      { where: 'Cabin', item: '2 key cards', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'J1772 charging adapter', confidence: 'MED' },
      { where: 'Glovebox', item: 'Factory USB drive', confidence: 'MED' },
      { where: 'Documents folder', item: 'Window sticker, owner docs', confidence: 'HIGH' },
      { where: 'Cabin', item: 'Carpet floor mats only (Highland-sized)', confidence: 'HIGH' },
    ],
  },
  {
    key: 'model-x',
    name: 'Model X (2024–2026)',
    rows: [
      { where: 'Cabin', item: '2 key cards', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'J1772 charging adapter', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'Factory USB drive', confidence: 'MED' },
      { where: 'Documents folder', item: 'Window sticker, owner docs', confidence: 'HIGH' },
      { where: 'Cabin', item: 'Carpet floor mats only', confidence: 'HIGH' },
    ],
  },
  {
    key: 'model-y',
    name: 'Model Y Juniper (2025+)',
    note: 'Some Launch Series Junipers shipped with a free Air Compressor + Tire Repair Kit 3.0 as a launch promo. Standard Junipers did not.',
    rows: [
      { where: 'Cabin', item: '2 key cards', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'J1772 charging adapter', confidence: 'HIGH' },
      { where: 'Glovebox', item: 'Factory USB drive', confidence: 'MED' },
      { where: 'Documents folder', item: 'Window sticker, owner docs', confidence: 'HIGH' },
      { where: 'Cabin', item: 'Carpet floor mats only (Juniper-sized)', confidence: 'HIGH' },
      { where: 'Cargo well', item: 'Air Compressor + Tire Repair Kit 3.0 — Launch Series only', confidence: 'MED' },
    ],
  },
];

// ───────────────────────────────────────────────────────────────────

function ConfidencePill({ level }: { level: BundleRow['confidence'] }) {
  const color =
    level === 'HIGH' ? 'var(--ok, #4ade80)' : level === 'MED' ? 'var(--accent)' : 'var(--fg-2)';
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color,
        border: `1px solid ${color}`,
        padding: '2px 6px',
        borderRadius: 2,
        letterSpacing: '0.06em',
      }}
    >
      {level}
    </span>
  );
}

function BundleTable({ rows }: { rows: BundleRow[] }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ border: '1px solid var(--line)', background: 'var(--bg-1)' }}>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 60px' : '120px 1fr 60px',
            gap: 12,
            padding: '12px 16px',
            borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none',
            fontSize: 14,
            lineHeight: 1.5,
            alignItems: 'center',
          }}
        >
          {!isMobile && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-2)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {r.where}
            </span>
          )}
          <div>
            {isMobile && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--fg-2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginRight: 8,
                }}
              >
                {r.where} ·
              </span>
            )}
            {r.item}
          </div>
          <ConfidencePill level={r.confidence} />
        </div>
      ))}
    </div>
  );
}

export default function ArticleWhatsIncluded() {
  const isMobile = useIsMobile();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What\'s actually included with a new Tesla in 2026',
    description:
      'Per-model breakdown of what ships with new Teslas, what was removed (Mobile Connector in 2022), and the Cybertruck Foundation vs standard split.',
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { '@type': 'Organization', name: 'TeslaChecklistPro' },
    publisher: {
      '@type': 'Organization',
      name: 'TeslaChecklistPro',
      url: 'https://teslachecklistpro.com',
    },
    mainEntityOfPage: 'https://teslachecklistpro.com/whats-included-with-new-tesla',
  };

  useSeo({
    title: "What's actually included with a new Tesla in 2026",
    description:
      'Per-model bundle contents for Model S, 3, X, Y, and Cybertruck — what ships, what doesn\'t, and what changed (Mobile Connector pulled in 2022, Cybertruck Foundation ended Oct 2024).',
    canonical: 'https://teslachecklistpro.com/whats-included-with-new-tesla',
    jsonLd,
  });

  return (
    <InfoPage
      eyebrow="WHAT'S IN THE BOX"
      title={
        <>
          What's actually included
          <br />
          <span style={{ color: 'var(--accent)' }}>with a new Tesla in 2026.</span>
        </>
      }
      lede="Tesla doesn't publish a clear 'what's in your new car' page for Model S, 3, X, or Y — only the Cybertruck has one. The answer changes every year, and what ships in 2026 is meaningfully different from what shipped in 2021. This is the per-model breakdown, current as of April 2026, sourced from Tesla support pages where they exist and from owner forums where they don't."
    >
      {/* The short answer */}
      <Section eyebrow="THE SHORT ANSWER" title="Almost nothing, by historical standards.">
        <p>
          Every new Tesla ships with the same baseline: two key cards, a J1772 adapter (intermittently
          missing on 2024 Highland deliveries), a factory USB drive in the glovebox, owner
          documentation, and carpet-only floor mats. <strong>That's it</strong> for Model S, 3, X,
          and Y. There is no Mobile Connector, no NEMA 14-50 adapter, no Wall Connector, no
          all-weather mats, and no high-endurance USB drive purpose-built for Sentry Mode.
        </p>
        <p style={{ marginTop: 12 }}>
          Cybertruck is the outlier — and within Cybertruck, Foundation Series and standard trim
          (post-October 2024) ship very different bundles. We treat them separately below.
        </p>

        <Sources>
          {teslaSourceCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Per-model breakdowns */}
      <Section eyebrow="PER MODEL" title="What's in the car at handover, by model.">
        <p style={{ marginBottom: 16, fontSize: 14, color: 'var(--fg-2)' }}>
          <strong style={{ color: 'var(--ok, #4ade80)' }}>HIGH</strong> = Tesla support or shop
          confirms.{' '}
          <strong style={{ color: 'var(--accent)' }}>MED</strong> = forum-confirmed across two or
          more independent threads.
        </p>

        {MODELS.map((model) => (
          <div key={model.key} style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 19, marginBottom: 12 }}>{model.name}</h3>
            <BundleTable rows={model.rows} />
            {model.note && (
              <p
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: 'var(--fg-2)',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)' }}>NOTE · </span>
                {model.note}
              </p>
            )}
          </div>
        ))}

        <Sources>
          {[...usbDriveCites, ...matsAndExtrasCites].map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Cybertruck split */}
      <Section eyebrow="CYBERTRUCK" title="Foundation Series vs standard — a meaningfully different bundle.">
        <p>
          Tesla shifted Cybertruck production from Foundation-only to standard trim around October
          2024. The standard trim arrives with substantially less in the box. If you're taking
          delivery of a 2025 or 2026 Cybertruck, the difference matters financially — Foundation
          included roughly $20,000 of accessories and software bundled into the higher purchase
          price.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 16,
            marginTop: 20,
          }}
        >
          <div
            style={{
              border: '1px solid var(--line)',
              borderLeft: '3px solid var(--accent)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--accent)',
                marginBottom: 8,
                letterSpacing: '0.06em',
              }}
            >
              ● FOUNDATION SERIES
            </div>
            <p style={{ fontSize: 13, color: 'var(--fg-2)', marginBottom: 10 }}>
              Delivered Nov 2023 → late 2024.
            </p>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
              <li>2 key cards</li>
              <li>Factory USB drive (~128 GB Samsung Bar Plus, Tesla-logo)</li>
              <li>All-weather (rubber) interior liners + carpet mats</li>
              <li>Glass-roof sunshade</li>
              <li>Gear-locker dividers, D-rings (8), L-track hooks, L-track bottle opener, centre-console tray</li>
              <li>Off-road light bar</li>
              <li>Powershare Mobile Connector (Gen 3)</li>
              <li>Tesla Universal Wall Connector + Powershare gateway (separately shipped)</li>
              <li>FSD (Supervised), lifetime Premium Connectivity, Foundation badging</li>
            </ul>
          </div>
          <div
            style={{
              border: '1px solid var(--line)',
              borderLeft: '3px solid var(--fg-2)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-2)',
                marginBottom: 8,
                letterSpacing: '0.06em',
              }}
            >
              ● STANDARD TRIM
            </div>
            <p style={{ fontSize: 13, color: 'var(--fg-2)', marginBottom: 10 }}>
              Post-Foundation, late-2024 onward.
            </p>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.65, margin: 0 }}>
              <li>2 key cards</li>
              <li>Factory USB drive</li>
              <li>
                Carpet mats only — <strong style={{ color: 'var(--danger)' }}>rubber/all-weather mats removed</strong>
              </li>
              <li>
                4 tie-down rings — <strong style={{ color: 'var(--danger)' }}>halved from 8 on Foundation</strong>
              </li>
              <li>Powershare Mobile Connector (Gen 3) — kept</li>
              <li
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: 'var(--fg-2)',
                  listStyle: 'none',
                  marginLeft: -18,
                }}
              >
                <strong>Removed vs Foundation:</strong> off-road light bar, Powershare gateway,
                Universal Wall Connector, FSD, metallic centre-console inlay, white interior, Cyber
                wheels, Foundation badge.
              </li>
            </ul>
          </div>
        </div>

        <Sources>
          {cybertruckCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Historical changes */}
      <Section eyebrow="HOW WE GOT HERE" title="Three changes worth knowing.">
        <h3 style={{ fontSize: 17, marginTop: 8, marginBottom: 6 }}>April 2022 — Mobile Connector removed as standard</h3>
        <p>
          Tesla pulled the Gen 2 Mobile Connector bundle from new orders effective April 17, 2022.
          Orders placed before that date received it; orders placed after did not. The initial
          purchase price after removal was $400; after public backlash Elon Musk dropped it to $200,
          and it currently sits in the $230–$300 range on the Tesla shop. This is the single biggest
          change in what's in the box over the last decade — older YouTube unboxings still show the
          connector, and new buyers who've watched them are routinely surprised on delivery day.
        </p>

        <h3 style={{ fontSize: 17, marginTop: 24, marginBottom: 6 }}>2019 — NEMA 14-50 adapter dropped from the Mobile Connector bundle</h3>
        <p>
          Predates the Mobile Connector removal itself. Since 2019, when you do buy the Mobile
          Connector, the bundle ships with a NEMA 5-15 (standard household 110 V) adapter only. The
          NEMA 14-50 (240 V dryer outlet) adapter is a separate ~$35 purchase. Common confusion
          point because YouTube delivery videos from 2018–2021 still show it bundled.
        </p>

        <h3 style={{ fontSize: 17, marginTop: 24, marginBottom: 6 }}>October 2024 — Cybertruck Foundation Series ended</h3>
        <p>
          See the section above. Tesla shifted from Foundation-only to standard-trim Cybertruck
          deliveries around October 2024. The standard trim removed all-weather mats, the off-road
          light bar, FSD, Powershare gateway hardware, the Universal Wall Connector, and reduced
          bed tie-down rings from 8 to 4. Tesla also began (per Electrek) "buffing Foundation Series
          badges off" leftover Foundation-built trucks to sell them as standard trim — meaning a
          standard CT delivered in early 2025 may technically be a re-badged Foundation chassis.
        </p>

        <Sources>
          {mobileConnectorCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* What is NEVER included */}
      <Section eyebrow="WHAT IS NEVER INCLUDED" title="The eight items new owners assume ship with the car.">
        <p style={{ marginBottom: 16 }}>
          Each of these maps to a recommended item on our{' '}
          <Link
            to="/tesla-delivery-day-accessories"
            style={{ color: 'var(--accent)', textDecoration: 'underline' }}
          >
            accessories page
          </Link>
          . Owners assume otherwise mostly because of older marketing photography or YouTube
          unboxings that pre-date the changes above.
        </p>
        <div
          style={{
            border: '1px solid var(--line)',
            background: 'var(--bg-1)',
          }}
        >
          {[
            ['Mobile Connector (240 V portable charger)', 'Was standard pre-April-2022. Now $230+ separately.'],
            ['All-weather (rubber) floor mats', 'Tesla marketing photography routinely shows them; standard CT removed them in late 2024.'],
            ['Tire repair kit / air compressor', 'Most ICE cars include one; some 2024–2025 launch deliveries did include one as a promo, creating uneven expectations.'],
            ['Centre-console organizer trays', 'Console well is large and empty — buyers expect Tesla bundled an insert.'],
            ['Tempered-glass screen protector', 'Some auto brands ship one for the centre display. Tesla never has.'],
            ['Wall Connector / Universal Wall Connector', 'Foundation Cybertruck owners received one (separately shipped); no other model does.'],
            ['NEMA 14-50 adapter', 'Was bundled pre-2019; many "how to charge at home" YouTube videos still assume it ships.'],
            ['High-endurance USB drive for Sentry', 'Tesla does ship a 128 GB factory drive on most 2024+ deliveries — but it is not high-endurance and corrupts within months under continuous Sentry writes.'],
            ['Spare tire', 'No Tesla has ever shipped a spare. Foam-lined tires on 3, Y, and Cybertruck cannot accept Slime sealant.'],
          ].map(([item, why], i, arr) => (
            <div
              key={item}
              style={{
                padding: '14px 18px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '260px 1fr',
                gap: isMobile ? 4 : 24,
                fontSize: 14,
                lineHeight: 1.55,
              }}
            >
              <strong>{item}</strong>
              <span style={{ color: 'var(--fg-2)' }}>{why}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Common confusions */}
      <Section eyebrow="DEFINITIONS" title="Mobile Connector vs Wall Connector vs Universal Wall Connector.">
        <p>
          Four product names sit in the same conceptual space and routinely get confused.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
          {[
            {
              name: 'Mobile Connector',
              detail: 'Portable. Plugs into a household or 240 V outlet. ~$230. Adds up to 30 mph of range on a 240 V outlet. NOT included with new cars (since April 2022).',
            },
            {
              name: 'Wall Connector',
              detail: 'Hardwired Level 2 charger you mount in a garage. Adds up to 44 mph. NACS-only handle. Hardware ~$475 plus electrician install. NEVER included.',
            },
            {
              name: 'Universal Wall Connector',
              detail: 'Same as Wall Connector but with a built-in J1772 handle for non-Tesla EVs. Same charging speed. Included with Cybertruck Foundation Series only, separately shipped — never with S/3/X/Y.',
            },
            {
              name: 'J1772 adapter',
              detail: 'Small AC adapter that lets the car plug into non-Tesla Level 2 public chargers. Tesla\'s product copy says "included with every Tesla vehicle delivery"; multiple 2024 Highland threads report it absent on day one. Verify the glovebox before signing.',
            },
            {
              name: 'NEMA 14-50 adapter',
              detail: 'Sold separately. ~$35 on the Tesla shop. NOT in the Mobile Connector bundle since 2019.',
            },
          ].map((row) => (
            <div
              key={row.name}
              style={{
                padding: '12px 16px',
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
              }}
            >
              <strong style={{ fontSize: 14 }}>{row.name}</strong>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--fg-1)', margin: '4px 0 0' }}>{row.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How to verify */}
      <Section eyebrow="VERIFY EARLY" title="How to know what your car will come with — before you arrive.">
        <ol style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <strong>Tesla app, Order page, "Final Documents."</strong> The Order Agreement lists
            trim, options, and any added accessories as line items (e.g. "Mobile Connector $230"
            shows separately if added).
          </li>
          <li>
            <strong>The pre-delivery task list in the Tesla app.</strong> Tesla rolls out a
            per-region task list as your appointment nears; this confirms what you owe and gives a
            final pickup window.
          </li>
          <li>
            <strong>Ask your delivery advisor — in writing.</strong> The recurring forum advice:
            send a message via the Tesla app saying "Please confirm whether the J1772 adapter, USB
            drive, and floor mats will be in the car at handover." The written reply is leverage if
            anything is missing on day one.
          </li>
          <li>
            <strong>Window sticker (Monroney Label).</strong> Issued at delivery, not before — but
            it is the legal record of factory equipment, and every defect-related conversation
            should reference it.
          </li>
        </ol>

        <Sources>
          {verifyCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Caveats */}
      <Section eyebrow="HONEST CAVEATS" title="What this article doesn't cover.">
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <strong>This is a North America scope.</strong> EU, UK, and Australia deliveries differ
            (Type 2 connectors, different mat-compliance rules, regional adapter sets). Verify with
            your local advisor.
          </li>
          <li>
            <strong>Tesla changes contents quietly.</strong> Bundle line items have shifted multiple
            times in the past five years. Re-check this page before your delivery; we update at
            every quarterly content refresh.
          </li>
          <li>
            <strong>The 2026 Model S and Model X Signature Editions are too new to verify.</strong>{' '}
            Announced April 2026, invite-only. Owner deliveries are limited; treat any inclusion
            claim as "based on Tesla announcement, owner confirmation pending."
          </li>
          <li>
            <strong>Mobile Connector pricing fluctuates.</strong> Tesla has historically moved this
            between $200 and $400 with little notice. Verify on shop.tesla.com before assuming the
            number above.
          </li>
        </ul>
      </Section>

      {/* Cross-links */}
      <Section eyebrow="RELATED" title="Read next.">
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <Link
              to="/tesla-delivery-day-accessories"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Tesla delivery-day accessories
            </Link>{' '}
            — what to buy to fill the gaps Tesla left in the box.
          </li>
          <li>
            <Link
              to="/tesla-delivery-day-timeline"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Tesla delivery day timeline
            </Link>{' '}
            — phase-by-phase, from VIN assigned to keys in hand.
          </li>
          <li>
            <Link
              to="/tesla-delivery-defects-what-to-do"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Tesla delivery defects — what to do
            </Link>{' '}
            — when "missing item" turns into "defect" on the lot.
          </li>
        </ul>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--fg-2)' }}>
          Last updated: <span style={{ fontFamily: 'var(--font-mono)' }}>{UPDATED}</span>.
        </p>
      </Section>
    </InfoPage>
  );
}

import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';

const CATEGORIES = [
  {
    key: 'exterior',
    label: 'Exterior',
    count: 38,
    items: [
      'Panel gaps — all seams within 3–5mm tolerance',
      'Paint coverage under raking light (orange peel, thin spots)',
      'Charge port door and LED ring',
      'Rubber seals at doors, frunk, trunk, and glass',
      'Emblems straight and fully seated',
      'No transit film adhesive residue',
    ],
  },
  {
    key: 'tire',
    label: 'Tire & wheel',
    count: 14,
    items: [
      'Tread depth — 7–9/32" on all four tires',
      'Four matching tires, same brand and model',
      'DOT date codes within 4 weeks of each other',
      'No curb rash or scuffs on wheels',
      'Wheel caps installed where applicable',
      'No feathering or inner-edge wear from transit',
    ],
  },
  {
    key: 'electrical',
    label: 'Electrical systems',
    count: 22,
    items: [
      'Supercharger handshake on first connection',
      '12V battery health reading (under Service menu)',
      'High-voltage pack balance',
      'All USB-C ports power a device',
      'Wireless phone charger pad active',
      'Exterior lighting — headlights, taillights, turn signals, fogs',
    ],
  },
  {
    key: 'interior',
    label: 'Interior trim',
    count: 31,
    items: [
      'Headliner-to-pillar gap consistency (under 1mm)',
      'Seat stitching symmetry, leather seating seams',
      'HVAC vents direct airflow at all angles',
      'Every window auto-up and auto-down works',
      'All seat adjustments travel full range',
      'No interior rattles during drive',
    ],
  },
  {
    key: 'software',
    label: 'Software & features',
    count: 24,
    items: [
      'FSD (Supervised) entitlement if ordered',
      'Premium Connectivity live with trial or purchase',
      'Acceleration Boost if ordered',
      'Homelink visible in menu if ordered',
      'Dashcam records to USB on all cameras',
      'Software version current for your build',
    ],
  },
  {
    key: 'documents',
    label: 'Documents & kit',
    count: 18,
    items: [
      'VIN on all documents matches the car',
      'Build date and delivery date on Monroney',
      'Manufacturer Statement of Origin (MSO)',
      'Warranty registration start date',
      'Mobile connector (UMC) and adapters included',
      'Floor mats match ordered configuration',
    ],
  },
];

export default function Inspection() {
  const isMobile = useIsMobile();

  useSeo({
    title: 'Tesla delivery inspection — what the 147-point walk covers',
    description:
      'The full TeslaChecklistPro inspection covers six categories: exterior, tire and wheel, electrical, interior, software, and documentation. 147 total points. Free, offline-capable.',
    canonical: 'https://teslachecklistpro.com/inspection',
  });

  const total = CATEGORIES.reduce((sum, c) => sum + c.count, 0);

  return (
    <InfoPage
      eyebrow="INSPECTION"
      title={
        <>
          Six systems.
          <br />
          <span style={{ color: 'var(--accent)' }}>One hundred forty-seven checks.</span>
        </>
      }
      lede={`${total} inspection points organized into six categories — the complete walkthrough for Model S, 3, X, Y, and Cybertruck deliveries. Here's what each category covers and why it's on the list.`}
    >
      <Section eyebrow="CATEGORIES" title="What you'll check, category by category.">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 0,
            border: '1px solid var(--line)',
          }}
        >
          {CATEGORIES.map((cat, i) => {
            const col = i % (isMobile ? 1 : 2);
            const row = Math.floor(i / (isMobile ? 1 : 2));
            const lastRow = Math.floor((CATEGORIES.length - 1) / (isMobile ? 1 : 2));
            return (
              <div
                key={cat.key}
                style={{
                  padding: isMobile ? 24 : 28,
                  background: 'var(--bg-1)',
                  borderRight: !isMobile && col === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: row !== lastRow ? '1px solid var(--line)' : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                  }}
                >
                  <h3 style={{ fontSize: 18 }}>{cat.label}</h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--accent)',
                    }}
                  >
                    {cat.count} points
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 13,
                        color: 'var(--fg-1)',
                        paddingLeft: 16,
                        marginBottom: 6,
                        position: 'relative',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--fg-2)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                  <li
                    style={{
                      fontSize: 12,
                      color: 'var(--fg-2)',
                      marginTop: 10,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    + {cat.count - cat.items.length} more
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="HOW TO USE" title="Pass, flag, or skip — three states per item.">
        <p>
          Every item starts unchecked. As you walk the car, mark each one one of three ways:
        </p>
        <ul style={{ marginTop: 16, paddingLeft: 20 }}>
          <li style={{ marginBottom: 10 }}>
            <strong style={{ color: 'var(--ok)' }}>Pass</strong> — the item meets spec. No
            action needed.
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong style={{ color: 'var(--danger)' }}>Flag</strong> — you found a defect.
            Add a short note describing what. This shows up in your PDF so the advisor can
            act on it.
          </li>
          <li>
            <strong style={{ color: 'var(--fg-2)' }}>Skip</strong> — not applicable to your
            car, or you couldn't verify it without tools. Skipped items are listed in the
            PDF so both you and the advisor have a record that they weren't checked.
          </li>
        </ul>
      </Section>

      <Section eyebrow="MODEL-SPECIFIC" title="Each Tesla has its own patterns.">
        <p>
          The 147-point core list applies to all five models, but each car has its own
          common issues — falcon-wing doors on the X, stainless panel gouges on the
          Cybertruck, tailgate alignment on the Y, carbon-fiber dash on the Plaid. Our
          per-model pages highlight the top community-reported items for each:
        </p>
        <ul style={{ marginTop: 12, paddingLeft: 20 }}>
          <li style={{ marginBottom: 6 }}>
            <a
              href="/model-y-delivery-checklist"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Model Y delivery checklist
            </a>
          </li>
          <li style={{ marginBottom: 6 }}>
            <a
              href="/model-3-delivery-checklist"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Model 3 delivery checklist (Highland)
            </a>
          </li>
          <li style={{ marginBottom: 6 }}>
            <a
              href="/cybertruck-delivery-checklist"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Cybertruck delivery checklist
            </a>
          </li>
          <li style={{ marginBottom: 6 }}>
            <a
              href="/model-s-delivery-checklist"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Model S delivery checklist
            </a>
          </li>
          <li>
            <a
              href="/model-x-delivery-checklist"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Model X delivery checklist
            </a>
          </li>
        </ul>
      </Section>
    </InfoPage>
  );
}

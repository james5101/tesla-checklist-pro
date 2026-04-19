import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';

const STEPS = [
  {
    n: '01',
    t: 'Pick your model',
    d: "Choose your Tesla from the model picker. The app loads the 147-point list and any model-specific items we've curated for your car — Cybertruck gets extra stainless and frunk items, Model X adds falcon-wing door tests, and so on.",
  },
  {
    n: '02',
    t: 'Walk the car',
    d: 'Work through six categories: exterior, tire & wheel, electrical, interior, software, and documentation. Tap pass, flag, or skip on each item. Flagged items prompt you for a note — this is what makes the PDF actually useful to your advisor.',
  },
  {
    n: '03',
    t: 'Hand it to your advisor',
    d: "Export a timestamped PDF with every flagged item, your notes, and your VIN. Email it on the spot or hand over your phone. If anything's wrong, document it before you sign — once you accept delivery, cosmetic claims become much harder to resolve.",
  },
];

export default function HowItWorks() {
  const isMobile = useIsMobile();

  useSeo({
    title: 'How it works — Tesla delivery inspection in three steps',
    description:
      'The TeslaChecklistPro workflow: pick your model, walk a 147-point inspection across six categories, export a PDF for your advisor. Offline, free, no signup.',
    canonical: 'https://teslachecklistpro.com/how-it-works',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to inspect a Tesla on delivery day',
      description:
        'A three-step workflow for walking a 147-point inspection during Tesla delivery and handing findings to your advisor before you sign.',
      totalTime: 'PT30M',
      step: STEPS.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.t,
        text: s.d,
      })),
    },
  });

  return (
    <InfoPage
      eyebrow="HOW IT WORKS"
      title={
        <>
          Three steps between you and
          <br />
          <span style={{ color: 'var(--accent)' }}>a clean delivery.</span>
        </>
      }
      lede="Built for the 20–30 minutes you have in the delivery bay. Mobile-first, works offline, formatted to print."
    >
      <Section eyebrow="WORKFLOW" title="Your day, step by step.">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 24 : 32,
            marginTop: 8,
          }}
        >
          {STEPS.map((s) => (
            <div key={s.n} style={{ paddingTop: 24, borderTop: '1px solid var(--accent)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: 'var(--accent)',
                  marginBottom: isMobile ? 16 : 24,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: isMobile ? 20 : 22, marginBottom: 10 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="METHODOLOGY" title="Where the 147 items came from.">
        <p>
          We started with Tesla's own Delivery Acceptance guidelines — the bar advisors are
          trained to meet. Then we spent four years pulling recurring defects and owner
          complaints from four sources: TeslaMotorsClub (the oldest Tesla owner forum,
          continuously active since 2006), r/TeslaLounge on Reddit (the largest general owner
          community), the Cybertruck Owners Club forum (specific to CT delivery reports), and
          InsideEVs editorial coverage of delivery trends.
        </p>
        <p style={{ marginTop: 16 }}>
          An item makes the list when multiple owners report catching it at delivery, across
          different production dates and trims. We cull items that were one-off factory
          incidents, resolved by a running change, or too subjective to check without special
          tools. The list is revised quarterly. Highland and Juniper refreshes prompted the
          most recent rewrite.
        </p>
      </Section>

      <Section eyebrow="UNDER THE HOOD" title="How the app actually works.">
        <p>
          TeslaChecklistPro is a static web app. There is no backend, no user database, no
          tracking. When you open the site, a single JavaScript bundle loads in your browser
          and runs entirely locally. Your inspection state (every pass, flag, skip, note, and
          your VIN) lives in your browser's <code>localStorage</code>. Close the tab and
          re-open it later — your progress is still there.
        </p>
        <p style={{ marginTop: 16 }}>
          That also means it works offline. Delivery bays often have dead cell coverage, so
          the app is designed to load once and then keep running without network. Add it to
          your home screen (iOS Safari → Share → Add to Home Screen, or Chrome → Install)
          and it behaves like a native app.
        </p>
      </Section>

      <Section eyebrow="PDF EXPORT" title="What your advisor gets.">
        <p>
          The PDF export is a single-page document (per category) formatted for a Tesla
          service advisor to act on. It includes your VIN, timestamp, inspection date, every
          flagged item with your note, and a count of passed and skipped items. Flagged rows
          are highlighted so nothing gets missed on a skim.
        </p>
        <p style={{ marginTop: 16 }}>
          The format exists because that's the fastest, most durable way for the information
          to land with the right person at Tesla. Screenshots get lost. Verbal reports get
          forgotten. A timestamped PDF in an email thread doesn't.
        </p>
      </Section>
    </InfoPage>
  );
}

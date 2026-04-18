import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';

const SOURCES = [
  {
    name: 'TeslaMotorsClub',
    url: 'https://teslamotorsclub.com',
    blurb: 'The oldest Tesla owner forum, continuously active since 2006.',
  },
  {
    name: 'r/TeslaLounge',
    url: 'https://reddit.com/r/TeslaLounge',
    blurb: 'The largest general Tesla owner community on Reddit.',
  },
  {
    name: 'Cybertruck Owners Club',
    url: 'https://cybertruckownersclub.com',
    blurb: 'Dedicated to Cybertruck delivery experiences and known issues.',
  },
  {
    name: 'r/TeslaModel3',
    url: 'https://reddit.com/r/TeslaModel3',
    blurb: 'Model 3-specific community, strongest for Highland refresh reports.',
  },
  {
    name: 'r/TeslaModelY',
    url: 'https://reddit.com/r/TeslaModelY',
    blurb: 'Model Y community, strongest for Juniper refresh tracking.',
  },
  {
    name: 'InsideEVs',
    url: 'https://insideevs.com',
    blurb: 'Industry publication with consistent Tesla delivery coverage.',
  },
];

export default function Owners() {
  const isMobile = useIsMobile();

  useSeo({
    title: 'For owners — how TeslaChecklistPro is built and maintained',
    description:
      'TeslaChecklistPro is an owner-built tool. Here is where the 147-point list came from, how items get added, and how to contribute corrections or report a missed issue.',
    canonical: 'https://teslachecklistpro.com/owners',
  });

  return (
    <InfoPage
      eyebrow="OWNERS"
      title={
        <>
          Built by owners,
          <br />
          <span style={{ color: 'var(--accent)' }}>for owners.</span>
        </>
      }
      lede="TeslaChecklistPro exists because delivery-day prep shouldn't mean reading a dozen forum threads the night before. This is that reading, curated into 147 checks, free for anyone taking delivery."
    >
      <Section eyebrow="WHY THIS EXISTS" title="Delivery day is a negotiation.">
        <p>
          Tesla's delivery process has improved over the years, but the fundamental asymmetry
          is unchanged: the advisor does this fifty times a week, you do it once in four
          years. They know which issues are worth flagging, which are cosmetic tolerances,
          which get fixed during the appointment. You find out by walking the car with
          twenty minutes on a clock.
        </p>
        <p style={{ marginTop: 16 }}>
          The 147-point walk closes that gap. It's the consolidated memory of thousands of
          owner delivery reports, organized so you can walk it in twenty to thirty minutes
          and come out with a documented list of anything that needs attention — before you
          tap the button that makes the car yours.
        </p>
      </Section>

      <Section eyebrow="SOURCES" title="Where the list comes from.">
        <p style={{ marginBottom: 24 }}>
          Every item on the inspection traces back to a public owner community or a verified
          Tesla document. We don't invent items, and we don't include marketing-speak. If a
          check is on the list, it's because multiple owners have reported catching it (or
          missing it) at delivery.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 0,
            border: '1px solid var(--line)',
          }}
        >
          {SOURCES.map((s, i) => {
            const col = i % (isMobile ? 1 : 2);
            const row = Math.floor(i / (isMobile ? 1 : 2));
            const lastRow = Math.floor((SOURCES.length - 1) / (isMobile ? 1 : 2));
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: isMobile ? 20 : 24,
                  background: 'var(--bg-1)',
                  borderRight: !isMobile && col === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: row !== lastRow ? '1px solid var(--line)' : 'none',
                  display: 'block',
                  color: 'var(--fg-0)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  {s.name}
                </div>
                <div style={{ fontSize: 13, color: 'var(--fg-1)', lineHeight: 1.5 }}>
                  {s.blurb}
                </div>
              </a>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="MAINTENANCE" title="How the list evolves.">
        <p>
          Every new Tesla refresh changes the defect pattern. The Highland refresh (2024+
          Model 3) introduced stalk-less controls and relocated rear turn signals. The
          Juniper refresh (2026 Model Y) changed the cargo-area layout and added new shelf
          anchor points. The Cybertruck has its own evolving list as early-VIN issues get
          resolved in production.
        </p>
        <p style={{ marginTop: 16 }}>
          The inspection gets a quarterly review. Items that were tied to a specific build
          range and are now out of production get archived. New items from the current
          refresh get added as owner reports accumulate. The goal is a list that reflects
          what you'd actually encounter on a car delivered this month.
        </p>
      </Section>

      <Section eyebrow="CONTRIBUTE" title="Spotted something we missed?">
        <p>
          If you've taken delivery and caught an issue that isn't on the list — or noticed
          an item that's stale and needs updating — the fastest way to get it fixed is to
          email <a href="mailto:feedback@teslachecklistpro.com" style={{ color: 'var(--accent)' }}>feedback@teslachecklistpro.com</a>{' '}
          with a photo and VIN range. Corrections get reviewed weekly. Contributions are
          credited on the <a href="/inspection" style={{ color: 'var(--accent)' }}>inspection page</a> when we add them.
        </p>
        <p style={{ marginTop: 16 }}>
          We are not affiliated with Tesla, Inc. This tool exists because owners wanted it.
          If it saves you one flagged defect that would have otherwise been your problem to
          pay for later, it's worth the time we've put into it.
        </p>
      </Section>
    </InfoPage>
  );
}

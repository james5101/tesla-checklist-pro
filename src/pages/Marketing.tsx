import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.svg';
import { useIsMobile, useIsNarrow } from '../hooks/useMediaQuery';
import { useSeo } from '../hooks/useSeo';
import { ThemeToggle } from '../components/ThemeToggle';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const isNarrow = useIsNarrow();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        zIndex: 100,
        background: scrolled ? 'var(--bg-0)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all 180ms cubic-bezier(0.2,0,0,1)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          height: '100%',
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? 12 : 32,
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logoMark} width="22" height="22" alt="" />
          <span style={{ fontSize: 14, fontWeight: 600 }}>
            TeslaChecklist<span style={{ color: 'var(--accent)' }}>Pro</span>
          </span>
        </Link>
        {!isNarrow && (
          <div style={{ display: 'flex', gap: 24, marginLeft: 24 }}>
            {[
              { label: 'Inspection', to: '/inspection' },
              { label: 'How it works', to: '/how-it-works' },
              { label: 'Owners', to: '/owners' },
              { label: 'FAQ', to: '/faq' },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{ fontSize: 13, color: 'var(--fg-1)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <ThemeToggle compact />
          {!isMobile && (
            <Link to="/app" className="btn btn--ghost">
              Sign in
            </Link>
          )}
          <Link to="/app" className="btn btn--primary">
            {isMobile ? 'Start →' : 'Start inspection →'}
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <section
      style={{
        paddingTop: isMobile ? 100 : 160,
        paddingBottom: isMobile ? 64 : 120,
        background:
          'radial-gradient(ellipse at 70% 0%, var(--accent-glow) 0%, transparent 45%), var(--bg-0)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px',
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 24, color: 'var(--accent)' }}>
          ● DELIVERY DAY TOOLKIT · v4.2
        </div>
        <h1
          style={{
            fontSize: isMobile ? 44 : 88,
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
            maxWidth: 900,
            fontWeight: 700,
          }}
        >
          Don't sign until
          <br />
          you've checked
          <br />
          <span style={{ color: 'var(--accent)' }}>everything.</span>
        </h1>
        <p
          style={{
            fontSize: isMobile ? 16 : 19,
            color: 'var(--fg-1)',
            marginTop: isMobile ? 24 : 32,
            maxWidth: 560,
          }}
        >
          A 147-point delivery inspection, built from 4 years of Tesla forum threads,
          service bulletins, and owner reports. Free. No signup.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: isMobile ? 28 : 40,
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/app"
            className="btn btn--primary"
            style={{ padding: '14px 22px', fontSize: 14 }}
          >
            Start my inspection →
          </Link>
          <a href="#how" className="btn" style={{ padding: '14px 22px', fontSize: 14 }}>
            How it works
          </a>
        </div>
        <div
          style={{
            marginTop: isMobile ? 48 : 80,
            paddingTop: 32,
            borderTop: '1px solid var(--line)',
          }}
        >
          <div
            className="eyebrow"
            style={{ color: 'var(--fg-2)', marginBottom: isMobile ? 16 : 20 }}
          >
            ● SOURCED FROM
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, auto)',
              columnGap: isMobile ? 20 : 48,
              rowGap: isMobile ? 20 : 0,
              justifyContent: isMobile ? 'stretch' : 'start',
            }}
          >
            {[
              { v: 'TeslaMotorsClub', l: 'Owner forum · est. 2006' },
              { v: 'r/TeslaLounge', l: 'Reddit · general owner community' },
              { v: 'Cybertruck Owners', l: 'Owners club forum' },
              { v: 'InsideEVs', l: 'Publication · coverage' },
            ].map((s) => (
              <div key={s.v}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: isMobile ? 15 : 18,
                    letterSpacing: 0,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.v}
                </div>
                <div className="eyebrow" style={{ marginTop: 6 }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    t: 'Paint & panel gaps',
    d: 'Spec-accurate gap ranges for every Model S, 3, X, Y, Cybertruck trim.',
  },
  {
    t: 'Tire & wheel',
    d: 'Tread depth, rotation direction, curb rash — all four corners.',
  },
  {
    t: 'Electrical systems',
    d: 'Supercharger handshake, 12V health, HV pack cell balance.',
  },
  {
    t: 'Interior trim',
    d: 'Headliner alignment, seat stitching, HVAC vents, USB-C ports.',
  },
  {
    t: 'Software & features',
    d: 'Verify FSD, Premium Connectivity, Enhanced Autopilot as ordered.',
  },
  {
    t: 'Documentation',
    d: 'VIN match, build date, MSO, warranty registration, order sheet.',
  },
];

const FeatureGrid = () => {
  const isMobile = useIsMobile();
  const isNarrow = useIsNarrow();
  const cols = isMobile ? 1 : isNarrow ? 2 : 3;
  return (
    <section
      style={{
        padding: isMobile ? '64px 0' : '120px 0',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>
          ● COVERAGE
        </div>
        <h2
          style={{
            fontSize: isMobile ? 32 : 48,
            letterSpacing: '-0.02em',
            maxWidth: 720,
          }}
        >
          Six systems. 147 checks.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            marginTop: isMobile ? 40 : 64,
            border: '1px solid var(--line)',
          }}
        >
          {features.map((f, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const rows = Math.ceil(features.length / cols);
            return (
              <div
                key={f.t}
                style={{
                  padding: isMobile ? 24 : 32,
                  borderRight: col !== cols - 1 ? '1px solid var(--line)' : 'none',
                  borderBottom: row !== rows - 1 ? '1px solid var(--line)' : 'none',
                  background: 'var(--bg-1)',
                }}
              >
                <div
                  style={{ width: 20, height: 20, color: 'var(--accent)', marginBottom: 16 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{f.t}</h3>
                <p style={{ fontSize: 13, color: 'var(--fg-1)' }}>{f.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="how"
      style={{
        padding: isMobile ? '64px 0' : '120px 0',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '0 20px' : '0 40px',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>
          ● HOW IT WORKS
        </div>
        <h2
          style={{
            fontSize: isMobile ? 32 : 48,
            letterSpacing: '-0.02em',
            maxWidth: 720,
          }}
        >
          Three steps between you and a clean delivery.
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 32 : 40,
            marginTop: isMobile ? 40 : 64,
          }}
        >
        {[
          {
            n: '01',
            t: 'Pick your model',
            d: "Tell us which Tesla you're taking delivery of. We load the model-specific checklist.",
          },
          {
            n: '02',
            t: 'Walk the car',
            d: 'Tap pass, flag a defect, or skip. Capture photos right in the app. Works offline.',
          },
          {
            n: '03',
            t: 'Hand it to your advisor',
            d: 'Export a timestamped PDF. Email it to your advisor before you sign.',
          },
          ].map((s) => (
            <div key={s.n} style={{ paddingTop: 24, borderTop: '1px solid var(--accent)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: 'var(--accent)',
                  marginBottom: isMobile ? 20 : 32,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: isMobile ? 22 : 26, marginBottom: 12 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--fg-1)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FOOTER_CHECKLISTS: Array<{ slug: string; name: string }> = [
  { slug: 'model-s-delivery-checklist', name: 'Model S' },
  { slug: 'model-3-delivery-checklist', name: 'Model 3' },
  { slug: 'model-x-delivery-checklist', name: 'Model X' },
  { slug: 'model-y-delivery-checklist', name: 'Model Y' },
  { slug: 'cybertruck-delivery-checklist', name: 'Cybertruck' },
];

const FOOTER_INFO: Array<{ to: string; label: string }> = [
  { to: '/inspection', label: 'Tesla delivery inspection' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/owners', label: 'For owners' },
  { to: '/faq', label: 'FAQ' },
];

export const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer style={{ padding: isMobile ? '48px 0 32px' : '80px 0 40px' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '32px 20px 0' : '32px 40px 0',
          borderTop: '1px solid var(--line)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--fg-2)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 24 : 48,
            paddingBottom: 24,
          }}
        >
          <div>
            <div style={{ color: 'var(--fg-1)', marginBottom: 10, letterSpacing: '0.04em' }}>
              CHECKLISTS
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
              {FOOTER_CHECKLISTS.map((m) => (
                <li key={m.slug}>
                  <Link
                    to={`/${m.slug}`}
                    style={{ color: 'var(--fg-2)', textDecoration: 'none' }}
                  >
                    {m.name} delivery checklist
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ color: 'var(--fg-1)', marginBottom: 10, letterSpacing: '0.04em' }}>
              ABOUT
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
              {FOOTER_INFO.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 8 : 0,
            justifyContent: 'space-between',
            borderTop: '1px solid var(--line)',
            paddingTop: 16,
          }}
        >
          <span>© 2026 TeslaChecklistPro · Not affiliated with Tesla, Inc.</span>
          <span>BUILD 4.2.18 · ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </footer>
  );
};

const HOWTO_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Tesla Delivery Day Inspection',
  description:
    'A 147-point inspection to perform when taking delivery of a new Tesla, sourced from owner community forums.',
  totalTime: 'PT30M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Pick your model',
      text: 'Select your Tesla model to load the model-specific checklist.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Walk the car',
      text: 'Tap pass, flag a defect, or skip. Add notes to flagged items. Works offline.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Hand it to your advisor',
      text: 'Export a timestamped PDF and email it to your delivery advisor before you sign.',
    },
  ],
};

export default function Marketing() {
  useSeo({
    title: 'TeslaChecklistPro — 147-point Tesla delivery inspection checklist',
    description:
      'Free delivery-day inspection checklist for every Tesla: Model S, 3, X, Y, and Cybertruck. 147 points sourced from owner forums. Export a PDF for your advisor. No signup.',
    canonical: 'https://teslachecklistpro.com/',
    jsonLd: HOWTO_JSONLD,
  });
  return (
    <>
      <Nav />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <Footer />
    </>
  );
}

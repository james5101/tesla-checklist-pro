const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 56, zIndex: 100,
      background: scrolled ? 'rgba(10,11,13,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 180ms cubic-bezier(0.2,0,0,1)' }}>
      <div style={{ maxWidth: 1200, height: '100%', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/logo-mark.svg" width="22" height="22" />
          <span style={{ fontSize: 14, fontWeight: 600 }}>TeslaChecklist<span style={{ color: 'var(--accent)' }}>Pro</span></span>
        </a>
        <div style={{ display: 'flex', gap: 24, marginLeft: 24 }}>
          {['Inspection', 'How it works', 'Owners', 'FAQ'].map(l => <a key={l} href="#" style={{ fontSize: 13, color: 'var(--fg-1)' }}>{l}</a>)}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <ThemeToggle compact />
          <a href="../app/index.html" className="btn btn--ghost">Sign in</a>
          <a href="../app/index.html" className="btn btn--primary">Start inspection →</a>
        </div>
      </div>
    </nav>
  );
};
window.Nav = Nav;

const Hero = () => {
  const theme = window.useTheme();
  const isCyber = theme === 'cyber';
  return (
  <section style={{ paddingTop: 160, paddingBottom: 120, position: 'relative',
    background: isCyber
      ? 'radial-gradient(ellipse at 70% 0%, rgba(255,46,200,0.18) 0%, transparent 45%), radial-gradient(ellipse at 20% 80%, rgba(0,240,255,0.12) 0%, transparent 50%), var(--bg-0)'
      : 'radial-gradient(ellipse at 70% 0%, #1a0808 0%, transparent 45%), #0A0B0D',
    borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>
      <div className="eyebrow cyber-flicker" style={{ marginBottom: 24, color: 'var(--accent)' }}>● DELIVERY DAY TOOLKIT · v4.2</div>
      <h1 style={{ fontSize: 88, lineHeight: 0.98, maxWidth: 900 }} className="cyber-glow">
        {isCyber ? <>Don't sign<br/>until every<br/><span style={{ color: 'var(--accent)' }}>byte</span> checks out.</>
                 : <>Don't sign until<br/>you've checked<br/><span style={{ color: 'var(--accent)' }}>everything.</span></>}
      </h1>
      <p style={{ fontSize: 19, color: 'var(--fg-1)', marginTop: 32, maxWidth: 560, fontFamily: isCyber ? 'var(--font-mono)' : 'var(--font-sans)' }}>
        {isCyber
          ? '// 147 checks loaded. Operator mode online. Scan the unit. Log the defects. Hand the advisor a timestamped receipt.'
          : 'A 147-point delivery inspection, built from 4 years of Tesla forum threads, service bulletins, and owner reports. Free. No signup.'}
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
        <a href="../app/index.html" className="btn btn--primary" style={{ padding: '14px 22px', fontSize: 14 }}>Start my inspection →</a>
        <a href="#how" className="btn" style={{ padding: '14px 22px', fontSize: 14 }}>How it works</a>
      </div>
      <div style={{ display: 'flex', gap: 48, marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
        {[{v:'147',l:'Inspection points'},{v:'38,412',l:'Cars inspected'},{v:'4.9/5',l:'Owner rating'},{v:'$0',l:'Forever free'}].map(s => (
          <div key={s.l}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, letterSpacing: 0, fontWeight: 500 }}>{s.v}</div>
            <div className="eyebrow" style={{ marginTop: 6 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
window.Hero = Hero;

const features = [
  { t: 'Paint & panel gaps', d: 'Spec-accurate gap ranges for every Model S, 3, X, Y, Cybertruck trim.' },
  { t: 'Tire & wheel', d: 'Tread depth, rotation direction, curb rash — all four corners.' },
  { t: 'Electrical systems', d: 'Supercharger handshake, 12V health, HV pack cell balance.' },
  { t: 'Interior trim', d: 'Headliner alignment, seat stitching, HVAC vents, USB-C ports.' },
  { t: 'Software & features', d: 'Verify FSD, Premium Connectivity, Enhanced Autopilot as ordered.' },
  { t: 'Documentation', d: 'VIN match, build date, MSO, warranty registration, order sheet.' },
];
const FeatureGrid = () => (
  <section style={{ padding: '120px 0', borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
      <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>● COVERAGE</div>
      <h2 style={{ fontSize: 48, letterSpacing: '-0.02em', maxWidth: 720 }}>Six systems. One hundred forty-seven checks.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 64, border: '1px solid var(--line)' }}>
        {features.map((f, i) => (
          <div key={f.t} style={{ padding: 32, borderRight: i%3 !== 2 ? '1px solid var(--line)' : 'none', borderBottom: i < 3 ? '1px solid var(--line)' : 'none', background: 'var(--bg-1)' }}>
            <div style={{ width: 20, height: 20, color: 'var(--accent)', marginBottom: 16 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z"/></svg>
            </div>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>{f.t}</h3>
            <p style={{ fontSize: 13, color: 'var(--fg-1)' }}>{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.FeatureGrid = FeatureGrid;

const HowItWorks = () => (
  <section id="how" style={{ padding: '120px 0', borderBottom: '1px solid var(--line)' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
      <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>● HOW IT WORKS</div>
      <h2 style={{ fontSize: 48, letterSpacing: '-0.02em', maxWidth: 720 }}>Three steps between you and a clean delivery.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginTop: 64 }}>
        {[
          { n: '01', t: 'Pick your model', d: 'Tell us which Tesla you\'re taking delivery of. We load the model-specific checklist.' },
          { n: '02', t: 'Walk the car', d: 'Tap pass, flag a defect, or skip. Capture photos right in the app. Works offline.' },
          { n: '03', t: 'Hand it to your advisor', d: 'Export a timestamped PDF. Email it to your advisor before you sign.' },
        ].map(s => (
          <div key={s.n} style={{ paddingTop: 24, borderTop: '1px solid var(--accent)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', marginBottom: 32 }}>{s.n}</div>
            <h3 style={{ fontSize: 26, marginBottom: 12 }}>{s.t}</h3>
            <p style={{ fontSize: 14, color: 'var(--fg-1)' }}>{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.HowItWorks = HowItWorks;

const Footer = () => (
  <footer style={{ padding: '80px 0 40px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>
      <span>© 2026 TeslaChecklistPro · Not affiliated with Tesla, Inc.</span>
      <span>BUILD 4.2.18 · ALL SYSTEMS NOMINAL</span>
    </div>
  </footer>
);
window.Footer = Footer;

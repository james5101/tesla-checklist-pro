import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Footer } from '../pages/Marketing';
import { useIsMobile } from '../hooks/useMediaQuery';

interface InfoPageProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaTo?: string;
}

export function InfoPage({
  eyebrow,
  title,
  lede,
  children,
  ctaLabel = 'Start my inspection →',
  ctaTo = '/app',
}: InfoPageProps) {
  const isMobile = useIsMobile();
  const container = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: isMobile ? '0 20px' : '0 40px',
  } as const;

  return (
    <>
      <Nav />
      <section
        style={{
          paddingTop: isMobile ? 100 : 160,
          paddingBottom: isMobile ? 40 : 64,
          background:
            'radial-gradient(ellipse at 70% 0%, var(--accent-glow) 0%, transparent 45%), var(--bg-0)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={container}>
          <div className="eyebrow" style={{ marginBottom: 20, color: 'var(--accent)' }}>
            ● {eyebrow}
          </div>
          <h1
            style={{
              fontSize: isMobile ? 36 : 56,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 700,
              maxWidth: 820,
            }}
          >
            {title}
          </h1>
          {lede && (
            <p
              style={{
                fontSize: isMobile ? 16 : 18,
                color: 'var(--fg-1)',
                marginTop: isMobile ? 20 : 24,
                maxWidth: 640,
              }}
            >
              {lede}
            </p>
          )}
        </div>
      </section>

      <section style={{ padding: isMobile ? '48px 0 64px' : '80px 0 96px' }}>
        <div style={container}>{children}</div>
      </section>

      <section
        style={{
          padding: isMobile ? '48px 0' : '64px 0',
          background: 'var(--bg-1)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: isMobile ? 24 : 32,
              letterSpacing: '-0.02em',
              maxWidth: 560,
              marginBottom: 16,
            }}
          >
            Ready to walk your delivery?
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              to={ctaTo}
              className="btn btn--primary"
              style={{ padding: '14px 22px', fontSize: 14 }}
            >
              {ctaLabel}
            </Link>
            <Link to="/" className="btn" style={{ padding: '14px 22px', fontSize: 14 }}>
              Back to home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <div style={{ marginBottom: isMobile ? 48 : 64 }}>
      {eyebrow && (
        <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>
          ● {eyebrow}
        </div>
      )}
      {title && (
        <h2
          style={{
            fontSize: isMobile ? 24 : 32,
            letterSpacing: '-0.02em',
            marginBottom: isMobile ? 16 : 24,
            maxWidth: 760,
          }}
        >
          {title}
        </h2>
      )}
      <div style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg-1)' }}>{children}</div>
    </div>
  );
}

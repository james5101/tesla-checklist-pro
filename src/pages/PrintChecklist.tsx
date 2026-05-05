import { Link } from 'react-router-dom';
import { CATEGORIES, ITEMS } from '../data/checklist';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';
import logoMark from '../assets/logo-mark.svg';

export default function PrintChecklist() {
  useSeo({
    title: 'Tesla Delivery Checklist PDF — Free Printable 147-Point Inspection',
    description:
      'Download or print the free 147-point Tesla delivery inspection checklist. Covers exterior, paint, wheels, electrical, interior, software, and documents.',
    canonical: 'https://teslachecklistpro.com/print',
  });

  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Screen-only toolbar */}
      <div
        className="no-print"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'var(--bg-1)',
          borderBottom: '1px solid var(--line)',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 16px' : '0 24px',
          gap: 16,
          flexShrink: 0,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: 13,
            color: 'var(--fg-1)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            whiteSpace: 'nowrap',
          }}
        >
          ← Back
        </Link>
        <div style={{ width: 1, height: 24, background: 'var(--line)', flexShrink: 0 }} />
        {!isMobile && (
          <span style={{ fontSize: 13, color: 'var(--fg-1)' }}>
            Tesla Delivery Checklist · 147 items · 7 categories
          </span>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span
            style={{
              fontSize: 12,
              color: 'var(--fg-2)',
              fontFamily: 'var(--font-mono)',
              display: isMobile ? 'none' : undefined,
            }}
          >
            Ctrl+P → Save as PDF
          </span>
          <button
            className="btn btn--primary"
            style={{ fontSize: 13, padding: '8px 16px' }}
            onClick={() => window.print()}
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Print content */}
      <div
        className="print-content"
        style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: isMobile ? '24px 16px 64px' : '40px 32px 80px',
          width: '100%',
        }}
      >
        {/* Document header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 28,
            paddingBottom: 20,
            borderBottom: '2px solid var(--fg-2)',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 10,
              }}
            >
              <img src={logoMark} width="18" height="18" alt="" />
              <span style={{ fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                TESLACHECKLISTPRO.COM
              </span>
            </div>
            <h1
              style={{
                fontSize: isMobile ? 20 : 26,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: 6,
                fontFamily: 'var(--font-sans)',
                textTransform: 'none',
              }}
            >
              Tesla Delivery Inspection Checklist
            </h1>
            <p style={{ fontSize: 12, color: 'var(--fg-2)', fontFamily: 'var(--font-mono)' }}>
              147 items · 7 categories · free at teslachecklistpro.com
            </p>
          </div>

          {/* Fill-in fields */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              minWidth: isMobile ? '100%' : 220,
            }}
          >
            {['Date', 'VIN', 'Model', 'Delivery advisor'].map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    fontSize: 11,
                    color: 'var(--fg-2)',
                    fontFamily: 'var(--font-mono)',
                    minWidth: 88,
                    textAlign: 'right',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    flex: 1,
                    height: 1,
                    borderBottom: '1px solid var(--fg-2)',
                    minWidth: 100,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legend (screen only) */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            marginBottom: 24,
            padding: '10px 14px',
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderRadius: 2,
            fontSize: 12,
            color: 'var(--fg-2)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: 'var(--fg-1)' }}>
            Bring this to your delivery appointment.
          </span>
          <span
            style={{
              display: 'flex',
              gap: 16,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              marginLeft: 'auto',
            }}
          >
            <span>OK = pass</span>
            <span style={{ color: 'var(--warn)' }}>NOTE = flag</span>
            <span style={{ color: 'var(--danger)' }}>REJ = reject</span>
          </span>
        </div>

        {/* Categories and items */}
        {CATEGORIES.map((cat, catIdx) => (
          <div
            key={cat.id}
            style={{ marginBottom: catIdx < CATEGORIES.length - 1 ? 32 : 16 }}
          >
            {/* Category header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
                marginBottom: 8,
                paddingBottom: 6,
                borderBottom: '1px solid var(--line)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--fg-3)',
                  letterSpacing: '0.08em',
                  minWidth: 20,
                }}
              >
                {String(catIdx + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                {cat.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--fg-3)',
                  marginLeft: 'auto',
                }}
              >
                {cat.count} items
              </span>
            </div>

            {/* Items */}
            {(ITEMS[cat.id] || []).map((item, itemIdx) => (
              <div
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '48px 1fr 80px' : '60px 1fr 92px',
                  gap: '0 10px',
                  alignItems: 'start',
                  padding: '6px 0',
                  borderBottom:
                    itemIdx < (ITEMS[cat.id] || []).length - 1
                      ? '1px solid var(--line-soft)'
                      : 'none',
                }}
              >
                {/* Item ID */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--fg-3)',
                    paddingTop: 2,
                  }}
                >
                  {item.id}
                </span>

                {/* Title + spec */}
                <div>
                  <div style={{ fontSize: 12, lineHeight: 1.4, marginBottom: 1 }}>
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: 'var(--fg-2)',
                      fontFamily: 'var(--font-mono)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.spec}
                  </div>
                </div>

                {/* Check boxes */}
                <div
                  style={{
                    display: 'flex',
                    gap: 4,
                    justifyContent: 'flex-end',
                    paddingTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {[
                    { label: 'OK', color: 'var(--ok)' },
                    { label: 'NOTE', color: 'var(--warn)' },
                    { label: 'REJ', color: 'var(--danger)' },
                  ].map(({ label, color }) => (
                    <span
                      key={label}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: label === 'NOTE' ? 30 : 24,
                        height: 16,
                        border: '1px solid var(--fg-3)',
                        fontSize: 8,
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--fg-3)',
                        letterSpacing: '0.04em',
                        flexShrink: 0,
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Notes section */}
        <div
          style={{
            marginTop: 32,
            paddingTop: 20,
            borderTop: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 14,
            }}
          >
            Notes / issues to discuss with advisor
          </div>
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid var(--line)',
                height: 28,
                marginBottom: 6,
              }}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 32,
            paddingTop: 12,
            borderTop: '1px solid var(--line-soft)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 10,
            color: 'var(--fg-3)',
            fontFamily: 'var(--font-mono)',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          <span>teslachecklistpro.com</span>
          <span>Not a warranty or guarantee. Use alongside official Tesla documentation.</span>
        </div>
      </div>
    </div>
  );
}

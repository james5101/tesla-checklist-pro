import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';
import {
  ACCESSORIES,
  SKIP_LIST,
  EXCLUDED,
  INTRO,
  FITMENT_WARNING,
  CYBERTRUCK_CALLOUT,
  FTC_DISCLOSURE,
  LAST_UPDATED,
  type Accessory,
  type Citation,
  type ModelId,
  type SkipItem,
} from '../data/accessories';

const CATEGORY_LABELS: Record<Accessory['category'], string> = {
  charging: 'Charging',
  exterior: 'Exterior protection',
  interior: 'Interior protection',
  organization: 'Organization',
  safety: 'Safety & emergency',
};

const MODEL_LABELS: Record<ModelId, string> = {
  'model-s': 'S',
  'model-3': '3',
  'model-x': 'X',
  'model-y': 'Y',
  cybertruck: 'CT',
};

function modelsText(models: Accessory['models']): string {
  if (models === 'all') return 'All models';
  return `Model ${models.map((m) => MODEL_LABELS[m]).join(' · ')}`;
}

function SourcesList({ sources }: { sources: Citation[] }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: '8px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {sources.map((s) => (
        <li key={s.url} style={{ fontSize: 12, lineHeight: 1.5 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--fg-2)',
              marginRight: 8,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {s.source}
          </span>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--fg-1)', textDecoration: 'underline' }}
          >
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function CalloutCard({
  kind,
  eyebrow,
  children,
}: {
  kind: 'accent' | 'warning' | 'muted';
  eyebrow: string;
  children: React.ReactNode;
}) {
  const borderColor =
    kind === 'accent' ? 'var(--accent)' : kind === 'warning' ? 'var(--danger)' : 'var(--line)';
  const eyebrowColor =
    kind === 'accent' ? 'var(--accent)' : kind === 'warning' ? 'var(--danger)' : 'var(--fg-2)';
  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        borderLeftWidth: 3,
        background: 'var(--bg-1)',
        padding: 20,
        marginBottom: 24,
      }}
    >
      <div
        className="eyebrow"
        style={{
          color: eyebrowColor,
          marginBottom: 8,
          fontSize: 11,
        }}
      >
        ● {eyebrow}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--fg-1)' }}>{children}</div>
    </div>
  );
}

function AccessoryCard({ item, index }: { item: Accessory; index: number }) {
  const isMobile = useIsMobile();
  return (
    <article
      style={{
        border: '1px solid var(--line)',
        background: 'var(--bg-1)',
        padding: isMobile ? 20 : 28,
        marginBottom: 16,
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 16,
          marginBottom: 8,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--fg-2)',
              letterSpacing: '0.08em',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            style={{
              fontSize: isMobile ? 18 : 20,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {item.name}
          </h3>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--accent)',
            whiteSpace: 'nowrap',
          }}
        >
          {item.priceRange}
        </span>
      </div>

      {/* Meta row: category + models */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          fontSize: 11,
          fontFamily: 'var(--font-mono)',
          color: 'var(--fg-2)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: 16,
        }}
      >
        <span>{CATEGORY_LABELS[item.category]}</span>
        <span>·</span>
        <span>{modelsText(item.models)}</span>
      </div>

      {/* Blurb */}
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.65,
          color: 'var(--fg-1)',
          margin: 0,
        }}
      >
        {item.blurb}
      </p>

      {/* Affiliate CTA */}
      {item.affiliate && (
        <div style={{ marginTop: 16 }}>
          <a
            href={item.affiliate.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn btn--primary"
            style={{ fontSize: 13, padding: '10px 18px', display: 'inline-flex' }}
          >
            Shop on Amazon →
          </a>
        </div>
      )}

      {/* Model-specific note, if any */}
      {item.modelNote && (
        <div
          style={{
            marginTop: 16,
            padding: '12px 14px',
            background: 'var(--bg-2)',
            borderLeft: '2px solid var(--fg-2)',
            fontSize: 13,
            lineHeight: 1.55,
            color: 'var(--fg-1)',
          }}
        >
          <span style={{ color: 'var(--fg-2)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
            FITMENT ·{' '}
          </span>
          {item.modelNote}
        </div>
      )}

      {/* Add-on, if any */}
      {item.addon && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            background: 'var(--bg-2)',
            border: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 12,
              marginBottom: 8,
              flexWrap: 'wrap',
            }}
          >
            <strong style={{ fontSize: 14 }}>{item.addon.name}</strong>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--accent)',
              }}
            >
              {item.addon.priceRange}
            </span>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: 'var(--fg-1)' }}>
            {item.addon.blurb}
          </p>
          <div
            style={{
              fontSize: 13,
              marginTop: 8,
              color: 'var(--fg-1)',
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                color: 'var(--fg-2)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginRight: 8,
              }}
            >
              Brands
            </span>
            {item.addon.brands.join(' · ')}
          </div>
          <SourcesList sources={item.addon.sources} />
        </div>
      )}

      {/* Skip-if */}
      <div
        style={{
          marginTop: 16,
          padding: '12px 14px',
          borderLeft: '2px solid var(--accent)',
          background: 'var(--bg-0)',
          fontSize: 13,
          lineHeight: 1.55,
        }}
      >
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
          SKIP IF ·{' '}
        </span>
        {item.skipIf}
      </div>

      {/* Sources */}
      <details style={{ marginTop: 16 }}>
        <summary
          style={{
            cursor: 'pointer',
            fontSize: 12,
            fontFamily: 'var(--font-mono)',
            color: 'var(--fg-2)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Forum sources ({item.sources.length})
        </summary>
        <SourcesList sources={item.sources} />
      </details>
    </article>
  );
}

function SkipCard({ item, index }: { item: SkipItem; index: number }) {
  const isMobile = useIsMobile();
  return (
    <article
      style={{
        border: '1px solid var(--line)',
        borderLeft: '3px solid var(--danger)',
        background: 'var(--bg-1)',
        padding: isMobile ? 20 : 24,
        marginBottom: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--danger)',
            letterSpacing: '0.08em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3
          style={{
            fontSize: isMobile ? 16 : 18,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          {item.name}
        </h3>
      </div>

      <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
        <div>
          <span
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              color: 'var(--fg-2)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginRight: 8,
            }}
          >
            Why it's pushed
          </span>
          <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item.whyPushed}</span>
        </div>
        <div>
          <span
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              color: 'var(--danger)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginRight: 8,
            }}
          >
            Why owners skip
          </span>
          <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item.whyOwnersSkip}</span>
        </div>
      </div>

      <details style={{ marginTop: 12 }}>
        <summary
          style={{
            cursor: 'pointer',
            fontSize: 12,
            fontFamily: 'var(--font-mono)',
            color: 'var(--fg-2)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Forum sources ({item.sources.length})
        </summary>
        <SourcesList sources={item.sources} />
      </details>
    </article>
  );
}

export default function Accessories() {
  const isMobile = useIsMobile();

  // Schema.org ItemList — populated for later, harmless under noindex.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tesla delivery-day accessories — curated short list',
    description:
      'Eight Tesla accessories backed by at least two independent owner-forum threads each. Plus five commonly marketed items owners say to skip.',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: ACCESSORIES.length,
    itemListElement: ACCESSORIES.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        category: CATEGORY_LABELS[item.category],
        brand: item.brands.map((b) => ({ '@type': 'Brand', name: b })),
      },
    })),
  };

  useSeo({
    title: 'Tesla delivery-day accessories — the short, honest list',
    description:
      "Eight accessories worth buying before delivery, sourced from TMC and Cybertruck Owners Club forums. Plus five commonly pushed items owners say to skip. No listicle padding, no invented recommendations.",
    canonical: 'https://teslachecklistpro.com/tesla-delivery-day-accessories',
    jsonLd,
  });

  return (
    <InfoPage
      eyebrow="ACCESSORIES"
      title={
        <>
          Tesla delivery-day accessories.
          <br />
          <span style={{ color: 'var(--accent)' }}>Eight items. No padding.</span>
        </>
      }
      lede={INTRO}
    >
      {/* FTC + fitment notice — single compact bar */}
      <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 32 }}>
        <span style={{ color: 'var(--fg-1)' }}>Affiliate disclosure:</span> {FTC_DISCLOSURE}{' '}
        <span style={{ color: 'var(--warn)' }}>Fitment note:</span> {FITMENT_WARNING}
      </p>

      <Section
        eyebrow={`${ACCESSORIES.length} RECOMMENDED`}
        title="What we'd actually buy — and why."
      >
        <div style={{ marginTop: 16 }}>
          {ACCESSORIES.map((item, i) => (
            <AccessoryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={`${SKIP_LIST.length} COMMONLY PUSHED · SKIP`}
        title="What we'd skip — with receipts."
      >
        <div style={{ marginTop: 16 }}>
          {SKIP_LIST.map((item, i) => (
            <SkipCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </Section>

      {/* Editorial detail — collapsed by default, present for SEO */}
      <details style={{ marginTop: 48, borderTop: '1px solid var(--line)', paddingTop: 32 }}>
        <summary
          style={{
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--fg-2)',
            userSelect: 'none',
          }}
        >
          Cybertruck note · Excluded items · Methodology
        </summary>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Cybertruck</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}>{CYBERTRUCK_CALLOUT}</p>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Investigated but excluded</div>
            <div style={{ border: '1px solid var(--line)', background: 'var(--bg-1)' }}>
              {EXCLUDED.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    padding: isMobile ? '12px 16px' : '14px 20px',
                    borderBottom: i < EXCLUDED.length - 1 ? '1px solid var(--line)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
                    gap: isMobile ? 4 : 24,
                    fontSize: 13,
                    lineHeight: 1.55,
                  }}
                >
                  <strong style={{ fontSize: 13 }}>{item.name}</strong>
                  <span style={{ color: 'var(--fg-2)' }}>{item.reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Methodology</div>
            <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0 }}>
              Every item cites at least 2 independent owner-forum threads. Sources are TMC,
              r/TeslaLounge, Cybertruck Owners Club, and Tesla Owners Online. Vendor blogs were used
              to find candidates, never as evidence. List refreshed every 6 months.{' '}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)' }}>
                Last updated: {LAST_UPDATED}
              </span>
            </p>
          </div>
        </div>
      </details>
    </InfoPage>
  );
}

import { useEffect, useRef } from 'react';

/**
 * Google AdSense display slot.
 *
 * The global loader (adsbygoogle.js) is included once in index.html. This
 * component renders a single <ins> ad unit and fires (adsbygoogle).push({})
 * exactly once per mount. It guards against:
 *
 * - React StrictMode double-invocation in dev (push would throw "already
 *   have ads in this page" on the second call).
 * - SPA route changes re-pushing a slot that's already been filled.
 *
 * Usage:
 *   <AdSlot slotId="7278772135" />
 *
 * Design-system notes:
 * - We can't style the ad creative itself, but we wrap it in a bordered
 *   container that respects --line / --bg-1 so the slot reads as part of
 *   the page in both standard and cyber themes even before the ad loads.
 * - A small monospace "SPONSORED" eyebrow matches the page voice and
 *   satisfies FTC/AdSense labeling conventions.
 */
interface AdSlotProps {
  slotId: string;
  /** Override the default min-height (prevents CLS before the ad renders). */
  minHeight?: number;
  /** Disable the "SPONSORED" eyebrow label. Default false. */
  hideLabel?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const CLIENT_ID = 'ca-pub-4516282104867030';

export function AdSlot({ slotId, minHeight = 280, hideLabel = false }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense throws on duplicate pushes, blocked scripts, or crawlers
      // that never loaded the library. All are safe to swallow.
    }
  }, []);

  return (
    <div
      style={{
        margin: '48px 0',
        padding: '20px',
        border: '1px solid var(--line)',
        background: 'var(--bg-1)',
        minHeight,
      }}
    >
      {!hideLabel && (
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--fg-2)',
            letterSpacing: '0.08em',
            marginBottom: 12,
          }}
        >
          SPONSORED
        </div>
      )}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

import type { ReactNode } from 'react';

export type SourceTag = 'TMC' | 'CTOC' | 'TOO' | 'Reddit' | 'Tesla' | 'SpeakEV' | 'Other';

export interface Citation {
  title: string;
  url: string;
  source: SourceTag;
}

/**
 * Compact source-tag + link pair, rendered as a single line.
 * Used in long-form articles where each section ends with a
 * collapsible "Sources" list.
 */
export function CitationLink({ citation }: { citation: Citation }) {
  return (
    <li style={{ fontSize: 13, lineHeight: 1.55, marginBottom: 4 }}>
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
        {citation.source}
      </span>
      <a
        href={citation.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--fg-1)', textDecoration: 'underline' }}
      >
        {citation.title}
      </a>
    </li>
  );
}

/**
 * Wrapper for a list of citations. Render inside a <details> element
 * to keep the article scannable — readers who want receipts can expand.
 */
export function Sources({ children, label }: { children: ReactNode; label?: string }) {
  return (
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
        {label ?? 'Forum sources'}
      </summary>
      <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>{children}</ul>
    </details>
  );
}

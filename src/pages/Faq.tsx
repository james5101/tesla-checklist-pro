import { useState } from 'react';
import { InfoPage } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
  {
    q: 'Is TeslaChecklistPro affiliated with Tesla?',
    a: 'No. We have no relationship with Tesla, Inc. We are an independent, owner-built tool for people taking delivery of a new Tesla. Tesla trademarks and model names are used for descriptive and editorial purposes only.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. The 147-point checklist, PDF export, notes, and every per-model page are free with no signup. We may add optional paid features later (photo storage, premium directories) but the core inspection tool will stay free.',
  },
  {
    q: 'Do I need an account?',
    a: "No. There's no login, no email required, no user tracking. Your inspection lives in your browser's local storage until you clear it.",
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. Once the app loads, the inspection works entirely in your browser with no network needed. Delivery bays are notorious for bad cell reception — the app is built to handle it.',
  },
  {
    q: 'Where is my inspection data stored?',
    a: "In your browser only. Nothing is sent to our servers because we don't have any user-data servers. Clear your browser storage and the session is gone.",
  },
  {
    q: 'What does "pass", "flag", and "skip" mean?',
    a: 'Pass = item is correct and meets spec. Flag = you found a defect (add a note describing what). Skip = you could not or did not check the item (out of scope, not applicable, not equipped). Every item starts as unchecked.',
  },
  {
    q: "What if my advisor won't accept the PDF?",
    a: "They don't have to — but in most states, you are legally allowed to refuse delivery for defects present at time of sale, and the PDF creates a dated record of what you found. If they refuse to document an issue you flagged, politely decline to sign until a manager or regional specialist arrives.",
  },
  {
    q: 'What models are covered?',
    a: 'Model S, Model 3, Model Y, Model X, and Cybertruck. The 147-point core list covers items common to all five. Model-specific pages highlight what owners flag most on each.',
  },
  {
    q: 'Can I use this on a used Tesla handover?',
    a: "Yes, though private used sales usually include stronger \"as-is\" language. Going through a Tesla Used Inventory (TUI) purchase? That's still covered by the new-vehicle-style delivery process and this checklist applies.",
  },
  {
    q: 'Can I install it as an app on my phone?',
    a: 'Yes — it works as a Progressive Web App. On iPhone, tap the share icon in Safari and choose "Add to Home Screen." On Android, Chrome will offer to install it automatically. It runs offline once installed.',
  },
  {
    q: 'Why 147 points?',
    a: "That's the size of the curated list after four years of pulling recurring issues from TeslaMotorsClub, r/TeslaLounge, the Cybertruck Owners Club, and InsideEVs delivery reports. It's comprehensive without being padding — every item is there because multiple owners have reported catching it at delivery.",
  },
  {
    q: 'How do I suggest a new item or report a mistake?',
    a: 'The /owners page has our current feedback channel. Corrections are reviewed weekly. Model-year changes (like Highland and Juniper refreshes) are prioritized.',
  },
];

function FaqItem({ q, a, open, onToggle }: QA & { open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '20px 0',
          background: 'transparent',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          color: 'var(--fg-0)',
          fontFamily: 'inherit',
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 500 }}>{q}</span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: 'var(--accent)',
            flexShrink: 0,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 180ms cubic-bezier(0.2,0,0,1)',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p style={{ padding: '0 0 20px', fontSize: 14, color: 'var(--fg-1)', lineHeight: 1.65 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  useSeo({
    title: 'FAQ — Tesla delivery inspection checklist questions',
    description:
      'Common questions about the TeslaChecklistPro delivery inspection: what it costs, what it covers, offline use, PDF export, and how advisors handle flagged items.',
    canonical: 'https://teslachecklistpro.com/faq',
    jsonLd,
  });

  return (
    <InfoPage
      eyebrow="FAQ"
      title={
        <>
          Questions we get <span style={{ color: 'var(--accent)' }}>before delivery day.</span>
        </>
      }
      lede="Everything you'd want to know before you trust a 147-point inspection with the most expensive thing you'll buy this year."
    >
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {FAQS.map((f, i) => (
          <FaqItem
            key={f.q}
            q={f.q}
            a={f.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </InfoPage>
  );
}

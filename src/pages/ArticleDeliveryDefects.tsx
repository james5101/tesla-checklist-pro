import { Link } from 'react-router-dom';
import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';
import { CitationLink, Sources, type Citation } from '../components/Citations';

const PUBLISHED = '2026-05-01';
const UPDATED = '2026-05-01';

// ───────────────────────────────────────────────────────────────────
// Citation banks — grouped by topic so each section's <details> only
// shows its own receipts, keeping the page scannable.
// ───────────────────────────────────────────────────────────────────

const refuseAcceptCites: Citation[] = [
  {
    source: 'TMC',
    title: 'Refusing / Declining Delivery — practical mechanics',
    url: 'https://teslamotorsclub.com/tmc/threads/refusing-declining-delivery.220496/',
  },
  {
    source: 'TMC',
    title: 'What happens if you reject a Tesla at delivery?',
    url: 'https://teslamotorsclub.com/tmc/threads/what-happens-if-you-reject-a-tesla-at-delivery.163221/',
  },
  {
    source: 'TMC',
    title: 'Warning about accepting delivery — accepted defects later marked "in spec"',
    url: 'https://teslamotorsclub.com/tmc/threads/warning-about-accepting-delivery.203345/',
  },
  {
    source: 'TOO',
    title: 'Unable to take Model Y delivery — quality issues, OP refused successfully',
    url: 'https://www.teslaownersonline.com/threads/unable-to-take-model-y-delivery-quality-issues.16271/',
  },
  {
    source: 'TMC',
    title: 'Refused Delivery Today — case study where refusal may have been excessive',
    url: 'https://teslamotorsclub.com/tmc/threads/refused-delivery-today.196258/',
  },
  {
    source: 'CTOC',
    title: 'Can I cancel and refuse on delivery day? — current-era mechanics',
    url: 'https://www.cybertruckownersclub.com/forum/threads/can-i-cancel-and-refuse-on-delivery-day.11393/',
  },
];

const windowCites: Citation[] = [
  {
    source: 'Tesla',
    title: 'Taking Delivery — official Tesla support page',
    url: 'https://www.tesla.com/support/taking-delivery',
  },
  {
    source: 'Tesla',
    title: 'After Taking Delivery — official Tesla support page',
    url: 'https://www.tesla.com/support/after-taking-delivery',
  },
  {
    source: 'TMC',
    title: '3 days / 100 miles to address cosmetic issues',
    url: 'https://teslamotorsclub.com/tmc/threads/3-days-100-miles-to-address-cosmetic-issues.180155/',
  },
  {
    source: 'TMC',
    title: '72 hours to report issues??!!',
    url: 'https://teslamotorsclub.com/tmc/threads/72-hours-to-report-issues.133459/',
  },
  {
    source: 'TMC',
    title: 'Questions about issues reported AFTER 1 week / 100 miles',
    url: 'https://teslamotorsclub.com/tmc/threads/questions-about-what-to-do-about-issues-reported-after-delivery-within-1-week-100-miles.328611/',
  },
  {
    source: 'TMC',
    title: 'Model 3 collection — 100 miles to report (UK perspective)',
    url: 'https://teslamotorsclub.com/tmc/threads/model-3-collection-paint-issues-scratches-stone-chips-etc-you-have-100-miles-to-report.163706/',
  },
];

const dueBillCites: Citation[] = [
  {
    source: 'TMC',
    title: 'Due Bill — what it is and how owners use it',
    url: 'https://teslamotorsclub.com/tmc/threads/due-bill.130433/',
  },
  {
    source: 'TMC',
    title: 'Delivery Issues — Due Bill document?',
    url: 'https://teslamotorsclub.com/tmc/threads/delivery-issues-due-bill-document.129549/',
  },
  {
    source: 'TMC',
    title: 'Delivery Due Bill legal obligations?',
    url: 'https://teslamotorsclub.com/tmc/threads/delivery-due-bill-legal-obligations.159252/',
  },
  {
    source: 'TOO',
    title: 'MY — Delivery Issues — Paint Inclusion (mixed outcome)',
    url: 'https://www.teslaownersonline.com/threads/my-delivery-issues-paint-inclusion.28867/',
  },
  {
    source: 'TOO',
    title: 'Due List repairs — M3 at body shop for 20 days and counting',
    url: 'https://www.teslaownersonline.com/threads/due-list-repairs-m3-at-body-shop-for-20-days-and-counting-is-this-the-norm.7191/',
  },
  {
    source: 'TOO',
    title: 'Service Centers wants to paint entire frontend — when a fix is worse',
    url: 'https://www.teslaownersonline.com/threads/service-centers-wants-to-paint-entire-frontend.9163/',
  },
];

const escalationCites: Citation[] = [
  {
    source: 'TMC',
    title: 'Tesla Service — Post Delivery patterns',
    url: 'https://teslamotorsclub.com/tmc/threads/tesla-service-post-delivery.197586/',
  },
  {
    source: 'TMC',
    title: 'How to escalate an issue to Tesla\'s executive team?',
    url: 'https://teslamotorsclub.com/tmc/threads/how-to-escalate-an-issue-to-teslas-executive-team.95289/',
  },
  {
    source: 'TMC',
    title: 'No Response from Executive Escalation',
    url: 'https://teslamotorsclub.com/tmc/threads/no-response-from-executive-escalation.131775/',
  },
  {
    source: 'TMC',
    title: 'Issue related to car delivery — owner-circulated escalation contacts',
    url: 'https://teslamotorsclub.com/tmc/threads/issue-related-to-car-delivery-anyone-have-escalation-contact-information.295167/',
  },
  {
    source: 'TMC',
    title: 'Can Tesla mobile service fix this panel gap?',
    url: 'https://teslamotorsclub.com/tmc/threads/can-tesla-mobile-service-fix-this-panel-gap.268256/',
  },
];

const documentationCites: Citation[] = [
  {
    source: 'CTOC',
    title: 'Found damage right after delivery — documentation save',
    url: 'https://www.cybertruckownersclub.com/forum/threads/found-damage-right-after-delivery.19578/',
  },
  {
    source: 'TMC',
    title: 'Issues reporting delivery defects via the app',
    url: 'https://teslamotorsclub.com/tmc/threads/issues-reporting-delivery-defects-via-the-app.168281/',
  },
];

const tolerancesCites: Citation[] = [
  {
    source: 'TMC',
    title: 'Model Y delivery panel gaps',
    url: 'https://teslamotorsclub.com/tmc/threads/model-y-delivery-panel-gaps.341657/',
  },
  {
    source: 'TMC',
    title: 'Panel Gap — is this within spec?',
    url: 'https://teslamotorsclub.com/tmc/threads/panel-gap-is-this-within-spec.244814/',
  },
  {
    source: 'TOO',
    title: 'Time limit on fixing panel gaps?',
    url: 'https://www.teslaownersonline.com/threads/time-limit-on-fixing-panel-gaps.7051/',
  },
];

const caseStudyCites: Citation[] = [
  {
    source: 'TOO',
    title: 'Case 1 (ideal refusal): Unable to take Model Y delivery — quality issues',
    url: 'https://www.teslaownersonline.com/threads/unable-to-take-model-y-delivery-quality-issues.16271/',
  },
  {
    source: 'TOO',
    title: 'Case 2 (mixed): MY Delivery Issues — Paint Inclusion',
    url: 'https://www.teslaownersonline.com/threads/my-delivery-issues-paint-inclusion.28867/',
  },
  {
    source: 'TMC',
    title: 'Case 3 (bad): Warning about accepting delivery',
    url: 'https://teslamotorsclub.com/tmc/threads/warning-about-accepting-delivery.203345/',
  },
];

// ───────────────────────────────────────────────────────────────────

export default function ArticleDeliveryDefects() {
  const isMobile = useIsMobile();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tesla delivery defects — what to do when you find one',
    description:
      'A practical guide for what to do when delivery-day inspection finds a defect: refuse vs accept, due bills, escalation paths, the 100-mile / 24-hour folklore vs Tesla policy.',
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { '@type': 'Organization', name: 'TeslaChecklistPro' },
    publisher: {
      '@type': 'Organization',
      name: 'TeslaChecklistPro',
      url: 'https://teslachecklistpro.com',
    },
    mainEntityOfPage: 'https://teslachecklistpro.com/tesla-delivery-defects-what-to-do',
  };

  useSeo({
    title: 'Tesla delivery defects — what to do when you find one',
    description:
      'Refuse vs accept, due bills in writing, escalation paths, and the truth about the 100-mile / 24-hour rule. Forum-cited guidance for delivery day.',
    canonical: 'https://teslachecklistpro.com/tesla-delivery-defects-what-to-do',
    jsonLd,
  });

  return (
    <InfoPage
      eyebrow="DELIVERY GUIDE"
      title={
        <>
          You found a defect at delivery.
          <br />
          <span style={{ color: 'var(--accent)' }}>Now what?</span>
        </>
      }
      lede="The 147-point inspection just turned up something. Here's the decision framework owners on TeslaMotorsClub, Tesla Owners Online, and Cybertruck Owners Club arrived at after thousands of delivery-defect threads — refuse vs accept, due bills, escalation, and the parts of the process Tesla doesn't publish."
    >
      {/* Quick decision — top-of-page punch */}
      <Section eyebrow="THE SHORT VERSION" title="Refuse, accept-with-due-bill, or accept-with-warranty.">
        <p>
          Three outcomes are possible the moment you find a defect on the lot. The right one depends on
          three questions, in order:
        </p>
        <ol style={{ marginTop: 12, paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <strong>Is the defect structural or safety-related?</strong> Frame, suspension, glass,
            airbags, seat-belt anchors, missing hardware. If yes, refuse. Don't negotiate.
          </li>
          <li>
            <strong>Is the defect cosmetic and isolated?</strong> One paint inclusion, one piece of
            misaligned trim, one scuffed wheel. If yes, accept with a written due bill — verbal
            promises don't survive the service-advisor handoff.
          </li>
          <li>
            <strong>Is the defect mechanical or software?</strong> A button that doesn't work, a
            sensor fault, a glitchy screen. Accept. The basic vehicle warranty covers it regardless of
            any "delivery window," and trying to fight for cosmetic-window treatment of a warranty
            item wastes leverage.
          </li>
        </ol>
        <p style={{ marginTop: 16 }}>
          The rest of this article is the why behind each step, the receipts to back it up, and the
          parts that are folklore vs the parts that are documented.
        </p>
      </Section>

      {/* Refuse vs accept */}
      <Section eyebrow="DECISION 1" title="Refuse delivery, or accept and fix later.">
        <p>
          The dominant forum position, repeated across hundreds of threads, is to refuse delivery if
          the defect list is anything more than minor. The reason is leverage: once you tap "Accept"
          in the Tesla app, the delivery advisor's authority disappears, the service center becomes
          gatekeeper, and "in spec" is the answer that closes most disputes.
        </p>
        <p style={{ marginTop: 12 }}>
          But refusal isn't free. Owners who refused report VIN-reassignment delays of days to weeks,
          and the next car isn't guaranteed to be better. The regret threads are quieter than the
          righteous-refusal threads — selection bias is real.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 16,
            marginTop: 20,
          }}
        >
          <div
            style={{
              border: '1px solid var(--line)',
              borderLeftWidth: 3,
              borderLeftColor: 'var(--danger)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--danger)',
                marginBottom: 8,
                letterSpacing: '0.06em',
              }}
            >
              ● REFUSE
            </div>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              <li>Damage is structural or safety-related.</li>
              <li>A defect requires repaint of a large panel.</li>
              <li>Multiple unrelated defects (5+ issues).</li>
              <li>Anything Tesla can later argue you caused — chips, scuffs, cracked glass.</li>
            </ul>
          </div>
          <div
            style={{
              border: '1px solid var(--line)',
              borderLeftWidth: 3,
              borderLeftColor: 'var(--accent)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--accent)',
                marginBottom: 8,
                letterSpacing: '0.06em',
              }}
            >
              ● ACCEPT WITH WRITTEN DUE BILL
            </div>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              <li>Single, clearly cosmetic issue.</li>
              <li>Software or menu glitches (always post-delivery anyway).</li>
              <li>Missing accessories — key cards, mats, J1772 adapter.</li>
              <li>Alignment that service can adjust without bodywork.</li>
            </ul>
          </div>
        </div>

        <p style={{ marginTop: 20 }}>
          The honest counterpoint: for a single cosmetic issue, a written due bill plus a same-week
          service appointment often gets the same outcome as refusal with less pain. Refusal is the
          strong move when the defect list is long or structural.
        </p>

        <Sources>
          {refuseAcceptCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* The 100-mile / 24-hour window */}
      <Section eyebrow="THE 100-MILE / 24-HOUR RULE" title="Folklore that's mostly true, but isn't Tesla policy.">
        <p>
          You'll see it everywhere: "Tesla gives you 100 miles or 24 hours to report cosmetic
          defects." Some forums say 72 hours. Some say 3 days. UK threads say a week. The numbers
          contradict each other, and Tesla's published support pages — as of this article's research
          pass — don't state any specific window in numeric form.
        </p>
        <p style={{ marginTop: 12 }}>
          So what's actually true? <strong>Tesla advisors honor a discovery window in practice.</strong>{' '}
          Mechanical and electrical defects are warranty items regardless of any window — the basic
          vehicle warranty covers them. The "window" that owners are talking about applies specifically
          to cosmetic items that Tesla can otherwise classify as wear-and-tear: paint chips, surface
          scratches, paint inclusions, scuffed trim. Photos taken before any window expires remain
          admissible in any later dispute, even if Tesla refuses to schedule service inside it.
        </p>
        <p style={{ marginTop: 12 }}>
          Treat the rule as: <em>document everything immediately</em>. Don't assume a specific
          number. The clock — when it exists — is reported to start at the timestamp on the app's
          "Accept Delivery" tap, not at first drive.
        </p>

        <div
          style={{
            border: '1px solid var(--line)',
            borderLeft: '3px solid var(--accent)',
            background: 'var(--bg-1)',
            padding: 16,
            marginTop: 16,
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          <strong>Three things this rule does not do:</strong>
          <ul style={{ paddingLeft: 18, margin: '8px 0 0' }}>
            <li>It does not bar warranty claims for mechanical defects after 100 miles.</li>
            <li>It does not bar you from documenting now and pursuing later.</li>
            <li>It does not exist in writing on tesla.com — it's an advisor practice, not a policy.</li>
          </ul>
        </div>

        <Sources>
          {windowCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Due bills */}
      <Section eyebrow="DUE BILLS" title="Written, emailed, itemized — or it didn't happen.">
        <p>
          A due bill is a documented record of specific defects Tesla has agreed to fix after you take
          delivery. It functions as Tesla's written acknowledgement that the listed items are not
          wear-and-tear, and it prevents a service advisor from later claiming the damage is yours.
        </p>
        <p style={{ marginTop: 12 }}>
          The single most important fact about due bills, from a thousand forum threads:{' '}
          <strong>verbal promises do not survive the handoff to the service center.</strong> "We'll
          take care of it" and "I'll add that too" are not enforceable. The advisor who said them is
          not the person scheduling your service appointment three weeks later.
        </p>

        <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8 }}>What a due bill covers</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>Anything visible and documented at delivery — paint chips, scratches, trim, missing items.</li>
          <li>Items the advisor adds to the bill in Tesla's internal system before you sign.</li>
          <li>Items emailed back to you from a tesla.com address, not a personal address.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8 }}>What a due bill does not cover</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>Issues service later deems "in spec" — panel gaps under their internal tolerance, paint blemishes below an unstated size threshold.</li>
          <li>Anything not listed line by line. "Take care of the paint, generally" is not an item.</li>
          <li>Mechanical issues discovered after delivery — those go through normal warranty channels.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 24, marginBottom: 8 }}>How to get one in writing</h3>
        <ol style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>List every defect on paper at the lot, before signing anything.</li>
          <li>Ask the advisor to add each one to the due bill in Tesla's system.</li>
          <li>
            Ask them to email you a copy from their tesla.com address before you drive away. If they
            will only verbally promise, do not accept — either refuse delivery, or photograph
            everything and email the advisor and the local service center yourself the same day,
            with the email subject line stating it is a due-bill request.
          </li>
        </ol>

        <p style={{ marginTop: 16 }}>
          Owner experiences with follow-through are mixed but predictably so. Successes are reported
          when the bill is itemized, written, and emailed. Failures are reported when the advisor
          said something verbal and nothing was logged in the system.
        </p>

        <Sources>
          {dueBillCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Escalation paths */}
      <Section eyebrow="ESCALATION" title="Lot advisor, service center, support, executive review.">
        <p>
          The escalation ladder has four rungs, each with sharply different leverage. Use them in
          order — skipping rungs is a common mistake that costs time.
        </p>

        <div
          style={{
            display: 'grid',
            gap: 12,
            marginTop: 16,
            gridTemplateColumns: '1fr',
          }}
        >
          {[
            {
              n: 1,
              label: 'Lot advisor',
              text: "Has the most leverage at the moment of delivery — can add items to a due bill, hold the car, escalate to a delivery manager on the spot. Loses almost all leverage once you sign and drive away. Use this rung first, before the keys are in your hand.",
            },
            {
              n: 2,
              label: 'Local service center',
              text: 'Schedules the actual repairs. Service advisors are the gatekeepers who will say "in spec" or "wear and tear" if your due bill is not airtight. A common pattern: try a second service center if the first refuses. Different SCs reach different verdicts on the same defect.',
            },
            {
              n: 3,
              label: 'Tesla support (phone, chat, app)',
              text: 'Useful for paper-trail purposes and for re-routing when a service center has declined. Less useful as a decision-maker — phone and chat support typically cannot override a service advisor\'s "in spec" call.',
            },
            {
              n: 4,
              label: 'Executive escalation',
              text: 'Tesla\'s app has an "Escalate this concern for executive review" feature on the support form. Forum sentiment on its effectiveness is mixed at best. Owners on TMC mention various Tesla email addresses in circulation, but Tesla does not publish them and replies are inconsistent. Treat this as a low-probability tool, not a guaranteed channel.',
            },
          ].map((rung) => (
            <div
              key={rung.n}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '32px 1fr' : '32px 180px 1fr',
                gap: 16,
                padding: '16px 18px',
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent)',
                  fontSize: 14,
                }}
              >
                0{rung.n}
              </span>
              <strong style={{ fontSize: 15 }}>{rung.label}</strong>
              {!isMobile && <span style={{ fontSize: 14, lineHeight: 1.6 }}>{rung.text}</span>}
              {isMobile && (
                <span
                  style={{
                    gridColumn: '1 / -1',
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginTop: 4,
                  }}
                >
                  {rung.text}
                </span>
              )}
            </div>
          ))}
        </div>

        <p style={{ marginTop: 16, fontSize: 14, color: 'var(--fg-2)' }}>
          Realistic timelines (forum-reported, wide variance by region): mobile-service items, 1–2
          weeks. Service-center bodywork (paint, alignment), 2–6 weeks with in-and-out cycles.
          Executive escalation responses range from 24 hours to never.
        </p>

        <Sources>
          {escalationCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Documentation */}
      <Section eyebrow="DOCUMENTATION" title="Photograph everything. Email yourself. App second.">
        <p>
          The single highest-leverage move at the lot is a continuous video walkaround before signing,
          combined with photos of every panel — including the ones you don't think have problems. The
          photos that prove a panel was <em>not</em> damaged at delivery matter as much as the photos
          that prove damage. They establish the baseline.
        </p>

        <h3 style={{ fontSize: 18, marginTop: 20, marginBottom: 8 }}>Photo discipline</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>Shoot in daylight or under bright, even artificial light. Showroom lighting hides paint defects; sun reveals them.</li>
          <li>For each defect: one wide shot showing the panel, one medium shot with a finger or key as scale, one close-up.</li>
          <li>Walk the entire car and shoot every panel, even the ones that look clean.</li>
          <li>Record a continuous video walkaround at the lot before signing.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 20, marginBottom: 8 }}>Written records</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>Time-stamped notes for every conversation — who said what, when. The advisor's name and the time of the verbal promise.</li>
          <li>A single dated email to yourself summarizing the day creates an admissible timeline.</li>
          <li>Save the due bill as a PDF and email it to a personal address, not just the Tesla account.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 20, marginBottom: 8 }}>App vs paper trail</h3>
        <p>
          Tesla's official path is the app's Service section. Use it — it creates a Tesla-side
          record. But also email the delivery advisor and the local service center with the same
          content. The app's records have been reported lost or overwritten in TMC threads; email is
          your backup.
        </p>

        <Sources>
          {documentationCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Live-with-it */}
      <Section eyebrow="HONESTLY" title="Some defects are 'live with it.' Tesla won't fix everything.">
        <p>
          Setting that expectation up front respects the reader. Not every defect is going to get
          fixed, and some shouldn't be — a fix can be worse than the defect when it requires
          aftermarket repaint of a large panel.
        </p>

        <h3 style={{ fontSize: 18, marginTop: 20, marginBottom: 8 }}>Routinely fixed without a fight</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>Software anomalies and menu glitches — almost always fixed by an OTA or a quick service appointment.</li>
          <li>Missing accessories (charger cable, key cards, floor mats) — service centers ship these reliably.</li>
          <li>Wheel alignment, steering wheel off-center.</li>
          <li>Door and frunk alignment when clearly out of spec.</li>
          <li>Single discrete paint chips from transit, when documented at delivery and added to a due bill.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 20, marginBottom: 8 }}>Routinely refused as "in spec"</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>
            Panel gaps within Tesla's internal tolerance. Tesla does not publish a public number;
            owner reports converge on roughly 4 mm as a common threshold below which service will
            decline to adjust. Treat that as folklore, not policy.
          </li>
          <li>Tiny paint inclusions and orange peel — often refused unless above an unstated size threshold.</li>
          <li>Headlight condensation — Tesla's stance is this is normal venting unless water pools.</li>
          <li>Faint interior trim grain mismatches between adjacent panels.</li>
        </ul>

        <h3 style={{ fontSize: 18, marginTop: 20, marginBottom: 8 }}>The cosmetic / functional / structural ladder</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.65 }}>
          <li>
            <strong>Cosmetic</strong> — paint, trim, alignment. Due-bill territory, time-windowed.
          </li>
          <li>
            <strong>Functional</strong> — button doesn't work, sensor faults, screen glitches.
            Covered by basic vehicle warranty regardless of any delivery window. Don't waste
            negotiating energy on these — accept and book service.
          </li>
          <li>
            <strong>Structural</strong> — frame, suspension, glass, airbags. Refuse delivery. Do
            not negotiate.
          </li>
        </ul>

        <Sources>
          {tolerancesCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Three case studies */}
      <Section eyebrow="THREE STORIES" title="An ideal refusal, a mixed acceptance, and a regret thread.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
          <article
            style={{
              border: '1px solid var(--line)',
              borderLeft: '3px solid var(--ok, #4ade80)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-2)',
                marginBottom: 8,
                letterSpacing: '0.08em',
              }}
            >
              CASE 1 · IDEAL REFUSAL
            </div>
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>Model Y refusal that worked</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              The owner arrived for a Model Y delivery and found a clear dent on the driver's-side
              fender, misaligned roof glass, and a poorly-touched-up scratch on a door edge. They
              listed every issue, photographed each one, and refused delivery on the spot — without
              negotiating. Tesla put them back in the queue and assigned a new VIN. The takeaway:
              clear-cut refusal for multiple, photographable defects works. Don't negotiate. List,
              photograph, refuse, leave.
            </p>
          </article>

          <article
            style={{
              border: '1px solid var(--line)',
              borderLeft: '3px solid var(--accent)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-2)',
                marginBottom: 8,
                letterSpacing: '0.08em',
              }}
            >
              CASE 2 · MIXED OUTCOME
            </div>
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>Paint inclusion accepted with a due bill</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Several minor cosmetic issues, all listed on a written due bill. Most were fixed at the
              first service appointment. The paint inclusion was deemed in-spec at service and not
              repaired. The takeaway: a due bill works for most items, but it does not bind the
              service center to fix every line item. "In spec" can still trump the due bill — and on
              a paint inclusion, accepting a full repaint as the alternative is sometimes the worse
              outcome.
            </p>
          </article>

          <article
            style={{
              border: '1px solid var(--line)',
              borderLeft: '3px solid var(--danger)',
              background: 'var(--bg-1)',
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-2)',
                marginBottom: 8,
                letterSpacing: '0.08em',
              }}
            >
              CASE 3 · STONEWALLED
            </div>
            <h3 style={{ fontSize: 17, marginBottom: 8 }}>Accepted with verbal promises only</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              The owner accepted delivery on the back of verbal-only promises that the issues would
              be addressed. At the service appointment, items were marked in-spec or wear-and-tear.
              Nothing was repaired. The thread title is itself the warning. The takeaway: verbal due
              bills are worth nothing. The single highest-leverage moment in the entire process is
              the minute before you tap "Accept" in the app.
            </p>
          </article>
        </div>

        <Sources>
          {caseStudyCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* Self-pickup era note */}
      <Section eyebrow="2024+ NOTE" title="The self-pickup era changes the math.">
        <p>
          Tesla's delivery process has shifted significantly toward self-pickup with no advisor
          present at many locations as of 2024–2026. Older 2018–2020 forum threads describe an
          in-person walkthrough that often no longer happens. The implication: in the self-pickup
          era, you are your own advisor, and the documentation work falls entirely on you before you
          tap "Accept" in the app. The escalation rungs above still apply — but rung 1 (lot advisor)
          may simply not exist for your appointment. Plan your inspection accordingly.
        </p>
      </Section>

      {/* Cross-links */}
      <Section eyebrow="RELATED" title="Read next.">
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <Link to="/inspection" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              The 147-point inspection
            </Link>{' '}
            — the walkthrough this article is the sequel to.
          </li>
          <li>
            <Link
              to="/tesla-delivery-day-timeline"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Tesla delivery day timeline
            </Link>{' '}
            — what happens before, during, and after the appointment.
          </li>
          <li>
            <Link
              to="/whats-included-with-new-tesla"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              What's actually included with a new Tesla
            </Link>{' '}
            — useful when "missing accessories" is the defect you found.
          </li>
        </ul>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--fg-2)' }}>
          Last updated: <span style={{ fontFamily: 'var(--font-mono)' }}>{UPDATED}</span>.
        </p>
      </Section>
    </InfoPage>
  );
}

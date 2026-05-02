import { Link } from 'react-router-dom';
import { InfoPage, Section } from '../components/InfoPage';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';
import { CitationLink, Sources, type Citation } from '../components/Citations';

const PUBLISHED = '2026-05-01';
const UPDATED = '2026-05-01';

// ───────────────────────────────────────────────────────────────────
// Citation banks per phase
// ───────────────────────────────────────────────────────────────────

const phase1Cites: Citation[] = [
  {
    source: 'TMC',
    title: 'VIN to Delivery Time (2024–2026)',
    url: 'https://teslamotorsclub.com/tmc/threads/vin-to-delivery-time.294012/',
  },
  {
    source: 'TMC',
    title: 'When VIN is assigned how long before delivery',
    url: 'https://teslamotorsclub.com/tmc/threads/when-vin-is-assigned-how-long-before-delivery.243781/',
  },
  {
    source: 'CTOC',
    title: 'How long between VIN assignment and getting delivery date?',
    url: 'https://www.cybertruckownersclub.com/forum/threads/how-long-between-vin-assignment-and-getting-delivery-date.21618/',
  },
  {
    source: 'TMC',
    title: 'Tesla canceled order after VIN is assigned',
    url: 'https://teslamotorsclub.com/tmc/threads/tesla-canceled-order-after-vin-is-assigned.277952/',
  },
  {
    source: 'TOO',
    title: 'Order to delivery timeline Model Y in US',
    url: 'https://www.teslaownersonline.com/threads/order-to-delivery-timeline-model-y-in-us.26115/',
  },
  {
    source: 'TMC',
    title: 'Waiting Room: NEW Model Y (Juniper) — 2025–2026 wait windows',
    url: 'https://teslamotorsclub.com/tmc/threads/waiting-room-new-model-y-aka-juniper.343257/',
  },
];

const phase2Cites: Citation[] = [
  {
    source: 'TMC',
    title: 'Pay before delivery date?',
    url: 'https://teslamotorsclub.com/tmc/threads/pay-before-delivery-date.330238/',
  },
  {
    source: 'TMC',
    title: 'Pay on delivery day after inspection?',
    url: 'https://teslamotorsclub.com/tmc/threads/pay-on-delivery-day-after-inspection.302907/',
  },
  {
    source: 'TMC',
    title: 'Please pay off your remaining balance prior to delivery — meaning?',
    url: 'https://teslamotorsclub.com/tmc/threads/please-pay-off-your-remaining-balance-prior-to-delivery-meaning.237314/',
  },
  {
    source: 'CTOC',
    title: 'Don\'t pay Tesla until after your truck has been delivered',
    url: 'https://www.cybertruckownersclub.com/forum/threads/dont-pay-tesla-until-after-your-truck-has-been-delivered-to-your-local-tesla-service-center.18166/',
  },
  {
    source: 'CTOC',
    title: 'Must I pay before I can schedule delivery?',
    url: 'https://www.cybertruckownersclub.com/forum/threads/must-i-pay-before-i-can-schedule-delivery.12862/',
  },
];

const phase3Cites: Citation[] = [
  {
    source: 'TOO',
    title: 'Can I reschedule my delivery once the date is set?',
    url: 'https://www.teslaownersonline.com/threads/can-i-reschedule-my-delivery-once-the-delivery-date-is-set.17795/',
  },
  {
    source: 'TMC',
    title: 'No Delivery Appointments Available — automated SMS pressure',
    url: 'https://teslamotorsclub.com/tmc/threads/no-delivery-appointments-available.281052/',
  },
  {
    source: 'TMC',
    title: 'Home delivery or pickup',
    url: 'https://teslamotorsclub.com/tmc/threads/home-delivery-or-pickup.209248/',
  },
  {
    source: 'TMC',
    title: 'Beware of home delivery option!',
    url: 'https://teslamotorsclub.com/tmc/threads/beware-of-home-delivery-option.216799/',
  },
  {
    source: 'CTOC',
    title: 'Delivery appointment times keeps changing',
    url: 'https://www.cybertruckownersclub.com/forum/threads/delivery-appointment-times-keeps-changing.23981/',
  },
];

const phase4Cites: Citation[] = [
  {
    source: 'TMC',
    title: 'How long does the delivery appointment take?',
    url: 'https://teslamotorsclub.com/tmc/threads/how-long-does-the-delivery-appointment-take.74346/',
  },
  {
    source: 'TMC',
    title: 'What happens at the delivery appointment?',
    url: 'https://teslamotorsclub.com/tmc/threads/what-happens-at-the-delivery-appointment.146399/',
  },
  {
    source: 'TMC',
    title: 'Delivery Day Inspection and Payment Process — how to do it right',
    url: 'https://teslamotorsclub.com/tmc/threads/delivery-day-inspection-and-payment-process-how-to-do-it-right.234300/',
  },
  {
    source: 'TMC',
    title: 'Can I inspect interior before accepting delivery?',
    url: 'https://teslamotorsclub.com/tmc/threads/can-i-inspect-interior-before-accepting-delivery.296009/',
  },
  {
    source: 'CTOC',
    title: 'Tesla delivery experience is subpar — current-era hub variability',
    url: 'https://www.cybertruckownersclub.com/forum/threads/tesla-delivery-experience-is-subpar.28601/',
  },
];

const phase5Cites: Citation[] = [
  {
    source: 'TMC',
    title: 'Unable to set up phone as key',
    url: 'https://teslamotorsclub.com/tmc/threads/unable-to-set-up-phone-as-key.272442/',
  },
  {
    source: 'TMC',
    title: 'Unable to charge at supercharger — first-charge gotchas',
    url: 'https://teslamotorsclub.com/tmc/threads/unable-to-charge-at-supercharger.318831/',
  },
  {
    source: 'CTOC',
    title: "Can't add my phone as a key",
    url: 'https://www.cybertruckownersclub.com/forum/threads/can%E2%80%99t-add-my-phone-as-a-key.21571/',
  },
  {
    source: 'Tesla',
    title: 'Sentry Mode — Model 3 owner\'s manual',
    url: 'https://www.tesla.com/ownersmanual/model3/en_us/GUID-56703182-8191-4DAE-AF07-2FDC0EB64663.html',
  },
];

const phase6Cites: Citation[] = [
  {
    source: 'TOO',
    title: 'How is everyone getting their state plates and final paperwork?',
    url: 'https://www.teslaownersonline.com/threads/how-is-everyone-getting-their-state-plates-and-final-paperwork.10060/',
  },
  {
    source: 'TMC',
    title: 'Took delivery 12/24 but still no license plate',
    url: 'https://teslamotorsclub.com/tmc/threads/took-delivery-12-24-but-still-no-license-plate.296508/',
  },
  {
    source: 'TMC',
    title: 'PSA: Keep bugging them for permanent plates',
    url: 'https://teslamotorsclub.com/tmc/threads/psa-if-you-still-havent-received-your-permanent-plates-keep-bugging-them-about-it.262658/',
  },
  {
    source: 'TOO',
    title: 'No temporary tag after 5 days of delivery',
    url: 'https://www.teslaownersonline.com/threads/no-temporary-tag-after-5-days-of-delivery.27306/',
  },
];

const dontTellYouCites: Citation[] = [
  {
    source: 'TMC',
    title: 'DMV Paperwork Incorrect at delivery — odometer discrepancy',
    url: 'https://teslamotorsclub.com/tmc/threads/dmv-paperwork-incorrect-at-delivery.224072/',
  },
  {
    source: 'TMC',
    title: 'Has anyone had to reject a car?',
    url: 'https://teslamotorsclub.com/tmc/threads/has-anyone-had-to-reject-a-car.239933/',
  },
  {
    source: 'TMC',
    title: 'Delivery date in app and misled by sales',
    url: 'https://teslamotorsclub.com/tmc/threads/delivery-date-in-app-and-misled-by-sales.338526/',
  },
];

// ───────────────────────────────────────────────────────────────────
// Phases
// ───────────────────────────────────────────────────────────────────

interface Phase {
  num: number;
  title: string;
  windowLabel: string;
  body: string;
  cites: Citation[];
}

const PHASES: Phase[] = [
  {
    num: 1,
    title: 'Order placed → VIN assigned',
    windowLabel: 'Order date → Tesla matches a built (or about-to-be-built) car',
    body:
      'When Tesla matches a built or near-built car to your order, your account shows a 17-character VIN and the app populates "Vehicle Details." Until then, you only have a delivery estimate window — usually a 2-to-4-week range that can shift in either direction. Owners report wait windows ranging from days (Bay Area) to multiple weeks (East Coast). Quote the range, not an average. VINs occasionally get re-assigned: holds for unfinalized financing or expired trade-in valuations release the original VIN, and Tesla auto-cancellation around quarter-end is a known pattern enforced unevenly.',
    cites: phase1Cites,
  },
  {
    num: 2,
    title: 'VIN assigned → final payment window',
    windowLabel: '3–7 days before the appointment, typically',
    body:
      'Tesla\'s stated guidance per support pages is to complete down payment "at least nine days before your delivery date" so wires or cashier\'s checks clear. In practice, the "complete final payment" prompt arrives in the app a few days after VIN, with a 3-to-7-day cadence before the appointment. Texas, New Mexico, Iowa, and Michigan are special cases — state law requires final payment before scheduling delivery, so the "pay after walking the car" advice in the next section does not apply to buyers in those states. Trade-in valuations expire (usually 30 days) — if your VIN slips past that, you re-submit photos and risk a lower offer.',
    cites: phase2Cites,
  },
  {
    num: 3,
    title: 'Final payment → appointment scheduling',
    windowLabel: 'A few days to two weeks',
    body:
      'A SMS or email arrives with a link; the Tesla app\'s "Schedule" or "Pre-Delivery Tasks" section shows time slots at the assigned hub. Rescheduling is self-serve in the app — open Pre-Delivery Tasks → Scheduling → Reschedule — but inside 48 hours of the appointment you have to contact a delivery advisor. Two delivery types: hub (default for customers within ~160 miles of a service center) and home (touchless drop-off for customers further out). Hub deliveries get an advisor present and time for inspection; home deliveries arrive parked in the driveway with key cards in a wallet inside the vehicle and a FedEx envelope of paperwork. The inspection is solely on you with home delivery.',
    cites: phase3Cites,
  },
  {
    num: 4,
    title: 'At the appointment',
    windowLabel: '15 minutes to 2 hours, depending on hub and effort',
    body:
      'Follow signs to the check-in area, sign available agreements, complete final payment, accept delivery in the Tesla app. In practice: a queue at the front desk, a short wait, then walked to a row of cars on the lot. Quick appointments — 15 to 30 minutes. Thorough appointments with a checklist in hand — 1 to 2 hours, in daylight. Walkthroughs vary from "advisor pointed at the car and walked away" to a full feature tour. Treat the advisor walkthrough as a courtesy, not a substitute for inspection. Bring a flashlight and painter\'s tape — lots are often shaded or under fluorescent light that hides paint defects. If you find a defect: open the delivery-defects guide linked at the end of this article.',
    cites: phase4Cites,
  },
  {
    num: 5,
    title: 'Keys in hand → first 24 hours',
    windowLabel: 'Same day, ideally',
    body:
      'Pair the phone as key (Tesla app → Set up Phone as Key → confirm pairing code). Bluetooth permission must be Always, not While Using. Pull software version from Controls → Software and compare to the build numbers being discussed in your model\'s thread on TMC the same week — some delivery cars ship a build behind. Plug into a Supercharger before going home: owners surface real billing or account issues at first use ("paid charging unavailable" errors, account-not-fully-provisioned states). Doing this on day one means you\'re still close to the hub if something is genuinely broken. Enable Sentry Mode (Controls → Safety → Sentry Mode), but expect it to disable itself when the battery falls below the configured threshold and during OTA updates.',
    cites: phase5Cites,
  },
  {
    num: 6,
    title: 'First week',
    windowLabel: 'Days 2–7 after delivery',
    body:
      'A software update is common in the first week — the car may sit unused for 1 to 3 days while it downloads and installs. Sentry must be disabled. Plan on Wi-Fi access since the OTA is gigabytes. Service routing: paint, alignment, panel-gap, and trim work go to a service center. Software, key fob, mirror replacement, and small interior fixes can use Tesla Ranger (mobile service), bookable in-app — Ranger waits are often shorter than service-center slots in busy metros. DMV / registration timing varies by state. Some examples owners report: California issues a windshield sticker before drive-off, with permanent plates taking 2 to 8 weeks; Texas paperwork arrives via FedEx and the temporary tag arrives by email 2 days post-delivery; New York and New Jersey are highly variable, with owners reporting Tesla forwarding paperwork late.',
    cites: phase6Cites,
  },
];

// ───────────────────────────────────────────────────────────────────

function PhaseCard({ phase }: { phase: Phase }) {
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
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 16,
          marginBottom: 8,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--accent)',
            letterSpacing: '0.08em',
          }}
        >
          PHASE 0{phase.num}
        </span>
        <h3 style={{ fontSize: isMobile ? 18 : 22, margin: 0 }}>{phase.title}</h3>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--fg-2)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: 12,
        }}
      >
        {phase.windowLabel}
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg-1)', margin: 0 }}>{phase.body}</p>
      <Sources>
        {phase.cites.map((c) => (
          <CitationLink key={c.url} citation={c} />
        ))}
      </Sources>
    </article>
  );
}

export default function ArticleDeliveryTimeline() {
  const isMobile = useIsMobile();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tesla delivery day timeline — VIN assigned to keys in hand',
    description:
      'Phase-by-phase timeline of a Tesla delivery — order to VIN, payment window, appointment scheduling, the appointment itself, first 24 hours, and first week. Plus what Tesla doesn\'t tell you.',
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: { '@type': 'Organization', name: 'TeslaChecklistPro' },
    publisher: {
      '@type': 'Organization',
      name: 'TeslaChecklistPro',
      url: 'https://teslachecklistpro.com',
    },
    mainEntityOfPage: 'https://teslachecklistpro.com/tesla-delivery-day-timeline',
  };

  useSeo({
    title: 'Tesla delivery day timeline — VIN assigned to keys in hand',
    description:
      'Six-phase timeline from order to first week — what to expect, what to do, and what Tesla doesn\'t tell you about the delivery process.',
    canonical: 'https://teslachecklistpro.com/tesla-delivery-day-timeline',
    jsonLd,
  });

  return (
    <InfoPage
      eyebrow="DELIVERY GUIDE"
      title={
        <>
          Tesla delivery day timeline.
          <br />
          <span style={{ color: 'var(--accent)' }}>VIN assigned to keys in hand.</span>
        </>
      }
      lede="Tesla communicates the delivery process unevenly — by SMS, in-app prompts, an advisor message thread, and the order page that updates without warning. This is the full timeline owners on TMC, Tesla Owners Online, and Cybertruck Owners Club describe consistently across thousands of recent deliveries. Six phases, what to expect at each, and what Tesla isn't telling you."
    >
      {/* Phases */}
      <Section eyebrow="THE SIX PHASES" title="From order placed to a week post-delivery.">
        <p style={{ marginBottom: 24 }}>
          Tesla’s process is appointment-driven and app-led. The phases below describe the
          sequence the median owner reports — but timing varies by region, by quarter, and by hub.
          Quote ranges, not averages.
        </p>
        {PHASES.map((p) => (
          <PhaseCard key={p.num} phase={p} />
        ))}
      </Section>

      {/* What Tesla doesn't tell you — the differentiator */}
      <Section eyebrow="THE DIFFERENTIATOR" title="What Tesla doesn't tell you.">
        <p style={{ marginBottom: 20 }}>
          These are the eight points where forum guidance most often disagrees with Tesla’s
          stated process. Each is sourced from owner threads, not vendor blogs.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            {
              n: 1,
              title: "Don't pay before you walk the car — except in TX, NM, IA, MI.",
              body:
                "Tesla’s app and SMS prompt for \"complete payment\" days in advance, and the support copy says \"valid proof of payment is required prior to your delivery appointment.\" Forum consensus is the opposite: bring a cashier's check or wire-transfer-ready details, but only release payment after walk-around. Owners describe the appointment dynamic shifting once payment clears — advisors become noticeably less attentive. Texas, New Mexico, Iowa, and Michigan buyers can’t follow this advice because state law requires pre-payment.",
            },
            {
              n: 2,
              title: 'The "schedule by [date] or we’ll cancel" SMS is mostly automated pressure.',
              body:
                'Several threads describe the same automated text going out while no slots are available. Owners who replied through the delivery advisor (not the SMS bot) generally got the order preserved. Don’t panic-schedule into a slot that doesn’t work for you.',
            },
            {
              n: 3,
              title: 'Bring a flashlight and painter’s tape, even at a daytime appointment.',
              body:
                'Lots are often shaded or under fluorescent light that hides paint defects and panel gaps. Painter’s tape lets you flag issues without marker damage. Photograph each tape position with a number on it.',
            },
            {
              n: 4,
              title: 'Photograph the VIN plate and the odometer at zero before you sign.',
              body:
                'Mileage discrepancies on DMV paperwork are a known issue — one TMC thread documents 15 reported on paperwork against 48 actual on the FedEx packet. Your photo is your only evidence.',
            },
            {
              n: 5,
              title: 'Plug into a Supercharger before you go home.',
              body:
                'Owners surface "paid charging unavailable" and account-not-provisioned errors specifically at first use. Doing this within driving distance of the hub means a fix is one trip away, not a service ticket.',
            },
            {
              n: 6,
              title: 'Refusing delivery is allowed. Refusing twice is risky.',
              body:
                'Tesla will reassign you a new VIN if the first car has serious issues — but multiple threads describe Tesla closing or pushing back on accounts that refuse two cars in a row. Use the refusal lever once, deliberately, on issues that actually merit it (paint requiring repaint, structural damage). Smaller defects belong on a due bill.',
            },
            {
              n: 7,
              title: 'Your delivery advisor probably can’t answer FSD or warranty-edge-case questions.',
              body:
                'Forum threads repeatedly describe advisors giving inconsistent answers about FSD transferability, warranty start-date triggers, and home-charging install details. Treat the advisor as a checklist-and-keys handler, not a product expert. Save FSD and warranty questions for Tesla support chat or a service-center advisor.',
            },
            {
              n: 8,
              title: 'Home delivery removes the safety net.',
              body:
                'Touchless home drop-off has no advisor on-site to address issues. Several threads explicitly warn against home delivery for first-time Tesla buyers — the FedEx envelope, key cards, and unlocked car arrive on a day Tesla picks, and any defects you find go straight to a service appointment. If you’re within driving range of a delivery center and it’s your first Tesla, choose the hub.',
            },
          ].map((item) => (
            <div
              key={item.n}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '40px 1fr',
                gap: 16,
                padding: '16px 18px',
                background: 'var(--bg-1)',
                border: '1px solid var(--line)',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: 'var(--accent)',
                }}
              >
                0{item.n}
              </span>
              <div>
                <strong style={{ fontSize: 15, display: 'block', marginBottom: 6 }}>{item.title}</strong>
                <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <Sources>
          {dontTellYouCites.map((c) => (
            <CitationLink key={c.url} citation={c} />
          ))}
        </Sources>
      </Section>

      {/* FAQ-style quick answers */}
      <Section eyebrow="QUICK ANSWERS" title="Common questions, in one line each.">
        <div
          style={{
            border: '1px solid var(--line)',
            background: 'var(--bg-1)',
          }}
        >
          {[
            ['How long does Tesla delivery take?', '15 minutes if you’re willing; 1 to 2 hours if you inspect properly.'],
            ['How long after VIN until delivery?', 'Days to a few weeks. Bay Area customers can see VIN-to-pickup of one day; East Coast typically 1 to 2 weeks.'],
            ['What do I bring?', 'Insurance card, a payment method (release at the lot if your state allows), photo ID, a flashlight, painter’s tape, your phone for the inspection app.'],
            ['Can I refuse delivery if I find a problem?', 'Yes — Tesla reassigns a new VIN. See the delivery-defects article for refuse vs accept criteria.'],
            ['Do I need to be home for Tesla delivery?', 'For touchless home delivery, the car is parked unlocked in your driveway with paperwork in a FedEx envelope. You don’t need to be there, but most owners recommend hub pickup for the first Tesla.'],
            ['When does Tesla want final payment?', 'Tesla’s stated guidance is "at least 9 days before delivery" so wires clear. Most forum advice is to release payment after walking the car, except in TX, NM, IA, and MI.'],
            ['Can I inspect before signing?', 'Yes, and you should. Some hubs will rush you; advisors generally honor "I’d like to walk the car before tapping Accept."'],
            ['How do I reschedule a Tesla delivery?', 'In-app: Pre-Delivery Tasks → Scheduling → Reschedule. Inside 48 hours of the appointment, you have to contact a delivery advisor.'],
            ['What does VIN assigned mean?', 'Tesla matched a built or near-built car to your order. The 17-character number now appears in your account, and the app populates Vehicle Details.'],
          ].map(([q, a], i, arr) => (
            <div
              key={String(q)}
              style={{
                padding: '14px 18px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
              }}
            >
              <strong style={{ fontSize: 14, display: 'block', marginBottom: 4 }}>{q}</strong>
              <span style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55 }}>{a}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Caveats */}
      <Section eyebrow="HONEST CAVEATS" title="What this article doesn't promise.">
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <strong>Hub culture varies materially.</strong> Fremont, Burbank, Devon (PA), Mesa AZ
            are described very differently in threads — some hubs allow full pre-acceptance
            inspection, others enforce "pay first, inspect after." The variable is the local
            manager, not Tesla policy.
          </li>
          <li>
            <strong>DMV / registration timing is state-dependent.</strong> The examples in Phase 6
            are not exhaustive. Confirm with your state’s DMV before driving off.
          </li>
          <li>
            <strong>Quarter-end pressure is real.</strong> The "complete payment or we’ll
            cancel" SMS appears more aggressive in threads dated Q4. Delivery experience varies by
            what week of the quarter you take delivery.
          </li>
          <li>
            <strong>Refresh-launch waits are different.</strong> The historical "1 to 3 week"
            VIN-to-pickup rule is shaky for refresh launches — 2026 Juniper deliveries describe
            noticeably longer order-to-VIN windows than legacy Y deliveries.
          </li>
        </ul>
      </Section>

      {/* Cross-links */}
      <Section eyebrow="RELATED" title="Read next.">
        <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
          <li>
            <Link to="/inspection" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              The 147-point inspection
            </Link>{' '}
            — what to do during the walkthrough portion of the appointment.
          </li>
          <li>
            <Link
              to="/tesla-delivery-defects-what-to-do"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Tesla delivery defects — what to do when you find one
            </Link>{' '}
            — the decision framework if the inspection turns something up.
          </li>
          <li>
            <Link
              to="/whats-included-with-new-tesla"
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              What's actually included with a new Tesla
            </Link>{' '}
            — what you should and shouldn’t expect to find in the glovebox.
          </li>
        </ul>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--fg-2)' }}>
          Last updated: <span style={{ fontFamily: 'var(--font-mono)' }}>{UPDATED}</span>.
        </p>
      </Section>
    </InfoPage>
  );
}

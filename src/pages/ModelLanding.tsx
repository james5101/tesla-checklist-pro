import { Link, useParams, Navigate } from 'react-router-dom';
import { Nav, Footer } from './Marketing';
import { useSeo } from '../hooks/useSeo';
import { useIsMobile } from '../hooks/useMediaQuery';
import { ModelSilhouette } from '../components/ModelSilhouette';

interface QuickFact {
  label: string;
  value: string;
}

interface IssueItem {
  title: string;
  detail: string;
}

interface ModelCopy {
  slug: string;
  name: string;
  silhouetteId: string;
  tagline: string;
  intro: string;
  quickFacts?: QuickFact[];
  topFive?: IssueItem[];
  commonIssues: IssueItem[];
  features?: IssueItem[];
  sources: string[];
}

const MODELS: Record<string, ModelCopy> = {
  'model-s-delivery-checklist': {
    slug: 'model-s-delivery-checklist',
    name: 'Model S',
    silhouetteId: 'model-s',
    tagline: 'Plaid and Long Range delivery inspection',
    intro:
      "The refreshed Model S is Tesla's flagship sedan, and at Plaid and Long Range prices, the margin for delivery-day error is small. Yoke-adjacent trim, full-width rear glass with ceramic frit banding, the carbon-fiber dash on Plaid, HEPA-filter cabin air, and adaptive air suspension — every high-touch item needs to work on day one. This 147-point checklist covers both trims and the options that advisors occasionally ship un-toggled. Plan on 25–35 minutes.",
    quickFacts: [
      { label: 'Model year', value: '2026' },
      { label: 'Trims', value: 'Long Range · Plaid' },
      { label: 'Typical wait', value: '2–8 weeks (VIN to delivery)' },
      { label: 'Inspection time', value: '25–35 min' },
    ],
    topFive: [
      {
        title: 'Yoke (or round wheel) stitching and buttons',
        detail:
          'If you ordered the yoke, check stitching symmetry on the top and bottom grips. Horn buttons and the scroll wheels should click firmly without sticking. Round-wheel retrofits are available on some VINs — verify the correct wheel is installed.',
      },
      {
        title: 'Full-width rear glass and frit',
        detail:
          "The S's rear glass runs nearly the full roof width. Inspect the ceramic frit band at the perimeter for even alignment — an offset frit is permanent and visible from outside.",
      },
      {
        title: 'Carbon-fiber dash (Plaid)',
        detail:
          'Weave direction should match on driver and passenger sides. Clear-coat should be glassy, not orange-peeled. This is a no-rework item — Tesla will replace the entire dash trim, not refinish.',
      },
      {
        title: 'Adaptive air suspension cycling',
        detail:
          'Cycle all four ride heights from the screen and confirm the car physically changes. Listen for uneven compressor speed between front and rear.',
      },
      {
        title: 'Software entitlements + Plaid Track Mode',
        detail:
          'FSD (Supervised), Premium Connectivity, Acceleration Boost (LR only), and Plaid Track Mode if Plaid. Missing entitlements are a same-day fix at delivery, a week-long phone tree after.',
      },
    ],
    commonIssues: [
      {
        title: 'Yoke and column trim',
        detail:
          'Uneven stitching on the yoke, loose column shroud, horn buttons that stick. The column shroud clips have been reported loose on early-year builds — push firmly on the shroud and listen for a creak.',
      },
      {
        title: 'Rear glass and frit band',
        detail:
          'Ceramic frit alignment at the glass edge, headliner-to-glass gap symmetry. Sight down the glass edge from the rear quarter — the frit line should be perfectly parallel to the metal.',
      },
      {
        title: 'Carbon-fiber dash (Plaid)',
        detail:
          'Weave direction mismatch between driver and passenger sides is the single most-reported Plaid interior defect. Orange peel in the clear coat is a replacement item, not polish.',
      },
      {
        title: 'Adaptive air suspension',
        detail:
          'Cycle Low, Medium, High, and Very High modes. The car should settle smoothly at each height. A rough drop or uneven corners indicate a leaking strut — catchable in the delivery bay, miserable to diagnose later.',
      },
      {
        title: 'HEPA cabin filter / Bioweapon Defense Mode',
        detail:
          "Activate Bioweapon Defense Mode from the climate menu. You'll hear the blower ramp up — that's the HEPA stage pulling max flow. No ramp means the filter isn't installed or the mode is disabled.",
      },
      {
        title: 'Rear cargo light and power outlet',
        detail:
          'The trunk light, hatch handle, and 12V outlet in the trunk all get skipped during factory QC. Verify each works before you drive off.',
      },
    ],
    features: [
      {
        title: 'FSD (Supervised)',
        detail: 'Controls → Autopilot. Advisor can push entitlement if missing.',
      },
      {
        title: 'Premium Connectivity',
        detail: '30-day trial live on day one. Live traffic and satellite maps should render.',
      },
      {
        title: 'Plaid Track Mode',
        detail: 'Plaid only. Appears under Controls → Pedals & Steering. Configurable drift and regen profiles.',
      },
      {
        title: 'Adaptive air suspension',
        detail: 'Four height profiles, auto-lower at speed. Cycle each mode and save location-based presets.',
      },
      {
        title: 'Bioweapon Defense Mode',
        detail: 'Climate menu. Activates HEPA filter stage. Listen for blower ramp.',
      },
      {
        title: 'Yoke ↔ round wheel toggle',
        detail: 'If your VIN supports the round-wheel retrofit, verify the current wheel matches your order.',
      },
    ],
    sources: [
      'r/ModelS',
      'TeslaMotorsClub Model S forum',
      'InsideEVs delivery reports',
    ],
  },
  'model-3-delivery-checklist': {
    slug: 'model-3-delivery-checklist',
    name: 'Model 3',
    silhouetteId: 'model-3',
    tagline: 'Performance, Long Range, and RWD delivery inspection',
    intro:
      "The Highland refresh overhauled the interior, relocated the rear turn signals into the brake lights, removed the steering stalks, and added ventilated seats as an option. The delivery-day issue list shifted with it. Taking delivery of a 2026 RWD, Long Range RWD, Long Range AWD, or Performance? This 147-point checklist covers everything the refresh introduced plus the legacy items that still ship inconsistent. Plan on 20–30 minutes in the delivery bay before you tap 'Accept Delivery.'",
    quickFacts: [
      { label: 'Model year', value: '2026 (Highland refresh)' },
      { label: 'Trims', value: 'RWD · LR RWD · LR AWD · Performance' },
      { label: 'Typical wait', value: '2–6 weeks (VIN to delivery)' },
      { label: 'Inspection time', value: '20–30 min' },
    ],
    topFive: [
      {
        title: 'Rear turn signal visibility',
        detail:
          "Highland moved the indicator into the combined brake-light cluster. Stand behind the car in bright sunlight with the hazards on — if you can't see the amber flash from 20 feet, it's been a legitimate owner complaint since launch.",
      },
      {
        title: 'Stalk-less control calibration',
        detail:
          'Test every control that used to live on a stalk: turn signals (wheel buttons), wipers (scroll wheel + screen), PRND (touchscreen or auto-shift). Auto-shift has to correctly guess forward or reverse in a parking lot before you accept.',
      },
      {
        title: 'Frunk seal and rubber seating',
        detail:
          'Run a finger around the entire frunk rubber — if any section is sitting proud or unseated, water will find it. Close the frunk from the app and verify the latch clicks home with no second push.',
      },
      {
        title: 'Ventilated seats (if ordered)',
        detail:
          "Both driver and passenger, all three levels. Weak airflow on one side is the single most-shipped defect on Highland ventilated seats — test before you drive off.",
      },
      {
        title: 'Software entitlements',
        detail:
          'FSD (Supervised), Premium Connectivity, Acceleration Boost if ordered on LR AWD. If the screen doesn\'t show it, your advisor can push it before you leave. After that it becomes a phone call.',
      },
    ],
    commonIssues: [
      {
        title: 'Trunk and frunk alignment',
        detail:
          'Panel gap at the trunk-to-quarter-panel joint is the single most-reported Highland issue. The frunk rubber seal occasionally ships with a section unseated — run a fingernail around the full perimeter to check.',
      },
      {
        title: 'Stalk-less controls',
        detail:
          'Turn-signal buttons on the wheel should give tactile feedback. The wiper scroll on the left spoke cycles through intervals — verify every detent. PRND from the touchscreen needs auto-shift to correctly interpret your first move.',
      },
      {
        title: 'Ventilated seats',
        detail:
          'If ordered, test both driver and passenger at all three intensity levels. Weak airflow on one seat is a warranty item — catching it at delivery means a same-day fix instead of a service appointment.',
      },
      {
        title: 'Acoustic glass and cabin noise',
        detail:
          "Highland added acoustic glass to the front doors. Listen for wind noise above 60mph during the test drive — a whistle from a specific door usually means a seal is misaligned, not a broken window.",
      },
      {
        title: 'Ambient light bar',
        detail:
          'The dash-spanning light bar should illuminate evenly across all zones. Dead segments or color mismatch between driver and passenger side is a known ship defect on early Highland builds.',
      },
      {
        title: 'Tire matching',
        detail:
          'Four matching tires, same brand and model, DOT date codes within 4 weeks. No curb rash on wheels — Tesla will refuse claims after you sign, so document any damage before delivery.',
      },
    ],
    features: [
      {
        title: 'FSD (Supervised)',
        detail: 'Controls → Autopilot → Full Self-Driving Capability. Advisor can toggle if missing.',
      },
      {
        title: 'Premium Connectivity',
        detail: '30-day trial live on day one. Verify live traffic and satellite maps load.',
      },
      {
        title: 'Acceleration Boost',
        detail: 'LR AWD only. Shows under Upgrades. Software-only but must be attached before you drive off.',
      },
      {
        title: 'Ventilated seats',
        detail: 'Driver and passenger, three levels each. Test all six states before you accept.',
      },
      {
        title: 'Homelink (if ordered)',
        detail: 'VIN-specific. If the menu entry is missing, it was not installed — no retrofit at SC.',
      },
      {
        title: 'Dashcam and Sentry',
        detail: 'Format a USB drive from the screen. Confirm front, repeater, and rear cameras record.',
      },
    ],
    sources: [
      'r/TeslaModel3',
      'r/TeslaLounge',
      'TeslaMotorsClub Model 3 Highland forum',
      'InsideEVs delivery reports',
    ],
  },
  'model-x-delivery-checklist': {
    slug: 'model-x-delivery-checklist',
    name: 'Model X',
    silhouetteId: 'model-x',
    tagline: 'Plaid and Long Range delivery inspection',
    intro:
      "The X is the most complicated Tesla to inspect. Falcon-wing doors, power-folding second- and third-row seats in 5-, 6-, and 7-seat configurations, the panoramic windshield that extends back into the headliner, adaptive air suspension, and tow-capable architecture. Every one is a point of failure with well-documented delivery-day complaints. Taking delivery of a 2026 Long Range or Plaid? Plan on 35–45 minutes and bring a second person to sit in the back for door-close tests. Don't rush this one.",
    quickFacts: [
      { label: 'Model year', value: '2026' },
      { label: 'Trims', value: 'Long Range · Plaid' },
      { label: 'Typical wait', value: '4–12 weeks (VIN to delivery)' },
      { label: 'Inspection time', value: '35–45 min' },
    ],
    topFive: [
      {
        title: 'Falcon-wing doors in a tight space',
        detail:
          'Park the X with about 3 feet of vertical clearance and open both rear doors. Proximity sensors should stop short — not bump. Close each door from inside, outside, and the touchscreen. Any rubbing, hesitation, or uneven travel is a warranty item.',
      },
      {
        title: 'Panoramic windshield A-pillar edges',
        detail:
          "The panoramic windshield wraps into the roofline, and install torque can crack the glass at the A-pillar corners. Inspect both edges carefully in bright light — a stress crack is not a polish-out.",
      },
      {
        title: 'Third-row power-fold',
        detail:
          'Power-fold both third-row seats from the touchscreen. Listen for uneven motor speed between left and right — a slow motor is a known service item. Verify headrests deploy fully when the seats raise.',
      },
      {
        title: 'Seat configuration match',
        detail:
          'Confirm 5-, 6-, or 7-seat layout matches your order. A 6-seater has captain\'s chairs with a pass-through; a 7-seater has a second-row bench. Shipping the wrong config happens rarely, but the fix is a new VIN, not a swap.',
      },
      {
        title: 'Tow hitch (if ordered) + software',
        detail:
          'The physical hitch receiver should be present and the tow cover should cycle. On the screen, Tow mode should appear under Controls. Both halves have to be there — the advisor can enable software but not install hardware.',
      },
    ],
    commonIssues: [
      {
        title: 'Falcon-wing doors',
        detail:
          'Open each door in a tight space to test proximity sensors. Check seal gaps in the closed position — gaps that widen at the bottom edge indicate alignment issues that worsen over time. Close from outside, inside, and the touchscreen for every combination.',
      },
      {
        title: 'Third-row seats and second-row captain\'s chairs',
        detail:
          "Power-fold every seat that can fold. Listen for uneven motor speed. Verify headrest deployment. On 6-seaters, check captain's chair rail travel and recline range — the motors on the captain's chairs are distinct from the third-row motors and have their own ship-defect history.",
      },
      {
        title: 'Windshield and front glass',
        detail:
          'The panoramic windshield is prone to stress cracks from install torque — inspect the A-pillar edges carefully. Any crack, even hairline, is cause for rejection. Glass replacement on an X is an expensive, multi-day service.',
      },
      {
        title: 'Tow hitch and towing features',
        detail:
          'Physical hitch receiver plus software-enabled towing. If ordered, both should be present on delivery day. The trailer-braking software profile is VIN-specific — advisor can enable at delivery.',
      },
      {
        title: 'HEPA cabin filter / Bioweapon Defense Mode',
        detail:
          'Activate from the climate menu. The blower should ramp audibly. No ramp means the HEPA stage is either disabled or the filter was not installed — both warranty items.',
      },
      {
        title: 'Adaptive air suspension',
        detail:
          'Cycle all four ride heights. Listen for uneven compressor behavior. A slow-rising corner is an early leak indicator — catchable in the delivery bay, painful to diagnose later.',
      },
    ],
    features: [
      {
        title: 'FSD (Supervised)',
        detail: 'Controls → Autopilot. Advisor can push if missing.',
      },
      {
        title: 'Premium Connectivity',
        detail: '30-day trial live on day one. Live traffic and satellite maps should render.',
      },
      {
        title: 'Tow mode (if hitch ordered)',
        detail: 'Appears under Controls when hardware is present. Trailer profile setup should work on day one.',
      },
      {
        title: 'Bioweapon Defense Mode',
        detail: 'Climate menu. HEPA stage active — listen for blower ramp.',
      },
      {
        title: 'Adaptive air suspension profiles',
        detail: 'Save location-based presets (home, driveway). All four heights should cycle cleanly.',
      },
      {
        title: 'Falcon-wing door presets',
        detail: 'Height limits for low-ceiling garages should be configurable and persist across ignition cycles.',
      },
    ],
    sources: [
      'r/ModelX',
      'TeslaMotorsClub Model X forum',
      'InsideEVs delivery reports',
    ],
  },
  'model-y-delivery-checklist': {
    slug: 'model-y-delivery-checklist',
    name: 'Model Y',
    silhouetteId: 'model-y',
    tagline: 'Performance, Long Range, and RWD delivery inspection',
    intro:
      "The Model Y is one of the best-selling cars globally, which also makes it the Tesla with the most delivery-day issues reported to owner forums. Taking delivery of a 2026 RWD, Long Range, or Performance — all on the Juniper refresh platform? This checklist walks every panel, seal, software entitlement, and option item Tesla inspectors sometimes miss — built from complaints posted to r/TeslaModelY, r/TeslaLounge, and the TeslaMotorsClub Y forum. Plan on 20–30 minutes in the delivery bay before you tap 'Accept Delivery.'",
    quickFacts: [
      { label: 'Model year', value: '2026 (Juniper refresh)' },
      { label: 'Trims', value: 'RWD · Long Range AWD · Performance' },
      { label: 'Typical wait', value: '2–6 weeks (VIN to delivery)' },
      { label: 'Inspection time', value: '20–30 min' },
    ],
    topFive: [
      {
        title: 'Tailgate and hatch panel gaps',
        detail:
          'The single most-flagged Y issue on owner forums. Walk the full tailgate perimeter under direct light before you even open a door.',
      },
      {
        title: 'Paint under direct light',
        detail:
          'Tesla\'s paint shop runs hot. Y quarter panels are prone to orange peel and thin mid-panel coverage — worth a second pass with a flashlight.',
      },
      {
        title: 'Second-row bench and power-fold',
        detail:
          'Power-fold each side of the 60/40 bench from the touchscreen. Listen for motor lag or uneven travel. Check that the seatback returns fully upright and latches — a soft latch is a warranty item, not a feature.',
      },
      {
        title: 'Tire condition — all four',
        detail:
          'Ys sometimes ship with visible inner-edge feathering from factory transit. Check tread depth and DOT date codes on every tire, not just the fronts.',
      },
      {
        title: 'Software entitlements on the screen',
        detail:
          'FSD (Supervised), Premium Connectivity, Acceleration Boost — if it\'s ordered but not showing, your advisor can push it before you leave. After you drive off it becomes a phone call.',
      },
    ],
    commonIssues: [
      {
        title: 'Hatch and tailgate alignment',
        detail:
          'Uneven gap between tailgate and quarter panel is the #1 community complaint. Open and close the hatch five times, watch for paint rub at the corners, and run a fingernail along the water channel — you\'re feeling for a smooth, unbroken seal.',
      },
      {
        title: 'Rear seat latches',
        detail:
          'The 60/40 fold latches should pop cleanly with one pull. If you have to jiggle, that\'s a warranty item. Listen for a metallic rattle when they re-seat — it means the detent isn\'t fully engaged.',
      },
      {
        title: 'Headliner and D-pillar trim',
        detail:
          'Headliner-to-pillar gap should be under 1mm and even left-to-right. Push-pin clips on the D-pillar sometimes ship unseated, which causes a flapping noise on the highway above 60mph.',
      },
      {
        title: 'Tire matching and wear',
        detail:
          'All four tires should be the same brand and model, with DOT date codes within 4 weeks of each other. Feathering on the inner edges usually means the Y sat at an odd angle during transit — Tesla will rotate or replace if you catch it at delivery.',
      },
      {
        title: 'Charge port door and LED ring',
        detail:
          'Cycle the port three times from the screen and three times from the app. Inspect LED ring consistency — dead segments are a known issue on early Juniper builds.',
      },
      {
        title: 'Cargo cover and rear shelf hooks',
        detail:
          'The 2026 Y introduced new rear shelf anchor points. All four should click firmly. Missing or cracked anchors get swapped under warranty, not warranty-exception.',
      },
    ],
    features: [
      {
        title: 'FSD (Supervised)',
        detail:
          'Controls → Autopilot → Full Self-Driving Capability. If ordered but missing, the advisor toggles it on the spot.',
      },
      {
        title: 'Premium Connectivity',
        detail:
          '30-day trial should be live day one. Confirm live traffic visualization and satellite maps render.',
      },
      {
        title: 'Acceleration Boost',
        detail:
          'LR AWD only. Shows under Upgrades. Software-only, but has to be attached to your VIN before you leave.',
      },
      {
        title: 'Seat heaters — front and rear',
        detail:
          'Test all three intensity levels on each of the four heated seats before the cabin warms enough to mask a weak element.',
      },
      {
        title: 'Homelink (if ordered)',
        detail:
          'VIN-specific option. If the menu item doesn\'t appear, it wasn\'t installed at the factory — Tesla will not retrofit at the service center.',
      },
      {
        title: 'Dashcam and Sentry storage',
        detail:
          'Insert a USB drive and format from the screen. Confirm recording starts on the front, repeater, and rear cameras.',
      },
    ],
    sources: [
      'r/TeslaModelY',
      'r/TeslaLounge',
      'TeslaMotorsClub Model Y forum',
      'InsideEVs delivery reports',
    ],
  },
  'cybertruck-delivery-checklist': {
    slug: 'cybertruck-delivery-checklist',
    name: 'Cybertruck',
    silhouetteId: 'cybertruck',
    tagline: 'Cyberbeast and AWD delivery inspection',
    intro:
      "The Cybertruck is unlike any other Tesla to inspect. Bonded stainless panels that can't be refinished, a frunk drainage system that early owners flagged for pooling, wider panel-gap tolerances than any other Tesla, and steer-by-wire with no mechanical backup. This checklist adds Cybertruck-specific items on top of the standard 147 points. Walking it takes 30–45 minutes — longer than any other Tesla — and worth every minute. You can't undo signing.",
    quickFacts: [
      { label: 'Model year', value: '2026' },
      { label: 'Trims', value: 'AWD · Cyberbeast' },
      { label: 'Typical wait', value: '4–12 weeks (VIN to delivery)' },
      { label: 'Inspection time', value: '30–45 min' },
    ],
    topFive: [
      {
        title: 'Stainless panels under direct light',
        detail:
          'Walk every panel in bright, raking light before you open a door. Stainless cannot be refinished — any gouge, scratch, or dent you find after signing is yours forever. This is the single most important check on the truck.',
      },
      {
        title: 'Panel-gap consistency',
        detail:
          "CT gaps run wider than other Teslas — 4–6mm is within spec. What you're looking for is consistency along a single seam, not absolute size. A gap that opens from 4mm at one end to 9mm at the other is a rejection-worthy finding.",
      },
      {
        title: 'Frunk seal and drain channels',
        detail:
          'Known community issue: water pooling in the frunk after rain. Pour a cup of water into each drain channel and confirm it exits cleanly. Inspect the seal lip for uneven compression.',
      },
      {
        title: 'Steer-by-wire feel',
        detail:
          'Yoke response has no mechanical backup — calibration is everything. Test low-speed parking feel, centering after a full turn, and the transition from stopped to rolling. Any lag or off-center return is a warranty item.',
      },
      {
        title: 'Vault outlets and Powershare',
        detail:
          'Plug a resistive load (hair dryer, heater) into the 120V and 240V bed outlets and verify each delivers. Powershare bidirectional charging should enumerate in the app before you drive off.',
      },
    ],
    commonIssues: [
      {
        title: 'Stainless panel gaps and gouges',
        detail:
          'Inspect every seam in bright light. Stainless cannot be refinished like paint — gouges are permanent. Document anything you find with time-stamped photos before you sign — Tesla will refuse cosmetic claims after acceptance.',
      },
      {
        title: 'Frunk water intrusion',
        detail:
          'Multiple owner reports of pooling after rain. Check drain channels are clear, seal is seated, and weep holes at the bottom corners are open. If the truck sat in the rain before delivery, ask to see inside the frunk.',
      },
      {
        title: 'Steer-by-wire calibration',
        detail:
          "Low-speed yoke response, parking-lot feel, centering after a turn. The rear-wheel-steering calibration shifts with the front yoke — test a tight parking-lot U-turn and confirm the truck tracks where you'd expect.",
      },
      {
        title: 'Vault cover, outlets, and tonneau',
        detail:
          'Power-retractable tonneau cycles full travel both directions. 120V and 240V outlets live under load. Bed lighting segments all illuminate. Tailgate power-drop behaves predictably at every angle.',
      },
      {
        title: 'Accelerator pedal pad',
        detail:
          "Early builds were subject to a physical recall (pedal pad could dislodge). Your VIN should already have the remediated hardware — confirm the pedal feels firm and doesn't shift under your foot. Verify against NHTSA recalls by VIN before signing.",
      },
      {
        title: 'Light bar and full-width signatures',
        detail:
          'Front and rear light bars should animate smoothly on unlock. Dead segments are a known ship defect on early VINs. Turn signals should sweep evenly across the full bar length.',
      },
    ],
    features: [
      {
        title: 'FSD (Supervised)',
        detail: 'Controls → Autopilot. Cybertruck got FSD later than other models — verify your build supports it.',
      },
      {
        title: 'Premium Connectivity',
        detail: '30-day trial live on day one. Live traffic and satellite maps should render.',
      },
      {
        title: 'Off-road and Baja modes',
        detail: 'Cycle Off-Road, Overland, and Baja modes from the screen. Air suspension should physically raise.',
      },
      {
        title: 'Tow mode and hitch calibration',
        detail: 'If hitch ordered, Tow mode should appear and the truck should prompt for trailer dimensions.',
      },
      {
        title: 'Powershare (bidirectional)',
        detail: 'The Powershare app flow should enumerate your truck. Requires the home hardware or a compatible mobile connector.',
      },
      {
        title: 'Sentry and Dashcam',
        detail: 'USB drive formats from the screen. Confirm all cameras record — front, repeaters, rear.',
      },
    ],
    sources: [
      'Cybertruck Owners Club',
      'r/Cybertruck',
      'r/Cybertruck_Owners',
      'InsideEVs Cybertruck reports',
    ],
  },
};

const LEGACY_REDIRECTS: Record<string, string> = {
  'model-s': 'model-s-delivery-checklist',
  'model-3': 'model-3-delivery-checklist',
  'model-x': 'model-x-delivery-checklist',
  'model-y': 'model-y-delivery-checklist',
  cybertruck: 'cybertruck-delivery-checklist',
};

export default function ModelLanding() {
  const { slug } = useParams<{ slug: string }>();
  if (slug && LEGACY_REDIRECTS[slug]) {
    return <Navigate to={`/${LEGACY_REDIRECTS[slug]}`} replace />;
  }
  const model = slug ? MODELS[slug] : undefined;
  if (!model) return <Navigate to="/" replace />;
  return <ModelLandingContent model={model} />;
}

function ModelLandingContent({ model }: { model: ModelCopy }) {
  const isMobile = useIsMobile();
  const title = `${model.name} delivery checklist — 147 points to inspect before you sign`;
  const description = `${model.name} delivery inspection checklist: 147 points sourced from owner forums. Covers ${model.tagline}. Free PDF export, no signup.`;
  const canonical = `https://teslachecklistpro.com/${model.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${model.name} Delivery Inspection`,
    description,
    totalTime: 'PT30M',
    step: (model.topFive ?? model.commonIssues).map((issue, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: issue.title,
      text: issue.detail,
    })),
  };

  useSeo({ title, description, canonical, jsonLd });

  const container = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: isMobile ? '0 20px' : '0 40px',
  } as const;

  return (
    <>
      <Nav />
      <section
        style={{
          paddingTop: isMobile ? 100 : 160,
          paddingBottom: isMobile ? 48 : 80,
          background:
            'radial-gradient(ellipse at 70% 0%, var(--accent-glow) 0%, transparent 45%), var(--bg-0)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={container}>
          <div className="eyebrow" style={{ marginBottom: 24, color: 'var(--accent)' }}>
            ● {model.name.toUpperCase()} · DELIVERY INSPECTION
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? 24 : 48,
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1
                style={{
                  fontSize: isMobile ? 36 : 64,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  fontWeight: 700,
                }}
              >
                {model.name} delivery
                <br />
                <span style={{ color: 'var(--accent)' }}>checklist.</span>
              </h1>
              <p
                style={{
                  fontSize: isMobile ? 15 : 18,
                  color: 'var(--fg-1)',
                  marginTop: isMobile ? 20 : 28,
                  maxWidth: 620,
                }}
              >
                {model.intro}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  marginTop: isMobile ? 24 : 36,
                  flexWrap: 'wrap',
                }}
              >
                <Link
                  to="/app"
                  className="btn btn--primary"
                  style={{ padding: '14px 22px', fontSize: 14 }}
                >
                  Start my {model.name} inspection →
                </Link>
                <Link to="/" className="btn" style={{ padding: '14px 22px', fontSize: 14 }}>
                  All models
                </Link>
              </div>
            </div>
            {!isMobile && (
              <div
                style={{
                  flexShrink: 0,
                  color: 'var(--fg-2)',
                  width: 320,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ transform: 'scale(2.2)' }}>
                  <ModelSilhouette id={model.silhouetteId} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {model.quickFacts && (
        <section
          style={{
            padding: isMobile ? '24px 0' : '28px 0',
            borderBottom: '1px solid var(--line)',
            background: 'var(--bg-1)',
          }}
        >
          <div style={container}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? 'repeat(2, 1fr)'
                  : `repeat(${model.quickFacts.length}, 1fr)`,
                gap: isMobile ? 16 : 24,
              }}
            >
              {model.quickFacts.map((f) => (
                <div key={f.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      color: 'var(--fg-2)',
                      marginBottom: 6,
                      textTransform: 'uppercase',
                    }}
                  >
                    {f.label}
                  </div>
                  <div style={{ fontSize: isMobile ? 14 : 15, color: 'var(--fg-0)' }}>
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {model.topFive && (
        <section
          style={{
            padding: isMobile ? '64px 0' : '96px 0',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div style={container}>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>
              ● TOP 5 · INSPECT FIRST
            </div>
            <h2
              style={{
                fontSize: isMobile ? 28 : 40,
                letterSpacing: '-0.02em',
                maxWidth: 720,
              }}
            >
              What to check before you even open a door.
            </h2>
            <div
              style={{
                marginTop: isMobile ? 32 : 48,
                display: 'grid',
                gap: 0,
                border: '1px solid var(--line)',
              }}
            >
              {model.topFive.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    padding: isMobile ? 20 : 28,
                    borderBottom:
                      i === model.topFive!.length - 1 ? 'none' : '1px solid var(--line)',
                    background: 'var(--bg-1)',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '40px 1fr' : '60px 1fr',
                    gap: isMobile ? 16 : 24,
                    alignItems: 'baseline',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: isMobile ? 20 : 28,
                      color: 'var(--accent)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? 16 : 18, marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--fg-1)' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        style={{
          padding: isMobile ? '64px 0' : '96px 0',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={container}>
          <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>
            ● WHAT OWNERS FLAG MOST
          </div>
          <h2
            style={{
              fontSize: isMobile ? 28 : 40,
              letterSpacing: '-0.02em',
              maxWidth: 720,
            }}
          >
            {model.name}-specific issues the 147-point walk catches.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 0,
              marginTop: isMobile ? 40 : 64,
              border: '1px solid var(--line)',
            }}
          >
            {model.commonIssues.map((issue, i) => {
              const col = i % (isMobile ? 1 : 2);
              const row = Math.floor(i / (isMobile ? 1 : 2));
              const lastRow = Math.floor(
                (model.commonIssues.length - 1) / (isMobile ? 1 : 2)
              );
              return (
                <div
                  key={issue.title}
                  style={{
                    padding: isMobile ? 24 : 32,
                    borderRight: !isMobile && col === 0 ? '1px solid var(--line)' : 'none',
                    borderBottom: row !== lastRow ? '1px solid var(--line)' : 'none',
                    background: 'var(--bg-1)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-2)',
                      marginBottom: 8,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{issue.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--fg-1)' }}>{issue.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {model.features && (
        <section
          style={{
            padding: isMobile ? '64px 0' : '96px 0',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div style={container}>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>
              ● VERIFY ON THE TOUCHSCREEN
            </div>
            <h2
              style={{
                fontSize: isMobile ? 28 : 40,
                letterSpacing: '-0.02em',
                maxWidth: 720,
              }}
            >
              Software entitlements and options to confirm before you sign.
            </h2>
            <div
              style={{
                marginTop: isMobile ? 32 : 48,
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: 0,
                border: '1px solid var(--line)',
              }}
            >
              {model.features.map((f, i) => {
                const col = i % (isMobile ? 1 : 2);
                const row = Math.floor(i / (isMobile ? 1 : 2));
                const lastRow = Math.floor(
                  (model.features!.length - 1) / (isMobile ? 1 : 2)
                );
                return (
                  <div
                    key={f.title}
                    style={{
                      padding: isMobile ? 20 : 28,
                      borderRight: !isMobile && col === 0 ? '1px solid var(--line)' : 'none',
                      borderBottom: row !== lastRow ? '1px solid var(--line)' : 'none',
                      background: 'var(--bg-1)',
                    }}
                  >
                    <h3 style={{ fontSize: 16, marginBottom: 6 }}>{f.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--fg-1)' }}>{f.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section
        style={{
          padding: isMobile ? '48px 0' : '64px 0',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={container}>
          <div
            style={{
              padding: isMobile ? 24 : 32,
              background: 'var(--bg-1)',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 16 : 32,
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                className="eyebrow"
                style={{ color: 'var(--accent)', marginBottom: 8 }}
              >
                ● OPEN RECALLS
              </div>
              <h3 style={{ fontSize: isMobile ? 18 : 20, marginBottom: 6 }}>
                Check your VIN for open recalls before delivery.
              </h3>
              <p style={{ fontSize: 13, color: 'var(--fg-1)', maxWidth: 560 }}>
                Recall status is VIN-specific and changes often. NHTSA's free lookup tool is
                the authoritative source — enter your VIN to see anything open on your
                specific {model.name}.
              </p>
            </div>
            <a
              href="https://www.nhtsa.gov/recalls"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ padding: '12px 20px', fontSize: 14, flexShrink: 0 }}
            >
              Look up VIN at NHTSA →
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: isMobile ? '64px 0' : '96px 0',
          background: 'var(--bg-1)',
        }}
      >
        <div style={container}>
          <h2
            style={{
              fontSize: isMobile ? 28 : 40,
              letterSpacing: '-0.02em',
              maxWidth: 640,
            }}
          >
            Ready to walk your {model.name}?
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 16, color: 'var(--fg-1)', marginTop: 12, maxWidth: 560 }}>
            Free, no signup, works offline once loaded. Export a PDF to hand to your advisor if
            anything gets flagged.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              to="/app"
              className="btn btn--primary"
              style={{ padding: '14px 22px', fontSize: 14 }}
            >
              Start my {model.name} inspection →
            </Link>
            <Link to="/" className="btn" style={{ padding: '14px 22px', fontSize: 14 }}>
              All models
            </Link>
          </div>
          <div
            className="eyebrow"
            style={{
              marginTop: isMobile ? 32 : 48,
              color: 'var(--fg-2)',
            }}
          >
            ● SOURCED FROM · {model.sources.join(' · ')}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

import type { ReactNode } from 'react';

type ModelId = 'model-s' | 'model-3' | 'model-x' | 'model-y' | 'cybertruck';

const wrap = (children: ReactNode) => (
  <svg
    viewBox="0 0 160 56"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    {children}
  </svg>
);

const wheel = (cx: number) => (
  <g key={cx}>
    <circle cx={cx} cy={44} r="7" />
    <circle cx={cx} cy={44} r="2.5" />
  </g>
);

const ModelS = () =>
  wrap(
    <>
      {/* low fastback sedan: long hood, sloping roof, short trunk */}
      <path d="M 10 42 L 10 36 Q 14 30 24 30 L 44 24 Q 62 14 98 14 Q 116 14 124 22 L 144 28 Q 150 30 150 36 L 150 42" />
      {/* greenhouse peak */}
      <path d="M 44 24 Q 62 16 98 16 Q 114 16 124 22" />
      {/* door split */}
      <line x1="78" y1="18" x2="78" y2="30" opacity="0.5" />
      {wheel(36)}
      {wheel(124)}
    </>
  );

const Model3 = () =>
  wrap(
    <>
      {/* compact sedan: shorter than S, similar proportions */}
      <path d="M 18 42 L 18 36 Q 20 32 28 32 L 44 26 Q 62 18 98 18 Q 114 18 122 26 L 138 30 Q 142 32 142 36 L 142 42" />
      <path d="M 44 26 Q 62 20 98 20 Q 114 20 122 26" />
      <line x1="78" y1="22" x2="78" y2="32" opacity="0.5" />
      {wheel(38)}
      {wheel(122)}
    </>
  );

const ModelX = () =>
  wrap(
    <>
      {/* SUV: taller greenhouse, upswept rear, falcon-wing hint */}
      <path d="M 10 42 L 10 36 Q 14 30 22 30 L 36 22 Q 54 10 104 10 Q 122 10 130 18 L 144 26 Q 150 28 150 36 L 150 42" />
      {/* falcon-wing door hinge line */}
      <path d="M 36 22 L 60 12 M 86 10 L 92 20" opacity="0.5" />
      {/* roofline */}
      <path d="M 36 22 Q 54 12 104 12 Q 122 12 130 18" />
      {wheel(36)}
      {wheel(124)}
    </>
  );

const ModelY = () =>
  wrap(
    <>
      {/* crossover: between 3 and X, taller than 3 but rounder than X */}
      <path d="M 14 42 L 14 36 Q 16 30 26 30 L 42 22 Q 60 14 100 14 Q 116 14 124 22 L 140 28 Q 146 30 146 36 L 146 42" />
      <path d="M 42 22 Q 60 16 100 16 Q 116 16 124 22" />
      <line x1="80" y1="18" x2="80" y2="30" opacity="0.5" />
      {wheel(38)}
      {wheel(124)}
    </>
  );

const Cybertruck = () =>
  wrap(
    <>
      {/* angular wedge: no curves, distinctive exoskeleton profile */}
      <path d="M 8 42 L 8 36 L 18 36 L 34 20 L 96 10 L 120 18 L 150 26 L 150 42" />
      {/* bed line */}
      <line x1="96" y1="10" x2="96" y2="26" />
      <line x1="96" y1="26" x2="150" y2="26" />
      {/* A-pillar hint */}
      <line x1="58" y1="15" x2="58" y2="26" opacity="0.5" />
      {wheel(34)}
      {wheel(120)}
    </>
  );

const MAP: Record<ModelId, () => JSX.Element> = {
  'model-s': ModelS,
  'model-3': Model3,
  'model-x': ModelX,
  'model-y': ModelY,
  cybertruck: Cybertruck,
};

export function ModelSilhouette({ id }: { id: string }) {
  const Component = MAP[id as ModelId];
  return Component ? <Component /> : null;
}

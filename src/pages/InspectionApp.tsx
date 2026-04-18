import { useState, useEffect, useRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import logoMark from '../assets/logo-mark.svg';
import { CATEGORIES, ITEMS, TOTAL_ITEMS, type CategoryId } from '../data/checklist';
import { ModelSilhouette } from '../components/ModelSilhouette';
import { ThemeToggle } from '../components/ThemeToggle';
import { useIsMobile } from '../hooks/useMediaQuery';
import {
  loadSession,
  saveSession,
  clearSession,
  formatRelative,
  type Status,
  type SavedModel,
  type InspectionSession,
} from '../utils/storage';

type Model = SavedModel;

const normalizeVin = (raw: string) =>
  raw.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '').slice(0, 17);

const TopBar = ({
  vin,
  onVinChange,
  model,
  progress,
  flags,
  onExport,
  canExport,
  onReset,
}: {
  vin: string;
  onVinChange?: (v: string) => void;
  model: string;
  progress: string;
  flags: string | number;
  onExport?: () => void;
  canExport?: boolean;
  onReset?: () => void;
}) => {
  const isMobile = useIsMobile();
  const editable = !!onVinChange;
  return (
    <div
      style={{
        height: 56,
        background: 'var(--bg-1)',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '0 12px' : '0 24px',
        gap: isMobile ? 10 : 16,
        flexShrink: 0,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={logoMark} width="20" height="20" alt="" />
        {!isMobile && (
          <span style={{ fontSize: 13, fontWeight: 600 }}>
            TeslaChecklist<span style={{ color: 'var(--accent)' }}>Pro</span>
          </span>
        )}
      </Link>
      {!isMobile && (
        <>
          <div
            style={{ width: 1, height: 24, background: 'var(--line)', margin: '0 8px' }}
          />
          <span
            style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)' }}
          >
            VIN
          </span>
          {editable ? (
            <input
              value={vin}
              onChange={(e) => onVinChange!(normalizeVin(e.target.value))}
              placeholder="Add VIN (optional)"
              spellCheck={false}
              maxLength={17}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                background: 'transparent',
                border: '1px solid transparent',
                borderBottom: '1px dashed var(--line)',
                color: 'var(--fg-0)',
                padding: '4px 6px',
                width: 180,
                outline: 'none',
                borderRadius: 2,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.background = 'var(--bg-2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.borderBottomColor = 'var(--line)';
                e.currentTarget.style.borderBottomStyle = 'dashed';
                e.currentTarget.style.background = 'transparent';
              }}
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: vin ? 'var(--fg-0)' : 'var(--fg-2)',
              }}
            >
              {vin || '— — —'}
            </span>
          )}
          <span style={{ color: 'var(--fg-2)' }}>·</span>
          <span style={{ fontSize: 13 }}>{model}</span>
        </>
      )}
      <div
        style={{
          marginLeft: 'auto',
          display: 'flex',
          gap: isMobile ? 12 : 20,
          alignItems: 'center',
        }}
      >
        <div>
          {!isMobile && <span className="eyebrow">PROGRESS </span>}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{progress}</span>
        </div>
        <div>
          {!isMobile && <span className="eyebrow">FLAGGED </span>}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--accent)',
            }}
          >
            {isMobile ? `⚑ ${flags}` : flags}
          </span>
        </div>
        <button
          className="btn"
          onClick={onExport}
          disabled={!canExport}
          style={{
            padding: isMobile ? '6px 10px' : '6px 12px',
            fontSize: 12,
            opacity: canExport ? 1 : 0.5,
            cursor: canExport ? 'pointer' : 'not-allowed',
          }}
          title={canExport ? 'Download inspection report as PDF' : 'Pick a model to start'}
          aria-label="Export PDF"
        >
          <Icon>
            <line x1="12" y1="4" x2="12" y2="16" />
            <polyline points="6 10 12 16 18 10" />
          </Icon>
          {!isMobile && 'Export PDF'}
        </button>
        {onReset && (
          <button
            className="btn btn--ghost"
            onClick={onReset}
            style={{ padding: isMobile ? '6px 8px' : '6px 10px', fontSize: 12 }}
            title="Discard current inspection and start over"
            aria-label="Start over"
          >
            <Icon>
              <polyline points="4 8 4 4 8 4" />
              <path d="M4 12 a8 8 0 1 0 2.5-6 L4 8" />
            </Icon>
            {!isMobile && 'Reset'}
          </button>
        )}
        <ThemeToggle compact />
      </div>
    </div>
  );
};

const ModelPicker = ({
  onPick,
  resume,
  onResume,
  onDiscard,
}: {
  onPick: (m: Model) => void;
  resume?: InspectionSession | null;
  onResume?: () => void;
  onDiscard?: () => void;
}) => {
  const isMobile = useIsMobile();
  const resumeProgress = resume
    ? Object.values(resume.statuses).filter((v) => v === 'pass' || v === 'skip').length
    : 0;
  const resumeFlags = resume
    ? Object.values(resume.statuses).filter((v) => v === 'flag').length
    : 0;
  const MODELS: Model[] = [
    { id: 'model-s', name: 'Model S', trim: 'Plaid · Long Range' },
    { id: 'model-3', name: 'Model 3', trim: 'Performance · LR · RWD' },
    { id: 'model-x', name: 'Model X', trim: 'Plaid · Long Range' },
    { id: 'model-y', name: 'Model Y', trim: 'Performance · LR · RWD' },
    { id: 'cybertruck', name: 'Cybertruck', trim: 'Cyberbeast · AWD' },
  ];
  const cols = isMobile ? 2 : 5;
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: isMobile ? 'flex-start' : 'center',
        padding: isMobile ? '32px 16px' : 40,
        overflowY: 'auto',
      }}
    >
      {resume && resume.model && (
        <div
          className="cyber-frame"
          style={{
            width: '100%',
            maxWidth: 640,
            marginBottom: 32,
            padding: isMobile ? '14px 16px' : '16px 20px',
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderLeft: '2px solid var(--accent)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: isMobile ? 12 : 16,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 4 }}>
              ● IN PROGRESS · {formatRelative(resume.updatedAt)}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              {resume.model.name} · {resume.model.trim.split(' · ')[0]}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--fg-2)',
                marginTop: 4,
              }}
            >
              {resumeProgress} / {TOTAL_ITEMS} checked
              {resumeFlags > 0 && (
                <>
                  {' · '}
                  <span style={{ color: 'var(--danger)' }}>{resumeFlags} flagged</span>
                </>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="btn btn--ghost"
              onClick={onDiscard}
              style={{ fontSize: 12 }}
            >
              Discard
            </button>
            <button
              className="btn btn--primary"
              onClick={onResume}
              style={{ fontSize: 12 }}
            >
              Resume →
            </button>
          </div>
        </div>
      )}
      <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>
        ● NEW INSPECTION
      </div>
      <h1
        style={{
          fontSize: isMobile ? 28 : 48,
          marginBottom: 12,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        Which Tesla are you picking up?
      </h1>
      <p
        style={{
          color: 'var(--fg-1)',
          marginBottom: isMobile ? 24 : 48,
          textAlign: isMobile ? 'center' : 'left',
          fontSize: isMobile ? 14 : 15,
        }}
      >
        We'll load the model-specific {TOTAL_ITEMS}-point checklist.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? `repeat(${cols}, 1fr)`
            : `repeat(${cols}, 200px)`,
          border: '1px solid var(--line)',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? 400 : 'none',
        }}
      >
        {MODELS.map((m, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const lastRow = Math.floor((MODELS.length - 1) / cols);
          return (
          <button
            key={m.id}
            className="cyber-frame"
            onClick={() => onPick(m)}
            style={{
              background: 'var(--bg-1)',
              borderRight: col !== cols - 1 ? '1px solid var(--line)' : 'none',
              borderTop: 'none',
              borderBottom: row !== lastRow ? '1px solid var(--line)' : 'none',
              borderLeft: 'none',
              padding: isMobile ? '18px 14px' : '24px 20px',
              textAlign: 'left',
              cursor: 'pointer',
              color: 'var(--fg-0)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              minHeight: isMobile ? 180 : 240,
              transition: 'background var(--dur-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-2)';
              const silhouette = e.currentTarget.querySelector<HTMLElement>(
                '[data-silhouette]'
              );
              if (silhouette) silhouette.style.color = 'var(--fg-0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-1)';
              const silhouette = e.currentTarget.querySelector<HTMLElement>(
                '[data-silhouette]'
              );
              if (silhouette) silhouette.style.color = 'var(--fg-2)';
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>
              0{i + 1}
            </div>
            <div
              data-silhouette
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 4px',
                color: 'var(--fg-2)',
                transition: 'color var(--dur-base) var(--ease-out)',
              }}
            >
              <ModelSilhouette id={m.id} />
            </div>
            <div style={{ fontSize: isMobile ? 16 : 20, fontWeight: 600 }}>{m.name}</div>
            <div style={{ fontSize: isMobile ? 11 : 12, color: 'var(--fg-2)' }}>{m.trim}</div>
          </button>
          );
        })}
      </div>
    </div>
  );
};

const SidebarNav = ({
  active,
  onPick,
  statuses,
}: {
  active: CategoryId;
  onPick: (id: CategoryId) => void;
  statuses: Record<string, Status>;
}) => {
  const isMobile = useIsMobile();

  const renderButton = (c: (typeof CATEGORIES)[number]) => {
    const ids = (ITEMS[c.id] || []).map((i) => i.id);
    const done = ids.filter(
      (id) => statuses[id] === 'pass' || statuses[id] === 'skip'
    ).length;
    const flagged = ids.filter((id) => statuses[id] === 'flag').length;
    const isActive = active === c.id;
    return (
      <button
        key={c.id}
        onClick={() => onPick(c.id)}
        style={{
          width: isMobile ? 'auto' : '100%',
          padding: isMobile ? '8px 14px' : '10px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? 8 : 12,
          background: isActive ? 'var(--bg-2)' : 'transparent',
          border: 'none',
          borderRadius: 2,
          cursor: 'pointer',
          marginBottom: isMobile ? 0 : 2,
          marginRight: isMobile ? 4 : 0,
          color: 'var(--fg-0)',
          fontSize: 13,
          textAlign: 'left',
          position: 'relative',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {isActive && (
          <div
            style={{
              position: 'absolute',
              left: isMobile ? 8 : 0,
              right: isMobile ? 8 : 'auto',
              top: isMobile ? 'auto' : 8,
              bottom: isMobile ? 0 : 8,
              height: isMobile ? 2 : 'auto',
              width: isMobile ? 'auto' : 2,
              background: 'var(--accent)',
            }}
          />
        )}
        <span style={{ color: isActive ? 'var(--fg-0)' : 'var(--fg-1)' }}>{c.label}</span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: flagged > 0 ? 'var(--danger)' : 'var(--fg-2)',
          }}
        >
          {done}/{c.count}
        </span>
      </button>
    );
  };

  if (isMobile) {
    return (
      <nav
        style={{
          display: 'flex',
          overflowX: 'auto',
          borderBottom: '1px solid var(--line)',
          padding: '8px 12px',
          gap: 4,
          flexShrink: 0,
          scrollbarWidth: 'thin',
        }}
      >
        {CATEGORIES.map(renderButton)}
      </nav>
    );
  }

  return (
    <aside
      style={{
        width: 260,
        borderRight: '1px solid var(--line)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      <div style={{ padding: '20px 20px 12px' }}>
        <div className="eyebrow">CATEGORIES</div>
      </div>
      <nav style={{ padding: '0 8px', flex: 1 }}>{CATEGORIES.map(renderButton)}</nav>
    </aside>
  );
};

const ACTIONS: { key: Status; color: string; glyph: ReactNode }[] = [
  {
    key: 'pass',
    color: 'var(--ok)',
    glyph: <polyline points="5 12 10 17 19 7" />,
  },
  {
    key: 'flag',
    color: 'var(--danger)',
    glyph: (
      <>
        <line x1="5" y1="4" x2="5" y2="21" />
        <path d="M5 4 H19 L16 9 L19 14 H5" />
      </>
    ),
  },
  {
    key: 'skip',
    color: 'var(--fg-2)',
    glyph: (
      <>
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </>
    ),
  },
];

const InspectionView = ({
  category,
  statuses,
  notes,
  onAction,
  onNoteChange,
}: {
  category: CategoryId;
  statuses: Record<string, Status>;
  notes: Record<string, string>;
  onAction: (id: string, a: Status) => void;
  onNoteChange: (id: string, note: string) => void;
}) => {
  const isMobile = useIsMobile();
  const cat = CATEGORIES.find((c) => c.id === category)!;
  const list = ITEMS[category] || [];
  const [filter, setFilter] = useState<'all' | 'unchecked' | 'flagged'>('all');
  const uncheckedCount = list.filter((i) => !statuses[i.id]).length;
  const flaggedCount = list.filter((i) => statuses[i.id] === 'flag').length;
  const visible = list.filter((i) => {
    const s = statuses[i.id];
    if (filter === 'unchecked') return !s;
    if (filter === 'flagged') return s === 'flag';
    return true;
  });
  const filters: { key: typeof filter; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: list.length },
    { key: 'unchecked', label: 'Unchecked', count: uncheckedCount },
    { key: 'flagged', label: 'Flagged', count: flaggedCount },
  ];
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div
        className="cyber-frame"
        style={{
          padding: isMobile ? '16px 16px 12px' : '24px 20px 16px',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 8 }}>
          ● {cat.label.toUpperCase()} · {cat.count} ITEMS
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: 12,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <h2 style={{ fontSize: isMobile ? 20 : 24 }}>{cat.label}</h2>
          <div style={{ display: 'flex', gap: 4 }}>
            {filters.map((f) => {
              const active = filter === f.key;
              const dim = f.count === 0 && f.key !== 'all';
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  disabled={dim}
                  style={{
                    padding: '6px 10px',
                    fontSize: 12,
                    fontFamily: 'var(--font-sans)',
                    background: active ? 'var(--bg-2)' : 'transparent',
                    color: active ? 'var(--fg-0)' : dim ? 'var(--fg-3)' : 'var(--fg-1)',
                    border: '1px solid ' + (active ? 'var(--line)' : 'transparent'),
                    borderRadius: 2,
                    cursor: dim ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  {f.label}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color:
                        f.key === 'flagged' && f.count > 0
                          ? 'var(--danger)'
                          : 'var(--fg-2)',
                    }}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
        {list.length === 0 ? (
          <div style={{ padding: isMobile ? 32 : 64, textAlign: 'center', color: 'var(--fg-2)' }}>
            No items loaded for {cat.label.toLowerCase()} yet.
          </div>
        ) : visible.length === 0 ? (
          <div style={{ padding: isMobile ? 32 : 64, textAlign: 'center', color: 'var(--fg-2)', fontSize: 13 }}>
            {filter === 'flagged'
              ? 'Nothing flagged in this category.'
              : 'Every item in this category is checked.'}
          </div>
        ) : (
          visible.map((item) => {
            const s = statuses[item.id];
            const note = notes[item.id] || '';
            return (
              <div
                key={item.id}
                className={s === 'flag' ? 'flag-row' : undefined}
                style={{
                  borderBottom: '1px solid var(--line-soft)',
                }}
              >
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? 10 : 16,
                  padding: isMobile ? '14px 16px' : '14px 20px',
                }}
              >
                <div
                  style={{
                    display: isMobile ? 'flex' : 'block',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--fg-3)',
                      width: isMobile ? 'auto' : 64,
                      paddingTop: isMobile ? 0 : 2,
                      flexShrink: 0,
                    }}
                  >
                    {item.id}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{item.spec}</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: isMobile ? 8 : 4,
                    marginTop: isMobile ? 4 : 0,
                    alignSelf: isMobile ? 'stretch' : 'flex-start',
                  }}
                >
                  {ACTIONS.map((a) => (
                    <button
                      key={a.key}
                      onClick={() => onAction(item.id, a.key)}
                      style={{
                        width: isMobile ? '100%' : 32,
                        height: isMobile ? 40 : 32,
                        background: s === a.key ? a.color : 'transparent',
                        border: '1px solid ' + (s === a.key ? a.color : 'var(--line)'),
                        borderRadius: 2,
                        cursor: 'pointer',
                        color: s === a.key ? 'var(--bg-0)' : a.color,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all var(--dur-fast) var(--ease-out)',
                      }}
                      aria-label={a.key}
                    >
                      <Icon size={isMobile ? 16 : 14}>{a.glyph}</Icon>
                    </button>
                  ))}
                </div>
              </div>
              {s === 'flag' && (
                <div
                  style={{
                    padding: isMobile ? '0 16px 14px' : '0 20px 14px 100px',
                  }}
                >
                  <textarea
                    value={note}
                    onChange={(e) => onNoteChange(item.id, e.target.value)}
                    placeholder="Note for the advisor — what's wrong, where, how bad"
                    rows={1}
                    style={{
                      width: '100%',
                      resize: 'vertical',
                      minHeight: 32,
                      padding: '8px 10px',
                      background: 'var(--bg-1)',
                      border: '1px solid var(--line)',
                      borderLeft: '2px solid var(--danger)',
                      borderRadius: 2,
                      color: 'var(--fg-0)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: 13,
                      lineHeight: 1.4,
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.background = 'var(--bg-2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.background = 'var(--bg-1)';
                    }}
                  />
                </div>
              )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default function InspectionApp() {
  const isMobile = useIsMobile();
  const [model, setModel] = useState<Model | null>(null);
  const [category, setCategory] = useState<CategoryId>('exterior');
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [vin, setVin] = useState<string>('');
  const [startedAt, setStartedAt] = useState<string>(() => new Date().toISOString());
  const [savedSession, setSavedSession] = useState<InspectionSession | null>(null);
  const hydrated = useRef(false);

  useEffect(() => {
    const s = loadSession();
    setSavedSession(s);
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    if (!model) return;
    saveSession({
      version: 1,
      model,
      vin,
      category,
      statuses,
      notes,
      startedAt,
      updatedAt: new Date().toISOString(),
    });
  }, [model, vin, category, statuses, notes, startedAt]);

  const doneCount = Object.values(statuses).filter(
    (v) => v === 'pass' || v === 'skip'
  ).length;
  const flagCount = Object.values(statuses).filter((v) => v === 'flag').length;

  const onAction = (id: string, a: Status) =>
    setStatuses((s) => {
      if (s[id] === a) {
        const { [id]: _, ...rest } = s;
        return rest;
      }
      return { ...s, [id]: a };
    });

  const onNoteChange = (id: string, note: string) =>
    setNotes((n) => {
      if (!note) {
        const { [id]: _, ...rest } = n;
        return rest;
      }
      return { ...n, [id]: note };
    });

  const handleResume = () => {
    if (!savedSession || !savedSession.model) return;
    setModel(savedSession.model);
    setCategory(savedSession.category);
    setStatuses(savedSession.statuses);
    setNotes(savedSession.notes || {});
    setVin(savedSession.vin || '');
    setStartedAt(savedSession.startedAt);
    setSavedSession(null);
  };

  const handleDiscard = () => {
    clearSession();
    setSavedSession(null);
  };

  const handleReset = () => {
    if (!confirm('Discard this inspection and start over?')) return;
    clearSession();
    setModel(null);
    setCategory('exterior');
    setStatuses({});
    setNotes({});
    setVin('');
    setStartedAt(new Date().toISOString());
    setSavedSession(null);
  };

  const handlePick = (m: Model) => {
    setModel(m);
    setStartedAt(new Date().toISOString());
  };

  if (!model) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <TopBar
          vin="— — —"
          model="No car selected"
          progress="—"
          flags="—"
          canExport={false}
        />
        <ModelPicker
          onPick={handlePick}
          resume={savedSession}
          onResume={handleResume}
          onDiscard={handleDiscard}
        />
      </div>
    );
  }

  const modelLabel = `${model.name} · ${model.trim.split(' · ')[0]}`;

  const handleExport = async () => {
    let exportVin = vin;
    if (!exportVin) {
      const entered = window.prompt(
        'Add the VIN for this report? (optional — leave blank to export without it)',
        ''
      );
      if (entered === null) return;
      exportVin = normalizeVin(entered);
      if (exportVin) setVin(exportVin);
    }
    const { exportInspectionPdf } = await import('../utils/exportPdf');
    exportInspectionPdf({ vin: exportVin, modelLabel, statuses, notes });
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <TopBar
        vin={vin}
        onVinChange={setVin}
        model={modelLabel}
        progress={`${doneCount} / ${TOTAL_ITEMS}`}
        flags={flagCount}
        onExport={handleExport}
        canExport={true}
        onReset={handleReset}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          overflow: 'hidden',
        }}
      >
        <SidebarNav active={category} onPick={setCategory} statuses={statuses} />
        <InspectionView
          category={category}
          statuses={statuses}
          notes={notes}
          onAction={onAction}
          onNoteChange={onNoteChange}
        />
      </div>
    </div>
  );
}

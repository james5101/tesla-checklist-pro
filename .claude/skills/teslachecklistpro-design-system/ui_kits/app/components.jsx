const CATEGORIES = [
  { id: 'exterior', label: 'Exterior', count: 23 },
  { id: 'wheels', label: 'Wheels & tires', count: 12 },
  { id: 'paint', label: 'Paint & finish', count: 18 },
  { id: 'electrical', label: 'Electrical', count: 18 },
  { id: 'interior', label: 'Interior', count: 32 },
  { id: 'software', label: 'Software', count: 14 },
  { id: 'docs', label: 'Documentation', count: 30 },
];

const ITEMS = {
  exterior: [
    { id: 'EXT_001', title: 'Hood alignment to fenders', spec: 'Gap: 3.5–4.5 mm · flush within 0.5 mm' },
    { id: 'EXT_002', title: 'Frunk latch operation', spec: 'Opens smoothly from app and manual release' },
    { id: 'EXT_003', title: 'Front bumper to fender', spec: 'No paint transfer; gap uniform' },
    { id: 'EXT_004', title: 'Driver door to A-pillar', spec: 'Gap: 4.0 ± 0.5 mm top to bottom' },
    { id: 'EXT_005', title: 'Rear-left panel gap', spec: 'Gap: 4.0 ± 0.5 mm, inspect with doors open and closed' },
    { id: 'EXT_006', title: 'Trunk lid alignment', spec: 'Symmetric gap both sides' },
    { id: 'EXT_007', title: 'Glass roof seal', spec: 'No bubbling, no lifting at corners' },
    { id: 'EXT_008', title: 'Side mirror fold', spec: 'Both mirrors fold without clicking' },
  ],
  wheels: [], paint: [], electrical: [], interior: [], software: [], docs: [],
};

const Sv = ({ children, size=14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

const TopBar = ({ vin, model, progress, flags }) => (
  <div style={{ height: 56, background: 'var(--bg-1)', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16, flexShrink: 0 }}>
    <a href="../marketing/index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src="../../assets/logo-mark.svg" width="20" height="20" />
      <span style={{ fontSize: 13, fontWeight: 600 }}>TeslaChecklist<span style={{ color: 'var(--accent)' }}>Pro</span></span>
    </a>
    <div style={{ width: 1, height: 24, background: 'var(--line)', margin: '0 8px' }} />
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)' }}>VIN</span>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{vin}</span>
    <span style={{ color: 'var(--fg-2)' }}>·</span>
    <span style={{ fontSize: 13 }}>{model}</span>
    <div style={{ marginLeft: 'auto', display: 'flex', gap: 20, alignItems: 'center' }}>
      <div><span className="eyebrow">PROGRESS </span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{progress}</span></div>
      <div><span className="eyebrow">FLAGGED </span><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)' }}>{flags}</span></div>
      <ThemeToggle compact />
      <button className="btn" style={{ padding: '6px 12px', fontSize: 12 }}><Sv><line x1="12" y1="4" x2="12" y2="16"/><polyline points="6 10 12 16 18 10"/></Sv>Export PDF</button>
    </div>
  </div>
);

const ModelPicker = ({ onPick }) => {
  const MODELS = [
    { id: 'model-s', name: 'Model S', trim: 'Plaid · Long Range' },
    { id: 'model-3', name: 'Model 3', trim: 'Performance · LR · RWD' },
    { id: 'model-x', name: 'Model X', trim: 'Plaid · Long Range' },
    { id: 'model-y', name: 'Model Y', trim: 'Performance · LR · RWD' },
    { id: 'cybertruck', name: 'Cybertruck', trim: 'Cyberbeast · AWD' },
  ];
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 16 }}>● NEW INSPECTION · STEP 1 OF 2</div>
      <h1 style={{ fontSize: 48, marginBottom: 12 }}>Which Tesla are you picking up?</h1>
      <p style={{ color: 'var(--fg-1)', marginBottom: 48 }}>We'll load the model-specific 147-point checklist.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 200px)', border: '1px solid var(--line)' }}>
        {MODELS.map((m, i) => (
          <button key={m.id} onClick={() => onPick(m)} style={{
            background: 'var(--bg-1)', borderRight: i < 4 ? '1px solid var(--line)' : 'none',
            border: 'none', padding: '32px 20px', textAlign: 'left', cursor: 'pointer',
            color: 'var(--fg-0)', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 180,
          }} onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
             onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-1)'}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>0{i+1}</div>
            <div style={{ marginTop: 'auto', fontSize: 20, fontWeight: 600 }}>{m.name}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{m.trim}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

const SidebarNav = ({ active, onPick, statuses }) => (
  <aside style={{ width: 260, borderRight: '1px solid var(--line)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
    <div style={{ padding: '20px 20px 12px' }}><div className="eyebrow">CATEGORIES</div></div>
    <nav style={{ padding: '0 8px', flex: 1 }}>
      {CATEGORIES.map(c => {
        const ids = (ITEMS[c.id] || []).map(i => i.id);
        const done = ids.filter(id => statuses[id] === 'pass' || statuses[id] === 'skip').length;
        const flagged = ids.filter(id => statuses[id] === 'flag').length;
        const isActive = active === c.id;
        return (
          <button key={c.id} onClick={() => onPick(c.id)} style={{
            width: '100%', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 12,
            background: isActive ? 'var(--bg-2)' : 'transparent', border: 'none', borderRadius: 2,
            cursor: 'pointer', marginBottom: 2, color: 'var(--fg-0)', fontSize: 13, textAlign: 'left',
            position: 'relative',
          }}>
            {isActive && <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 2, background: 'var(--accent)' }}/>}
            <span style={{ flex: 1, color: isActive ? 'var(--fg-0)' : 'var(--fg-1)' }}>{c.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11,
              color: flagged > 0 ? 'var(--accent)' : 'var(--fg-2)' }}>{done}/{c.count}</span>
          </button>
        );
      })}
    </nav>
  </aside>
);

const InspectionView = ({ category, statuses, onAction }) => {
  const cat = CATEGORIES.find(c => c.id === category);
  const list = ITEMS[category] || [];
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid var(--line)' }}>
        <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 8 }}>● {cat.label.toUpperCase()} · {cat.count} ITEMS</div>
        <h2 style={{ fontSize: 24 }}>{cat.label}</h2>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {list.length === 0 ? (
          <div style={{ padding: 64, textAlign: 'center', color: 'var(--fg-2)' }}>No items loaded for {cat.label.toLowerCase()} yet.</div>
        ) : list.map(item => {
          const s = statuses[item.id];
          return (
            <div key={item.id} style={{ display: 'flex', gap: 16, padding: '14px 20px', borderBottom: '1px solid var(--line-soft)',
              background: s === 'flag' ? 'rgba(255,45,45,0.04)' : 'transparent' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', width: 64, paddingTop: 2 }}>{item.id}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{item.spec}</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {[['pass','#00D18F',<polyline points="5 12 10 17 19 7"/>],
                  ['flag','#FF2D2D',<><line x1="5" y1="4" x2="5" y2="21"/><path d="M5 4 H19 L16 9 L19 14 H5"/></>],
                  ['skip','#6E7480',<><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></>]].map(([a,c,p]) => (
                  <button key={a} onClick={() => onAction(item.id, a)} style={{
                    width: 32, height: 32, background: s === a ? c : 'transparent',
                    border: '1px solid ' + (s === a ? c : 'var(--line)'), borderRadius: 2, cursor: 'pointer',
                    color: s === a ? '#0A0B0D' : c, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}><Sv>{p}</Sv></button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App = () => {
  const [model, setModel] = React.useState(null);
  const [category, setCategory] = React.useState('exterior');
  const [statuses, setStatuses] = React.useState({
    EXT_001: 'pass', EXT_002: 'pass', EXT_003: 'pass', EXT_004: 'pass', EXT_005: 'flag', EXT_006: 'pass',
  });
  const doneCount = Object.values(statuses).filter(v => v === 'pass' || v === 'skip').length;
  const flagCount = Object.values(statuses).filter(v => v === 'flag').length;
  const onAction = (id, a) => setStatuses(s => s[id] === a ? (()=>{const {[id]:_,...r}=s;return r;})() : {...s, [id]: a});

  if (!model) return (
    <><TopBar vin="— — —" model="No car selected" progress="—" flags="—" /><ModelPicker onPick={setModel} /></>
  );
  return (
    <>
      <TopBar vin="5YJSA1E63PF123456" model={`${model.name} · ${model.trim.split(' · ')[0]}`} progress={`${doneCount} / 147`} flags={flagCount} />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <SidebarNav active={category} onPick={setCategory} statuses={statuses} />
        <InspectionView category={category} statuses={statuses} onAction={onAction} />
      </div>
    </>
  );
};
window.App = App;

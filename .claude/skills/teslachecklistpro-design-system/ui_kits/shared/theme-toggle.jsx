/* Shared ThemeToggle — used by both UI kits */
/* Reads/writes localStorage; sets data-theme on <html> */

(function () {
  const KEY = 'tcp-theme';
  const initial = localStorage.getItem(KEY) || 'standard';
  document.documentElement.setAttribute('data-theme', initial);
})();

// Hook components can use to re-render on theme change
window.useTheme = function useTheme() {
  const [theme, setTheme] = React.useState(
    document.documentElement.getAttribute('data-theme') || 'standard'
  );
  React.useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'standard');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return theme;
};

window.ThemeToggle = function ThemeToggle({ compact = false }) {
  const theme = window.useTheme();
  const toggle = () => {
    const next = theme === 'standard' ? 'cyber' : 'standard';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tcp-theme', next);
  };
  const isCyber = theme === 'cyber';

  return (
    <button onClick={toggle} title={`Switch to ${isCyber ? 'standard' : 'cyber'} theme`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: compact ? '4px 10px' : '6px 12px',
        height: compact ? 28 : 32,
        background: 'transparent',
        border: '1px solid var(--line)',
        color: 'var(--fg-1)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: '0.08em',
        cursor: 'pointer', position: 'relative',
        transition: 'all 140ms cubic-bezier(0.3,0,0,1)',
        clipPath: isCyber ? 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' : 'none',
        boxShadow: isCyber ? '0 0 12px rgba(0,240,255,0.25)' : 'none',
        borderColor: isCyber ? 'var(--accent)' : 'var(--line)',
      }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: isCyber ? 'var(--accent)' : 'var(--fg-2)',
        boxShadow: isCyber ? '0 0 8px var(--accent)' : 'none',
      }} />
      <span style={{ color: isCyber ? 'var(--accent)' : 'var(--fg-1)' }}>
        {isCyber ? 'CYBER' : 'STANDARD'}
      </span>
      <span style={{ color: 'var(--fg-3)', fontSize: 9 }}>▸</span>
      <span style={{ color: 'var(--fg-2)' }}>{isCyber ? 'STD' : 'CBR'}</span>
    </button>
  );
};

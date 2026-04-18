import { useTheme } from '../hooks/useTheme';
import { useIsMobile } from '../hooks/useMediaQuery';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useTheme();
  const isMobile = useIsMobile();
  const isCyber = theme === 'cyber';
  const next = isCyber ? 'standard' : 'cyber';
  const iconOnly = isMobile;
  const size = iconOnly ? 36 : compact ? 28 : 32;

  return (
    <button
      onClick={() => setTheme(next)}
      title={`Switch to ${next} theme`}
      aria-label={`Switch to ${next} theme`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: iconOnly ? 0 : 8,
        padding: iconOnly ? 0 : compact ? '4px 10px' : '6px 12px',
        width: iconOnly ? size : undefined,
        justifyContent: iconOnly ? 'center' : undefined,
        height: size,
        background: iconOnly ? (isCyber ? 'transparent' : 'var(--bg-2)') : 'transparent',
        border: '1px solid',
        borderColor: isCyber ? 'var(--accent)' : 'var(--line)',
        color: isCyber ? 'var(--accent)' : 'var(--fg-0)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        cursor: 'pointer',
        transition: 'all var(--dur-fast) var(--ease-out)',
        clipPath: isCyber
          ? 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
          : 'none',
        boxShadow: isCyber ? '0 0 12px var(--accent-glow)' : 'none',
      }}
    >
      <svg
        width={iconOnly ? 18 : 14}
        height={iconOnly ? 18 : 14}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: isCyber ? 'drop-shadow(0 0 4px var(--accent))' : 'none',
        }}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor" />
      </svg>
      {!iconOnly && <span>{isCyber ? 'CYBER' : 'STANDARD'}</span>}
    </button>
  );
}

import { useEffect, useState } from 'react';

export type Theme = 'standard' | 'cyber';

const KEY = 'tcp-theme';

const getCurrent = (): Theme => {
  if (typeof document === 'undefined') return 'standard';
  const t = document.documentElement.getAttribute('data-theme');
  return t === 'cyber' ? 'cyber' : 'standard';
};

export function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(getCurrent);

  useEffect(() => {
    const obs = new MutationObserver(() => setThemeState(getCurrent()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => obs.disconnect();
  }, []);

  const setTheme = (t: Theme) => {
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem(KEY, t);
    } catch {
      /* no-op */
    }
  };

  return [theme, setTheme];
}

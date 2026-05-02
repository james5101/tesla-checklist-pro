import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll to (0, 0) on every pathname change.
 *
 * React Router v6 deliberately doesn't restore scroll position the way a
 * full-page navigation does, so a link clicked from halfway down one page
 * lands the user halfway down the next one. Mount this component once
 * inside <BrowserRouter> and every navigation gets a clean top-of-page
 * landing.
 *
 * Hash links (e.g. /faq#refunds) are intentionally honored — only resets
 * when the pathname changes, not on hash-only navigation.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent the browser's built-in scroll restoration from fighting us.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

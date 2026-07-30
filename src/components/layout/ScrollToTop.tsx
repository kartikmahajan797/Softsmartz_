import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores scroll to the top on route change so long pages (Portfolio,
 * Case Studies, Partner) don't open mid-way down. In-page anchors are
 * left alone.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force le navigateur à remonter tout en haut (0, 0)
    // à chaque fois que l'URL (pathname) change.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
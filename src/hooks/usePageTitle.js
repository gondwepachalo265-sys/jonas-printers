// src/hooks/usePageTitle.js
import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    const siteName = 'Jonas Printers';
    document.title = title ? `${title} | ${siteName}` : siteName;
  }, [title]);
};

export default usePageTitle;
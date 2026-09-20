import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ne } from './translations/ne';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (text) => text
});

const STORAGE_KEY = 'pioneer-lang';

const readStoredLang = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'ne' || stored === 'en' ? stored : 'en';
  } catch (err) {
    return 'en';
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* private mode: language simply won't persist */
    }
  }, [lang]);

  const t = useCallback(
    (text) => (lang === 'ne' ? ne[text] ?? text : text),
    [lang]
  );

  const toggleLang = useCallback(() => setLang((prev) => (prev === 'en' ? 'ne' : 'en')), []);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export const useT = () => useContext(LanguageContext).t;

"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { I18N, type Lang } from "./i18n";
import { pick as pickFrom, type Loc } from "./data";

const LANG_KEY = "sea_lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  pick: (obj: Loc | undefined) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "ka" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string) => I18N[lang]?.[key] ?? I18N.ka[key] ?? key,
    [lang]
  );

  const pick = useCallback((obj: Loc | undefined) => pickFrom(obj, lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

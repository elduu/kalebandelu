import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import { STORAGE_KEYS } from "@/config/event";
import { readStorage, writeStorage } from "@/lib/storage";
import { amharic } from "./am";
import { LanguageContext, type Language } from "./context";

const reportedMissing = new Set<string>();

function getInitialLanguage(): Language {
  const saved = readStorage(STORAGE_KEYS.language);
  return saved === "am" || saved === "en" ? saved : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    writeStorage(STORAGE_KEYS.language, next);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (text: string) => {
        if (language !== "am") return text;
        const translated = amharic[text];
        if (translated === undefined) {
          // Development only: shows which strings still need an Amharic translation.
          if (import.meta.env.DEV && /[A-Za-z]{3}/.test(text) && !reportedMissing.has(text)) {
            reportedMissing.add(text);
            console.warn("[i18n] missing Amharic:", JSON.stringify(text));
          }
          return text;
        }
        return translated;
      },
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
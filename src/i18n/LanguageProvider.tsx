import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import { STORAGE_KEYS } from "@/config/event";
import { readStorage, writeStorage } from "@/lib/storage";
import { amharic } from "./am";
import { LanguageContext, type Language } from "./context";

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
      t: (text: string) => (language === "am" ? (amharic[text] ?? text) : text),
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

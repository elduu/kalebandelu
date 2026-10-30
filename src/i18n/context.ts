import { createContext } from "react";

export type Language = "en" | "am";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Translates an English UI string; falls back to the original text. */
  t: (text: string) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (text) => text,
});

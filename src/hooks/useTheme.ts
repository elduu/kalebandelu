import { useCallback, useEffect, useState } from "react";

import { STORAGE_KEYS } from "@/config/event";
import { readStorage, writeStorage } from "@/lib/storage";

function getInitialTheme(): boolean {
  const saved = readStorage(STORAGE_KEYS.theme);
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/** Light/dark theme, persisted in localStorage and applied as a class on <html>. */
export function useTheme() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = useCallback(() => {
    setDark((current) => {
      const next = !current;
      writeStorage(STORAGE_KEYS.theme, next ? "dark" : "light");
      return next;
    });
  }, []);

  return { dark, toggle };
}

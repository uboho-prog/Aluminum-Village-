import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const KEY = "av_theme";
const EVT = "av-theme-change";

/** Preference stored by the user, or null when we should follow the OS. */
function storedTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw === "dark" || raw === "light" ? raw : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getTheme(): Theme {
  return storedTheme() ?? systemTheme();
}

/** Mirrors the class the inline boot script sets before first paint. */
export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable: theme still applies for this session */
  }
  applyTheme(theme);
  window.dispatchEvent(new Event(EVT));
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

export function useTheme(): { theme: Theme; setTheme: typeof setTheme; toggleTheme: typeof toggleTheme } {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const sync = () => setThemeState(getTheme());
    sync();

    window.addEventListener(EVT, sync);
    window.addEventListener("storage", sync);

    // Follow OS changes only while the user hasn't picked a theme explicitly.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (storedTheme()) return;
      applyTheme(systemTheme());
      sync();
    };
    media.addEventListener("change", onSystemChange);

    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener("storage", sync);
      media.removeEventListener("change", onSystemChange);
    };
  }, []);

  return { theme, setTheme, toggleTheme };
}

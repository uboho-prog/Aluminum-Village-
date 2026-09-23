import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-store";

/**
 * Light/dark switch. The icons are swapped with CSS (`dark:` variants) so the
 * button is correct on the very first paint, before React hydrates.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { toggleTheme, theme } = useTheme();
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-secondary transition-colors ${className}`}
    >
      <Sun className="hidden size-5 dark:block" />
      <Moon className="block size-5 dark:hidden" />
    </button>
  );
}

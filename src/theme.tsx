import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
  MouseEvent
} from "react";

interface ThemeContextType {
  theme: string | null;
  toggleTheme: (event: MouseEvent<HTMLDivElement>) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getTheme = (): string | null => localStorage.getItem("theme");

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(() => getTheme());
  const [isDark, setIsDark] = useState<boolean>(() => theme === 'dark' || theme === null);

  const toggleTheme = async (event: MouseEvent<HTMLDivElement>) => {
    const newTheme = isDark ? 'light' : 'dark';

    const clipPath = [
      `circle(0px at ${ event.clientX }px ${ event.clientY }px)`,
      `circle(${
        Math.hypot(
          Math.max(event.clientX, window.innerWidth - event.clientX),
          Math.max(event.clientY, window.innerHeight - event.clientY)
        )
      }px at ${ event.clientX }px ${ event.clientY }px)`
    ];

    await (document as Document).startViewTransition(() => {}).ready;

    document.documentElement.animate(
      { clipPath: !isDark ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${ !isDark ? 'old' : 'new'}(root)`,
      }
    );

    setTheme(newTheme);
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (theme === null || !theme) setTheme('dark')

    if (!theme) return

    localStorage.setItem("theme", theme);
    document.documentElement.className = theme
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      { children }
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export { ThemeProvider, useTheme };
export type { ThemeContextType };

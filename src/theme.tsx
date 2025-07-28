import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const ThemeContext = createContext<{theme: Theme, toggle: () => void}>({theme: 'dark', toggle: () => {}});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

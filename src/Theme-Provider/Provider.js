import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

export function AppThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("MYAPP_THEME")
      ? localStorage.getItem("MYAPP_THEME")
      : "light"
  );

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const value = useMemo(() => {
    return { theme, switchTheme };
  });

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

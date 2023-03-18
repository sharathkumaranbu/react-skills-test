import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const value = useMemo(() => {
    return { theme, toggleTheme };
  });
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const toggleTheme = () => {
    let newTheme;
    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const value = useMemo(() => {
    return { theme, toggleTheme };
  });
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

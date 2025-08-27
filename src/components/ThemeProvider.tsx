import { createContext, useContext, useEffect, useState } from "react";

type Theme = "azul" | "oscuro" | "morado";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const validThemes: Theme[] = ["azul", "oscuro", "morado"];
    return validThemes.includes(savedTheme) ? savedTheme : "oscuro";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("theme-oscuro", "theme-azul", "theme-morado");
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
}

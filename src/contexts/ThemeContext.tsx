import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

interface ThemeContextInterface {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const defaultThemeContext: ThemeContextInterface = {
  theme: getInitialTheme(),
  setTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextInterface>(defaultThemeContext);

type Props = {
  initialTheme?: string;
  children: ReactNode;
};

export const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [theme, setTheme] = useState(defaultThemeContext.theme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

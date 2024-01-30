import { useEffect, useState } from "react";

const COLORS = {
  light: {
    containerBg: "bg-primary",
    buttonBg: "bg-pale",
    lightIconColor: "text-black",
    darkIconColor: "text-pale",
  },
  dark: {
    containerBg: "bg-pale",
    buttonBg: "bg-primary",
    lightIconColor: "text-black",
    darkIconColor: "text-pale",
  },
};

type ColorKeys = keyof typeof COLORS;

const ThemeSwitcher = (props: any) => {
  const [theme, setTheme] = useState<ColorKeys>("light");

  useEffect(() => {
    const localTheme = localStorage?.getItem("theme") as ColorKeys;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`flex justify-between gap-1 p-1 ${COLORS[theme].containerBg}`}
    >
      <button
        type="button"
        className={`flex h-8 w-8 items-center justify-center p-2 ${theme === "light" ? COLORS[theme].buttonBg : ""}`}
        onClick={() => setTheme("light")}
      >
        {props.lightIcon}
      </button>
      <button
        type="button"
        className={`flex h-8 w-8 items-center justify-center p-2 ${theme === "dark" ? COLORS[theme].buttonBg : ""}`}
        onClick={() => setTheme("dark")}
      >
        {props.darkIcon}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

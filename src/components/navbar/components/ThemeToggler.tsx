import { useCallback, useEffect, useState } from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "../../../assets/icons";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system");
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const themeOption = [
    {
      icon: <SunIcon />,
      name: "light",
    },
    {
      icon: <MoonIcon />,
      name: "dark",
    },
    {
      icon: <DesktopIcon />,
      name: "system",
    },
  ];

  const onWindowMath = useCallback(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery.matches, element.classList]);

  onWindowMath();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMath();
        break;
    }
  }, [element.classList, onWindowMath, theme]);

  return (
    <div>
      <div className="flex gap-2 text-black bg-slate-200 dark:bg-slate-700 p-2 rounded-md">
        {themeOption.map((item) => (
          <button
            key={item.name}
            onClick={() => setTheme(item.name)}
            className={`p-1 rounded-md transition-all dark:text-white ${
              theme === item.name ? "bg-slate-100 dark:bg-slate-500" : ""
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggler;

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function DarkMode() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col justify-end items-center mr-4">
            <label
                htmlFor="theme"
                className={"mb-2 text-sm font-medium " + ((theme === "dark") ? "text-white" : "text-gray-900")}
                style={{ width: "75px" }}
            >
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </label>
            <svg 
                id="theme"
                xmlns="http://www.w3.org/2000/svg"
                fill={theme === "dark" ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={theme === "dark" ? undefined : 1.5}
                stroke={theme === "dark" ? undefined : "currentColor"}
                className="size-10"
                onClick={() =>
                    //localStorage.setItem("cacheTheme", JSON.stringify(theme === "dark" ? "light" : "dark")) || It works but it will be more clear if i save it on the context where i have the localStorage for the theme
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
            >
                <path 
                    fillRule={theme === "dark" ? "evenodd" : undefined}
                    clipRule={theme === "dark" ? "evenodd" : undefined}
                    strokeLinecap={theme === "dark" ? undefined : "round"}
                    strokeLinejoin={theme === "dark" ? undefined : "round"}
                    d={theme === "dark" ?
                        "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" :
                        "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    }
                />
            </svg>
        </div>
    )
}
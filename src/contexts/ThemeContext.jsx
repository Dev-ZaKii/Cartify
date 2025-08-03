import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Theme styles
const themes = {
  theme1: {
    name: "theme1",
    backgroundColor: "#f5f5f5",
    textColor: "#333",
    fontFamily: "Arial, sans-serif",
    styles: {
      card: "border p-4 rounded shadow hover:shadow-lg mb-4",
      img: "w-full h-48 object-contain mb-2",
      title: "text-lg font-semibold mb-1",
      category: "text-sm text-gray-600 mb-1",
      price: "text-green-600 font-bold text-base",
      description: "text-sm text-gray-500 mt-2",
      button:
        "mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
      tooltip:
        "pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 mt-2 w-max max-w-xs bg-gray-700 text-white text-xs rounded px-3 py-2 shadow-lg whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity duration-200",
    },
  },
  theme2: {
    name: "theme2",
    backgroundColor: "#121212",
    textColor: "#ffffff",
    fontFamily: '"Arial Black", Arial, sans-serif',
    styles: {
      card: "border-2 border-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 mb-8 transition-shadow duration-300 bg-gray-900",
      img: "w-full h-56 object-contain mb-4",
      title: "text-xl font-bold mb-2",
      category: "text-base text-gray-300 mb-2",
      price: "text-green-400 font-extrabold text-lg",
      description: "text-sm text-gray-500 mt-2",
      button:
        "mt-4 px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition font-semibold shadow-md",
      tooltip:
        "pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 mt-2 w-max max-w-xs bg-purple-900 text-purple-200 text-xs rounded-lg px-4 py-2 shadow-2xl whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-purple-500",
    },
  },
  theme3: {
    name: "theme3",
    backgroundColor: "#dadf7aff",
    textColor: "#444",
    fontFamily: '"Pacifico", cursive',
    styles: {
      card: "border-4 border-yellow-300 p-3 rounded-2xl shadow-md hover:shadow-xl mb-6 bg-yellow-50",
      img: "w-full h-40 object-contain mb-6",
      title: "text-2xl font-pacifico mb-2",
      category: "text-md text-yellow-700 mb-2",
      price: "text-green-700 font-bold text-xl",
      description: "text-sm text-gray-500 mt-2",
      button:
        "mt-4 px-6 py-2 bg-yellow-400 text-yellow-900 rounded-xl hover:bg-yellow-300 transition font-pacifico shadow",
      tooltip:
        "pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 mt-2 w-max max-w-xs bg-yellow-200 text-yellow-900 text-xs rounded-xl px-4 py-2 shadow-lg whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-yellow-400 font-pacifico",
    },
  },
};

// Load Google Font for Theme 3
const loadGoogleFont = (fontName) => {
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
    / /g,
    "+"
  )}&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

// Provider component
export const ThemeProvider = ({ children }) => {
  // Load the saved theme from localStorage or default to theme1
  const savedTheme = JSON.parse(localStorage.getItem("theme")) || themes.theme1;
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    if (theme.name === "theme3") {
      loadGoogleFont("Pacifico");
    }
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;
    document.body.style.fontFamily = theme.fontFamily;
  }, [theme]);

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      // Update the theme state and save it to localStorage
      setTheme(themes[themeName]);
      localStorage.setItem("theme", JSON.stringify(themes[themeName]));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);

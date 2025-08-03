import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Theme styles
const themes = {
  theme1: {
    name: "theme1",
    backgroundColor: "#f5f5f5",
    textColor: "#333",
    fontFamily: "Arial, sans-serif",
    layout: "minimal",
  },
  theme2: {
    name: "theme2",
    backgroundColor: "#121212",
    textColor: "#ffffff",
    fontFamily: "Georgia, serif",
    layout: "sidebar",
  },
  theme3: {
    name: "theme3",
    backgroundColor: "#f0f8ff",
    textColor: "#444",
    fontFamily: '"Pacifico", cursive',
    layout: "card",
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
  const [theme, setTheme] = useState(themes.theme1);

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
      setTheme(themes[themeName]);
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

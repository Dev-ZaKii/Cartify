import { Routes, Route } from "react-router-dom";

import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const MainContent = () => {
  const { theme } = useTheme();
  // left padding if sidebar is visible
  return (
    <div className={`${theme.name === "theme2" ? "pl-48" : ""} mt-16`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Navigation />
      <MainContent />
    </ThemeProvider>
  );
};

export default App;

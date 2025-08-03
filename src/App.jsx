import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold"> 🛒 Cartify</h1>
      <select
        className="text-black"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;

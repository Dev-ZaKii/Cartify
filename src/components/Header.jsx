import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-30 h-16">
      <h1 className="text-xl font-bold"> 🛒 Cartify</h1>
      <select
        className="text-black"
        value={theme.name}
        onChange={(e) => switchTheme(e.target.value)}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;

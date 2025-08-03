import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Navigation = () => {
  const { theme } = useTheme();

  if (theme.name === "theme2") {
    // Sidebar for theme2
    return (
      <nav className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-48 bg-gray-900 flex flex-col items-start py-4 px-4 space-y-6 shadow-lg z-20 overflow-y-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-gray-200"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-gray-200"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-gray-200"
          }
        >
          Contact
        </NavLink>
      </nav>
    );
  }

  // Horizontal navbar for other themes
  return (
    <nav className="flex justify-center space-x-6 bg-gray-100 py-4 mt-16">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-center space-x-6 bg-gray-100 py-4">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import jop from "../assets/joop.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo and Company Name */}
      <div className="flex items-center gap-3">
        <img src={jop} alt="Company Logo" className="w-14" />
        <h1 className="text-xl font-bold text-indigo-600">JobFinder</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
          <li><Link to="/job-list" className="hover:text-indigo-600">Jobs</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
          <li><Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Login</Link></li>
        </ul>

        {/* Mobile Menu (Hamburger Icon and Dropdown) */}
        <div className="md:hidden flex items-center">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-indigo-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown Menu (Visible when menu is open) */}
          {isMenuOpen && (
            <ul className="absolute right-0 top-16 bg-white shadow-lg rounded-lg py-4 px-6 text-gray-700 w-48">
              <li><Link to="/" className="block hover:text-indigo-600 py-2">Home</Link></li>
              <li><Link to="/job-list" className="block hover:text-indigo-600 py-2">Jobs</Link></li>
              <li><Link to="/contact" className="block hover:text-indigo-600 py-2">Contact</Link></li>
              <li><Link to="/login" className="block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Login</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
